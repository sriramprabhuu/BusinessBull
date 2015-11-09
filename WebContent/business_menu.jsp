<div id="logo-menu" style="z-index: 99">
	<h1></h1>
	<div id="menu">
		<menu>
			<li><a href="#" class="active" id='menu1'
				onclick="loadSubMenu('menu1');" style="border: 0;">HOME</a></li>
			<li style="font-size: 25px; color: #618A21;">|</li>
			<li><a href="#" id='menu2' onclick="loadSubMenu('menu2');"
				style="border: 0;">REAL ESTATE</a></li>
			<li style="font-size: 25px; color: #618A21;">|</li>
			<li><a href="#" id='menu3' onclick="loadSubMenu('menu3');">USED
					VEHICLES</a></li>
			<li><a href="#" id='menu4' onclick="loadSubMenu('menu4');">MACHINERIES</a></li>
			<li><a href="#" id='menu5' onclick="loadSubMenu('menu5');">ELECTRONICS</a></li>
			<li><a href="#" id='menu6' onclick="loadSubMenu('menu6');"
				style="border: 0;">OTHERS</a></li>
		</menu>
	</div>
</div>
<div id="listdash">
	<div id="submenu1">
		<div id="submenu">
			<ul>
				<li><a href="javascript:fromSubMenu('menu1','1');" id="menu1.1"
					class="active">What do you need from BusinessBull.in</a></li>
			</ul>
		</div>
	</div>
	<div id="submenu2" style="display: none">
		<div id="submenu">
			<ul>
				<li><a href="javascript:fromSubMenu('menu2','1');" id="menu2.1"
					class="active">Buy Property</a></li>
				<li><a href="javascript:fromSubMenu('menu2','2');" id="menu2.2">Sell
						Property</a></li>
			</ul>
		</div>
	</div>
	<div id="submenu3" style="display: none">
		<div id="submenu">
			<ul>
				<li><a href="javascript:fromSubMenu('menu3','1');" id="menu3.1"
					class="active">Buy Cars</a></li>
				<li><a href="javascript:fromSubMenu('menu3','2');" id="menu3.2">Sell
						Cars</a></li>
				<li><a href="javascript:fromSubMenu('menu3','3');" id="menu3.3">Buy
						Two Wheelers</a></li>
				<li><a href="javascript:fromSubMenu('menu3','4');" id="menu3.4">Sell
						Two Wheelers</a></li>
			</ul>
		</div>
	</div>
	<div id="submenu4" style="display: none">
		<div id="submenu">
			<ul>
				<li><a href="javascript:fromSubMenu('menu4','1');" id="menu4.1"
					class="active">Buy Machines</a></li>
				<li><a href="javascript:fromSubMenu('menu4','2');" id="menu4.2">Sell
						Machines</a></li>
			</ul>
		</div>
	</div>
	<div id="submenu5" style="display: none">
		<div id="submenu">
			<ul>
				<li><a href="javascript:fromSubMenu('menu5','1');" id="menu5.1"
					class="active">Buy Electronic Items</a></li>
				<li><a href="javascript:fromSubMenu('menu5','2');" id="menu5.2">Sell
						Electronic Items</a></li>
			</ul>
		</div>
	</div>
</div>
<div id="submenu6" style="display: none">
	<div id="submenu">
		<ul>
			<li><a href="javascript:fromSubMenu('menu6','1');" id="menu6.1"
				class="active">Buy Miscellaneous Items</a></li>
			<li><a href="javascript:fromSubMenu('menu6','2');" id="menu6.2">Sell
					Miscellaneous Items</a></li>
		</ul>
	</div>
</div>

<br>
<table>
	<tr>
		<td>
			<div id="jsfLoader" style="display: block; padding: 0; margin: 0;">
				<iframe id="frame" name="frame" src="home_body.jsf" height="900px;"
					width="564px;" scrolling="no" frameborder="0"></iframe>
			</div>
		</td>
		<td><iframe id="frame" name="frame" src="advertisements.jsf"
				height="900px;" width="396px;" scrolling="no" frameborder="0"></iframe></td>
	</tr>
</table>