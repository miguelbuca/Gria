(this["webpackJsonpgria-discord"]=this["webpackJsonpgria-discord"]||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a.n(n),c=a(8),r=a.n(c),i=(a(15),a(1)),l=a(9),j=a(3),d=(a(16),a.p+"static/media/cadastro.f07e8f1a.png"),o=a(7),x=a(0),p=function(e){var t=Object(n.useState)(""),a=Object(j.a)(t,2),s=a[0],c=a[1],r=Object(n.useState)(!1),l=Object(j.a)(r,2),d=l[0],p=l[1];return Object(n.useEffect)((function(){"CPF"===(null===e||void 0===e?void 0:e.mask)?(p(o.a.isValid(s)),c(o.a.format(s))):"Email"===(null===e||void 0===e?void 0:e.mask)?p(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(s)):c(s)}),[s,e]),Object(x.jsxs)("span",{className:"gria-input input-".concat(d),children:[Object(x.jsx)("input",Object(i.a)(Object(i.a)({},e),{},{data:"".concat(s&&!0),onChange:function(t){null===e||void 0===e||e.onChange(t),c(t.target.value)},value:s})),(null===e||void 0===e?void 0:e.placeholder)&&Object(x.jsx)("label",{children:null===e||void 0===e?void 0:e.placeholder})]})},u=a(10),b=["children"],O=function(e){var t=e.children,a=Object(u.a)(e,b);return Object(x.jsx)("div",{className:"popup",style:!0===a.display&&!1===!a.display?{opacity:1,visibility:"visible"}:{opacity:0,visibility:"hidden"},children:Object(x.jsx)("div",{onClick:function(){return a.onClose()},style:a.contentStyle,children:Object(x.jsx)("div",{className:(null===a||void 0===a?void 0:a.transparent)?a.className:"popup_content "+a.className,onClick:function(e){e.stopPropagation()},style:!0===a.display?{opacity:1,transform:"scale(1)"}:{opacity:0,transform:"scale(.25)"},children:t})})})},A=function(){var e=Object(n.useState)(!1),t=Object(j.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)({}),r=Object(j.a)(c,2),o=r[0],u=r[1];return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(O,{onClose:function(){return s(!a)},display:a,children:Object(x.jsxs)("div",{className:"cad-modal-container",children:[Object(x.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFMAAABUCAYAAAD+twu4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAACSFSURBVHgB7X0JkF3VeeZ37r3vvX69a+lF3WqptYABCSSwbEvGYIkBL2OzOEGOoSZ2PODglM06VZnMTKYEU0nGk8IGxjg2VXYN2HGwg8eAY8rIOCBWgQFbYkdrS62lW+pu9fr2e8/8Z73nvve6JUjGSaU4pdvv3XvPPct3/v0/7wp4r7xX3iv/xgub6+b2/i/3B0FDP2el8Q/u/psd+B2Wl+55KfX+I0hh+elZlIKsupqnI1NGcbwCtAKpXZPsunVl/Csps4L54orrn6CPjeaccwzQx7YwKt+2YeA7A/hnLBI4b1lXqVhq8+C1hkHYBs4ChLqCT0eoPsMoZD73ub0mLnv+BOelqQrYaDZsmGA3LJjEv0CpC+aLK6+/CRx31H2CUwG/jyb1TwKVbzncWOxCnx8F80NEC9RoGIPHuQTMI8AEWCxkMaYC3wqqwbTP2vGxfMi80SbeMMi+2jqK31GpD+byG34LxtdWVaRByvpcnAtK5Yzf8qG9dz+Ek5Qrnglv4h673Mw3BQSNlUqbuuvREREhCjgISUSqloaGrqkO6bq8LOpw8Z0gIxrlLJLPMbrPoZ73RE26BqpXDPxc0Wc504JnBuXLbtUFPSvG1OT0MPVE1X2vgpsfWM3mFHX1wVxxPa8BUaw4DZurWbBI0CfdDzm/7YJ9d9+KucB8mu+nefZ3NDC+vAlsuqJGruZAzRnkoJbLrJgEn/7liAL35QTeXFWlYeg50rlsQd9jHPY6LEKqXapDM6BF5cydt7gNfYmpeuYui4cmatz70zPYF+eaZ1D3qsJNLJxsnsvG1HpFClhbky5veXr5Dbhg3/++1W3ijLU39UcV/BFV/WhpdKS/t3c+1rWBHSmYTnlcmfFk/2YyciU5WoiK1rRYRtZPcH2ByXVRCHBNvQwxuvqOJ29zJJDkYgKqe2aXR0EbyccxXAKGTlHF1QVTIBTZ7uJPHp8ryamnR2Pc8sTyr4xv2vetO8X5aatvvjMs4UYOTUA0rs40w2iRdLGH+oXV+64FSxX/GDnA9WiY5VPLRlAEr9Zd1ufcCA7NzorsFN3Y5xWVOrzeFXAMlVhi7WcrwSzXLe1J1hZnUlIxyzxcdxapaXHm+Xc8sfKrO67LZm7kEb9Cc42s1JkGpsscTb4zKFb16V7ns9yzpy5VK+pNVI8BtNwet2mXGIa6pcqKgY0b4xrYCCcxIlWpC2YEdiDiUb8YUaQHqteP67ZdGarGSnee9oMH6aRdX2Lrzsjhuk+NYOv8MkYEqzSo9puo12XN1eRWO46EIqiqVq0oxNcCDWyS5LGgfnGvQBpnuMjhiAerRU1r3CLvtM4UCFoGM8mE75YyI0Q7CKj+BGsr8GCUUcSMRFNaQtx+1ffaFQiMXXfpMK67dFQiv9WoBT2ggB5pS2H2wk79XkDnXbRIC4n6RZuVKTKeppWQa+jNYqLMcJBs/WfGOCYqVkc5K6RIxBmimqRgyIgrTXcqZInZwGT+ALXkgigNFytHY14wlCnZPq/vv6+vgOsuP64kedBEn4EElWt2oUFizgHWo4I64qCdwDu9hbrIVXDoB/vx5qNHUBjKgzttt6+dj+5P9uBPPtmLV8mUf4yGVTJsa2WAli1cs57UW9zqdDJ0mWb4OcssYLKdqmFFeNylSigRYoZhFZK456lZXv3xUWWbpciRCTrJtnEMAPOAbqTatnOnlyhVcnRpozoO/J9dOPzAACozFdtO88pWhNMh8kdzmNgxQsco1duDldefiWvWd+LvDgHjFS75F4whASi0xjSDizT/mWtzlLq6NURpR6RAFdQozWIhO+U1Ol7IZKRJEcnuFcuLrvJMCavehSVIyzk9D8zTUBtB7ioDfUsar4Zy+ax6x14UIPZGZbxy47MYvPdtRDNFeiZEutnH2rvWY933PoIP/fijWPbFlfBoBp6Y0dAMXv9vL+HE3+7G1YvJqtAWgRkb15/aPJG2qx6rnGgU4aSlLmVuoqDG4yuuH6ev7crGVB0bPFaVStjl+1hRLnOr7ala3uAg/vppAjJQY1UaCsZEnSGRtmdCQ1VHwSdOquihjWTjhZ0Mu7/2KqZ3Htfcqsa28IIutBFbm7L0i6fh6E/2oqxlqKgnwG9clMWVFy7GDwddyoRlE64plVsnSHq5eFdgikKKcAe1stHITagFkmcZzhUxGdlpNLueeE9nWQEpBxhTpRlPhb4P56s6ZLN816fGbblyKcPxRw9g9NEBxVaeMYUYguZaRgunC1TF9QLIm/rmqziXQF/SmMXBXAySNbmkWacUOJesKYY/m4Ecl9lrMPZQxAwOTAQbmGZz2UnesrkCNdKjMNwjjUxPmyUGSE2h3DnnjtC1IsAVB3otRKentyqNffi+1yX7il7FKCQrU6MC4OKQdMOlRh+4+xV1j0avPtUz0XQRR4hiL1jAkmLH6Z9H8TjU95Pz+eyUCe9Jit+gyhMyIg6tUcTGCKl51FOk2SxvNADTBhNzVKA7aM1Zfc1Ohyy+bghJUPDRnLrWSXLy7HaGkUf3ozI0JanAaG3VLZOyc+dVjyDd1YSQZIkA1GOxBFb8pUhcAL/2j87AGS0BSHcl2H0wB1gfXREAe9dGuygf233njkdX3DBAQ+h3DHRrpC8KQ7wWBGijGSutT0Yy09ELcXietnRZgsrsOX0saZ5lhPqyMMKPzKiFoSAJlhNlHt45TEBGuglmsW//SB/85pQ885tS8ntu7zjGnzkcr6FjnAvgc3vGcc7KDhzOJzsezPEYRMMlp1CCuW4S+z7Eo+hGirTIZeLcdeSUwST7MrJTr25PBznhrCFmec3O3KFMaZZYU66qY1PPCGmujHNx5PeMavaOHxTVy0OTyKztQs8XVhOQaXl9lKh48plB2LEZb04PKr/nBJrO6ECNi2VCcyYCw0/FyjwJmCHCh4lPbuJWwynDU1tjrI3kSI5soIzxjXVgIabOKmC0blSassqwNBNx2NzcE6f7hfbvo+eIooTsc5WruF/cO4oCHU0r2zH/48v1DSVTY4JkVlmJdsPpEkZINj17vM5QIrXSUg/R2OeVeTffwgN2G6tgljKnirp0z93bqPFtsRxmRgnJo52wHdNhhpxrdTOOhIdhFYqmRmN3JoaPWkVgHqdjWauhxUiyubAdPaN8GLfX3fbkejJdj67b+uJZ4da4rmWsyO2w4ShJv8JTb2VGlmOOcnJ9H6Qe0QqOOQpOfhIzsVFPRsJ5TmkclXmga0wcdmSOtkYVoNyx8+zMkJgkMwtBJbtiXqzBmQKQwdHW1WDCXA+lTeLBPBORKZVCIWSxdRHF4kj7R4pCuQwo8QYvvUxQJ94tmB/8g/+wizJWM2r+3LFojKku5KaWpSKQ2xxqylTxRua5Zg9zqJQ5I2cO5Sb7N+G1w9MijEdgnjYvpkoNSkxxUUxtejWkfOWhNZ8UqKpu85pOHMvH1Jk0z2R4mVuWFPP0WOpA83gf3g2YuW8d7mvvXhS1L15yfyTMQ09FAKyLSXXI++Zj+rvI17RkQ6XFyZ2UrqQxFK28hKONasjWTswFWnR4jLT6GxT5aV7T7diMoUOhIeJQjCrMZW1xeHHdzKJGZFfOx4Epx0QRxbi0GlApM7kyq0T+rgy/G+8GTOJxuQobNl/9MAtSx1WD0oCXckz020mLv89TESOTw4nDIVwS3QzFFMWhfG8Go8V3jUV0cH3Q+aj+1Nf2jcdmgFCob58AGtf0oIkAVdTFFYjyUCAZTQ4YmemKg8hSdNcX1uIVEZYrOWtpgi/cShXpCWl6kFdI+yycjdVnBZPfs5dy2HyBSacuP2/dHRFLykxozm8lZAueSfNBUaSnjGMhN2dK6tDqUR3CpZxxD47hnP6UB5k2+Rh40euBCUhK6v7TTVLeKSWiQdWABU1xoLT5/CWqnpGrWrZmFjWh/WOn4akjSaYw36Mq5SPHEMYK9u2gPqvPCma5klmmLSHZylkXbnot09j0qiv2lIvJWIHOIi3cpMyUsjJl3Uo7IHug6ppeHfccjkyNYsP/Z3uprwUt6PiTDzvyMkTDivlY+Pl1yBLlmuI3Z9B/z++j5fx+S5mZ7iYs+fqnCUhFlYYKTUgwijhcu1jdU19Cbd7yhvqsPqtmCnmwQNG3TmXzCl9y1jn3v/ni9rPVvLhO+ZJ3QsduqcgZWppCFX6TvjmTA+lqZDJPHedqmM08GvcOljSqLXgWRzqo1wmSJz94A7j2Y2dKH3vsB0+RZiLFtHKBpNJjt//KtiEMeQkQ2ZOCIoPuNiy+/TLsTTfj6b1IOGc1OSPVt9brUpsyn1hAEBBKvBWnCia/+9CCIqs0QuycsO0GbPUFF722941XXs3PzJwtB6nvtlL7464zo+1MI0O5q7UlLhwpGl9PC0sC5gIIIRooo1lQlNJDdmbA4nq/3M9x3lkp7Bv9a7QwotJfxlkvO2jdn9fcgAWf/wDafm8NjvIMdh7l5MomurInIqV/ZEZf1+6kokyyCSLInSZhCqndW0ZbT7stuQ2nLpglhETGGUVCpoiAHi3Lwt4ljx/c9ebZUlfGHprwy+PBad88Xh3ErKor+QTokjYbPwOqbCLR9TgprdGCOl9M2Y9MkHSR3vYWE1AtGJl4FtmLz0T/qstReOWwpFhR/O5WNJyzGE3nr0CUzWAfTf3wjOAUoJYD9DxCYYbx5F2aaMs0zt430/yX0nWjYTew9FfozlM4GZhekFoQVnjtfh4qqz54/vMDu968kSvLw0aROun0TaNxZNTItzhaRMVOAMaTNp2Rjcphd2rrepbgXMCVXVtpaIX3pTsRfH8L9vz8u3j7+a3Y/Mjztg0RdToxNomDjz2M8Q9sllQXt8Pxk+/cj5efehHrNm3A7//xZ+NxugOXngpHUGJdZCl1iaGShcULLLjkpGDye15KFSOmZELkRAfkJirG2rs7p/1U6lipXOpUKTz1WFrvd+npLCpZCSfFyo2XwTWWXOPGHbecoybgYL7S8y8cjqzoZG6dzkvgf+VDmP/U99D4/AP4i+esTSMrZHe/hvYnH8XRrs2xm0vjeOqee/DqP/wcnh9gcM8gjvFmrP70J2AS2mZfgB4mArK4GtvVeblAreSjxmrsaimzgUKwUzN6G18VdWpW91LpY1G53CnyFZHdHwHLgXIXijbYmdXKWosbEKwG5TbuyRIBDqbcA/3MOd0MDX5MnSr8pjcPsDaw5bdg8uW/xzmj29GwagMM5FNPbaeo8ir0Sf1rIi8efvTCszDGuLjy8t//FKs/9QnUpHa16RLRvCslNTLSQoyyNm3V0NWYRsWpSbW9L0Rt0XskUw2ZYSRsTsYmdTKNaTaXXKttTVWRx6pTTwIaFuuj2tSGIxu1QdFAzWd8cTCSnRQXCLj8zIhPX99bthrhkw9I2aruMaQ7F5Mc3a7uB7DPXNN3DB2tKbtfqZjLYerYiLOYiDlejIus9QpZEmWyhSmXJyZQk/mvoUyP+W1GS+99s7C8VIqa5i1IDXcvTR0zbG8DHobNWTIRqgboaW3ODH6x7uCsWt84k4i3r5jvorlDUyKeGTfCbBPWFEawfD3wwy049KHNCN+3Xi5qtHQDcjtuRvTAd8E/do18NjU2iA9W3kAHJdb+JrwIBwfHZGNjBwbR0tFhx2E70YcfqDA5JRlEBD84KZgVYmJh4G77xcSXxkfKl+n9GmibHzx87oeb729tT80UC4XOZNbW7DWjCHxXQVOlb+9YXze2WWBNAatc7FLYKm506YjNZtZqfmgTzF+1GSv9WzH57Zsx9J+3kpAjTkz3IdtzFgo/vB25lR8nc2QxgkorltBTyxvJ3di1H9AcO/Drl7H0/efCmiQukCnigGZFGGUKjoRF3lWNXQ2be5Ww9dl/HL+85PPL2lakhJgUEgOTY6XLn/vF+F1DB4qdnPiX6xCSZHOjjDWbi0SaGY8xgm26Vw+uQiJjFwVldx0jP/x4nWOE4/Akj+Wa8UxMUMC06eAZknYvrFiPzPghzLtrM8UHB2X90pqPozw1heBrV1LE5BDKmRa8ecXXcSDowUglYxHb/dSz+M1P/yEpknRyLSR5WaAFLdCYxHchwX625XBCCdUqoMBLjR8LL02R/zO9r2JpRaxJGIadO58b/6ty2W+OVL6cG51dtNQVWZ+cu8uVMIMUmMOTmtKSRp3+ZEmqZfGuEFfZGSI3NUcuuQWLdm9G5tDraLp9M6Y334rKxV8Cnn4AfGgQ+J9Xgn3pDhxduxmTD/0IuVC4Nsxqvx0P/hyDO16T7vCixV1E2MvBVp+fDB3qznpQBZ17cview40vPT55UXoh64pVi03Ny+7CKOpsb7qQDY1vpSslpnfJ8aJVydqW9HwY4TdDXswxAm7FfMQIWJI1A+SxOq/e/ia3qfBaacBjYM0ey5nlGzB+wbXIbvsuUicGkf7Wf0R+0SqUV27A791QxtBb0zj6y8/j4OtfBh8X+YqFTptqsccOHCJbO42JI8ewfGQEJVI8/lnnI9uuthzSOQNJiHX/ozc3K5iinBgprk93+XxqX4mpeCBT+8bV7ORHJjUP7c1rMDr1azlDk0uXW2O6C5bajE05XVDs6bIlCWb0tDkkZZGKr1G6B6M6U9jTJpgGdhGY9sBiE8nB/g9vRTD8OnzS4sJp8gZfR0tpF9Z+xs06PIK//DNSyD9G7cI5izZwkPJK08+jsnQdwkJGJn2lg85q9x4lwMyikIoqUZewf8w2LbmTSG8b14EP2V979n2YLh5kudJwrIjEDTlh/axhdx7LOaYj8MKdXDrPBbBWGY2ToB/VfvLiNteddGQHiz2auC3q7r98D943b0Hp6UdpETjOvrjFmal6pqErpYMtzirz5BjEfFszHopHhlDx+6UIFyvoM79mc3ZCAc0rdwSVUrgs1ay2fzGdBmCSMnl8DnUsaFptI2clz7NAMw0oc+WlY0uqYGjCQnfqObxrJs6TbcSVjbbXK8djALymNnT/2ffQd/MdaFzUhzMvaYILpCgfXh/WABfbJXEZn8iRvz+BoIGzIMuZH8jnc1XVkpR5JDWVl4pmOuQegx0dc2YhgZTjoRxKuguN6Q4+VTqGsrDQtdhUclNNmLvejguSE0WyxaVMC76q/+sDgN3Eb25qW9Q+x5wHTVlBbuStdJx+C53sSNzbsCHELTcVcOfdLc4QqqFkaG9vhN+UEWDK+0KGhmXMw1xgykeJ7iszZbORHfHuda7QlZBpjU2nnc1ns6mxx+UeC1Gvd5GQmb7N+SfMQh6zM6+aszXm4SqauMI5PR4aUnAaNQ8xd/BV12Lwfa/LeSZuW4ApwpPf+U6sxGQwwxnXEMVFz860ozgBo1RlkBdVpdbOTOF40OJTuF/AZra4coe9Q/XJlRhoSS2UZgSzkofHKV59xGlUbkE0m+Pg4pZwOTW4mqIbAsQuoc+VW+lrd9K4ieaar+sEpg5ZFJW1bkcJYC+66kJ87ut3ItXYmLDXTckuXopMRydFFYWwlIzH6qUoEpTZe11vbuvFL++f2ZvvTDX53NOUqbpV3wvkpGYl5XFLna0ZsrjYBKyBaYIcHtPszZVpo0M+Jlbs4mi0suzLyoa4wqET3NHm5imDCa+aFkc1tx5gH0ezvxW9LTvhUqwo4/kuNC9YgFUXX4IdjzySeDTT1o4Fl1xOphItaKsO/ZGpV8l7fE4wRWnIei8Uc/xDDd0em9lnqFHNTHRSZGU2wWfQ47Xo6XM0pdox7U1rD8hhQ5NC4qxWgfBaIJlt0Zg6MaCHT7jgoQos97c9UBYxNxt5lI0mvj0efh5/ePYtyQFAJPFWyjGu+neXYHDnKzhxdEi207lyOd7/B5/DrkIbopwMcshVCkNicRaxk4J55rp5j77w2NFrSsOVxoZOn5WOiZBqZLVClsymo5TY7eFNljJTXqMdXHNTRcrMuChAuAFUtyQ8oLePOsiy5ARFCY2poGnWeFXMDfFLYOP9/FbUwFThGnuGA+NrKMO5BkvbXrF9VGYymCgqHyWdzeKyP//vGN69W1Jq0/z5KAqFf5hLRRgZVSJbOwXKbF/YeHR+Z+b+E0P5a1OUJhVmUmWam0HxRuF7RZHyv7UplBU/B6+oybS2CBfUr7F8mEuZdK9C1YYnUFtY9fd4zDaa5ICLxCLF4oFrZcKsX6sqbf/GtRjKvYLCkPiVTYTicDtKf0wJoW7dCHXSuWKljUSZ7n2Su6msqkOaHJUyr9HmNXI0LEaT779o0cPtHdm/Kx4rSq0hGVUpIbl5cIxoXnpHnmKlQEajeBI9FxBjGrm3tVKqy/71DudZG/80SssgnXhGyWjpeUUx5ZamsxjZsQIzQ/ORG1ogd8Gc9uO3KThSsgPWv1ZL7hwWtquw+Dwl+kiftKOq1MrMdGWiSK2d+7HOH+18bAjjx3NXKwPeEAXHfJaxhrvqniPn+cmGHJaGjvi4P5sLqOeFzYCrCFC1Wb9Q5hjXpvFCCn8Fvp0v6nXGWNXNOueZQO0DMaiLvwEB+b77XsPQzWso8hRgZMZJQevFIRZHeUYlNOoMoD6YSJFRVVkMn5bmvIt779+5bTB34mjuGrHMysfhLM9LMDsxhXmUClIzZDFJF6OlWbB5k9LkPDZBuKEUDbLA5fRu5oCYQECW8RxlKGeUPF3Rocwft36sdDwNKU+0wGtaJLelgUDhniUGY1sG42WseHsElYu6MTqtFaJxKoRZTRzop1VjItIe1dnjXsPm4p0XnJVVPphmvHpTz88yWe81TxmXMhDWSGwtWN7TFJv2gxnzvAITDpCwMUh7pVqGunsVq8ssrC6X1bTLebyhAa5oZnWa8+IdR2IGPN69GR7MafHBjeiN9x8RFulGITfFr3J4Xdqsn+qNghHOwlZEgXyVQ0NT6tVKobJayk8Ccb6XwWg0gw4vqzyiiHfWGXWCTczhMPLswLHa6y/sdeVwlUx2KzK3DV7TVt8kuYc25SzoL7K6eWJPHm8NuMrNBKbpKAvTSMkpSoPLty+gqtQFM41wqOj5y9TPKDj3POmKMDOJhV4D9lTG0OllZUZoDEXMMrvYAzJKw0y7mhKrtL8sJqpO9963iLKT6TpLUVd86Xp1pAdvVlu4GLc2tG0xdaIcP2aJgcmfrYiwm5CbSiGL8N8p2Jmy368uHp3+5mBIQXd5vzBTWia1uXTAyUj3AjZSoQxXukO5m+odE6xFmkVcNesKrnqsWl3qAcvjhWjPijgqT95np9JYsuQ6Msip1yLIlLT8aYv4+Y3wEcmzSZPsLLXrbYl2W4+Kdaeb1a98oxIlK8s4uTY3JcWCg9zjy47vn+gq50rrpTZXBrI0XBcQVRrvSAZKWSwvE8UxjWKDVw90NjTqcPEI5V58vx7FudfY3I1BGsUEYEyZoYwxeJLNBcs3DOdRbE3ppmPFmUzHSCv21MGUrB76y/a8cOivrEspSVsKSQiNrsmN1fyuoxonN39i2M2NP85GYXoRxP09w/qCIxMVfqciS2F5t6Xoo1cCZ3554UPBqFg+NR7/ztK1WUMpM+O0MqsNCMwOpmD15/79U5+KorBTPW8i7upn+0L5jIYzrMPPcpKZszKcxcUx0MVHhRJZA8fqTTguBRPLrsLIyl2evJaIwFWLDX1eaks5a82kWDZWp9hGnh4qKgvB+SWGGLsw2IVpJCgnrAgtxE9NZtrJTOU+YSw42bXH7faLJakW9pvCEXQ1LrGzapVsLkimarMDd1ZaD6FC7ufAME4q/1yvzsRInSE5FWNAE3FU91P02xrU6KVIez3SyylEyfY1RwlvL92kggCsIDaFvQPKfOIjv9hIH0t1hlJ1rFxLKTNICaFJuJGM25evtDTXf2eNlJehlj0uCSXIzELmAGzcQBNRSuo106/7KDfAVoHOdPdh2keZqDM1EY81bpPin+LdO9UwCTavUFZyJpJvR4rcjfmnAiaZA+OU9WJmd5pOsClWVwEOfrwyre9HsaLhPOnQOBOKz5VruNDd+lSlQMS3fFl4QOpsgc5OWvwZZtc5tpFq8tTP9WTIqCzHJOyQPMsfpu/L40HYX5HJja/ixxcS0HcGZro04IVp6T56ctE0WelMj7C0+tOtnBQRy5tdXgx2V4eCP5Y7SQ+H3DfSzGf01tqkbhGu5I5pVX9ll05bzFJ3dlCr5Ah9TPWmkH8TSMZdqaPoQRRKDxKg2xE1tBqdpdIYYrNYWl0KS+TS0Fr85i/40vP+nB0wPc36A4FN2z4zTkvxpCeDvZHOoesXLkBFi/ozbeyN/DBp9orBSP4hqGJ3UhKu40mYiLsJfpgDmP28HlJzPcsxe6F7DefSzCpbKS+/FdMdL2Peny7BvK8UiV6+T0BOwj/yulU8pj1DHjCWTZ0+5lRAZDXcRlrrozYXpJQZdBCAC+M9FxXJJlUvLOpZVHAedj6FGRq5P9+GXXHdaH0AHNPk+bdQ23a9vuo04r73TNTxixksi27HGFH+WHAlBkMKjGU+jKV9G8gGew7pN7ei3L9BPa25SuzPLIXKJIrfNZYsc4J5wbZLtz1z4UN3UQM3cidqpH5MoXeqcj43r6pashrXW1zi0B3sgGvkH3e/KJHQoKM24JhbViaGUm94bcgv7EU0NYhYawHHN9yEjj3bkSIw8YlbHT2gxuGnoLxJvZmruswJpihlj99GkvMKsgyWqlWGzq2o1Vmd7eA/zB1kcUt1SMxm0PRygMXbZeoC6Jxro729CQrM6mdOBVTU1i/3rQLbP5gQC7klG+hYD0aA+o99A+HFt9gxeBQXSDWoimFRJNVqmz4pmEJ2PrHxwU0Z8CeYeCuCoSodQ+tKZ1k+p1MVZrRcRHSz8UQjbUlwXmvkGNFaDxRt44nnRsYxR3AYp66Q9PVSc5/8Hp04aJW6oLaJC25GE4HJfvUN8GXE6gSwpE6ymEol7thkteWkYIpCgA48sfH+TVmknxBbhMwLQ80epH5K0O+JptAjNm3JnsfJwG+TisigYhWPaxByZ4JVVGk37eoM554j8T3uykGGKtZ3FoqhDqjqflPTmXF13Y+4XiTw0kvXA7u2o7z168C1P4HdNhP3VVfFnfz35rps2nbVQAbeudTwXZ7W6EbLNwcqyjI1bd5jFBJ4h+hLMR6/2a+ufr6NMiU99w+pY+CoOuR3feyn86Ex5TlZa4CbeTAkcj4hHGXFkMgLmTBeYn8lR6FPKxjS3up+vMCFNZtlP+Hu54nJJuU98etFMl6QpsNvUC8eyrOZRFLtlCjTlHOJ5enj5t9ufGBbiPBOSLaX8MhFfntPs5OHEZ7EATqyMh4YU6KaqHQnjxqFlNS2cAzsWBw48sD8np1zxy93QGROY/Y7d2QJudatfdKW5PmpmvvltZ9F8Ks7gKFBFF95FHzhleTBkd4pqreGCktQaPUU8xO/uDhlykQC1M0Pr9v2uWVkg26k7u8bjsoD4vqLO+bhb3+yBEn+zYuEiQWTO+ZOfE2lHZRzpSel49EJCrSThrUBde5UP6/tBL2thieosopixa22PtueBVr3Vdl0s/xS3r1dVSnLfewsKur26kj5dwWmKec9cfWT79921Re3V6bv5HqT+1/ffRq+fe+yONjgYsCRzP0ASfaLqsA1uRhT32FFawro+sYRYBZYLd7sfQ28BlZcq5B8jHITcZtu6vncz5LbuRolAabZW2oF7D9RZs5VgnLlPuZ5BwxE3753OT551fn4X988DY8/04HJyUC572ai5l0YLpA238JiAMFiCjSNW0qEfobHgIIlUyR2W05cPwaNWL3zLERCZiY4JH4++PStCMgWze17zs7VpDpYbdDoHVtps5Yz1m7p91I+mU/ohxFj6t1SbP7qL1MssI1CdCJMx2I5F4uwmhHZKLdN66rB6z2NunBU59rVJ9e3nM1gLN6ubZ4Jpg6j5bvrMf6fDiVJjcVNpW4/C4/k+nD1l/8vrmrJJOpRymPjef81+6Q5f0cKaK7y1o7bBgjQTX7AbiS76Aq61K/fjIywMEEhzjZMkKwfn3R2FFvgYq63+4kUX8FVRvJ9GSraz2VsFfp+vBj65dZxPpzra6qeZn7zZib0YlXQiiN7B1Fu7rUKzxVPFMxBa+NSdDdkd9CYxolTBuS74mkcxSIOuBj8s1FmdTnrA1vW+p63NKp47V46GvjIGZ/uO71tQUNv63wiOPE7dvXbQfE3oPFXxLzV++9VEaHtSL8Mn3vKexOXSA5QvtQSiPgV3kiIwV05b2h/OZ2T7zUW5m7Dyce45sVrN07ve+7OpxouuLf38nvurFfn9O93b9te6tmxc+K3nzlZe//fwJytvPS1sbaFfnZ+gZUWUhorS+i0KlB1GE84U+TqiP+SgUc+l7mvSLy5RsRd/BIlBvOVMJxsTfsT09Njw+tu68290zF0t2/s7/BLdwQsvPxYOYtixMZHpp6Y79Zpb9/YnirjC0vSUzcdrLTfenzqH+87Wbu/czDrlZe2HG5s6mjJYlLgqP+HFfE3L/aDRpVCVMofyefLl70L4OoVAqo/qKSWUqJgolwIT4hr44XHD+C98l75N1n+H2bv09NUoIG3AAAAAElFTkSuQmCC",alt:"cadastro-img"}),Object(x.jsx)("strong",{children:"Cadastro Realizado com Sucesso!"}),Object(x.jsxs)("span",{children:[Object(x.jsx)("p",{children:"O link de confirmal\xe7\xe3o foi enviado para o"}),Object(x.jsxs)("p",{children:["email ",function(){var e;if(null===o||void 0===o?void 0:o.email){var t=null===o||void 0===o||null===(e=o.email)||void 0===e?void 0:e.split("@"),a=t[0].substr(t[0].length-3);return Object(l.a)(t[0].substr(0,t[0].length-3)).map((function(){return"*"})).join("")+a+"@"+t[1]}}()]})]}),Object(x.jsx)("button",{className:"btn",onClick:function(){return s(!a)},children:"Fechar"})]})}),Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)("div",{children:Object(x.jsx)("span",{children:Object(x.jsx)("a",{href:"/",children:"Retornar"})})}),Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{children:Object(x.jsx)("img",{src:d,alt:"cadastro-img"})}),Object(x.jsx)("div",{children:Object(x.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s(!a)},children:[Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("h3",{children:"Cadastrar Candidato"}),Object(x.jsx)("label",{children:"Cadastre-se e encontre a oputunidade que deseja"})]}),Object(x.jsx)("div",{children:Object(x.jsx)("img",{src:"data:image/png;base64,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",alt:"gria-img"})})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)(p,{onChange:function(e){return u(Object(i.a)(Object(i.a)({},o),{},{cpf:e.target.value}))},mask:"CPF",placeholder:"CPF",type:"text",required:!0}),Object(x.jsx)(p,{mask:"Email",onChange:function(e){return u(Object(i.a)(Object(i.a)({},o),{},{email:e.target.value}))},placeholder:"Email",type:"email",required:!0}),Object(x.jsx)(p,{onChange:function(e){return u(Object(i.a)(Object(i.a)({},o),{},{senha:e.target.value}))},placeholder:"Senha",type:"password",required:!0}),Object(x.jsx)(p,{onChange:function(e){return u(Object(i.a)(Object(i.a)({},o),{},{confirmSenha:e.target.value}))},placeholder:"Confirmar senha",type:"password",required:!0})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("button",{type:"submit",children:"Cadastrar"}),Object(x.jsx)("button",{type:"button",children:"J\xe1 possui cadastro? fa\xe7a o login aqui"})]})]})})]})]})]})},h=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,19)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),c(e),r(e)}))};r.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(A,{})}),document.getElementById("root")),h()}},[[18,1,2]]]);
//# sourceMappingURL=main.c2e00770.chunk.js.map