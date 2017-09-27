/**
 *@NApiVersion 2.x
 *@NScriptType Portlet
 */
define([],
    function() {
        function render(params) {
       		
            params.portlet.title = 'My Portlet';
          /*params.portlet.addLine({
                text: 'Feedback',
                url: 'https://dejero.atlassian.net/s/d41d8cd98f00b204e9800998ecf8427e-T/vzcsfp/b/1/3d70dff4c40bd20e976d5936642e2171/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs.js?locale=en-UK&collectorId=ef802abc'
            });*/
       
            params.portlet.html = '<script type="text/javascript">alert(\'hi\');</script><button id="Help"" onclick="(function($){$.ajax({url:\'https://dejero.atlassian.net/s/d41d8cd98f00b204e9800998ecf8427e-T/vzcsfp/b/1/3d70dff4c40bd20e976d5936642e2171/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs.js?locale=en-UK&collectorId=ef802abc\',type:\'get\',cache:!0,dataType:\'script\'});})(jQuery);">Feedback BIS </button>';
           
        /*  params.portlet.html = '<div height="500px"><iframe id="atlwdg-frame" scrolling="no" frameborder="0" src="https://dejero.atlassian.net/rest/collectors/1.0/template/form/ef802abc?os_authType=none"></iframe></div>';*/
        }
        return {
            render: render
        };
    });