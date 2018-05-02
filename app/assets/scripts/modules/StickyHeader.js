import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class StickyHeder {
  constructor() {
    this.siteHeader = $(".site-header");
    this.headerTriggerElement = $(".large-hero__title");

    this.createHeaderWaypoint();
  }

  createHeaderWaypoint() {
    var thisClass = this;
    new Waypoint({
      element: thisClass.headerTriggerElement[0],
      handler: function() {
        thisClass.siteHeader.addClass("site-header--dark");
      }
    });
  }
}

export default StickyHeder;
