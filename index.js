const airtable = require('airtable');
const base = airtable.base('appdf3U0OpANOvtQW');
const applicants = base('Applicants');

const all = applicants.select({view: 'All Applicants'});

all.firstPage((error, records) => {
  const name = records.map(record => {

    // console.log({record});
    return record.get('Name');
  });
});

applicants.create({
  "Onsite Interviewer": [
    "rec3haP3HdGZWHBR0"
  ],
  "Attachments": [
    {
      "url": "https://dl.airtable.com/xwv2ejXtTBqbTqjcnbQi_Chippypotato.jpg"
    },
    {
      "url": "https://dl.airtable.com/e6kCK3Z0SUS6hhCUoKcD_chippypotatoresume.docx"
    }
  ],
  "Onsite Interview Score": "2 - worth consideration",
  "Phone Screen Interviewer": [
    "reccncPYRbCSZABST"
  ],
  "Phone Screen Notes": "Questionable, but tentatively move to on-site interview",
  "Applying for": [
    "recOJ4ApiBIQSlPB8"
  ],
  "Email Address": "c.potato@example.com",
  "Phone Screen Score": "2 - worth consideration",
  "Onsite Interview Date": "2013-02-14",
  "Stage": "Decision Needed",
  "Onsite Interview Notes": "Seems like a really hard worker, and has a great attitude. Very observant: He's got eyes everywhere. But I am concerned that he won't be able to think...",
  "Phone": "(208) 555-0505",
  "Phone Screen Date": "2013-02-07",
  "Name": "Chippy the Potato"
}, function(err, record) {
  if (err) {
    console.error(err);
    return;
  }
  // console.log(record.getId());
  console.log(record.getId());
});