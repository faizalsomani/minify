

/**
 *@NApiVersion 2.x
 *@NScriptType Portlet
 */
define([],
    function() {
        function render(params) {
            params.portlet.title = 'My Portlet';
            var content = '<script>(function(e){e.ajax({url:"https://dejero.atlassian.net/s/d41d8cd98f00b204e9800998ecf8427e-T/vzcsfp/b/1/3d70dff4c40bd20e976d5936642e2171/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs.js?locale=en-UK&collectorId=ef802abc",type:"get",cache:!0,dataType:"script",success:function(){var mytimer=setTimeout(function(){if($("#atlwdg-trigger").length>0){$("#atlwdg-trigger").trigger("click");clearTimeout(mytimer);}},100);}});})(jQuery);</script>';
            params.portlet.html = content;
        }
        return {
            render: render
        };
    });