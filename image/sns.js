
$(function(){	
	//loadFaceBookApi();
	//loadTwitter();
	//loadTwitterApi();
});

function loadYouTube() {
	
	/*$(".snsf").hide();
	$(".snsy").show();
	$(".snst").hide();
	
	$("#snsf").attr('class','sns_facebook');
	$("#snsy").attr('class','sns_youtuve_on');
	$("#snst").attr('class','sns_twitter');*/
	
	var url = "https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=UCa7-3Zvxg-5Rfxgu3RQY_gw&maxResults=8&key=AIzaSyDkeaXe9pLrGllYgpHqP7xHjrpBdAFrh6I";

	$.ajax({
		type		: "POST",
		url			: url,
		dataType	: "jsonp",
		jsonpCallback	: "youtubeApi",
		success	: function(data){
		},error : function(xhr) {
		}
	});
}

function youtubeApi (data) {
	var result = eval(data)
	
	var items = result.items;
	
	$.each(items, function(idx){
		var item = items[idx];
		
		var snippet = item.snippet;		
		
		var thumbnail = snippet.thumbnails.medium.url; //$(item).find('thumbnail').find('sqDefault');
		var id = item.id.videoId; //$(item).find('player').find('sqDefault');
		var player = "https://www.youtube.com/watch?v="+id;
		var title = snippet.title; //$(item).find('title');
		var description = snippet.description;//$(item).find('description');
		var uploaded = snippet.publishedAt.substring(0, 10);
		
		
		var html = "";
		
		html += '<a href="' + player + '" target="_blank" class="youtube">';
		html += '<div><img src="' + thumbnail + '" alt="' + title + '"/></div>';
		html += '<h3>' + title + '</h3>';
		html += '<span>'+uploaded+'</span></a>';
		

		$(".snsy > div").eq(idx+4).html(html);
	});
	
	$(".snsy > div").eq(0).html($(".snsy > div").eq(8).html());
	$(".snsy > div").eq(1).html($(".snsy > div").eq(9).html());
	$(".snsy > div").eq(2).html($(".snsy > div").eq(10).html());
	$(".snsy > div").eq(3).html($(".snsy > div").eq(11).html());
	
	$(".snsy > div").eq(12).html($(".snsy > div").eq(4).html());
	$(".snsy > div").eq(13).html($(".snsy > div").eq(5).html());
	$(".snsy > div").eq(14).html($(".snsy > div").eq(6).html());
	$(".snsy > div").eq(15).html($(".snsy > div").eq(7).html());
	
}


function loadFaceBookApi(){
	
	/*$(".snsf").show();
	$(".snsy").hide();
	$(".snst").hide();
	
	$("#snsf").attr('class','sns_facebook_on');
	$("#snsy").attr('class','sns_youtuve');
	$("#snst").attr('class','sns_twitter');*/
		
	//$(".snsf").empty();

	var id = "344995385528425";		// ?????????????????? ????????? ?????????
	/*var fields = "id,name,video_broadcasts.limit(1){description,broadcast_start_time,permalink_url},posts.limit(8){message,description,created_time,picture,permalink_url}";*/
	var fields = "id,name,posts.limit(8){message,description,created_time,picture,permalink_url}";
	var token = "EAAabx5mTb2UBAILBMlfkTwMo0l8VZBoSwpOQNyOUNHTUk51rUunYz0QEvJLOzbLbpKnHzT6L6ETZAtZAzJsdPxbfMWLTBxHacyZAVZCF1Fn3cbowaiU9YziFqvciGHxUa6pwXdIFZB5oOT4zI3Y9VP0V2i5NSF9IXUVhe45fhseAZDZD";
	
	var broadcast_html = "";
	var html = "";
	
	// ???????????? ????????? ????????? graph api??? ???????????? jsonp???????????? ????????????.
	$.ajax({
		url : "https://graph.facebook.com/v2.10/"+id+"?fields="+fields+"&access_token="+token,
		type:"POST",
		dataType: "jsonp",
		success: function(msg){
			// ?????????????????? ?????? ?????????????????? posts?????? ???????????? ?????? video_broadcasts ???????????? ?????????
			var broadcast_message		= "";
			var broadcast_description 	= "";
			var broadcast_date			= "";
			var broadcast_time		= "";
			var broadcast_link = "";
			
			var broadcast_chk = "";
			var broadcast_add_yn = "";
			
			//if(msg.video_broadcasts.data[0].description != null){
			//	broadcast_message = msg.video_broadcasts.data[0].description;
			//	broadcast_description = msg.video_broadcasts.data[0].description;
			//	}else{
				broadcast_message = "[#????????????_?????????]";
				broadcast_description = "[#????????????_?????????] ?????? ????????????";
			//}

			// ????????? 50?????? ?????????.
			if(broadcast_message.length > 45){
				broadcast_message = broadcast_message.substring(0, 45) + '...';
			}
				
			if(broadcast_description.length > 130){
				broadcast_description = broadcast_description.substring(0, 130) + '...';
			}

			//broadcast_date = msg.video_broadcasts.data[0].broadcast_start_time.substring(0, 10);
			//broadcast_time = msg.video_broadcasts.data[0].broadcast_start_time.substring(0, 16);
			//broadcast_link = "https://www.facebook.com" + msg.video_broadcasts.data[0].permalink_url;
			//broadcast_link = "https://www.facebook.com/"+broadcast_link;
			
			//msg.posts.data[i].message;			

			broadcast_html += '<a href='+broadcast_link+'  target="_blank" title="?????? - ????????????"><h3>'+broadcast_message+'</h3>';
			broadcast_html += '<span>'+broadcast_date+'</span>';
			broadcast_html += '<p>'+broadcast_description+'</p></a>';

			for(var i = 0; i < 8 ; i++){
				var message		= "";
				var description 	= "";
				var date			= "";
				var time 			= "";
				
				var link = "";
				
				var tempText		= "?????????????????? facebook ??????";
				
				if(msg.posts.data[i].message != null){
					message = msg.posts.data[i].message;
				}else{
					if(msg.posts.data[i].description != null){
						message = msg.posts.data[i].description;
					}else{
						message = tempText;
					}
				}

				// ????????? 50?????? ?????????.
				if(message.length > 45){
					message = message.substring(0, 45) + '...';
				}
					
				if(msg.posts.data[i].description != null){
					description = msg.posts.data[i].description;
				}else{
					if(msg.posts.data[i].message != null){
						description = msg.posts.data[i].message;
					}else{
						description = tempText;
					}
				}
				
				//console.log("1"+description+"2");
				
				if(description==" "||description==null){
					description = msg.posts.data[i].message;
				}
				
				if(description.length > 130){
					description = description.substring(0, 130) + '...';
				}

				date = msg.posts.data[i].created_time.substring(0, 10);
				time = msg.posts.data[i].created_time.substring(0, 16);
				link = msg.posts.data[i].permalink_url;
				
				html = "";
				
				// ?????????????????? ?????? ???????????? ????????? ????????? ?????????,
				if(broadcast_link != link ){
					if( broadcast_time > time ){
						html += broadcast_html;
						html += '<a href='+link+'  target="_blank" title="?????? - ????????????"><h3>'+message+'</h3>';
						html += '<span>'+date+'</span>';
						html += '<p>'+description+'</p>'+'</a>';
						
						broadcast_html = "";	// ?????? ??????????????? ??????????
						broadcast_add_yn = "Y";
					}else{
						html += '<a href='+link+'  target="_blank" title="?????? - ????????????"><h3>'+message+'</h3>';
						html += '<span>'+date+'</span>';
						html += '<p>'+description+'</p>'+'</a>';
					}
					
					$(".snsf > div").eq(i+4).html(html);
				}else{
					// ?????????????????? ?????? ???????????? ????????? ????????? ???????????? ???????????? Y??? ????????????.
					broadcast_chk = "Y";
				}
				
				if(broadcast_add_yn == "Y" && broadcast_chk != "Y" ){
					if(i == 8){
						break;
					}
				}
			}
			
			$(".snsf > div").eq(0).html($(".snsf > div").eq(8).html());
			$(".snsf > div").eq(1).html($(".snsf > div").eq(9).html());
			$(".snsf > div").eq(2).html($(".snsf > div").eq(10).html());
			$(".snsf > div").eq(3).html($(".snsf > div").eq(11).html());
			
			$(".snsf > div").eq(12).html($(".snsf > div").eq(4).html());
			$(".snsf > div").eq(13).html($(".snsf > div").eq(5).html());
			$(".snsf > div").eq(14).html($(".snsf > div").eq(6).html());
			$(".snsf > div").eq(15).html($(".snsf > div").eq(7).html());
			
			//$(".snsf").append(html);	
		}
	});
}

var loadTwCnt = 0;

function loadTwitter(){
	
	/*$(".snsf").hide();
	$(".snsy").hide();
	$(".snst").show();
	
	$("#snsf").attr('class','sns_facebook');
	$("#snsy").attr('class','sns_youtuve');
	$("#snst").attr('class','sns_twitter_on');*/

	if(loadTwCnt > 0 ){
		loadTwitterApi();
	}else{
		loadTwCnt = 1;
		
		var script1 = null;
		var script2= null;
		
		script1 = document.createElement('script');
		script1.type = 'text/javascript';
		script1.src = '/cdc/js/oauth.js';

		document.body.appendChild(script1);

		script2 = document.createElement('script');
		script2.type = 'text/javascript';
		script2.src ='/cdc/js/sha1.js';

		document.body.appendChild(script2);
		
		setTimeout('loadTwitterApi()',1000);
	}
}

function loadTwitterApi(){

	var twitterPrm = null;	// ?????? ??? ????????? ????????? ??????

	twitterPrm = {
		api : 'https://api.twitter.com/1.1/statuses/user_timeline.json',	// ????????? api??????
		count : 8, 			// ????????? ??????
		include_rts : false, 	// 
		callback : 'loadTwtterData', 	// ????????????
		
		/* ?????? ??????????????? ????????? ?????? ??? ??? */
		consumerKey : 'xNPUb4czUegnVOhwyHpxHUSd7',
		consumerSecret : '1hPg8wU4VYruvqmhjmTiom550u784t0SeaB6nh95MZE7ehIF7N',
		accessToken : '198759184-3Q4rdwLIsbEPszyHpQnSk9iuD4vgIIos5qOp5pd2',
		tokenSecret :  'pIMFA8JrNH4z8GdvPbUqNtKS8myvJ1A33dr8GvalWm6T8'
		
	};
	//oauth??????
	var oauthMessage = {
		method : "GET",
		action : twitterPrm.api,
		parameters : {
			count : twitterPrm.count,
			screen_name : twitterPrm.userId,
			callback : twitterPrm.callback,
			oauth_version : "1.0",
			oauth_signature_method : "HMAC-SHA1",
			oauth_consumer_key : twitterPrm.consumerKey,
			oauth_token : twitterPrm.accessToken
		}
	};
	
	// OAuth ??????
	OAuth.setTimestampAndNonce(oauthMessage);
	OAuth.SignatureMethod.sign(oauthMessage,{
		consumerSecret : twitterPrm.consumerSecret,
		tokenSecret : twitterPrm.tokenSecret
	});
	
	var twJsonPath = OAuth.addToURL(oauthMessage.action, oauthMessage.parameters);
	$.ajax({
		type : oauthMessage.method,
		url : twJsonPath,
		dataType : "jsonp",
		jsonp : false,
		cache : true
	});
}

function loadTwtterData(data){
	
	//$(".snst").empty();

	var html = "";
	
	// ???????????? ???????????? ????????????
	$(data).each(function(i, obj){
		var text 		= obj.text;			// ?????? ??????
		var date 		= obj.created_at;	// ????????????
		// var date2 	= relative_time(obj.created_at);	// ????????????(????????????)
		var mediaurl = "";				// ??????????????? url

		// ???????????? ???????????? ????????? ???????????? ?????? ?????? ?????????.
		if(typeof obj.entities.media=='undefined'){
			mediaurl = "";
		}else{
			// ???????????? ???????????? ?????? url????????? ????????????.
			if(obj.entities.media[0].type == "photo"){
				// ????????? ????????? ????????? ???????????? ?????? ????????????.
				mediaurl = obj.entities.media[0].media_url;
			}
		}
	
		var year = date.substring(26, 30)+"-";		// ??????, ?????? ????????? / ??????
		var month = date.substring(4, 7);			// ???
		var day =  date.substring(8, 10);			// ???
			
		// ?????? ???????????? ???????????? ???????????? ????????? ????????????. ???????????? / ??????
		if(month == "Jan"){
			month = "01-";
		}else if(month == "Feb"){
			month = "02-";
		}else if(month == "Mar"){
			month = "03-";
		}else if(month == "Apr"){
			month = "04-";
		}else if(month == "May"){
			month = "05-";
		}else if(month == "Jun"){
			month = "06-";
		}else if(month == "Jul"){
			month = "07-";
		}else if(month == "Aug"){
			month = "08-";
		}else if(month == "Sep"){
			month = "09-";
		}else if(month == "Oct"){
			month = "10-";
		}else if(month == "Nov"){
			month = "11-";
		}else if(month == "Dec"){
			month = "12-";
		}
			
		// ???/???/??? ??? ????????? ????????? ??????
		var twPubDate = year+""+month+""+day;	
		
		var cont_text_title = "";
		
		if(text.length > 45){
			cont_text_title = text.substr(0,45)+"...";		// ?????? ????????? ?????? ??? 30?????? ?????????, ?????? ...??? ?????????.
		}else{
			cont_text_title = text;
		}
		
		var cont_text = "";
		
		if(text.length > 130){
			cont_text = obj.text.substr(0,130)+"...";		// ?????? ????????? ?????? ??? 130?????? ?????????, ?????? ...??? ?????????.
		}else{
			cont_text = text;
		}
		
		html="";
		
		html += '<a href="http://twitter.com/'+ obj.user.screen_name +'/statuses/'+ obj.id_str +'" target="_blank" title="?????? - ?????????"><h3>'+cont_text_title+'</h3>';
		html += '<span>'+twPubDate+'</span>';
		html += '<p>'+cont_text+'</p></a>';
		
		$(".snst > div").eq(i+4).html(html);

		if(i==7){
			// 10????????? ??????, 
			return false;
		}
	});
	
	$(".snst > div").eq(0).html($(".snst > div").eq(8).html());
	$(".snst > div").eq(1).html($(".snst > div").eq(9).html());
	$(".snst > div").eq(2).html($(".snst > div").eq(10).html());
	$(".snst > div").eq(3).html($(".snst > div").eq(11).html());
	
	$(".snst > div").eq(12).html($(".snst > div").eq(4).html());
	$(".snst > div").eq(13).html($(".snst > div").eq(5).html());
	$(".snst > div").eq(14).html($(".snst > div").eq(6).html());
	$(".snst > div").eq(15).html($(".snst > div").eq(7).html());
	
	//$(".snst").append(html);		// ????????? ????????????..

}

