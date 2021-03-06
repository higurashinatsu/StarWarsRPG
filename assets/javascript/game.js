// BUGS:
// 1) NOT BUGS -> need to edit css

$(document).ready( function() {

    // Beginning of jQuery/JS functions
    // Clicking functions
    var charSelected;
    var enemySelected;

    // for later storage
    var yourCharacter;
    var yourAttacker;

    var charName;
    var enemyName;
    var charNewHP;
    var charHP;
    var enemyNewHP;
    var enemyHP;
    var charAttackPow = 0;
    var enemyDamagePow;

    // Script section setup
    var script = $("<div>");
    script.addClass("script");
    $(".scriptSection").append(script);
    var restartButton = $("<br><button type='button' id='restart'>Restart</button>");
    $(".scriptSection").append(restartButton);
    restartButton.hide();

    function starWarsRPG() {
        // OBI-WAN KENOBI Character
        var obi = {
            name: "Obi-Wan Kenobi",
            hp: 120,
            damagePow: 10,
            // attackPow: 20,
        }

        var obiBlock = $("<div>");
        var obiname = obi.name;
        var obiHP = obi.hp;
        obiBlock.addClass("char");
        obiBlock.addClass("obiBlock");
        $(".charAvailable").append(obiBlock);
        $(".obiBlock").append(obiname);
        $(".obiBlock").append($("<img id='obi' src='./assets/images/obiwan.jpg' />"));
        $(".obiBlock").append(obiHP);


        // LUKE SKYWALKER
        var luke = {
            name: "Luke Skywalker",
            hp: 100,
            damagePow: 5,
            // attackPow: 15,
        }

        var lukeBlock = $("<div>");
        var lukename = luke.name;
        var lukeHP = luke.hp;
        lukeBlock.addClass("char");
        lukeBlock.addClass("lukeBlock");
        $(".charAvailable").append(lukeBlock);
        $(".lukeBlock").append(lukename);
        $(".lukeBlock").append($("<img id='luke' src='./assets/images/lukeS.jpg' />"));
        $(".lukeBlock").append(lukeHP);


        // DARTH SIDOUS
        var sidious = {
            name: "Darth Sidious",
            hp: 150,
            damagePow: 20,
            // attackPow: 25,
        }

        var sidBlock = $("<div>");
        var sidname = sidious.name;
        var sidHP = sidious.hp;
        sidBlock.addClass("char");
        sidBlock.addClass("sidBlock");
        $(".charAvailable").append(sidBlock);
        $(".sidBlock").append(sidname);
        $(".sidBlock").append($("<img id='sid' src='./assets/images/darthsidious.jpg' />"));
        $(".sidBlock").append(sidHP);


        // DARTH MAUL
        var maul = {
            name: "Darth Maul",
            hp: 180,
            damagePow: 25,
            // attackPow: 28,
        }

        var maulBlock = $("<div>");
        var maulname = maul.name;
        var maulHP = maul.hp;
        maulBlock.addClass("char");
        maulBlock.addClass("maulBlock");
        $(".charAvailable").append(maulBlock);
        $(".maulBlock").append(maulname);
        $(".maulBlock").append($("<img id='maul' src='./assets/images/Darth-Maul.jpg' />"));
        $(".maulBlock").append(maulHP);
    

        $(".script").text("You can choose a character to begin.");

        $(document).on("click", ".char", function() {
            // choose your character
            if(!charSelected) {
                yourCharacter = $(this);
                $(".selectedChar").append(yourCharacter);
                $(".script").text("Please select an enemy to begin attack.");
            }
            else {
                // alert("You have already selected a character!");
                $(".script").text("You need to select a character!");
            }
            $(".charAvailable").children().each( function() {
                $(this).removeClass("char");
                $(this).addClass("enemy");
                $(".enemyselected").append($(this));
            })
            charSelected = true;

            // Character selection
            if(yourCharacter.attr('class') === "char obiBlock") {
                // alert("You are Obi-Wan Kenobi!");
                char = obi;
                charHP = obiHP;
                charName = obiname;
                // console.log(charName);
                // console.log(charHP);
                // console.log(charAttackPow);
            }
            else if (yourCharacter.attr('class') === "char lukeBlock") {
                // alert("You are Luke Skywalker!");
                char = luke;
                charHP = lukeHP;
                charName = lukename;
                // console.log(charName);
                // console.log(charHP);
                // console.log(charAttackPow);
            }
            else if (yourCharacter.attr('class') === "char sidBlock") {
                // alert("You are Darth Sidious!");
                char = sidious;
                charHP = sidHP;
                charName = sidname;
                // console.log(charName);
                // console.log(charHP);
                // console.log(charAttackPow);
            }
            else if (yourCharacter.attr('class') === "char maulBlock") {
                // alert("You are Darth Maul!");
                char = maul;
                charHP = maulHP;
                charName = maulname;
                // console.log(charName);
                // console.log(charHP);
                // console.log(charAttackPow);
            }
        })

        $(document).on("click", ".enemy", function() {
        // set a condition that you cannot select multiple enemy
            if(!enemySelected) {
                $(".yourDefender").append($(this));
                $(this).addClass("attacker");
                yourAttacker = $(this);
                enemySelected = true;
            }
            else {
                $(".script").text("You need to select a defender!");
            }

            // Attacker selection
            if(yourAttacker.attr('class') === "obiBlock enemy attacker") {
                // alert("Your attacker is Obi-Wan Kenobi!");
                enemy = obi;
                enemyHP = obiHP;
                enemyName = obiname;
                enemyDamagePow = obi.damagePow;
                // console.log(enemyName);
                // console.log(enemyHP);
                // console.log(enemyDamagePow);

            }
            else if (yourAttacker.attr('class') === "lukeBlock enemy attacker") {
                // alert("Your attacker is Luke Skywalker!");
                enemy = luke;
                enemyHP = lukeHP;
                enemyName = lukename;
                enemyDamagePow = luke.damagePow;
                // console.log(enemyName);
                // console.log(enemyHP);
                // console.log(enemyDamagePow);
            }
            else if (yourAttacker.attr('class') === "sidBlock enemy attacker") {
                // alert("Your attacker is Darth Sidious!");
                enemy = sidious;
                enemyHP = sidHP;
                enemyName = sidname;
                enemyDamagePow = sidious.damagePow;
                // console.log(enemyName);
                // console.log(enemyHP);
                // console.log(enemyDamagePow);
            }
            else if (yourAttacker.attr('class') === "maulBlock enemy attacker") {
                // alert("Your attacker is Darth Maul!");
                enemy = maul;
                enemyHP = maulHP;
                enemyName = maulname;
                enemyDamagePow = maul.damagePow;
                // console.log(enemyName);
                // console.log(enemyHP);
                // console.log(enemyDamagePow);
            }

            if($(".selectedChar").is(':empty')) {
                $(".script").text("You can restart the game.");
            }

            else {
                $(".script").text("Begin to attack!");
            }
        })
    }

    $("#attackButton").click( function() {
        if(charSelected && enemySelected) {
            if(charHP > 0 && enemyHP > 0) {
                // alert("great! battle begin!");

                // attacking game
                console.log(yourCharacter.text());
                charAttackPow = charAttackPow + 8;
                enemyNewHP = enemyHP - charAttackPow;

                if (enemyNewHP <= 0) {

                    $(".script").text("YOU WIN!");
                    $(".yourDefender").empty();
                    enemySelected = false;
                }
                else {
                    charNewHP = charHP - enemyDamagePow;
                }
                

                $(".char").html(yourCharacter.html().replace(charHP.toString(), charNewHP.toString()));
                $(".attacker").html(yourAttacker.html().replace(enemyHP.toString(), enemyNewHP.toString()));

                charHP = charNewHP;
                enemyHP = enemyNewHP;

                $(".script").text("Your attacked " + enemyName + " for " + charAttackPow + " damage.");
                $(".script").append("<br>" + enemyName + " attacked you for "+ enemyDamagePow + " damage. <br>");
            }
            if (charHP >= 0 && enemyHP <= 0) {
                $(".script").text("You have defeated " + enemyName + "! Please select another defender to continue.");
                $(".yourDefender").empty();
                enemySelected = false;
                
                if ($(".enemyselected").is(':empty') && ($(".yourDefender").is(':empty'))) {
                    $(".script").text("You won! You have defeated all the enemies!");
                    restartButton.show();
                }
            }
            else if (charHP <= 0 && enemyHP > 0) {
                // $(".script").text("YOU LOSE!");
                $(".selectedChar").empty();
                // restartButton.show();
                $(".script").text("You lost. You can restart the game.");
                restartButton.show();
            }
        }

        else if (!charSelected && !enemySelected) {
            $(".script").text("No character and defender selected.");
        }
        else if (!enemySelected) {
            // alert("You need to select a character!");
            $(".script").text("No defender available.");
        }
    })

    restartButton.click( function() {
        charSelected = false;
        enemySelected = false;

        yourCharacter;
        yourAttacker;
    
        charName;
        enemyName;
        charNewHP;
        charHP;
        enemyNewHP;
        enemyHP;
        charAttackPow = 0;
        enemyDamagePow;
        $(".charAvailable").empty();
        $(".enemyselected").empty();
        $(".selectedChar").empty();
        $(".yourDefender").empty();
        $(".script").empty();

        $(document).unbind("click");
        restartButton.hide();
        
        starWarsRPG();
    })

    starWarsRPG();

})