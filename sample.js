
$(function(){

var html;
$("#btn").on('click', function () {

  var img_position = $("#img_position").val();
  var zid = $("#zid").val();
  var color = $("#advertiser_text_color").val();


  //frame
  var frame_border_bold = $("#frame_border_bold").val();
  var frame_border_color = $("#frame_border_color").val();
  var frame_background_color = $("#frame_background_color").val();
  //title
  var title_color = $("#title_color").val();
  var title_paddintop = $("#title_paddintop").val();

  //img
  var img_path = $("#img_path").val();
  var img_width = $("#img_width").val();
  var img_height = $("#img_height").val();
  var img_margin_top = $("#img_margin_top").val();
  var img_margin_left = $("#img_margin_left").val();
  var img_margin_right = $("#img_margin_right").val();
  var img_margin_bottom = $("#img_margin_top").val();
  var img_border_radius = $("#img_border_radius").val();
  var img_border_radius_unit = $("#img_border_radius_unit").val();
  
  
  var pr_text_color = $("#pr_text_color").val();
  var pr_font_size = $("#pr_font_size").val();
  var pr_position_bottom = $("#pr_position_bottom").val();
  var pr_position_right = $("#pr_position_right").val();


  html = `<style>
                li {
                  font: inherit;
                  vertical-align: baseline;
                  display: block;
                  word-break: break-all;
                  list-style: none;
                  width: 100%;
                  padding: 0;
                  margin: 0;
                }
            
                .gn-nad_frst_${zid} {
                  overflow: hidden;
                  text-decoration: none;
                  display: block !important;
                  list-style: none;
                  position: relative !important;
                  margin-bottom: 23px;
                  border:solid ${frame_border_color} ${frame_border_bold}px;

                }
            
                .gn-nad_frst_${zid} a {
                  text-decoration: none;
                }
            
                .gn-nad_frst_img_${zid} {
                  background-image: url(${img_path});
                  background-size: cover;
                  float: ${img_position};
                  width: ${img_width}px;
                  height: ${img_height}px;
                  margin: ${img_margin_top}px ${img_margin_right}px ${img_margin_bottom}px ${img_margin_left}px;
                  border-radius: ${img_border_radius}${img_border_radius_unit};
                }
            
            
                .gn-nad_frst_img-container_${zid} {
                  text-decoration: none;
                  font-family: "HiraKakuProN-W3", "Helvetica";
                  margin: 0;
                  padding: 0;
                }
            
                .gn-nad_frst_text-container_${zid} {
                  float: none;
                  padding: 0;
                  margin: 0;
                }
            
                .gn-nad_frst_bottom-title_${zid} {
                  color: ${title_color};
                  padding-right: 34px;
                  padding-top: ${title_paddintop};
                  display: -webkit-box;
                  -webkit-box-orient: vertical;
                  -webkit-line-clamp: 4;
                  overflow: hidden;
                }
            
                .gn-nad_frst_bottom-title_${zid} a {
                  text-decoration: none !important;
                }
            
                .gn-nad_frst_pr {
                  display: inline-block;
                  position: absolute;
                  font-family: "HiraKakuProN-W3", "Helvetica";
                  font-size: ${pr_font_size};
                  color: #bbbcc1;
                  bottom: ${pr_position_bottom};
                  right: ${pr_position_right};
                  font-weight: normal;
                  line-height: 1;
                }
            
                .gn-nad_frst_bottom-title_${zid} a {
                  text-decoration: none !important;
                  color: ${pr_text_color};
                }
              </style>
            
              <div class="gn-nad_frst_${zid}">
                <a href="{landing-url}">
                  <div class="gn-nad_frst_img-container_${zid}">
                    <div class="gn-nad_frst_img_${zid}">
                    </div>
                    <div class="gn-nad_frst_text-container_${zid}">
                      <div class="gn-nad_frst_bottom-title_${zid}">
                        {title}
                      </div>
                      <div class="gn-nad_frst_pr">PR</div>
                    </div>
                  </div>
                </a>
              </div>`
              $("#result").val(html);
              
});


});
