jQuery(document).ready(
  (function($) {
    // event handler for clicking the link button
    $("#wp-admin-bar-triggerStageBuild > a.ab-item").on("click", function(e) {
      $.ajax({
        type: "POST",
        url: wpTriggerNetlifyBuildVars.stageurl,
        success: function(d) {
          console.log(d);
        }
      });
    });
    
    $("#wp-admin-bar-triggerStageBuild-14 > a.ab-item").on("click", function(e) {
      $.ajax({
        type: "POST",
        url: wpTriggerNetlifyBuildVars.stageurl,
        data: JSON.stringify({'MORE_IMAGES': true}),
        success: function(d) {
          console.log(d);
        }
      });
    });

    $("#wp-admin-bar-triggerMasterBuild > a.ab-item").on("click", function(e) {
      $.ajax({
        type: "POST",
        url: wpTriggerNetlifyBuildVars.masterurl,
        success: function(d) {
          console.log(d);
        }
      });
    });
    
    $("#wp-admin-bar-triggerMasterBuild-14 > a.ab-item").on("click", function(e) {
      $.ajax({
        type: "POST",
        url: wpTriggerNetlifyBuildVars.masterurl,
        data: JSON.stringify({'MORE_IMAGES': true}),
        success: function(d) {
          console.log(d);
        }
      });
    });
  })(jQuery)
);
