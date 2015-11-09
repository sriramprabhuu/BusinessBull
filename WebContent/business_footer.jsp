<div class="bottomwall" id="bottamwall11" align="center">
			<div style="width: 994px; text-align: left; cursor: pointer;">
				<div class="sprite1 bmid" style="background-repeat: repeat-x;">
					<div id="quickcontacts2" class="qcont ccontcats sms-con"
						style="display: none; border: 0">
						<div id='wContacts'>
							<div class='wtBar'>
								<table width='100%' border='0' cellspacing='0' cellpadding='0'>
									<tr>
										<td width='85%' height='34'><p class='heading'
												style='text-transform: uppercase;'>Bull  Contacts</p></td>
										<td width='15%' align='center'><p class="wcmin"
												onclick='waytabhide();'></p></td>
									</tr>
								</table>
							</div>
							<div class='wContactList'>
								<div class='cStatus'>
									<div class='wcsearch'>
										<p class="wcscim"></p>
										<input type='text' name='cname' id='cname'
											value='Search Contacts'  class='input' />
									</div>
								</div>
								<ul id='quickcontacts' style="margin-left: 5px;">Loading..
								</ul>
							</div>
						</div>
					</div>
					<div class="tabbb tabwaysms" id="quickcontacts3"
						onclick="botoomtabdisp('quickcontacts2','quickcontacts3','none','test');"
						style="display: none; cursor: pointer;">
						<b></b><strong style="">Contacts</strong>
					</div>
					<div id="google" class="qcont ccontcats qconmmail"
						style="display: none; padding: 5px 8px;">
						<div class="chatclose"
							style="cursor: pointer; display: block; margin-left: 8px; margin-top: 0; padding: 0;"
							onclick="botoomtabdisp('google1','google2','none');"></div>
						<div class="head">
							<i></i><b>Mail Contacts</b>
							<div id='emidsearch' class="shar-search">
								<input type='text' class="search" name='mcname' id='mcname'
									value='Email Contacts'
									onfocus="if(this.value=='Email Contacts'){this.value=''}"
									onKeyUp="quickMailSearch();" />
							</div>
						</div>
						<div id='mquickcon'
							style="overflow: auto; width: 198px; height: 253px; overflow-x: hidden;">
							<div style="margin-top: 70px; margin-left: 20px;">
								<div style="padding: 2px; float: left; margin-left: 25PX;">
									<a id="lnkLodmacon" href="javascript:maillo('quick');">Load
										Mail Contacts</a>
									<div id="loDivLMC" style="display: none; height: 20px;">Loading...</div>
								</div>
							</div>
						</div>
					</div>
					<div id="google1" class="tabbb tabmmail"
						onclick="mailcontacttabdisp1();" style="display: none;">
						<b></b>
					</div>
					<div class="qcont yahoo-con" id="yChatList" style="display: none;">
						<div class="statusPopup lin" id="yahooselstatus"
							style="display: none;" onmouseout="unselystatus();"
							onmouseover="selystatus();" style="display:none;">
							<div style="padding: 4px 10px;">
								<strong> Select Status </strong>
							</div>
							<p onclick="javascript:yahoostatus(&#39;available&#39;);">
								<a><span class="sGreen"> </span>&nbsp; Available </a>
							</p>
							<p onclick="javascript:yahoostatus(&#39;busy&#39;);">
								<a><span class="sRed"> </span> &nbsp;Busy </a>
							</p>
							<p onclick="javascript:yahoostatus(&#39;invisible&#39;);">
								<a><span class="sGrey"> </span> &nbsp;Invisible </a>
							</p>
						</div>
						<div class="optionsPopup lin" id="ulmenu" onmouseover="optOver();"
							onmouseout="optOut12();"
							style="position: absolute; z-index: 10000000; display: none;">
							<div style="padding: 4px 10px;">
								<strong> Select Option </strong>
							</div>
							<div style="padding: 5px 7px; color: #4b4b4b;"
								onclick="javascript:actrequest();">
								<p class="addBdy" style="float: left;"></p>
								&nbsp;&nbsp; Add Buddy
							</div>
							<div style="padding: 5px 7px; color: #4b4b4b;"
								onclick="javascript:getdata('all','listchathistory','ychats');">
								<p class="chHi" style="float: left;"></p>
								&nbsp; &nbsp;Chat History
							</div>
						</div>
						<div class="ytBar">
							<table width="100%" height="27" border="0" cellspacing="0"
								cellpadding="0">
								<tr>
									<td width="85%" height="27"><p class="heading">Yahoo
											Messenger</p></td>
									<td width="15%" align="center"><div class="ymin"
											onclick="botoomtabdisp('yChatList','yahootab2','none','test2');">
										</div></td>
								</tr>
							</table>
						</div>
						<div class="yLogin" id="y_login" style="display: block">
							<h1>Login to Yahoo! Account</h1>
							<div class="loginBox">
								<table width="189" border="0" align="center" cellpadding="0"
									cellspacing="0" style="color: #613f77;">
									<tr>
										<td height="30"><strong>Email :</strong></td>
									</tr>
									<tr>
										<td height="30"><label> <input id="mailid"
												name="mailid" value="" type="text"
												onkeydown="javascript:closeyahooerrmsg();"
												onkeyup="javascript:closeyahooerrmsg();"
												onkeypress="javascript:closeyahooerrmsg();" class="inp" />
										</label></td>
									</tr>
									<tr>
										<td height="30"><strong>Password :</strong></td>
									</tr>
									<tr>
										<td height="30"><input id="ypassword" name="ypassword"
											value="" type="password"
											onkeydown="javascript:closeyahooerrmsg();"
											onkeyup="javascript:closeyahooerrmsg();"
											onkeypress="javascript:closeyahooerrmsg();" class="inp" /></td>
									</tr>
								</table>
							</div>
							<p style="padding: 5px 0;">
							<table width="90%" border="0" align="center" cellpadding="0"
								cellspacing="0">
								<tr>
									<td width="66%" height="30" align="center"><label>
											<input id="ysavedetail" name="ysavedetail" value="1"
											type="checkbox" checked="checked" />
									</label> Stay Signed In</td>
									<td width="34%">
										<button name="ysignin" id="ysignin"
											onclick="javascript:gtalklo('y');">Login</button>
									</td>
								</tr>
							</table>
							</p>
							<div class="yloadingimg" style="display: block;">
								<span id="yminiload" style="display: none" />Loading...</span>
							</div>
							<div id="ysoutalert"
								style="display: none; position: absolute; bottom: 30px; left: 5px; width: 180px;"
								class="style1">Gtalk & Password</div>
						</div>
						<div class="yContactList" id="yahoocontacts"
							style="display: none;">
							<div class="cStatus" id="ystatusdisplay">
								<table width="90%" border="0" cellspacing="0" cellpadding="0">
									<tr>
										<td width="50%" id="yahooname"></td>
										<td width="50%"><div class="staBox"
												onclick="selystatus();" onmouseout="unselystatus();">
												<p id="ychatstatus" class="sGreen"></p>
												<p style="padding-left: 12px; *padding-left: 8px;"
													id="ystatusmsg">
													&nbsp;&nbsp; Available <span
														style="font-family: Arial; Font-size: 11px; cursor: pointer;">
														&#9660; </span>
												</p>
											</div></td>
									</tr>
								</table>
							</div>
							<div id="ytrynow"
								style="padding: 5px; display: none; background: #fff3ce; clear: both; height: 25px;">
								<div id="yconnectto"
									style="color: #ff0000; height: 12px; padding-bottom: 3px; margin-left: 20px">connecting...</div>
								<div id="ytry" style="height: 12px; margin-left: 20px;">
									<a href="javascript:validloginagain();">Try Now</a>
								</div>
							</div>
							<ul id="yahoochatlist">
							</ul>
							<div>
								<div class="coptions" id="ysignout" onclick="sout();">
									<p class="clogt"></p>
									Logout
								</div>
								<div class="coptions" onmouseover="optOver();"
									onmouseout="optOut12();">
									<p class="coptt"></p>
									Options
								</div>
							</div>
						</div>
					</div>
					<div class="tabbb tabyahoo" id="yahootab2"
						onclick="botoomtabdisp('yChatList','yahootab2','none','test2');"
						style="display: none">
						<b></b>
					</div>
					<div id="gChatList" class="qcont gtalk-con" style="display: none;">
						<div class="statusPopup lin" id="gtalkselstatus"
							style="display: none" onmouseout="unselgstatus();"
							onmouseover="selgstatus();">
							<div style="padding: 4px 10px;">
								<strong> Select Status </strong>
							</div>
							<p onclick="javascript:saveStatus('available');">
								<a><span class="sGreen"> </span>&nbsp; Available </a>
							</p>
							<p onclick="javascript:saveStatus('disturb');">
								<a><span class="sRed"> </span> &nbsp;Busy </a>
							</p>
							<p onclick="javascript:saveStatus('away');">
								<a><span class="sOrrange"> </span> &nbsp;Away </a>
							</p>
						</div>
						<div class="optionsPopup lin" id="gulmenu"
							onmouseover="goptOver();" onmouseout="goptOut();"
							style="position: absolute; z-index: 10000000; display: none;">
							<div style="padding: 4px 10px;">
								<strong> Select Option </strong>
							</div>
							<div style="padding: 5px 7px; color: #4b4b4b;"
								onclick="javascript:addContact();">
								<p class="addBdy" style="float: left;"></p>
								&nbsp;&nbsp; Add Buddy
							</div>
							<div style="padding: 5px 7px; color: #4b4b4b;"
								onclick="javascript:getdata('all','listchathistory','gchats');">
								<p class="chHi" style="float: left;"></p>
								&nbsp;&nbsp; Chat History
							</div>
						</div>
						<div class="gtBar">
							<table width="100%" border="0" cellspacing="0" cellpadding="0">
								<tr>
									<td width="85%" height="27"><p class="heading">Gtalk</p></td>
									<td width="15%" align="center"><div class="gmin"
											onclick="botoomtabdisp('gChatList','gtalktab2','none','gsignin');">
										</div></td>
								</tr>
							</table>
						</div>
						<div class="gLogin" id="login_gtalk" style="display: block;">
							<h1>Login to Gtalk Account</h1>
							<div class="loginBox">
								<table width="169" border="0" align="center" cellpadding="0"
									cellspacing="0" style="color: #035ba5;">
									<tr>
										<td height="30"><strong>Email :</strong></td>
									</tr>
									<tr>
										<td height="30"><label> <input id="gmailid"
												name="gmailid" value="" type="text"
												onkeydown="javascript:closegtalkerrmsg();"
												onkeyup="javascript:closegtalkerrmsg();"
												onkeypress="javascript:closegtalkerrmsg();" class="inp" />
										</label></td>
									</tr>
									<tr>
										<td height="30"><strong>Password :</strong></td>
									</tr>
									<tr>
										<td height="30"><input id="gpassword" name="gpassword"
											value="" type="password"
											onkeydown="javascript:closegtalkerrmsg();"
											onkeyup="javascript:closegtalkerrmsg();"
											onkeypress="javascript:closegtalkerrmsg();" class="inp" /></td>
									</tr>
								</table>
							</div>
							<p style="padding: 5px 0;">
							<table width="90%" border="0" align="center" cellpadding="0"
								cellspacing="0">
								<tr>
									<td width="66%" height="30" align="center"><label>
											<input id="gcheck" name="gcheck" value="1" type="checkbox"
											checked="checked" />
									</label> Stay Signed In</td>
									<td width="34%">
										<button name="gsignin" id="gsignin"
											onclick="javascript:gtalklo('g');">Login</button>
									</td>
								</tr>
							</table>
							</p>
							<div class="gloadingimg" style="display: block;">
								<span id="loginprogress" style="display: none" />Loading...</span>
							</div>
							<div id="gerrormess"
								style="display: none; position: absolute; bottom: 30px; left: 5px; width: 180px;"
								class="style1">Gtalk & Password</div>
						</div>
						<div class="gContactList" name="gmailcontacts" id="gmailcontacts"
							style="display: none;">
							<div class="cStatus" id="statusdisplay">
								<table width="90%" border="0" cellspacing="0" cellpadding="0">
									<tr>
										<td width="50%" id="gtalkname"></td>
										<td width="50%"><div class="staBox"
												onclick="selgstatus();" onmouseout="unselgstatus();">
												<p id="gchatstatus" class="sGreen"></p>
												<p style="padding-left: 12px; *padding-left: 8px;"
													id="newstatus1">
													&nbsp;&nbsp;Available <span
														style="font-family: Arial; Font-size: 11px; cursor: pointer;">
														&#9660; </span>
												</p>
											</div></td>
									</tr>
								</table>
							</div>
							<div id="conect1"
								style="background: #fff3ce; clear: both; height: 25px; display: none;">
								<div id="conect"
									style="color: #ff0000; height: 12px; padding-bottom: 3px; margin-left: 20px">Connecting...</div>
								<div id="conect2" style="height: 12px; margin-left: 20px;">
									<a style="cursor: pointer" onclick="gtalkloginagain();">Try
										now</a>
								</div>
							</div>
							<ul id="gtalkchatlist">
							</ul>
							<div>
								<div class="coptions" id="gsignout" onclick="doLogoutChat();">
									<p class="clogt"></p>
									Logout
								</div>
								<div class="coptions" onmouseover="goptOver();"
									onmouseout="goptOut();">
									<p class="coptt"></p>
									Options
								</div>
							</div>
						</div>
					</div>
					<div class="tabbb tabgtalk" id="gtalktab2"
						onclick="botoomtabdisp('gChatList','gtalktab2','none','test3');"
						style="display: none">
						<b></b>
					</div>
					<div class="qcont fb-con" id="fbChatList" style="display: none;">
						<div class="statusPopup lin" style="display: none;">
							<div style="padding: 4px 10px;">
								<strong> Select Status </strong>
							</div>
							<p>
								<a href=""><span class="sGreen"> </span>&nbsp; Available </a>
							</p>
							<p>
								<a href=""><span class="sRed"> </span> &nbsp;Busy </a>
							</p>
							<p>
								<a href=""><span class="sOrrange"> </span> &nbsp;Away </a>
							</p>
							<p>
								<a href=""><span class="sGrey"> </span> &nbsp;Invisible </a>
							</p>
						</div>
						<div class="optionsPopup lin" style="display: none;">
							<div style="padding: 4px 10px;">
								<strong> Select Option </strong>
							</div>
							<p>
								<a href=""><span class="addBdy"> </span>&nbsp; Add Buddy </a>
							</p>
							<p>
								<a href=""><span class="chHi"> </span> &nbsp;Chat History </a>
							</p>
						</div>
						<div class="ftBar">
							<table width="100%" border="0" cellspacing="0" cellpadding="0">
								<tr>
									<td width="85%" height="27"><p class="heading">Facebook
										</p></td>
									<td width="15%" align="center"><div class="fmin"
											onclick="botoomtabdisp('fbChatList','facebooktab2','none');">
										</div></td>
								</tr>
							</table>
						</div>
						<div id="flogin" class="fbLogin" style="display: block;">
							<h1>Login to Facebook Account</h1>
							<div class="fb-wj-log" id="fldiv">
								<div class="fb-log-but" style="padding: 20px 8px;">
									<div id='facebkdisp' class="fb-wj-bdr"
										style="padding: 10px; width: 66px; margin: 0 auto; height: 22px;">
										<div class="flog" onclick="fbChatLogin1('chat');"></div>
									</div>
								</div>
								<br>
								<div style="font-size: 12px; color: red; text-align: center;">
									<b>Note:</b> Facebook authentication opens in a new window..
								</div>
							</div>
							<div id="fuser"></div>
						</div>
						<div id="facecontacts" class="fbContactList"
							style="display: none;">
							<div class="cStatus">
								<table width="90%" border="0" cellspacing="0" cellpadding="0">
									<tr>
										<td width="50%"><fb:name uid="" useyou=false
												linked="false"></fb:name></td>
										<td width="50%"><div class="staBox" id="fbstatusdisplay">
												<p class="sGreen"></p>
												<p style="padding-left: 12px; *padding-left: 8px;">
													Available</p>
											</div></td>
									</tr>
								</table>
							</div>
							<div>
								<ul id="fbchat1">
									<li>No one is available to chat.</li>
								</ul>
							</div>
							<div>
								<div class="coptions" id="fsignout" onclick="_logout();">
									<p class="clogt"></p>
									Logout
								</div>
								<!--  <p class="coptions"> <img src="images/options.png" /> Options </p> -->
							</div>
						</div>
					</div>
					<div id="feedback" class="qcont" style="display: none;">
						<div class="chatclose"
							style="cursor: pointer; display: block; margin-left: 8px; margin-top: 0; padding: 0;"
							onclick="botoomtabdisp('feedback','feedback1','none','test');"></div>
						<div class="pading">
							<h2>Feedback</h2>
							<p>
								Please verify your <b>contact Information</b> if you'd like to
								receive a reply
							</p>
							<p class="emai">
								<b style="float: left;">Email:</b> <input type="text"
									id="logemail" name="logemail" style="width: 180px;"
									disabled="disabled" value="sriramprabhu.rajendran@rbs.co.uk">
								<a id='logemail1' name='logemail1' href='javascript:dspemail();'
									class="inputfed1" style="cursor: pointer;">Edit</a><a
									id='logemail2' name='logemail2' href='javascript:subb1();'
									class="inputfed1"
									style="cursor: pointer; display: none; float: left;">Save</a>
							</p>
							<div style="clear: both;"></div>
							<p>
								<textarea wrap="soft" name="hop" id="hop" cols="38"
									onkeydown="countChars(1000)" onkeyup="countChars(1000)"></textarea>
							</p>
							<p class="but">
								<span class="count"><input id="txtLen" name="txtLen"
									value="1000" size="4" disabled="disabled"
									style="border: 0; width: 35px; color: #000; font-weight: normal; margin: 0; background: #ccc; padding: 5px 3px; float: left;"
									type="text" /></span> <a href='javascript:subb();' name="button"
									id="button">Submit</a>
							</p>
						</div>
					</div>
					<div class="tabbb tabfb" id="facebooktab2" style="display: none"
						onclick="botoomtabdisp('fbChatList','facebooktab2','none','test4');">
						<b></b>
					</div>
					<div class="qcont invite-con" id="invitetab1"
						style="display: none;">
						<b>Invite Contacts</b>
						<div class="chatclose"
							style="cursor: pointer; display: block; margin-left: 8px; margin-top: 0; padding: 0; text-align: left;"
							onclick="botoomtabdisp('invitetab1','invitetab2','none','test3');;"></div>
						<div
							style="background: #e7edf9; padding: 30px 9px 9px 9px; margin: 4px 3px 3px 3px; height: 119px; _height: 155px;">
							<div class="gmailmail" style="position: relative;">
								<div
									style="position: absolute; top: -30px; left: -9px; padding: 4px;">
									<em class="flt"></em>
								</div>
								<h2 class="flt">Gmail</h2>
							</div>
							<div id="gsub" style="margin-left: 125px; display: none;">
								Loading...</div>
							<p>&nbsp;</p>
							<div style="display: block;">
								<div id="ysoutalert2"
									style="display: none; position: absolute; bottom: -24px; left: 0pt; width: 180px;"
									class="style1">Gtalk &amp; Password</div>
								<div class="form_row">
									<label for="pass4" id="label_pass">User:</label> <input
										name="guid" id="guid" type="text" tabindex=1 value="username"
										onblur="if(this.value=='') this.value='username';"
										onfocus="if(this.value=='username') this.value='';"
										class="inputpassword" />
								</div>
								<div class="form_row">
									<label for="pass3" id="label_pass">Password:</label> <input
										name="gpwd" id="gpwd" type="password" tabindex=2
										value="*******"
										onblur="if(this.value=='') this.value='*******';"
										onfocus="if(this.value=='*******') this.value='';"
										class="inputpassword" />
								</div>
								<table width="100%" border="0" cellpadding="0" cellspacing="0"
									style="clear: both;">
									<tbody>
										<tr>
											<td align="right"><input value="Import"
												onclick="import1('g');" name="gsub" id="gsub"
												class="inputsubmit" style="cursor: pointer;" type="button"></td>
											<td>&nbsp;</td>
											<td>&nbsp;</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<div
							style="background: #f7f1fd; padding: 30px 9px 9px 9px; margin: 1px 3px 3px 3px; height: 115px; _height: 155px;">
							<div class="yahoomailmail" style="position: relative;">
								<div
									style="position: absolute; top: -30px; left: -9px; padding: 4px;">
									<em class="flt"></em>
								</div>
								<h2 class="flt yptf">Yahoo!</h2>
							</div>
							<div id="ysub" style="margin-left: 125px; display: none;">
								Loading...</div>
							<p>&nbsp;</p>
							<div style="display: block;">
								<div id="ysoutalert"
									style="display: none; position: absolute; bottom: -24px; left: 0pt; width: 180px;"
									class="style1">Gtalk &amp; Password</div>
								<div class="form_row">
									<label for="pass5" id="label_pass" class="yptf">User:</label> <input
										name="yuid" id="yuid" tabindex=4 type="text" value="username"
										onblur="if(this.value=='') this.value='username';"
										onfocus="if(this.value=='username') this.value='';"
										class="inputpassword" />
								</div>
								<div class="form_row">
									<label for="pass2" id="label_pass" class="yptf">Password:</label>
									<input name="ypwd" id="ypwd" type="password" tabindex=5
										value="*******"
										onblur="if(this.value=='') this.value='*******';"
										onfocus="if(this.value=='*******') this.value='';"
										class="inputpassword" />
								</div>
								<table width="100%" border="0" cellpadding="0" cellspacing="0"
									style="clear: both;">
									<tbody>
										<tr>
											<td align="right"><input value="Import"
												onclick="import1('y');" name="ysub" id="ysub"
												class="inputsubmit" style="cursor: pointer;" type="button"></td>
											<td>&nbsp;</td>
											<td>&nbsp;</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
					<div id="fttip" class="fttip">
						<div class="toolTip">
							<div class="tl">Facebook Chat</div>
							<p>Chat with your Facebook friends.</p>
						</div>
						<div class="tarrow">&#9660;</div>
					</div>
					<div id="gttip" class="gttip">
						<div class="toolTip">
							<div class="tl">Gtalk</div>
							<p>Chat with your Gtalk buddies.</p>
						</div>
						<div class="tarrow">&#9660;</div>
					</div>
					<div id="yttip" class="yttip">
						<div class="toolTip">
							<div class="tl">Yahoo Messenger</div>
							<p>Chat with your Yahoo messenger contacts.</p>
						</div>
						<div class="tarrow">&#9660;</div>
					</div>
					<div id="wttip" class="wttip">
						<div class="toolTip">
							<div class="tl">Way2SMS Contacts</div>
							<p>Send SMS to your Way2SMS Contacts.</p>
						</div>
						<div class="tarrow">&#9660;</div>
					</div>
					<div id="mttip" class="mttip">
						<div class="toolTip">
							<div class="tl">Movies</div>
							<p>Awesome place to hangout for movie buffs. All about movies
								at way2movies.</p>
						</div>
						<div class="tarrow">&#9660;</div>
					</div>
					<div id="gattip" class="gattip">
						<div class="toolTip">
							<div class="tl">Games</div>
							<p>Play Over 1000 + Free Flash games including Racing games,
								Cricket And most exciting 3D Games.</p>
						</div>
						<div class="tarrow">&#9660;</div>
					</div>
					<div id="ittip" class="ittip ">
						<div class="toolTip">
							<div class="tl">Invite Contacts</div>
							<p>Invite Your Contacts from gmail or yahoo</p>
						</div>
						<div class="tarrow ileft">&#9660;</div>
					</div>
					<div class="tabbb tabfb" id="invitetab"
						onclick="botoomtabdisp('invitetab1','invitetab2','none','test3');"
						style="display: none">
						<b></b>
					</div>
					<div class="tabbb tabfeedback" id="feedback1"
						onclick="botoomtabdisp('invitetab1','invitetab2','none','test3');"
						style="display: none">
						<b>Feedback</b>
					</div>
					<div class="tabbb tabinvite" id="invitetab2"
						onclick="botoomtabdisp('invitetab1','invitetab2','none','test3');"
						style="display: none">
						<b></b>
					</div>
					<div class="way2sms f-tabb" style="background: #fff;">
						<a
							href="javascript:botoomtabdisp('quickcontacts2','quickcontacts3','block','test');;"
							style="margin-left: 0;" onmouseover="botoomtooltipdisp('wttip');"
							onmouseout="botoomtooltiphide('wttip');"><strong>Contacts</strong>
						</a>
					</div>
					<div class="yahoo f-tabb">
						<a
							href="javascript:botoomtabdisp('yChatList','yahootab2','block','test2');"><b
							onmouseover="botoomtooltipdisp('yttip');"
							onmouseout="botoomtooltiphide('yttip');"></b> </a>
					</div>
					<div class="gtalk f-tabb">
						<a
							href="javascript:botoomtabdisp('gChatList','gtalktab2','block','test3');"><b
							onmouseover="botoomtooltipdisp('gttip');"
							onmouseout="botoomtooltiphide('gttip');"></b></a>
					</div>
					<!--  <div class="facab f-tabb" > <a href="javascript:botoomtabdisp('invitetab1','invitetab2','block','test3');" ><b></b> </a> </div> -->
					<div class="fb f-tabb">
						<a
							href="javascript:botoomtabdisp('fbChatList','facebooktab2','block','test4');"><b
							onmouseover="botoomtooltipdisp('fttip');"
							onmouseout="botoomtooltiphide('fttip');"></b> </a>
						<div class="fbtooltip" id="fbtooltips" style="display: none;">
							<div class="close"
								onclick="botoomtabdisp('fbChatList','facebooktab2','none','test4');">close</div>
							<h3>New! Facebook Chat</h3>
							<p>Now Chat With Your Facebook Buddies From Here</p>
							<b></b>
						</div>
					</div>
					<div class="f-tabb flt">
						<div id="stadiv"
							style="font: 11px bold; color: #a20000; padding: 5px 0px 0px 10px; font-family: Tahoma, Geneva, sans-serif; display: none; font-weight: bold;"></div>
					</div>
					<div class="frt">
						<div class="feedback f-tabb" style="cursor: pointer;">
							<a
								href="javascript:botoomtabdisp('feedback','feedback1','block','test');">
								<input name="textfield" type="text" id="textfield"
								value="Feedback"
								onclick="botoomtabdisp('feedback','feedback1','block','test');"
								style="cursor: pointer;">
							</a>
						</div>
						<!-- <div class="blog f-tabb">
							<a href="http://blog.way2sms.com" target="_blank"><strong>00</strong>
							</a>
						</div>
						<div class="games f-tabb">
							<a href="javascript:getdata('','listGames');"><b
								onmouseover="botoomtooltipdisp('gattip');"
								onmouseout="botoomtooltiphide('gattip');"></b> </a>
						</div>
						<div class="videos f-tabb">
							<a href="http://www.way2movies.com" target="_blank"><b
								onmouseover="botoomtooltipdisp('mttip');"
								onmouseout="botoomtooltiphide('mttip');"></b> </a>
						</div>
						<div class="invite f-tabb">
							<a
								href="javascript:botoomtabdisp('invitetab1','invitetab2','block','test')"><b
								onmouseover="botoomtooltipdisp('ittip');"
								onmouseout="botoomtooltiphide('ittip');"></b> </a>
						</div> -->
					</div>
				</div>
			</div>
		</div>