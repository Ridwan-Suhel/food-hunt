# food-hunt - https://ridwan-suhel.github.io/food-hunt/


featured work on this site: https://ridwan-suhel.github.io/food-hunt/
 * on scroll fixed stciky header with fade down animation from top.
 * BOOTSTRAP Button icon change with (X). using png image when [aria-expanded="true"]...
 ----------------------code----------------------
                                                      button[aria-expanded="true"]{
                                                      background-image: url(../images/cancel.png);
                                                      background-size: 20px;
                                                      background-position: center center;
                                                      background-repeat: no-repeat;
                                                      z-index: 99999;
                                                      filter: grayscale(10);
                                                      filter: invert(60%);
                                                      }
                                                    button[aria-expanded="true"] .navbar-toggler-icon{opacity: 0;}
   * nav click to hide navbar. when someone click on list navbar will collapsed / hide
                                          ----------------------code----------------------
         

                                            $(function () { $('.nav-link').on('click', function () {
                                              $('.navbar-collapse').collapse('hide');
                                        });
                                        });
  *Circle Animation-------------------------------------- 
