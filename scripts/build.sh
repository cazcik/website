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

cleanup() {
    print_status "cleaning up..."
    # todo: cleanup tasks
}

trap cleanup EXIT

main() {
    print_status "beginning site build..."
    
    if [ ! -f "package.json" ]; then
        print_error "pwd: $(pwd)"
        print_error "package.json not found. please run this script from the project root."
        exit 1
    fi
    
    if ! command_exists bun; then
        print_error "bun is not installed. please install bun first."
        exit 1
    fi
    
    print_status "installing dependencies..."
    bun install > /dev/null 2>&1
    if [ $? -eq 0 ]; then
        print_success "dependencies installed successfully"
    else
        print_error "failed to install dependencies"
        exit 1
    fi
    
    if [ -d "dist" ]; then
        print_status "cleaning previous build..."
        rm -rf dist
        print_success "previous build cleaned"
    fi
    
    print_status "building static site..."
    bun run build > /dev/null 2>&1
    
    if [ $? -eq 0 ]; then
        print_success "build completed successfully!"
        
        if [ -d "dist" ]; then
            print_status "build output location: ./dist"
            
            BUILD_SIZE=$(du -sh dist | cut -f1)
            print_status "build size: $BUILD_SIZE"
            
            print_status "build contents:"
            find dist -type f -name "*.html" -o -name "*.css" -o -name "*.js" | head -10 | while read file; do
                echo "  - $file"
            done
        else
            print_warning "build completed but dist directory not found"
        fi
    else
        print_error "build failed!"
        exit 1
    fi
    
    print_success "build process completed successfully"
}

main "$@"