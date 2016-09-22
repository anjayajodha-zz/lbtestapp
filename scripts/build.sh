npm install
mocha ./test/test.js
azure group create lbapp$BUILD_NUMBER -l "westus"
chmod +x ./deployment/deploy.sh
cd ./deployment
./deploy.sh -t "72278c0d-4491-4d7e-a9d8-96fe9aa648b9" -p lbapp -l "westus" -q lbdeployment01
cd ..
azure network public-ip show testpublicip -g lbtest --json > ipaddress.json
mocha test ./test/publictest.js
azure group delete -n lbapp$BUILD_NUMBER -q
