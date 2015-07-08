var myModel=angular.module("myModel",[]);
myModel.directive('hello',function($http,$q){
	 var imgURL, delay, templateURL;

    delay = $q.defer();
    templateURL = 'hello.html';
    imgURL = 'emoji.json';

    //获得列表
    $http.get(imgURL).success(function(data) {
        return delay.resolve(data);
    });
	
	return{
		restrict:"AEMC",
		templateUrl:"hello.html",
		transclude:true,
		link:function(scope,element,attr){
			delay.promise.then(function(data) {
                $http.get(templateURL).success(function(template) {
                    scope.values = data;
                 })
            })
			// console.error('error');
 			function addEmoji(ele){
 				//console.log(value.dataGifurl);
               var img=document.createElement('img');
               var imgUrl=ele.src;
               img.setAttribute('src',imgUrl);
               //var div=document.getElementById('div1');
               //element.parent().append(img);
               div1.appendChild(img);
            }

			element.bind('click',function(value){
				addEmoji(value.toElement);
				console.log(value.toElement.src);
			})
		}
	}
});