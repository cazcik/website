#!/bin/bash

set -e

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

command_exists() {
    command -v "$1" >/dev/null 2>&1
}

show_usage() {
    echo "Usage: $0 --target HOST --destination DIR --user USER --key KEY --assets ASSETS_DIR"
    echo ""
    echo "Arguments:"
    echo "  --target       Remote host (e.g., example.com or 192.168.1.100)"
    echo "  --destination  Remote directory path (e.g., /var/www/html)"
    echo "  --user         SSH username"
    echo "  --key          Path to private key file"
    echo "  --assets       Local assets directory to deploy"
    echo ""
    echo "Example:"
    echo "  $0 --target myserver.com --destination /var/www/html --user deploy --key ~/.ssh/id_rsa --assets ./dist"
}

parse_arguments() {
    while [[ $# -gt 0 ]]; do
        case $1 in
            --target)
                TARGET="$2"
                shift 2
                ;;
            --destination)
                DESTINATION="$2"
                shift 2
                ;;
            --user)
                USER="$2"
                shift 2
                ;;
            --key)
                KEY="$2"
                shift 2
                ;;
            --assets)
                ASSETS="$2"
                shift 2
                ;;
            -h|--help)
                show_usage
                exit 0
                ;;
            *)
                print_error "unknown option: $1"
                show_usage
                exit 1
                ;;
        esac
    done
}

validate_arguments() {
    local missing_args=()
    
    if [ -z "$TARGET" ]; then
        missing_args+=("--target")
    fi
    
    if [ -z "$DESTINATION" ]; then
        missing_args+=("--destination")
    fi
    
    if [ -z "$USER" ]; then
        missing_args+=("--user")
    fi
    
    if [ -z "$KEY" ]; then
        missing_args+=("--key")
    fi
    
    if [ -z "$ASSETS" ]; then
        missing_args+=("--assets")
    fi
    
    if [ ${#missing_args[@]} -gt 0 ]; then
        print_error "missing required arguments: ${missing_args[*]}"
        show_usage
        exit 1
    fi
}

validate_prerequisites() {
    if ! command_exists rsync; then
        print_error "rsync is not installed. please install rsync first."
        exit 1
    fi
    
    if ! command_exists ssh; then
        print_error "ssh is not installed. please install ssh first."
        exit 1
    fi
    
    if [ ! -f "$KEY" ]; then
        print_error "private key file not found: $KEY"
        exit 1
    fi
    
    if [ ! -d "$ASSETS" ]; then
        print_error "assets directory not found: $ASSETS"
        exit 1
    fi
}

test_connection() {
    print_status "testing ssh to $USER@$TARGET..."
    
    if ssh -i "$KEY" -o ConnectTimeout=10 -o BatchMode=yes "$USER@$TARGET" "echo 'ssh connection successful'" > /dev/null 2>&1; then
        print_success "ssh connection established"
    else
        print_error "failed to establish ssh connection to $USER@$TARGET"
        print_error "please check your credentials and network connectivity"
        exit 1
    fi
}

check_remote_rsync() {
    print_status "validating remote is ready..."
    
    if ssh -i "$KEY" -o ConnectTimeout=10 -o BatchMode=yes "$USER@$TARGET" "command -v rsync >/dev/null 2>&1" > /dev/null 2>&1; then
        print_success "remote host is ready"
    else
        print_error "rsync is not installed on remote host $TARGET"
        print_error "please install rsync on the remote host before deploying"
        exit 1
    fi
}

deploy_assets() {
    print_status "deploying assets from $ASSETS to $USER@$TARGET:$DESTINATION..."
    
    print_status "validating destination..."
    ssh -i "$KEY" "$USER@$TARGET" "mkdir -p $DESTINATION" > /dev/null 2>&1
    
    print_status "syncing files..."
    rsync -avz --delete \
        --chown=www-data:www-data \
        -e "ssh -i $KEY" \
        "$ASSETS/" \
        "$USER@$TARGET:$DESTINATION/" > /dev/null 2>&1
    
    if [ $? -eq 0 ]; then
        print_success "deployment completed successfully"
        
        print_status "deployment statistics:"
        FILE_COUNT=$(find "$ASSETS" -type f | wc -l)
        print_status "files deployed: $FILE_COUNT"
        
        ASSETS_SIZE=$(du -sh "$ASSETS" | cut -f1)
        print_status "assets size: $ASSETS_SIZE"
        
        print_status "remote location: $USER@$TARGET:$DESTINATION"
    else
        print_error "deployment failed!"
        exit 1
    fi
}

cleanup() {
    print_status "deployment process completed"
}

trap cleanup EXIT

main() {
    print_status "beginning deployment process..."
    
    parse_arguments "$@"
    
    validate_arguments
    
    validate_prerequisites
    
    test_connection
    
    check_remote_rsync
    
    deploy_assets
    
    print_success "deployment process completed successfully"
}

main "$@"