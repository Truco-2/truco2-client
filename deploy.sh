#!/bin/sh

APP_NAME=$1 APP_PORT=$2 APP_MODE=$3 docker compose -f docker-compose.server.yml up -d --build