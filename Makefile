.PHONY: css
css:
	mkdir -p bundle
	postcss --watch --config config/postcss_config.js --use autoprefixer --use postcss-import css/app.css --output bundle/app.css

.PHONY: clean
clean:
	rm -r bundle
