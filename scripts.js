const serverUrl = "https://gameoffline.joynguyen.online";

const gameLinks = [
    "2048", "3dtetris", "alienattack", "balanceball", "battleday", "bdot", "birgly", "blackbats", "bloxslider", "bottomtight",
    "bravebird", "brokenhorn", "bubblecn", "bubblefish", "burningrubber", "candyfusion", "candypig", "captainroger", "captainwar",
    "catonfire", "cavejumper", "cboxes", "cheeselab", "chipman", "christmasballs", "circleball", "circlepong", "circletris", "cninjas",
    "cowboyrun", "cowboyshot", "craigenstone", "creedyrabbit", "crkarmax", "cubeninja", "dangermouse", "dangerous", "darkninja",
    "deathsoul", "donteattrash", "dotgame", "dronewars", "dropcircle", "duckwater", "elmore", "escape", "evilrobot", "evilwyrm",
    "fastgame", "firebrigade", "fishingfrenzy", "fishshot", "flapcatcopters", "flapcatxmas", "flappydog", "flyingschool", "foofoo",
    "foxfury", "freedomroad", "frog", "fullimmersion", "funnysoccer", "gettwelve", "goblinmachine", "gofishing", "goingnuts",
    "greedygnomes", "greenwings", "groovyski", "grubhub", "gumballrace", "gunmach", "hanselandgretel", "herojump", "hidden",
    "hungrybob", "hyperminer", "icecream", "isagame", "jellydoods", "jellyslice", "jomjom", "jump2048", "jumpkitty", "jumpman",
    "jumppydog", "jumppydragon", "knightnday", "lizardrocket", "looneyroonks", "luxahoy", "manic", "matchtime", "mathgame",
    "mixthesquare", "monstereater", "mousejump", "mypuki", "nest", "ninjablade", "ninjablock", "ninjakidvszb", "ninjarun",
    "ninjaway", "nugget_seeker", "ojelloonline", "pacman", "pancakeboss", "pandaflash", "pebbleboy", "penguin", "periperi",
    "pieattack", "pigeon", "piggyroll", "piratekid", "pitana", "popup", "portalrunner", "pyramidjump", "raccoonrun", "rainbox",
    "rapunzel", "rectangzings", "reflector", "robotion", "rocketpop", "ropeninja", "runneryodas", "runpixierun", "sallybbq",
    "sambogart", "silverarrow", "skylands", "skyrace", "skytte", "skywire", "slotchicken", "sortbird", "spacecowboy", "spicy",
     "springninja", "squarecrush", "stevenkash", "stickpanda", "stickpandaxmas", "sticksamurai", "stickygoo", "strangespace",
    "taptapsubmarine", "targetap", "tetrisclassic", "titanrunner", "tooncup", "trailblazer", "trashndash", "trollboxing", "uforun",
    "veggirabbit", "viking", "woodblock", "xtypesky", "zapaliens", "zcj2", "zombie-dungeon", "zombieinfect", "zombienight",
    "zombiescantjump", "zombieworld", "zoostuner"];

gameLinks.forEach(link => {
    document.getElementById(`link${link}`).href = `${serverUrl}/${link}`;
});

