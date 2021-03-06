import marked from 'marked';

class ArticleCtrl {
	constructor(article, User, $sce, $rootScope) {
		'ngInject';


		this.article = article;


		$rootScope.setPageTitle(this.article.title);
		this.article.body = $sce.trustAsHtml(marked(this.article.body, {
			sanitize: true
		}));
	}
}


export default ArticleCtrl;