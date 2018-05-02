import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeder {
  constructor() {
    this.lazyImages = $(".lazyload");
    this.siteHeader = $(".site-header");
    this.headerTriggerElement = $(".large-hero__title");

    this.pageSections = $(".page-section");
    this.headerLinks = $(".primary-nav a");

    this.createHeaderWaypoint();
    this.createPageSectionWaypoints();
    this.addSmoothScrolling();
    this.refreshWaypoints();
  }

  refreshWaypoints() {
    this.lazyImages.on('load', function() {
      Waypoint.refreshAll();
    });
  }

  addSmoothScrolling() {
    this.headerLinks.smoothScroll();
  }

  createHeaderWaypoint() {
    var thisClass = this;
    new Waypoint({
      element: thisClass.headerTriggerElement[0],
      handler: function(direction) {
        if (direction == "down") {
          thisClass.siteHeader.addClass("site-header--dark");
        } else {
          thisClass.siteHeader.removeClass("site-header--dark");
        }
      }
    });
  }

  createPageSectionWaypoints() {
    var thisClass = this;
    this.pageSections.each(function() {
      var currentPageSection = this;
      new Waypoint({
        element: currentPageSection,
        handler: function(diection) {
          if (diection == "down") {
            var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
            thisClass.headerLinks.removeClass("is-current-link");

            $(matchingHeaderLink).addClass("is-current-link");
          }
        },
        offset: "18%"
      });

      new Waypoint({
        element: currentPageSection,
        handler: function(diection) {
          if (diection == "up") {
            var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
            thisClass.headerLinks.removeClass("is-current-link");

            $(matchingHeaderLink).addClass("is-current-link");
          }
        },
        offset: "-40%"
      });
    });
  }
}

export default StickyHeder;
