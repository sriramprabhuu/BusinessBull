<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="h" uri="http://java.sun.com/jsf/html"%>
<%@ taglib prefix="a4j" uri="http://richfaces.org/a4j"%>
<%@ taglib prefix="f" uri="http://java.sun.com/jsf/core"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib uri="http://richfaces.org/rich" prefix="rich"%>
<link rel="stylesheet" href="style/Style.css" type="text/css"
	media="screen">
<f:view>
	<h:form id="load">
		<br>
		<rich:panel header="WHAT YOU PREFER, PLEASE CHOOSE">
			<h:panelGrid columns="2" cellpadding="2" styleClass="panelStyle">
				<h:outputLabel value="Search the existing ads posted by sellers"
					styleClass="panelLabel" />
				<c:if test="${sessionScope.refdata == 1}">
					<h:outputLink value="/transaction/buy_property_search.jsf" styleClass="Button"
						onmouseout="this.className='Button'"
						onmouseover="this.className='Button_Over'">
						<f:verbatim>SEARCH</f:verbatim>
					</h:outputLink>
				</c:if>
				<c:if test="${sessionScope.refdata == null}">
					<h:commandButton value="SEARCH"
						action="#{referenceBean.loadReferenceData}" styleClass="Button"
						onmouseout="this.className='Button'"
						onmouseover="this.className='Button_Over'">
						<f:param id="responseText" name="responseText"
							value="buy_property_search" />
					</h:commandButton>
				</c:if>
				<h:outputLabel
					value="Post an advertisement that you wish to buy with complete details. 
					This would be valid for 45 days and afterwards this ad would expire."
					styleClass="panelLabel" />
				<c:if test="${sessionScope.refdata == 1}">
					<h:outputLink value="/transaction/buy_property_ad.jsf" styleClass="Button"
						onmouseout="this.className='Button'"
						onmouseover="this.className='Button_Over'">
						<f:verbatim>POST AD</f:verbatim>
					</h:outputLink>
				</c:if>
				<c:if test="${sessionScope.refdata == null}">
					<h:commandButton value="POST AD"
						action="#{referenceBean.loadReferenceData}" styleClass="Button"
						onmouseout="this.className='Button'"
						onmouseover="this.className='Button_Over'">
						<f:param id="responseText1" name="responseText"
							value="buy_property_ad" />
					</h:commandButton>
				</c:if>
			</h:panelGrid>
		</rich:panel>
	</h:form>
</f:view>