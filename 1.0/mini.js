/**
 * @fileoverview 
 * @author 代军<lujun.lj@alibaba-inc.com>
 * @module mobile-tab
 **/
KISSY.add(function (S, Node, Lang) {
    var $ = Node.all,
        EventTarget = S.Event.Target;
    /**
     *
     * @class MobileTab
     * @constructor
     */
    function MobileTab(config) {

    }

    S.augment(MobileTab, EventTarget, /** @lends MobileTab.prototype*/{

    });

    return MobileTab;

}, {requires:['node', 'lang']});



