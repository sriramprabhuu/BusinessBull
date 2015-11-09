<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="h" uri="http://java.sun.com/jsf/html"%>
<%@ taglib prefix="a4j" uri="http://richfaces.org/a4j"%>
<%@ taglib prefix="f" uri="http://java.sun.com/jsf/core"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib uri="http://richfaces.org/rich" prefix="rich"%>
<link rel="stylesheet" href="style/Style.css" type="text/css"
	media="screen">
<jsp:include page="loading.jsp"></jsp:include>
<f:view>
	<a4j:form id="buy_property">
		<br>
		<rich:panel header="ENTER THE DETAILS TO SEARCH PROPERTIES">
			<h:panelGrid columns="4" cellpadding="2">
				<h:outputLabel value="Place" for="place" />
				<h:selectManyListbox id="place"
					value="#{propertyMBean.searchPlaces}">
					<f:selectItems value="#{referenceBean.placeList}" />
				</h:selectManyListbox>
				<h:outputLabel value=" " for="place" />
				<h:outputLabel value=" " for="place" />

				<h:outputLabel value="Area Type" for="areaType" />
				<h:inputText id="areaType" value="#{propertyMBean.area}" />
				<h:outputLabel value=" " for="areaType" />
				<h:outputLabel value=" " for="areaType" />

				<h:outputLabel value="Area" for="areaFrom" />
				<h:inputText id="areaFrom" value="#{propertyMBean.areaFromSearch}" />

				<h:outputLabel value="-" for="areaTo" />
				<h:inputText id="areaTo" value="#{propertyMBean.areaToSearch}" />

				<h:outputLabel value="Price" for="priceFrom" />
				<h:inputText id="priceFrom" value="#{propertyMBean.priceFromSearch}" />

				<h:outputLabel value="-" for="priceTo" />
				<h:inputText id="priceTo" value="#{propertyMBean.priceToSearch}" />
				<!--<h:commandButton value="SEARCH PROPERTY" id="but"
					action="#{propertyMBean.getProperties}" styleClass="Button"
					onmouseout="this.className='Button'"
					onmouseover="this.className='Button_Over'">
				</h:commandButton>-->
				<a4j:commandButton value="SEARCH PROPERTY" id="buta4j" type="button"
					action="#{propertyMBean.getProperties}" reRender="props"></a4j:commandButton>
			</h:panelGrid>
			<div id="loadingAjax"></div>
			<rich:dataTable id="props" reRender="true" rendered="true"
				sortMode="single" align="center" cellpadding="0" cellspacing="0"
				width="100%" border="1" var="property" rowKeyVar="row"
				value="#{propertyMBean.realList}">
				<rich:column>
					<f:facet name="header">
						<h:outputText value="Place" />
					</f:facet>
					<h:outputText value="#{property.placeVo.place}" />
				</rich:column>
				<rich:column>
					<f:facet name="header">
						<h:outputText value="Area" />
					</f:facet>
					<h:outputText value="#{property.area}" />&nbsp;
					<h:outputText value="#{property.areaType.constantName}" />
				</rich:column>
				<rich:column>
					<f:facet name="header">
						<h:outputText value="Description" />
					</f:facet>
					<h:outputText value="#{property.description}" />
				</rich:column>
				<rich:column>
					<f:facet name="header">
						<h:outputText value="Posted Date" />
					</f:facet>
					<h:outputText value="#{property.createdDate}" />
				</rich:column>
				<rich:column>
					<f:facet name="header">
						<h:outputText value="Price Quoted" />
					</f:facet>
					<h:outputText value="#{property.price}" />
				</rich:column>
				<rich:column>
					<f:facet name="header">
						<h:outputText value="Contact" />
					</f:facet>
					<h:outputText value="#{property.createdUser.mobile}" />
					<br>
					<h:outputText value="#{property.createdUser.email}" />
					<br>
					<h:outputText value="#{property.alternateMobile}" />
				</rich:column>
			</rich:dataTable>
		</rich:panel>
	</a4j:form>
</f:view>