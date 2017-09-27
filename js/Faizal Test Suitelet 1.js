define(["N/log"], function (log) {

    /**
     * Example Suitelet: Display Search Results in a List
     *
     * @exports Faial Test
     *
     * @copyright 2017 Stoic Software, LLC
     * @author Faizal Somani
     *
     *
     * @NApiVersion 2.x
     * @NModuleScope SameAccount
     * @NScriptType Suitelet
     */
    var exports = {};

    /**
     * <code>onRequest</code> event handler
     *
     * @governance 0
     *
     * @param context
     *        {Object}
     * @param context.request
     *        {ServerRequest} The incoming request object
     * @param context.response
     *        {ServerResponse} The outgoing response object
     *
     * @return {void}
     *
     * @static
     * @function onRequest
     */
    function onRequest(context) {

       log.audit({title: "request received."});
       context.response.write({
        output: 'Helllloooo World'  
       });
        
    }

   
    exports.onRequest = onRequest;
    return exports;
});
