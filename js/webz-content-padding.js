
	var webzContent = function(content) {
		
		if (window.chrome && chrome.runtime && chrome.runtime.id) {
			
			content["pageTitle"] = ".: New Tab :.";
			
			content["navLinks"][0] = {"url": "https://www.youtube.com/", "title": "YouTube"};
			content["navLinks"][2] = {"url": "https://github.com/teremterem/webz-platform/issues/1", "title": "Todo"};
			
			var sections = content["sections"];
			sections.splice(0, 0, {
						"title": "pull WebZ from origin",
						"titleUrl": "https://www.pinterest.com/pin/409475791095970527/",
					},{
						"title": "Apache Maven - Sonatype",
						"titleUrl": "http://central.sonatype.org/pages/apache-maven.html#gpg-signed-components",
					});
			sections.pop();
			sections.pop();
			sections.pop();
			sections.pop();
			sections.push({
						"title": "Sonatype OSS",
						"titleUrl": "https://oss.sonatype.org",
					},{
						"title": "\"org.terems\" Snapshots",
						"titleUrl": "https://oss.sonatype.org/content/repositories/snapshots/org/terems/",
					},{
						"title": "Miscellaneous (pins)",
						"titleUrl": "https://www.pinterest.com/teremterem/miscellaneous/",
					},{
						"title": "Internal (pins)",
						"titleUrl": "https://www.pinterest.com/teremterem/internal/",
					},{
						"title": "local Artifactory",
						"titleUrl": "http://localhost:8081/",
					});
			
			var dialogButtons = content["dialogButtons"];
			dialogButtons[0] = {
				"text": "<h1 style='width:100%;text-align:center'>Platform</h1><p style='width:100%;text-align:center'>-&nbsp;Internal Issues&nbsp;-</p>",
				"url": "https://github.com/teremterem/webz-platform/issues?q=is%3Aissue+is%3Aopen+sort%3Acreated-asc",
			};
			dialogButtons[1]["url"] = "http://mail.terems.org/";
			dialogButtons.pop();
			dialogButtons.push({
						"text": "<p style='width:100%;text-align:center'>MAQoTA</p>",
						"url": "http://www.maqota.org/",
						//"text": "<p style='width:100%;text-align:center'><i>Sass</i></p>",
						//"url": "http://sass-lang.com/documentation/file.SASS_REFERENCE.html",
						//"text": "<p style='width:100%;text-align:center'><i>Lingvo</i></p>",
						//"url": "http://www.lingvo.ua/ru",
					});
		}
		
		window.rivetsContext = {webz: content};
	};
