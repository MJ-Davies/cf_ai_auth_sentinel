#!/usr/bin/env bash

# This script runs the client and server simultaneously on macOS/Linux.
# Save as run.sh and make executable with: chmod +x run.sh

# Run client
(
  cd client || exit
  npm run dev &
)

# Run server
(
  cd server || exit
  npx wrangler dev &
)

# Keep script alive so logs stay visible
wait