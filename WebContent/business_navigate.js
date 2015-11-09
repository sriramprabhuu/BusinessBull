if(typeof YAHOO=="undefined"){var YAHOO={};}
YAHOO.namespace=function(){var a=arguments,o=null,i,j,d;for(i=0;i<a.length;i=i+1){d=a[i].split(".");o=YAHOO;for(j=(d[0]=="YAHOO")?1:0;j<d.length;j=j+1){o[d[j]]=o[d[j]]||{};o=o[d[j]];}}
return o;};YAHOO.log=function(msg,cat,src){var l=YAHOO.widget.Logger;if(l&&l.log){return l.log(msg,cat,src);}else{return false;}};YAHOO.init=function(){this.namespace("util","widget","example");if(typeof YAHOO_config!="undefined"){var l=YAHOO_config.listener,ls=YAHOO.env.listeners,unique=true,i;if(l){for(i=0;i<ls.length;i=i+1){if(ls[i]==l){unique=false;break;}}
if(unique){ls.push(l);}}}};YAHOO.register=function(name,mainClass,data){var mods=YAHOO.env.modules;if(!mods[name]){mods[name]={versions:[],builds:[]};}
var m=mods[name],v=data.version,b=data.build,ls=YAHOO.env.listeners;m.name=name;m.version=v;m.build=b;m.versions.push(v);m.builds.push(b);m.mainClass=mainClass;for(var i=0;i<ls.length;i=i+1){ls[i](m);}
if(mainClass){mainClass.VERSION=v;mainClass.BUILD=b;}else{YAHOO.log("mainClass is undefined for module "+name,"warn");}};YAHOO.env=YAHOO.env||{modules:[],listeners:[],getVersion:function(name){return YAHOO.env.modules[name]||null;}};YAHOO.lang={isArray:function(obj){if(obj&&obj.constructor&&obj.constructor.toString().indexOf('Array')>-1){return true;}else{return YAHOO.lang.isObject(obj)&&obj.constructor==Array;}},isBoolean:function(obj){return typeof obj=='boolean';},isFunction:function(obj){return typeof obj=='function';},isNull:function(obj){return obj===null;},isNumber:function(obj){return typeof obj=='number'&&isFinite(obj);},isObject:function(obj){return obj&&(typeof obj=='object'||YAHOO.lang.isFunction(obj));},isString:function(obj){return typeof obj=='string';},isUndefined:function(obj){return typeof obj=='undefined';},hasOwnProperty:function(obj,prop){if(Object.prototype.hasOwnProperty){return obj.hasOwnProperty(prop);}
return!YAHOO.lang.isUndefined(obj[prop])&&obj.constructor.prototype[prop]!==obj[prop];},extend:function(subc,superc,overrides){if(!superc||!subc){throw new Error("YAHOO.lang.extend failed, please check that "+"all dependencies are included.");}
var F=function(){};F.prototype=superc.prototype;subc.prototype=new F();subc.prototype.constructor=subc;subc.superclass=superc.prototype;if(superc.prototype.constructor==Object.prototype.constructor){superc.prototype.constructor=superc;}
if(overrides){for(var i in overrides){subc.prototype[i]=overrides[i];}}},augment:function(r,s){if(!s||!r){throw new Error("YAHOO.lang.augment failed, please check that "+"all dependencies are included.");}
var rp=r.prototype,sp=s.prototype,a=arguments,i,p;if(a[2]){for(i=2;i<a.length;i=i+1){rp[a[i]]=sp[a[i]];}}else{for(p in sp){if(!rp[p]){rp[p]=sp[p];}}}}};YAHOO.init();YAHOO.util.Lang=YAHOO.lang;YAHOO.augment=YAHOO.lang.augment;YAHOO.extend=YAHOO.lang.extend;YAHOO.register("yahoo",YAHOO,{version:"2.2.2",build:"204"});


/*
Copyright (c) 2007, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.net/yui/license.txt
version: 2.2.2
*/

YAHOO.util.Connect={_msxml_progid:['MSXML2.XMLHTTP.3.0','MSXML2.XMLHTTP','Microsoft.XMLHTTP'],_http_headers:{},_has_http_headers:false,_use_default_post_header:true,_default_post_header:'application/x-www-form-urlencoded; charset=UTF-8',_use_default_xhr_header:true,_default_xhr_header:'XMLHttpRequest',_has_default_headers:true,_default_headers:{},_isFormSubmit:false,_isFileUpload:false,_formNode:null,_sFormData:null,_poll:{},_timeOut:{},_polling_interval:50,_transaction_id:0,_submitElementValue:null,_hasSubmitListener:(function()
{if(YAHOO.util.Event){YAHOO.util.Event.addListener(document,'click',function(e){var obj=YAHOO.util.Event.getTarget(e);if(obj.type=='submit'){YAHOO.util.Connect._submitElementValue=encodeURIComponent(obj.name)+"="+encodeURIComponent(obj.value);}})
return true;}
return false;})(),setProgId:function(id)
{this._msxml_progid.unshift(id);},setDefaultPostHeader:function(b)
{this._use_default_post_header=b;},setDefaultXhrHeader:function(b)
{this._use_default_xhr_header=b;},setPollingInterval:function(i)
{if(typeof i=='number'&&isFinite(i)){this._polling_interval=i;}},createXhrObject:function(transactionId)
{var obj,http;try
{http=new XMLHttpRequest();obj={conn:http,tId:transactionId};}
catch(e)
{for(var i=0;i<this._msxml_progid.length;++i){try
{http=new ActiveXObject(this._msxml_progid[i]);obj={conn:http,tId:transactionId};break;}
catch(e){}}}
finally
{return obj;}},getConnectionObject:function()
{var o;var tId=this._transaction_id;try
{o=this.createXhrObject(tId);if(o){this._transaction_id++;}}
catch(e){}
finally
{return o;}},asyncRequest:function(method,uri,callback,postData)
{var o=this.getConnectionObject();if(!o){return null;}
else{if(this._isFormSubmit){if(this._isFileUpload){this.uploadFile(o.tId,callback,uri,postData);this.releaseObject(o);return;}
if(method.toUpperCase()=='GET'){if(this._sFormData.length!=0){uri+=((uri.indexOf('?')==-1)?'?':'&')+this._sFormData;}
else{uri+="?"+this._sFormData;}}
else if(method.toUpperCase()=='POST'){postData=postData?this._sFormData+"&"+postData:this._sFormData;}}
o.conn.open(method,uri,true);if(this._use_default_xhr_header){if(!this._default_headers['X-Requested-With']){this.initHeader('X-Requested-With',this._default_xhr_header,true);}}
if(this._isFormSubmit||(postData&&this._use_default_post_header)){this.initHeader('Content-Type',this._default_post_header);if(this._isFormSubmit){this.resetFormState();}}
if(this._has_default_headers||this._has_http_headers){this.setHeader(o);}
this.handleReadyState(o,callback);o.conn.send(postData||null);return o;}},handleReadyState:function(o,callback)
{var oConn=this;if(callback&&callback.timeout){this._timeOut[o.tId]=window.setTimeout(function(){oConn.abort(o,callback,true);},callback.timeout);}
this._poll[o.tId]=window.setInterval(function(){if(o.conn&&o.conn.readyState===4){window.clearInterval(oConn._poll[o.tId]);delete oConn._poll[o.tId];if(callback&&callback.timeout){delete oConn._timeOut[o.tId];}
oConn.handleTransactionResponse(o,callback);}},this._polling_interval);},handleTransactionResponse:function(o,callback,isAbort)
{if(!callback){this.releaseObject(o);return;}
var httpStatus,responseObject;try
{if(o.conn.status!==undefined&&o.conn.status!==0){httpStatus=o.conn.status;}
else{httpStatus=13030;}}
catch(e){httpStatus=13030;}
if(httpStatus>=200&&httpStatus<300||httpStatus===1223){responseObject=this.createResponseObject(o,callback.argument);if(callback.success){if(!callback.scope){callback.success(responseObject);}
else{callback.success.apply(callback.scope,[responseObject]);}}}
else{switch(httpStatus){case 12002:case 12029:case 12030:case 12031:case 12152:case 13030:responseObject=this.createExceptionObject(o.tId,callback.argument,(isAbort?isAbort:false));if(callback.failure){if(!callback.scope){callback.failure(responseObject);}
else{callback.failure.apply(callback.scope,[responseObject]);}}
break;default:responseObject=this.createResponseObject(o,callback.argument);if(callback.failure){if(!callback.scope){callback.failure(responseObject);}
else{callback.failure.apply(callback.scope,[responseObject]);}}}}
this.releaseObject(o);responseObject=null;},createResponseObject:function(o,callbackArg)
{var obj={};var headerObj={};try
{var headerStr=o.conn.getAllResponseHeaders();var header=headerStr.split('\n');for(var i=0;i<header.length;i++){var delimitPos=header[i].indexOf(':');if(delimitPos!=-1){headerObj[header[i].substring(0,delimitPos)]=header[i].substring(delimitPos+2);}}}
catch(e){}
obj.tId=o.tId;obj.status=(o.conn.status==1223)?204:o.conn.status;obj.statusText=(o.conn.status==1223)?"No Content":o.conn.statusText;obj.getResponseHeader=headerObj;obj.getAllResponseHeaders=headerStr;obj.responseText=o.conn.responseText;obj.responseXML=o.conn.responseXML;if(typeof callbackArg!==undefined){obj.argument=callbackArg;}
return obj;},createExceptionObject:function(tId,callbackArg,isAbort)
{var COMM_CODE=0;var COMM_ERROR='communication failure';var ABORT_CODE=-1;var ABORT_ERROR='transaction aborted';var obj={};obj.tId=tId;if(isAbort){obj.status=ABORT_CODE;obj.statusText=ABORT_ERROR;}
else{obj.status=COMM_CODE;obj.statusText=COMM_ERROR;}
if(callbackArg){obj.argument=callbackArg;}
return obj;},initHeader:function(label,value,isDefault)
{var headerObj=(isDefault)?this._default_headers:this._http_headers;if(headerObj[label]===undefined){headerObj[label]=value;}
else{headerObj[label]=value+","+headerObj[label];}
if(isDefault){this._has_default_headers=true;}
else{this._has_http_headers=true;}},setHeader:function(o)
{if(this._has_default_headers){for(var prop in this._default_headers){if(YAHOO.lang.hasOwnProperty(this._default_headers,prop)){o.conn.setRequestHeader(prop,this._default_headers[prop]);}}}
if(this._has_http_headers){for(var prop in this._http_headers){if(YAHOO.lang.hasOwnProperty(this._http_headers,prop)){o.conn.setRequestHeader(prop,this._http_headers[prop]);}}
delete this._http_headers;this._http_headers={};this._has_http_headers=false;}},resetDefaultHeaders:function(){delete this._default_headers
this._default_headers={};this._has_default_headers=false;},setForm:function(formId,isUpload,secureUri)
{this.resetFormState();var oForm;if(typeof formId=='string'){oForm=(document.getElementById(formId)||document.forms[formId]);}
else if(typeof formId=='object'){oForm=formId;}
else{return;}
if(isUpload){this.createFrame(secureUri?secureUri:null);this._isFormSubmit=true;this._isFileUpload=true;this._formNode=oForm;return;}
var oElement,oName,oValue,oDisabled;var hasSubmit=false;for(var i=0;i<oForm.elements.length;i++){oElement=oForm.elements[i];oDisabled=oForm.elements[i].disabled;oName=oForm.elements[i].name;oValue=oForm.elements[i].value;if(!oDisabled&&oName)
{switch(oElement.type)
{case'select-one':case'select-multiple':for(var j=0;j<oElement.options.length;j++){if(oElement.options[j].selected){if(window.ActiveXObject){this._sFormData+=encodeURIComponent(oName)+'='+encodeURIComponent(oElement.options[j].attributes['value'].specified?oElement.options[j].value:oElement.options[j].text)+'&';}
else{this._sFormData+=encodeURIComponent(oName)+'='+encodeURIComponent(oElement.options[j].hasAttribute('value')?oElement.options[j].value:oElement.options[j].text)+'&';}}}
break;case'radio':case'checkbox':if(oElement.checked){this._sFormData+=encodeURIComponent(oName)+'='+encodeURIComponent(oValue)+'&';}
break;case'file':case undefined:case'reset':case'button':break;case'submit':if(hasSubmit===false){if(this._hasSubmitListener){this._sFormData+=this._submitElementValue+'&';}
else{this._sFormData+=encodeURIComponent(oName)+'='+encodeURIComponent(oValue)+'&';}
hasSubmit=true;}
break;default:this._sFormData+=encodeURIComponent(oName)+'='+encodeURIComponent(oValue)+'&';break;}}}
this._isFormSubmit=true;this._sFormData=this._sFormData.substr(0,this._sFormData.length-1);return this._sFormData;},resetFormState:function(){this._isFormSubmit=false;this._isFileUpload=false;this._formNode=null;this._sFormData="";},createFrame:function(secureUri){var frameId='yuiIO'+this._transaction_id;if(window.ActiveXObject){var io=document.createElement('<iframe id="'+frameId+'" name="'+frameId+'" />');if(typeof secureUri=='boolean'){io.src='javascript:false';}
else if(typeof secureURI=='string'){io.src=secureUri;}}
else{var io=document.createElement('iframe');io.id=frameId;io.name=frameId;}
io.style.position='absolute';io.style.top='-1000px';io.style.left='-1000px';document.body.appendChild(io);},appendPostData:function(postData)
{var formElements=[];var postMessage=postData.split('&');for(var i=0;i<postMessage.length;i++){var delimitPos=postMessage[i].indexOf('=');if(delimitPos!=-1){formElements[i]=document.createElement('input');formElements[i].type='hidden';formElements[i].name=postMessage[i].substring(0,delimitPos);formElements[i].value=postMessage[i].substring(delimitPos+1);this._formNode.appendChild(formElements[i]);}}
return formElements;},uploadFile:function(id,callback,uri,postData){var frameId='yuiIO'+id;var uploadEncoding='multipart/form-data';var io=document.getElementById(frameId);this._formNode.setAttribute('action',uri);this._formNode.setAttribute('method','POST');this._formNode.setAttribute("target",frameId);if(this._formNode.encoding){this._formNode.encoding=uploadEncoding;}
else{this._formNode.enctype=uploadEncoding;}
if(postData){var oElements=this.appendPostData(postData);}
this._formNode.submit();if(oElements&&oElements.length>0){for(var i=0;i<oElements.length;i++){this._formNode.removeChild(oElements[i]);}}
this.resetFormState();var uploadCallback=function()
{var obj={};obj.tId=id;obj.argument=callback.argument;try
{obj.responseText=io.contentWindow.document.body?io.contentWindow.document.body.innerHTML:null;obj.responseXML=io.contentWindow.document.XMLDocument?io.contentWindow.document.XMLDocument:io.contentWindow.document;}
catch(e){}
if(callback&&callback.upload){if(!callback.scope){callback.upload(obj);}
else{callback.upload.apply(callback.scope,[obj]);}}
if(YAHOO.util.Event){YAHOO.util.Event.removeListener(io,"load",uploadCallback);}
else if(window.detachEvent){io.detachEvent('onload',uploadCallback);}
else{io.removeEventListener('load',uploadCallback,false);}
setTimeout(function(){document.body.removeChild(io);},100);};if(YAHOO.util.Event){YAHOO.util.Event.addListener(io,"load",uploadCallback);}
else if(window.attachEvent){io.attachEvent('onload',uploadCallback);}
else{io.addEventListener('load',uploadCallback,false);}},abort:function(o,callback,isTimeout)
{if(this.isCallInProgress(o)){o.conn.abort();window.clearInterval(this._poll[o.tId]);delete this._poll[o.tId];if(isTimeout){delete this._timeOut[o.tId];}
this.handleTransactionResponse(o,callback,true);return true;}
else{return false;}},isCallInProgress:function(o)
{if(o.conn){return o.conn.readyState!==4&&o.conn.readyState!==0;}
else{return false;}},releaseObject:function(o)
{o.conn=null;o=null;}};YAHOO.register("connection",YAHOO.util.Connect,{version:"2.2.2",build:"204"});



var aol = 0;
var msn = 0;
var gmail = 0;
var yahoo = 0;
var orkut=0;
//chats
var grpmobile="";
var Dom=YAHOO.util.Dom;
var nextTop = 330;
var nextLeft = 0; 
var left1 =0;
var nextleft1="";
var left1024=70.5;
var left800=63;
var left1280=66.3;
var left1366=65;
var leftendcheck="";
var startthread=false;
var glflag = false;
var ylflag=false; 
var fbflag=false; 
var limitcon=0;
var glagain=0;
var stopgnet;
var browser=null;
var gcontacts=new Array();
var yeachfrnd=new Array();
var ylogout123=true;
var gmailidd="";
var internetval=1;
var interval1=5000;
var interva=5000;
var intver=0;
var internetchecktheread;
var instantsms="0";
var namesms="0";
var seccheck=false;
var actWin1="";
var yintver=0;
browser=navigator.appName;
var bday_flag=0;
var bbwal=false;//bottom value for Gtalk & Yahoo window
var twitter1=0;
function bulidgrps(data)
{
	if(data=="g")
	{
		document.getElementById("bgdisplay").className='active';
		document.getElementById("bydisplay").className='';
	}
	else
	{
		document.getElementById("bgdisplay").className='';
		document.getElementById("bydisplay").className='active';
	}
}
function getLocation1()
  {
  	var phoneRegxp= /^([0-9]+)$/;
  	var mobile=document.getElementById('mobile1').value;
  	if(mobile=="" || mobile=="Mobile Number")
	{
		alert("Enter Mobile Number");
		document.getElementById('mobile1').focus();
		return false;
	}
	else if((mobile.charAt(0)!=9) && (mobile.charAt(0)!=8) && (mobile.charAt(0)!=7))
	{
		alert("Mobile Number should start with either 9 or 8 or 7 ")
		document.getElementById('mobile1').focus();
		return false;
	}
	if(mobile.length!=10)
	{
		alert("Check Your Mobile Number");
		document.getElementById('mobile1').focus();
		return false;
	}	
	else if(phoneRegxp.test(mobile)!=true)           
    {      
       	alert("Enter Only Numeric values");
       	document.getElementById('mobile1').focus();
       	return false;
    }
    document.getElementById('mobile1').value="Mobile Number";
    window.open("jsp/LocateMobile.jsp?mobile1="+mobile);    
   
  }

function outgetdata(menu,list,page)
{
	hiddiv();
	document.getElementById(menu).className="active";
	document.getElementById(list).style.display="block";
	if(list=="listdash")
	{changewaydiv(menu);
		listdisplaypages(page);
	}
}
function changewaydiv(menu)
{      
	
	document.getElementById("dashboard").className="";
	document.getElementById("quicksms").className="";
	document.getElementById("groupsms").className="";
	document.getElementById("addressbook").className="";
	document.getElementById("futuresms").className="";
	document.getElementById("mailalerts").className="";
	document.getElementById(menu).className="active";
}
function getdata(menu,list,page)
{	
	
	hiddiv();
	if(menu!="" && list!="listchathistory")
	{
		document.getElementById(menu).className="active";
	}
	document.getElementById(list).style.display="block";
	if(list=="listdash")
	{
		changewaydiv("dashboard");
		document.getElementById("wayListView").innerHTML="<iframe src='jsp/DashBoard.jsp' height='1260px;' id='frame' name='frame' width='964px;' scrolling='no' frameborder='0'></iframe>";
	}
	else if(list=="listsocial"){
		inactivateSocialSubTags();
		document.getElementById("sDash").className="active";
		document.getElementById("socialDiv").innerHTML="<iframe id='contentFrame' name='contentFrame' src='socialDash.action' height='500' width='736' scrolling='no' frameborder='0'></iframe>";
	}
	else if(list=="listGames"){ 
		inactivateGamesSubTags();
		document.getElementById("gattip").style.display="none";
		document.getElementById("home").className="active";
		document.getElementById("gamesDiv").innerHTML="<iframe id='gamesFrame' name='gamesFrame' src='gameshome.action' height='1050px' width='964px' scrolling='no' frameborder='0'></iframe>"
	}
	else if(list=="listmystore")
	{
		
	}
	else if(list=="listearn")
	{
		document.getElementById(list).innerHTML="<iframe id='earningsFrame' name='earningsFrame' src='pEarnings.action' height='250' width='964px;' margin='0' scrolling='no' frameborder='0'></iframe>";
	}
	else if(list=="listfacebook")
	{
		 myNetwork('facebooktab',list,'home');
	}
	else if(list=="listlinkedin")
	{
		document.getElementById("listlinkedin").style.display="block";
		document.getElementById(list).innerHTML="<iframe name='ifrm_linkedin' id='ifrm_linkedin' src='user/LinkedInLogin.jsp' height='400px;' width='964px;' scrolling='no' frameborder='0'></iframe>";
	}
	else if(list=="listMail"){
	if(menu=="lnkAol"){
			showMailDiv('aolDiv');
			if(aol==0)
				document.getElementById("aolDiv").innerHTML="<iframe src='aolLogin.action' id='aolframe' height='425px;' width='966px;' scrolling='no' frameborder='0'></iframe>";
			/*else
				document.getElementById(list).innerHTML="<iframe src='fetchAolMails.action' id='aolframe' height='1050px;' width='966px;' scrolling='no' frameborder='0'></iframe>";*/
		}
		if(menu=="lnkGmail"){
			showMailDiv('gmailDiv');
			if(gmail==0)
				document.getElementById("gmailDiv").innerHTML="<iframe src='gmailLogin.action' id='gmailframe' height='425px;' width='964px;' scrolling='no' frameborder='0'></iframe>";
			else{
				manageDivs('gmailframe');
			}
		}
		if(menu=="lnkMsn"){
			showMailDiv('msnDiv');
			if(msn==0)
				document.getElementById("msnDiv").innerHTML="<iframe src='msnLogin.action' id='msnframe' height='425px;' width='964px;' scrolling='no' frameborder='0'></iframe>";
			else{
				manageDivs('msnframe');
			}
		}
		if(menu=="lnkYahoo"){
			showMailDiv('yahooDiv');
			if(yahoo==0)
				document.getElementById("yahooDiv").innerHTML="<iframe src='yahooLogin.action' id='yahooframe' height='425px;' width='964px;' scrolling='no' frameborder='0'></iframe>";
			else{
				manageDivs('yahooframe');
			}
		}

		
	}
	else if(list=="listtwitter"){ 
		if(twitter1==0){
			document.getElementById("twtmenu").style.display="none";
			document.getElementById("TwtView").innerHTML="<iframe src='twtlogin.action' name='frametwitt' id='frametwitt' height='460px;' width='964px;' scrolling='no' frameborder='0'></iframe>";
			twitter1=1;
		}
	}
	else if(list=="listorkut"){
		if(orkut==0){
			document.getElementById(list).innerHTML="<iframe name='ifrm_Orkut' id='ifrm_Orkut' src='oHome.action' height='350px;' width='964' scrolling='no' frameborder='0'></iframe>";
			orkut=1;
		}
	}
	else if(list=="listsettings")
	{
		if(page=="general")
			document.getElementById(list).innerHTML="<iframe name='ifrm_settings' id='ifrm_settings' src='jsp/personalsettins.jsp' height='600px;' width='964px;' scrolling='no' frameborder='0'></iframe>";
		else if(page=="account")
			document.getElementById(list).innerHTML="<iframe name='ifrm_settings' id='ifrm_settings' src='jsp/accountsettings.jsp' height='750px;' width='964px;' scrolling='no' frameborder='0'></iframe>";
		else if(page=="others"){
			document.getElementById('loadingImg').style.display='block';
			document.getElementById('loadingImg').innerHTML="Loading Page<br /><img src='./images/loading35.gif'/> <div class='plwait'>Please wait</div>";
			document.getElementById(list).innerHTML="<iframe name='ifrm_settings' id='ifrm_settings' src='jsp/othersettings.jsp' height='950px;' width='964px;' scrolling='no' frameborder='0'></iframe>";
		}	
	}
	else if(list=="listecards")
	{
			
		ecardld();
	
	}
	else if(list=="listchathistory")
	{	
		//alert("sdd "+menu);
		//document.getElementById("chatsettingsmenu").style.display="block";
		//document.getElementById("chatsettingsheader").style.display="block";
		var eid=menu;
		document.getElementById("chatsettingsmenu").innerHTML= "<iframe id='chatframe' src='jsp/Chat.jsp?model="+page+"&eid="+eid+"'  width='964px;' scrolling='no' height='700px' frameborder='0' marginheight='0' marginwidth='0' ></iframe>" ;
		//alert("7777");
		if(page=="gsetting")
		{
		document.getElementById("gsetting").className="active";
		document.getElementById("ysetting").className="";
		document.getElementById("gchats").className="";
		document.getElementById("ychats").className="";
		}else
		if(page=="ysetting")
		{
		document.getElementById("gsetting").className="";
		document.getElementById("ysetting").className="active";
		document.getElementById("gchats").className="";
		document.getElementById("ychats").className="";
		}else
		if(page=="gchats")
		{
		
		document.getElementById("gchats").className="active";
		document.getElementById("ychats").className="";
		}else
		if(page=="ychats")
		{
		
		document.getElementById("gchats").className="";
		document.getElementById("ychats").className="active";
		}
		document.getElementById("listchathistory").style.display="block";
	}




}
function manageDivs(framid){	
	document.getElementById(framid).contentWindow.document.getElementById("compose").style.display="none";
	document.getElementById(framid).contentWindow.document.getElementById("composeconfirm").style.display="none";
	document.getElementById(framid).contentWindow.document.getElementById("msgDisp").style.display="none";
	document.getElementById(framid).contentWindow.document.getElementById("mlist").style.display="block";
	document.getElementById(framid).contentWindow.document.getElementById('composeTab').className = "";
	document.getElementById(framid).contentWindow.document.getElementById('inboxTab').className = "active";
	document.getElementById(framid).contentWindow.resizeIframe();
}

function showMailDiv(id){
	document.getElementById("gmailDiv").style.display="none";
	document.getElementById("yahooDiv").style.display="none";
	document.getElementById("msnDiv").style.display="none";
	document.getElementById("aolDiv").style.display="none";
	document.getElementById(id).style.display="block";
}
function hiddiv()
{  
	 document.getElementById("listdash").style.display="none";
	 document.getElementById("listsocial").style.display="none";
	 document.getElementById("listfacebook").style.display="none";
	 document.getElementById("listlinkedin").style.display="none";
	 document.getElementById("listMail").style.display="none";
	 document.getElementById("listtwitter").style.display="none";
	 document.getElementById("listorkut").style.display="none";
	 document.getElementById("listecards").style.display="none";
	 document.getElementById("listsettings").style.display="none";
	 document.getElementById("listGames").style.display="none";
	 document.getElementById("listchathistory").style.display="none";

	 document.getElementById("settings-pop").style.display="none";
	// document.getElementById("gamesmenu").className="";
	document.getElementById("menuecard").className="";
	 document.getElementById("menudash").className="";
	 document.getElementById("menusocial").className="";
	 document.getElementById("lnkGmail").className="";
	 document.getElementById("lnkYahoo").className="";
	 document.getElementById("lnkMsn").className="";
	 document.getElementById("menufacebook").className="";
	 document.getElementById("menutwitter").className="";
	 document.getElementById("menulinkedin").className="";
	  document.getElementById("menuorkut").className="";
	
}
/*-------------           FaceBook PART START     ---------------*/


function myNetwork(network,openUrl,type){
//	alert(type);
	if(network=='home'){}
	if(network=='facebooktab'){
		document.getElementById('facebookListView').innerHTML="<iframe id='nethomeframe' src='user/Facebook.jsp?type="+type+"'  height='1050px;' width='964px;' scrolling='no'  frameborder='0' marginheight='0' marginwidth='0' style='background : white;border:1px solid #bcbcbc;'></iframe>";
	}
	if(network=='friendhome'){
		document.getElementById('facebookListView').innerHTML="<iframe id='nethomeframe' src='user/FacebookFriend.jsp?frndid="+fffuid+"'  height='1050px;' width='964px;' scrolling='no' frameborder='0' marginheight='0' marginwidth='0' style='background : white;border:1px solid #bcbcbc;'></iframe>";

	}
	if(network=='fbtab'){
		document.getElementById("fbtab").className="active";
		var paramData = "faction="+"checkFB";
		var url = "./FBMain";
		var callback = {
		  success: 	function(o) {
		 	if(o.responseText=="nofb"){
		 		fbToken=false;
		  		document.getElementById('facebookListView').innerHTML="<iframe id='fbframe' src='user/Facebook.jsp' height='1050px;' width='964px;' scrolling='no'  frameborder='0' marginheight='0' marginwidth='0' style='background : white;border:1px solid #bcbcbc;'></iframe>";
		  	}else{
		  		fbToken=true;
		  		document.getElementById('facebookListView').innerHTML="<iframe id='fbframe' src='user/Facebook.jsp'  height='1050px;' width='964px;' scrolling='no'  frameborder='0' marginheight='0' marginwidth='0'style='background : white;border:1px solid #bcbcbc;' ></iframe>";
		  	}
		 },
	
		  failure: 	function(o) {
		  },
		  argument: [],
		  timeout: 300000
		}
		var request = YAHOO.util.Connect.asyncRequest('POST', url, callback, paramData);
		
	}
	
}
var fffuid;

function facebookfriend(fuid,name){
	
	fffuid=fuid;
document.getElementById("facebookListView").innerHTML="<iframe id='nethomeframe' src='user/FacebookFriend.jsp?frndid="+fuid+"'  height='1050px;' width='964px;' scrolling='no'  frameborder='0' marginheight='0' marginwidth='0' style='background : white;border:1px solid #bcbcbc;'></iframe>";
}

function closeFBAlbum1(e){
		
		var code;
			if (!e) {
				code = e.keyCode;
			} else {
				code = e.which;
				if (code == null || code == 0) {
					code = e.keyCode;
				}
			}
		//code = e.keyCode;
			//alert(e.keyCode+" code "+e.which);
			//alert(code);
			if (code == 27 ) 	
			{ 
				closeFBAlbum();
		     }
               //document.getElementById(prevId).className="";
       }

var viewer="";
var viewername="";
var viewreThubNail="";
function calcHeight(){
	document.getElementById('socifrm').height="740";
  	//find the height of the internal page
  	var the_height=document.getElementById('socifrm').contentWindow.document.body.scrollHeight;
  	if(the_height>=740)
  		document.getElementById('socifrm').height=the_height;
}
function resizeIframe2() {
  document.getElementById('fbframe').style.height = "700px";
  var height = document.getElementById('fbframe').contentWindow.document.body.scrollHeight;
  document.getElementById('fbframe').style.height = height +"px";
}
function shareFacebookContent(sno){
	var campid=document.getElementById('contentFrame').contentWindow.document.getElementById("hidCampID").value;
	var adid=document.getElementById('contentFrame').contentWindow.document.getElementById("hidAdvID").value;
  	var mes="Hi! Good Morning Every Body ";
	if(mes !="What's on your mind?" && mes!="Write something..." && mes!=null){
			paramData = "fbaction=facebookshare";
			paramData +="&campid="+campid;
			paramData +="&adid="+adid;  
		var url = "./FBOperations";
		document.getElementById('contentFrame').contentWindow.document.getElementById("shareBTN").disabled="disabled";
		document.getElementById('contentFrame').contentWindow.document.getElementById("shareBTN").value="Please wait...";
		//var set=document.getElementById('contentFrame').contentWindow.document.getElementById("fbHref"+sno).innerHTML;
		//document.getElementById('contentFrame').contentWindow.document.getElementById("fbHref"+sno).innerHTML="<div style='font-size:11px; color:#2D95C8;'><img src='./images/loading1.gif' style='height:20px;margin-right:15px;' />Please wait...</div>";
		var set1=document.getElementById('contentFrame').contentWindow.document.getElementById("shareNetWs"+sno).innerHTML;
		document.getElementById('contentFrame').contentWindow.document.getElementById("shareNetWs"+sno).innerHTML="<div style='font-size:11px; color:#2D95C8;'><img src='./images/loading1.gif' style='height:20px;margin-right:15px;' />Please wait...</div>";
		var callback = {
		  success: 	function(o) {
		  		if(o.responseText=="Fail"){
		  			alert("Failure: Please try again.");
					document.getElementById('contentFrame').contentWindow.document.getElementById("shareBTN").disabled="";
					document.getElementById('contentFrame').contentWindow.document.getElementById("shareBTN").value="Share";
					document.getElementById('contentFrame').contentWindow.document.getElementById("shareNetWs"+sno).innerHTML=set1;
		  			//document.getElementById('contentFrame').contentWindow.document.getElementById("fbHref"+sno).innerHTML=set;
		  			return;
		  		}
		  		else{
		  			alert("Successfully shared");
		  			document.getElementById('contentFrame').contentWindow.document.getElementById("cImg").src=o.responseText;
					document.getElementById('contentFrame').contentWindow.closeVerifyDiv();
		  			document.getElementById('contentFrame').contentWindow.document.getElementById("shareVia"+sno).innerHTML="<strong class='fnt11 clrr'>Ad has been shared already</strong>";
		  			return;
		  		}
		  	 	
		  },
		  failure: 	function(o) {
		  alert("Failure : "+o.responseText);
		  },
		  argument: [],
		  timeout: 300000
		}
		var request = YAHOO.util.Connect.asyncRequest('POST', url, callback, paramData);
	}
	else{
		document.getElementById('sdata').value="";
		document.getElementById('sdata').focus();
	} 
	
}

function postonfwall1(){
document.getElementById("nethomeframe").contentWindow.postonfwall();
}
function closewallD1()
{
	document.getElementById("nethomeframe").contentWindow.closewallD();
}
function closeFBAlbum()
{
		document.getElementById('fphcontent').style.display="none";
	document.getElementById('fphcontent1').style.display="none";
	document.getElementById('fbphimg-close').style.display="none";
}
/*-------------           Facebook PART END     ---------------*/
/*-------------           Way2sms Part Start    ---------------*/
function myEncode(str) {
	str = encodeURI(str);
	str = str.replace(new RegExp("&",'g'), "%26");
	str = str.replace(new RegExp(";",'g'), "%3B");
	str = str.replace(new RegExp("[?]",'g'), "%3F");
	return str;
}
function isalphanumeric(alphane)
{
	var numaric = alphane;
	for(var j=0; j<numaric.length; j++){
		  var alphaa = numaric.charAt(j);
		  var hh = alphaa.charCodeAt(0);
		  if((hh > 47 && hh<58) || (hh > 64 && hh<91) || (hh > 96 && hh<123)) {
		  }
		  else{
			
			return false;
		  }
	}
 return true;
}
function validateForm(st)
  {
    if(st=="1")
    {
     if(document.getElementById("tfNewPass").value=="")
      {
        alert("Please Enter New Password");
        document.getElementById("tfNewPass").focus();
          return false;
      }
      if(document.getElementById("tfNewPass").value.charAt(0)==" ")
      {
          alert("Please Provide Valid Password");
          document.getElementById("tfNewPass").value="";
          document.getElementById("tfNewPass").focus();
             return false;
      }
	if(document.getElementById("tfNewPass").value.length<4)
      {
        alert("Please enter minimum of 4 characters as password");
        document.getElementById("tfNewPass").focus();
          return false;
      }
      if(document.getElementById("tfConfirmPass").value=="")
      {
        alert("Please Enter Confirm password");
        document.getElementById("tfConfirmPass").focus();
          return false;
      }
         if(document.getElementById("tfConfirmPass").value==0)
          {
                alert("Plz Avoide Zero's");
            	document.getElementById("Email").value="";
            	document.getElementById("Email").focus();
            	return false;
          }
      if(!isalphanumeric(document.getElementById("tfConfirmPass").value))
          {
               alert("Plz Enter PassWord Alphanumeric Only");
            document.getElementById("Email").value="";
            document.getElementById("Email").focus();
            return false;
          }
          if(!isalphanumeric(document.getElementById("tfConfirmPass").value))
          {
               alert("Plz Enter PassWord Alphanumeric Only");
            document.getElementById("Email").value="";
            document.getElementById("Email").focus();
            return false;
          }
      if(document.getElementById("tfNewPass").value!=document.getElementById("tfConfirmPass").value)
      {
        alert("New Password and Confirm password must be equal");
        document.getElementById("tfConfirmPass").focus();
        return false;
      }
    }
    document.getElementById("curtain").style.display="none";
    document.getElementById("secreg").style.display="none";
      var folderName = "EmailpassCreation";
    var result="";
   
    var paramData = "folder=" + myEncode(folderName)+"&pass="+document.getElementById("tfNewPass").value;
    if(st=="1")
    {
         paramData=paramData+"&secval=1";
    }
    else if(st=="2")
    {
         paramData=paramData+"&secval=2";
    }
   
    var url = "./Emailcreation";
      
    var callback = {
      success:     function(o) {
            if(o.responseText != undefined) {
            try {
                result = o.responseText;
               document.getElementById("curtain").style.display="none";
                document.getElementById("secreg").style.display="none";
            } catch(e) {
                alert("exc"+e);
            }
        }
       
      },

      failure:     function(o) {
         document.getElementById("curtain").style.display="none";
         document.getElementById("secreg").style.display="none";
      },
      argument: [],
      timeout: 300000
    }
    var request = YAHOO.util.Connect.asyncRequest('POST', url, callback, paramData);
  
   
  }
function StringBuilder(value)
{
    this.strings = new Array("");
    this.append(value);
}
StringBuilder.prototype.append = function (value)
{
    if (value)
    {
        this.strings.push(value);
    }
}
StringBuilder.prototype.clear = function ()
{
    this.strings.length = 1;
}
StringBuilder.prototype.toString = function ()
{
    return this.strings.join("");
}
var dispcont=0;
function sendeml()
{
	var tes=0;
	var tes1=0;
	var str="";
	for(var st=0;st<=document.getElementById("checkbox6").value-1;st++)
	{
		var cheid='cheid'+st;
		if(document.getElementById(cheid).checked==true)
		{
			str=str+","+document.getElementById("divid"+st).innerHTML;
			//st=document.getElementById("checkbox6").value;
			tes=1;tes1=tes1+1;
		}
	}
	if(tes==0)
	{
		alert("Please Select Atleast one Contact");
		return;
	}
	document.getElementById("sendmailloading").style.display="block";
	 var paramData = "HiddenAction=Insertinvite1&emailid=" + str;
     var url = "./Subscriber";
    var callback = {
      success:     function(o) {
		if(o.responseText=="Login failed")
		{
			alert("Wrong email or Password. Please try again");
		}
		else if(o.responseText=="Login failed")
		{
			alert("Wrong email or Password. Please try again");
		}
		else
		{
			document.getElementById("addbook-request").style.display="none";
			document.getElementById("bulidcontacts").style.display="none";
			alert("Mail's Sent");
		    //document.getElementById("con-selected1").style.display="block";
			//document.getElementById("dsipmult").innerHTML=tes1;
			window.scroll(0,0);
		}
        document.getElementById("sendmailloading").style.display="none";
      },
      failure:     function(o) {
      //    alert("Not Inserted...!"+o.responseText);
      document.getElementById("sendmailloading").style.display="none";
      },
      argument: [],
      timeout: 300000
    }
    var request = window.parent.YAHOO.util.Connect.asyncRequest('POST', url, callback, paramData);  
}
function grps(data)
{
	if(data=="g")
	{
		document.getElementById("bgdisplay").className='active';
		document.getElementById("bydisplay").className='';
	}
	else
	{
		document.getElementById("bgdisplay").className='';
		document.getElementById("bydisplay").className='active';
	}
}
function dcloseimp(val)
{
	document.getElementById(val).style.display="none";
	
}
function bulidimport1(type)
{
	
	var email="";
	var pwd="";
	var provider_box="";
	
	if(document.getElementById("bgdisplay").className=="active")
	{
			if(document.getElementById("bulidguid").value=="" || document.getElementById("bulidguid").value=="username")
			{
				alert("Please Enter Emailid");
				document.getElementById("bulidguid").focus();
				return;
			}
			
			email=document.getElementById("bulidguid").value;
			pwd=document.getElementById("bulidgpwd").value;
			provider_box="gmail";
			if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)!=true)
			{
				alert("Invalid E-mail Address! Please Re-Enter.");
				document.getElementById("bulidguid").focus();
				return;
			}
			if(document.getElementById("bulidgpwd").value=="" || document.getElementById("bulidgpwd").value=="*******")
			{
				alert("Please Enter Password");
				document.getElementById("bulidgpwd").focus();
				return;
			}
			email1=email;
				
	 }
	 if(type=="y")
	 {
			if(document.getElementById("bulidyuid").value=="" || document.getElementById("bulidyuid").value=="username")
			{
				alert("Please Enter Emailid");
				document.getElementById("bulidyuid").focus();
				return;
			}
			
			email=document.getElementById("bulidyuid").value;
			pwd=document.getElementById("bulidypwd").value;
			provider_box="yahoo";
			if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)!=true)
			{
				alert("Invalid E-mail Address! Please Re-Enter.");
				document.getElementById("bulidyuid").focus();
				return;
			}
			if(document.getElementById("bulidypwd").value=="" || document.getElementById("bulidypwd").value=="*******")
			{
				alert("Please Enter Password");
				document.getElementById("bulidypwd").focus();
				return;
			}
			email1=email;
			
	 }
	 document.getElementById("bloading").style.display="block";
	 document.getElementById("namesms").style.display="none";
	 var paramData = "HiddenAction=InviteContacts2&email_box=" + email;
     paramData += "&password_box=" + pwd.replace("%","%25");
     paramData += "&provider_box=" + provider_box;
     var url = "./Subscriber";
    var callback = {
      success:     function(o) {
      
		if(o.responseText=="Login failed")
		{
			alert("Wrong email or Password. Please try again");
		}
		else if(o.responseText=="Login failed")
		{
			alert("Wrong email or Password. Please try again");
		}
		else
		{	
			var st=o.responseText.split("<div class='tab-pop'>Addressbook request<a href=\"javascript:clsaddgrp('addbook-request');\">Close</a>");
			document.getElementById("addbook-request").style.display="block";
			document.getElementById("bulidcontacts").style.display="none";
			document.getElementById("addbook-request").innerHTML="<div class='clo' onclick=\"dcloseimp('addbook-request');\">X</div>"+st[1];
			window.parent.window.scroll(400,400);
		}
        document.getElementById("bloading").style.display="none";
      },
      failure:     function(o) {
      document.getElementById("bloading").style.display="none";
      //    alert("Not Inserted...!"+o.responseText);
      },
      argument: [],
      timeout: 300000
    }
    var request = window.parent.YAHOO.util.Connect.asyncRequest('POST', url, callback, paramData);   
}
function bulidcontacts()
{
	window.parent.window.scroll(200,200);
	document.getElementById("bulidcontacts").style.display="block";
}
function listquickcontact()
{
	var list = document.getElementById("quickcontacts2");
	var folderName = "DashBoard";
		var paramData = "folder=" + myEncode(folderName);
	dispcont=0;	
	var url = "./QuickContacts";
	var callback = {
		  success: 	function(o) {
		            
				if(o.responseText != undefined) {
				try {
					if(o.responseText.substring(0,1)!="1")
					{	
						list.innerHTML = o.responseText;
						var st=document.getElementById("Quckvalue").value.split("*");
						var st1=document.getElementById("Qucktitle").value.split(",");
						quickarry=document.getElementById("Quckvalue").value.split("*");
						quick1arry=document.getElementById("Qucktitle").value.split(",");
						quick2arry=document.getElementById("Quckgid").value.split(",");
						mquickarry=document.getElementById("Quckvalue1").value.split(",");
						var list2 = document.getElementById("quickcontacts");
						
						dispcont=1;
						var data= new StringBuilder();
						if(st.length<=1)
						{
							document.getElementById("quickcontacts2").style.display='none';
							document.getElementById("quickcontacts3").style.display='none';
							    var td="qtdl1";
								//list2.innerHTML="<div style='margin:50px 0 0 50px;'><a href=\"javascript:window.parent.listdisplaypages('addressbook')\" >Add Contacts</a><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp(or)<br/><a href=\"javascript:bulidcontacts();\" >Build AddressBook</a></div>";
							   list2.innerHTML="<div class='no-cons'><div class='mns'><a href=\"javascript:window.parent.listdisplaypages('addressbook')\" style='width:85px;'>Add Contacts</a><div style='clear:both'></div><div class='or'>OR</div><div style='clear:both'></div><a href=\"javascript:bulidcontacts();\" style='width:120px;'>Build Address Book</a></div></div>";
						}
						else
						{
							for(var i=1;i<=st.length-1;i++)
							{
								var td="qtd"+i;
								var nam="";
								if(st[i].length>14)
								{
									nam=st[i].substring(0,14)+"..";
								}
								else
								{
									nam=st[i];
								}
								data.append("<li id='"+td+"' onClick=\"listdisplaypages('namesms','"+st[i]+"','"+st1[i]+"');getListId('"+td+"','3');\" onmouseout=getListId('"+td+"','2'); onmouseover=getListId('"+td+"','1'); style='cursor: pointer;'><div  style='cursor: pointer;'><div class='cIcon' >&nbsp; </div><b>"+nam+" <span class='in22' style='display:block;'>"+st1[i]+"</span></b></div></li>");
							}
							list2.innerHTML=data;
							
						}
						
					}
					else
						{
						logout1();
						}
				} catch(e) {
				}
			}
			else
			{
				listquickcontact();
			}
		  },
	
		  failure: 	function(o) {
		    listquickcontact();
		  },
		  argument: [],
		  timeout: 300000
		}
		var request = YAHOO.util.Connect.asyncRequest('POST', url, callback, paramData);
}

 function cleartxt()
 {
   if(document.getElementById('cname').value=="Search Contacts")
   {
 		document.getElementById('cname').value="";
   }
 }
function seleContacts1(page,uname,umobile)
{
	var list = document.getElementById("quickcontacts");
	 var slpitnames=quickarry;  
   var splinos=quick1arry; 
   var comstr=document.getElementById('cname').value;
   var fbo=true;  
   var i=0;
  var data= new StringBuilder();
 var st=0;
   for(i=0;i<=page;i++)
   {
	    var nam=slpitnames[i+1];
	    var mob=splinos[i+1];
	    if(nam!=undefined)
	    {
	    	if((nam.length >= comstr.length) && fbo )
	   	 	{
	       		if(nam.substring(0,comstr.length).toUpperCase()==comstr.toUpperCase())
	      	 	{
	       		  fbo=false;
	        		 break;
	       	 	}        
	    	}
	    }
	    else
	    {
	    	st=1;
	    }
   }
   if(st==0)
   {
  	 var l=0;
	 var tdval="td";
     	 if(!fbo)
       {
	    for(var j=i+1; j<=page ;j++)
	    {
	         
			 tdval="qtd"+(l);
			 l=l+1;
			 data.append("<li id='"+tdval+"'  onclick=getListId('"+tdval+"','3'); onmouseout=getListId('"+tdval+"','2'); onmouseover=getListId('"+tdval+"','1'); style='cursor: pointer;'><div onClick=\"listdisplaypages('namesms','"+slpitnames[j]+"','"+splinos[j]+"')\"><div class='cIcon' >&nbsp; </div><b>"+slpitnames[j]+" <span class='in22'>"+splinos[j]+"</span></b></div></li>");
	    } 
	   
       }
       else
       {
          l=0;
          for(var j=0; j<=page;j++)
          {
             l=l+1;
			 tdval="qtd"+(l);
			 data.append("<li id='"+tdval+"'  onclick=getListId('"+tdval+"','3'); onmouseout=getListId('"+tdval+"','2'); onmouseover=getListId('"+tdval+"','1'); style='cursor: pointer;'><div onClick=\"listdisplaypages('namesms','"+slpitnames[j]+"','"+splinos[j]+"')\"><div class='cIcon' >&nbsp; </div><b>"+slpitnames[j]+" <span class='in22'>"+splinos[j]+"</span></b></div></li>");
          } 
       } 
	list.innerHTML=data;
	
   }
}
var li_count="td"+1;
function getListId(id,changeBG)
{	
	if(changeBG=='0')
	{		
		if(document.getElementById(li_count)!=null)
				{
		document.getElementById(li_count).style.background="";	
		}
	}
	else
	{
		if(document.getElementById('namesms').innerHTML=="")
		{
			if(changeBG=='1')
			{
				document.getElementById(id).style.background="#e0edf7";		
			}
			else if(changeBG=='2')
			{
				document.getElementById(id).style.background="";			
			}
			else if(changeBG=='3')
			{
				document.getElementById(id).style.background="#b2d7f1";	
				li_count=id;				
			}
		}
		else if(document.getElementById('namesms').innerHTML!="")
		{		
			if(changeBG=='3')
			{
				if(document.getElementById(li_count)!=null)
				{
					document.getElementById(li_count).style.background="";
				}
				document.getElementById(id).style.background="#b2d7f1";	
				li_count=id;
			}	
			else if(changeBG=='1')
			{
				document.getElementById(id).style.background="#e0edf7";	
				if(document.getElementById(li_count)!=null)
				{
				document.getElementById(li_count).style.background="#b2d7f1";	
				}
			}
			else if(changeBG=='2')
			{
				document.getElementById(id).style.background="";	
				if(document.getElementById(li_count)!=null)
				{
				document.getElementById(li_count).style.background="#b2d7f1";	
				}
			}		
		}
	}
}
function smsdisp()
{
	document.getElementById("quicksms").className="";
	document.getElementById("groupsms").className="";
	document.getElementById("sentsms").className="";
	document.getElementById("addressbook").className="";
	document.getElementById("futuresms").className="";
	document.getElementById("dashboard").className="";
	document.getElementById("mailalerts").className="";
	document.getElementById("namesms").style.display='none';
	document.getElementById("addbook-request").style.display="none";
}
function smsdispdash()
{
	document.getElementById("quicksms").className="";
	document.getElementById("groupsms").className="";
	document.getElementById("sentsms").className="";
	document.getElementById("addressbook").className="";
	document.getElementById("futuresms").className="";
	document.getElementById("dashboard").className="active";
	document.getElementById("mailalerts").className="";
	document.getElementById("namesms").style.display='none';
	document.getElementById("addbook-request").style.display="none";
}
var draftMsg = new Array();
var arytrend="";
var instantsmsvar=0;
function waydispclose1()
{
	document.getElementById("quickclose").style.display='block';
}
function addToDraft(msg){
	var b=1;
	try{
		if(draftMsg.length >= 0){
			for(var i=0; i<=draftMsg.length-1; i++){
				if(draftMsg[i]==msg){
					b=0;
					i=draftMsg.length-1;
				}
			}
		}
		if(b==1){
			draftMsg.push(msg);
		}
	}catch(e){}
}
function replaceAll(txt, replace, with_this) {
  return txt.replace(new RegExp(replace, 'g'),with_this);
}
function closegtalkerrmsg()
{
	
	document.getElementById("gerrormess").style.display="none";
}
function closeyahooerrmsg()
{
	
	document.getElementById("ysoutalert").style.display="none";
}
function listdisplaypages(page,grid,pageno)
{
	
	if(!fbToken){
		checkFacebook();
	}
	if(page!="namesms")
	{
		smsdisp();
	}
	if(page=="groupsms1")
	{
		document.getElementById("groupsms").className="active";
	}
	else{
	document.getElementById(page).className="active";
	}
	if(page=='quicksms')
	{
		var ht="";
		if(navigator.appName=="Netscape")
		{
			ht="1365px";
		}
		else
		{
			ht="1365px";
		}
		if(grid!=null)
		{
			//getdat('submenu','smstab','wayList');
			document.getElementById(page).className="active";
			if(grid!="test")
			{
				document.getElementById("wayListView").innerHTML="<iframe id='frame' src='jsp/InstantSMS.jsp?mobileno="+grid+"'  width='964px;' scrolling='no' height='"+ht+"' frameborder='0' marginheight='0' marginwidth='0' ></iframe>";
			}
			else
			{	
				pageno=replaceAll(pageno,"%","%25");
				pageno=replaceAll(pageno,"&","%26");
				pageno=replaceAll(pageno,"<","%3c");
				pageno=replaceAll(pageno,">","%3e");
				pageno=replaceAll(pageno,"#","%23");
				pageno=replaceAll(pageno,"$","%24");
				document.getElementById("dashboard").className="";
				document.getElementById("wayListView").innerHTML="<iframe id='frame' src='jsp/InstantSMS.jsp?gresms="+pageno+"'  width='964px;' scrolling='no' height='"+ht+"' frameborder='0' marginheight='0' marginwidth='0' ></iframe>";	
			}
			
		}
		else
		{
			document.getElementById("wayListView").innerHTML="<iframe id='frame' src='jsp/InstantSMS.jsp'  width='964px;' scrolling='no' height='"+ht+"' frameborder='0' marginheight='0' marginwidth='0' ></iframe>";
		}

	}
	else if(page=='groupsms')
	{
			if(pageno!=null)
			{
				document.getElementById("wayListView").innerHTML ="<iframe id='frame' src='jsp/SendSms.jsp?ram="+Math.random()+"&pageno="+pageno+"&groupid="+grid+"' scrolling='no'  width='964px;'  height='1145px' frameborder='0' marginheight='0' marginwidth='0' ></iframe>";
			}
			else
			{
				document.getElementById("wayListView").innerHTML ="<iframe id='frame' src='jsp/SendSms.jsp?ram="+Math.random()+"' scrolling='no'  width='964px;'  height='1145px' frameborder='0' marginheight='0' marginwidth='0' ></iframe>";
			}
	}
	else if(page=='groupsms1')
	{
		if(pageno!=null)
			{
				document.getElementById("wayListView").innerHTML ="<iframe id='frame' src='jsp/SendSms.jsp?ram="+Math.random()+"&pageno="+pageno+"&groupid="+grid+"&gresms="+draftMsg[draftMsg.length1]+"' scrolling='no'  width='964px;'  height='950px' frameborder='0' marginheight='0' marginwidth='0' ></iframe>";
			}
			else
			{
				document.getElementById("wayListView").innerHTML ="<iframe id='frame' src='jsp/SendSms.jsp?ram="+Math.random()+"&groupid="+grid+"&gresms="+draftMsg[draftMsg.length-1]+"' scrolling='no'  width='964px;'  height='950px' frameborder='0' marginheight='0' marginwidth='0' ></iframe>";
			}
		
	}
	else if(page=='sentsms')
	{
		var ddiv1 = window.parent.document.documentElement;
		ddiv1.scrollTop = ddiv1.scrollTop + 50;
		if(ddiv1.scrollTop==0)
		{
			ddiv1 = window.parent.document.body;
			ddiv1.scrollTop = ddiv1.scrollTop + 50;
		}
		document.getElementById("frame").src="jsp/DisplaySentSms.jsp";

	}
	else if(page=='addressbook')
	{
		if(pageno==null)
		{
			if(grid!=null)
			{
				document.getElementById("wayListView").innerHTML="<iframe id='frame' src='jsp/UserContacts.jsp?mobileno1="+grid+"'  width='964px;' scrolling='no' height='940px' frameborder='0' marginheight='0' marginwidth='0' ></iframe>";
			}
			else
			{
				//getdat('submenu','smstab','wayList');
				document.getElementById(page).className="active";
				document.getElementById("dashboard").className="";
				document.getElementById("wayListView").innerHTML="<iframe id='frame' src='jsp/UserContacts.jsp'  width='964px;' scrolling='no' height='940px' frameborder='0' marginheight='0' marginwidth='0' ></iframe>";
			}
		}
		else
		{
			document.getElementById("wayListView").innerHTML="<iframe id='frame' src='jsp/UserContacts.jsp'  width='944px;' scrolling='no' height='940px' frameborder='0' marginheight='0' marginwidth='0' ></iframe>";
		}
	}
	else if(page=='futuresms')
	{
		if(grid!=null)
		{
			getdat('submenu','smstab','wayList');
			document.getElementById(page).className="active";
			document.getElementById("wayListView").innerHTML="<iframe id='frame' src='jsp/schedulesms1.jsp?mobileno="+grid+"' width='964px;' scrolling='no' height='785px' frameborder='0' marginheight='0' marginwidth='0' ></iframe>";
		}
		else
		{
			document.getElementById("wayListView").innerHTML="<iframe id='frame' src='jsp/schedulesms1.jsp'  width='964px;' scrolling='no' height='785px' frameborder='0' marginheight='0' marginwidth='0' ></iframe>";
		}
	}
	else if(page=='dashboard')
	{changewaydiv("dashboard");
		document.getElementById("wayListView").innerHTML="<iframe id='frame' src='jsp/DashBoard.jsp'  width='964px;' scrolling='no' height='1215px'  frameborder='0' marginheight='0' marginwidth='0' ></iframe>";
	}
	else if(page=="mailalerts")
	{
		document.getElementById("wayListView").innerHTML="<iframe id='frame' src='jsp/mailalerts.jsp'  width='964px;' scrolling='no' height='965px'  frameborder='0' marginheight='0' marginwidth='0' ></iframe>";
	}
	else if(page=="namesms")
		{
				//document.getElementById("quickMailDiv").style.display='none';
				document.getElementById("namesms").style.display='block';
			  if(navigator.appName=="Netscape")
        	  {
        				document.getElementById("namesms").innerHTML="<div class='quickclose' id='quickclose' onClick='waydispclose();'></div>"+"<iframe id='nameframe' src='jsp/NewNameSms.jsp?mobileno="+pageno+"&name="+grid+"&val="+instantsmsvar+"'  width='415px' height='580px' scrolling='no' frameborder='0' style='margin:0; padding:0;'  allowtransparency='true' ></iframe>";
       		   		
       		   		instantsmsvar=1;
       		   }
               else
              {
					document.getElementById("namesms").innerHTML="<div class='quickclose' id='quickclose' onClick='waydispclose();'></div>"+"<iframe id='nameframe' src='jsp/NewNameSms.jsp?mobileno="+pageno+"&name="+grid+"&val="+instantsmsvar+"'  width='415px' height='580px' scrolling='no' frameborder='0' style='margin:0; padding:0;' allowtransparency='true' background='none' ></iframe>";
              	
              		instantsmsvar=1;
              }
			  var ddiv1 = window.parent.document.documentElement; 
			  ddiv1.scrollTop = 310;
			  if(ddiv1.scrollTop==0)
				{
					ddiv1 = window.parent.document.body;
				ddiv1.scrollTop = 310;
				}
				
		}
	
}
function chkallcon()
{
	for(var st=0;st<=document.getElementById("checkbox6").value-1;st++)
	{
		var cheid='cheid'+st;
		if(document.getElementById(cheid).checked==true)
		{
			document.getElementById(cheid).checked=false;
		}
		else
		{
			document.getElementById(cheid).checked=true;
		}
	}
}
function waydispclose()
{
	document.getElementById("namesms").style.display='none';
	document.getElementById('namesms').innerHTML="";
	getListId(li_count,'0');

}
/*-------------           Way2sms Part End    ---------------*/




/*-------------           Chat Part start    ---------------*/
function startonloadLoader()
{
   listquickcontact();
	intialchange();
	//facebooktooltipdisp();
	//facebooktipload();
	//setTimeout("facebooktooltiphide()",15000);
}


var faceb=0;
if(navigator.appName=="Microsoft Internet Explorer")
{
	faceb=1;
}
function loadfacebook()
{
	var script=document.createElement('script');
 		script.setAttribute("type","text/javascript");
		script.setAttribute("src", "business.js");
			if (script.readyState){  //IE
        script.onreadystatechange = function(){
            if (script.readyState == "loaded" ||
                    script.readyState == "complete"){
                script.onreadystatechange = null;
                  window.fbAsyncInit = function() {
				 		//FB.init({appId: '7d7bc3396224c2f5de6316706ef296e0', status: true, cookie: true,xfbml: true});
				 FB.init({appId: '83d2e0c9648f2b1ccf1abf35f2c08593', status: true, cookie: true,xfbml: true});
				 
					   faceb=1;
					
					 //  FB.XFBML.parse(document.getElementById("fbchat"));
				};
	  			//document.getElementById('facebkdisp').innerHTML="<img src='http://v3.way2sms.com/jsp/images/flogin.gif' width='65' height='22' onclick=\"fbChatLogin('chat');\" />";
            }
        };
	    } else {  //Others
	        script.onload = function(){
	            window.fbAsyncInit = function() {
				 		//FB.init({appId: '7d7bc3396224c2f5de6316706ef296e0', status: true, cookie: true,xfbml: true});
					  FB.init({appId: '83d2e0c9648f2b1ccf1abf35f2c08593', status: true, cookie: true,xfbml: true});
					   faceb=1;
					 //  FB.XFBML.parse(document.getElementById("fbchat"));
				};
				//document.getElementById('facebkdisp').innerHTML="<img src='http://v3.way2sms.com/jsp/images/flogin.gif' width='65' height='22' onclick=\"fbChatLogin('chat');\" />";
	        };
	    }
		document.getElementsByTagName("head")[0].appendChild(script);
}



var gtalkload=0;
function gtalklo(type)
{
	if(type=="g")
	{
		document.getElementById("loginprogress").style.display = "block";
	}
	else if(type=="y")
	{
		document.getElementById("yminiload").style.display="block";
	}
	
	if(gtalkload==0)
	{
		var script=document.createElement('script');
 		script.setAttribute("type","text/javascript");
 		//script.setAttribute("src", "http://sc3.way2sms.com/v3/js2/chat1.js");
		script.setAttribute("src", "./js2/chat1.js");
		
		if (script.readyState){  //IE
        script.onreadystatechange = function(){
            if (script.readyState == "loaded" ||
                    script.readyState == "complete"){
                script.onreadystatechange = null;
                if(type=="g")
				{
					gbloklogin1();
				}
				else if(type=="y")
				{
					validlogin();
				}
                gtalkload=1;
            }
        };
	    } else {  //Others
	        script.onload = function(){
	            if(type=="g")
				{
					gbloklogin1();
				}
				else if(type=="y")
				{
					validlogin()
				}
	            gtalkload=1;
	        };
	    }
		document.getElementsByTagName("head")[0].appendChild(script);
		
	}
	else
	{
		if(type=="g")
		{
			gbloklogin1();
		}
		else if(type=="y")
		{
			validlogin();
		}
	}
	
}
function unloadHandler1(event) {
	//document.getElementById("embedDiv").innerHTML="<embed src='http://www.orkut.com/GLogin.aspx?cmd=logout' width='1' height='1' type='text/html'/>";

var X = window.event ? window.event.screenY : event.clientY;

       // IE only because event.clientX for FF = fail.
       if (X == null) 
       {
       		 if(glflag){
       		 										try
													{
											
															var url = "./chat/logout.cl";
														var folderName = "inbox";
														var paramData = "folder=" + myEncode(folderName);
															var callback3 = {
															  success: 	function(o) {glflag=false
																//alert("You are loged out from gtalk")
															  },
														
															  failure: 	function(o) {
																 // alert("You are not loged out from gtalk")
															  
															  },
															  argument: [],
															  timeout: 300000
															}
															var request = YAHOO.util.Connect.asyncRequest('GET', url, callback3, paramData);
																
													}
													catch(e)
													{
														// alert("You are failed to loged out from gtalk")
														//alert(e);
													}

							}

							if(ylflag){try{sout();}catch(e){}}try{closeoverdiv();}catch(e){}
			      			if(fbflag){try{_logout();}catch(e){}}
       }
       else
	 	{
			       var x1=window.event;
			       // IE only because event.clientX for FF = fail.
			      // alert(x1.clientY);
			      // alert(x1.clientY); 
			      if(x1.clientY>0)
			      {
			      	return;
			      }
			      else
			      {
							      if(glflag){
													try
													{
											
															var url = "./chat/logout.cl";
														var folderName = "inbox";
														var paramData = "folder=" + myEncode(folderName);
															var callback3 = {
															  success: 	function(o) {glflag=false
																//alert("You are loged out from gtalk")
															  },
														
															  failure: 	function(o) {
																//  alert("You are not loged out from gtalk")
															  
															  },
															  argument: [],
															  timeout: 300000
															}
															var request = YAHOO.util.Connect.asyncRequest('GET', url, callback3, paramData);
																
													}
													catch(e)
													{
														 //alert("You are failed to loged out from gtalk")
														//alert(e);
													}

										}

							if(ylflag){try{sout();}catch(e){}}try{closeoverdiv();}catch(e){}
							if(fbflag){try{_logout();}catch(e){}}
			      
			      }
       }

}
function unloadHandler() {
	//if(glflag){try{doLogoutChat();}catch(e){alert(e);}}
//alert(glflag)
if(glflag){
try
		{

				var url = "./chat/logout.cl";
			var folderName = "inbox";
			var paramData = "folder=" + myEncode(folderName);
				var callback3 = {
				  success: 	function(o) {
					//alert("You are loged out from gtalk")
				  },
			
				  failure: 	function(o) {
					  //alert("You are not loged out from gtalk")
				  
				  },
				  argument: [],
				  timeout: 300000
				}
				var request = YAHOO.util.Connect.asyncRequest('GET', url, callback3, paramData);
					
		}
		catch(e)
		{
			// alert("You are failed to loged out from gtalk")
			//alert(e);
		}

}

	if(ylflag){try{sout();}catch(e){}}try{closeoverdiv();}catch(e){}
	if(fbflag){try{_logout();}catch(e){}}
}
function intialchange()
{
	if(screen.width==1024)
	{
		nextLeft=left1024;
		nextleft1=left1024;
		left1=28.9;
		leftendcheck=left1;
		//document.getElementById('fbtooltips').style.right='470px';
	}
	else if(screen.width==800)
	{
		nextLeft=left800;
		nextleft1=left800;
		left1=32;
		leftendcheck=left1+left1;
		//document.getElementById('fbtooltips').style.right='470px';
	}
	else if (screen.width == 1280)
	{
		nextLeft = left1280;
		nextleft1 = left1280;;
		left1 = 23;
		leftendcheck=left1;
		//document.getElementById('fbtooltips').style.right='600px;';
	}
	else if (screen.width == 1366)
	{
		nextLeft = left1366;
		nextleft1 = left1366;
		left1 = 21.5;
		leftendcheck=left1+left1;
	}
	else 
	{
		nextLeft = left1366;
		nextleft1 = left1366;
		left1 = 21.5;
		leftendcheck=left1+left1;
	}
}
/*------------------------------------*/

var fbToken=false;
var fbstatus=true;
var mytoken;



function setFuser(){
	//alert("setFuser1");
	if(gtalkload==0)
	{
		var script=document.createElement('script');
 		script.setAttribute("type","text/javascript");
 		script.setAttribute("src", "./js2/chat1.js");
		//script.setAttribute("src", "http://sc3.way2sms.com/v3/js2/chat1.js");
		
		if (script.readyState){  //IE
        script.onreadystatechange = function(){
            if (script.readyState == "loaded" ||
                    script.readyState == "complete"){
                script.onreadystatechange = null;
              setFuser1();
                gtalkload=1;
            }
        };
	    } else {  //Others
	        script.onload = function(){
	            setFuser1();
	            gtalkload=1;
	        };
	    }
		document.getElementsByTagName("head")[0].appendChild(script);
		
	}
	else
	{
		setFuser1();
	}
}
function ffuser(){
	document.getElementById("fbload").style.display="block";
	if(gtalkload==0)
	{
		var script=document.createElement('script');
 		script.setAttribute("type","text/javascript");
		//script.setAttribute("src", "http://sc3.way2sms.com/v3/js2/chat1.js");
		script.setAttribute("src", "./js2/chat1.js")
		if (script.readyState){  //IE
        script.onreadystatechange = function(){
            if (script.readyState == "loaded" ||
                    script.readyState == "complete"){
                script.onreadystatechange = null;
             	FBlogin(); 
                gtalkload=1;
            }
        };
	    } else {  //Others
	        script.onload = function(){
	            FBlogin(); 
	            gtalkload=1;
	        };
	    }
		document.getElementsByTagName("head")[0].appendChild(script);
		
	}
	else
	{
		FBlogin(); 
	}
}


function checkFacebook(){
	var paramData = "faction="+"checkFB";
		paramData += "&wfb="+"main";
		var url = "./FBMain";
		var callback = {
		  success: 	function(o) {
		  //alert(o.responseText);
		  if(o.responseText !=""){
			 	if(o.responseText=="nofb"){
			  		fbToken=false;
			  	}else{
			  		fbToken=true;
			  	}
		  	}
		  //	alert("1 : "+fbToken);
		 },
	
		  failure: 	function(o) {
		  },
		  argument: [],
		  timeout: 300000
		}
		var request = YAHOO.util.Connect.asyncRequest('POST', url, callback, paramData);
}

function fbChatLogin(fbody){
		
  FB.login(function(response) {
	  if (response.session) {
	    if (response.perms) {
	    	shareFcontent(fbody)
	    } else {
	      return false;
	    }
	  } else {
	  	return false;
	  }
  }, {perms:'read_stream,publish_stream,friends_birthday'});
	
}
function shareFcontent(fbody){
	var body = fbody;
	FB.api('/me/feed', 'post', { message: body }, function(response) {
	  if (!response || response.error) {
	    alert('Not allowed to share the same content again and again');
	    // FB.logout();
	  } else {
	    alert("Posted Successfully");
	    //FB.logout();
	  }
});

}
function fbChatLogin1(type,sno){
	if(faceb==0){	
		loadfacebook();
	    setTimeout("fbChatLogin1('"+type+"',"+sno+")",1000);
	}
	else{
		var set="";
		if(type=="campshare"){  
			//set=document.getElementById('contentFrame').contentWindow.document.getElementById("fbHref"+sno).innerHTML;
		//	document.getElementById('contentFrame').contentWindow.document.getElementById("fbHref"+sno).innerHTML="<img style='float:right; height:27px;' src='./images/loading1.gif' />";
		} 
		  FB.login(function(response) {
			  if (response.session) {
			    if (response.perms) {
			    	var mes= 
				      {
				         "access_token": FB.getSession().access_token,
				         "uid":  FB.getSession().uid ,
				         "skey":  FB.getSession().session_key
				      }
			      
			    mes=FB.JSON.stringify(mes);
			    var paramData = "faction=insertFB";
			    paramData += "&fdata="+mes+"&act="+type;
			    var url = "./FBMain";
				var callback = {
				  success: 	function(o) {
				  		mytoken=FB.getSession().access_token;
				 		fbToken=true;
				 		if(type=="chat"){
				 			setFuser();
				 		}
				 		else if(type=="newuser"){
							//document.getElementById('contentFrame').contentWindow.document.getElementById('fbHref'+sno).innerHTML='<b>'+o.responseText+'</b> <a href=javascript:void(0); onclick=javascript:window.parent.fbChatLogin1(\"newuser\");>Delink</a>';
				 		}
				 		else if(type=="settings"){
							document.getElementById('ifrm_settings').src="jsp/Settingsconfirm.jsp?mess=Your Facebook account added Successfully&back=settings3";
				 		}
				 		else if(type=="campshare"){
				 		//	document.getElementById('contentFrame').contentWindow.document.getElementById('fbHref'+sno).innerHTML=set;
				 			shareFacebookContent(sno);
				 		}
				 		else if(type=="chat1"){
				 			_login();
				 		}
				 },
			
				  failure: 	function(o) {
				  },
				  argument: [],
				  timeout: 300000
				}
				var request = YAHOO.util.Connect.asyncRequest('POST', url, callback, paramData);
			    
			    
			    
			      //setFuser();
			    } else {
			      return;
			    }
			  } else {
			  	fbstatus=false;
			    return;
			  }
		  }, {perms:'offline_access,xmpp_login,read_stream,publish_stream,user_photos,friends_photos,friends_birthday'});
	}
}

function _disconnectFromFacebook(){
//alert("xfvgfgv");

	FB.logout();	    
	var paramData = "faction="+"deleteFB";
	    paramData += "&fdata=completelogout";
	    var url = "./FBMain";
		var callback = {
		  success: 	function(o) {
			//setFuser();
				document.getElementById("fldiv").style.display="block";
				user_box = document.getElementById("fuser");
          user_box.innerHTML="";
		  		/*mytoken=FB.getSession().access_token;
		 		fbToken=true;
		 		if(type=="chat"){
		 			setFuser();
		 		}*/
		 },
	
		  failure: 	function(o) {
			// alert("4355");
		 
		  },
		  argument: [],
		  timeout: 300000
		}
		var request = YAHOO.util.Connect.asyncRequest('POST', url, callback, paramData);
	    

}
/*----------------------Chat New Addition Start------------*/
function hidtabbottom()
{
	document.getElementById("invitetab1").style.display='none';
	document.getElementById("invitetab2").style.display='none';
	document.getElementById("yChatList").style.display='none';
	document.getElementById("yahootab2").style.display='none';
	document.getElementById("fbChatList").style.display='none';
	document.getElementById("facebooktab2").style.display='none';
	document.getElementById("gChatList").style.display='none';
	document.getElementById("gtalktab2").style.display='none';
	document.getElementById("quickcontacts2").style.display='none';
	document.getElementById("quickcontacts3").style.display='none';
	document.getElementById("google").style.display='none';
	document.getElementById("google1").style.display='none';
	//document.getElementById("fbtooltips").style.display='none';
	document.getElementById("feedback").style.display='none';
	document.getElementById("feedback1").style.display='none';
}
function waytabhide()
{

	document.getElementById("quickcontacts2").style.display='none';
	document.getElementById("quickcontacts3").style.display='none';
	//facebooktooltipdisp();
}
function facebooktooltipdisp()
{
	document.getElementById("fbtooltips").style.display='block';
}
var tooltiptimeout=null;
function botoomtooltipdisp(id)
{
	tooltiptimeout=setTimeout("botoomtooltipdisp1('"+id+"')",500);
}
function botoomtooltipdisp1(id)
{
	document.getElementById(id).style.display='block';
}
function botoomtooltiphide(id)
{
		if(tooltiptimeout != null){
			clearTimeout(tooltiptimeout);
		}
		
	document.getElementById(id).style.display='none';
}

function botoomtabdisp(div1,div2,div3,div4)
{
	if(div4!=undefined)
	{
		if(faceb==0)
			{	//alert("dxxxx");
				loadfacebook();
				//FB.XFBML.parse(document.getElementById("fbChatList"));
			}
		if(div4=="test")
		{
			hidtabbottom();
		}
		else if(div4=="test1")
		{
			
			hidtabbottom();
		}
		else if(div4=="test2")
		{
			hidtabbottom();
			document.getElementById("ysignin").disabled=false;
		}
		else if(div4=="test3")
		{
			hidtabbottom();
			document.getElementById("gsignin").disabled=false;
		}
		else if(div4=="test4")
		{
			hidtabbottom();
			
		}
		else
		{
			//hidtabbottom();
			document.getElementById(div4).disabled=false;
		}
	} 
	if(div3==undefined)
	{
		document.getElementById(div1).style.display=div2;
	}
	else
	{
	document.getElementById(div1).style.display=div3;
	document.getElementById(div2).style.display=div3;
	}
}
function shareCount(type){
	
	var paramData = "faction="+"count";
	paramData += "&type="+type;
	var url = "./ShareCount";
	var callback = {
	  success: 	function(o) {
	  if(o.responseText !=""){
		  
	  }
		 
	 },

	  failure: 	function(o) {
	  },
	  argument: [],
	  timeout: 300000
	}
	var request = YAHOO.util.Connect.asyncRequest('POST', url, callback, paramData);
}
var orktr=0;
function loadorkut12()
{
	if(orktr==0){
		var script=document.createElement('script');
 		script.setAttribute("type","text/javascript");
		script.setAttribute("src", "http://images.way2sms.com/v3/js2/orkut.js");
		if (script.readyState){  //IE
        script.onreadystatechange = function(){
            if (script.readyState == "loaded" ||
                    script.readyState == "complete"){
                script.onreadystatechange = null;
                orktr=1;
            }
        };
	    } else {  //Others
	        script.onload = function(){
	          orktr=1;
			 };
	    }
		document.getElementsByTagName("head")[0].appendChild(script);
		}
}

/*----------------------Chat New Addition End------------*/

/*-------------           Chat Part End    ---------------*/

var emaildiv=0;
var newdiv ="";
var email_names = new Array();
var email_ids = new Array();
var email_dobs = new Array();
var email_ages = new Array();
gecont=0
function getEmailContacts(reqFrom,id){
	
	if(emaildiv==0)	{
		newdiv = document.createElement('div');
		newdiv.setAttribute('id', 'emdiv1');
		document.body.appendChild(newdiv);  
		emaildiv=1;
	}
    newdiv.innerHTML="";
    
 	email_names="";	
	email_ids="";
	email_dobs="";
	email_ages="";
 	try	{
		var url = "./EmailContacts";
		var paramData = "";
		var callback4 = {
		  success: 	function(o) {
				if(o.responseText != undefined){
				try {
					newdiv.innerHTML=o.responseText;
					gecont=1;
					if(document.getElementById("hid_mail")!=null){
						if(document.getElementById("hid_mail").value.split("~sin~").length>1) {
							email_names=document.getElementById("hid_name").value.split("~sin~");	
							email_ids=document.getElementById("hid_mail").value.split("~sin~");
						}
					}
					if(reqFrom=="quickmail"){
						listquickmail();
					}
					else if(reqFrom=="mailalerts"){
						document.getElementById("MAframe").contentWindow.dispListcont('3');
					}
					else if(reqFrom=="speedmail"){
						document.getElementById(id).contentWindow.document.getElementById("composeFrame").contentWindow.loadContacts();
					}
					else if(d("qmc").className=="aactive"){
						listquickmail();
					}
				} 
				catch(e){
					alert("exc"+e);
				}
			}
		  },
		  failure: 	function(o) {
		  	//logout1();
		  },
		  argument: [],
		  timeout: 300000
		}
		var request = YAHOO.util.Connect.asyncRequest('POST', url, callback4, paramData);
	}
   	catch(e){
   		//window.parent.window.parent.finsh1();
   	}
}
/*--------------------- Ecards Part Start ------------------*/

var ecardvl=0;

function ecardld(){
	//alert("s");
	if(ecardvl==0)
	{
		var script=document.createElement('script');
	 		script.setAttribute("type","text/javascript");
			script.setAttribute("src", "./js2/ecard.js");
			
			if (script.readyState){  //IE
	        script.onreadystatechange = function(){
	            if (script.readyState == "loaded" ||
	                    script.readyState == "complete"){
					ecarddisplaypages("ecardhometab");
					ecardvl=1;	
	            }
	        };
		    } else {  //Others
		        script.onload = function(){
		          ecarddisplaypages("ecardhometab");
		          ecardvl=1;	
		        };
		    }
			document.getElementsByTagName("head")[0].appendChild(script);
			
	}
	else
	{
			ecarddisplaypages("ecardhometab");
	}
	
}
/*--------------------- Ecards Part END ------------------*/
function socialloader(cat){
	inactivateSocialSubTags();
	document.getElementById(cat).className="active";
	if(cat=='sDash'){
		document.getElementById("socialDiv").innerHTML="<iframe id='contentFrame' name='contentFrame' src='socialDash.action' height='500' width='736' scrolling='no' frameborder='0'></iframe>";
	}
	else if(cat=='sAds'){
		document.getElementById("socialDiv").innerHTML="<iframe id='contentFrame' name='contentFrame' src='pCamps.action' height='500' width='736' scrolling='no' frameborder='0'></iframe>";
	}
	else if(cat=='sMyEarns'){
		document.getElementById("socialDiv").innerHTML="<iframe id='contentFrame' name='contentFrame' src='freeEarnings.action' height='500' width='736' scrolling='no' frameborder='0'></iframe>";
	}
	else if(cat=='sReNow'){
		document.getElementById("socialDiv").innerHTML="<iframe id='contentFrame' name='contentFrame' src='freerecharge.action' height='500' width='736' scrolling='no' frameborder='0'></iframe>";
	} 	
	else if(cat=='sMyReTrans'){
		document.getElementById("socialDiv").innerHTML="<iframe id='contentFrame' name='contentFrame' src='frTrans.action' height='500' width='736' scrolling='no' frameborder='0'></iframe>";
	} 	
	else if(cat=='sRules'){
		document.getElementById("socialDiv").innerHTML="<iframe id='contentFrame' name='contentFrame' src='sRules.action' height='500' width='736' scrolling='no' frameborder='0'></iframe>";
	} 	
	else if(cat=='sFaqs'){
		document.getElementById("socialDiv").innerHTML="<iframe id='contentFrame' name='contentFrame' src='sFaqs.action' height='500' width='736' scrolling='no' frameborder='0'></iframe>";
	} 	
	else if(cat=='sVideos'){
		document.getElementById("socialDiv").innerHTML="<iframe id='contentFrame' name='contentFrame' src='sVideos.action' height='500' width='736' scrolling='no' frameborder='0'></iframe>";
	} 	
}


function inactivateSocialSubTags(){
    document.getElementById("sDash").className=""; 
    document.getElementById("sAds").className="";
    document.getElementById("sMyEarns").className="";
    document.getElementById("sReNow").className="";
    document.getElementById("sMyReTrans").className="";
    document.getElementById("sRules").className="";
    document.getElementById("sFaqs").className="";
    document.getElementById("sVideos").className="";
}
function gamesonloadloader(cat){
	inactivateGamesSubTags();
	document.getElementById(cat).className="active";
	if(cat=='home'){
		document.getElementById("gamesDiv").innerHTML="<iframe id='gamesFrame' src='gameshome.action'  width='964px;' scrolling='no' height='1500px' frameborder='0' marginheight='0' marginwidth='0' ></iframe>";
	}
	else if(cat=='mygames'){
		document.getElementById("gamesDiv").innerHTML="<iframe id='gamesFrame' src='myGames.action'  width='964px;' scrolling='no' height='1100px' frameborder='0' marginheight='0' marginwidth='0' ></iframe>";
	}
	else{
		document.getElementById("gamesDiv").innerHTML="<iframe id='gamesFrame' src='gamesCategories.action?category="+cat+"'  width='964px;' scrolling='no' height='1100px' frameborder='0' marginheight='0' marginwidth='0' ></iframe>";
	}
	
}

function inactivateGamesSubTags(){
    document.getElementById("home").className="";
    document.getElementById("3d").className="";
    document.getElementById("action").className="";
    document.getElementById("race").className="";
    document.getElementById("shooting").className="";
    document.getElementById("adventure").className="";        
    document.getElementById("cricket").className="";    
    document.getElementById("sports").className="";
    document.getElementById("arcade").className="";
    document.getElementById("puzzle").className="";
    document.getElementById("hot").className="";
    document.getElementById("mygames").className="";
}
function emailCheck (emailStr) 
	{
	
var checkTLD=1;
var knownDomsPat=/^(com|net|org|edu|int|mil|gov|arpa|biz|aero|name|coop|info|pro|museum)$/;
var emailPat=/^(.+)@(.+)$/;
var specialChars="\\(\\)><@,;:\\\\\\\"\\.\\[\\]";
var validChars="\[^\\s" + specialChars + "\]";
var quotedUser="(\"[^\"]*\")";
var ipDomainPat=/^\[(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})\]$/;
var atom=validChars + '+';
var word="(" + atom + "|" + quotedUser + ")";
var userPat=new RegExp("^" + word + "(\\." + word + ")*$");
/* The following pattern describes the structure of a normal symbolic
domain, as opposed to ipDomainPat, shown above. */
var domainPat=new RegExp("^" + atom + "(\\." + atom +")*$");
/* Finally, let's start trying to figure out if the supplied address is valid. */
/* Begin with the coarse pattern to simply break up user@domain into
different pieces that are easy to analyze. */

var matchArray=emailStr.match(emailPat);

if (matchArray==null)
	{
/* Too many/few @'s or something; basically, this address doesn't
even fit the general mould of a valid e-mail address. */
alert("Email address seems incorrect (check @ and .'s)");
return false;
}
var user=matchArray[1];
var domain=matchArray[2];
// Start by checking that only basic ASCII characters are in the strings (0-127).
for (i=0; i<user.length; i++) {
if (user.charCodeAt(i)>127)
  {
alert("Ths username contains invalid characters.");
return false;
   }
}
for (i=0; i<domain.length; i++) {
if (domain.charCodeAt(i)>127) {
alert("Ths domain name contains invalid characters.");
return false;
   }
}

// See if "user" is valid 

if (user.match(userPat)==null) {

// user is not valid

alert("The username doesn't seem to be valid.");
return false;
}

/* if the e-mail address is at an IP address (as opposed to a symbolic
host name) make sure the IP address is valid. */

var IPArray=domain.match(ipDomainPat);
if (IPArray!=null) {

// this is an IP address

for (var i=1;i<=4;i++) {
if (IPArray[i]>255) {
alert("Destination IP address is invalid!");
return false;
   }
}
return true;
}

// Domain is symbolic name.  Check if it's valid.
 
var atomPat=new RegExp("^" + atom + "$");
var domArr=domain.split(".");
var len=domArr.length;
for (i=0;i<len;i++) {
if (domArr[i].search(atomPat)==-1) {
alert("The domain name does not seem to be valid.");
return false;
   }
}

/* domain name seems valid, but now make sure that it ends in a
known top-level domain (like com, edu, gov) or a two-letter word,
representing country (uk, nl), and that there's a hostname preceding 
the domain or country. */

if (checkTLD && domArr[domArr.length-1].length!=2 && 
domArr[domArr.length-1].search(knownDomsPat)==-1)
{
alert("The address must end in a well-known domain or two letter " + "country.");
return false;
}

// Make sure there's a host name preceding the domain.

if (len<2) {
alert("This address is missing a hostname!");
return false;
}
// If we've gotten this far, everything's valid!
return true;
}
function subb(cust)
{
    var help=document.getElementById('hop').value;
    if(help==""){
        alert("Please Enter Your FeedBack !!");
        return;
    }
    var paramData = "help=##" + help+"##";
    paramData += "&custid=" + cust;
    var url = "./Feed";
    var callback = {
      success:     function(o) {
      
          var temp=o.responseText;
           if(temp == "Ok"){   
        	    alert("Thank you for your feedback");
              document.getElementById('al').style.display="none";
              document.getElementById('hop').value="";
              document.getElementById('txtlen').value=1000;
              showAlert("feedconfirm",null,"saved");
             
        }
        if(o.responseText == "Fail"){
        showAlert("feedconfirm",null,"notsaved");
            document.getElementById('hop').focus(); 
            alert(o.responseText);
        }
      },
      failure:     function(o) {
      },
      argument: [],
      timeout: 300000
    }
    var request = YAHOO.util.Connect.asyncRequest('POST', url, callback, paramData);   
}
var freerechargeFB=0;
function countChars(l)
{
       var len=document.getElementById("hop").value.length;
       if(len<=l)
       document.getElementById("txtLen").value=l-document.getElementById("hop").value.length;
       if(document.getElementById("hop").value==-1)
     	document.getElementById("hop").value=0;
	
	 if(len>=l)
	 {
		document.getElementById("hop").value=document.getElementById("hop").value.substring(0,l);  
	 }
 }

function setscroolheight(height)
{
	window.scrollTo(height,height);
	
}