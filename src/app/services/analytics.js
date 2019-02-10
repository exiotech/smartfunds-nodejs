const { google } = require('googleapis');
const scopes = 'https://www.googleapis.com/auth/analytics.readonly';
const jwt = new google.auth.JWT(
  'analytics@exiotech.iam.gserviceaccount.com',
  null,
  '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDF7yH8qELMmiJe\nV+BmTqMiNbJhQiYIBN85cIIDaPzt7Zp6/iDzwqW50rhzAq7Ux5udEhSePomfNTQ1\nQadJ4MdGTR6Y++7S7vZbFMjZiACB5L15/DKct7pwwGyTTq3ltEqfpGgpZG90cQfu\nBIIdKxwrP4bB8hcQwdSUUiTM9Vsmw+KDRydyM3d6tro9jI/IqRqcPtbBAAssYOeU\nEHKCJmgmM7FTq1GAUTViyje6Eqksa6YM9pldMlk4oa86K+ZyXp6av4UBfwewC/wH\ngLX/t0T1yy2DG3xOyUlTtAclq8yr9nYgPsYwf5u/L0cAuQd/A9+YjzZOfmlFrnK7\nOSh2JXujAgMBAAECggEAT/YEoWiqH7TO2JUgmsP+5EWUC/Vonsm1EiPQ6ibCMy5P\nP4ulbUQ/phuqFxBI573BsEkLGkiCWVZpgnBE8DQF3PEvwLbaKs2NqYryfuqR5eet\n4fdPzP7uKzmZQ0NAPjFBClAlIj+oRP6aqP2aQMVXKmOOAZDW35amVcr/getGyRgX\n8O3qnDBYnvSwTm5uLQfdKfnjARS7GZu/7E6pmVWKlgHrgF6bQ5hg02RBzoj7Gyv7\nzwsv7/si0VgDbdjUvK5DdJS6LmyX0B8JkEB2D9MCr8RO40o+KCJKZ7MRUhbRYvca\n3uc5pUw6BFKfiR5yM0JxQzPq1aHpTODW1yxfmCrGVQKBgQDyFoEjMOszWY4g3uH7\nPOWmtbpC5njsEXVFQr4mPUeK/mXypFuZoTGni/akt2VkZRg5A3msj9WaPfF0xDRL\nZyyaPvaQfFenH+9t9/8WmcCOlx9Zknyyts69J3hN8D/zlI3PumkmFpJKmL53/Prm\nUPB7U+b3tl/3wwkDwDzr9PvtxQKBgQDRTw5lWm/8FJ1PX8pfNxf+mUOun5nJT5S8\nUCVU6JmJIO7/X+Q0LakxVcTwFaA7qe9kZu/oamB0xbPBSUmhMD+JyrHzBlaL8nRs\nTVxYKqCT9/HGNCZGQuiXXDtnePDXDGj3QKZyxXPHwiO09pBHin+f/URTheFVftrA\nusJ25G8CRwKBgDAHOvOKXv8/Ay2OSnMXr9AVObDQHKlpBUUKasMXYTw4IG21Id8m\n1b0RzYr8P4ddbyLQh7EukAgbxe2Oh3l2LKklWLFtmc40TcIZc2g+dK9VWAjjQQ4L\nqpRoYjvEMEvY6xGNQBMoYzmdeBxB+lz7Ldqp2KbIbd2vufgeiXeekOSpAoGASa7Z\n84YdzBD5u/qNxG0hrkgIEo4u1jaEtrJEIhrsCeElIZOBQ3kbibmW5anHSZmuI5s1\nM41XPWRnvlBtcigJBhnsARCnIQcOQx4MtyDyfISZgVvUaYGeXcJjSy7BIgNFZF1G\n+zpVYuoOJeNysSypdwnyprCHvdA1dAmK8c3C4nsCgYEAnzIHJemhD+FIzsqwGuIQ\nbjs1ZgtipeMtNOO+J3hkHo4R2RH9YCada2SSAK6RwE3Yq2rOANi3pysdSb8Iy/OJ\nXyatDcSXf5gQZ2YAtrnTOMlbKoV3hZIJVQzkt80mBpCx1zQ9PAnZolnGC6svi52o\ngIAnnqqkfz6mUZSapSXqg68=\n-----END PRIVATE KEY-----\n',
  scopes
);

export async function getAnalytics() {
  try {
    await jwt.authorize();
    const result = await google.analytics('v3').data.ga.get({
      auth: jwt,
      ids: 'ga:' + 188169717,
      'start-date': '1daysAgo',
      'end-date': 'today',
      metrics: 'ga:pageviews'
    });
    console.log(result.data.rows[0][0]); // This is traffic
  } catch (error) {
    throw error;
  }
}
