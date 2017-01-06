const cast = {
  characters: [
    {
      name: 'Jon Snow',
      shortCode: 'jon-snow',
      actor: 'Kit Harrington',
      house: {
        name: 'Stark',
        seat: 'Winterfell',
        words: 'Winter is coming',
        phone: 1234567890,
      },
      location: 'The Wall',
      bio: 'Lucas ipsum dolor sit amet ansionian hissa cracken moff rugor lama ors mohc tyranus nadd. Finis thistleborn halla tof max kenobi kel sarn priapulin. Quinlan boz tc-14 antilles droid cathar aurra sesswenna. Medon kir arcona greedo antilles crynyd boz. Lorth pellaeon jabiimas valorum tib yoda klaatu ugnaught cal. Karrde kendal kathol ventress antonio nar sunrider maris. Veers fortuna shado joelle plagueis breha kaminoan moff. Skywalker zabrak iridonian auril. Bimm chadra-fan warrick kir kast onimi.'
    },
    {
      name: 'Tyrion Lannister',
      shortCode: 'tyrion',
      actor: 'Peter Dinklage',
      house: {
        name: 'Lannister',
        seat: 'Casterly Rock',
        words: 'Hear me roar',
        phone: 1234567890,
        bio: 'Lucas ipsum dolor sit amet ansionian hissa cracken moff rugor lama ors mohc tyranus nadd. Finis thistleborn halla tof max kenobi kel sarn priapulin. Quinlan boz tc-14 antilles droid cathar aurra sesswenna. Medon kir arcona greedo antilles crynyd boz. Lorth pellaeon jabiimas valorum tib yoda klaatu ugnaught cal. Karrde kendal kathol ventress antonio nar sunrider maris. Veers fortuna shado joelle plagueis breha kaminoan moff. Skywalker zabrak iridonian auril. Bimm chadra-fan warrick kir kast onimi.'
      },
    },
    {
      name: 'Brienne of Tarth',
      shortCode: 'brienne',
      actor: 'Gwendoline Christie',
      house: {
        name: 'Tarth',
        seat: 'Evenfall Hall',
        words: 'In darkness we rise',
        phone: 1234567890,
      },
      location: undefined,
      bio: 'Lucas ipsum dolor sit amet ansionian hissa cracken moff rugor lama ors mohc tyranus nadd. Finis thistleborn halla tof max kenobi kel sarn priapulin. Quinlan boz tc-14 antilles droid cathar aurra sesswenna. Medon kir arcona greedo antilles crynyd boz. Lorth pellaeon jabiimas valorum tib yoda klaatu ugnaught cal. Karrde kendal kathol ventress antonio nar sunrider maris. Veers fortuna shado joelle plagueis breha kaminoan moff. Skywalker zabrak iridonian auril. Bimm chadra-fan warrick kir kast onimi.'
    },
    {
      name: 'Eddard Stark',
      shortCode: 'ned-stark',
      actor: 'Sean Bean',
      house: {
        name: 'Stark',
        seat: 'Winterfell',
        words: 'Winter is coming',
      },
      location: undefined,
      bio: 'Lucas ipsum dolor sit amet ansionian hissa cracken moff rugor lama ors mohc tyranus nadd. Finis thistleborn halla tof max kenobi kel sarn priapulin. Quinlan boz tc-14 antilles droid cathar aurra sesswenna. Medon kir arcona greedo antilles crynyd boz. Lorth pellaeon jabiimas valorum tib yoda klaatu ugnaught cal. Karrde kendal kathol ventress antonio nar sunrider maris. Veers fortuna shado joelle plagueis breha kaminoan moff. Skywalker zabrak iridonian auril. Bimm chadra-fan warrick kir kast onimi.'
    },
    {
      name: 'Sandor Clegane',
      shortCode: 'the-hound',
      actor: 'Rory McCann',
      house: {
        name: 'Clegane',
        seat: "Clegane's Keep",
        phone: 1234567890,
      },
      location: 'unknown',
      bio: 'Lucas ipsum dolor sit amet ansionian hissa cracken moff rugor lama ors mohc tyranus nadd. Finis thistleborn halla tof max kenobi kel sarn priapulin. Quinlan boz tc-14 antilles droid cathar aurra sesswenna. Medon kir arcona greedo antilles crynyd boz. Lorth pellaeon jabiimas valorum tib yoda klaatu ugnaught cal. Karrde kendal kathol ventress antonio nar sunrider maris. Veers fortuna shado joelle plagueis breha kaminoan moff. Skywalker zabrak iridonian auril. Bimm chadra-fan warrick kir kast onimi.'
    },
    {
      name: 'Daenerys Targaryen',
      shortCode: 'daenerys',
      actor: 'Emilia Clark',
      house: {
        name: 'Targaryen',
        seat: 'Dragonstone',
        words: 'Fire and blood',
        phone: 1234567890,
      },
      location: 'Mereen',
      bio: 'Lucas ipsum dolor sit amet ansionian hissa cracken moff rugor lama ors mohc tyranus nadd. Finis thistleborn halla tof max kenobi kel sarn priapulin. Quinlan boz tc-14 antilles droid cathar aurra sesswenna. Medon kir arcona greedo antilles crynyd boz. Lorth pellaeon jabiimas valorum tib yoda klaatu ugnaught cal. Karrde kendal kathol ventress antonio nar sunrider maris. Veers fortuna shado joelle plagueis breha kaminoan moff. Skywalker zabrak iridonian auril. Bimm chadra-fan warrick kir kast onimi.'
    },
    {
      name: 'King Joffrey Baratheon',
      shortCode: 'joffrey',
      actor: 'Jack Gleeson',
      house: {
        name: 'Baratheon',
        seat: 'The Red Keep',
        words: 'Ours is the fury',
        phone: 1234567890,
      },
      location: 'Mereen',
      bio: 'Lucas ipsum dolor sit amet ansionian hissa cracken moff rugor lama ors mohc tyranus nadd. Finis thistleborn halla tof max kenobi kel sarn priapulin. Quinlan boz tc-14 antilles droid cathar aurra sesswenna. Medon kir arcona greedo antilles crynyd boz. Lorth pellaeon jabiimas valorum tib yoda klaatu ugnaught cal. Karrde kendal kathol ventress antonio nar sunrider maris. Veers fortuna shado joelle plagueis breha kaminoan moff. Skywalker zabrak iridonian auril. Bimm chadra-fan warrick kir kast onimi.'
    },
  ],
};

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

Handlebars.registerHelper('formatName', (property1, property2) => new Handlebars.SafeString(`Hello my name is <strong>${property1}</strong> and I live at <strong>${property2}</strong>`));

Handlebars.registerHelper('formatPhoneNumber', (property) => {
  if (property) {
    const phone = property.toString();
    return `(${phone.substr(0, 3)}) ${phone.substr(3, 3)}-${phone.substr(6, 4)}`;
  }
});

Handlebars.registerHelper('makeUnderlined', function (options) {
  return new Handlebars.SafeString(`<u>${options.fn(this)}</u>`);
});

Handlebars.registerHelper('makeLowercase', function (options) {
  return options.fn(this).toLowerCase();
});

Handlebars.registerPartial('characterDetailsPartial', $('#character-details-partial').html());

$(document).ready(() => {
  const characterTemplate = $('#character-template').html();

  const compiledCharacterTemplate = Handlebars.compile(characterTemplate);

  var characterId = getParameterByName("id");
  console.log("character id: ", characterId);

  $(".character-list-container").on("click", ".view-details", function(e) {
    console.log("Button clicked");
  });

  if ($("body").hasClass("page-cast-details")){
    $('.character-list-container').html(compiledCharacterTemplate(cast.characters[characterId]));
  } else {
    $('.character-list-container').html(compiledCharacterTemplate(cast));
  }
});
