$(function ($) {
  "use strict";
  
  var bankInfo = {
    "bancorp": {
      "name": "Bancorp",
      "states": [
        {
          "name": "All Locations",
          "aba": "031101114"
        }
      ]
    },
    "bankofamerica": {
      "name": "Bank of America",
      "states": [
        {
          "name": "Alabama",
          "aba": "051000017"
        },
        {
          "name": "Alaska",
          "aba": "051000017"
        },
        {
          "name": "Arizona",
          "aba": "122101706"
        },
        {
          "name": "Arkansas",
          "aba": "082000073"
        },
        {
          "name": "California",
          "aba": "121000358"
        },
        {
          "name": "Colorado",
          "aba": "051000017"
        },
        {
          "name": "Connecticut",
          "aba": "011900254"
        },
        {
          "name": "Delaware",
          "aba": "031202084"
        },
        {
          "name": "District of Columbia",
          "aba": "054001204"
        },
        {
          "name": "Florida",
          "aba": "063100277"
        },
        {
          "name": "Georgia",
          "aba": "061000052"
        },
        {
          "name": "Hawaii",
          "aba": "051000017"
        },
        {
          "name": "Idaho",
          "aba": "123103716"
        },
        {
          "name": "Illinois",
          "aba": "081904808"
        },
        {
          "name": "Iowa",
          "aba": "073000176"
        },
        {
          "name": "Kansas",
          "aba": "101100045"
        },
        {
          "name": "Kentucky",
          "aba": "051000017"
        },
        {
          "name": "Louisiana",
          "aba": "051000017"
        },
        {
          "name": "Maine",
          "aba": "011200365"
        },
        {
          "name": "Maryland",
          "aba": "052001633"
        },
        {
          "name": "Massachusetts",
          "aba": "011000138"
        },
        {
          "name": "Minnesota",
          "aba": "051000017"
        },
        {
          "name": "Mississippi",
          "aba": "051000017"
        },
        {
          "name": "Missouri",
          "aba": "081000032"
        },
        {
          "name": "Montana",
          "aba": "051000017"
        },
        {
          "name": "Nebraska",
          "aba": "051000017"
        },
        {
          "name": "Nevada",
          "aba": "122400724"
        },
        {
          "name": "New Hampshire",
          "aba": "011400495"
        },
        {
          "name": "New Jersey",
          "aba": "021200339"
        },
        {
          "name": "New Mexico",
          "aba": "107000327"
        },
        {
          "name": "New York",
          "aba": "021000322"
        },
        {
          "name": "North Carolina",
          "aba": "053000196"
        },
        {
          "name": "North Dakota",
          "aba": "051000017"
        },
        {
          "name": "Ohio",
          "aba": "051000017"
        },
        {
          "name": "Oklahoma",
          "aba": "103000017"
        },
        {
          "name": "Oregon",
          "aba": "323070380"
        },
        {
          "name": "Pennsylvania",
          "aba": "031202084"
        },
        {
          "name": "Rhode Island",
          "aba": "011500010"
        },
        {
          "name": "South Carolina",
          "aba": "053904483"
        },
        {
          "name": "South Dakota",
          "aba": "051000017"
        },
        {
          "name": "Tennessee",
          "aba": "064000020"
        },
        {
          "name": "Texas",
          "aba": "111000025"
        },
        {
          "name": "Utah",
          "aba": "051000017"
        },
        {
          "name": "Vermont",
          "aba": "051000017"
        },
        {
          "name": "Virginia",
          "aba": "051000017"
        },
        {
          "name": "Washington",
          "aba": "125000024"
        },
        {
          "name": "West Virginia",
          "aba": "051000017"
        },
        {
          "name": "Wisconsin",
          "aba": "051000017"
        },
        {
          "name": "Wyoming",
          "aba": "051000017"
        }
      ]
    },
    "bbt": {
      "name": "Branch Bank",
      "states": [
        {
          "name": "Alabama",
          "aba": "062203984"
        },
        {
          "name": "District of Columbia",
          "aba": "054001547"
        },
        {
          "name": "Florida",
          "aba": "263191387"
        },
        {
          "name": "Georgia",
          "aba": "061113415"
        },
        {
          "name": "Indiana",
          "aba": "083974289"
        },
        {
          "name": "Kentucky",
          "aba": "083900680"
        },
        {
          "name": "Maryland",
          "aba": "055003308"
        },
        {
          "name": "North Carolina",
          "aba": "053101121"
        },
        {
          "name": "South Carolina",
          "aba": "053201607"
        },
        {
          "name": "Tennessee",
          "aba": "064208165"
        },
        {
          "name": "Texas",
          "aba": "111017694"
        },
        {
          "name": "Virginia",
          "aba": "051404260"
        },
        {
          "name": "West Virginia",
          "aba": "051503394"
        }
      ]
    },
    "bonneville": {
      "name": "Bonneville Bank",
      "states": [
        {
          "name": "All Locations",
          "aba": "124302529"
        }
      ]
    },
    "chase": {
      "name": "Chase Bank",
      "states": [
        {
          "name": "Arizona",
          "aba": "122100024"
        },
        {
          "name": "California",
          "aba": "322271627"
        },
        {
          "name": "Colorado",
          "aba": "102001017"
        },
        {
          "name": "Connecticut",
          "aba": "021100361"
        },
        {
          "name": "Florida",
          "aba": "267084131"
        },
        {
          "name": "Georgia",
          "aba": "061092387"
        },
        {
          "name": "Idaho",
          "aba": "123271978"
        },
        {
          "name": "Illinois",
          "aba": "071000013"
        },
        {
          "name": "Indiana",
          "aba": "074000010"
        },
        {
          "name": "Kentucky",
          "aba": "083000137"
        },
        {
          "name": "Louisiana",
          "aba": "065400137"
        },
        {
          "name": "Michigan",
          "aba": "072000326"
        },
        {
          "name": "Nevada",
          "aba": "322271627"
        },
        {
          "name": "New Jersey",
          "aba": "021202337"
        },
        {
          "name": "New York – Downstate",
          "aba": "021000021"
        },
        {
          "name": "New York – Upstate",
          "aba": "022300173"
        },
        {
          "name": "Ohio",
          "aba": "044000037"
        },
        {
          "name": "Oklahoma",
          "aba": "103000648"
        },
        {
          "name": "Oregon",
          "aba": "325070760"
        },
        {
          "name": "Texas",
          "aba": "111000614"
        },
        {
          "name": "Utah",
          "aba": "124001545"
        },
        {
          "name": "Washington",
          "aba": "325070760"
        },
        {
          "name": "West Virginia",
          "aba": "051900366"
        },
        {
          "name": "Wisconsin",
          "aba": "075000019"
        }
      ]
    },
    "fifththird": {
      "name": "Fifth Third Bank",
      "states": [
        {
          "name": "Florida - Central",
          "aba": "063109935"
        },
        {
          "name": "Florida - North",
          "aba": "063113057"
        },
        {
          "name": "Florida - South",
          "aba": "067091719"
        },
        {
          "name": "Florida - Tampa",
          "aba": "063103915"
        },
        {
          "name": "Georgia",
          "aba": "263190812"
        },
        {
          "name": "Illinois",
          "aba": "071923909"
        },
        {
          "name": "Indiana - Central",
          "aba": "074908594"
        },
        {
          "name": "Indiana - Southern",
          "aba": "086300041"
        },
        {
          "name": "Kentucky - Central",
          "aba": "042101190"
        },
        {
          "name": "Kentucky - Northern",
          "aba": "042100230"
        },
        {
          "name": "Kentucky - Southwestern",
          "aba": "083002342"
        },
        {
          "name": "Michigan - Eastern",
          "aba": "072405455"
        },
        {
          "name": "Michigan - Northern",
          "aba": "072401404"
        },
        {
          "name": "Michigan - Western",
          "aba": "072400052"
        },
        {
          "name": "Missouri",
          "aba": "081019104"
        },
        {
          "name": "North Carolina",
          "aba": "053100737"
        },
        {
          "name": "Ohio - Cincinnati",
          "aba": "042000314"
        },
        {
          "name": "Ohio - Columbus",
          "aba": "044002161"
        },
        {
          "name": "Ohio - Northeastern",
          "aba": "041002711"
        },
        {
          "name": "Ohio - Northwestern",
          "aba": "041200050"
        },
        {
          "name": "Ohio - Southern",
          "aba": "042207735"
        },
        {
          "name": "Ohio - Western",
          "aba": "042202196"
        },
        {
          "name": "Pennsylvania",
          "aba": "043018868"
        },
        {
          "name": "Tennessee",
          "aba": "064103833"
        }
      ]
    },
    "firstcalifornia": {
      "name": "First California Bank",
      "states": [
        {
          "name": "All Locations",
          "aba": "122244184"
        }
      ]
    },
    "fnbtexas": {
      "name": "First National Bank Texas",
      "states": [
        {
          "name": "Arizona",
          "aba": "122106455"
        },
        {
          "name": "New Mexico",
          "aba": "122106455"
        },
        {
          "name": "Texas",
          "aba": "111906271"
        }
      ]
    },
    "mt": {
      "name": "M&T Bank",
      "states": [
        {
          "name": "Delaware",
          "aba": "031302955"
        },
        {
          "name": "District of Columbia",
          "aba": "052000113"
        },
        {
          "name": "Maryland",
          "aba": "052000113"
        },
        {
          "name": "New York",
          "aba": "022000046"
        },
        {
          "name": "Pennsylvania",
          "aba": "031302955"
        },
        {
          "name": "Virginia",
          "aba": "052000113"
        },
        {
          "name": "West Virginia",
          "aba": "052000113"
        }
      ]
    },
    "meta": {
      "name": "MetaBank",
      "states": [
        {
          "name": "MetaBank",
          "aba": "073972181"
        },
        {
          "name": "MetaBank Memphis",
          "aba": "084003997"
        },
        {
          "name": "Brookins Division - MetaBank",
          "aba": "291471024"
        }
      ]
    },
    "navyfederal": {
      "name": "Navy Federal Credit Union",
      "states": [
        {
          "name": "All Locations",
          "aba": "256074974"
        }
      ]
    },
    "pnc": {
      "name": "PNC Bank",
      "states": [
        {
          "name": "Delaware",
          "aba": "031100089"
        },
        {
          "name": "Florida",
          "aba": "267084199"
        },
        {
          "name": "Greater Washington Area",
          "aba": "054000030"
        },
        {
          "name": "Illinois",
          "aba": "071921891"
        },
        {
          "name": "Indiana",
          "aba": "071921891"
        },
        {
          "name": "Kentucky",
          "aba": "083000108"
        },
        {
          "name": "Kentucky - Northern",
          "aba": "042100188"
        },
        {
          "name": "New Jersey",
          "aba": "031207607"
        },
        {
          "name": "Michigan",
          "aba": "041000124"
        },
        {
          "name": "Missouri",
          "aba": "071921891"
        },
        {
          "name": "Ohio",
          "aba": "042000398"
        },
        {
          "name": "Ohio Alternate",
          "aba": "041000124"
        },
        {
          "name": "Ohio - Youngstown",
          "aba": "043000096"
        },
        {
          "name": "Pennsylvania - Central, North",
          "aba": "043000096"
        },
        {
          "name": "Pennsylvania - Central, South",
          "aba": "031312738"
        },
        {
          "name": "Pennsylvania - Northeast",
          "aba": "031300012"
        },
        {
          "name": "Pennsylvania - Northwest",
          "aba": "043300738"
        },
        {
          "name": "Pennsylvania - Philadelphia",
          "aba": "031000053"
        },
        {
          "name": "Pennsylvania - Pittsburgh",
          "aba": "043000096"
        },
        {
          "name": "Wisconsin",
          "aba": "071921891"
        }
      ]
    },
    "regions": {
      "name": "Regions Bank",
      "states": [
        {
          "name": "Alabama",
          "aba": "062000019"
        },
        {
          "name": "Arkansas",
          "aba": "082000109"
        },
        {
          "name": "Florida",
          "aba": "063104668"
        },
        {
          "name": "Georgia",
          "aba": "061101375"
        },
        {
          "name": "Illinois",
          "aba": "071122661"
        },
        {
          "name": "Indiana",
          "aba": "074014213"
        },
        {
          "name": "Iowa",
          "aba": "073900438"
        },
        {
          "name": "Kentucky",
          "aba": "083901744"
        },
        {
          "name": "Louisiana",
          "aba": "065403626"
        },
        {
          "name": "Mississippi",
          "aba": "065305436"
        },
        {
          "name": "Missouri",
          "aba": "081001387"
        },
        {
          "name": "North Carolina",
          "aba": "053012029"
        },
        {
          "name": "South Carolina",
          "aba": "053201814"
        },
        {
          "name": "Tennessee",
          "aba": "064000017"
        },
        {
          "name": "Texas",
          "aba": "111900785"
        },
        {
          "name": "Virginia",
          "aba": "051009296"
        }
      ]
    },
    "suntrust": {
      "name": "SunTrust Bank",
      "states": [
        {
          "name": "All Locations",
          "aba": "061000104"
        }
      ]
    },
    "td": {
      "name": "TD Bank",
      "states": [
        {
          "name": "Connecticut",
          "aba": "011103093"
        },
        {
          "name": "Delaware",
          "aba": "031201360"
        },
        {
          "name": "District of Columbia",
          "aba": "054001725"
        },
        {
          "name": "Florida",
          "aba": "067014822"
        },
        {
          "name": "Maine",
          "aba": "211274450"
        },
        {
          "name": "Maryland",
          "aba": "054001725"
        },
        {
          "name": "Massachusetts",
          "aba": "211370545"
        },
        {
          "name": "New Hampshire",
          "aba": "011400071"
        },
        {
          "name": "New Jersey",
          "aba": "031201360"
        },
        {
          "name": "New York - Metro",
          "aba": "026013673"
        },
        {
          "name": "New York - Upstate",
          "aba": "021302567"
        },
        {
          "name": "North Carolina",
          "aba": "053902197"
        },
        {
          "name": "Pennsylvania",
          "aba": "036001808"
        },
        {
          "name": "Rhode Island",
          "aba": "211370545"
        },
        {
          "name": "South Carolina",
          "aba": "053902197"
        },
        {
          "name": "Vermont",
          "aba": "011600033"
        },
        {
          "name": "Virginia",
          "aba": "054001725"
        }
      ]
    },
    "usaa": {
      "name": "USAA Federal Savings Bank",
      "states": [
        {
          "name": "All Locations",
          "aba": "314074269"
        }
      ]
    },
    "usbank": {
      "name": "US Bank",
      "states": [
        {
          "name": "Arizona",
          "aba": "122105155"
        },
        {
          "name": "Arkansas",
          "aba": "082000549"
        },
        {
          "name": "California - Northern",
          "aba": "121122676"
        },
        {
          "name": "California - Southern",
          "aba": "122235821"
        },
        {
          "name": "Colorado - Aspen",
          "aba": "102101645"
        },
        {
          "name": "Colorado - All other areas",
          "aba": "102000021"
        },
        {
          "name": "Idaho",
          "aba": "123103729"
        },
        {
          "name": "Illinois - Northern",
          "aba": "071904779"
        },
        {
          "name": "Illinois - Southern",
          "aba": "081202759"
        },
        {
          "name": "Indiana",
          "aba": "074900783"
        },
        {
          "name": "Iowa - Council Bluffs",
          "aba": "104000029"
        },
        {
          "name": "Iowa - All other areas",
          "aba": "073000545"
        },
        {
          "name": "Kansas",
          "aba": "101000187"
        },
        {
          "name": "Kentucky - Northern",
          "aba": "042100175"
        },
        {
          "name": "Kentucky - Western",
          "aba": "083900363"
        },
        {
          "name": "Minnesota - East Grand Forks",
          "aba": "091215927"
        },
        {
          "name": "Minnesota - Moorhead",
          "aba": "091300023"
        },
        {
          "name": "Minnesota - All other areas",
          "aba": "091000022"
        },
        {
          "name": "Missouri",
          "aba": "081000210"
        },
        {
          "name": "Montana",
          "aba": "092900383"
        },
        {
          "name": "Nebraska",
          "aba": "104000029"
        },
        {
          "name": "Nevada",
          "aba": "121201694"
        },
        {
          "name": "New Mexico",
          "aba": "107002312"
        },
        {
          "name": "North Dakota",
          "aba": "091300023"
        },
        {
          "name": "Ohio - Cleveland",
          "aba": "041202582"
        },
        {
          "name": "Ohio - All other areas",
          "aba": "042000013"
        },
        {
          "name": "Oregon",
          "aba": "123000220"
        },
        {
          "name": "South Dakota",
          "aba": "091408501"
        },
        {
          "name": "Tennessee",
          "aba": "064000059"
        },
        {
          "name": "Utah",
          "aba": "124302150"
        },
        {
          "name": "Washington",
          "aba": "125000105"
        },
        {
          "name": "Wisconsin",
          "aba": "075000022"
        },
        {
          "name": "Wyoming",
          "aba": "307070115"
        },
        {
          "name": "All other states",
          "aba": "091000022"
        }
      ]
    },
    "wellsfargo": {
      "name": "Wells Fargo",
      "states": [
        {
          "name": "Alabama",
          "aba": "062000080"
        },
        {
          "name": "Alaska",
          "aba": "125200057"
        },
        {
          "name": "Arizona",
          "aba": "122105278"
        },
        {
          "name": "Arkansas",
          "aba": "111900659"
        },
        {
          "name": "California",
          "aba": "121042882"
        },
        {
          "name": "Colorado",
          "aba": "102000076"
        },
        {
          "name": "Connecticut",
          "aba": "021101108"
        },
        {
          "name": "Delaware",
          "aba": "031100869"
        },
        {
          "name": "District of Columbia",
          "aba": "054001220"
        },
        {
          "name": "Florida",
          "aba": "063107513"
        },
        {
          "name": "Georgia",
          "aba": "061000227"
        },
        {
          "name": "Hawaii",
          "aba": "121042882"
        },
        {
          "name": "Idaho",
          "aba": "124103799"
        },
        {
          "name": "Illinois",
          "aba": "071101307"
        },
        {
          "name": "Indiana",
          "aba": "074900275"
        },
        {
          "name": "Iowa",
          "aba": "073000228"
        },
        {
          "name": "Kansas",
          "aba": "101089292"
        },
        {
          "name": "Kentucky",
          "aba": "121042882"
        },
        {
          "name": "Louisiana",
          "aba": "121042882"
        },
        {
          "name": "Maine",
          "aba": "121042882"
        },
        {
          "name": "Maryland",
          "aba": "055003201"
        },
        {
          "name": "Massachusetts",
          "aba": "121042882"
        },
        {
          "name": "Michigan",
          "aba": "091101455"
        },
        {
          "name": "Minnesota",
          "aba": "091000019"
        },
        {
          "name": "Mississippi",
          "aba": "062203751"
        },
        {
          "name": "Missouri",
          "aba": "121042882"
        },
        {
          "name": "Montana",
          "aba": "092905278"
        },
        {
          "name": "Nebraska",
          "aba": "104000058"
        },
        {
          "name": "Nevada",
          "aba": "321270742"
        },
        {
          "name": "New Hampshire",
          "aba": "121042882"
        },
        {
          "name": "New Jersey",
          "aba": "021200025"
        },
        {
          "name": "New Mexico",
          "aba": "107002192"
        },
        {
          "name": "New York",
          "aba": "026012881"
        },
        {
          "name": "North Carolina",
          "aba": "053000219"
        },
        {
          "name": "North Dakota",
          "aba": "091300010"
        },
        {
          "name": "Ohio",
          "aba": "041215537"
        },
        {
          "name": "Oklahoma",
          "aba": "121042882"
        },
        {
          "name": "Oregon",
          "aba": "123006800"
        },
        {
          "name": "Pennsylvania",
          "aba": "031000503"
        },
        {
          "name": "Rhode Island",
          "aba": "121042882"
        },
        {
          "name": "South Carolina",
          "aba": "053207766"
        },
        {
          "name": "South Dakota",
          "aba": "091400046"
        },
        {
          "name": "Tennessee",
          "aba": "064003768"
        },
        {
          "name": "Texas",
          "aba": "111900659"
        },
        {
          "name": "Texas - El Paso",
          "aba": "112000066"
        },
        {
          "name": "Utah",
          "aba": "124002971"
        },
        {
          "name": "Vermont",
          "aba": "121042882"
        },
        {
          "name": "Virginia",
          "aba": "051400549"
        },
        {
          "name": "Washington",
          "aba": "125008547"
        },
        {
          "name": "West Virginia",
          "aba": "121042882"
        },
        {
          "name": "Wisconsin",
          "aba": "075911988"
        },
        {
          "name": "Wyoming",
          "aba": "102301092"
        }
      ]
    }
  },
  tmp="";
  tmp += "<div class=\"pp-aba-helper\"><p>ABA Lookup<\/p>";
  tmp += "<p>Please, choose your bank<\/p>";
  tmp += "<select id=\"pp-aba-bank-name\"><option value=\"\"><\/option><\/select>";
  tmp += "<div id=\"pp-aba-bank-state\">";
  tmp += "<p>What location was this account opened in?<\/p>";
  tmp += "<select id=\"pp-aba-bank-state-select\"><\/select>";
  tmp += "<\/div><\/div>";
  
  (function init() {
    $('#pp-aba-lookup').click(function () {
      if ($('.pp-aba-helper').length === 0) {
        $('#BankABA').after(tmp);
        
        $('#pp-aba-bank-state').hide();
        
        for (var i in bankInfo) {
          $('#pp-aba-bank-name').append($("<option/>").attr('value', i).text(bankInfo[i].name));
        }
        
        $('#pp-aba-bank-name').change(function () {
          $('#pp-aba-bank-state').show();
          $('#pp-aba-bank-state-select').children().remove();
          $('#pp-aba-bank-state-select').append($("<option/>").attr('value', ''));
          
          var states = bankInfo[$('#pp-aba-bank-name').val()].states;
          
          for (var i in states) {
            $('#pp-aba-bank-state-select').append($("<option/>").attr('value', states[i].aba).text(states[i].name));
          }
        });
        
        $('#pp-aba-bank-state-select').change(function () {
          var val = $('#pp-aba-bank-state-select').val();
          if (val.length > 0) {
            $('#BankABA').val(val).focus();
            $('.pp-aba-helper').remove();
          }
        });
      }
    });
  }());
  
}(this.jQuery));
$(function ($) {
  var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    partsPriority = ['Year', 'Month', 'Day'];
  
  function mobileDatePicker(dataElem, short) {
    var me = this,
      target = dataElem,
      selects = {},
      control,
      minDate,
      maxDate,
      _short = short,
      
      getDatePartOpts = function (key) {
        var result = "";
        switch (key) {
          case 'Year':
            var curYear = new Date().getFullYear(),
              maxYear = maxDate ? maxDate.getFullYear() : curYear;
            
            for (var yr = maxYear; yr > 1900; yr--) {
              result += '<option value=' + yr + ' >' + yr + '</option>';
            }
            break;
          case 'Month':
            for (var mt = 1; mt <= 12; mt++) {
              var mn = monthNames[mt - 1];
              if (_short) mn = mn.substr(0, 3);
              result += '<option value=' + mt + ' >' + mn + '</option>';
            }
            break;
          case 'Day':
            for (var d = 1; d <= 31; d++) {
              
              result += '<option value=' + d + ' >' + d + '</option>';
            }
        }
        
        return result;
      },
      
      parseDateModifier = function (expr) {
        if (!expr) return 0;
        
        var current = 0,
          signMod = 1,
          yMod = 0,
          mMod = 0,
          dMod = 0,
          parsed = false;
        
        for (idx = 0; idx < expr.length; idx++) {
          var c = expr.charAt(idx);
          
          switch (c) {
            case ' ':
              continue;
              break;
            case '-':
              signMod = -1;
              break;
            case '+':
              signMod = 1;
              break;
            case 'y':
              if (yMod) throw 'Incorrect date expr : year';
              yMod = current * signMod;
              parsed = true;
              break;
            case 'm':
              if (mMod) throw 'Incorrect date expr : month';
              mMod = current * signMod;
              parsed = true;
              break;
            case 'd':
              if (dMod) throw 'Incorrect date expr : day';
              dMod = current * signMod;
              parsed = true;
              break;
            default:
              if (c.match(/[0-9]/)) {
                var iVal = parseInt(c);
                current = current * 10 + iVal;
              }
              else {
                throw 'Unexpected symbol';
              }
          }
          
          if (parsed) {
            current = 0;
            signMod = 1;
            parsed = false;
          }
        } // for
        
        var d = new Date();
        
        return new Date(d.getFullYear() + yMod, d.getMonth() + mMod, d.getDate() + dMod);
      },
      
      initDateRange = function () {
        var minDateVal = $(target).attr('minDate'),
          maxDateVal = $(target).attr('maxDate');
        
        if (minDateVal) {
          minDate = parseDateModifier(minDateVal);
        }
        
        if (maxDateVal) {
          maxDate = parseDateModifier(maxDateVal);
        }
      },
      
      leapYear = function (year) {
        return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
      },
      
      updateDependentOptions = function (val, dependentKey) {
        var dependent = (dependentKey) ? selects[dependentKey] : null,
          maxVal,
          yr = selects['Year'].val(),
          month = selects['Month'].val();
        
        switch (dependentKey) {
          case 'Month': // Works only when min / max values are set.
            maxVal = 12;
            if (maxDate && yr && yr == maxDate.getFullYear()) {
              maxVal = maxDate.getMonth() + 1;
            }
            break;
          case 'Day':
            var maxDay;
            if (val == 2) // February
            {
              maxDay = (!yr || leapYear(yr)) ? 29 : 28;
            }
            else {
              var idx = (val > 7) ? val - 7 : val;
              maxDay = (idx & 1) ? 31 : 30;
            }
            
            if (yr && month && yr == maxDate.getFullYear() && month == maxDate.getMonth() + 1) {
              maxDay = maxDate.getDate();
            }
            
            maxVal = maxDay;
            break;
        }
        
        var options = dependent.find('option'),
          currentVal = dependent.val();
        for (var idx = 1; idx < options.length; idx++) {
          var opt = $(options[idx]),
            optVal = opt.val(),
            optVisible = opt.val() <= maxVal;
          opt.toggle(optVisible);
          if (!optVisible) opt.attr('disabled', 'disabled'); else opt.removeAttr('disabled');
          if (!optVisible && optVal == currentVal) {
            dependent.val('');
          }
        }
        
        dependent.change();
      },
      
      hiddenValUpdated = function () {
        var val = $(this).val(),
          enabled = !($(this).attr('disabled'));
        
        try {
          for (var i in selects) {
            selects[i].data('_changing');
            if (!enabled) {
              selects[i].attr('disabled', 'disabled');
            }
          }
          
          var indexes = [0, 0, 0],
            k = 0,
            parts;
          
          if (val) {
            parts = val.split('/');
            for (var l in parts) {
              indexes[l] = parseInt(parts[l]);
            }
          }
          
          for (var j in selects) {
            if (!indexes[k]) selects[j].val(''); else selects[j].val(indexes[k]);
            k++;
          }
        }
        finally {
          for (var i in selects) {
            selects[i].removeData('_changing');
          }
        }
      },
      
      selectChanged = function () {
        var elem = $(this),
          val = elem.val(),
          key = elem.attr('data-part'),
          priorityIdx = $.inArray(key, partsPriority),
          dependentKey = (priorityIdx == 2) ? "" : partsPriority[priorityIdx + 1],
          tgt = $(target);
        
        if (elem.data('_changing')) return;
        
        elem.data('_changing', true);
        
        if (dependentKey) {
          updateDependentOptions(val, dependentKey);
        }
        
        var parts = [];
        for (var i = 0; i <= 2; i++) {
          var partVal = selects[partsPriority[i]].val();
          if (partVal) {
            parts.push(partVal);
          }
        }
        
        var dateVal = '';
        if (parts.length === 3) {
          dateVal = parts[1] + '/' + parts[2] + '/' + parts[0];
        }
        
        target.off('change', hiddenValUpdated);
        tgt.val(dateVal);
        tgt.change();
        target.on('change', hiddenValUpdated);
        elem.removeData('_changing');
      },
      
      attach = function () {
        var ctr = $('<div class="pp-date-select"></div>'),
          parts = ['Month', 'Day', 'Year'],
          base = target.attr('name');
        
        target.after(ctr);
        initDateRange();
        for (var i = 0; i <= 2; i++) {
          var key = parts[i],
            col = $('<div class="pp-col"></div>'),
            select = $('<select name="' + base + '_' + key + '" class="pp-dp-element pp-required" required><option value="">' + key + '</option>' + getDatePartOpts(key) + '</select>');
          
          select.attr('data-part', key);
          selects[key] = select;
          select.appendTo(col);
          select.on('change', selectChanged);
          col.appendTo(ctr);
        }
        
        for (var k = 2; k >= 0; k--) {
          selects[parts[k]].change();
        }
        
        target.on('change', hiddenValUpdated);
        
        return ctr;
      };
    
    control = attach();
    control.data("_control", me);
  }
  
  (function() {
    $('.pp-date-mobile').hide().each(function () {
      mobileDatePicker($(this), true);
    });
  }());
}(this.jQuery));
$(function ($, window) {
  "use strict";

  var elements = {
      $module: $('.pp-form'),
      $moduleReturning: $('.pp-form-returning'),
      $moduleProcessing: $('.pp-processing')
    },
    selectors = {
      step: '.pp-step',
      continueBtn: '.pp-continue-btn',
      backBtn: '.pp-back-btn',
      radioBtn: '.pp-radio-buttons [type="radio"]',
      submitBtn: '.pp-submit-btn',
      textFields: 'input[type!="hidden"][type!="radio"]:not(.pp-dont-select), select',
      validatedFields: 'input[type!="hidden"], select',
      lastStepFields: '.pp-last-step input[type!="hidden"], .pp-last-step select',
      focusedFields: 'input[type!="hidden"], select',
      lastStep: '.pp-last-step',
      disclaimer: '.pp-disclaimer',
      requestedAmount: 'input[name="RequestedAmount"]',
      DOB: '#DOB',
      DOB_Month: '[name="DOB_Month"]',
      DOB_Day: '[name="DOB_Day"]',
      DOB_Year: '[name="DOB_Year"]',
      payDate: '#PayDate1',
      email: '#Email',
      minLoanAmount: '#MinLoanAmount',
      phoneHome: '#PhoneHome',
      phoneWork: '#PhoneWork',
      employerZip: '#EmployerZip',
      zipCode: '#ZipCode',
      bankABA: '#BankABA',
      zipState: '.pp-zip-state',
      ssn: '#SSN',
      ssn1: '#SSN1',
      mortgageRent: '#MortgageRent',
      mortgageRentMasked: '#MortgageRentMasked',
      annualIncome: '#AnnualIncome',
      annualIncomeMasked: '#AnnualIncomeMasked',
      payday: '.payday',
      personal: '.personal',
      // Returning form
      returningStep: '.pp-returning-step',
      returningConfirmation: '.returning-confirmation',
      returningSubmit: '.returning-submit',
      submitNewBnt: '.pp-submit-new-btn',
      submitReturningBnt: '.pp-submit-returning-btn',
      updateBnt: '.pp-update-btn',
      returningFields: 'input, select',
      submitVerifyBnt: '.pp-verify-btn',
      returningZip: '.pp-returning-zip',
      returningSsn: '.pp-returning-ssn',
      returningDate: '.pp-returning-date',
      returningName: '.pp-returning-name',
      returningPayDate: '.pp-returning-pay-date',
      returningAmount: '#RequestedAmount',
      returningMinLoanAmount: '#returningMinLoanAmount',
      // Processing
      processingBar: '#pp-processing-bar'
    },
    paydayDate = {
      days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      holidayDates: ['02/20/2017', '05/29/2017', '07/04/2017', '09/04/2017', '10/09/2017', '11/11/2017', '11/23/2017', '12/25/2017']
    },
    classes = {
      error: 'error',
      valid: 'valid',
      loading: 'loading',
      loadingSM: 'loading-sm',
      zipState: 'pp-zip-state'
    },
    customAttributes = {
      minValue: "data-pp-min",
      maxValue: "data-pp-max",
      minLoanAmount: "data-min-value"
    },
    disclaimerText = {
      payday: 'By clicking “Get Cash Now!”, I affirm that I have read, understand, and agree to the Disclaimer, Privacy Policy and Terms of Use, my click is my electronic signature, and I authorize you to share my information with lenders and other marketing partners that might use SMS messaging, autodialers or prerecorded messages to call or text me on my mobile phone or landline. I understand consent is not required to obtain a loan. I further understand that I have no obligation to accept a loan once I am connected with an available lender.',
      personal: 'By clicking “View Offer!”, I affirm that I have read, understand, and agree to the Credit Authorization Agreement and Disclosure, Privacy Policy and Terms of Use, my click is my electronic signature, and I authorize you to share my information with lenders, lending partners, and other marketing partners that might use autodialers or prerecorded messages to call or text me on my mobile phone or landline or contact me via email. I understand consent is not required to obtain a loan. I further understand that I have no obligation to accept a loan once I am connected with an available lender or lending partner.'
    },
    buttonText = {
      payday: 'Get Cash Now!',
      personal: 'View Offer!'
    },
    progressBar = {
      validFields: {},
      progressLine: '.pp-progress-bar-line',
      progressNum: '.pp-progress-num',
      radioWrap: 'div.pp-radio-buttons',
      requiredCountSelector: '.pp-required:not([disabled], .disabled)',
      validCountSelector: '.valid.pp-required',
      requiredCount: 0,
      validCount: 0
    },
    errorFields = [],
    validationAlgorithm = {
      rules: {
        Email: {
          required: true,
          maxlength: 50
        },
        FirstName: {
          required: true,
          maxlength: 50
        },
        LastName: {
          required: true,
          maxlength: 50
        },
        LoanPurpose: {
          required: true
        },
        DOB: {
          required: true
        },
        DriversLicense: {
          required: true,
          maxlength: 25
        },
        DriversLicenseState: {
          required: true
        },
        Credit: {
          required: true
        },
        PhoneHome: {
          required: true,
          maxlength: 12,
          minlength: 12
        },
        Address1: {
          required: true,
          maxlength: 50
        },
        ZipCode: {
          required: true,
          ZipCodeValid: true,
          minlength: 5,
          remote: {
            type: 'POST',
            url: '/form/validatezip.php',
            data: {
              ZipCode: function () {
                return elements.$zipCode.val();
              }
            },
            beforeSend: function () {
              toggleLoaderSM(elements.$zipCode, true);
            },
            dataFilter: function (response) {
              return responseProcessing(JSON.parse(response), elements.$zipCode);
            }
          }
        },
        MortgageRentMasked: {
          required: true,
          MortgageRentValid: true
        },
        AnnualIncomeMasked: {
          required: true,
          AnnualIncomeValid: true
        },
        EmployerName: {
          required: true,
          maxlength: 25
        },
        EmployerAddress: {
          required: true,
          maxlength: 25
        },
        EmployerZip: {
          required: true,
          ZipCodeValid: true,
          minlength: 5,
          remote: {
            type: 'POST',
            url: '/form/validatezip.php',
            data: {
              ZipCode: function () {
                return elements.$employerZip.val();
              }
            },
            beforeSend: function () {
              toggleLoaderSM(elements.$employerZip, true);
            },
            dataFilter: function (response) {
              return responseProcessing(JSON.parse(response), elements.$employerZip);
            }
          }
        },
        PhoneWork: {
          required: true,
          maxlength: 12,
          minlength: 12
        },
        PayDate1: {
          required: true
        },
        BankABA: {
          required: true,
          BankABAValid: true,
          maxlength: 9
        },
        BankName: {
          required: true,
          maxlength: 100
        },
        BankAccountNumber: {
          required: true,
          maxlength: 30
        },
        SSN1: {
          required: true,
          maxlength: 11,
          minlength: 11
        }
      },
      errorPlacement: function () {
        return true;
      }
    },
    returningValidationAlgorithm = {
      rules: {
        ZipCode: {
          required: true,
          maxlength: 5,
          minlength: 5
        },
        SSN: {
          required: true,
          maxlength: 4,
          minlength: 4
        },
        RequestedAmount: {
          required: true
        },
        MonthlyIncome: {
          required: true
        },
        PayFrequency: {
          required: true
        },
        PayDate1: {
          required: true
        }
      },
      errorPlacement: function () {
        return true;
      }
    },
    formType = "",
    returningEmail = "",
    RID = "",
    formTypeThreshold = 5000,
    leadId = "",
    errorIndex;

  /**
   * Method initializes elements
   *
   * @method initElements
   * @returns {void}
   */
  function initElements() {
    elements.$continueBtn = elements.$module.find(selectors.continueBtn);
    elements.$backBtn = elements.$module.find(selectors.backBtn);
    elements.$radioBtn = elements.$module.find(selectors.radioBtn);
    elements.$submitBtn = elements.$module.find(selectors.submitBtn);
    elements.$textFields = elements.$module.find(selectors.textFields);
    elements.$lastStepFields = elements.$module.find(selectors.lastStepFields);
    elements.$lastStep = elements.$module.find(selectors.lastStep);
    elements.$disclaimer = elements.$module.find(selectors.disclaimer);
    elements.$payDate = elements.$module.find(selectors.payDate);
    elements.$email = elements.$module.find(selectors.email);
    elements.$requestedAmount = elements.$module.find(selectors.requestedAmount);
    elements.$minLoanAmount = elements.$module.find(selectors.minLoanAmount);
    elements.$phoneHome = elements.$module.find(selectors.phoneHome);
    elements.$phoneWork = elements.$module.find(selectors.phoneWork);
    elements.$employerZip = elements.$module.find(selectors.employerZip);
    elements.$zipCode = elements.$module.find(selectors.zipCode);
    elements.$bankABA = elements.$module.find(selectors.bankABA);
    elements.$ssn = elements.$module.find(selectors.ssn);
    elements.$ssn1 = elements.$module.find(selectors.ssn1);
    elements.$mortgageRent = elements.$module.find(selectors.mortgageRent);
    elements.$mortgageRentMasked = elements.$module.find(selectors.mortgageRentMasked);
    elements.$annualIncome = elements.$module.find(selectors.annualIncome);
    elements.$annualIncomeMasked = elements.$module.find(selectors.annualIncomeMasked);
    // Returning
    elements.$returningConfirmation = elements.$moduleReturning.find(selectors.returningConfirmation);
    elements.$returningSubmit = elements.$moduleReturning.find(selectors.returningSubmit);
    elements.$submitNewBnt = elements.$moduleReturning.find(selectors.submitNewBnt);
    elements.$submitVerifyBnt = elements.$moduleReturning.find(selectors.submitVerifyBnt);
    elements.$submitReturningBnt = elements.$moduleReturning.find(selectors.submitReturningBnt);
    elements.$updateBnt = elements.$moduleReturning.find(selectors.updateBnt);
    elements.$returningZip = elements.$moduleReturning.find(selectors.returningZip);
    elements.$returningSsn = elements.$moduleReturning.find(selectors.returningSsn);
    elements.$returningDate = elements.$moduleReturning.find(selectors.returningDate);
    elements.$returningPayDate = elements.$moduleReturning.find(selectors.returningPayDate);
    elements.$returningAmount = elements.$moduleReturning.find(selectors.returningAmount);
    elements.$returningMinLoanAmount = elements.$moduleReturning.find(selectors.returningMinLoanAmount);
    //Processing
    elements.$processingBar =  new ProgressBar.Line(selectors.processingBar, {
      easing: 'linear',
      duration: 15000,
      color: '#FFEA82',
      trailColor: '#eee',
      svgStyle: {
        width: '100%',
        height: '100%'
      },
      text: {
        style: null
      },
      step: function step(state, bar) {
        bar.setText(Math.round(bar.value() * 100) + ' %');
      }
    });
  }

  /**
   * Method sets percent for progress bar
   *
   * @method setProgress
   * @param percent {Number}
   * @returns {void}
   */
  function setProgress(percent) {
    if (percent > 100) {percent = 100;}

    $(progressBar.progressNum).text(percent + '%');

    $(progressBar.progressLine).css('width', percent + '%');
  }

  /**
   * Method calculates the
   * percentage of progress bar
   *
   * @method initProgressBar
   * @param element {Object}
   * @param isValid {Boolean}
   * @returns {void}
   */
  function initProgressBar(element, isValid) {
    var el = $(element),
      name = el.attr('name'),
      type = el.attr('type'),
      percentage;

    progressBar.requiredCount = $(formType + ' ' + progressBar.requiredCountSelector).length;

    if (type === 'radio' || type === 'checkbox') {
      el.closest(progressBar.radioWrap).addClass(classes.valid);
    }

    if (isValid) {
      progressBar.validFields[name] = true;
    } else {
      delete progressBar.validFields[name];
    }

    for (var prop in progressBar.validFields) {
      progressBar.validCount++;
    }

    progressBar.validCount = $(formType + ' ' + progressBar.validCountSelector).length;

    percentage = Math.round(100 * progressBar.validCount / progressBar.requiredCount);

    setProgress(percentage);
  }

  /**
   * Method returns flag for fields
   *
   * @method validateStep
   * @param $element {Object}
   * @returns {Boolean}
   */
  function validateStep($element) {
    var $step = $($element).closest(selectors.step);
    var inProcess = $step.find(selectors.validatedFields).parent().hasClass(classes.loadingSM);
    return !inProcess && $step.find(selectors.validatedFields).valid();
  }

  /**
   * Method returns flag for returning fields
   *
   * @method validateReturningStep
   * @param $element {Object}
   * @returns {Boolean}
   */
  function validateReturningStep($element) {
    return $($element).closest(selectors.returningStep).find(selectors.returningFields).valid();
  }

  /**
   * Method toggles element
   *
   * @method toggleStateOfModule
   * @param module {Object} - element which will be toggled
   * @param state {Boolean} - flag of state
   * @returns {void}
   */
  function toggleStateOfModule(module, state) {
    module.toggle(state);
  }

  /**
   * Method toggles element
   *
   * @method toggleElement
   * @param $element {Object} - element which will be toggled
   * @param state {Boolean} - flag of state
   * @returns {void}
   */
  function toggleElement($element, state) {
    $element.toggle(state);
  }

  /**
   * Method toggles loader
   *
   * @method toggleLoader
   * @param element {Object} - module
   * @param state {Boolean} - flag of state
   * @returns {void}
   */
  function toggleLoader(element, state) {
    element.toggleClass(classes.loading, state);
  }

  /**
   * Method toggles loader
   *
   * @method toggleLoaderSM
   * @param element {Object} - HTML Element
   * @param state {Boolean} - flag of state
   * @returns {void}
   */
  function toggleLoaderSM(element, state) {
    $(element).parent().toggleClass(classes.loadingSM, state);
  }

  /**
   * Method toggles form screen
   * and start processing bar
   *
   * @method startProcessing
   * @param module {Object}
   * @param state {Boolean} - flag of state
   * @returns {void}
   */
  function startProcessing(module, state) {
    toggleStateOfModule(module, !state);
    toggleStateOfModule(elements.$moduleProcessing, state);
  }

  /**
   * Method returns sting which
   * contains only digit symbols
   *
   * @method getDigit
   * @param value {String}
   * @returns {String}
   */
  function getDigit(value) {
    return value.replace(/\D+/g, "");
  }

  /**
   * Method shows next step of form
   *
   * @method goToNextStep
   * @param $element {Object} - current button element
   * @returns {void}
   */
  function goToNextStep($element) {
    var currentElement = $($element).closest(selectors.step),
      nextElement = currentElement.nextAll(formType).first();

    toggleElement(currentElement, false);
    toggleElement(nextElement, true);
    setFocus(nextElement);
  }

  /**
   * Method shows step of form
   * where was an error
   *
   * @method goToErrorStep
   * @param $element {Object} - current button element
   * @returns {void}
   */
  function goToErrorStep($element) {
    var step = elements.$module.find('[name="' + $element + '"]').closest(selectors.step);

    toggleElement(elements.$lastStep, false);
    toggleElement(step, true);
    setErrorFocus($element);
  }

  /**
   * Method shows next step of form
   * where was an error
   *
   * @method goToNextErrorStep
   * @returns {void}
   */
  function goToNextErrorStep() {
    var step = elements.$module.find('[name="' + errorFields[errorIndex] + '"]').closest(selectors.step),
        nextStep;

    if (errorIndex === errorFields.length - 1) {
      toggleElement(step, false);
      toggleElement(elements.$lastStep, true);
      setErrorFocus(errorFields[errorIndex]);

      return;
    }

    if (errorIndex < errorFields.length) {
      toggleElement(step, false);
      errorIndex++;
      nextStep = elements.$module.find('[name="' + errorFields[errorIndex] + '"]').closest(selectors.step);
      toggleElement(nextStep, true);
      setErrorFocus(errorFields[errorIndex]);
    }
  }

  /**
   * Method shows previous step of form
   *
   * @method goToNextStep
   * @param $element {Object} - current button element
   * @returns {void}
   */
  function goToPreviousStep($element) {
    var currentElement = $($element).closest(selectors.step),
      previousElement = currentElement.prevAll(formType).first();

    toggleElement(currentElement, false);
    toggleElement(previousElement, true);
  }

  /**
   * Method sets focus on first
   * input/select on current step
   *
   * @method setFocus
   * @param $element {Object} - current button element
   * @returns {void}
   */
  function setFocus($element) {
    var firstField = $element.find(selectors.focusedFields)[0];

    if (firstField) {
      firstField.focus();
    }
  }

  /**
   * Method sets focus on field
   * with error on current step
   *
   * @method setErrorFocus
   * @param $element {Object} - current button element
   * @returns {void}
   */
  function setErrorFocus($element) {
    var errorField = elements.$module.find('[name="' + $element + '"]');

    if (errorField) {
      errorField.focus();
    }
  }

  /**
   * Method returns configurable date object
   *
   * @method addDays
   * @param date {Object}
   * @param days {number}
   * @returns {Object}
   */
  function addDays(date, days) {
    var result = new Date(date);
    result.setDate(date.getDate() + days);

    return result;
  }

  /**
   * Method returns flag of holidays
   *
   * @method isHolidayDate
   * @param date {Object}
   * @returns {Boolean}
   */
  var isHolidayDate = function (date) {
    for (var i = 0; i < paydayDate.holidayDates.length; i++) {
      var hParts = paydayDate.holidayDates[i].split('/');

      if (parseInt(hParts[0]) === date.getMonth() + 1 &&
        parseInt(hParts[1]) === date.getDate() &&
        parseInt(hParts[2]) === date.getFullYear()) {
        return true;
      }
    }
    return false;
  };

  /**
   * Method renders options for
   * PayDate select
   *
   * @method renderPayDate
   * @param $elem {Object} - selector for PayDate1
   * @returns {Boolean}
   */
  function renderPayDate($elem) {
    var sel = $($elem), placeholder = sel.attr('placeholder');

    if (!sel.find('option').length) {
      $elem.append('<option value></option>');
    }

    for (var i = 1; i <= 40; i++) {
      var dt = addDays(new Date(), i);

      if (i === 1 || dt.getDate() === 1) {
        $elem.append('<option disabled>' + paydayDate.months[dt.getMonth()] + ' - ' + dt.getFullYear() + '</option>');
      }

      if (!isHolidayDate(dt)) {
        var dow = dt.getDay();
        if (dow > 0 && dow < 6) {
          $elem.append('<option value="' + (dt.getMonth() + 1) + '/' + dt.getDate() + '/' + dt.getFullYear() + '">' + paydayDate.days[dt.getDay()].substr(0, 3) + ' ' + paydayDate.months[dt.getMonth()].substr(0, 3) + '-' + dt.getDate() + '-' + dt.getFullYear() + '</option>');
        }
      }
    }
  }

  /**
   * Method sets type of form -
   * personal || payday
   *
   * @method setFormType
   * @param value {Number}
   * @returns {void}
   */
  function setFormType(value) {
    formType = value <= formTypeThreshold ? selectors.payday : selectors.personal;
  }

  /**
   * Method returns disclaimer text
   * for form - personal || payday
   *
   * @method getDisclaimer
   * @param value {Number}
   * @returns {String}
   */
  function getDisclaimer(value) {
    return value <= formTypeThreshold ? disclaimerText.payday : disclaimerText.personal;
  }

  /**
   * Method returns button text
   * for form - personal || payday
   *
   * @method getBtnText
   * @param value {Number}
   * @returns {String}
   */
  function getBtnText(value) {
    return value <= formTypeThreshold ? buttonText.payday : buttonText.personal;
  }

  /**
   * Method submit the form
   *
   * @method formSubmit
   * @returns {void}
   */
  function formSubmit() {
    var query = elements.$module.find(formType + ' input:not(.pp-dont-send),' + formType + ' select').serialize();

    errorFields = [];
    startProcessing(elements.$module, true);
    elements.$processingBar.animate(0.99);

    $.ajax({
      type: 'POST',
      url: '/form/lead.php',
      data: query,
      dataType: 'json',
      success: function(response) {
        if (Boolean(response.Errors && response.Errors.length)) {
          $.each(response.Errors, function (index, value) {
            var field = elements.$module.find('[name=' + value.Field + ']');

            value.Field && field.addClass(classes.error);

            if (errorFields.indexOf(value.Field) === -1) {
              errorFields.push(value.Field);
            }
          });

          errorIndex = 0;
          startProcessing(elements.$module, false);
          goToErrorStep(errorFields[errorIndex]);
        }

        if (Boolean(response.RedirectURL)) {
          window.location.href = response.RedirectURL;
        } else {
          if (Boolean(response.LeadID)) {
            leadId = response.LeadID;
            setTimeout(function(){
              formCheckStatus();
            }, 200);
          }
        }
      },
      error:  function(jqXHR, textStatus, errorThrown){
        console.error("The following error occurred: " + textStatus, errorThrown);
      }
    });
  }

  function formCheckStatus() {
    var query = 'RequestedAmount=' + $('[name=RequestedAmount]').val() + '&LeadID=' + leadId;

    $.ajax({
      type: 'POST',
      url: '/form/leadcheck.php',
      data: query,
      dataType: 'json',
      success: function(response) {

        if (Boolean(response.RedirectURL)) {
          window.location.href = response.RedirectURL;
        } else {
          setTimeout(function(){
            formCheckStatus();
          }, 200);
        }
      },
      error:  function(jqXHR, textStatus, errorThrown){
        console.error("The following error occurred: " + textStatus, errorThrown);
      }
    });
  }

  /**
   * Method render element for zip state
   *
   * @method renderZipHint
   * @param element {Object} HTML field
   * @returns {Object}
   */
  function renderZipHint(element) {
    var zipHint = element.closest(selectors.step).find(selectors.zipState);

    if (!zipHint.length) {
      zipHint = element.parent().after('<span class="'+ classes.zipState +'"/>').next();
    }

    return zipHint;
  }

  /**
   * Method for processing data
   * from zip validation request
   *
   * @method responseProcessing
   * @param response {Object}
   * @param element {Object} HTML field
   * @returns {Boolean}
   */
  function responseProcessing(response, element) {
    var state = Boolean(response.Conversion && response.Result === 1);

    if (state) {
      var zip = JSON.parse(response.Conversion);

      renderZipHint(element).html(zip.City + ", " + zip.StateShort);
      toggleLoaderSM(element, false);

      return true;
    }

    if (!state) {
      toggleLoaderSM(element, false);
      renderZipHint(element).html('');

      return false;
    }
  }

  /**
   * Method for custom validation
   *
   * @method validateZip
   * @param value {String}
   * @param element {Object} - HTML Element
   * @returns {Boolean}
   */
  function validateZip(value, element) {
    if (value.length === 5) {
      return true;
    } else {
      renderZipHint(element).html('');
      toggleLoaderSM(element, false);

      return false;
    }
  }

  /**
   * Method for custom validation
   *
   * @method isValidAba
   * @param value {String}
   * @param element {Object} - HTML Element
   * @returns {Boolean}
   */
  function isValidAba(value, element) {
    var isValid = false,
      c = 0,
      i = 0,
      n = 0,
      t = "";
    try {
      for (i = 0; i < value.length; i++) {
        c = parseInt(value.charAt(i), 10);
        t = t + c;
      }

      if (t.length === 9) { // pass 9 digit check
        toggleLoaderSM(element, true);
        n = 0;
        for (i = 0; i < t.length; i += 3) {
          n += (parseInt(t.charAt(i), 10) * 3) + (parseInt(t.charAt(i + 1), 10) * 7) + parseInt(t.charAt(i + 2), 10);
        }
        isValid = (n !== 0 && n % 10 === 0);
      }
    } catch (err) {}

    return isValid;
  }

  /**
   * Method for custom validation
   *
   * @method validateBankABA
   * @param value {String}
   * @param element {Object} - HTML Element
   * @param state {Boolean}
   * @returns {Boolean}
   */
  function validateBankABA(value, element, state) {
    var abaHint = elements.$module.find('#BankName');

    if (!isValidAba(value, element)) {
      abaHint.val("");
      toggleLoaderSM(element, false);

      return false;
    }

    $.ajax({
      type: 'POST',
      url: '/form/validatebankaba.php',
      data: $(element).serialize(),
      dataType: 'json',
      success: function(response) {
        state = Boolean(response.Result === 1 && response.Conversion);

        if (state) {
          var name = JSON.parse(response.Conversion);
          toggleLoaderSM(element, false);

          abaHint.val(name.BankName);
        }

        if (!state) {
          abaHint.val("");
        }
      },
      error:  function(jqXHR, textStatus, errorThrown){
        console.error("The following error occurred: " + textStatus, errorThrown);
      }
    });

    return true;
  }

  /**
   * Method checks email for returning user
   *
   * @method checkEmail
   * @param element {Object} - HTML Element
   * @returns {void}
   */
  function checkEmail(element) {
    returningEmail = $(element).serialize();

    $.ajax({
      type: 'POST',
      url: '/form/checkemail.php',
      data: returningEmail,
      dataType: 'json',
      success: function(response) {
        if (response.Result === 1) {
          toggleLoaderSM(element, false);
          toggleStateOfModule(elements.$module, false);
          toggleStateOfModule(elements.$moduleReturning, true);
        }

        if (response.Result === 2) {
          toggleLoaderSM(element, false);
        }
      },
      error:  function(jqXHR, textStatus, errorThrown){
        console.error("The following error occurred: " + textStatus, errorThrown);
      }
    });
  }

  /**
   * Method verified returning user data
   *
   * @method verifyEmail
   * @param element {Object} - HTML Element
   * @returns {void}
   */
  function verifyEmail(element) {
    var query = $(element).closest(selectors.returningStep).find(selectors.returningFields).serialize();

    toggleLoader(elements.$moduleReturning, true);

    $.ajax({
      type: 'POST',
      url: '/form/verifyemail.php',
      data: query + '&' + returningEmail,
      dataType: 'json',
      success: function(response) {
        if (Boolean(response.Result === 1 && response.RID)) {
          RID = 'RID=' + response.RID;
          elements.$returningDate.html(response.LastDate);

          if (Boolean(response.Fields)) {
            $.each(response.Fields, function (index, value) {
              switch (value.FieldName) {
                case 'FirstName':
                  elements.$moduleReturning.find(selectors.returningName).html(value.FieldValue + "!");
                  break;
                case 'MonthlyIncome':
                  elements.$moduleReturning.find('[name="MonthlyIncome"]').val(value.FieldValue);
                  break;
                case 'RequestedAmount':
                  elements.$moduleReturning.find('[name="RequestedAmount"]').val(value.FieldValue);
                  break;
                default:
                  elements.$moduleReturning.find('[name=' + value.FieldName + ']').val(value.FieldValue);
              }
            });
          }

          toggleLoader(elements.$moduleReturning, false);
          toggleElement(elements.$returningConfirmation, false);
          toggleElement(elements.$returningSubmit, true);
        } else {
          toggleLoader(elements.$moduleReturning, false);
        }
      },
      error:  function(jqXHR, textStatus, errorThrown){
        console.error("The following error occurred: " + textStatus, errorThrown);
      }
    });
  }

  /**
   * Method verified returning user data
   *
   * @method submitReturning
   * @param element {Object} - HTML Element
   * @returns {void}
   */
  function submitReturning(element) {
    var query = $(element).closest(selectors.returningStep).find(selectors.returningFields).serialize();

    errorFields = [];
    startProcessing(elements.$moduleReturning, true);
    elements.$processingBar.animate(0.99);
    $.ajax({
      type: 'POST',
      url: '/form/lead.php',
      data: query + '&' + RID,
      timeout: 300000,
      dataType: 'json',
      success: function(response) {
        if (Boolean(response.Errors && response.Errors.length)) {
          $.each(response.Errors, function (index, value) {
            var field = elements.$module.find('[name=' + value.Field + ']');

            value.Field && field.addClass(classes.error);

            if (errorFields.indexOf(value.Field) === -1) {
              errorFields.push(value.Field);
            }
          });

          errorIndex = 0;
          startProcessing(elements.$moduleReturning, false);
          goToErrorStep(errorFields[errorIndex]);
        }

        if (Boolean(response.RedirectURL)) {
          window.location.href = response.RedirectURL;
        }
      },
      error:  function(jqXHR, textStatus, errorThrown){
        console.error("The following error occurred: " + textStatus, errorThrown);
      }
    });
  }

  /**
   * Method verified returning user data
   *
   * @method updateForm
   * @returns {void}
   */
  function updateForm() {
    toggleLoader(elements.$moduleReturning, true);

    $.ajax({
      type: 'POST',
      url: '/form/leadedit.php',
      data: returningEmail + '&' + RID,
      dataType: 'json',
      success: function(response) {
        if (Boolean(response.Result === 1 && response.Fields)) {
          elements.$minLoanAmount.after('<input type="hidden" id="RID" name="RID" value="' + response.RID + '"/>');

          $.each(response.Fields, function (index, value) {
            var field = elements.$module.find(selectors.payday + ' [name=' + value.FieldName + ']');

            switch (value.FieldName) {
              case 'SSN':
                var ssnVal = '***-**-' + value.FieldValue.substring(5);
                elements.$ssn1.val(ssnVal);
                break;
              case 'DOB':
                var val = value.FieldValue.split('/');
                $(selectors.DOB_Month).val(val[0]);
                $(selectors.DOB_Day).val(val[1]);
                $(selectors.DOB_Year).val(val[2]);
                $(selectors.DOB).val(value.FieldValue);
                break;
              case 'PhoneHome':
                var phoneHome = [];
                phoneHome.push(value.FieldValue.substr(0, 3));
                phoneHome.push(value.FieldValue.substr(3, 3));
                phoneHome.push(value.FieldValue.substr(6, 4));
                elements.$phoneHome.val(phoneHome.join("-"));
                break;
              case 'PhoneWork':
                var phoneWork = [];
                phoneWork.push(value.FieldValue.substr(0, 3));
                phoneWork.push(value.FieldValue.substr(3, 3));
                phoneWork.push(value.FieldValue.substr(6, 4));
                elements.$phoneWork.val(phoneWork.join("-"));
                break;
              default:
                var prevVal = value.FieldValue;

                if (prevVal.toLowerCase() === 'true' || prevVal.toLowerCase() === 'false') {
                  prevVal = (prevVal.toLowerCase() === 'true') ? '1' : '0';
                }

                if (field.attr("type") !== 'radio') {
                  field.val(value.FieldValue);
                }

                if (field.attr("type") === 'radio') {
                  $('[value="'+ prevVal +'"]').prop('checked', true);
                }
                break;
            }
          });

          $("#BankAccountNumber, #SSN, #SSN1").attr('disabled', 'disabled');


          toggleLoader(elements.$moduleReturning, false);
          toggleStateOfModule(elements.$moduleReturning, false);
          toggleStateOfModule(elements.$module, true);
        }
      },
      error:  function(jqXHR, textStatus, errorThrown){
        console.error("The following error occurred: " + textStatus, errorThrown);
      }
    });
  }

  /**
   * Method sets event handlers
   *
   * @method setEventHandlers
   * @returns {void}
   */
  function setEventHandlers() {
    elements.$backBtn.on('click', function () {
      goToPreviousStep(this);
    });

    elements.$requestedAmount.on("change", function () {
      var value = Number($(this).val());

      setFormType(value);
      elements.$disclaimer.html(getDisclaimer(value));
      elements.$submitBtn.html(getBtnText(value));
      elements.$minLoanAmount.val($(this).attr(customAttributes.minLoanAmount));
    });

    elements.$email.on("change", function () {
      if ($(this).valid() && formType === selectors.payday) {
        toggleLoaderSM(this, true);
        checkEmail(this);
      }
    });

    elements.$radioBtn
      .on('change', function () {
        goToNextStep(this);
      })
      .on('click', function () {
        initProgressBar(this, $(this).valid());
        goToNextStep(this);
      });

    elements.$continueBtn.on('click', function () {
      validateStep(this) && !errorFields.length ? goToNextStep(this) : goToNextErrorStep();
    });

    elements.$submitBtn.on('click', function () {
      if (validateStep(this)) {
        formSubmit();
      }
    });

    elements.$textFields.on('keypress', function (e) {
      if (e.keyCode === 13 || e.which === 13) {
        e.preventDefault();

        validateStep(this) && !errorFields.length ? goToNextStep(this) : goToNextErrorStep();
      }
    });

    elements.$module.on("change", selectors.validatedFields, function () {
      initProgressBar(this, $(this).valid());
    });

    elements.$annualIncomeMasked.on('change', function () {
      elements.$annualIncome.val(getDigit($(this).val()));
    });

    elements.$mortgageRentMasked.on('change', function () {
      elements.$mortgageRent.val(getDigit($(this).val()));
    });

    elements.$ssn1.on('change', function () {
      elements.$ssn.val($(this).val().replace(/\s|-/g, '').substr(0, 9));
    });

    elements.$lastStepFields.on('keypress', function (e) {
      if (e.keyCode === 13 || e.which === 13) {
        e.preventDefault();

        validateStep(this);
      }
    });

    /* * * * * *
    * Returning
    * * * * * */
    elements.$submitNewBnt.on('click', function () {
      toggleStateOfModule(elements.$moduleReturning, false);
      toggleStateOfModule(elements.$module, true);
    });

    elements.$submitVerifyBnt.on('click', function () {
      if (validateReturningStep(this)) {
        verifyEmail(this);
      }
    });

    elements.$submitReturningBnt.on('click', function () {
      if (validateReturningStep(this)) {
        var amountValue = elements.$returningAmount.val(),
          opt = elements.$returningAmount.find('option[value="'+ amountValue +'"]');

        elements.$returningMinLoanAmount.val($(opt).attr(customAttributes.minLoanAmount));
        submitReturning(this);
      }
    });

    elements.$updateBnt.on('click', function () {
      updateForm();
    });
  }

  function initSettings() {
    renderPayDate(elements.$payDate);
    renderPayDate(elements.$returningPayDate);
    elements.$zipCode.mask('00000');
    elements.$returningZip.mask('00000');
    elements.$returningSsn.mask('0000');
    elements.$ssn1.mask('000-00-0000');
    elements.$bankABA.mask('000000000');
    elements.$employerZip.mask('00000');
    elements.$phoneHome.mask('000-000-0000');
    elements.$phoneWork.mask('000-000-0000');
    elements.$mortgageRentMasked.mask('000,000', {reverse: true});
    elements.$mortgageRentMasked.maskMoney({
      prefix: '$',
      thousands:',',
      precision: 0,
      allowZero: true
    });
    elements.$annualIncomeMasked.mask('00,000,000', {reverse: true});
    elements.$annualIncomeMasked.maskMoney({
      prefix: '$',
      thousands:',',
      precision: 0,
      allowZero: false
    });

    $.validator.addMethod("MortgageRentValid", function (value) {
      value = getDigit(value);

      var maxValue = elements.$mortgageRentMasked.attr(customAttributes.maxValue) || 10000;

      return value <= Number(maxValue);
    });

    $.validator.addMethod("AnnualIncomeValid", function (value) {
      value = getDigit(value);

      var minValue = elements.$annualIncomeMasked.attr(customAttributes.minValue) || 1000,
        maxValue = elements.$annualIncomeMasked.attr(customAttributes.maxValue) || 1000000;

      return value <= Number(maxValue) && value >= Number(minValue);
    });

    $.validator.addMethod("ZipCodeValid", validateZip);
    $.validator.addMethod("BankABAValid", validateBankABA);

    elements.$module.validate(validationAlgorithm);
    elements.$moduleReturning.validate(returningValidationAlgorithm);
  }

  (function init() {
    initElements();
    initSettings();
    setEventHandlers();
  }());

}(this.jQuery, this));
