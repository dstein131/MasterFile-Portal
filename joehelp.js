            var bg1 = "#C6C3C6";

            var bg2 = "#000000";

            var bg3 = "#E1E0D4";

            var bg4 = "#0000FF";



            function sstyleGen(tabClicked) { alert(tabClicked);

                alert(tabClicked + 1);

                for (i = 1; i <= 4; i++) {

                    if (i != tabClicked) {

                        eval("document.all.img" + i).style.background = bg1;

                        eval("document.all.ft" + i).style.color = bg2;

                    }

                    else {

                        eval("document.all.img" + tabClicked).style.background = bg3;

                        eval("document.all.ft" + tabClicked).style.cssText = `color: ${bg4}`;

                    }

                }

alert('showMe(div' + (parseInt(tabClicked) + 1));

                showME('div' + (parseInt(tabClicked) + 1));



                for (i = 2; i <= 5; i++) {

                    if (i != (tabClicked + 1)) {

                        hideME('div' + i);

                    }

                }



                hideME('Cnote');

            }

