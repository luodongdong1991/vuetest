//vue.config.js
module.exports = {
	//把项目放在dist子目录下
	publicPath: process.env.NODE_ENV === 'production'
		? '/dist/'
		: '/',
	devServer: {
		hotOnly: true,
		proxy: {
			'/api': {
				//用这个url 发送请求呢;
				target: 'http://localhost:4000',
				ws: true,
				changeOrigin: true,
				pathRewrite: {
					'^/api': ''  //这里理解成用 /apis 代替target里面的地址                    
				}
			}
		}
	},
	//关闭eslint;
	lintOnSave: false,
	//热加载
	chainWebpack: config => {
		//修复HMR;
		config.resolve.symlinks(true);
	}
}