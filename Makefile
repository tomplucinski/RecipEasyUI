###############################################
# INTEGRATION TASK SUITE
###############################################

run-prod:
	$(info ~~~~~~~~~~ STARTING PROJECT IN PRODUCTION MODE ~~~~~~~~~)
	npm start

run-dev:
	$(info ~~~~~~~~~~ STARTING PROJECT IN DEVELOP MODE ~~~~~~~~~)
	npm run dev

install:
	$(info ~~~~~~~~~~ INSTALLING DEPENDENCIES ~~~~~~~~~)
	npm install
