
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

	var id = "344995385528425";		// 질병관리본부 페이지 아이디
	/*var fields = "id,name,video_broadcasts.limit(1){description,broadcast_start_time,permalink_url},posts.limit(8){message,description,created_time,picture,permalink_url}";*/
	var fields = "id,name,posts.limit(8){message,description,created_time,picture,permalink_url}";
	var token = "EAAabx5mTb2UBAILBMlfkTwMo0l8VZBoSwpOQNyOUNHTUk51rUunYz0QEvJLOzbLbpKnHzT6L6ETZAtZAzJsdPxbfMWLTBxHacyZAVZCF1Fn3cbowaiU9YziFqvciGHxUa6pwXdIFZB5oOT4zI3Y9VP0V2i5NSF9IXUVhe45fhseAZDZD";
	
	var broadcast_html = "";
	var html = "";
	
	// 페이지북 포스트 내용을 graph api를 이용하여 jsonp형식으로 받아온다.
	$.ajax({
		url : "https://graph.facebook.com/v2.10/"+id+"?fields="+fields+"&access_token="+token,
		type:"POST",
		dataType: "jsonp",
		success: function(msg){
			// 라이브방송은 몇몇 브라우저에서 posts로는 불러오지 못해 video_broadcasts 한건으로 불러옴
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
				broadcast_message = "[#따스아리_라이브]";
				broadcast_description = "[#따스아리_라이브] 방송 보러가기";
			//}

			// 제목을 50자로 자른다.
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

			broadcast_html += '<a href='+broadcast_link+'  target="_blank" title="새창 - 페이스북"><h3>'+broadcast_message+'</h3>';
			broadcast_html += '<span>'+broadcast_date+'</span>';
			broadcast_html += '<p>'+broadcast_description+'</p></a>';

			for(var i = 0; i < 8 ; i++){
				var message		= "";
				var description 	= "";
				var date			= "";
				var time 			= "";
				
				var link = "";
				
				var tempText		= "질병관리본부 facebook 소식";
				
				if(msg.posts.data[i].message != null){
					message = msg.posts.data[i].message;
				}else{
					if(msg.posts.data[i].description != null){
						message = msg.posts.data[i].description;
					}else{
						message = tempText;
					}
				}

				// 제목을 50자로 자른다.
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
				
				// 브로드캐스트 방송 게시글과 동일한 링크가 아니면,
				if(broadcast_link != link ){
					if( broadcast_time > time ){
						html += broadcast_html;
						html += '<a href='+link+'  target="_blank" title="새창 - 페이스북"><h3>'+message+'</h3>';
						html += '<span>'+date+'</span>';
						html += '<p>'+description+'</p>'+'</a>';
						
						broadcast_html = "";	// 한번 넣었으니까 초기화?
						broadcast_add_yn = "Y";
					}else{
						html += '<a href='+link+'  target="_blank" title="새창 - 페이스북"><h3>'+message+'</h3>';
						html += '<span>'+date+'</span>';
						html += '<p>'+description+'</p>'+'</a>';
					}
					
					$(".snsf > div").eq(i+4).html(html);
				}else{
					// 브로드캐스트 방송 게시글과 동일한 링크가 존재하면 체크값을 Y로 넣어준다.
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

	var twitterPrm = null;	// 호출 시 정보가 들어갈 변수

	twitterPrm = {
		api : 'https://api.twitter.com/1.1/statuses/user_timeline.json',	// 트위터 api주소
		count : 8, 			// 불러올 개수
		include_rts : false, 	// 
		callback : 'loadTwtterData', 	// 호출함수
		
		/* 아래 보건복지부 트위터 등록 키 값 */
		consumerKey : 'xNPUb4czUegnVOhwyHpxHUSd7',
		consumerSecret : '1hPg8wU4VYruvqmhjmTiom550u784t0SeaB6nh95MZE7ehIF7N',
		accessToken : '198759184-3Q4rdwLIsbEPszyHpQnSk9iuD4vgIIos5qOp5pd2',
		tokenSecret :  'pIMFA8JrNH4z8GdvPbUqNtKS8myvJ1A33dr8GvalWm6T8'
		
	};
	//oauth인증
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
	
	// OAuth 인증
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
	
	// 타임라인 개수만큼 반복처리
	$(data).each(function(i, obj){
		var text 		= obj.text;			// 본문 내용
		var date 		= obj.created_at;	// 게시일자
		// var date2 	= relative_time(obj.created_at);	// 게시일자(형식변경)
		var mediaurl = "";				// 미디어파일 url

		// 미디어가 존재하지 않으면 변수에는 값을 주지 않는다.
		if(typeof obj.entities.media=='undefined'){
			mediaurl = "";
		}else{
			// 미디어가 존재하면 해당 url경로를 넣어준다.
			if(obj.entities.media[0].type == "photo"){
				// 미디어 형식이 사진인 경우에만 값을 넣어준다.
				mediaurl = obj.entities.media[0].media_url;
			}
		}
	
		var year = date.substring(26, 30)+"-";		// 년도, 뒤에 구분자 / 표기
		var month = date.substring(4, 7);			// 월
		var day =  date.substring(8, 10);			// 일
			
		// 월이 영문으로 표기되어 있으므로 숫자로 변경한다. 구분자는 / 표기
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
			
		// 년/월/일 로 합쳐서 변수에 넣자
		var twPubDate = year+""+month+""+day;	
		
		var cont_text_title = "";
		
		if(text.length > 45){
			cont_text_title = text.substr(0,45)+"...";		// 본문 내용을 글자 수 30자로 자르고, 뒤에 ...을 붙인다.
		}else{
			cont_text_title = text;
		}
		
		var cont_text = "";
		
		if(text.length > 130){
			cont_text = obj.text.substr(0,130)+"...";		// 본문 내용을 글자 수 130자로 자르고, 뒤에 ...을 붙인다.
		}else{
			cont_text = text;
		}
		
		html="";
		
		html += '<a href="http://twitter.com/'+ obj.user.screen_name +'/statuses/'+ obj.id_str +'" target="_blank" title="새창 - 트위터"><h3>'+cont_text_title+'</h3>';
		html += '<span>'+twPubDate+'</span>';
		html += '<p>'+cont_text+'</p></a>';
		
		$(".snst > div").eq(i+4).html(html);

		if(i==7){
			// 10이되면 종료, 
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
	
	//$(".snst").append(html);		// 화면에 뿌려준다..

}

