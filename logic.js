
var cards = {Knight:26000000,
	Archers:26000001,
	Goblins:26000002,
	Giant:26000003,
	PEKKA:26000004,
	Minions:26000005,
	Balloon:26000006,
	Witch:26000007,
	Barbarians:26000008,
	Golem:26000009,
	Skeletons:26000010,
	Valkyrie:26000011,
	SkeletonArmy:26000012,
	Bomber:26000013,
	Musketeer:26000014,
	BabyDragon:26000015,
	Prince:26000016,
	Wizard:26000017,
	MiniPEKKA:26000018,
	SpearGoblins:26000019,
	GiantSkeleton:26000020,
	HogRider:26000021,
	MinionHorde:26000022,
	IceWizard:26000023,
	RoyalGiant:26000024,
	Guards:26000025,
	Princess:26000026,
	DarkPrince:26000027,
	ThreeMusketeers:26000028,
	LavaHound:26000029,
	IceSpirit:26000030,
	FireSpirits:26000031,
	Miner:26000032,
	Sparky:26000033,
	Bowler:26000034,
	Lumberjack:26000035,
	BattleRam:26000036,
	InfernoDragon:26000037,
	IceGolem:26000038,
	MegaMinion:26000039,
	DartGoblin:26000040,
	GoblinGang:26000041,
	ElectroWizard:26000042,
	EliteBarbarians:26000043,
	Hunter:26000044,
	Executioner:26000045,
	Bandit:26000046,
	RoyalRecruits:26000047,
	NightWitch:26000048,
	Bats:26000049,
	RoyalGhost:26000050,
	Zappies:26000052,
	Rascals:26000053,
	CannonCart:26000054,
	MegaKnight:26000055,
	SkeletonBarrel:26000056,
	FlyingMachine:26000057,
	RoyalHogs:26000059,
	MagicArcher:26000062,
	Cannon:27000000,
	GoblinHut:27000001,
	Mortar:27000002,
	InfernoTower:27000003,
	BombTower:27000004,
	BarbarianHut:27000005,
	Tesla:27000006,
	ElixirCollector:27000007,
	XBow:27000008,
	Tombstone:27000009,
	Furnace:27000010,
	Fireball:28000000,
	Arrows:28000001,
	Rage:28000002,
	Rocket:28000003,
	GoblinBarrel:28000004,
	Freeze:28000005,
	Mirror:28000006,
	Lightning:28000007,
	Zap:28000008,
	Poison:28000009,
	Graveyard:28000010,
	TheLog:28000011,
	Tornado:28000012,
	Clone:28000013,
	BarbarianBarrel:28000015,
	HealSpirit:28000016,
    GiantSnowball:28000017,
	GoblinGiant:26000060,
	ElectroDragon:26000063,
	RamRider:26000051,
	Earthquake:28000014,
	WallBreakers:26000058,
	BattleHealer:26000068,
	RoyalDelivery:28000018,
	ElixirGolem:26000067,
	Fisherman:26000061,
	GoblinCage:27000012,
};
    
function processCards(){
    allArray = document.getElementsByClassName('cards');
    for(var i=0;i<allArray.length;i++) {
        if(document.getElementsByClassName('cards')[i].checked===true) {
            delete cards[document.getElementsByClassName('cards')[i].value];
        }
    }
    var str='';

    for (var i=0;i<Object.keys(cards).length;i++) {
        var key = Object.keys(cards)[i];
        str += '&excludedCards=' + cards[key] + '-1';
    }

    openNewWindow(str);
    // Object.keys(cards).forEach(function(key,index) {
    //     str += '&excludedCards=' + cards[key] + '-1';
    //     openNewWindow(str);
    // //https://statsroyale.com/deckbuilder?
    // });
}

function showCommonsOnly(){
	showAll();
	rareArray = Array.prototype.slice.call(document.getElementsByClassName('rare'));
	epicArray = Array.prototype.slice.call(document.getElementsByClassName('epic'));
	legendaryArray = Array.prototype.slice.call(document.getElementsByClassName('legendary'));
	finalArray = (rareArray.concat(epicArray)).concat(legendaryArray);
	for (let index = 0; index < finalArray.length; index++) {
		const element = finalArray[index];
		element.style.display = 'none';
	}
}
function showRaresOnly(){
	showAll();
	commonArray = Array.prototype.slice.call(document.getElementsByClassName('common'));
	epicArray = Array.prototype.slice.call(document.getElementsByClassName('epic'));
	legendaryArray = Array.prototype.slice.call(document.getElementsByClassName('legendary'));
	finalArray = (commonArray.concat(epicArray)).concat(legendaryArray);
	for (let index = 0; index < finalArray.length; index++) {
		const element = finalArray[index];
		element.style.display = 'none';
	}
}
function showEpicsOnly(){
	showAll();
	rareArray = Array.prototype.slice.call(document.getElementsByClassName('rare'));
	commonArray = Array.prototype.slice.call(document.getElementsByClassName('common'));
	legendaryArray = Array.prototype.slice.call(document.getElementsByClassName('legendary'));
	finalArray = (rareArray.concat(commonArray)).concat(legendaryArray);
	for (let index = 0; index < finalArray.length; index++) {
		const element = finalArray[index];
		element.style.display = 'none';
	}
}
function showLegendariesOnly(){
	showAll();
	rareArray = Array.prototype.slice.call(document.getElementsByClassName('rare'));
	epicArray = Array.prototype.slice.call(document.getElementsByClassName('epic'));
	commonArray = Array.prototype.slice.call(document.getElementsByClassName('common'));
	finalArray = (rareArray.concat(epicArray)).concat(commonArray);
	for (let index = 0; index < finalArray.length; index++) {
		const element = finalArray[index];
		element.style.display = 'none';
	}
}
function showAll(){
	rareArray = Array.prototype.slice.call(document.getElementsByClassName('rare'));
	epicArray = Array.prototype.slice.call(document.getElementsByClassName('epic'));
	legendaryArray = Array.prototype.slice.call(document.getElementsByClassName('legendary'));
	commonArray = Array.prototype.slice.call(document.getElementsByClassName('common'));
	finalArray = ((rareArray.concat(epicArray)).concat(commonArray)).concat(legendaryArray);
	for (let index = 0; index < finalArray.length; index++) {
		const element = finalArray[index];
		element.style.display = '';
	}
}

function openNewWindow(str) {
    window.open('https://statsroyale.com/deckbuilder?'+str.substring(1));
}