setup:
	$(MAKE) decrypt CONFIG_NAME=development

decrypt:
	openssl enc -des3 -d -in config/$(CONFIG_NAME).json.enc -out config/$(CONFIG_NAME)_template.json
	sed s/\<username\>/`whoami`/ config/$(CONFIG_NAME)_template.json > config/$(CONFIG_NAME).json

encrypt:
	openssl enc -des3 -in config/$(CONFIG_NAME)_template.json -out config/$(CONFIG_NAME).json.enc
