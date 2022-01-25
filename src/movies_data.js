const MOVIES_DATA = [
	{
		"id": 11,
		"tmdb_id": 240,
		"imdb_id": "tt0071562",
		"title": "Bố Già 2",
		"english_title": "The Godfather: Part II",
		"backdrop_path": "/ykY0slSctjGBqWhTJJYzIDOs9NY.jpg",
		"imdb": 9,
		"release_date": "1974-12-20",
		"runtime": 202,
		"genre_ids": [
			18,
			80
		],
		"hash": "6C9124FE9A99B2001FAD76A76152691BC515A80D",
		"updated": "2021-09-15T04:44:39.918+00:00"
	},
	{
		"id": 7,
		"tmdb_id": 429,
		"imdb_id": "tt0060196",
		"title": "Thiện, Ác, Tà",
		"english_title": "The Good, the Bad and the Ugly",
		"backdrop_path": "/3nDF7iOHUxjSV5GazK0cq1t9xUo.jpg",
		"imdb": 8.8,
		"release_date": "1966-12-23",
		"runtime": 161,
		"genre_ids": [
			37
		],
		"hash": "061E0F98A9D5C171D09CE5C1F11965032FFD1B82",
		"updated": "2021-09-15T06:40:09.298+00:00"
	},
	{
		"id": 15,
		"tmdb_id": 1891,
		"imdb_id": "tt0080684",
		"title": "Chiến Tranh Giữa Các Vì Sao 5: Đế Chế Phản Công",
		"english_title": "The Empire Strikes Back",
		"backdrop_path": "/6jycQtEorKgmcsi9AeYBrRxlpqu.jpg",
		"imdb": 8.7,
		"release_date": "1980-05-20",
		"runtime": 124,
		"genre_ids": [
			12,
			28,
			878
		],
		"hash": "898880149B304FEAA5FF6F6DE633AA4C5703DC1A",
		"updated": "2021-09-15T06:46:25.202+00:00"
	},
	{
		"id": 13,
		"tmdb_id": 11,
		"imdb_id": "tt0076759",
		"title": "Chiến Tranh Giữa Các Vì Sao 4: Niềm Hi Vọng Mới",
		"english_title": "Star Wars",
		"backdrop_path": "/jKquaxnCRelAbibZVMdTsUEnkKm.jpg",
		"imdb": 8.6,
		"release_date": "1977-05-25",
		"runtime": 121,
		"genre_ids": [
			12,
			28,
			878
		],
		"hash": "FE1E1069DE410FB44157F02B4F6655DDE99621C6",
		"updated": "2021-09-15T07:19:38.232+00:00"
	},
	{
		"id": 4,
		"tmdb_id": 346,
		"imdb_id": "tt0047478",
		"title": "Bảy Võ Sĩ Đạo",
		"english_title": "Seven Samurai",
		"backdrop_path": "/eTkfEJB5SpDPEl6uJZqC3wfwVPn.jpg",
		"imdb": 8.6,
		"release_date": "1954-04-26",
		"runtime": 207,
		"genre_ids": [
			28,
			18
		],
		"hash": "922D55B4329270676174C532BE039C6FC0D64BF4",
		"updated": "2021-09-15T08:00:02.945+00:00"
	},
	{
		"id": 6,
		"tmdb_id": 539,
		"imdb_id": "tt0054215",
		"title": "Tâm Thần Hoảng Loạn",
		"english_title": "Psycho",
		"backdrop_path": "/drIiIGBJUoBaNp69zDmoRvoLXQ1.jpg",
		"imdb": 8.5,
		"release_date": "1960-06-22",
		"runtime": 109,
		"genre_ids": [
			27,
			18,
			53
		],
		"hash": "3988CCC654983539544BA82D355AFF234C78DEC3",
		"updated": "2021-09-16T02:34:03.12+00:00"
	},
	{
		"id": 17,
		"tmdb_id": 1892,
		"imdb_id": "tt0086190",
		"title": "Chiến Tranh Giữa Các Vì Sao 6: Sự Trở Lại Của Jedi",
		"english_title": "Return of the Jedi",
		"backdrop_path": "/7cefR9o2H4dmHJOnfPpEILHCtgT.jpg",
		"imdb": 8.3,
		"release_date": "1983-05-25",
		"runtime": 135,
		"genre_ids": [
			12,
			28,
			878
		],
		"hash": "C92F656155D0D8E87D21471D7EA43E3AD0D42723",
		"updated": "2021-09-16T03:08:40.754+00:00"
	},
	{
		"id": 22,
		"tmdb_id": 12477,
		"imdb_id": "tt0095327",
		"title": "Mộ Đom Đóm",
		"english_title": "Grave of the Fireflies",
		"backdrop_path": "/k3oaaAOWfZbcQ9FN7gAJD2gsrPK.jpg",
		"imdb": 8.5,
		"release_date": "1988-04-16",
		"runtime": 89,
		"genre_ids": [
			16,
			18,
			10752
		],
		"hash": "B8AEFDBC4D06B2F69829F8A091A01D60E3A7886C",
		"updated": "2021-09-16T02:35:26.786+00:00"
	},
	{
		"id": 14,
		"tmdb_id": 694,
		"imdb_id": "tt0081505",
		"title": "Ngôi Nhà Ma",
		"english_title": "The Shining",
		"backdrop_path": "/alvhIoOxHO2axWdpcWvHz8UG0tQ.jpg",
		"imdb": 8.4,
		"release_date": "1980-05-23",
		"runtime": 144,
		"genre_ids": [
			27,
			53
		],
		"hash": "8C58874899B2BA718A1741266AB9FB198934D941",
		"updated": "2021-09-16T02:47:28.255+00:00"
	},
	{
		"id": 20,
		"tmdb_id": 600,
		"imdb_id": "tt0093058",
		"title": "Áo Giáp Sắt",
		"english_title": "Full Metal Jacket",
		"backdrop_path": "/lQvuJEeT8sA2jBNZCIOAI4ypYtQ.jpg",
		"imdb": 8.3,
		"release_date": "1987-06-26",
		"runtime": 117,
		"genre_ids": [
			18,
			10752
		],
		"hash": "7F7DC7D30AC3AE64832CBC73A895A06EA33E49B2",
		"updated": "2021-09-16T03:15:23.323+00:00"
	},
	{
		"id": 21,
		"tmdb_id": 562,
		"imdb_id": "tt0095016",
		"title": "Đương Đầu Thử Thách",
		"english_title": "Die Hard",
		"backdrop_path": "/lRMLnuqK4Fie9iMGB9Xkm068DA8.jpg",
		"imdb": 8.2,
		"release_date": "1988-07-15",
		"runtime": 131,
		"genre_ids": [
			28,
			53
		],
		"hash": "E3CF59CE8C293B43DCC5E6FA183D3D4DC4B60AC7",
		"updated": "2021-09-16T04:58:45.245+00:00"
	},
	{
		"id": 2,
		"tmdb_id": 705,
		"imdb_id": "tt0042192",
		"title": "Thời Quá Khứ",
		"english_title": "All About Eve",
		"backdrop_path": "/mHC6TUfKvVeh0mU6PKjn24ugNH1.jpg",
		"imdb": 8.2,
		"release_date": "1950-10-06",
		"runtime": 139,
		"genre_ids": [
			18
		],
		"hash": "979DD4160768C36228C50F76498C85335C2A56AD",
		"updated": "2021-09-16T04:57:41.696+00:00"
	},
	{
		"id": 23,
		"tmdb_id": 8392,
		"imdb_id": "tt0096283",
		"title": "Hàng Xóm Của Tôi Là Totoro",
		"english_title": "My Neighbor Totoro",
		"backdrop_path": "/faEI45AK7KlSeFI3ZQs4Iq3Ejjp.jpg",
		"imdb": 8.2,
		"release_date": "1988-04-16",
		"runtime": 86,
		"genre_ids": [
			14,
			16,
			10751
		],
		"hash": "446242D4A155FA5C37ACBEB5F6ECE08134F97984",
		"updated": "2021-09-16T05:02:06.922+00:00"
	},
	{
		"id": 9,
		"tmdb_id": 9552,
		"imdb_id": "tt0070047",
		"title": "Quỷ Ám",
		"english_title": "The Exorcist",
		"backdrop_path": "/AezAErI7zzGsgg9WHX7zp9zz8nU.jpg",
		"imdb": 8,
		"release_date": "1973-05-31",
		"runtime": 122,
		"genre_ids": [
			27
		],
		"hash": "7AD7730CCBBA999468B0C0649435FA1AC9899945",
		"updated": "2021-09-18T02:04:14.007+00:00"
	},
	{
		"id": 18,
		"tmdb_id": 218,
		"imdb_id": "tt0088247",
		"title": "Kẻ Hủy Diệt",
		"english_title": "The Terminator",
		"backdrop_path": "/lXCYLnSTYV2scEgc7KDDdcrqwps.jpg",
		"imdb": 8,
		"release_date": "1984-10-26",
		"runtime": 108,
		"genre_ids": [
			28,
			53,
			878
		],
		"hash": "02CD53257B68FAC90489850BE10691DF7C42E45A",
		"updated": "2021-09-18T02:04:47.788+00:00"
	},
	{
		"id": 19,
		"tmdb_id": 10515,
		"imdb_id": "tt0092067",
		"title": "Laputa: Lâu Đài Trên Không",
		"english_title": "Castle in the Sky",
		"backdrop_path": "/6ICcmfEYUwMO7iW2owcHDHdzLJG.jpg",
		"imdb": 8,
		"release_date": "1986-08-02",
		"runtime": 125,
		"genre_ids": [
			12,
			14,
			16,
			28,
			10751,
			10749
		],
		"hash": "f14d7a78287c6b7239caed973facb5c50881c705",
		"updated": "2021-09-18T02:10:56.372+00:00"
	},
	{
		"id": 10,
		"tmdb_id": 8327,
		"imdb_id": "tt0071615",
		"title": "Ngọn Núi Thiêng",
		"english_title": "The Holy Mountain",
		"backdrop_path": "/oUceCsSe255ZKXCMsHhqXM1xuUp.jpg",
		"imdb": 7.9,
		"release_date": "1973-11-29",
		"runtime": 114,
		"genre_ids": [
			18
		],
		"hash": "AD7BF06FA06B8EE659E1F4D674073900E120CF2D",
		"updated": "2021-09-18T06:23:13.013+00:00"
	},
	{
		"id": 24,
		"tmdb_id": 149,
		"imdb_id": "tt0094625",
		"title": "Chúa Tể Akira",
		"english_title": "Akira",
		"backdrop_path": "/unOyeGhqluYxtCnoi1aNzmbUZtE.jpg",
		"imdb": 8,
		"release_date": "1988-07-16",
		"runtime": 124,
		"genre_ids": [
			16,
			878,
			28
		],
		"hash": "e7c7f79870829281f89635cd9b20702a67a1effb",
		"updated": "2021-09-18T12:17:54.327+00:00"
	},
	{
		"id": 16,
		"tmdb_id": 8393,
		"imdb_id": "tt0080801",
		"title": "Đến Thượng Đế Cũng Phải Cười",
		"english_title": "The Gods Must Be Crazy",
		"backdrop_path": "/5zmLRBPpW7HV53oJJmwHqWUaBd3.jpg",
		"imdb": 7.3,
		"release_date": "1980-09-10",
		"runtime": 109,
		"genre_ids": [
			28,
			35
		],
		"hash": "50068D7AD892B86B4095EF9C628246E6756D9734",
		"updated": "2021-09-19T06:31:27.969+00:00"
	},
	{
		"id": 12,
		"tmdb_id": 4176,
		"imdb_id": "tt0071877",
		"title": "Murder on the Orient Express",
		"english_title": "Murder on the Orient Express",
		"backdrop_path": "/nVdUdUXyHII9mvZ3bf43RhhTLk0.jpg",
		"imdb": 7.3,
		"release_date": "1974-11-22",
		"runtime": 128,
		"genre_ids": [
			18,
			53,
			9648
		],
		"hash": "B01ACBD4B31806FE57E25514635FDDE93DC45664",
		"updated": "2021-09-19T08:38:36.146+00:00"
	},
	{
		"id": 1,
		"tmdb_id": 289,
		"imdb_id": "tt0034583",
		"title": "Casablanca",
		"english_title": "Casablanca",
		"backdrop_path": "/tfNuePdHrP9fp6K2VTJwHKKJf8C.jpg",
		"imdb": 8.5,
		"release_date": "1942-11-26",
		"runtime": 102,
		"genre_ids": [
			18,
			10749
		],
		"hash": "0E9B26DECC0144B41528C3E63F44E890087182FE",
		"updated": "2021-09-19T08:39:22.704+00:00"
	},
	{
		"id": 3,
		"tmdb_id": 548,
		"imdb_id": "tt0042876",
		"title": "Lã Sanh Môn",
		"english_title": "Rashomon",
		"backdrop_path": "/wTOA4z7VytZk1c9HuB0rTFL3tB7.jpg",
		"imdb": 8.2,
		"release_date": "1950-08-26",
		"runtime": 88,
		"genre_ids": [
			80,
			18,
			9648
		],
		"hash": "9D1932C161E00E985B705B6870FA8799BE9C2F39",
		"updated": "2021-09-19T10:14:30.816+00:00"
	},
	{
		"id": 5,
		"tmdb_id": 37257,
		"imdb_id": "tt0051201",
		"title": "Nhân Chứng Buộc Tội",
		"english_title": "Witness for the Prosecution",
		"backdrop_path": "/AetjwIIITWQ5ueKKk9LQNaOFwVa.jpg",
		"imdb": 8.4,
		"release_date": "1957-12-17",
		"runtime": 116,
		"genre_ids": [
			18,
			9648,
			80
		],
		"hash": "D3DFE3DE121AB7C14D1A872AA0539A24426958FC",
		"updated": "2021-09-19T11:07:00.747+00:00"
	},
	{
		"id": 41,
		"tmdb_id": 680,
		"imdb_id": "tt0110912",
		"title": "Chuyện Tào Lao",
		"english_title": "Pulp Fiction",
		"backdrop_path": "/jlVOS4D6ledQGxGdL0EIte3TXfL.jpg",
		"imdb": 8.9,
		"release_date": "1994-09-10",
		"runtime": 154,
		"genre_ids": [
			53,
			80
		],
		"hash": "3F8F219568B8B229581DDDD7BC5A5E889E906A9B",
		"updated": "2021-09-15T04:56:38.186+00:00"
	},
	{
		"id": 45,
		"tmdb_id": 13,
		"imdb_id": "tt0109830",
		"title": "Cuộc Đời Forrest Gump",
		"english_title": "Forrest Gump",
		"backdrop_path": "/bH2WXkBWQGcE7XhosCrBBg8dZIH.jpg",
		"imdb": 8.8,
		"release_date": "1994-07-06",
		"runtime": 142,
		"genre_ids": [
			35,
			18,
			10749
		],
		"hash": "FEE625A78CB2057CE7845AA66E95F60D43EA8AB0",
		"updated": "2021-09-15T06:41:04.539+00:00"
	},
	{
		"id": 37,
		"tmdb_id": 14002,
		"imdb_id": "tt0103767",
		"title": "Vô Ngã",
		"english_title": "Baraka",
		"backdrop_path": "/5Vx66ROxrsVrNRa8lXJsMybqCT7.jpg",
		"imdb": 8.6,
		"release_date": "1992-09-15",
		"runtime": 98,
		"genre_ids": [
			99
		],
		"hash": "F72CBCAA426AFBCAC7F0F1DBB9639ABBDE3B42C7",
		"updated": "2021-09-16T02:28:00.552+00:00"
	},
	{
		"id": 30,
		"tmdb_id": 769,
		"imdb_id": "tt0099685",
		"title": "Chiến Hữu",
		"english_title": "GoodFellas",
		"backdrop_path": "/fMNcDxgDp5koMgnrUym5VvVOBJm.jpg",
		"imdb": 8.7,
		"release_date": "1990-09-12",
		"runtime": 145,
		"genre_ids": [
			18,
			80
		],
		"hash": "B17364CA86A982B54DF38B25B978E1D074605C29",
		"updated": "2021-09-15T06:48:19.761+00:00"
	},
	{
		"id": 49,
		"tmdb_id": 807,
		"imdb_id": "tt0114369",
		"title": "Se7en",
		"english_title": "Se7en",
		"backdrop_path": "/mEbyFTKcWsrFqWBKROzq0Uxoqas.jpg",
		"imdb": 8.6,
		"release_date": "1995-09-22",
		"runtime": 127,
		"genre_ids": [
			80,
			9648,
			53
		],
		"hash": "C62DB96F2940FFFC47A76C82C88857A68E27A235",
		"updated": "2021-09-16T02:28:34.761+00:00"
	},
	{
		"id": 33,
		"tmdb_id": 280,
		"imdb_id": "tt0103064",
		"title": "Kẻ Hủy Diệt 2: Ngày Phán Xét",
		"english_title": "Terminator 2: Judgment Day",
		"backdrop_path": "/3ZL3snY2sTuallI13beRcudxfgG.jpg",
		"imdb": 8.5,
		"release_date": "1991-07-03",
		"runtime": 137,
		"genre_ids": [
			28,
			53,
			878
		],
		"hash": "9097908B2FA628463E730889B0868D416B82848F",
		"updated": "2021-09-16T02:39:28.777+00:00"
	},
	{
		"id": 42,
		"tmdb_id": 101,
		"imdb_id": "tt0110413",
		"title": "Sát Thủ Chuyên Nghiệp",
		"english_title": "Léon: The Professional",
		"backdrop_path": "/xkDzy2yraGCPIuShhDX9wtvnwmk.jpg",
		"imdb": 8.5,
		"release_date": "1994-09-14",
		"runtime": 111,
		"genre_ids": [
			80,
			18,
			28
		],
		"hash": "F4DD3DD606CF31CE79BE33311C6B8AB7B7C7DC2F",
		"updated": "2021-09-16T02:50:48.1+00:00"
	},
	{
		"id": 35,
		"tmdb_id": 33,
		"imdb_id": "tt0105695",
		"title": "Không Tha Thứ",
		"english_title": "Unforgiven",
		"backdrop_path": "/EVEYOSPmnvPY2AbQsqHL8Crd58.jpg",
		"imdb": 8.2,
		"release_date": "1992-08-07",
		"runtime": 130,
		"genre_ids": [
			37
		],
		"hash": "82529944B6EBE1C74D70D39C451A5BFB65071334",
		"updated": "2021-09-16T05:04:29.415+00:00"
	},
	{
		"id": 48,
		"tmdb_id": 949,
		"imdb_id": "tt0113277",
		"title": "Heat",
		"english_title": "Heat",
		"backdrop_path": "/3t0VewKmUbWXOG64LF9qdPSQzyR.jpg",
		"imdb": 8.2,
		"release_date": "1995-12-15",
		"runtime": 170,
		"genre_ids": [
			28,
			80,
			18,
			53
		],
		"hash": "447F32A80B66A52F044E4BB953357A334BED399A",
		"updated": "2021-09-16T05:45:05.234+00:00"
	},
	{
		"id": 44,
		"tmdb_id": 11104,
		"imdb_id": "tt0109424",
		"title": "Trùng Khánh Sâm Lâm",
		"english_title": "Chungking Express",
		"backdrop_path": "/eDyZv6tfA0LnE1B2KDT2KQ7ZA33.jpg",
		"imdb": 8.1,
		"release_date": "1994-07-14",
		"runtime": 103,
		"genre_ids": [
			18,
			35,
			10749
		],
		"hash": "676EFBE499B9BA680B79B9D978556A6F5DEDE2B3",
		"updated": "2021-09-16T06:43:46.46+00:00"
	},
	{
		"id": 26,
		"tmdb_id": 242,
		"imdb_id": "tt0099674",
		"title": "Bố Già 3",
		"english_title": "The Godfather: Part III",
		"backdrop_path": "/ie9qAZyMNwqqzcswd3OjsH1b4oq.jpg",
		"imdb": 7.6,
		"release_date": "1990-12-25",
		"runtime": 170,
		"genre_ids": [
			80,
			18,
			53
		],
		"hash": "CF892F58B4AD7589CB052F659FB3D8021EA49491",
		"updated": "2021-09-18T13:03:48.267+00:00"
	},
	{
		"id": 29,
		"tmdb_id": 1573,
		"imdb_id": "tt0099423",
		"title": "Đương Đầu Thử Thách 2: Khó Chết Hơn",
		"english_title": "Die Hard 2",
		"backdrop_path": "/izKH8BBHf3vn3ChpcCzMj3LnCzU.jpg",
		"imdb": 7.2,
		"release_date": "1990-07-02",
		"runtime": 124,
		"genre_ids": [
			28,
			53
		],
		"hash": "446BD563A35D6C63BDA7CFE446B7C8E1CF20710C",
		"updated": "2021-09-18T13:19:43.285+00:00"
	},
	{
		"id": 36,
		"tmdb_id": 772,
		"imdb_id": "tt0104431",
		"title": "Ở nhà một mình 2: Lạc ở New York",
		"english_title": "Home Alone 2: Lost in New York",
		"backdrop_path": "/iESyURsab1iptGORtWyBTVzFR9m.jpg",
		"imdb": 6.8,
		"release_date": "1992-11-19",
		"runtime": 120,
		"genre_ids": [
			35,
			10751,
			12
		],
		"hash": "3E96F357B98A8B78DAFC8B6E6D07091DDCFDD064",
		"updated": "2021-12-05T06:33:16.33+00:00"
	},
	{
		"id": 25,
		"tmdb_id": 11937,
		"imdb_id": "tt0097443",
		"title": "Đến Thượng Đế Cũng Phải Cười 2",
		"english_title": "The Gods Must Be Crazy II",
		"backdrop_path": "/6qh5nbmZdzXdOO7Lcx3cOGDFacB.jpg",
		"imdb": 6.9,
		"release_date": "1989-07-01",
		"runtime": 98,
		"genre_ids": [
			28,
			35
		],
		"hash": "ba54b5b2108e2ba0796f40af443a7463035b1169",
		"updated": "2021-09-19T06:31:39.637+00:00"
	},
	{
		"id": 530,
		"tmdb_id": 172803,
		"imdb_id": "tt2094018",
		"title": "Hours",
		"english_title": "Hours",
		"backdrop_path": "/usNjEiPrSu8EBMDITJihCLwEzkR.jpg",
		"imdb": 6.4,
		"release_date": "2013-11-29",
		"runtime": 97,
		"genre_ids": [
			18,
			53
		],
		"hash": "D32A7A9831ED0EDCDAAF5DB5CC1FBC3657C2DC32",
		"updated": "2021-09-19T08:06:59.971+00:00"
	},
	{
		"id": 40,
		"tmdb_id": 8467,
		"imdb_id": "tt0109686",
		"title": "Siêu Ngốc Gặp Nhau",
		"english_title": "Dumb and Dumber",
		"backdrop_path": "/mhshydOcGBid04GrsxiZ10gGDHQ.jpg",
		"imdb": 7.3,
		"release_date": "1994-12-16",
		"runtime": 107,
		"genre_ids": [
			35
		],
		"hash": "61DBB3B408D3B93555A5B96C348491081FBB0A2C",
		"updated": "2021-09-19T08:17:09.362+00:00"
	},
	{
		"id": 34,
		"tmdb_id": 11621,
		"imdb_id": "tt0104652",
		"title": "Chú Heo Màu Đỏ",
		"english_title": "Porco Rosso",
		"backdrop_path": "/cnovF5Jw6g7PrsOsz7vHcjtkUtM.jpg",
		"imdb": 7.7,
		"release_date": "1992-07-18",
		"runtime": 94,
		"genre_ids": [
			10751,
			35,
			16,
			12
		],
		"hash": "72b0d241a681ee60e6073f261e10367206ab2ab7",
		"updated": "2021-09-19T08:33:33.815+00:00"
	},
	{
		"id": 28,
		"tmdb_id": 9362,
		"imdb_id": "tt0100814",
		"title": "Sâu Đất Khổng Lồ",
		"english_title": "Tremors",
		"backdrop_path": "/fH4uKJ8WGUy8e2phLynTlYBHDp.jpg",
		"imdb": 7.1,
		"release_date": "1990-01-19",
		"runtime": 96,
		"genre_ids": [
			27,
			35,
			28,
			12,
			14
		],
		"hash": "4FC917FFD092801AFF50FE1E568ED7D0504E336C",
		"updated": "2021-09-19T08:35:43.598+00:00"
	},
	{
		"id": 47,
		"tmdb_id": 854,
		"imdb_id": "tt0110475",
		"title": "Mặt Nạ Xanh",
		"english_title": "The Mask",
		"backdrop_path": "/qRgGdvEDOTqNZMzPGXaduGrkwms.jpg",
		"imdb": 6.9,
		"release_date": "1994-07-29",
		"runtime": 101,
		"genre_ids": [
			10749,
			35,
			80,
			14
		],
		"hash": "55F44A7544F6984C1CB4EA84FB2D01DD89B727CF",
		"updated": "2021-09-19T08:36:48.006+00:00"
	},
	{
		"id": 39,
		"tmdb_id": 788,
		"imdb_id": "tt0107614",
		"title": "Bảo Mẫu Giả Danh",
		"english_title": "Mrs. Doubtfire",
		"backdrop_path": "/2aBtGUr6sH2IGaGJZFl3fwaSfnH.jpg",
		"imdb": 7,
		"release_date": "1993-11-24",
		"runtime": 125,
		"genre_ids": [
			35,
			18,
			10751
		],
		"hash": "75E6B3CAFCD27BC29574FE5466041DC4E07B99EE",
		"updated": "2021-09-19T10:14:53.754+00:00"
	},
	{
		"id": 46,
		"tmdb_id": 1637,
		"imdb_id": "tt0111257",
		"title": "Tốc Độ",
		"english_title": "Speed",
		"backdrop_path": "/inqJPcRLBhQbkMsLhvZOtkMuMZ2.jpg",
		"imdb": 7.2,
		"release_date": "1994-06-09",
		"runtime": 116,
		"genre_ids": [
			28,
			12,
			80
		],
		"hash": "3B7486C8DE31E790F9899DA04437A55826D33D68",
		"updated": "2021-10-29T04:03:12.128+00:00"
	},
	{
		"id": 31,
		"tmdb_id": 15080,
		"imdb_id": "tt0102587",
		"title": "Chỉ Còn Ngày Hôm Qua",
		"english_title": "Only Yesterday",
		"backdrop_path": "/jeVmGgpqtsrFqHDS9yqAfil3zJz.jpg",
		"imdb": 7.6,
		"release_date": "1991-07-20",
		"runtime": 118,
		"genre_ids": [
			16,
			18,
			10749
		],
		"hash": "443828FEE067EAEB2C259C46567D8DB802612AA3",
		"updated": "2021-09-19T17:37:40.476+00:00"
	},
	{
		"id": 27,
		"tmdb_id": 771,
		"imdb_id": "tt0099785",
		"title": "Ở Nhà Một Mình",
		"english_title": "Home Alone",
		"backdrop_path": "/rRNsAIYiJdQHULseGsV9fQSOTDc.jpg",
		"imdb": 7.6,
		"release_date": "1990-11-16",
		"runtime": 103,
		"genre_ids": [
			35,
			10751
		],
		"hash": "5FEFAC61C0F42FFC43946B3379A540D1A38F6480",
		"updated": "2021-12-05T06:32:45.973+00:00"
	},
	{
		"id": 72,
		"tmdb_id": 857,
		"imdb_id": "tt0120815",
		"title": "Giải Cứu Binh Nhì Ryan",
		"english_title": "Saving Private Ryan",
		"backdrop_path": "/ctNjGbgpSU4MyFWTWBuo4oP2PYP.jpg",
		"imdb": 8.6,
		"release_date": "1998-07-24",
		"runtime": 169,
		"genre_ids": [
			18,
			36,
			10752
		],
		"hash": "67D62505CB3C11C1506C3378FFC64DFA438EA8BA",
		"updated": "2021-09-16T02:29:22.681+00:00"
	},
	{
		"id": 64,
		"tmdb_id": 128,
		"imdb_id": "tt0119698",
		"title": "Công Chúa Sói Mononoke",
		"english_title": "Princess Mononoke",
		"backdrop_path": "/9EXOVRt9j6Fy7RqhgU3CLtWkXPL.jpg",
		"imdb": 8.4,
		"release_date": "1997-07-12",
		"runtime": 134,
		"genre_ids": [
			12,
			14,
			16
		],
		"hash": "640A456000004C505A4848D66803A34B71AE002F",
		"updated": "2021-09-16T02:49:37.235+00:00"
	},
	{
		"id": 70,
		"tmdb_id": 489,
		"imdb_id": "tt0119217",
		"title": "Chàng Will Tốt Bụng",
		"english_title": "Good Will Hunting",
		"backdrop_path": "/wAqhVHeYLQANf9qs7IVleaLbXzw.jpg",
		"imdb": 8.3,
		"release_date": "1997-12-05",
		"runtime": 127,
		"genre_ids": [
			18
		],
		"hash": "7C0B027DADF7C3B7868D601D3ED5B3CFB3830991",
		"updated": "2021-09-16T03:16:45.8+00:00"
	},
	{
		"id": 51,
		"tmdb_id": 862,
		"imdb_id": "tt0114709",
		"title": "Câu Chuyện Đồ Chơi",
		"english_title": "Toy Story",
		"backdrop_path": "/39QpDXKtzVP4gkGxZIkjJNkOTWr.jpg",
		"imdb": 8.3,
		"release_date": "1995-10-30",
		"runtime": 81,
		"genre_ids": [
			16,
			12,
			10751,
			35
		],
		"hash": "AEE2BCB4DA9A5650941C64B127F491683C273D86",
		"updated": "2021-09-16T04:23:12.043+00:00"
	},
	{
		"id": 52,
		"tmdb_id": 524,
		"imdb_id": "tt0112641",
		"title": "Sòng Bạc",
		"english_title": "Casino",
		"backdrop_path": "/nm35PSEBXp3GGARcrkmw5QuZUU3.jpg",
		"imdb": 8.2,
		"release_date": "1995-11-22",
		"runtime": 179,
		"genre_ids": [
			80,
			18
		],
		"hash": "62400CBBC2DD7E1ECC46CBCA2742E729A0917909",
		"updated": "2021-09-16T06:10:30.626+00:00"
	},
	{
		"id": 66,
		"tmdb_id": 2118,
		"imdb_id": "tt0119488",
		"title": "Bí mật Los Angeles",
		"english_title": "L.A. Confidential",
		"backdrop_path": "/vCVqvzLJ79vx2r3YzkCQNRtLm0D.jpg",
		"imdb": 8.2,
		"release_date": "1997-09-19",
		"runtime": 138,
		"genre_ids": [
			80,
			53
		],
		"hash": "64EA68E34382ED3170EE3C95DAE928FDAF793E8B",
		"updated": "2021-09-16T06:15:24.387+00:00"
	},
	{
		"id": 54,
		"tmdb_id": 76,
		"imdb_id": "tt0112471",
		"title": "Trước Lúc Bình Minh",
		"english_title": "Before Sunrise",
		"backdrop_path": "/duYS5DRB08lZuQLDDIdiDP5IqzY.jpg",
		"imdb": 8.1,
		"release_date": "1995-01-27",
		"runtime": 101,
		"genre_ids": [
			18,
			10749
		],
		"hash": "067DB603543E51450A2B62D42CFA367BCEFFB413",
		"updated": "2021-09-16T06:52:35.406+00:00"
	},
	{
		"id": 57,
		"tmdb_id": 275,
		"imdb_id": "tt0116282",
		"title": "Đi Quá Xa",
		"english_title": "Fargo",
		"backdrop_path": "/kHHfUmhkJUouqDPd27qcpBdSewC.jpg",
		"imdb": 8.1,
		"release_date": "1996-03-08",
		"runtime": 98,
		"genre_ids": [
			80,
			18,
			53
		],
		"hash": "01D9D1B96EFF15FB5439330B02215C6C27F4153D",
		"updated": "2021-09-16T06:53:45.575+00:00"
	},
	{
		"id": 62,
		"tmdb_id": 10494,
		"imdb_id": "tt0156887",
		"title": "Màu Xanh Ảo Giác",
		"english_title": "Perfect Blue",
		"backdrop_path": "/mHG7dpLb0ZScSY3LpP443IHRmjy.jpg",
		"imdb": 8,
		"release_date": "1997-07-25",
		"runtime": 81,
		"genre_ids": [
			16,
			53
		],
		"hash": "db658483e705707122d2bf865e4ac3b677227afb",
		"updated": "2021-09-18T02:12:05.083+00:00"
	},
	{
		"id": 65,
		"tmdb_id": 597,
		"imdb_id": "tt0120338",
		"title": "Titanic",
		"english_title": "Titanic",
		"backdrop_path": "/4PexhdMvJMZdembIOoMRTKIq6jw.jpg",
		"imdb": 7.8,
		"release_date": "1997-11-18",
		"runtime": 194,
		"genre_ids": [
			18,
			10749
		],
		"hash": "98CD5D90252265F1C59AB47330FF4C39F48CCC78",
		"updated": "2021-09-18T12:33:03.608+00:00"
	},
	{
		"id": 67,
		"tmdb_id": 2649,
		"imdb_id": "tt0119174",
		"title": "Trò Chơi Cân Não",
		"english_title": "The Game",
		"backdrop_path": "/dsjP98yfjEsYLKpXLKrfW11V8Xd.jpg",
		"imdb": 7.8,
		"release_date": "1997-09-12",
		"runtime": 129,
		"genre_ids": [
			18,
			53,
			9648
		],
		"hash": "A659F9AA06DC7ECDF756476CA12A5AE0993A9790",
		"updated": "2021-09-18T12:34:24.358+00:00"
	},
	{
		"id": 53,
		"tmdb_id": 1572,
		"imdb_id": "tt0112864",
		"title": "Đương Đầu Thử Thách 3: Báo Thù",
		"english_title": "Die Hard: With a Vengeance",
		"backdrop_path": "/szKKX89ptwXbUr6jFUbTsbXxCAh.jpg",
		"imdb": 7.6,
		"release_date": "1995-05-19",
		"runtime": 128,
		"genre_ids": [
			28,
			53
		],
		"hash": "F0C6405A7D090FDF7898522B097AF2FA41AE2C75",
		"updated": "2021-09-18T13:20:04.117+00:00"
	},
	{
		"id": 61,
		"tmdb_id": 607,
		"imdb_id": "tt0119654",
		"title": "Đặc Vụ Áo Đen",
		"english_title": "Men in Black",
		"backdrop_path": "/lbwl7WqyBxYmfYZN7Kxi35Lh7rA.jpg",
		"imdb": 7.3,
		"release_date": "1997-07-02",
		"runtime": 98,
		"genre_ids": [
			28,
			12,
			35,
			878
		],
		"hash": "CF15DDBC998606A8969B4A0CC7A7D796811E9181",
		"updated": "2021-09-19T04:54:03.666+00:00"
	},
	{
		"id": 68,
		"tmdb_id": 1813,
		"imdb_id": "tt0118971",
		"title": "Luật Sư Của Quỷ",
		"english_title": "The Devil's Advocate",
		"backdrop_path": "/AtnrdeG0zHnuuZzfcmckscsRDWl.jpg",
		"imdb": 7.5,
		"release_date": "1997-10-17",
		"runtime": 144,
		"genre_ids": [
			18,
			9648,
			53,
			27
		],
		"hash": "9BBF590A12BC2AC8FD087A8A0BD9CA3D79335E31",
		"updated": "2021-09-19T08:03:50.85+00:00"
	},
	{
		"id": 73,
		"tmdb_id": 846,
		"imdb_id": "tt0120902",
		"title": "Hồ Sơ Tuyệt Mật",
		"english_title": "The X Files",
		"backdrop_path": "/4NHfrIXOunjNPF3YZqr9grc0Bul.jpg",
		"imdb": 7.1,
		"release_date": "1998-06-19",
		"runtime": 121,
		"genre_ids": [
			9648,
			878,
			53
		],
		"hash": "DDC6D5502661DF9459C7FAF4FCEB5784E2475DD5",
		"updated": "2021-09-19T08:17:24.482+00:00"
	},
	{
		"id": 69,
		"tmdb_id": 754,
		"imdb_id": "tt0119094",
		"title": "Lật Mặt",
		"english_title": "Face/Off",
		"backdrop_path": "/to9mG1qnu9gtsJNgyiD3DqHcfva.jpg",
		"imdb": 7.2,
		"release_date": "1997-06-27",
		"runtime": 138,
		"genre_ids": [
			28,
			80,
			878,
			53
		],
		"hash": "493C3E6E501412EE71F02981C4C3061B84BB73C6",
		"updated": "2021-09-19T08:27:26.187+00:00"
	},
	{
		"id": 63,
		"tmdb_id": 431,
		"imdb_id": "tt0123755",
		"title": "Mê Cung Lập Phương",
		"english_title": "Cube",
		"backdrop_path": "/ukHDNMfkEs65v7uPsbzJoz5IBu0.jpg",
		"imdb": 7.2,
		"release_date": "1997-09-09",
		"runtime": 90,
		"genre_ids": [
			53,
			878,
			9648
		],
		"hash": "35C77F48B409C8EF9034BFFC867EE83724077D8C",
		"updated": "2021-09-19T08:28:12.407+00:00"
	},
	{
		"id": 55,
		"tmdb_id": 11069,
		"imdb_id": "tt0114720",
		"title": "Tremors 2: Aftershocks",
		"english_title": "Tremors 2: Aftershocks",
		"backdrop_path": "/A7uGwsUo8AubejbzI0WzaumqkuM.jpg",
		"imdb": 6,
		"release_date": "1996-04-09",
		"runtime": 100,
		"genre_ids": [
			28,
			27,
			35,
			878,
			53
		],
		"hash": "5014FED61B91C8ABFAEEACB1A5D0ED16D0E9AAEA",
		"updated": "2021-09-19T08:35:57.328+00:00"
	},
	{
		"id": 74,
		"tmdb_id": 37165,
		"imdb_id": "tt0120382",
		"title": "Buổi Diễn Của Truman",
		"english_title": "The Truman Show",
		"backdrop_path": "/vrGmUREN6kQKub7RxNrREq96yAw.jpg",
		"imdb": 8.1,
		"release_date": "1998-06-04",
		"runtime": 103,
		"genre_ids": [
			35,
			18
		],
		"hash": "8949ECE93D7BB1112353E98D34CCE23996ADF2A7",
		"updated": "2021-10-21T01:58:01.723+00:00"
	},
	{
		"id": 56,
		"tmdb_id": 9802,
		"imdb_id": "tt0117500",
		"title": "The Rock",
		"english_title": "The Rock",
		"backdrop_path": "/l3MIr8uUwcWO71t7ZEuFNuOsXP3.jpg",
		"imdb": 7.4,
		"release_date": "1996-06-07",
		"runtime": 137,
		"genre_ids": [
			28,
			12,
			53
		],
		"hash": "98F0EF7E41A5E67B72CF7AB060A3906D4626C6BE",
		"updated": "2021-09-19T10:11:51.869+00:00"
	},
	{
		"id": 60,
		"tmdb_id": 1701,
		"imdb_id": "tt0118880",
		"title": "Không Tặc",
		"english_title": "Con Air",
		"backdrop_path": "/pu4Ml9nKEQa4CPIIN3jFPwrhnkS.jpg",
		"imdb": 6.9,
		"release_date": "1997-06-05",
		"runtime": 116,
		"genre_ids": [
			28,
			53,
			80
		],
		"hash": "80C007B0B381318719D07E815F3FCBCC8E73674F",
		"updated": "2021-09-19T10:12:03.583+00:00"
	},
	{
		"id": 58,
		"tmdb_id": 454,
		"imdb_id": "tt0117509",
		"title": "Romeo và Juliet",
		"english_title": "Romeo + Juliet",
		"backdrop_path": "/vyDBLP7xw0VrDncSVKaDiyV5TI9.jpg",
		"imdb": 6.7,
		"release_date": "1996-11-01",
		"runtime": 120,
		"genre_ids": [
			18,
			10749
		],
		"hash": "EAF7EA4BC5FF56B16C44206E93086F3F3153A9EB",
		"updated": "2021-09-19T11:04:28.704+00:00"
	},
	{
		"id": 71,
		"tmdb_id": 8741,
		"imdb_id": "tt0120863",
		"title": "Lằn Ranh Đỏ Mỏng Manh",
		"english_title": "The Thin Red Line",
		"backdrop_path": "/aOTOP3dprB3yRzRmEFzjzOoZ0DA.jpg",
		"imdb": 7.6,
		"release_date": "1998-03-05",
		"runtime": 171,
		"genre_ids": [
			18,
			36,
			10752
		],
		"hash": "960DC73149FA3775053D41181733F98ED5BA2A89",
		"updated": "2021-09-28T03:12:38.201+00:00"
	},
	{
		"id": 1089,
		"tmdb_id": 635731,
		"imdb_id": "tt11003218",
		"title": "Pig",
		"english_title": "Pig",
		"backdrop_path": "/i0VRz4I5D3CLN4VHoZg0F1mw9iy.jpg",
		"imdb": 7,
		"release_date": "2021-07-16",
		"runtime": 91,
		"genre_ids": [
			18,
			53
		],
		"hash": "ED6FA33E791A0C5E51827311D91BB4A62C1E2AF8",
		"updated": "2021-09-15T03:16:50.011+00:00"
	},
	{
		"id": 80,
		"tmdb_id": 497,
		"imdb_id": "tt0120689",
		"title": "Dặm Xanh",
		"english_title": "The Green Mile",
		"backdrop_path": "/sttQu7SgRZLOaasiwtAbfCgjUff.jpg",
		"imdb": 8.6,
		"release_date": "1999-12-10",
		"runtime": 189,
		"genre_ids": [
			14,
			18,
			80
		],
		"hash": "58C5933784BE4ABC8C357E670E2251B1FA562B56",
		"updated": "2021-09-16T02:30:01.502+00:00"
	},
	{
		"id": 85,
		"tmdb_id": 14,
		"imdb_id": "tt0169547",
		"title": "Vẻ Đẹp Mỹ",
		"english_title": "American Beauty",
		"backdrop_path": "/yKU6MtyiXqoE7mockHfvoLknYaa.jpg",
		"imdb": 8.3,
		"release_date": "1999-09-15",
		"runtime": 122,
		"genre_ids": [
			18
		],
		"hash": "783FE3217B56242360448767CCD3967D209556B3",
		"updated": "2021-09-16T04:23:58.143+00:00"
	},
	{
		"id": 90,
		"tmdb_id": 107,
		"imdb_id": "tt0208092",
		"title": "Tên Trộm Nữ Trang",
		"english_title": "Snatch",
		"backdrop_path": "/zky54sJji2fFfP9wihhxi4IPwgB.jpg",
		"imdb": 8.3,
		"release_date": "2000-09-01",
		"runtime": 104,
		"genre_ids": [
			80,
			35
		],
		"hash": "723FA4FD2EDCF499B5211E17940811260AFEBEEC",
		"updated": "2021-09-16T04:24:33.41+00:00"
	},
	{
		"id": 94,
		"tmdb_id": 641,
		"imdb_id": "tt0180093",
		"title": "Lời Nguyện Cầu Cho Một Giấc Mơ",
		"english_title": "Requiem for a Dream",
		"backdrop_path": "/qAvnoeYrPhhCO42NuEAYMOM1oOl.jpg",
		"imdb": 8.3,
		"release_date": "2000-10-06",
		"runtime": 102,
		"genre_ids": [
			80,
			18,
			53
		],
		"hash": "F046CB9FB44F3EB6638EAB08BDE708E445A20243",
		"updated": "2021-09-16T04:25:44.79+00:00"
	},
	{
		"id": 77,
		"tmdb_id": 10220,
		"imdb_id": "tt0128442",
		"title": "Chơi Bài",
		"english_title": "Rounders",
		"backdrop_path": "/e7iWYqFBeW1bUmJp962D12ma6rJ.jpg",
		"imdb": 7.3,
		"release_date": "1998-09-11",
		"runtime": 121,
		"genre_ids": [
			18,
			80
		],
		"hash": "456E00E6C8B3538E6F9F3BCD133145A8E022191A",
		"updated": "2021-10-29T04:03:00.897+00:00"
	},
	{
		"id": 92,
		"tmdb_id": 843,
		"imdb_id": "tt0118694",
		"title": "Tâm Trạng Khi Yêu",
		"english_title": "In the Mood for Love",
		"backdrop_path": "/5tDKZIxVrJ0cKeoTgJCgRXKIKZP.jpg",
		"imdb": 8.1,
		"release_date": "2000-09-29",
		"runtime": 99,
		"genre_ids": [
			18,
			10749
		],
		"hash": "04C7AAD36D10827922C22ABB37159E4578002381",
		"updated": "2021-09-16T06:55:47.587+00:00"
	},
	{
		"id": 83,
		"tmdb_id": 863,
		"imdb_id": "tt0120363",
		"title": "Câu Chuyện Đồ Chơi 2",
		"english_title": "Toy Story 2",
		"backdrop_path": "/1dvOCqKgBcXvfqzVPmAAM5Rv4PP.jpg",
		"imdb": 7.9,
		"release_date": "1999-10-30",
		"runtime": 92,
		"genre_ids": [
			16,
			35,
			10751
		],
		"hash": "43054FC0FA7F530D0B6575E6FF8C2239ADEDB09A",
		"updated": "2021-09-18T06:24:46.696+00:00"
	},
	{
		"id": 89,
		"tmdb_id": 146,
		"imdb_id": "tt0190332",
		"title": "Ngọa Hổ Tàng Long",
		"english_title": "Crouching Tiger, Hidden Dragon",
		"backdrop_path": "/mYJNO2CojwQWbTPSdhK7OPvX3CL.jpg",
		"imdb": 7.8,
		"release_date": "2000-07-06",
		"runtime": 120,
		"genre_ids": [
			12,
			18,
			28,
			10749
		],
		"hash": "90f84b66ea3be53ce6b680dd412bb158efc33500",
		"updated": "2021-09-18T12:35:04.03+00:00"
	},
	{
		"id": 82,
		"tmdb_id": 1893,
		"imdb_id": "tt0120915",
		"title": "Chiến Tranh Giữa Các Vì Sao 1: Hiểm Họa Bóng Ma",
		"english_title": "Star Wars: Episode I - The Phantom Menace",
		"backdrop_path": "/hBgtnpZODcD7Yc04xRCswiHuDQM.jpg",
		"imdb": 6.5,
		"release_date": "1999-05-19",
		"runtime": 136,
		"genre_ids": [
			12,
			28,
			878
		],
		"hash": "F105DD901E63E3319C2B259B055FBB6E08A65AB5",
		"updated": "2021-09-18T13:07:08.72+00:00"
	},
	{
		"id": 95,
		"tmdb_id": 36657,
		"imdb_id": "tt0120903",
		"title": "Dị Nhân",
		"english_title": "X-Men",
		"backdrop_path": "/1nEliWCMqPJZWVYc5GmbivX44qo.jpg",
		"imdb": 7.4,
		"release_date": "2000-07-13",
		"runtime": 104,
		"genre_ids": [
			12,
			28,
			878
		],
		"hash": "EA9C81B6E19935F0CDBEAD48813D5426AEC3C883",
		"updated": "2021-09-18T13:21:16.41+00:00"
	},
	{
		"id": 93,
		"tmdb_id": 955,
		"imdb_id": "tt0120755",
		"title": "Nhiệm Vụ Bất Khả Thi 2",
		"english_title": "Mission: Impossible II",
		"backdrop_path": "/u819Obji086jtXzPfEDZbG1GEBt.jpg",
		"imdb": 6.1,
		"release_date": "2000-05-24",
		"runtime": 123,
		"genre_ids": [
			12,
			28,
			53
		],
		"hash": "06E2A9683BF4DA92C73A661AC56F0ECC9C63C5B4",
		"updated": "2021-09-19T03:05:07.128+00:00"
	},
	{
		"id": 99,
		"tmdb_id": 9741,
		"imdb_id": "tt0217869",
		"title": "Unbreakable",
		"english_title": "Unbreakable",
		"backdrop_path": "/pjQBiRxs5lh69ZJitWQnzZ3n45s.jpg",
		"imdb": 7.3,
		"release_date": "2000-11-22",
		"runtime": 106,
		"genre_ids": [
			53,
			18,
			9648
		],
		"hash": "EAAE0E19493C45EF637A863F07DFEAB10C318ABC",
		"updated": "2021-09-19T05:00:22.714+00:00"
	},
	{
		"id": 96,
		"tmdb_id": 8358,
		"imdb_id": "tt0162222",
		"title": "Một Mình Trên Hoang Đảo",
		"english_title": "Cast Away",
		"backdrop_path": "/jw00tvJeqBCj6mEdRq9H7h1iCiZ.jpg",
		"imdb": 7.8,
		"release_date": "2000-12-22",
		"runtime": 143,
		"genre_ids": [
			12,
			18
		],
		"hash": "4BE5E0519F5E41D4119565F177C7BC5AE3D98289",
		"updated": "2021-09-19T05:55:35.884+00:00"
	},
	{
		"id": 81,
		"tmdb_id": 4951,
		"imdb_id": "tt0147800",
		"title": "10 Điều Em Ghét Anh",
		"english_title": "10 Things I Hate About You",
		"backdrop_path": "/tGppwHNP2bcB9PEreTbZCvNgfBt.jpg",
		"imdb": 7.3,
		"release_date": "1999-03-30",
		"runtime": 97,
		"genre_ids": [
			35,
			10749,
			18
		],
		"hash": "F80BA6556401B2C8E92AD8A73CED5657C3F728D5",
		"updated": "2021-09-19T08:06:41.476+00:00"
	},
	{
		"id": 75,
		"tmdb_id": 297,
		"imdb_id": "tt0119643",
		"title": "Hẹn Gặp Tử Thần",
		"english_title": "Meet Joe Black",
		"backdrop_path": "/xYI72IVRK7MTQpENTdt4L20Aa2I.jpg",
		"imdb": 7.2,
		"release_date": "1998-11-12",
		"runtime": 178,
		"genre_ids": [
			14,
			18,
			10749
		],
		"hash": "B42D230BFFC0298B2A822B1301F07CBCEDB796A5",
		"updated": "2021-09-19T08:28:23.384+00:00"
	},
	{
		"id": 98,
		"tmdb_id": 4247,
		"imdb_id": "tt0175142",
		"title": "Scary Movie",
		"english_title": "Scary Movie",
		"backdrop_path": "/7hRKltRLfOiyv1giLbL86A281vS.jpg",
		"imdb": 6.2,
		"release_date": "2000-07-07",
		"runtime": 88,
		"genre_ids": [
			35
		],
		"hash": "218102874F75F0132728331519A2E6E469D01CF9",
		"updated": "2021-09-19T08:28:43.292+00:00"
	},
	{
		"id": 91,
		"tmdb_id": 77,
		"imdb_id": "tt0209144",
		"title": "Kẻ Mất Trí Nhớ",
		"english_title": "Memento",
		"backdrop_path": "/dyfDoSXI1DWCNzBruyBDBqCzxFu.jpg",
		"imdb": 8.4,
		"release_date": "2000-10-11",
		"runtime": 113,
		"genre_ids": [
			9648,
			53
		],
		"hash": "EA69E4CA8642766BA3BFA2B0267E2CC53777AFB2",
		"updated": "2021-10-29T04:03:07.612+00:00"
	},
	{
		"id": 78,
		"tmdb_id": 2109,
		"imdb_id": "tt0120812",
		"title": "Giờ Cao Điểm",
		"english_title": "Rush Hour",
		"backdrop_path": "/3uDeasV9VMRnNPEfqKeWct3pedh.jpg",
		"imdb": 7,
		"release_date": "1998-09-18",
		"runtime": 98,
		"genre_ids": [
			28,
			35,
			80
		],
		"hash": "62BD98DCA86AB92983ECC6A02C6D4BD67AE1B638",
		"updated": "2021-09-19T08:33:55.023+00:00"
	},
	{
		"id": 76,
		"tmdb_id": 1878,
		"imdb_id": "tt0120669",
		"title": "Run sợ ở Las Vegas",
		"english_title": "Fear and Loathing in Las Vegas",
		"backdrop_path": "/90UOkDPF9iIqf7rW8tWPfPXWBSu.jpg",
		"imdb": 7.6,
		"release_date": "1998-05-22",
		"runtime": 118,
		"genre_ids": [
			12,
			18,
			35
		],
		"hash": "64627FD119605AD9E7F2B4A03268B17D0EB90B54",
		"updated": "2021-09-19T10:13:42.845+00:00"
	},
	{
		"id": 97,
		"tmdb_id": 1359,
		"imdb_id": "tt0144084",
		"title": "Kẻ Sát Nhân Cuồng Tín",
		"english_title": "American Psycho",
		"backdrop_path": "/oFDPh2ilXgJnTFgT3p8bycs1xds.jpg",
		"imdb": 7.6,
		"release_date": "2000-04-13",
		"runtime": 102,
		"genre_ids": [
			53,
			18,
			80,
			27
		],
		"hash": "70DB29B66672E8676BFFC9EA50B4E3F9232F14E2",
		"updated": "2021-09-19T11:03:00.903+00:00"
	},
	{
		"id": 88,
		"tmdb_id": 9679,
		"imdb_id": "tt0187078",
		"title": "Gone in Sixty Seconds",
		"english_title": "Gone in Sixty Seconds",
		"backdrop_path": "/tK9c7MAfeeAJKMvXQxGVXxCv7Is.jpg",
		"imdb": 6.5,
		"release_date": "2000-06-09",
		"runtime": 118,
		"genre_ids": [
			28,
			80,
			53
		],
		"hash": "3A4CD735AB0208D8581B2CB63BA761B4909AF763",
		"updated": "2021-09-19T11:03:49.994+00:00"
	},
	{
		"id": 84,
		"tmdb_id": 745,
		"imdb_id": "tt0167404",
		"title": "Giác Quan Thứ Sáu",
		"english_title": "The Sixth Sense",
		"backdrop_path": "/o43zdXVjatUAiIeOhb3yuFWeUFM.jpg",
		"imdb": 8.1,
		"release_date": "1999-08-06",
		"runtime": 107,
		"genre_ids": [
			9648,
			53,
			18
		],
		"hash": "8A943F9C60CA01698CB213FAF6E489E469246121",
		"updated": "2021-10-08T03:51:24.911+00:00"
	},
	{
		"id": 109,
		"tmdb_id": 120,
		"imdb_id": "tt0120737",
		"title": "Chúa Tể Của Những Chiếc Nhẫn: Hiệp Hội Nhẫn Thần",
		"english_title": "The Lord of the Rings: The Fellowship of the Ring",
		"backdrop_path": "/6iHH1EsNYzk9azv6H9xOQZQE458.jpg",
		"imdb": 8.8,
		"release_date": "2001-12-18",
		"runtime": 179,
		"genre_ids": [
			12,
			14,
			28
		],
		"hash": "7C286EC055A01E70C4B138FC3901A8995E47B973",
		"updated": "2021-09-15T05:04:29.457+00:00"
	},
	{
		"id": 110,
		"tmdb_id": 129,
		"imdb_id": "tt0245429",
		"title": "Vùng Đất Linh Hồn",
		"english_title": "Spirited Away",
		"backdrop_path": "/sRDfWh1x7qVi9R6Y86XVCQzSjVH.jpg",
		"imdb": 8.6,
		"release_date": "2001-07-20",
		"runtime": 125,
		"genre_ids": [
			16,
			10751,
			14
		],
		"hash": "661B5355FBF1CD8070C98361F47B17DE32EC0D77",
		"updated": "2021-09-16T02:31:59.68+00:00"
	},
	{
		"id": 101,
		"tmdb_id": 98,
		"imdb_id": "tt0172495",
		"title": "Võ Sĩ Giác Đấu",
		"english_title": "Gladiator",
		"backdrop_path": "/sTGMJswUmR5YKw3TzMW8aTeMjhy.jpg",
		"imdb": 8.5,
		"release_date": "2000-05-01",
		"runtime": 155,
		"genre_ids": [
			28,
			18,
			12
		],
		"hash": "9BFAB920305925F9954D8C4B9DEDCD4C6B12FFEA",
		"updated": "2021-09-16T02:42:48.748+00:00"
	},
	{
		"id": 104,
		"tmdb_id": 453,
		"imdb_id": "tt0268978",
		"title": "Trí Tuệ Hoàn Hảo",
		"english_title": "A Beautiful Mind",
		"backdrop_path": "/vx9bB1h7Nv5pn9Q4ZgUs1ZUebLV.jpg",
		"imdb": 8.2,
		"release_date": "2001-12-11",
		"runtime": 135,
		"genre_ids": [
			18,
			10749
		],
		"hash": "9CA50DA836B52A6BCB06AAA91BB2478FD96F5DD0",
		"updated": "2021-09-16T06:16:25.908+00:00"
	},
	{
		"id": 120,
		"tmdb_id": 423,
		"imdb_id": "tt0253474",
		"title": "Nghệ Sĩ Dương Cầm",
		"english_title": "The Pianist",
		"backdrop_path": "/kzPPpg5zmbVjkkT2wvgnhNSbn5y.jpg",
		"imdb": 8.5,
		"release_date": "2002-09-17",
		"runtime": 150,
		"genre_ids": [
			18,
			10752
		],
		"hash": "3B66ADB093195AE1BC5A832352F9E41DD77CF980",
		"updated": "2021-09-16T02:51:47.113+00:00"
	},
	{
		"id": 102,
		"tmdb_id": 671,
		"imdb_id": "tt0241527",
		"title": "Harry Potter và Hòn Đá Phù Thủy (1)",
		"english_title": "Harry Potter and the Philosopher's Stone",
		"backdrop_path": "/qrKcg4CbBm3165QNT3kQWQnqlTM.jpg",
		"imdb": 7.6,
		"release_date": "2001-11-16",
		"runtime": 152,
		"genre_ids": [
			12,
			14
		],
		"hash": "B47882A62EEDEC7767AA86B7A866F1DD846C5357",
		"updated": "2021-09-18T13:42:56.984+00:00"
	},
	{
		"id": 113,
		"tmdb_id": 161,
		"imdb_id": "tt0240772",
		"title": "Mười Một Tên Cướp Thế Kỷ",
		"english_title": "Ocean's Eleven",
		"backdrop_path": "/jungCBiUYzNlQO4Vmz62lFq1zO8.jpg",
		"imdb": 7.7,
		"release_date": "2001-12-07",
		"runtime": 116,
		"genre_ids": [
			53,
			80
		],
		"hash": "9151A2F77C0179E9FC215B0E0CCB40423985D82D",
		"updated": "2021-09-19T03:03:12.48+00:00"
	},
	{
		"id": 121,
		"tmdb_id": 608,
		"imdb_id": "tt0120912",
		"title": "Đặc Vụ Áo Đen 2",
		"english_title": "Men in Black II",
		"backdrop_path": "/ih2z8H0XgM4VZaKe9uKbskOMJqU.jpg",
		"imdb": 6.2,
		"release_date": "2002-07-03",
		"runtime": 88,
		"genre_ids": [
			28,
			12,
			35,
			878
		],
		"hash": "2FDCBD77B6D9AB636CDEF5E8C5DEDA69B7385FE0",
		"updated": "2021-09-19T04:54:17.054+00:00"
	},
	{
		"id": 118,
		"tmdb_id": 4108,
		"imdb_id": "tt0293662",
		"title": "Người Vận Chuyển 1",
		"english_title": "The Transporter",
		"backdrop_path": "/cSF1I7P2rQqT88Q0SsH85ItUDtA.jpg",
		"imdb": 6.8,
		"release_date": "2002-10-02",
		"runtime": 92,
		"genre_ids": [
			28,
			80,
			53
		],
		"hash": "B9767A862420ED7E5BAEE2087B1ADC2F97AFB83D",
		"updated": "2021-09-19T05:38:32.841+00:00"
	},
	{
		"id": 115,
		"tmdb_id": 9081,
		"imdb_id": "tt0243017",
		"title": "Đánh Thức Cuộc Đời",
		"english_title": "Waking Life",
		"backdrop_path": "/KWl9345xYe4ZATOUkUD4TG5xYW.jpg",
		"imdb": 7.8,
		"release_date": "2001-10-19",
		"runtime": 99,
		"genre_ids": [
			16,
			18
		],
		"hash": "727E90587AADFE3E7C9888A0DB20F2E10B7662DA",
		"updated": "2021-09-19T05:55:49.166+00:00"
	},
	{
		"id": 112,
		"tmdb_id": 855,
		"imdb_id": "tt0265086",
		"title": "Chiến Dịch Diều Hâu",
		"english_title": "Black Hawk Down",
		"backdrop_path": "/1xdkRnSdULZnHkuhMJOG04l2VS9.jpg",
		"imdb": 7.7,
		"release_date": "2001-12-28",
		"runtime": 145,
		"genre_ids": [
			28,
			36,
			10752
		],
		"hash": "58CC12DEE5C56DF7D3EDB058F327F1ED59F320E3",
		"updated": "2021-09-19T06:29:48.718+00:00"
	},
	{
		"id": 100,
		"tmdb_id": 2787,
		"imdb_id": "tt0134847",
		"title": "Riddick: Hành Tinh Tăm Tối",
		"english_title": "Pitch Black",
		"backdrop_path": "/5MCYau94XLkvChn5NlyJEGDe3ml.jpg",
		"imdb": 7.1,
		"release_date": "2000-02-18",
		"runtime": 108,
		"genre_ids": [
			53,
			878,
			28
		],
		"hash": "C98DF0A52102C912F815EA92F5411082B7676DA3",
		"updated": "2021-09-19T06:37:09.244+00:00"
	},
	{
		"id": 123,
		"tmdb_id": 10229,
		"imdb_id": "tt0281358",
		"title": "Bước Ngoặt Đáng Nhớ",
		"english_title": "A Walk to Remember",
		"backdrop_path": "/akvusbmiwNNhqId4jvMaLJH4vgT.jpg",
		"imdb": 7.4,
		"release_date": "2002-01-25",
		"runtime": 101,
		"genre_ids": [
			18,
			10749
		],
		"hash": "5F19F9875794114AE4241E4929F4542A388F6E52",
		"updated": "2021-09-19T08:05:29.021+00:00"
	},
	{
		"id": 119,
		"tmdb_id": 320,
		"imdb_id": "tt0278504",
		"title": "Mất Ngủ",
		"english_title": "Insomnia",
		"backdrop_path": "/hLJ1XZIUjvgYOE7Z7fx8pE2FZZA.jpg",
		"imdb": 7.2,
		"release_date": "2002-05-24",
		"runtime": 118,
		"genre_ids": [
			80,
			9648,
			53
		],
		"hash": "A28C3A1470FE39A9A88A70E48AD37E8DA2AF3FF0",
		"updated": "2021-09-19T08:07:26.912+00:00"
	},
	{
		"id": 116,
		"tmdb_id": 9016,
		"imdb_id": "tt0133240",
		"title": "Treasure Planet",
		"english_title": "Treasure Planet",
		"backdrop_path": "/54HssumQSA1lUw18dF7L9hJ8ydj.jpg",
		"imdb": 7.2,
		"release_date": "2002-11-26",
		"runtime": 95,
		"genre_ids": [
			12,
			16,
			10751,
			14,
			878
		],
		"hash": "BC8560AFC2FF34577AD085DB86B965C02D1ADB34",
		"updated": "2021-09-19T08:10:35.696+00:00"
	},
	{
		"id": 103,
		"tmdb_id": 676,
		"imdb_id": "tt0213149",
		"title": "Trân Châu Cảng",
		"english_title": "Pearl Harbor",
		"backdrop_path": "/bCJovPf3htouLxGxzDXpnGsC9dw.jpg",
		"imdb": 6.2,
		"release_date": "2001-05-21",
		"runtime": 183,
		"genre_ids": [
			10752,
			36,
			10749,
			18
		],
		"hash": "4CF5398F1E02E2B7DED6F6BDE7B3599459032F3F",
		"updated": "2021-09-19T08:27:03.531+00:00"
	},
	{
		"id": 106,
		"tmdb_id": 4248,
		"imdb_id": "tt0257106",
		"title": "Scary Movie 2",
		"english_title": "Scary Movie 2",
		"backdrop_path": "/fISCR1m6LfajNllSmfWUJdxCpUi.jpg",
		"imdb": 5.3,
		"release_date": "2001-07-04",
		"runtime": 83,
		"genre_ids": [
			35
		],
		"hash": "71EC881CAE0862815320AB86F6AC650F535E352A",
		"updated": "2021-09-19T08:28:54.601+00:00"
	},
	{
		"id": 105,
		"tmdb_id": 9397,
		"imdb_id": "tt0251075",
		"title": "Evolution",
		"english_title": "Evolution",
		"backdrop_path": "/267nIF8lND3ocdF0V747U789bVo.jpg",
		"imdb": 6.1,
		"release_date": "2001-06-08",
		"runtime": 101,
		"genre_ids": [
			35,
			878,
			28
		],
		"hash": "26C84394C587E4DB898005BD05C80515160942B3",
		"updated": "2021-09-19T08:39:04.018+00:00"
	},
	{
		"id": 107,
		"tmdb_id": 5175,
		"imdb_id": "tt0266915",
		"title": "Giờ Cao Điểm 2",
		"english_title": "Rush Hour 2",
		"backdrop_path": "/dSCmrudUqsR0n0b4MEtvQoCmaYQ.jpg",
		"imdb": 6.6,
		"release_date": "2001-08-03",
		"runtime": 90,
		"genre_ids": [
			28,
			35,
			80
		],
		"hash": "4E43703F7CB99CF6B7F3B0750A538FA3048F24F1",
		"updated": "2021-09-19T08:34:07.162+00:00"
	},
	{
		"id": 114,
		"tmdb_id": 1995,
		"imdb_id": "tt0146316",
		"title": "Kẻ Cướp Lăng Mộ",
		"english_title": "Lara Croft: Tomb Raider",
		"backdrop_path": "/nfPQ2d3fmzqsSwARR1MAcQBf6fr.jpg",
		"imdb": 5.8,
		"release_date": "2001-06-11",
		"runtime": 100,
		"genre_ids": [
			12,
			14,
			28,
			53
		],
		"hash": "0ED6715111BE8C626917BC25D4784ECE3521DFD1",
		"updated": "2021-09-19T08:41:32.103+00:00"
	},
	{
		"id": 122,
		"tmdb_id": 557,
		"imdb_id": "tt0145487",
		"title": "Người Nhện",
		"english_title": "Spider-Man",
		"backdrop_path": "/alOOYNFNScj0pzNgLtV5cl8gLdO.jpg",
		"imdb": 7.3,
		"release_date": "2002-05-01",
		"runtime": 121,
		"genre_ids": [
			14,
			28
		],
		"hash": "B6ABEA6BAC7DEBB9BCF845983727FA6EDFCED29D",
		"updated": "2021-09-19T10:08:45.797+00:00"
	},
	{
		"id": 111,
		"tmdb_id": 11770,
		"imdb_id": "tt0286112",
		"title": "Đội Bóng Thiếu Lâm",
		"english_title": "Shaolin Soccer",
		"backdrop_path": "/jnuGahbruSWWuiBzhXIbub806jU.jpg",
		"imdb": 7.3,
		"release_date": "2001-07-05",
		"runtime": 113,
		"genre_ids": [
			28,
			35
		],
		"hash": "3035785C35C5845A2F7A0327873BCD5F672CF5A0",
		"updated": "2021-09-19T10:12:43.395+00:00"
	},
	{
		"id": 117,
		"tmdb_id": 15370,
		"imdb_id": "tt0347618",
		"title": "Loài Mèo Trả Ơn",
		"english_title": "The Cat Returns",
		"backdrop_path": "/d4BTZvckFTthyhGX27LZnWxl0tl.jpg",
		"imdb": 7.2,
		"release_date": "2002-07-19",
		"runtime": 75,
		"genre_ids": [
			12,
			14,
			16,
			18,
			10751
		],
		"hash": "2c9fb1dc4c29b41bcab9b19c53282829cf993503",
		"updated": "2021-09-20T02:20:09.295+00:00"
	},
	{
		"id": 143,
		"tmdb_id": 670,
		"imdb_id": "tt0364569",
		"title": "Báo Thù",
		"english_title": "Oldboy",
		"backdrop_path": "/pHnlA6N6D0xxfBNGJEWEnZtELpV.jpg",
		"imdb": 8.4,
		"release_date": "2003-11-21",
		"runtime": 120,
		"genre_ids": [
			18,
			53,
			9648,
			28
		],
		"hash": "D814996F2821A1CCFD958E230C0356CCE9419637",
		"updated": "2021-09-16T02:50:15.359+00:00"
	},
	{
		"id": 125,
		"tmdb_id": 640,
		"imdb_id": "tt0264464",
		"title": "Hãy Bắt Tôi Nếu Có Thể",
		"english_title": "Catch Me If You Can",
		"backdrop_path": "/uhOCsgXx5Q8pLJh2SUI1KNwk2hq.jpg",
		"imdb": 8.1,
		"release_date": "2002-12-25",
		"runtime": 141,
		"genre_ids": [
			18,
			80
		],
		"hash": "D77DCA4F05287BAB2994C237E2431DA5D7C7AFD3",
		"updated": "2021-09-16T06:58:06.774+00:00"
	},
	{
		"id": 136,
		"tmdb_id": 12,
		"imdb_id": "tt0266543",
		"title": "Đi Tìm Nemo",
		"english_title": "Finding Nemo",
		"backdrop_path": "/3VaQUP1O7CbCjeha7VH7ICpyWKT.jpg",
		"imdb": 8.1,
		"release_date": "2003-05-30",
		"runtime": 100,
		"genre_ids": [
			16,
			10751
		],
		"hash": "FD0EC08E1F56BF538CB65548EDA4320E46B06E9C",
		"updated": "2021-09-16T06:58:46.598+00:00"
	},
	{
		"id": 138,
		"tmdb_id": 22,
		"imdb_id": "tt0325980",
		"title": "Cướp Biển Vùng Caribbean: Lời Nguyền Của Tàu Ngọc Trai Đen",
		"english_title": "Pirates of the Caribbean: The Curse of the Black Pearl",
		"backdrop_path": "/5YXWZIhxMvKCq1wzaEAH7RAVRMi.jpg",
		"imdb": 8,
		"release_date": "2003-07-09",
		"runtime": 143,
		"genre_ids": [
			12,
			14,
			28
		],
		"hash": "9BD2A8E0910EBF04594F0781D85C64AB9B6878CE",
		"updated": "2021-09-18T02:12:57.786+00:00"
	},
	{
		"id": 135,
		"tmdb_id": 322,
		"imdb_id": "tt0327056",
		"title": "Dòng Sông Kỳ Bí",
		"english_title": "Mystic River",
		"backdrop_path": "/11PrSsSfTwS3IILkCJqUBjL5GXC.jpg",
		"imdb": 7.9,
		"release_date": "2003-01-01",
		"runtime": 138,
		"genre_ids": [
			53,
			80,
			18,
			9648
		],
		"hash": "C2A156618C29684D4F237B1278FC67FB1C60421D",
		"updated": "2021-09-18T06:25:17.757+00:00"
	},
	{
		"id": 130,
		"tmdb_id": 1894,
		"imdb_id": "tt0121765",
		"title": "Chiến Tranh Giữa Các Vì Sao 2: Cuộc Tấn Công Của Người Vô Tính",
		"english_title": "Star Wars: Episode II - Attack of the Clones",
		"backdrop_path": "/vovhXw10DSsRS9yoVbZqb60pXyX.jpg",
		"imdb": 6.5,
		"release_date": "2002-05-15",
		"runtime": 142,
		"genre_ids": [
			12,
			28,
			878
		],
		"hash": "2134BE121500E48BD1B0AD2683EBCAA08869AC81",
		"updated": "2021-09-18T13:10:16.802+00:00"
	},
	{
		"id": 142,
		"tmdb_id": 296,
		"imdb_id": "tt0181852",
		"title": "Kẻ Hủy Diệt 3: Người Máy Nổi Loạn",
		"english_title": "Terminator 3: Rise of the Machines",
		"backdrop_path": "/nVVULMchlitTKjfbGN4MxoznQid.jpg",
		"imdb": 6.3,
		"release_date": "2003-07-02",
		"runtime": 109,
		"genre_ids": [
			28,
			53,
			878
		],
		"hash": "B7A8E451E530117A874D22756AEB97850B74A814",
		"updated": "2021-09-18T13:13:53.969+00:00"
	},
	{
		"id": 132,
		"tmdb_id": 672,
		"imdb_id": "tt0295297",
		"title": "Harry Potter và Phòng Chứa Bí Mật (2)",
		"english_title": "Harry Potter and the Chamber of Secrets",
		"backdrop_path": "/fr047KaRVQW5egYeJIlkch3S7C7.jpg",
		"imdb": 7.4,
		"release_date": "2002-11-13",
		"runtime": 161,
		"genre_ids": [
			12,
			14
		],
		"hash": "8D172817F4B39A12B07F64DFA2F3544B89772635",
		"updated": "2021-09-18T13:43:16.575+00:00"
	},
	{
		"id": 128,
		"tmdb_id": 1576,
		"imdb_id": "tt0120804",
		"title": "Vùng Đất Quỷ Dữ",
		"english_title": "Resident Evil",
		"backdrop_path": "/ma3qz53XvLqB1eaoDOofY1hFBPH.jpg",
		"imdb": 6.7,
		"release_date": "2002-03-15",
		"runtime": 100,
		"genre_ids": [
			27,
			28,
			878
		],
		"hash": "FB7DBFBE6660218061098E9938D6B105F50F41C5",
		"updated": "2021-09-19T05:41:37.863+00:00"
	},
	{
		"id": 144,
		"tmdb_id": 13398,
		"imdb_id": "tt0388473",
		"title": "Một Đêm Tuyết Phủ",
		"english_title": "Tokyo Godfathers",
		"backdrop_path": "/dHDEqrnQOpx15nUzGk8mu4VpLDX.jpg",
		"imdb": 7.8,
		"release_date": "2003-12-29",
		"runtime": 93,
		"genre_ids": [
			16,
			18
		],
		"hash": "7A493986B6468A54FFB73541A13CE1AF4E6250A2",
		"updated": "2021-09-19T05:56:20.502+00:00"
	},
	{
		"id": 129,
		"tmdb_id": 180,
		"imdb_id": "tt0181689",
		"title": "Bản Báo Cáo Thiểu Số",
		"english_title": "Minority Report",
		"backdrop_path": "/tFE1kappE0sbi6paup7Uo93q6mp.jpg",
		"imdb": 7.6,
		"release_date": "2002-06-20",
		"runtime": 145,
		"genre_ids": [
			28,
			53,
			878,
			9648
		],
		"hash": "0761F0ACED1A279EF10F5FF195C5F6F53EC136DB",
		"updated": "2021-09-19T08:10:56.899+00:00"
	},
	{
		"id": 133,
		"tmdb_id": 9654,
		"imdb_id": "tt0317740",
		"title": "Kẻ Phản Bội",
		"english_title": "The Italian Job",
		"backdrop_path": "/pPqjdrgOg9Rebdaeeu4w3o0OtwV.jpg",
		"imdb": 7,
		"release_date": "2003-05-30",
		"runtime": 110,
		"genre_ids": [
			28,
			80
		],
		"hash": "178636494FDF4042672B8482E90C993FC527C6CA",
		"updated": "2021-09-19T08:11:12.621+00:00"
	},
	{
		"id": 126,
		"tmdb_id": 170,
		"imdb_id": "tt0289043",
		"title": "28 Ngày Sau",
		"english_title": "28 Days Later",
		"backdrop_path": "/lFJGm0JdZuCYKzz6b2jgFN7di8i.jpg",
		"imdb": 7.6,
		"release_date": "2002-10-31",
		"runtime": 113,
		"genre_ids": [
			27,
			53,
			878
		],
		"hash": "C504077C0A470C0FF7B5EE8577FC58CFB07D5F5B",
		"updated": "2021-09-19T08:19:26.804+00:00"
	},
	{
		"id": 140,
		"tmdb_id": 9567,
		"imdb_id": "tt0314353",
		"title": "Nước Mắt Lúc Bình Minh",
		"english_title": "Tears of the Sun",
		"backdrop_path": "/14SEmHUzZ2XsKtGtiGA1C6dn6lf.jpg",
		"imdb": 6.6,
		"release_date": "2003-03-07",
		"runtime": 121,
		"genre_ids": [
			28,
			18,
			10752
		],
		"hash": "F3AE3976EBC659B77F839BE4C86CE72EF708CDFC",
		"updated": "2021-09-19T08:19:43.421+00:00"
	},
	{
		"id": 124,
		"tmdb_id": 7299,
		"imdb_id": "tt0238380",
		"title": "Con Dao Hai Lưỡi",
		"english_title": "Equilibrium",
		"backdrop_path": "/lJ0vBqtD36gxve9330DOmLUX6a.jpg",
		"imdb": 7.4,
		"release_date": "2002-12-06",
		"runtime": 107,
		"genre_ids": [
			28,
			878,
			53
		],
		"hash": "771FECC9D15C8D97D1EAE4DB7E54A876CA3E9772",
		"updated": "2021-09-19T08:24:53.085+00:00"
	},
	{
		"id": 139,
		"tmdb_id": 2832,
		"imdb_id": "tt0309698",
		"title": "Định Danh",
		"english_title": "Identity",
		"backdrop_path": "/wB4GjfVirgBNSkwfc9udiDAN0b3.jpg",
		"imdb": 7.3,
		"release_date": "2003-04-25",
		"runtime": 90,
		"genre_ids": [
			9648,
			53
		],
		"hash": "073F3B790F4A77020ACD4B73607E0AEA78736C12",
		"updated": "2021-09-19T08:22:38.61+00:00"
	},
	{
		"id": 137,
		"tmdb_id": 10159,
		"imdb_id": "tt0327850",
		"title": "Rượt Đuổi",
		"english_title": "The Rundown",
		"backdrop_path": "/n9TSGUjgb9WDghasKZ0wpJqMgB.jpg",
		"imdb": 6.7,
		"release_date": "2003-09-26",
		"runtime": 104,
		"genre_ids": [
			12,
			28,
			35,
			53
		],
		"hash": "4E733FA169A92115EFD6512DDB0CA1BED6E26F3E",
		"updated": "2021-09-19T08:28:35.126+00:00"
	},
	{
		"id": 131,
		"tmdb_id": 12100,
		"imdb_id": "tt0245562",
		"title": "Windtalkers",
		"english_title": "Windtalkers",
		"backdrop_path": "/8k6dX7azAZraHcSAwIVx1XZkGJa.jpg",
		"imdb": 6.1,
		"release_date": "2002-06-14",
		"runtime": 134,
		"genre_ids": [
			10752,
			18,
			28,
			36
		],
		"hash": "256482AE438B5D8ED33A65FFC63C90094ACFCCC6",
		"updated": "2021-09-19T08:37:15.026+00:00"
	},
	{
		"id": 134,
		"tmdb_id": 9486,
		"imdb_id": "tt0274166",
		"title": "Điệp Viên Không Không Thấy",
		"english_title": "Johnny English",
		"backdrop_path": "/gtDuUEprJkTIrzcO2vFsXgdkJ0R.jpg",
		"imdb": 6.2,
		"release_date": "2003-03-14",
		"runtime": 88,
		"genre_ids": [
			12,
			28,
			35
		],
		"hash": "DDAF275FEADAE6284506E8DBF1B6BF8D8067A8D0",
		"updated": "2021-09-19T11:02:23.854+00:00"
	},
	{
		"id": 146,
		"tmdb_id": 153,
		"imdb_id": "tt0335266",
		"title": "Lạc Lối Ở Tokyo",
		"english_title": "Lost in Translation",
		"backdrop_path": "/eaXqDL6DhEB5bnaakoUdlm3st6X.jpg",
		"imdb": 7.7,
		"release_date": "2003-09-18",
		"runtime": 102,
		"genre_ids": [
			35,
			18,
			10749
		],
		"hash": "190C92BB097B7261E6AC7AFCC4C214BA69FAD928",
		"updated": "2021-09-19T11:04:16.327+00:00"
	},
	{
		"id": 145,
		"tmdb_id": 605,
		"imdb_id": "tt0242653",
		"title": "Ma Trận 3: Cuộc Cách Mạng",
		"english_title": "The Matrix Revolutions",
		"backdrop_path": "/m8BQ4jJfgWRAhXDX54Xibxhffr0.jpg",
		"imdb": 6.8,
		"release_date": "2003-11-03",
		"runtime": 129,
		"genre_ids": [
			12,
			28,
			53,
			878
		],
		"hash": "0B1FD1CC66B90232DD0298558627173D8B442153",
		"updated": "2021-12-23T12:21:40.522+00:00"
	},
	{
		"id": 163,
		"tmdb_id": 15859,
		"imdb_id": "tt0428870",
		"title": "Khoảnh Khắc Để Nhớ",
		"english_title": "A Moment to Remember",
		"backdrop_path": "/kTl1GeRpIUCiw3XZAPrSvQb9lCG.jpg",
		"imdb": 8.2,
		"release_date": "2004-11-05",
		"runtime": 115,
		"genre_ids": [
			18,
			10749
		],
		"hash": "83B6D2C4CE4D56A21B43FCE0804467DB903F9663",
		"updated": "2021-09-16T06:17:07.022+00:00"
	},
	{
		"id": 151,
		"tmdb_id": 24,
		"imdb_id": "tt0266697",
		"title": "Cô Dâu Báo Thù 1",
		"english_title": "Kill Bill: Vol. 1",
		"backdrop_path": "/byGvsjXuTXk0jAm7OxJiCqeRa91.jpg",
		"imdb": 8.1,
		"release_date": "2003-10-10",
		"runtime": 111,
		"genre_ids": [
			28,
			80
		],
		"hash": "A595417D99461679BA857D41C6D4C5CC4EEFAD76",
		"updated": "2021-09-16T06:59:50.608+00:00"
	},
	{
		"id": 156,
		"tmdb_id": 80,
		"imdb_id": "tt0381681",
		"title": "Trước Lúc Hoàng Hôn",
		"english_title": "Before Sunset",
		"backdrop_path": "/9RyDn8e1jt7kb4V6hG72Zlz1yWs.jpg",
		"imdb": 8.1,
		"release_date": "2004-02-10",
		"runtime": 80,
		"genre_ids": [
			18,
			10749
		],
		"hash": "9DB47053EFAAEC7B343004831CC69E571CAE3123",
		"updated": "2021-09-16T07:10:33.007+00:00"
	},
	{
		"id": 166,
		"tmdb_id": 70,
		"imdb_id": "tt0405159",
		"title": "Cô Gái Triệu Đô",
		"english_title": "Million Dollar Baby",
		"backdrop_path": "/efXetskp2hnswIIYHFXaHS0UlME.jpg",
		"imdb": 8.1,
		"release_date": "2004-12-15",
		"runtime": 132,
		"genre_ids": [
			18
		],
		"hash": "519C7A33678252D75BF05CCDCDE5AB3AF0DE621C",
		"updated": "2021-09-16T07:19:16.15+00:00"
	},
	{
		"id": 152,
		"tmdb_id": 587,
		"imdb_id": "tt0319061",
		"title": "Cá Lớn",
		"english_title": "Big Fish",
		"backdrop_path": "/xN3xKxD6TI87RuGZXsiF1fMjN6Z.jpg",
		"imdb": 8,
		"release_date": "2003-12-25",
		"runtime": 125,
		"genre_ids": [
			12,
			14,
			18
		],
		"hash": "3340A4106C7BB531551BCE807CA68F7544EEE2E3",
		"updated": "2021-09-18T02:13:19.492+00:00"
	},
	{
		"id": 157,
		"tmdb_id": 163,
		"imdb_id": "tt0349903",
		"title": "Mười Hai Tên Cướp Thế Kỷ",
		"english_title": "Ocean's Twelve",
		"backdrop_path": "/ou5ymYmjIUn2hA5u4D9K4Q1bNBR.jpg",
		"imdb": 6.5,
		"release_date": "2004-12-09",
		"runtime": 125,
		"genre_ids": [
			53,
			80
		],
		"hash": "C1866A273608946646FEAFA837E0029DBF0ABD1B",
		"updated": "2021-09-19T03:03:26.47+00:00"
	},
	{
		"id": 154,
		"tmdb_id": 36658,
		"imdb_id": "tt0290334",
		"title": "Dị Nhân 2: Liên Minh Dị Nhân",
		"english_title": "X2",
		"backdrop_path": "/3AqWLNCLAEYzEbcanzXoALIl6ce.jpg",
		"imdb": 7.4,
		"release_date": "2003-04-24",
		"runtime": 133,
		"genre_ids": [
			12,
			28,
			878,
			53
		],
		"hash": "399AAC78B84292A55F299A0F73FC8D159A73A92B",
		"updated": "2021-09-18T13:34:34.076+00:00"
	},
	{
		"id": 161,
		"tmdb_id": 673,
		"imdb_id": "tt0304141",
		"title": "Harry Potter và Tù Nhân Ngục Azkaban (3)",
		"english_title": "Harry Potter and the Prisoner of Azkaban",
		"backdrop_path": "/iZkTWmO5wwyJepQB08Ul0gaJi1X.jpg",
		"imdb": 7.9,
		"release_date": "2004-05-31",
		"runtime": 141,
		"genre_ids": [
			12,
			14
		],
		"hash": "D56E0047693475C7809D22577419B3506A1A10CF",
		"updated": "2021-09-18T13:43:57.937+00:00"
	},
	{
		"id": 165,
		"tmdb_id": 1824,
		"imdb_id": "tt0343660",
		"title": "50 Lần Hẹn Đầu Tiên",
		"english_title": "50 First Dates",
		"backdrop_path": "/4PatjeeqMp7qjzNKDLTPN3hgmx9.jpg",
		"imdb": 6.8,
		"release_date": "2004-02-13",
		"runtime": 99,
		"genre_ids": [
			35,
			10749
		],
		"hash": "B32B869CDE257E6141DC25EE2EC69FBDE3AAF074",
		"updated": "2021-09-19T08:01:03.241+00:00"
	},
	{
		"id": 148,
		"tmdb_id": 584,
		"imdb_id": "tt0322259",
		"title": "Quá Nhanh Quá Nguy Hiểm 2",
		"english_title": "2 Fast 2 Furious",
		"backdrop_path": "/w0GPznUeGsB4PhMnZVeQTD0zZIC.jpg",
		"imdb": 5.9,
		"release_date": "2003-06-05",
		"runtime": 108,
		"genre_ids": [
			28,
			80,
			53
		],
		"hash": "741BBEDB001D0A04000F3AB3A98ED8A8FCC56DB8",
		"updated": "2021-09-19T04:59:09.055+00:00"
	},
	{
		"id": 155,
		"tmdb_id": 1577,
		"imdb_id": "tt0318627",
		"title": "Vùng Đất Quỷ Dữ 2: Khải Huyền",
		"english_title": "Resident Evil: Apocalypse",
		"backdrop_path": "/vz1UtdrGXY70ylibJbv1UNT9oqo.jpg",
		"imdb": 6.2,
		"release_date": "2004-09-10",
		"runtime": 94,
		"genre_ids": [
			27,
			28,
			878
		],
		"hash": "4D560225B53A0E38642808CE42F801B9300BE90D",
		"updated": "2021-09-19T05:41:47.119+00:00"
	},
	{
		"id": 153,
		"tmdb_id": 616,
		"imdb_id": "tt0325710",
		"title": "Võ Sĩ Đạo Cuối Cùng",
		"english_title": "The Last Samurai",
		"backdrop_path": "/atlr3rNM4qJiyyfmzsNnM5aCLaz.jpg",
		"imdb": 7.7,
		"release_date": "2003-01-09",
		"runtime": 154,
		"genre_ids": [
			18,
			28,
			10752,
			36
		],
		"hash": "D2F78914D38DAC6097003EB64D665F4A3E13FDF5",
		"updated": "2021-09-19T05:56:37.001+00:00"
	},
	{
		"id": 160,
		"tmdb_id": 11036,
		"imdb_id": "tt0332280",
		"title": "Nhật Ký Tình Yêu",
		"english_title": "The Notebook",
		"backdrop_path": "/7BBG6Kq5psKQByX0xgyTzoGhT3v.jpg",
		"imdb": 7.8,
		"release_date": "2004-06-25",
		"runtime": 123,
		"genre_ids": [
			10749,
			18
		],
		"hash": "868E7F9C148FB8C70EB9E065AC29C265EAA73B6C",
		"updated": "2021-09-19T05:57:21.791+00:00"
	},
	{
		"id": 164,
		"tmdb_id": 11836,
		"imdb_id": "tt0345950",
		"title": "The SpongeBob SquarePants Movie",
		"english_title": "The SpongeBob SquarePants Movie",
		"backdrop_path": "/pbVrw6LbOXfFwPmN3kXbnm4SM2o.jpg",
		"imdb": 7.1,
		"release_date": "2004-11-14",
		"runtime": 87,
		"genre_ids": [
			16,
			35,
			10751,
			14
		],
		"hash": "67F3CC3070BEF56A512A9DC9B266F69527BC550D",
		"updated": "2021-09-19T08:03:03.003+00:00"
	},
	{
		"id": 159,
		"tmdb_id": 594,
		"imdb_id": "tt0362227",
		"title": "Phi Trường",
		"english_title": "The Terminal",
		"backdrop_path": "/2vacUzKYOmPdI04uQAW5pzWKD2g.jpg",
		"imdb": 7.4,
		"release_date": "2004-06-17",
		"runtime": 128,
		"genre_ids": [
			35,
			18
		],
		"hash": "4FA7F2AAA806011810E35A5D43FB0ED01A60E12E",
		"updated": "2021-09-19T08:11:22.54+00:00"
	},
	{
		"id": 167,
		"tmdb_id": 8699,
		"imdb_id": "tt0357413",
		"title": "Huyền Thoại Ron Burgundy",
		"english_title": "The Legend of Ron Burgundy",
		"backdrop_path": "/zTMVbNTkqhuzyoAM5uEJ8vmPOAi.jpg",
		"imdb": 7.2,
		"release_date": "2004-07-09",
		"runtime": 95,
		"genre_ids": [
			35
		],
		"hash": "4B7F0DAB1C74612E1198D236DA676B3274E95320",
		"updated": "2021-09-19T08:18:06.139+00:00"
	},
	{
		"id": 147,
		"tmdb_id": 4256,
		"imdb_id": "tt0306047",
		"title": "Scary Movie 3",
		"english_title": "Scary Movie 3",
		"backdrop_path": "/2lkfkSw8OgAZSi3ZgAyP5o5HoJE.jpg",
		"imdb": 5.5,
		"release_date": "2003-10-24",
		"runtime": 84,
		"genre_ids": [
			35
		],
		"hash": "1F44533014D2B49AEB77679D129208E6FA7C8F5E",
		"updated": "2021-09-19T08:29:04.334+00:00"
	},
	{
		"id": 169,
		"tmdb_id": 2059,
		"imdb_id": "tt0368891",
		"title": "Kho Báu Quốc Gia",
		"english_title": "National Treasure",
		"backdrop_path": "/yWJ8444QvMrpvPOEqcNCv0FDflG.jpg",
		"imdb": 6.9,
		"release_date": "2004-11-19",
		"runtime": 131,
		"genre_ids": [
			12,
			28,
			53,
			9648
		],
		"hash": "36F39DEA863C1886DF228DED50D29D8538B55FFB",
		"updated": "2021-09-19T08:41:09.627+00:00"
	},
	{
		"id": 162,
		"tmdb_id": 9352,
		"imdb_id": "tt0356150",
		"title": "EuroTrip",
		"english_title": "EuroTrip",
		"backdrop_path": "/bf9pEmrKJxL4QFs9fFEwD1EAN02.jpg",
		"imdb": 6.6,
		"release_date": "2004-02-20",
		"runtime": 93,
		"genre_ids": [
			35
		],
		"hash": "D17053DE69C3B62BB9E658CF61ED9759378C1BF1",
		"updated": "2021-09-19T10:10:03.858+00:00"
	},
	{
		"id": 1174,
		"tmdb_id": 65,
		"imdb_id": "tt0298203",
		"title": "8 Dặm",
		"english_title": "8 Mile",
		"backdrop_path": "/wddyr5H8KtK2ofv09pMDsVMIZPH.jpg",
		"imdb": 7.1,
		"release_date": "2002-11-08",
		"runtime": 110,
		"genre_ids": [
			10402,
			18
		],
		"hash": "73C39961B916A66B0C5E24DD19F107BE7E73B880",
		"updated": "2021-09-19T10:15:56.643+00:00"
	},
	{
		"id": 158,
		"tmdb_id": 1954,
		"imdb_id": "tt0289879",
		"title": "Hiệu Ứng Cánh Bướm",
		"english_title": "The Butterfly Effect",
		"backdrop_path": "/gZJ3Sg4ZJ2v29BnkrVaCIvMDE2E.jpg",
		"imdb": 7.6,
		"release_date": "2004-01-22",
		"runtime": 113,
		"genre_ids": [
			878,
			53
		],
		"hash": "E43DC185AFC278061332B5DF961093A09CD89083",
		"updated": "2021-09-19T11:03:33.694+00:00"
	},
	{
		"id": 168,
		"tmdb_id": 4935,
		"imdb_id": "tt0347149",
		"title": "Lâu Đài Bay Của Pháp Sư Howl",
		"english_title": "Howl's Moving Castle",
		"backdrop_path": "/summupW5iJAbgStpAxSrZq0NiJu.jpg",
		"imdb": 8.2,
		"release_date": "2004-11-19",
		"runtime": 119,
		"genre_ids": [
			14,
			16,
			12
		],
		"hash": "7C7A5296A370A5D8067C712DA5146BF5A868E846",
		"updated": "2021-10-28T10:31:42.412+00:00"
	},
	{
		"id": 178,
		"tmdb_id": 393,
		"imdb_id": "tt0378194",
		"title": "Cô Dâu Báo Thù 2",
		"english_title": "Kill Bill: Vol. 2",
		"backdrop_path": "/aU7SNWJEZjep5JfcMMDT1SevAOh.jpg",
		"imdb": 8,
		"release_date": "2004-04-16",
		"runtime": 136,
		"genre_ids": [
			28,
			80,
			53
		],
		"hash": "9AE58EF1F8DFF66A42F3800208AEE4E77F00508D",
		"updated": "2021-09-18T02:14:06.487+00:00"
	},
	{
		"id": 172,
		"tmdb_id": 38,
		"imdb_id": "tt0338013",
		"title": "Ký Ức Tình Yêu",
		"english_title": "Eternal Sunshine of the Spotless Mind",
		"backdrop_path": "/612scqPyLecLmsMNk7Wyi09bWRQ.jpg",
		"imdb": 8.3,
		"release_date": "2004-03-19",
		"runtime": 108,
		"genre_ids": [
			878,
			18,
			10749
		],
		"hash": "4C6C84E56453B0A45B2DEE6E8E552B119D170883",
		"updated": "2021-09-18T13:17:52.661+00:00"
	},
	{
		"id": 188,
		"tmdb_id": 561,
		"imdb_id": "tt0360486",
		"title": "Constantine: Người Đến Từ Địa Ngục",
		"english_title": "Constantine",
		"backdrop_path": "/fHNuFWvFngVw6FaOzFpYn3yckxq.jpg",
		"imdb": 7,
		"release_date": "2005-02-08",
		"runtime": 121,
		"genre_ids": [
			18,
			14,
			27
		],
		"hash": "BAD4719C9FB4767A53DAB2D957B046B9F4D998A1",
		"updated": "2021-09-19T05:24:33.425+00:00"
	},
	{
		"id": 181,
		"tmdb_id": 411,
		"imdb_id": "tt0363771",
		"title": "Biên Niên Sử Narnia: Sư Tử, Phù Thủy và Tủ Áo",
		"english_title": "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
		"backdrop_path": "/lTGaFMmxlwFIjMIuGWR4v6oQCjW.jpg",
		"imdb": 6.9,
		"release_date": "2005-12-07",
		"runtime": 143,
		"genre_ids": [
			12,
			10751,
			14
		],
		"hash": "A3BAEE4634BECE6C5A8ABFE4A49E7E59ED56A400",
		"updated": "2021-09-19T05:25:17.839+00:00"
	},
	{
		"id": 189,
		"tmdb_id": 4348,
		"imdb_id": "tt0414387",
		"title": "Kiêu Hãnh Và Định Kiến",
		"english_title": "Pride & Prejudice",
		"backdrop_path": "/AgJFfkbGMYwt8PCOP75S8ReKYQp.jpg",
		"imdb": 7.8,
		"release_date": "2005-09-16",
		"runtime": 127,
		"genre_ids": [
			18,
			10749
		],
		"hash": "F09FE2AC78F6CFD2D75392234B1ED33045018730",
		"updated": "2021-09-19T05:58:00.823+00:00"
	},
	{
		"id": 191,
		"tmdb_id": 9335,
		"imdb_id": "tt0388482",
		"title": "Người Vận Chuyển 2",
		"english_title": "Transporter 2",
		"backdrop_path": "/yYMGLAdE0auceiEwBgdg6IOEGPJ.jpg",
		"imdb": 6.3,
		"release_date": "2005-08-02",
		"runtime": 87,
		"genre_ids": [
			28,
			53,
			80
		],
		"hash": "768B1B550F7FAA334B853000EE3D02A55552D2A8",
		"updated": "2021-09-19T05:38:48.201+00:00"
	},
	{
		"id": 175,
		"tmdb_id": 2789,
		"imdb_id": "tt0296572",
		"title": "Riddick 2: Biên Niên Sử Của Riddick",
		"english_title": "The Chronicles of Riddick",
		"backdrop_path": "/6wkHSmNPGCvCONT83FdBuGBt8YR.jpg",
		"imdb": 6.7,
		"release_date": "2004-06-11",
		"runtime": 119,
		"genre_ids": [
			28,
			878
		],
		"hash": "E14DD13D7D1F4A67B0B43CBE470A922FD4DE6499",
		"updated": "2021-09-19T06:37:35.532+00:00"
	},
	{
		"id": 171,
		"tmdb_id": 176,
		"imdb_id": "tt0387564",
		"title": "Lưỡi Cưa",
		"english_title": "Saw",
		"backdrop_path": "/eSwaougbenYFP4NFTccJYGJnnK8.jpg",
		"imdb": 7.6,
		"release_date": "2004-10-01",
		"runtime": 103,
		"genre_ids": [
			27,
			9648,
			80
		],
		"hash": "44F00C2C38EA5B629A869B5BE40D7AC54A4BB700",
		"updated": "2021-09-19T07:53:15.624+00:00"
	},
	{
		"id": 184,
		"tmdb_id": 215,
		"imdb_id": "tt0432348",
		"title": "Lưỡi Cưa 2",
		"english_title": "Saw II",
		"backdrop_path": "/2YyEs28WkAJoHRNkxmfq1nu71vE.jpg",
		"imdb": 6.6,
		"release_date": "2005-10-28",
		"runtime": 89,
		"genre_ids": [
			27
		],
		"hash": "BF06CF572F5B7B853684B4336529BA49946CA7A3",
		"updated": "2021-09-19T07:53:26.172+00:00"
	},
	{
		"id": 179,
		"tmdb_id": 10591,
		"imdb_id": "tt0265208",
		"title": "Cô Hàng Xóm Quyến Rũ",
		"english_title": "The Girl Next Door",
		"backdrop_path": "/kHe4pYNqYMIeD9q88BZyw0qC8C9.jpg",
		"imdb": 6.7,
		"release_date": "2004-04-09",
		"runtime": 110,
		"genre_ids": [
			35,
			10749
		],
		"hash": "8C4F152A8262483E448042C13762EB0AFB8F16C5",
		"updated": "2021-09-19T07:59:57.375+00:00"
	},
	{
		"id": 174,
		"tmdb_id": 747,
		"imdb_id": "tt0365748",
		"title": "Giữa Bầy Xác Sống",
		"english_title": "Shaun of the Dead",
		"backdrop_path": "/l6TWIsIlroD42m7XfxPVKavdF81.jpg",
		"imdb": 7.9,
		"release_date": "2004-04-09",
		"runtime": 99,
		"genre_ids": [
			27,
			35
		],
		"hash": "3AC26BE4CCCE1B5A6283F8A3F247BD4ED09ADEAC",
		"updated": "2021-09-19T08:00:18.158+00:00"
	},
	{
		"id": 173,
		"tmdb_id": 2567,
		"imdb_id": "tt0338751",
		"title": "Phi Công Tỷ Phú",
		"english_title": "The Aviator",
		"backdrop_path": "/4EKSZPXLOGTxwjfbEusuoheNpmQ.jpg",
		"imdb": 7.5,
		"release_date": "2004-12-17",
		"runtime": 170,
		"genre_ids": [
			18
		],
		"hash": "2F6F6EBE9CC45B729D8EBB3561D85FE444B6A7EC",
		"updated": "2021-09-19T08:07:39.41+00:00"
	},
	{
		"id": 192,
		"tmdb_id": 3933,
		"imdb_id": "tt0121164",
		"title": "Cô Dâu Ma",
		"english_title": "Corpse Bride",
		"backdrop_path": "/65BCy7SKF2evT9aEPqTgXl9OVLL.jpg",
		"imdb": 7.3,
		"release_date": "2005-09-12",
		"runtime": 77,
		"genre_ids": [
			10749,
			14,
			16
		],
		"hash": "75EDF186D0EF4CFFB08286E8823DE0015F275032",
		"updated": "2021-09-19T08:07:58.963+00:00"
	},
	{
		"id": 182,
		"tmdb_id": 787,
		"imdb_id": "tt0356910",
		"title": "Ông Bà Smith",
		"english_title": "Mr. & Mrs. Smith",
		"backdrop_path": "/oJzqdXolXChSxZBuicVASAi4cmq.jpg",
		"imdb": 6.5,
		"release_date": "2005-06-07",
		"runtime": 120,
		"genre_ids": [
			28,
			35,
			18,
			53
		],
		"hash": "5251E66773298923FC6574881750407AACACCE70",
		"updated": "2021-09-19T08:08:38.599+00:00"
	},
	{
		"id": 185,
		"tmdb_id": 254,
		"imdb_id": "tt0360717",
		"title": "King Kong",
		"english_title": "King Kong",
		"backdrop_path": "/8DI8QguJCFo7TjeF8rIn086jXbk.jpg",
		"imdb": 7.2,
		"release_date": "2005-12-12",
		"runtime": 187,
		"genre_ids": [
			12,
			18,
			28
		],
		"hash": "D3D446BD18FE2604697DE0EF31CF0849A8B4E0D7",
		"updated": "2021-09-19T08:09:14.225+00:00"
	},
	{
		"id": 176,
		"tmdb_id": 1487,
		"imdb_id": "tt0167190",
		"title": "Quỷ Đỏ",
		"english_title": "Hellboy",
		"backdrop_path": "/rkurKP4ubODtd8uf5G6BBkhKAB3.jpg",
		"imdb": 6.8,
		"release_date": "2004-04-02",
		"runtime": 122,
		"genre_ids": [
			14,
			28
		],
		"hash": "B8C4E0D6BC5A666ADE984ED72C8B033C4C06A312",
		"updated": "2021-09-19T08:25:03.748+00:00"
	},
	{
		"id": 186,
		"tmdb_id": 1830,
		"imdb_id": "tt0399295",
		"title": "Ông Trùm Chiến Tranh​",
		"english_title": "Lord of War",
		"backdrop_path": "/fPJztZFjJsrPSc4Fhi58Oxrgaeb.jpg",
		"imdb": 7.6,
		"release_date": "2005-09-16",
		"runtime": 122,
		"genre_ids": [
			80,
			18,
			53
		],
		"hash": "1EEB98585F83EB86CB12A69FC7895FD60AD57F00",
		"updated": "2021-09-19T08:10:24.84+00:00"
	},
	{
		"id": 193,
		"tmdb_id": 16411,
		"imdb_id": "tt0439630",
		"title": "Khúc Cua Quyết Định",
		"english_title": "Initial D",
		"backdrop_path": "/raFbztlqx0m4iSadaTLuu3pnWuW.jpg",
		"imdb": 6.4,
		"release_date": "2005-05-12",
		"runtime": 107,
		"genre_ids": [
			28,
			80,
			53,
			18
		],
		"hash": "3A994F3F60AF72978EFBAA09B08FCDC7BE791C89",
		"updated": "2021-09-19T08:34:44.593+00:00"
	},
	{
		"id": 183,
		"tmdb_id": 9667,
		"imdb_id": "tt0366627",
		"title": "The Jacket",
		"english_title": "The Jacket",
		"backdrop_path": "/oJ6LLutnRd2BHEinQsmO5YFYoBj.jpg",
		"imdb": 7.1,
		"release_date": "2005-03-04",
		"runtime": 103,
		"genre_ids": [
			53,
			9648,
			18
		],
		"hash": "8A5DAFCF9B3CE0952D67AABD1B5C3877382410C8",
		"updated": "2021-09-19T08:37:25.366+00:00"
	},
	{
		"id": 170,
		"tmdb_id": 558,
		"imdb_id": "tt0316654",
		"title": "Người Nhện 2",
		"english_title": "Spider-Man 2",
		"backdrop_path": "/talutKhSf1B0DVtekFCN0Oe3Yla.jpg",
		"imdb": 7.3,
		"release_date": "2004-06-25",
		"runtime": 127,
		"genre_ids": [
			28,
			12,
			14
		],
		"hash": "B2A7E3B3C25DABFEDD390F890B86B36F4C04A8D5",
		"updated": "2021-09-19T10:09:00.563+00:00"
	},
	{
		"id": 180,
		"tmdb_id": 1495,
		"imdb_id": "tt0320661",
		"title": "Vương Quốc Thiên Đường",
		"english_title": "Kingdom of Heaven",
		"backdrop_path": "/AkFNg1IB0u1Yg6S8FFTelAQ93MW.jpg",
		"imdb": 7.2,
		"release_date": "2005-05-03",
		"runtime": 144,
		"genre_ids": [
			18,
			28,
			12,
			36,
			10752
		],
		"hash": "A4606E5675AB5880C21B70961F897F01258B0465",
		"updated": "2021-09-19T11:01:51.455+00:00"
	},
	{
		"id": 187,
		"tmdb_id": 6957,
		"imdb_id": "tt0405422",
		"title": "40 Tuổi Vẫn Còn Zin",
		"english_title": "The 40 Year Old Virgin",
		"backdrop_path": "/w6K2DOsrktg8DCASfAjuetaLQAe.jpg",
		"imdb": 7.1,
		"release_date": "2005-08-11",
		"runtime": 116,
		"genre_ids": [
			35,
			10749
		],
		"hash": "12E8B333D48A4605B9642B1987DF06E06CB11746",
		"updated": "2021-09-19T11:05:01.717+00:00"
	},
	{
		"id": 202,
		"tmdb_id": 1124,
		"imdb_id": "tt0482571",
		"title": "Ảo Thuật Gia Đấu Trí",
		"english_title": "The Prestige",
		"backdrop_path": "/8qNI1E7jprDtCVoWKhXFagrP6ox.jpg",
		"imdb": 8.5,
		"release_date": "2006-10-19",
		"runtime": 130,
		"genre_ids": [
			18,
			9648,
			53
		],
		"hash": "AAA47382B2E6834CD487D0858BCD502D40145F7E",
		"updated": "2021-09-16T02:43:23.155+00:00"
	},
	{
		"id": 213,
		"tmdb_id": 10947,
		"imdb_id": "tt0475293",
		"title": "Hội Diễn Âm Nhạc 1",
		"english_title": "High School Musical",
		"backdrop_path": "/7NUAiD9n6Cu6u5rzYLscMSPNYZC.jpg",
		"imdb": 5.5,
		"release_date": "2006-01-20",
		"runtime": 98,
		"genre_ids": [
			35,
			18,
			10751,
			10402,
			10749,
			10770
		],
		"hash": "8FD56D5290A5A23B834265A8C2BBA6FCD2682E02",
		"updated": "2021-09-19T11:05:13.453+00:00"
	},
	{
		"id": 212,
		"tmdb_id": 582,
		"imdb_id": "tt0405094",
		"title": "Khoảnh Khắc Cuộc Đời",
		"english_title": "The Lives of Others",
		"backdrop_path": "/XVgfwrN1XvZUj9m0tSPC97gyCk.jpg",
		"imdb": 8.4,
		"release_date": "2006-03-15",
		"runtime": 137,
		"genre_ids": [
			18,
			53
		],
		"hash": "27D03C054E00C5535AEEC1FBAD6BD6769A9A0715",
		"updated": "2021-09-16T02:54:51.042+00:00"
	},
	{
		"id": 194,
		"tmdb_id": 272,
		"imdb_id": "tt0372784",
		"title": "Người Dơi Xuất Hiện",
		"english_title": "Batman Begins",
		"backdrop_path": "/v5H01hnfZd9a3WPkKanW9hptP2.jpg",
		"imdb": 8.2,
		"release_date": "2005-06-10",
		"runtime": 140,
		"genre_ids": [
			28,
			80,
			18
		],
		"hash": "52FD58172C296021F2E351B8A12BBC8BE7C88F8D",
		"updated": "2021-09-16T02:26:33.269+00:00"
	},
	{
		"id": 207,
		"tmdb_id": 36557,
		"imdb_id": "tt0381061",
		"title": "Điệp Viên 007: Sòng Bạc Hoàng Gia",
		"english_title": "Casino Royale",
		"backdrop_path": "/tveDcG7WaE0g5QkMmPeKBEsMSlS.jpg",
		"imdb": 8,
		"release_date": "2006-11-14",
		"runtime": 144,
		"genre_ids": [
			12,
			28,
			53
		],
		"hash": "B0A6FBFAE741DDE2842A9640B27395538F647E11",
		"updated": "2021-09-18T02:14:41.91+00:00"
	},
	{
		"id": 211,
		"tmdb_id": 9693,
		"imdb_id": "tt0206634",
		"title": "Giống Nòi Nhân Loại",
		"english_title": "Children of Men",
		"backdrop_path": "/eOddeauL0Z4J2Y1LFTtjdi3jLxE.jpg",
		"imdb": 7.9,
		"release_date": "2006-09-22",
		"runtime": 109,
		"genre_ids": [
			18,
			28,
			53,
			878
		],
		"hash": "4596F4FCCD75104304D22250CAD02BFFB448410C",
		"updated": "2021-09-18T09:07:38.529+00:00"
	},
	{
		"id": 203,
		"tmdb_id": 36668,
		"imdb_id": "tt0376994",
		"title": "Dị Nhân 3: Phán Xét Cuối Cùng",
		"english_title": "X-Men: The Last Stand",
		"backdrop_path": "/uxZsyNrbahQ9BSAjnIjhl02AIqw.jpg",
		"imdb": 6.7,
		"release_date": "2006-05-24",
		"runtime": 104,
		"genre_ids": [
			12,
			28,
			878,
			53
		],
		"hash": "B1FA262ED4A1DF9875D7438980F14A20F4DFFA13",
		"updated": "2021-09-18T13:35:05.151+00:00"
	},
	{
		"id": 206,
		"tmdb_id": 956,
		"imdb_id": "tt0317919",
		"title": "Nhiệm Vụ Bất Khả Thi 3",
		"english_title": "Mission: Impossible III",
		"backdrop_path": "/5ftUdy6mxY8aoWdVH1FsQ8aqxlN.jpg",
		"imdb": 6.9,
		"release_date": "2006-05-03",
		"runtime": 126,
		"genre_ids": [
			12,
			28,
			53
		],
		"hash": "D1183F2BBF6FFFA903D2DCB231876B3461EF442E",
		"updated": "2021-09-19T03:05:20.953+00:00"
	},
	{
		"id": 196,
		"tmdb_id": 674,
		"imdb_id": "tt0330373",
		"title": "Harry Potter và Chiếc Cốc Lửa (4)",
		"english_title": "Harry Potter and the Goblet of Fire",
		"backdrop_path": "/ih5yMOdCSifVl7cZcuQbZ2NyIqN.jpg",
		"imdb": 7.7,
		"release_date": "2005-11-16",
		"runtime": 157,
		"genre_ids": [
			12,
			14,
			10751
		],
		"hash": "196CFBE40F9AFA8866681AD5E73D159F50C580AA",
		"updated": "2021-09-18T13:44:09.455+00:00"
	},
	{
		"id": 199,
		"tmdb_id": 920,
		"imdb_id": "tt0317219",
		"title": "Vương Quốc Xe Hơi",
		"english_title": "Cars",
		"backdrop_path": "/8SOg1oO4ejc7jxZrDFg4GCcrRfY.jpg",
		"imdb": 7.1,
		"release_date": "2006-06-08",
		"runtime": 117,
		"genre_ids": [
			16,
			12,
			35,
			10751
		],
		"hash": "BEE9B68B74F66881066968A58D4F7F08A797A75A",
		"updated": "2021-09-19T05:07:48.415+00:00"
	},
	{
		"id": 215,
		"tmdb_id": 1271,
		"imdb_id": "tt0416449",
		"title": "300 Chiến Binh",
		"english_title": "300",
		"backdrop_path": "/qOtp5qxbzNEm8tFQvQMH5HGdylz.jpg",
		"imdb": 7.6,
		"release_date": "2006-12-09",
		"runtime": 117,
		"genre_ids": [
			28,
			12,
			10752
		],
		"hash": "B1DB84BF4442D8A3A1A666D8AEF6786D43FCE427",
		"updated": "2021-09-19T04:38:32.093+00:00"
	},
	{
		"id": 208,
		"tmdb_id": 1427,
		"imdb_id": "tt0396171",
		"title": "Xác Ướp Nước Hoa",
		"english_title": "Perfume: The Story of a Murderer",
		"backdrop_path": "/6nxcYu3iSRwiXhDJsaLkI5SzkQ6.jpg",
		"imdb": 7.5,
		"release_date": "2006-09-13",
		"runtime": 147,
		"genre_ids": [
			80,
			14,
			18
		],
		"hash": "A4A4F78890F69FE259468F3B7EF90673DA606E55",
		"updated": "2021-09-19T04:46:48.272+00:00"
	},
	{
		"id": 197,
		"tmdb_id": 591,
		"imdb_id": "tt0382625",
		"title": "Mật Mã Da Vinci",
		"english_title": "The Da Vinci Code",
		"backdrop_path": "/iPPt6B8RItuKr6cmNeTnlZmKobR.jpg",
		"imdb": 6.6,
		"release_date": "2006-05-17",
		"runtime": 149,
		"genre_ids": [
			53,
			9648
		],
		"hash": "516263883747868475A0C0DD187C50F7F82ECE00",
		"updated": "2021-09-19T05:50:47.882+00:00"
	},
	{
		"id": 195,
		"tmdb_id": 16320,
		"imdb_id": "tt0379786",
		"title": "Sứ Mệnh Nguy Hiểm",
		"english_title": "Serenity",
		"backdrop_path": "/7Au8D9cOBW9pcycFwhVimXrKHTJ.jpg",
		"imdb": 7.8,
		"release_date": "2005-09-03",
		"runtime": 119,
		"genre_ids": [
			878,
			28,
			12,
			53
		],
		"hash": "DE6201A50BCD081DBB39D7FB5FD62795C903ED47",
		"updated": "2021-09-19T05:58:16.968+00:00"
	},
	{
		"id": 209,
		"tmdb_id": 773,
		"imdb_id": "tt0449059",
		"title": "Hoa Hậu Nhí Ánh Dương",
		"english_title": "Little Miss Sunshine",
		"backdrop_path": "/jKdOEEePBNIPN6MaTX4XNd9dJt5.jpg",
		"imdb": 7.8,
		"release_date": "2006-07-26",
		"runtime": 102,
		"genre_ids": [
			35,
			18
		],
		"hash": "97EE8BD66D4874AB6CC8C3ED0BFBF6E25E4C7641",
		"updated": "2021-09-19T05:58:34.882+00:00"
	},
	{
		"id": 217,
		"tmdb_id": 388,
		"imdb_id": "tt0454848",
		"title": "Điệp Vụ Kép",
		"english_title": "Inside Man",
		"backdrop_path": "/oM8bJzAmdIIXORGZLnGi96dc4eu.jpg",
		"imdb": 7.6,
		"release_date": "2006-03-17",
		"runtime": 129,
		"genre_ids": [
			80,
			18,
			53
		],
		"hash": "B2AE9F0D61C81FE99A7C81BF638900E5C06CA967",
		"updated": "2021-09-19T06:38:00.439+00:00"
	},
	{
		"id": 201,
		"tmdb_id": 4257,
		"imdb_id": "tt0362120",
		"title": "Scary Movie 4",
		"english_title": "Scary Movie 4",
		"backdrop_path": "/xbWeCz14ABEh2PQZ1zesbICzyf4.jpg",
		"imdb": 5.1,
		"release_date": "2006-04-12",
		"runtime": 83,
		"genre_ids": [
			35
		],
		"hash": "638CADEB7CD2F8A64B063C4F939EED4E8A5DCC99",
		"updated": "2021-09-19T08:29:13.176+00:00"
	},
	{
		"id": 210,
		"tmdb_id": 1381,
		"imdb_id": "tt0414993",
		"title": "Suối Nguồn",
		"english_title": "The Fountain",
		"backdrop_path": "/yfr7kftc2cD7QTWDH8QUvr9FR7M.jpg",
		"imdb": 7.2,
		"release_date": "2006-11-22",
		"runtime": 96,
		"genre_ids": [
			18,
			12,
			878,
			10749
		],
		"hash": "EB557F482EB31F9A8E4729CDB4F1F44C57C7244C",
		"updated": "2021-09-19T08:38:53.473+00:00"
	},
	{
		"id": 205,
		"tmdb_id": 9762,
		"imdb_id": "tt0462590",
		"title": "Bước Nhảy Đường Phố",
		"english_title": "Step Up",
		"backdrop_path": "/70p2mMMgqCoZxTSBdy1gZhIYu6T.jpg",
		"imdb": 6.5,
		"release_date": "2006-08-11",
		"runtime": 104,
		"genre_ids": [
			10402,
			18,
			10749,
			80
		],
		"hash": "74D941606ABF449004C0929B68E2FDF1AAFA33F6",
		"updated": "2021-09-19T08:40:21.544+00:00"
	},
	{
		"id": 204,
		"tmdb_id": 1402,
		"imdb_id": "tt0454921",
		"title": "Mưu Cầu Hạnh Phúc",
		"english_title": "The Pursuit of Happyness",
		"backdrop_path": "/nzMmMevQsL6HvHfi4rwNT0xLNuu.jpg",
		"imdb": 8,
		"release_date": "2006-12-14",
		"runtime": 117,
		"genre_ids": [
			18
		],
		"hash": "36A6AEF65827481026EE91C1CC27779CC01D67A7",
		"updated": "2021-09-22T00:45:39.182+00:00"
	},
	{
		"id": 198,
		"tmdb_id": 9829,
		"imdb_id": "tt0475276",
		"title": "Chuyến Bay Số Hiệu 93",
		"english_title": "United 93",
		"backdrop_path": "/bGYj8oqEABbIPjehnjuA0uRJRiv.jpg",
		"imdb": 7.6,
		"release_date": "2006-04-28",
		"runtime": 111,
		"genre_ids": [
			18,
			36,
			80,
			53,
			28
		],
		"hash": "B2ECB6E082EF2C77D0C7019C521C45C889B016E7",
		"updated": "2021-09-19T11:05:23.52+00:00"
	},
	{
		"id": 200,
		"tmdb_id": 4977,
		"imdb_id": "tt0851578",
		"title": "Kẻ Trộm Giấc Mơ",
		"english_title": "Paprika",
		"backdrop_path": "/jViKJYWcILHeN0KH1Wub0Go59TZ.jpg",
		"imdb": 7.7,
		"release_date": "2006-10-01",
		"runtime": 90,
		"genre_ids": [
			16,
			18,
			9648,
			878,
			53
		],
		"hash": "9ABA7D264F198C794C27A4AC9C431523586209AA",
		"updated": "2021-09-19T17:38:04.939+00:00"
	},
	{
		"id": 219,
		"tmdb_id": 1417,
		"imdb_id": "tt0457430",
		"title": "Mê Cung Thần Nông",
		"english_title": "Pan's Labyrinth",
		"backdrop_path": "/dlZGxnVyEOlHoZsVqWYuXG2k61y.jpg",
		"imdb": 8.2,
		"release_date": "2006-08-25",
		"runtime": 118,
		"genre_ids": [
			14,
			18,
			10752
		],
		"hash": "41DDD441693D13A6979847B4FE974E4DDA256CBF",
		"updated": "2021-09-16T06:17:35.468+00:00"
	},
	{
		"id": 225,
		"tmdb_id": 752,
		"imdb_id": "tt0434409",
		"title": "Chiến Binh Tự Do",
		"english_title": "V for Vendetta",
		"backdrop_path": "/oKkSCVhT6FXgYbkYjb1LJUGmScG.jpg",
		"imdb": 8.2,
		"release_date": "2006-02-23",
		"runtime": 132,
		"genre_ids": [
			28,
			53,
			14
		],
		"hash": "DC5E0F28C56CBB93E57FC11CA8E56CC79A5D2E13",
		"updated": "2021-09-16T06:21:26.913+00:00"
	},
	{
		"id": 231,
		"tmdb_id": 7345,
		"imdb_id": "tt0469494",
		"title": "Máu Sẽ Phải Đổ",
		"english_title": "There Will Be Blood",
		"backdrop_path": "/gzZH2daahzd1dS9mqOoL7yk7feI.jpg",
		"imdb": 8.2,
		"release_date": "2007-12-28",
		"runtime": 158,
		"genre_ids": [
			18
		],
		"hash": "2BC831AD092D6029F001D599DEE04F49F1498391",
		"updated": "2021-09-16T06:22:11.268+00:00"
	},
	{
		"id": 241,
		"tmdb_id": 6977,
		"imdb_id": "tt0477348",
		"title": "Không Chốn Dung Thân",
		"english_title": "No Country for Old Men",
		"backdrop_path": "/4M3NCII64xhnByhHGVoIyFwE0dw.jpg",
		"imdb": 8.1,
		"release_date": "2007-11-08",
		"runtime": 122,
		"genre_ids": [
			80,
			18,
			53
		],
		"hash": "D97CB718557D7EFDA484014D8F0158C68C8BFA59",
		"updated": "2021-09-17T12:33:12.241+00:00"
	},
	{
		"id": 221,
		"tmdb_id": 1372,
		"imdb_id": "tt0450259",
		"title": "Kim Cương Máu",
		"english_title": "Blood Diamond",
		"backdrop_path": "/wB0tnOXvpFAw2DVbakxKkofcgGu.jpg",
		"imdb": 8,
		"release_date": "2006-01-26",
		"runtime": 143,
		"genre_ids": [
			18,
			53,
			28
		],
		"hash": "633545E90FF160E875F0BC267B4895ABE828542E",
		"updated": "2021-09-18T02:15:21.22+00:00"
	},
	{
		"id": 234,
		"tmdb_id": 2062,
		"imdb_id": "tt0382932",
		"title": "Chú Chuột Đầu Bếp",
		"english_title": "Ratatouille",
		"backdrop_path": "/qkQGUK99fKQ45JuLRK2v4D6DLgl.jpg",
		"imdb": 8,
		"release_date": "2007-06-22",
		"runtime": 111,
		"genre_ids": [
			16,
			35,
			10751,
			14
		],
		"hash": "4D140BD0A24B8AB8145BF0A05BFEC1C3FF7DC463",
		"updated": "2021-09-18T02:15:46.782+00:00"
	},
	{
		"id": 218,
		"tmdb_id": 58,
		"imdb_id": "tt0383574",
		"title": "Cướp Biển Vùng Caribbean 2: Chiếc Rương Tử Thần",
		"english_title": "Pirates of the Caribbean: Dead Man's Chest",
		"backdrop_path": "/hX7kYOp3zqzHFmzKd92aJvUOK2V.jpg",
		"imdb": 7.3,
		"release_date": "2006-07-06",
		"runtime": 151,
		"genre_ids": [
			12,
			14,
			28
		],
		"hash": "3730A23736101B17914ED10C92A1E1B4DDB016F8",
		"updated": "2021-09-19T00:39:51.584+00:00"
	},
	{
		"id": 240,
		"tmdb_id": 285,
		"imdb_id": "tt0449088",
		"title": "Cướp Biển Vùng Caribbean 3: Nơi Tận Cùng Thế Giới",
		"english_title": "Pirates of the Caribbean: At World's End",
		"backdrop_path": "/s8p827Rz89NOpxLAaQcRi99iq7f.jpg",
		"imdb": 7.1,
		"release_date": "2007-05-19",
		"runtime": 169,
		"genre_ids": [
			12,
			14,
			28
		],
		"hash": "976CE4DA9AC1CDC032B854449541D3EA367C076D",
		"updated": "2021-09-19T00:41:59.407+00:00"
	},
	{
		"id": 233,
		"tmdb_id": 4638,
		"imdb_id": "tt0425112",
		"title": "Siêu Cớm",
		"english_title": "Hot Fuzz",
		"backdrop_path": "/zmfAvd7zhAZWh3cRjGGf2W3ygwX.jpg",
		"imdb": 7.8,
		"release_date": "2007-02-14",
		"runtime": 121,
		"genre_ids": [
			80,
			28,
			35
		],
		"hash": "A00221AF05DE4D44D6B9E49AE92D35DA9DDE5FA4",
		"updated": "2021-09-19T01:26:48.698+00:00"
	},
	{
		"id": 237,
		"tmdb_id": 1620,
		"imdb_id": "tt0465494",
		"title": "Sát Thủ Đánh Thuê",
		"english_title": "Hitman",
		"backdrop_path": "/lvkmURGBqHpBC4jv3PTEB8QFtik.jpg",
		"imdb": 6.3,
		"release_date": "2007-11-21",
		"runtime": 89,
		"genre_ids": [
			28,
			80,
			18,
			53
		],
		"hash": "C43303E6F7EBC1CCAC66F7433744D9386C078799",
		"updated": "2021-09-19T06:20:02.766+00:00"
	},
	{
		"id": 223,
		"tmdb_id": 214,
		"imdb_id": "tt0489270",
		"title": "Lưỡi Cưa 3",
		"english_title": "Saw III",
		"backdrop_path": "/uoIDWpXOeczQ3uD9v84vvv2m7Yq.jpg",
		"imdb": 6.2,
		"release_date": "2006-10-27",
		"runtime": 114,
		"genre_ids": [
			27,
			53,
			80
		],
		"hash": "CA4DAA996B81433E9E35525196584CE25E68E0E8",
		"updated": "2021-09-19T07:53:36.641+00:00"
	},
	{
		"id": 227,
		"tmdb_id": 663,
		"imdb_id": "tt0890870",
		"title": "Lưỡi Cưa 4",
		"english_title": "Saw IV",
		"backdrop_path": "/t9skAsQ20mPa0TnurdBxNyQl4Da.jpg",
		"imdb": 5.9,
		"release_date": "2007-10-25",
		"runtime": 96,
		"genre_ids": [
			27,
			53,
			80
		],
		"hash": "3E061AD7D59B9650E15949F06DEDDF46167CDDE4",
		"updated": "2021-09-19T07:53:48.551+00:00"
	},
	{
		"id": 228,
		"tmdb_id": 7485,
		"imdb_id": "tt0822854",
		"title": "Thiện Xạ",
		"english_title": "Shooter",
		"backdrop_path": "/jcVuELoWKa7LZAD6g9KIiYLHMcb.jpg",
		"imdb": 7.2,
		"release_date": "2007-03-22",
		"runtime": 124,
		"genre_ids": [
			28,
			18,
			9648,
			53,
			80
		],
		"hash": "701D6E4588A5AA648E8A24B591AA33E699AE2A79",
		"updated": "2021-09-19T08:13:54.176+00:00"
	},
	{
		"id": 230,
		"tmdb_id": 3021,
		"imdb_id": "tt0450385",
		"title": "1408",
		"english_title": "1408",
		"backdrop_path": "/1z7w2gQ8KpoLGeUvXpqGFVKc4la.jpg",
		"imdb": 6.8,
		"release_date": "2007-06-22",
		"runtime": 104,
		"genre_ids": [
			27
		],
		"hash": "280403F480D74A39838ED9348C696583638545CC",
		"updated": "2021-09-19T08:05:54.814+00:00"
	},
	{
		"id": 220,
		"tmdb_id": 7551,
		"imdb_id": "tt0453467",
		"title": "Ký Ức Ảo Giác",
		"english_title": "Déjà Vu",
		"backdrop_path": "/lOdiOCctwBxECu9UsjxOC4unJnC.jpg",
		"imdb": 7.1,
		"release_date": "2006-11-22",
		"runtime": 126,
		"genre_ids": [
			28,
			53,
			878
		],
		"hash": "1248AD3B2E3B0A767C4F1687405E4843B62D97F7",
		"updated": "2021-09-19T08:21:24.69+00:00"
	},
	{
		"id": 236,
		"tmdb_id": 1265,
		"imdb_id": "tt0398808",
		"title": "Đường đến xứ sở Thần Tiên",
		"english_title": "Bridge to Terabithia",
		"backdrop_path": "/8ALNV90RFndP89IZ1DJdZj9DG9h.jpg",
		"imdb": 7.1,
		"release_date": "2007-02-15",
		"runtime": 96,
		"genre_ids": [
			12,
			18,
			10751
		],
		"hash": "5EDC01F4C555EC974309F5400F89EFED6AFD3A59",
		"updated": "2021-09-19T08:24:42.478+00:00"
	},
	{
		"id": 239,
		"tmdb_id": 4141,
		"imdb_id": "tt0465602",
		"title": "Nhiệm Vụ Bất Đắc Dĩ",
		"english_title": "Shoot 'Em Up",
		"backdrop_path": "/lrPM1hjGOVQ0e1rLE6gJEYlj1Lj.jpg",
		"imdb": 6.7,
		"release_date": "2007-07-26",
		"runtime": 86,
		"genre_ids": [
			28,
			53,
			35,
			80
		],
		"hash": "419FD1300E73D809265A54DBA703ADF69542B7F9",
		"updated": "2021-09-19T08:33:45.412+00:00"
	},
	{
		"id": 238,
		"tmdb_id": 5174,
		"imdb_id": "tt0293564",
		"title": "Giờ Cao Điểm 3",
		"english_title": "Rush Hour 3",
		"backdrop_path": "/5jssM3WhKJBamUq0PW1BnPjR9pD.jpg",
		"imdb": 6.2,
		"release_date": "2007-08-08",
		"runtime": 91,
		"genre_ids": [
			28,
			35,
			80
		],
		"hash": "F91FE64FDD777DF684500AAC160779C2215BB805",
		"updated": "2021-09-19T08:34:22.119+00:00"
	},
	{
		"id": 232,
		"tmdb_id": 6637,
		"imdb_id": "tt0465234",
		"title": "Kho Báu Quốc Gia: Quyển Sách Bí Mật",
		"english_title": "National Treasure: Book of Secrets",
		"backdrop_path": "/58uA5c3f4nJhKIfgm3OzNXsrxr6.jpg",
		"imdb": 6.5,
		"release_date": "2007-12-13",
		"runtime": 124,
		"genre_ids": [
			28,
			12,
			9648,
			53
		],
		"hash": "2198587B35E17E8D2C5CC46E115CD32B78397ED4",
		"updated": "2021-09-19T08:41:19.334+00:00"
	},
	{
		"id": 226,
		"tmdb_id": 559,
		"imdb_id": "tt0413300",
		"title": "Người Nhện 3",
		"english_title": "Spider-Man 3",
		"backdrop_path": "/hAJ0Ql3pzOGyuB8y6hkCFCwxTo0.jpg",
		"imdb": 6.2,
		"release_date": "2007-05-01",
		"runtime": 139,
		"genre_ids": [
			14,
			28,
			12
		],
		"hash": "FE56BF80229C4D35A5E3DD4F12CA78945E91189E",
		"updated": "2021-09-19T10:09:12.732+00:00"
	},
	{
		"id": 235,
		"tmdb_id": 1268,
		"imdb_id": "tt0453451",
		"title": "Kì Nghỉ Của Mr. Bean",
		"english_title": "Mr. Bean's Holiday",
		"backdrop_path": "/mPLcGkZ1Kte0iMIfItXIqqGK1SE.jpg",
		"imdb": 6.4,
		"release_date": "2007-03-22",
		"runtime": 90,
		"genre_ids": [
			10751,
			35
		],
		"hash": "45CB801502647F5692EB4BD7B91E18899F064699",
		"updated": "2021-09-19T10:13:50.471+00:00"
	},
	{
		"id": 224,
		"tmdb_id": 9792,
		"imdb_id": "tt0454841",
		"title": "Ngọn Đồi Có Mắt",
		"english_title": "The Hills Have Eyes",
		"backdrop_path": "/fPD5VxlyhNr6ifQma3YonrsAAdu.jpg",
		"imdb": 6.4,
		"release_date": "2006-03-10",
		"runtime": 107,
		"genre_ids": [
			27,
			53
		],
		"hash": "4BCE30627C4FEB9E8866FEFD5C2030B38B32BC64",
		"updated": "2021-09-19T11:02:38.268+00:00"
	},
	{
		"id": 229,
		"tmdb_id": 2270,
		"imdb_id": "tt0486655",
		"title": "Ánh Sao Ma Thuật",
		"english_title": "Stardust",
		"backdrop_path": "/2AN6rjr07kBeN150ZpcZvhc6bNa.jpg",
		"imdb": 7.6,
		"release_date": "2007-08-09",
		"runtime": 127,
		"genre_ids": [
			12,
			14,
			10749,
			10751
		],
		"hash": "8181492D1CCCA6732FC654E78D6CA3E202786571",
		"updated": "2021-09-19T11:06:10.494+00:00"
	},
	{
		"id": 245,
		"tmdb_id": 5915,
		"imdb_id": "tt0758758",
		"title": "Về Nơi Hoang Dã",
		"english_title": "Into the Wild",
		"backdrop_path": "/dwmhBxUDGr6D2L2cXiOXIu4rA6C.jpg",
		"imdb": 8.1,
		"release_date": "2007-09-11",
		"runtime": 148,
		"genre_ids": [
			12,
			18
		],
		"hash": "24B49F4DB8E7F17EE3BAF9C42CF4E30E574C8E97",
		"updated": "2021-09-20T06:11:55.104+00:00"
	},
	{
		"id": 244,
		"tmdb_id": 13363,
		"imdb_id": "tt0756683",
		"title": "Người Bất Tử",
		"english_title": "The Man from Earth",
		"backdrop_path": "/ocJKXnsy1gtR3k3NmedpHFDhAN0.jpg",
		"imdb": 7.9,
		"release_date": "2007-06-10",
		"runtime": 87,
		"genre_ids": [
			878,
			18
		],
		"hash": "D0B9CE5D13922967AF70E8F2A0BE1A10A85DDF62",
		"updated": "2021-09-18T09:08:27.588+00:00"
	},
	{
		"id": 258,
		"tmdb_id": 675,
		"imdb_id": "tt0373889",
		"title": "Harry Potter và Hội Phượng Hoàng (5)",
		"english_title": "Harry Potter and the Order of the Phoenix",
		"backdrop_path": "/e6I6FDrpNQO4QbJxOziuTLWi4dh.jpg",
		"imdb": 7.5,
		"release_date": "2007-06-28",
		"runtime": 138,
		"genre_ids": [
			12,
			14,
			9648
		],
		"hash": "47B8246D2245615B754CC2F023F3AC646B9DEE6F",
		"updated": "2021-09-18T13:44:26.792+00:00"
	},
	{
		"id": 253,
		"tmdb_id": 298,
		"imdb_id": "tt0496806",
		"title": "Mười Ba Tên Cướp Thế Kỷ",
		"english_title": "Ocean's Thirteen",
		"backdrop_path": "/pEnAJAKcDILPZDjDoPzK91mNmRk.jpg",
		"imdb": 6.9,
		"release_date": "2007-06-06",
		"runtime": 122,
		"genre_ids": [
			80,
			53
		],
		"hash": "161CB6B6F6D594E9829B02A72254ADCA6A3F838B",
		"updated": "2021-09-19T03:03:42.662+00:00"
	},
	{
		"id": 257,
		"tmdb_id": 8363,
		"imdb_id": "tt0829482",
		"title": "Siêu Tệ Hại",
		"english_title": "Superbad",
		"backdrop_path": "/wRykg7tT35kmvKDAGzLkUpGV9cs.jpg",
		"imdb": 7.6,
		"release_date": "2007-03-20",
		"runtime": 113,
		"genre_ids": [
			35
		],
		"hash": "ECB51F617BD95E42C294D0C6961B12B3CA4F8D44",
		"updated": "2021-09-19T04:39:17.769+00:00"
	},
	{
		"id": 251,
		"tmdb_id": 35,
		"imdb_id": "tt0462538",
		"title": "The Simpsons Movie",
		"english_title": "The Simpsons Movie",
		"backdrop_path": "/pmwImNPFtRlXAkovmJ2MCX6f7KY.jpg",
		"imdb": 7.3,
		"release_date": "2007-07-25",
		"runtime": 87,
		"genre_ids": [
			16,
			35,
			10751
		],
		"hash": "2B0690CC856A35BF8C14CE66C60BCE299E128AF4",
		"updated": "2021-09-19T05:00:36.023+00:00"
	},
	{
		"id": 242,
		"tmdb_id": 6479,
		"imdb_id": "tt0480249",
		"title": "Tôi Là Huyền Thoại",
		"english_title": "I Am Legend",
		"backdrop_path": "/xHWB9SdYRFV3nw1O0iL6GTedQQY.jpg",
		"imdb": 7.2,
		"release_date": "2007-12-12",
		"runtime": 101,
		"genre_ids": [
			18,
			27,
			28,
			53,
			878
		],
		"hash": "86A06CDD072E34F2220D9FBAF587D635A4767AD7",
		"updated": "2021-09-19T05:01:53.603+00:00"
	},
	{
		"id": 246,
		"tmdb_id": 1858,
		"imdb_id": "tt0418279",
		"title": "Robot Đại Chiến",
		"english_title": "Transformers",
		"backdrop_path": "/9CWuiQzXTNSCveGROUUwMCvBT2Z.jpg",
		"imdb": 7,
		"release_date": "2007-06-27",
		"runtime": 144,
		"genre_ids": [
			12,
			878,
			28
		],
		"hash": "2EECC9C172B20F485F9AC812B380FFD1DD0C0499",
		"updated": "2021-09-19T05:11:30.338+00:00"
	},
	{
		"id": 261,
		"tmdb_id": 2454,
		"imdb_id": "tt0499448",
		"title": "Biên Niên Sử Narnia: Hoàng Tử Caspian",
		"english_title": "The Chronicles of Narnia: Prince Caspian",
		"backdrop_path": "/qZRg18VZqSb9vQ23lDJEn1kxQBi.jpg",
		"imdb": 6.5,
		"release_date": "2008-05-15",
		"runtime": 150,
		"genre_ids": [
			12,
			10751,
			14
		],
		"hash": "20749405DC26EA9D8E9F44298E3CC66A3215BDCE",
		"updated": "2021-09-19T05:25:31.026+00:00"
	},
	{
		"id": 249,
		"tmdb_id": 7737,
		"imdb_id": "tt0432021",
		"title": "Vùng Đất Quỷ Dữ 3: Tuyệt Diệt",
		"english_title": "Resident Evil: Extinction",
		"backdrop_path": "/km2KF7Fqz8FFN1EdyL17AxakiNe.jpg",
		"imdb": 6.3,
		"release_date": "2007-09-20",
		"runtime": 94,
		"genre_ids": [
			27,
			28,
			878
		],
		"hash": "F0B679490973C5962463EF527FEFE4B5D85B61BB",
		"updated": "2021-09-19T05:41:56.638+00:00"
	},
	{
		"id": 255,
		"tmdb_id": 4982,
		"imdb_id": "tt0765429",
		"title": "Gangster Mỹ",
		"english_title": "American Gangster",
		"backdrop_path": "/2FhjxswWp3SL5MuR0ZYwfFQIjRd.jpg",
		"imdb": 7.8,
		"release_date": "2007-11-02",
		"runtime": 157,
		"genre_ids": [
			18,
			80
		],
		"hash": "76A041E15063EFE88DE244742A58482430C41800",
		"updated": "2021-09-19T05:59:14.876+00:00"
	},
	{
		"id": 256,
		"tmdb_id": 38142,
		"imdb_id": "tt0983213",
		"title": "5 Centimet Trên Giây",
		"english_title": "5 Centimeters per Second",
		"backdrop_path": "/kGuBSPUCzOZOdNGurSHhbUe5KnT.jpg",
		"imdb": 7.6,
		"release_date": "2007-03-03",
		"runtime": 63,
		"genre_ids": [
			16,
			18,
			10749
		],
		"hash": "622AEC26133440960B78AADD680734AE863CC6CD",
		"updated": "2021-09-19T08:15:02.804+00:00"
	},
	{
		"id": 252,
		"tmdb_id": 4771,
		"imdb_id": "tt0452623",
		"title": "Đứa Bé Mất Tích",
		"english_title": "Gone Baby Gone",
		"backdrop_path": "/mcegChCNkTkLZ55q823p1oVwrYo.jpg",
		"imdb": 7.6,
		"release_date": "2007-06-06",
		"runtime": 113,
		"genre_ids": [
			80,
			18,
			9648
		],
		"hash": "D8EE2C093DED57ECDB9A2BCADAF94C7073A984BE",
		"updated": "2021-09-19T08:15:11.996+00:00"
	},
	{
		"id": 250,
		"tmdb_id": 6023,
		"imdb_id": "tt0431308",
		"title": "P.S. I Love You",
		"english_title": "P.S. I Love You",
		"backdrop_path": "/eNwgk7Dba0uPc9CUSfTe5ZOsHOD.jpg",
		"imdb": 7,
		"release_date": "2007-11-15",
		"runtime": 126,
		"genre_ids": [
			18,
			10749
		],
		"hash": "7EE17294D002D0841D37EE1ACEA03FA91DC5820F",
		"updated": "2021-09-19T08:25:39.509+00:00"
	},
	{
		"id": 264,
		"tmdb_id": 11253,
		"imdb_id": "tt0411477",
		"title": "Quỷ Đỏ 2: Binh Đoàn Địa Ngục",
		"english_title": "Hellboy II: The Golden Army",
		"backdrop_path": "/hKlzBzWRsVUwWRZZob0XmV6ewMo.jpg",
		"imdb": 7,
		"release_date": "2008-07-11",
		"runtime": 120,
		"genre_ids": [
			28,
			12,
			9648,
			14
		],
		"hash": "7F1F3DF2CB8BDA2E93EA713BED34AEA7F0894A8F",
		"updated": "2021-09-19T08:25:17.383+00:00"
	},
	{
		"id": 243,
		"tmdb_id": 1562,
		"imdb_id": "tt0463854",
		"title": "28 Tuần Sau",
		"english_title": "28 Weeks Later",
		"backdrop_path": "/p5z8ECO9QcOBfN5jpwZbjHMZOzx.jpg",
		"imdb": 7,
		"release_date": "2007-04-26",
		"runtime": 100,
		"genre_ids": [
			27,
			53,
			878
		],
		"hash": "84A74935AA5CE794D7159460E66BC58127181F2C",
		"updated": "2021-09-19T08:26:17.601+00:00"
	},
	{
		"id": 262,
		"tmdb_id": 13600,
		"imdb_id": "tt0970411",
		"title": "Thành Phố Dưới Lòng Đất",
		"english_title": "City of Ember",
		"backdrop_path": "/qCc1UOOtEzuLpBYT03TcJxASt63.jpg",
		"imdb": 6.5,
		"release_date": "2008-10-07",
		"runtime": 90,
		"genre_ids": [
			12,
			10751,
			14
		],
		"hash": "7465D52BAB9EB4B415E3E6289F4C8B6935132992",
		"updated": "2021-09-19T08:30:45.073+00:00"
	},
	{
		"id": 263,
		"tmdb_id": 14574,
		"imdb_id": "tt0914798",
		"title": "Cậu Bé Trong Bộ Đồ Ngủ Sọc",
		"english_title": "The Boy in the Striped Pyjamas",
		"backdrop_path": "/fZBmxa6gF7r9t7ZgKHGVkbeEx4l.jpg",
		"imdb": 7.8,
		"release_date": "2008-05-07",
		"runtime": 94,
		"genre_ids": [
			10752,
			18
		],
		"hash": "63B42E15F4647937085DFD68E3141628FB52BCED",
		"updated": "2021-09-19T08:41:54.541+00:00"
	},
	{
		"id": 254,
		"tmdb_id": 7979,
		"imdb_id": "tt0419887",
		"title": "Người Đua Diều",
		"english_title": "The Kite Runner",
		"backdrop_path": "/mN8L1gYgbLZW88jwj3ok2WO4UvE.jpg",
		"imdb": 7.6,
		"release_date": "2007-10-04",
		"runtime": 128,
		"genre_ids": [
			18
		],
		"hash": "31D8D89A5D45E22F19B9B6D951DC76A6BF2CED60",
		"updated": "2021-09-19T08:42:04.71+00:00"
	},
	{
		"id": 248,
		"tmdb_id": 1250,
		"imdb_id": "tt0259324",
		"title": "Ma Tốc Độ",
		"english_title": "Ghost Rider",
		"backdrop_path": "/hRfYauDt3eDtyiazRDFyErrBZnQ.jpg",
		"imdb": 5.3,
		"release_date": "2007-02-16",
		"runtime": 114,
		"genre_ids": [
			53,
			28,
			14
		],
		"hash": "8BF104F62C927EE170398B60067B5C0EC452B942",
		"updated": "2021-09-19T10:11:28.771+00:00"
	},
	{
		"id": 259,
		"tmdb_id": 15137,
		"imdb_id": "tt0923811",
		"title": "Đặc Vụ Không Gian: Không Đơn Độc",
		"english_title": "Evangelion: 1.0 You Are (Not) Alone",
		"backdrop_path": "/8PHZNGdEUFdrlQDDej5nYPnQyqC.jpg",
		"imdb": 7.7,
		"release_date": "2007-09-01",
		"runtime": 101,
		"genre_ids": [
			16,
			878,
			28,
			18
		],
		"hash": "a646f798141adc0c0576b56e0b54b7f96590058d",
		"updated": "2021-09-19T10:30:23.208+00:00"
	},
	{
		"id": 247,
		"tmdb_id": 5876,
		"imdb_id": "tt0884328",
		"title": "Quái Vật Sương Mù",
		"english_title": "The Mist",
		"backdrop_path": "/rkGmWWen1sk8qkCYvMLznnArLAo.jpg",
		"imdb": 7.1,
		"release_date": "2007-11-21",
		"runtime": 126,
		"genre_ids": [
			27,
			878,
			53
		],
		"hash": "169E44B34CD68CD5F1CFD29CEC76E165A8945FD6",
		"updated": "2021-11-09T01:51:01.955+00:00"
	},
	{
		"id": 265,
		"tmdb_id": 10681,
		"imdb_id": "tt0910970",
		"title": "Robot Biết Yêu",
		"english_title": "WALL·E",
		"backdrop_path": "/pjLdH5VIKirwVUIZ0iDisXoRGo4.jpg",
		"imdb": 8.4,
		"release_date": "2008-06-22",
		"runtime": 98,
		"genre_ids": [
			16,
			10751,
			878
		],
		"hash": "6687A51BB38802620E13542D9C50235039F939D1",
		"updated": "2021-09-16T02:55:29.949+00:00"
	},
	{
		"id": 285,
		"tmdb_id": 12405,
		"imdb_id": "tt1010048",
		"title": "Triệu Phú Khu Ổ Chuột",
		"english_title": "Slumdog Millionaire",
		"backdrop_path": "/uyK9mTM6EMPAG6XRJtzoeUV9K0f.jpg",
		"imdb": 8,
		"release_date": "2008-05-12",
		"runtime": 120,
		"genre_ids": [
			18,
			10749
		],
		"hash": "8689EB06DD5F744B7937BED04C3F8B9B44BBCF04",
		"updated": "2021-09-18T05:53:08.834+00:00"
	},
	{
		"id": 281,
		"tmdb_id": 1726,
		"imdb_id": "tt0371746",
		"title": "Người Sắt",
		"english_title": "Iron Man",
		"backdrop_path": "/dSiEOxFJM7D354lDv1zmVuoU5b0.jpg",
		"imdb": 7.9,
		"release_date": "2008-04-30",
		"runtime": 126,
		"genre_ids": [
			28,
			878,
			12
		],
		"hash": "71754637FD29B4BE433723A4A559086E2BC083DC",
		"updated": "2021-09-18T10:19:14.337+00:00"
	},
	{
		"id": 283,
		"tmdb_id": 1724,
		"imdb_id": "tt0800080",
		"title": "Người Khổng Lồ Xanh Phi Thường",
		"english_title": "The Incredible Hulk",
		"backdrop_path": "/nMdzpEGzPHDzHYwSnpn1pIeRANB.jpg",
		"imdb": 6.7,
		"release_date": "2008-06-12",
		"runtime": 114,
		"genre_ids": [
			878,
			28,
			12
		],
		"hash": "E4AB118FC83D62E7C330CC353DBD8E12AFBFBB5E",
		"updated": "2021-09-18T12:52:24.015+00:00"
	},
	{
		"id": 268,
		"tmdb_id": 10764,
		"imdb_id": "tt0830515",
		"title": "Điệp Viên 007: Định Mức Khuây Khỏa",
		"english_title": "Quantum of Solace",
		"backdrop_path": "/55QPBgw0W2SPTWtSvCn4l7KTI1.jpg",
		"imdb": 6.6,
		"release_date": "2008-10-31",
		"runtime": 106,
		"genre_ids": [
			12,
			28,
			53,
			80
		],
		"hash": "FC5F8183FA703B727CEDC121EF8E259AD48D3F24",
		"updated": "2021-09-19T00:47:32.278+00:00"
	},
	{
		"id": 282,
		"tmdb_id": 13223,
		"imdb_id": "tt1205489",
		"title": "Ngọt và Đắng",
		"english_title": "Gran Torino",
		"backdrop_path": "/2t82UwR1OtqBrDkbMMQRiRpTyi8.jpg",
		"imdb": 8.1,
		"release_date": "2008-12-09",
		"runtime": 116,
		"genre_ids": [
			18
		],
		"hash": "5B9761450A89F98FF10D4424C2914B5CEBF7655F",
		"updated": "2021-09-19T01:24:02.61+00:00"
	},
	{
		"id": 270,
		"tmdb_id": 8681,
		"imdb_id": "tt0936501",
		"title": "Cưỡng Đoạt",
		"english_title": "Taken",
		"backdrop_path": "/ltHZmANZzIw6KqfVPyPbL7GvrCt.jpg",
		"imdb": 7.8,
		"release_date": "2008-02-18",
		"runtime": 94,
		"genre_ids": [
			28,
			53
		],
		"hash": "3526E87D5D6B24F4F8A0B1A9575F7FACEE81DC3B",
		"updated": "2021-09-19T01:24:50.222+00:00"
	},
	{
		"id": 288,
		"tmdb_id": 4922,
		"imdb_id": "tt0421715",
		"title": "Cuộc Đời Kỳ Lạ Của Benjamin",
		"english_title": "The Curious Case of Benjamin Button",
		"backdrop_path": "/6ZvgyKPAatpcHbVsKknly4K4zC6.jpg",
		"imdb": 7.8,
		"release_date": "2008-12-25",
		"runtime": 166,
		"genre_ids": [
			18,
			14,
			10749
		],
		"hash": "5cf45b188ec8b851027ff427b9690ea10f04e4a0",
		"updated": "2021-09-19T03:02:57.621+00:00"
	},
	{
		"id": 277,
		"tmdb_id": 7191,
		"imdb_id": "tt1060277",
		"title": "Thảm Họa Diệt Vong",
		"english_title": "Cloverfield",
		"backdrop_path": "/sruh4vzLMVpoyOaQB06jqNV9WXP.jpg",
		"imdb": 7,
		"release_date": "2008-01-15",
		"runtime": 85,
		"genre_ids": [
			28,
			53,
			878
		],
		"hash": "F23C6513F6F3802252EDE91EBFA9994A635A1E63",
		"updated": "2021-09-19T05:21:12.022+00:00"
	},
	{
		"id": 275,
		"tmdb_id": 13387,
		"imdb_id": "tt1129442",
		"title": "Người Vận Chuyển 3",
		"english_title": "Transporter 3",
		"backdrop_path": "/AnQNsdhnqpxC0GuwEgYzFnZ02RM.jpg",
		"imdb": 6.1,
		"release_date": "2008-11-26",
		"runtime": 104,
		"genre_ids": [
			28,
			12,
			53,
			80
		],
		"hash": "C3806F45CBDCA5EE13C15C527C6564157B3522D7",
		"updated": "2021-09-19T05:39:02.125+00:00"
	},
	{
		"id": 287,
		"tmdb_id": 11917,
		"imdb_id": "tt1132626",
		"title": "Lưỡi Cưa 5",
		"english_title": "Saw V",
		"backdrop_path": "/mYUTH5WS91X9oQQ8msAt3Zh69Sc.jpg",
		"imdb": 5.8,
		"release_date": "2008-10-23",
		"runtime": 95,
		"genre_ids": [
			27,
			53,
			80
		],
		"hash": "3EBA5704C7ABC4C30152413D3AF7336ACED5D3BE",
		"updated": "2021-09-19T07:54:00.52+00:00"
	},
	{
		"id": 267,
		"tmdb_id": 9502,
		"imdb_id": "tt0441773",
		"title": "Công Phu Gấu Trúc",
		"english_title": "Kung Fu Panda",
		"backdrop_path": "/e45Z6QREa3PptqUfApiqaMoK2dq.jpg",
		"imdb": 7.6,
		"release_date": "2008-06-04",
		"runtime": 90,
		"genre_ids": [
			28,
			12,
			16,
			10751,
			35
		],
		"hash": "DEAFB8761DDBC8F4287858A43C669E0BFD017CB7",
		"updated": "2021-09-19T08:04:25.363+00:00"
	},
	{
		"id": 269,
		"tmdb_id": 12113,
		"imdb_id": "tt0758774",
		"title": "Điệp Vụ Cá Đuối",
		"english_title": "Body of Lies",
		"backdrop_path": "/1P6NCYlisAbGCw302aHY6EiJPh9.jpg",
		"imdb": 7.1,
		"release_date": "2008-10-10",
		"runtime": 128,
		"genre_ids": [
			28,
			18,
			53
		],
		"hash": "E0373E6456AEAE4D60FB2D74340CF46BAB8B3C84",
		"updated": "2021-09-19T08:16:06.896+00:00"
	},
	{
		"id": 272,
		"tmdb_id": 12162,
		"imdb_id": "tt0887912",
		"title": "Chiến Dịch Sói Sa Mạc",
		"english_title": "The Hurt Locker",
		"backdrop_path": "/g4n70kKU1fuAOVGqfwdumybGnfg.jpg",
		"imdb": 7.5,
		"release_date": "2008-10-10",
		"runtime": 131,
		"genre_ids": [
			18,
			53,
			10752
		],
		"hash": "C3A2F07A3BB640BF5908988DBDA986C34A09761D",
		"updated": "2021-09-19T08:16:25.583+00:00"
	},
	{
		"id": 271,
		"tmdb_id": 8836,
		"imdb_id": "tt0443701",
		"title": "Hồ Sơ Tuyệt Mật: Tôi Muốn Tin",
		"english_title": "The X Files: I Want to Believe",
		"backdrop_path": "/iTFztn4JWun1N0sjzwltaYj7GEj.jpg",
		"imdb": 5.9,
		"release_date": "2008-07-24",
		"runtime": 104,
		"genre_ids": [
			18,
			9648,
			878,
			53
		],
		"hash": "5AAAA72130E72AF2192C9B6CC76684E90C8A5779",
		"updated": "2021-09-19T08:17:34.965+00:00"
	},
	{
		"id": 276,
		"tmdb_id": 8055,
		"imdb_id": "tt0976051",
		"title": "Tình Yêu Trái Cấm",
		"english_title": "The Reader",
		"backdrop_path": "/hm6HLfMJow36kN2UitOObBLNX7y.jpg",
		"imdb": 7.6,
		"release_date": "2008-01-02",
		"runtime": 124,
		"genre_ids": [
			18,
			10749
		],
		"hash": "1486851663024C291EFA771E9CCEE3DF1B6B5362",
		"updated": "2021-09-19T08:18:29.466+00:00"
	},
	{
		"id": 280,
		"tmdb_id": 1266,
		"imdb_id": "tt0421073",
		"title": "Street Kings",
		"english_title": "Street Kings",
		"backdrop_path": "/3MOZAuzRzVBafFEboQBcVE7mfWt.jpg",
		"imdb": 6.8,
		"release_date": "2008-04-10",
		"runtime": 109,
		"genre_ids": [
			28,
			80,
			18,
			53
		],
		"hash": "E00154F8DBA38AC0446569D43975A0BFE620F597",
		"updated": "2021-09-19T08:26:41.406+00:00"
	},
	{
		"id": 274,
		"tmdb_id": 8065,
		"imdb_id": "tt0478087",
		"title": "Xì Dách",
		"english_title": "21",
		"backdrop_path": "/zqeO7ksCq9HBoROxyvfeYaUOJMr.jpg",
		"imdb": 6.8,
		"release_date": "2008-03-27",
		"runtime": 123,
		"genre_ids": [
			18,
			80
		],
		"hash": "5F12DF2DEE2297D159CDAD47F8FA729268ED1821",
		"updated": "2021-09-19T08:29:43.987+00:00"
	},
	{
		"id": 286,
		"tmdb_id": 8328,
		"imdb_id": "tt1023481",
		"title": "Bước Nhảy Đường Phố 2: Trên Những Con Đường",
		"english_title": "Step Up 2: The Streets",
		"backdrop_path": "/wH8orcVOxjmJbmnKwlIzlrHiigt.jpg",
		"imdb": 6.2,
		"release_date": "2008-02-14",
		"runtime": 98,
		"genre_ids": [
			10402,
			18,
			10749
		],
		"hash": "755517A4C5CF04E8D971A8AD24C08ECFD910F733",
		"updated": "2021-09-19T08:40:29.143+00:00"
	},
	{
		"id": 284,
		"tmdb_id": 7555,
		"imdb_id": "tt0462499",
		"title": "Chiến Binh Rambo 4",
		"english_title": "Rambo",
		"backdrop_path": "/j5Za0ZWdMdFUWXrh3p9sxs2TEVh.jpg",
		"imdb": 7,
		"release_date": "2008-01-24",
		"runtime": 92,
		"genre_ids": [
			28,
			53
		],
		"hash": "A3335A907D6E3AD6F2577BB60D02C4529B13291E",
		"updated": "2021-09-19T08:30:12.987+00:00"
	},
	{
		"id": 266,
		"tmdb_id": 12429,
		"imdb_id": "tt0876563",
		"title": "Cô Bé Người Cá Ponyo",
		"english_title": "Ponyo",
		"backdrop_path": "/efZ10EscERir1yU60KsSjLNa6ZJ.jpg",
		"imdb": 7.7,
		"release_date": "2008-07-19",
		"runtime": 100,
		"genre_ids": [
			16,
			10751
		],
		"hash": "3fd9866a416a872ac02e85a0907014fcc6e41c52",
		"updated": "2021-09-19T10:56:29.363+00:00"
	},
	{
		"id": 278,
		"tmdb_id": 4944,
		"imdb_id": "tt0887883",
		"title": "Hãy Đốt Sau Khi Đọc",
		"english_title": "Burn After Reading",
		"backdrop_path": "/m3kVkc5FCpVLo7gwHKbJy0yNSj3.jpg",
		"imdb": 7,
		"release_date": "2008-09-05",
		"runtime": 96,
		"genre_ids": [
			35,
			18
		],
		"hash": "B55CC9E26250A65FB1915DFA4DE6EA8D74551DBA",
		"updated": "2021-09-19T11:05:33.147+00:00"
	},
	{
		"id": 273,
		"tmdb_id": 14756,
		"imdb_id": "tt1220719",
		"title": "Diệp Vấn 1",
		"english_title": "Ip Man",
		"backdrop_path": "/hBMZVHzdyaDohA0u5QKEJO46JFc.jpg",
		"imdb": 8,
		"release_date": "2008-12-12",
		"runtime": 106,
		"genre_ids": [
			18,
			28,
			36
		],
		"hash": "B17B96CA29288BBF7B728042034DD6EDB45DDFC7",
		"updated": "2021-09-19T11:05:59+00:00"
	},
	{
		"id": 290,
		"tmdb_id": 16869,
		"imdb_id": "tt0361748",
		"title": "Định Mệnh",
		"english_title": "Inglourious Basterds",
		"backdrop_path": "/euyNvGjxi9JO621XnsEhdgM3U3v.jpg",
		"imdb": 8.3,
		"release_date": "2009-08-18",
		"runtime": 153,
		"genre_ids": [
			18,
			28,
			53,
			10752
		],
		"hash": "EE309632268D960122BE489F312AEAB87548D723",
		"updated": "2021-09-16T04:30:56.368+00:00"
	},
	{
		"id": 301,
		"tmdb_id": 28178,
		"imdb_id": "tt1028532",
		"title": "Chú Chó Trung Thành",
		"english_title": "Hachi: A Dog's Tale",
		"backdrop_path": "/rI4syaxGpr1r4Wzvbj4ASiJGayE.jpg",
		"imdb": 8.1,
		"release_date": "2009-06-13",
		"runtime": 93,
		"genre_ids": [
			18,
			10751
		],
		"hash": "8B5DD3626040EF7B6B4DF4957B383BE01ED545E7",
		"updated": "2021-09-17T12:34:27.747+00:00"
	},
	{
		"id": 292,
		"tmdb_id": 22843,
		"imdb_id": "tt0860906",
		"title": "Đặc Vụ Không Gian: Không Lùi Bước",
		"english_title": "Evangelion: 2.0 You Can (Not) Advance",
		"backdrop_path": "/yWU7rZNZsgG2kgr38aqPnOvlZS6.jpg",
		"imdb": 8,
		"release_date": "2009-06-26",
		"runtime": 112,
		"genre_ids": [
			16,
			878,
			28,
			18
		],
		"hash": "a7fe667ab6a254db5d5492869600f51b49f44725",
		"updated": "2021-09-18T05:54:15.251+00:00"
	},
	{
		"id": 308,
		"tmdb_id": 17654,
		"imdb_id": "tt1136608",
		"title": "Khu Vực 9",
		"english_title": "District 9",
		"backdrop_path": "/r2oodsTsfEHtJBAcSxh3NA74KwJ.jpg",
		"imdb": 7.9,
		"release_date": "2009-08-05",
		"runtime": 112,
		"genre_ids": [
			878
		],
		"hash": "EB345737E399BAB20B0CC0AFF8663B01BE3F122D",
		"updated": "2021-09-18T10:21:49.952+00:00"
	},
	{
		"id": 297,
		"tmdb_id": 767,
		"imdb_id": "tt0417741",
		"title": "Harry Potter và Hoàng Tử Lai (6)",
		"english_title": "Harry Potter and the Half-Blood Prince",
		"backdrop_path": "/fc5P2FX8cvKn6l8O27aKepnK3TT.jpg",
		"imdb": 7.6,
		"release_date": "2009-07-07",
		"runtime": 153,
		"genre_ids": [
			12,
			14
		],
		"hash": "661F29D8B536AE69919BC96FAFFF553D4A698460",
		"updated": "2021-09-18T13:44:44.792+00:00"
	},
	{
		"id": 302,
		"tmdb_id": 18785,
		"imdb_id": "tt1119646",
		"title": "Ba Chàng Ngự Lâm",
		"english_title": "The Hangover",
		"backdrop_path": "/cyEAb9it7G9Atwc5ldUZ0F0iN7c.jpg",
		"imdb": 7.7,
		"release_date": "2009-06-02",
		"runtime": 100,
		"genre_ids": [
			35
		],
		"hash": "47EE25CF294184B05868C67134FA5C6AB41E34BD",
		"updated": "2021-09-19T01:34:57.851+00:00"
	},
	{
		"id": 303,
		"tmdb_id": 19913,
		"imdb_id": "tt1022603",
		"title": "(500) Days of Summer",
		"english_title": "(500) Days of Summer",
		"backdrop_path": "/6dEkaV84ja2zJhJxeClcODhCIzC.jpg",
		"imdb": 7.7,
		"release_date": "2009-07-17",
		"runtime": 95,
		"genre_ids": [
			35,
			18,
			10749
		],
		"hash": "1dc2db22828e55177bff1aa8e0fcbe9b8662ab33",
		"updated": "2021-09-19T04:35:35.759+00:00"
	},
	{
		"id": 300,
		"tmdb_id": 13183,
		"imdb_id": "tt0409459",
		"title": "Người Hùng Báo Thù",
		"english_title": "Watchmen",
		"backdrop_path": "/1n75q3JDPVCEmJoxVpRopeEuP8J.jpg",
		"imdb": 7.6,
		"release_date": "2009-03-05",
		"runtime": 163,
		"genre_ids": [
			28,
			9648,
			878
		],
		"hash": "608F2DA6CA661CDA193803FB9471FF833C04F5CC",
		"updated": "2021-09-19T04:36:45.012+00:00"
	},
	{
		"id": 295,
		"tmdb_id": 22794,
		"imdb_id": "tt0844471",
		"title": "Cơn Mưa Thịt Viên",
		"english_title": "Cloudy with a Chance of Meatballs",
		"backdrop_path": "/4lBK7EjGqFkTlusxxWy3sCHBhUH.jpg",
		"imdb": 6.9,
		"release_date": "2009-09-17",
		"runtime": 90,
		"genre_ids": [
			16,
			35,
			10751
		],
		"hash": "8EA78B369DDD048FA61A4CCEABBFA6B56D675146",
		"updated": "2021-09-19T07:52:19.951+00:00"
	},
	{
		"id": 310,
		"tmdb_id": 8373,
		"imdb_id": "tt1055369",
		"title": "Robot Đại Chiến 2: Bại Binh Phục Hận",
		"english_title": "Transformers: Revenge of the Fallen",
		"backdrop_path": "/ooJgtnmxOmsA6XdJFZzMo4tfQDX.jpg",
		"imdb": 6,
		"release_date": "2009-06-19",
		"runtime": 149,
		"genre_ids": [
			878,
			28,
			12
		],
		"hash": "6160F5144695F937E7E8B751374BB76F41B8A039",
		"updated": "2021-09-19T05:11:49.722+00:00"
	},
	{
		"id": 312,
		"tmdb_id": 22804,
		"imdb_id": "tt1233227",
		"title": "Lưỡi Cưa 6",
		"english_title": "Saw VI",
		"backdrop_path": "/vVLwvYvMQ30MIbvvrCfUdBNWSNR.jpg",
		"imdb": 6,
		"release_date": "2009-10-22",
		"runtime": 96,
		"genre_ids": [
			27,
			9648
		],
		"hash": "90194CDADF77F6A0E1141670F61BAADA17EA8B37",
		"updated": "2021-09-19T07:54:10.84+00:00"
	},
	{
		"id": 294,
		"tmdb_id": 12244,
		"imdb_id": "tt0472033",
		"title": "Chiến Binh Số 9",
		"english_title": "9",
		"backdrop_path": "/jjz67gY6K8WAGXDetNh04OeY32s.jpg",
		"imdb": 7.1,
		"release_date": "2009-08-19",
		"runtime": 79,
		"genre_ids": [
			28,
			12,
			16,
			878,
			53
		],
		"hash": "3EEAC644136E9EFB71B8C905D9EF8B4D7283C357",
		"updated": "2021-09-19T08:00:52.191+00:00"
	},
	{
		"id": 311,
		"tmdb_id": 18240,
		"imdb_id": "tt1041829",
		"title": "Lời Cầu Hôn",
		"english_title": "The Proposal",
		"backdrop_path": "/8QOXqaygFpG2yYe63NEwkEKnFJK.jpg",
		"imdb": 6.7,
		"release_date": "2009-06-01",
		"runtime": 108,
		"genre_ids": [
			35,
			10749,
			18
		],
		"hash": "9F01D79B1184206BFA5D8266319822F074BA9AC4",
		"updated": "2021-09-19T08:06:05.455+00:00"
	},
	{
		"id": 293,
		"tmdb_id": 29917,
		"imdb_id": "tt1258197",
		"title": "Bài Kiểm Tra Bí Ẩn",
		"english_title": "Exam",
		"backdrop_path": "/y2pyCpQH0FJjRctnyGA7tldOWU0.jpg",
		"imdb": 6.8,
		"release_date": "2009-06-19",
		"runtime": 101,
		"genre_ids": [
			53,
			9648
		],
		"hash": "F33BC6109E6B818A2FD7B828C87EAD45F0A22D98",
		"updated": "2021-09-19T08:15:53.842+00:00"
	},
	{
		"id": 309,
		"tmdb_id": 19994,
		"imdb_id": "tt1131734",
		"title": "Sức Nóng của Jennifer",
		"english_title": "Jennifer's Body",
		"backdrop_path": "/4BgLnYsQZxgXsUpDGEIBjPEWgZl.jpg",
		"imdb": 5.3,
		"release_date": "2009-09-18",
		"runtime": 102,
		"genre_ids": [
			35,
			27
		],
		"hash": "7CB21885766B247BB2D9BAA6E2289A8B516B9B39",
		"updated": "2021-09-19T08:27:15.724+00:00"
	},
	{
		"id": 296,
		"tmdb_id": 28874,
		"imdb_id": "tt1474276",
		"title": "Cuộc Chiến Mùa Hè",
		"english_title": "Summer Wars",
		"backdrop_path": "/4UjlSaCiKmLkFCfWEatyfXzP9mz.jpg",
		"imdb": 7.5,
		"release_date": "2009-08-01",
		"runtime": 114,
		"genre_ids": [
			16
		],
		"hash": "c519f831f772d4e7a651b108be4c84e2ddc8a62a",
		"updated": "2021-12-24T03:04:10.287+00:00"
	},
	{
		"id": 298,
		"tmdb_id": 13811,
		"imdb_id": "tt0448011",
		"title": "Hỗn Số Tử Thần",
		"english_title": "Knowing",
		"backdrop_path": "/eO9qe1N1euXBqv9OZNKAaoQLb03.jpg",
		"imdb": 6.2,
		"release_date": "2009-03-19",
		"runtime": 121,
		"genre_ids": [
			28,
			12,
			18,
			9648,
			878,
			53
		],
		"hash": "D5F9917B9A288B3CB898581C8A733FFFA420E264",
		"updated": "2021-09-19T08:35:31.488+00:00"
	},
	{
		"id": 306,
		"tmdb_id": 22832,
		"imdb_id": "tt1186367",
		"title": "Ninja Sát Thủ",
		"english_title": "Ninja Assassin",
		"backdrop_path": "/1CzNrcm0ooPX3W41svqvv4Y23jO.jpg",
		"imdb": 6.3,
		"release_date": "2009-09-29",
		"runtime": 99,
		"genre_ids": [
			28,
			53
		],
		"hash": "7DFE7F45D723A3649BBE3C661B3FB99E9A96B7B3",
		"updated": "2021-09-19T08:38:00.588+00:00"
	},
	{
		"id": 305,
		"tmdb_id": 14869,
		"imdb_id": "tt1046173",
		"title": "Biệt Đội G.I. Joe: Cuộc Chiến Mãng Xà",
		"english_title": "G.I. Joe: The Rise of Cobra",
		"backdrop_path": "/fVjExMOW65ssQoUxO57t6Tvkxnl.jpg",
		"imdb": 5.8,
		"release_date": "2009-08-04",
		"runtime": 118,
		"genre_ids": [
			12,
			28,
			53,
			878
		],
		"hash": "25E69E8A89223E745A2582B57AE8229D31CB45DD",
		"updated": "2021-09-19T08:38:12.571+00:00"
	},
	{
		"id": 304,
		"tmdb_id": 21208,
		"imdb_id": "tt1148204",
		"title": "Orphan",
		"english_title": "Orphan",
		"backdrop_path": "/uxyR7XvYzFBJg67ikSN5E12fI9x.jpg",
		"imdb": 7,
		"release_date": "2009-07-24",
		"runtime": 123,
		"genre_ids": [
			27,
			53,
			9648
		],
		"hash": "792E3ECE09C0853535F638A78BAECDC341C5A054",
		"updated": "2021-09-19T10:10:15.174+00:00"
	},
	{
		"id": 291,
		"tmdb_id": 31011,
		"imdb_id": "tt0485947",
		"title": "Ngài Không Ai Cả",
		"english_title": "Mr. Nobody",
		"backdrop_path": "/3dwoJxU76bxdpA7LMUc26DUQBeL.jpg",
		"imdb": 7.8,
		"release_date": "2009-11-06",
		"runtime": 141,
		"genre_ids": [
			878,
			18,
			10749,
			14
		],
		"hash": "4C632CEF8092AFE521FF623C0299175165C07DF9",
		"updated": "2022-01-02T05:22:14.662+00:00"
	},
	{
		"id": 289,
		"tmdb_id": 18438,
		"imdb_id": "tt1499666",
		"title": "Lạc giữa cuộc đời",
		"english_title": "Castaway on the Moon",
		"backdrop_path": "/q3cOyhojgMmgFjvLoyKDY8W3GP2.jpg",
		"imdb": 8.1,
		"release_date": "2009-05-14",
		"runtime": 119,
		"genre_ids": [
			18,
			35,
			10749
		],
		"hash": "7738B65C130A8146F270FC2415513BF612FEB11C",
		"updated": "2021-09-19T10:13:59.792+00:00"
	},
	{
		"id": 307,
		"tmdb_id": 19995,
		"imdb_id": "tt0499549",
		"title": "Avatar",
		"english_title": "Avatar",
		"backdrop_path": "/r0yofr8WB8c3AQiiGeDkvG19nLJ.jpg",
		"imdb": 7.8,
		"release_date": "2009-12-10",
		"runtime": 162,
		"genre_ids": [
			28,
			12,
			14,
			878
		],
		"hash": "539390D341F8C18400052ED905F77E48D6EBE40E",
		"updated": "2021-09-21T01:51:06.725+00:00"
	},
	{
		"id": 320,
		"tmdb_id": 24238,
		"imdb_id": "tt0978762",
		"title": "Mary Và Max",
		"english_title": "Mary and Max",
		"backdrop_path": "/fylYRBd05gO4Zd7UWIKJp1ebFTd.jpg",
		"imdb": 8.1,
		"release_date": "2009-02-09",
		"runtime": 92,
		"genre_ids": [
			16,
			35,
			18
		],
		"hash": "03EF6E2BEB24530C681C6E3B8A83CA431B8044C4",
		"updated": "2021-09-17T12:34:50.883+00:00"
	},
	{
		"id": 330,
		"tmdb_id": 10191,
		"imdb_id": "tt0892769",
		"title": "Bí Kíp Luyện Rồng",
		"english_title": "How to Train Your Dragon",
		"backdrop_path": "/pHHScFZhrUejzmWc6smRrfCoNBz.jpg",
		"imdb": 8.1,
		"release_date": "2010-03-10",
		"runtime": 98,
		"genre_ids": [
			14,
			12,
			16,
			10751
		],
		"hash": "864AF2C28C24E1D0A598A03D83F15C6A7E6191D7",
		"updated": "2021-09-17T12:35:36.161+00:00"
	},
	{
		"id": 324,
		"tmdb_id": 17431,
		"imdb_id": "tt1182345",
		"title": "Mặt Trăng",
		"english_title": "Moon",
		"backdrop_path": "/mZbKXQAe0TBkIJfbh6fyE0EPAvt.jpg",
		"imdb": 7.9,
		"release_date": "2009-06-12",
		"runtime": 97,
		"genre_ids": [
			878,
			18
		],
		"hash": "24D340B6CA51A47714C34B204982AB12892A8C34",
		"updated": "2021-09-18T10:22:25.534+00:00"
	},
	{
		"id": 321,
		"tmdb_id": 534,
		"imdb_id": "tt0438488",
		"title": "Kẻ Hủy Diệt 4: Cứu Rỗi",
		"english_title": "Terminator Salvation",
		"backdrop_path": "/44GSD2G1ujXgYpOl5N2lKA3amES.jpg",
		"imdb": 6.5,
		"release_date": "2009-05-20",
		"runtime": 115,
		"genre_ids": [
			28,
			878,
			53
		],
		"hash": "D9CDC859A739751D8104847ACD1914AD5D8BA0F8",
		"updated": "2021-09-18T13:16:42.358+00:00"
	},
	{
		"id": 322,
		"tmdb_id": 2080,
		"imdb_id": "tt0458525",
		"title": "Dị Nhân 4: Nguồn Gốc Người Sói",
		"english_title": "X-Men Origins: Wolverine",
		"backdrop_path": "/b0SJEOfnPhcosTFWM6bjr6QBZgV.jpg",
		"imdb": 6.6,
		"release_date": "2009-04-28",
		"runtime": 107,
		"genre_ids": [
			12,
			28,
			53,
			878
		],
		"hash": "6B586ABEFDB2EFAF2F125103BDE1E7665742F059",
		"updated": "2021-09-18T13:35:32.855+00:00"
	},
	{
		"id": 318,
		"tmdb_id": 13475,
		"imdb_id": "tt0796366",
		"title": "Du Hành Giữa Các Vì Sao",
		"english_title": "Star Trek",
		"backdrop_path": "/poSVFa61vWSCdl6PXthOvoCY6E0.jpg",
		"imdb": 7.9,
		"release_date": "2009-05-06",
		"runtime": 127,
		"genre_ids": [
			878,
			28,
			12
		],
		"hash": "22F6161C997DB8FBD076B2C94B3154AD67EA9960",
		"updated": "2021-09-19T01:24:15.627+00:00"
	},
	{
		"id": 337,
		"tmdb_id": 20352,
		"imdb_id": "tt1323594",
		"title": "Kẻ Cắp Mặt Trăng",
		"english_title": "Despicable Me",
		"backdrop_path": "/rh59uhffSeCGnVKKncSBZJHXf8R.jpg",
		"imdb": 7.6,
		"release_date": "2010-07-08",
		"runtime": 95,
		"genre_ids": [
			10751,
			16,
			35
		],
		"hash": "83CBAA4E70FB9A068D4017424B9885DAE2B605F4",
		"updated": "2021-09-19T04:40:39.529+00:00"
	},
	{
		"id": 314,
		"tmdb_id": 13804,
		"imdb_id": "tt1013752",
		"title": "Quá Nhanh Quá Nguy Hiểm 4",
		"english_title": "Fast & Furious",
		"backdrop_path": "/y128wfjX2F5zM62md4Sp3d59jVD.jpg",
		"imdb": 6.6,
		"release_date": "2009-04-02",
		"runtime": 107,
		"genre_ids": [
			28,
			80,
			18,
			53
		],
		"hash": "2A3019130F038DCA73ADC01D8CC4E920998B2DE1",
		"updated": "2021-09-19T04:59:24.926+00:00"
	},
	{
		"id": 331,
		"tmdb_id": 37735,
		"imdb_id": "tt1282140",
		"title": "Cô Nàng Lẳng Lơ",
		"english_title": "Easy A",
		"backdrop_path": "/fOpWYAd37v5Lp4Zal0ZphRNgRuU.jpg",
		"imdb": 7,
		"release_date": "2010-09-16",
		"runtime": 93,
		"genre_ids": [
			35
		],
		"hash": "705D6148E39505922B25EDB7EC96F01DAB9B6ADB",
		"updated": "2021-09-19T05:20:58.668+00:00"
	},
	{
		"id": 326,
		"tmdb_id": 27578,
		"imdb_id": "tt1320253",
		"title": "Biệt Đội Đánh Thuê",
		"english_title": "The Expendables",
		"backdrop_path": "/hZYznL33GFuCmTlqQrgkZXtLaSW.jpg",
		"imdb": 6.5,
		"release_date": "2010-08-03",
		"runtime": 103,
		"genre_ids": [
			53,
			12,
			28
		],
		"hash": "ED1A2EB6455A4C7E2A04D82EEF96317EE694323B",
		"updated": "2021-09-19T05:49:49.559+00:00"
	},
	{
		"id": 334,
		"tmdb_id": 20504,
		"imdb_id": "tt1037705",
		"title": "Cuốn Sách Của Eli",
		"english_title": "The Book of Eli",
		"backdrop_path": "/mBEp3qg9JMpmZBBpBjfMXXUcTPG.jpg",
		"imdb": 6.9,
		"release_date": "2010-01-11",
		"runtime": 118,
		"genre_ids": [
			28,
			53,
			878
		],
		"hash": "D0DF0005D6CC9BB7BB6C654CA4E05AE73C8D83DD",
		"updated": "2021-09-19T05:26:00.498+00:00"
	},
	{
		"id": 332,
		"tmdb_id": 27576,
		"imdb_id": "tt0944835",
		"title": "Điệp Viên Salt",
		"english_title": "Salt",
		"backdrop_path": "/wtnpZk946MkhTZaSAEaLxe5H4Ro.jpg",
		"imdb": 6.4,
		"release_date": "2010-07-21",
		"runtime": 100,
		"genre_ids": [
			28,
			9648,
			53
		],
		"hash": "F3E94EB9238F3AE618616B249A92C3EB136BE294",
		"updated": "2021-09-19T06:17:14.357+00:00"
	},
	{
		"id": 313,
		"tmdb_id": 10528,
		"imdb_id": "tt0988045",
		"title": "Thám Tử Sherlock Holmes",
		"english_title": "Sherlock Holmes",
		"backdrop_path": "/2MOedb6UbfBaofIkFX99kRsotL2.jpg",
		"imdb": 7.6,
		"release_date": "2009-12-23",
		"runtime": 129,
		"genre_ids": [
			28,
			12,
			80,
			9648
		],
		"hash": "5CE06B786378D8287128D83E6D7CBEBB06F8800F",
		"updated": "2021-09-19T07:51:41.3+00:00"
	},
	{
		"id": 327,
		"tmdb_id": 49018,
		"imdb_id": "tt1591095",
		"title": "Quỷ Quyệt",
		"english_title": "Insidious",
		"backdrop_path": "/zs1lbJI2jt3CYvvMFadAL12i4nB.jpg",
		"imdb": 6.8,
		"release_date": "2010-09-13",
		"runtime": 103,
		"genre_ids": [
			27,
			53
		],
		"hash": "9BB3B486252E8A77B5991522261FE384A208C0A1",
		"updated": "2021-09-19T07:57:38.927+00:00"
	},
	{
		"id": 315,
		"tmdb_id": 11322,
		"imdb_id": "tt1152836",
		"title": "Kẻ Thù Quốc Gia",
		"english_title": "Public Enemies",
		"backdrop_path": "/zB5WqDcErjIF5oLLW1iVge7qWcF.jpg",
		"imdb": 7,
		"release_date": "2009-07-01",
		"runtime": 140,
		"genre_ids": [
			80,
			18,
			28,
			36
		],
		"hash": "1C535D0ACBC9AC385E2331324252B361FD588855",
		"updated": "2021-09-19T08:02:50.305+00:00"
	},
	{
		"id": 317,
		"tmdb_id": 22803,
		"imdb_id": "tt1197624",
		"title": "Công Lý Báo Thù",
		"english_title": "Law Abiding Citizen",
		"backdrop_path": "/5tNuiroKCZKpumvkMy0rZbkUhum.jpg",
		"imdb": 7.4,
		"release_date": "2009-10-15",
		"runtime": 109,
		"genre_ids": [
			18,
			80,
			53
		],
		"hash": "A255EF72C317C0701CFEDD1141EB4AE7889D85E5",
		"updated": "2021-09-19T08:05:16.864+00:00"
	},
	{
		"id": 333,
		"tmdb_id": 42188,
		"imdb_id": "tt1334260",
		"title": "Mãi Đừng Xa Tôi",
		"english_title": "Never Let Me Go",
		"backdrop_path": "/uTANX7tucisiuU7Har17OppKHUM.jpg",
		"imdb": 7.1,
		"release_date": "2010-09-15",
		"runtime": 104,
		"genre_ids": [
			18,
			10749,
			878
		],
		"hash": "A079A3C2B5941F0EBADCBFBD0DF4906C3C8CCEDA",
		"updated": "2021-09-19T08:18:42.099+00:00"
	},
	{
		"id": 325,
		"tmdb_id": 26428,
		"imdb_id": "tt1186830",
		"title": "Đường Tròn",
		"english_title": "Agora",
		"backdrop_path": "/hvLnVicIo2Nn57Ler4Dimr1vdIb.jpg",
		"imdb": 7.2,
		"release_date": "2009-05-17",
		"runtime": 127,
		"genre_ids": [
			12,
			18,
			36
		],
		"hash": "7AC7561AAD344241ACF0CA348803A762447C9E04",
		"updated": "2021-09-19T08:23:04.303+00:00"
	},
	{
		"id": 335,
		"tmdb_id": 45317,
		"imdb_id": "tt0964517",
		"title": "Huyền Thoại Quyền Anh",
		"english_title": "The Fighter",
		"backdrop_path": "/vDMH2cA0SugUkzVDOCXWpIgkALg.jpg",
		"imdb": 7.8,
		"release_date": "2010-12-17",
		"runtime": 116,
		"genre_ids": [
			18
		],
		"hash": "C258064C695DF4F0DAB484F384DDFEB91A29EBDB",
		"updated": "2021-09-19T08:26:28.437+00:00"
	},
	{
		"id": 336,
		"tmdb_id": 46838,
		"imdb_id": "tt1465522",
		"title": "Kỳ Nghỉ Kinh Hoàng",
		"english_title": "Tucker and Dale vs. Evil",
		"backdrop_path": "/4Y8vA151pfmgExRorNSOlFYAKvN.jpg",
		"imdb": 7.5,
		"release_date": "2010-01-22",
		"runtime": 89,
		"genre_ids": [
			35,
			27
		],
		"hash": "214F01B248CC18BE7AD5912074AFB52CDBC0C817",
		"updated": "2021-09-19T08:27:51.628+00:00"
	},
	{
		"id": 323,
		"tmdb_id": 26466,
		"imdb_id": "tt1187064",
		"title": "Tam giác quỷ",
		"english_title": "Triangle",
		"backdrop_path": "/bkeEoqpIuxskzi71UFIrU9to4Vh.jpg",
		"imdb": 6.9,
		"release_date": "2009-10-16",
		"runtime": 99,
		"genre_ids": [
			27
		],
		"hash": "010EB186B52ED5A4FA9BE20027DA069D2930FBB0",
		"updated": "2021-09-19T08:29:57.35+00:00"
	},
	{
		"id": 316,
		"tmdb_id": 25941,
		"imdb_id": "tt1289406",
		"title": "Harry Brown",
		"english_title": "Harry Brown",
		"backdrop_path": "/7pZtTbxn8d6Blgcf4EUysdEu3bO.jpg",
		"imdb": 7.2,
		"release_date": "2009-11-11",
		"runtime": 103,
		"genre_ids": [
			53,
			80,
			18,
			28
		],
		"hash": "00C1F7B6539FC3B7AF6B6F569FE8CC6C7E82850D",
		"updated": "2021-09-19T08:37:36.31+00:00"
	},
	{
		"id": 329,
		"tmdb_id": 34544,
		"imdb_id": "tt0429493",
		"title": "Biệt Đội Hành Động",
		"english_title": "The A-Team",
		"backdrop_path": "/lHHhumdUsPakCUfVLrJIh0Mu3rS.jpg",
		"imdb": 6.7,
		"release_date": "2010-06-09",
		"runtime": 117,
		"genre_ids": [
			53,
			28,
			12,
			35,
			80
		],
		"hash": "06993FE84ABA7B723C5C58747C0A356D5F96001F",
		"updated": "2021-09-19T11:03:18.888+00:00"
	},
	{
		"id": 342,
		"tmdb_id": 44639,
		"imdb_id": "tt1645089",
		"title": "Cuộc Khủng Hoảng Kinh Tế",
		"english_title": "Inside Job",
		"backdrop_path": "/mSLykhhSyfTpWG6a5PCQnjzvCBs.jpg",
		"imdb": 8.2,
		"release_date": "2010-10-08",
		"runtime": 109,
		"genre_ids": [
			99
		],
		"hash": "CAE2D86C74D18FA12906FE9FB9D23F60D8030525",
		"updated": "2021-09-16T06:31:00.244+00:00"
	},
	{
		"id": 352,
		"tmdb_id": 45269,
		"imdb_id": "tt1504320",
		"title": "Vị Vua Nói Lắp",
		"english_title": "The King's Speech",
		"backdrop_path": "/k654tIKRti2ypYRJLilMYTkTW40.jpg",
		"imdb": 8,
		"release_date": "2010-09-06",
		"runtime": 118,
		"genre_ids": [
			18,
			36
		],
		"hash": "7535410CF484960804EB9906DBAD7D18386BBE4E",
		"updated": "2021-09-18T05:54:43.786+00:00"
	},
	{
		"id": 361,
		"tmdb_id": 10138,
		"imdb_id": "tt1228705",
		"title": "Người Sắt 2",
		"english_title": "Iron Man 2",
		"backdrop_path": "/lsJ7Pg49OqX5mGtyIR4OezLYuAr.jpg",
		"imdb": 7,
		"release_date": "2010-04-28",
		"runtime": 124,
		"genre_ids": [
			12,
			28,
			878
		],
		"hash": "B550A0A32B0749ABFADB8EB0736F03D271E876E0",
		"updated": "2021-09-18T12:51:58.06+00:00"
	},
	{
		"id": 343,
		"tmdb_id": 23483,
		"imdb_id": "tt1250777",
		"title": "Người Hùng Củ Chuối",
		"english_title": "Kick-Ass",
		"backdrop_path": "/oXIxWZuJbdLMRXtPPRbJ8bfZdO0.jpg",
		"imdb": 7.6,
		"release_date": "2010-03-22",
		"runtime": 117,
		"genre_ids": [
			28,
			80
		],
		"hash": "20B83CC3AF1B0661C5214E6A970F24ACF004B7AC",
		"updated": "2021-09-19T04:40:00.711+00:00"
	},
	{
		"id": 347,
		"tmdb_id": 23168,
		"imdb_id": "tt0840361",
		"title": "Thị Trấn Tội Ác",
		"english_title": "The Town",
		"backdrop_path": "/4I2M49YICVFHci0npcQ64JFUf4e.jpg",
		"imdb": 7.5,
		"release_date": "2010-09-15",
		"runtime": 125,
		"genre_ids": [
			80,
			18,
			53
		],
		"hash": "EF075CFFEA9B29C32A9EAED21F368D7AF782ECA4",
		"updated": "2021-09-19T04:43:58.053+00:00"
	},
	{
		"id": 344,
		"tmdb_id": 22538,
		"imdb_id": "tt0446029",
		"title": "Scott Pilgrim Chống Lại Cả Thế Giới",
		"english_title": "Scott Pilgrim vs. the World",
		"backdrop_path": "/nj2unpTq558iJwz7jOHwQmiqeiJ.jpg",
		"imdb": 7.5,
		"release_date": "2010-08-12",
		"runtime": 112,
		"genre_ids": [
			35,
			28,
			10749,
			10402,
			14
		],
		"hash": "F542B0D6AA6346F4AD314BA04A26EB52E37209CA",
		"updated": "2021-09-19T04:45:07.48+00:00"
	},
	{
		"id": 351,
		"tmdb_id": 39514,
		"imdb_id": "tt1245526",
		"title": "CIA Tái Xuất",
		"english_title": "RED",
		"backdrop_path": "/8HUZoAyrhmbbBUcRAdHPfH4r3GG.jpg",
		"imdb": 7,
		"release_date": "2010-10-13",
		"runtime": 111,
		"genre_ids": [
			28,
			12,
			35,
			80,
			53
		],
		"hash": "BF73DF3AC9252BFD7E3D1CD97F24FF20CF8C4322",
		"updated": "2021-09-19T05:21:58.135+00:00"
	},
	{
		"id": 359,
		"tmdb_id": 35791,
		"imdb_id": "tt1220634",
		"title": "Vùng Đất Quỷ Dữ 4: Kiếp Sau",
		"english_title": "Resident Evil: Afterlife",
		"backdrop_path": "/bvi8Roiygn8IOoCPiolukrsDgx1.jpg",
		"imdb": 5.8,
		"release_date": "2010-09-09",
		"runtime": 97,
		"genre_ids": [
			28,
			12,
			27,
			878
		],
		"hash": "70DF748268C522F47848CDE1E58D26995D3CD736",
		"updated": "2021-09-19T05:42:08.583+00:00"
	},
	{
		"id": 339,
		"tmdb_id": 41439,
		"imdb_id": "tt1477076",
		"title": "Lưỡi Cưa 7",
		"english_title": "Saw 7",
		"backdrop_path": "/gOkm5caF13XytenLS2UZ3vhlnmY.jpg",
		"imdb": 5.6,
		"release_date": "2010-10-21",
		"runtime": 90,
		"genre_ids": [
			27,
			80
		],
		"hash": "7C0A852CBAAAC91D52106C51A99B3F5C76548C04",
		"updated": "2021-09-19T07:54:20.656+00:00"
	},
	{
		"id": 346,
		"tmdb_id": 49797,
		"imdb_id": "tt1588170",
		"title": "Gặp Phải Ác Quỷ",
		"english_title": "I Saw the Devil",
		"backdrop_path": "/eDFqluSy9xAmbbG2ZvgyW7vipHn.jpg",
		"imdb": 7.8,
		"release_date": "2010-08-12",
		"runtime": 142,
		"genre_ids": [
			53,
			27
		],
		"hash": "E570775BB8FA61298800A0800282E634BBA65882",
		"updated": "2021-09-19T08:01:33.807+00:00"
	},
	{
		"id": 345,
		"tmdb_id": 22972,
		"imdb_id": "tt0947810",
		"title": "Bão Táp Sa Mạc",
		"english_title": "Green Zone",
		"backdrop_path": "/gx3PzytuPcQpqdhOvEFitYwZdSy.jpg",
		"imdb": 6.8,
		"release_date": "2010-03-11",
		"runtime": 115,
		"genre_ids": [
			10752,
			28,
			12,
			18,
			53
		],
		"hash": "FA98837395E5D9B3A7F38D0213AA1A9E2A9C2A14",
		"updated": "2021-09-19T08:07:16.812+00:00"
	},
	{
		"id": 357,
		"tmdb_id": 43947,
		"imdb_id": "tt1242432",
		"title": "Cô Gái Báo Thù",
		"english_title": "I Spit on Your Grave",
		"backdrop_path": "/27eeIdmYCiT45xAft1xfRWOBFEY.jpg",
		"imdb": 6.3,
		"release_date": "2010-06-17",
		"runtime": 108,
		"genre_ids": [
			53,
			80,
			27
		],
		"hash": "9DE756016D28FECD35DC7AA76B768A5A5D073948",
		"updated": "2021-09-19T08:11:51.563+00:00"
	},
	{
		"id": 340,
		"tmdb_id": 43949,
		"imdb_id": "tt0817177",
		"title": "Một Thuở Tình Thơ",
		"english_title": "Flipped",
		"backdrop_path": "/tWFms2VXyBACYjzKDRKwfmalWH6.jpg",
		"imdb": 7.7,
		"release_date": "2010-08-06",
		"runtime": 89,
		"genre_ids": [
			10749,
			18
		],
		"hash": "F51A5CD997F5C0C548AFE1A102121E016E55C6E2",
		"updated": "2021-09-19T08:23:17.595+00:00"
	},
	{
		"id": 360,
		"tmdb_id": 41216,
		"imdb_id": "tt1219342",
		"title": "Hộ Vệ Xứ Ga'Hoole",
		"english_title": "Legend of the Guardians: The Owls of Ga'Hoole",
		"backdrop_path": "/znmvOWUnz26Vubu6lhytAP70sF7.jpg",
		"imdb": 6.9,
		"release_date": "2010-07-10",
		"runtime": 97,
		"genre_ids": [
			16,
			12,
			10751,
			14
		],
		"hash": "B642B51518355D32B9352E3BD43EFD473B7B9495",
		"updated": "2021-09-19T08:25:29.991+00:00"
	},
	{
		"id": 338,
		"tmdb_id": 37472,
		"imdb_id": "tt1386932",
		"title": "Diệp Vấn 2: Tôn Sư Truyền Kỳ",
		"english_title": "Ip Man 2",
		"backdrop_path": "/n3Hi8srIOdvOF9GXxUXXxbHZ1D.jpg",
		"imdb": 7.5,
		"release_date": "2010-04-29",
		"runtime": 108,
		"genre_ids": [
			28,
			36,
			18
		],
		"hash": "73DCB393E8A07D3C87F55F8D16B4D327F17618CF",
		"updated": "2021-09-19T08:34:54.56+00:00"
	},
	{
		"id": 358,
		"tmdb_id": 37056,
		"imdb_id": "tt0892318",
		"title": "Thử Gửi Juliet",
		"english_title": "Letters to Juliet",
		"backdrop_path": "/3kVeIxwXYcNoVx7PE6WHsCvpY4G.jpg",
		"imdb": 6.5,
		"release_date": "2010-05-13",
		"runtime": 105,
		"genre_ids": [
			35,
			18,
			10749
		],
		"hash": "F8C4249ECADA6AA1254AC50A8165C526537C5C96",
		"updated": "2021-09-19T08:39:13.841+00:00"
	},
	{
		"id": 341,
		"tmdb_id": 41233,
		"imdb_id": "tt1193631",
		"title": "Bước Nhảy Đường Phố 3D",
		"english_title": "Step Up 3D",
		"backdrop_path": "/xrHSx4CBQi4s169r9xKGZbm7iOz.jpg",
		"imdb": 6.2,
		"release_date": "2010-08-04",
		"runtime": 107,
		"genre_ids": [
			18,
			10749
		],
		"hash": "4B92F40F3C301DA77D65DDE217B6FBC94E541E1B",
		"updated": "2021-09-19T08:40:38.054+00:00"
	},
	{
		"id": 354,
		"tmdb_id": 46705,
		"imdb_id": "tt1120985",
		"title": "Lễ Tình Nhân Xanh",
		"english_title": "Blue Valentine",
		"backdrop_path": "/sZRErzShw9N77TEcxX3DBpDPmCc.jpg",
		"imdb": 7.3,
		"release_date": "2010-12-16",
		"runtime": 112,
		"genre_ids": [
			18,
			10749
		],
		"hash": "ACB7E6AC98F87BAE881639AD66B938EEB3BF3F36",
		"updated": "2021-09-19T08:39:34.947+00:00"
	},
	{
		"id": 348,
		"tmdb_id": 32657,
		"imdb_id": "tt0814255",
		"title": "Percy Jackson: Kẻ Cắp Tia Chớp",
		"english_title": "Percy Jackson & the Olympians: The Lightning Thief",
		"backdrop_path": "/zmsf0KDMQ2RTLkHMhrfTz5mdFfq.jpg",
		"imdb": 5.9,
		"release_date": "2010-02-01",
		"runtime": 118,
		"genre_ids": [
			12,
			14,
			10751
		],
		"hash": "D5CDCB9A9CAF1008210FC49CC2466517629E136C",
		"updated": "2021-09-19T10:14:21.36+00:00"
	},
	{
		"id": 356,
		"tmdb_id": 51739,
		"imdb_id": "tt1568921",
		"title": "Thế Giới Bí Mật Của Arrietty",
		"english_title": "The Secret World of Arrietty",
		"backdrop_path": "/aXvkwWPZdW2J5GQxwndF10O44yw.jpg",
		"imdb": 7.6,
		"release_date": "2010-07-16",
		"runtime": 94,
		"genre_ids": [
			14,
			16,
			10751
		],
		"hash": "20fb94f120e63f8a589f89bdacaafae2c45b7562",
		"updated": "2021-09-19T10:53:20.605+00:00"
	},
	{
		"id": 350,
		"tmdb_id": 23169,
		"imdb_id": "tt1403981",
		"title": "Hãy Nhớ Đến Anh",
		"english_title": "Remember Me",
		"backdrop_path": "/hWOL7yr70tMeOwI1W4136H9Z5Wj.jpg",
		"imdb": 7.1,
		"release_date": "2010-03-12",
		"runtime": 113,
		"genre_ids": [
			18,
			10749
		],
		"hash": "BE974172429402A8729D5D9A2CE3C3E32BE4FB5C",
		"updated": "2021-09-19T11:06:51.689+00:00"
	},
	{
		"id": 353,
		"tmdb_id": 51608,
		"imdb_id": "tt1527788",
		"title": "Sát Thủ Vô Danh",
		"english_title": "The Man from Nowhere",
		"backdrop_path": "/3cGvyS88UOf3LDUpXf06FpK8crH.jpg",
		"imdb": 7.8,
		"release_date": "2010-08-04",
		"runtime": 119,
		"genre_ids": [
			28,
			53,
			80
		],
		"hash": "b1f66a7aecde010bc0bf33687622b274ce204ec5",
		"updated": "2021-10-12T12:41:19.663+00:00"
	},
	{
		"id": 365,
		"tmdb_id": 11324,
		"imdb_id": "tt1130884",
		"title": "Đảo Kinh Hoàng",
		"english_title": "Shutter Island",
		"backdrop_path": "/1A6Cn1tCz3g9jYgVR3VDyulwKmw.jpg",
		"imdb": 8.2,
		"release_date": "2010-02-14",
		"runtime": 138,
		"genre_ids": [
			18,
			53,
			9648
		],
		"hash": "CDF09BFFC475789AA557EFF19A090735412BE99D",
		"updated": "2021-09-16T06:25:41.929+00:00"
	},
	{
		"id": 370,
		"tmdb_id": 59440,
		"imdb_id": "tt1291584",
		"title": "Chiến Binh",
		"english_title": "Warrior",
		"backdrop_path": "/thvVIdtCczWJ1k1I7mcPhzQbA1V.jpg",
		"imdb": 8.1,
		"release_date": "2011-09-09",
		"runtime": 140,
		"genre_ids": [
			18,
			28
		],
		"hash": "E60017ED9FE3B40DBF149CF28B8DEF1BCC106D42",
		"updated": "2021-09-17T12:35:57.377+00:00"
	},
	{
		"id": 366,
		"tmdb_id": 44214,
		"imdb_id": "tt0947798",
		"title": "Thiên Nga Đen",
		"english_title": "Black Swan",
		"backdrop_path": "/9ZCRT14Mt51PEg1yKYdeCoapZia.jpg",
		"imdb": 8,
		"release_date": "2010-12-03",
		"runtime": 108,
		"genre_ids": [
			18,
			53,
			27
		],
		"hash": "77D852CEFEE1D974A877D53E9B1E864EBE53FFD7",
		"updated": "2021-09-18T05:56:39.181+00:00"
	},
	{
		"id": 367,
		"tmdb_id": 38575,
		"imdb_id": "tt1155076",
		"title": "Cậu Bé Karate",
		"english_title": "The Karate Kid",
		"backdrop_path": "/38hXBwDzfhqUXzEYvSrz5luclLO.jpg",
		"imdb": 6.2,
		"release_date": "2010-06-10",
		"runtime": 140,
		"genre_ids": [
			28,
			12,
			18,
			10751
		],
		"hash": "C6E7A13BE370C519F9237B2E3F16581E944B0F72",
		"updated": "2021-09-18T12:51:23.738+00:00"
	},
	{
		"id": 372,
		"tmdb_id": 49538,
		"imdb_id": "tt1270798",
		"title": "Dị Nhân 5: Thế Hệ Đầu Tiên",
		"english_title": "X-Men: First Class",
		"backdrop_path": "/2OC9Ehca7Cixg7HaCNuxEGGxxEz.jpg",
		"imdb": 7.7,
		"release_date": "2011-06-01",
		"runtime": 132,
		"genre_ids": [
			28,
			878,
			12
		],
		"hash": "7D6A180465A78AC629E15D3F11424A6AFB520716",
		"updated": "2021-09-18T13:37:00.409+00:00"
	},
	{
		"id": 374,
		"tmdb_id": 65754,
		"imdb_id": "tt1568346",
		"title": "Cô Gái Có Hình Xăm Rồng",
		"english_title": "The Girl with the Dragon Tattoo",
		"backdrop_path": "/uHZXo41bxR857zV5MkPjtPqoDPu.jpg",
		"imdb": 7.8,
		"release_date": "2011-12-14",
		"runtime": 158,
		"genre_ids": [
			53,
			80,
			9648,
			18
		],
		"hash": "E775E69359E5B4C2DCB1A19B2CBE35340C5409A0",
		"updated": "2021-09-19T01:23:10.589+00:00"
	},
	{
		"id": 369,
		"tmdb_id": 50646,
		"imdb_id": "tt1570728",
		"title": "Yêu Điên Dại",
		"english_title": "Crazy, Stupid, Love.",
		"backdrop_path": "/1YnjJKjgDjTkLmv4Qds3vWsOq6D.jpg",
		"imdb": 7.4,
		"release_date": "2011-07-29",
		"runtime": 118,
		"genre_ids": [
			35,
			18,
			10749
		],
		"hash": "CEF351E11956244818299F9185C483629C9DE84B",
		"updated": "2021-09-19T04:51:56.811+00:00"
	},
	{
		"id": 371,
		"tmdb_id": 51497,
		"imdb_id": "tt1596343",
		"title": "Quá Nhanh Quá Nguy Hiểm 5: Phi Vụ Rio",
		"english_title": "Fast Five",
		"backdrop_path": "/vFa4lhBiSEiogI2az6VSaou1tZR.jpg",
		"imdb": 7.3,
		"release_date": "2011-04-20",
		"runtime": 130,
		"genre_ids": [
			28,
			53,
			80
		],
		"hash": "ADEB7F19F766C221942A2C79177222292C3320B3",
		"updated": "2021-09-19T04:59:36.191+00:00"
	},
	{
		"id": 381,
		"tmdb_id": 49013,
		"imdb_id": "tt1216475",
		"title": "Vương Quốc Xe Hơi 2",
		"english_title": "Cars 2",
		"backdrop_path": "/8kGCT4syIcSkLBaye2rkc1UpXch.jpg",
		"imdb": 6.1,
		"release_date": "2011-06-11",
		"runtime": 106,
		"genre_ids": [
			16,
			10751,
			12,
			35
		],
		"hash": "FEF40D29587E784355F205E76BDD945EF5A1EBE4",
		"updated": "2021-09-19T05:08:05.355+00:00"
	},
	{
		"id": 373,
		"tmdb_id": 39254,
		"imdb_id": "tt0433035",
		"title": "Tay Đấm Thép",
		"english_title": "Real Steel",
		"backdrop_path": "/9iTCI6RisDi1q5EW44fnnfBEsKp.jpg",
		"imdb": 7.1,
		"release_date": "2011-09-28",
		"runtime": 127,
		"genre_ids": [
			28,
			878,
			18
		],
		"hash": "028119B1CB98657989D91D3F55ECE13F2CB32309",
		"updated": "2021-09-19T05:07:33.187+00:00"
	},
	{
		"id": 375,
		"tmdb_id": 37686,
		"imdb_id": "tt1650062",
		"title": "Quái Vật Vũ Trụ",
		"english_title": "Super 8",
		"backdrop_path": "/qEw04pyHR7rNMpsuaBYdXM63q9o.jpg",
		"imdb": 7,
		"release_date": "2011-06-08",
		"runtime": 112,
		"genre_ids": [
			53,
			878,
			9648
		],
		"hash": "353956D49494FF256C4833F82823EB7984B14A30",
		"updated": "2021-09-19T05:21:44.006+00:00"
	},
	{
		"id": 368,
		"tmdb_id": 10140,
		"imdb_id": "tt0980970",
		"title": "Biên Niên Sử Narnia: Cuộc Hành Trình Trên Tàu Dawn Treader",
		"english_title": "The Chronicles of Narnia: The Voyage of the Dawn Treader",
		"backdrop_path": "/6vdrwSOpUrVD5OyKfYIwMZ32gu5.jpg",
		"imdb": 6.3,
		"release_date": "2010-12-02",
		"runtime": 113,
		"genre_ids": [
			12,
			10751,
			14
		],
		"hash": "7009C843D7022241EBE75A69AED3966B1F3E4132",
		"updated": "2021-09-19T05:25:43.018+00:00"
	},
	{
		"id": 382,
		"tmdb_id": 49530,
		"imdb_id": "tt1637688",
		"title": "Thời Khắc Sinh Tử",
		"english_title": "In Time",
		"backdrop_path": "/vMsJbgfmjV1EEtsu2XN8RFyzqy8.jpg",
		"imdb": 6.7,
		"release_date": "2011-10-27",
		"runtime": 109,
		"genre_ids": [
			28,
			53,
			878
		],
		"hash": "CA7453DA93467E740FC4AF0B499449AB779B99DC",
		"updated": "2021-09-19T05:40:16.078+00:00"
	},
	{
		"id": 379,
		"tmdb_id": 94329,
		"imdb_id": "tt1899353",
		"title": "Đột Kích: Chuộc Tội",
		"english_title": "The Raid",
		"backdrop_path": "/kFD6fVwnrHq085JIHCDXsSIqAZf.jpg",
		"imdb": 7.6,
		"release_date": "2011-11-29",
		"runtime": 101,
		"genre_ids": [
			28,
			53,
			80
		],
		"hash": "49E74B914876AD23503291A3CBCCC3B58DB339E7",
		"updated": "2021-09-19T06:30:10.905+00:00"
	},
	{
		"id": 380,
		"tmdb_id": 17578,
		"imdb_id": "tt0983193",
		"title": "Những Cuộc Phiêu Lưu Của Tintin",
		"english_title": "The Adventures of Tintin",
		"backdrop_path": "/4FvUmTcrrIroVqvIVQKqfadbRzd.jpg",
		"imdb": 7.3,
		"release_date": "2011-10-25",
		"runtime": 107,
		"genre_ids": [
			12,
			16,
			9648
		],
		"hash": "95838F4C01BAC88AB74BC86BCB60E9D48BBAB88A",
		"updated": "2021-09-19T08:02:03.973+00:00"
	},
	{
		"id": 384,
		"tmdb_id": 49444,
		"imdb_id": "tt1302011",
		"title": "Công Phu Gấu Trúc 2",
		"english_title": "Kung Fu Panda 2",
		"backdrop_path": "/1CIdVBqPLQYWhrZWP8RjVFRh7WV.jpg",
		"imdb": 7.2,
		"release_date": "2011-05-25",
		"runtime": 91,
		"genre_ids": [
			16,
			10751
		],
		"hash": "C6B9F1D8C30CA67C6DDBAF816F043EA0ABC53792",
		"updated": "2021-09-19T08:04:33.393+00:00"
	},
	{
		"id": 376,
		"tmdb_id": 46529,
		"imdb_id": "tt1464540",
		"title": "Tôi Là Số 4",
		"english_title": "I Am Number Four",
		"backdrop_path": "/uitaVVX98J88jZjx32ejhpnfzAC.jpg",
		"imdb": 6.1,
		"release_date": "2011-02-18",
		"runtime": 109,
		"genre_ids": [
			28,
			53,
			878,
			12
		],
		"hash": "663B8154418DE701D204CC93E42F8AE2257BB209",
		"updated": "2021-09-19T08:06:29.941+00:00"
	},
	{
		"id": 378,
		"tmdb_id": 49517,
		"imdb_id": "tt1340800",
		"title": "Trò Chơi Nội Gián",
		"english_title": "Tinker Tailor Soldier Spy",
		"backdrop_path": "/xI0LvrEMLsiVsUfIw4ce6QwlJR.jpg",
		"imdb": 7.1,
		"release_date": "2011-09-16",
		"runtime": 127,
		"genre_ids": [
			18,
			53,
			9648
		],
		"hash": "666771ED68642BDA1266F1FED3757A8AE7C7D9E3",
		"updated": "2021-09-19T08:20:30.612+00:00"
	},
	{
		"id": 362,
		"tmdb_id": 33602,
		"imdb_id": "tt1278469",
		"title": "Chuyện Của Cô Temple Grandin",
		"english_title": "Temple Grandin",
		"backdrop_path": "/jYJ7cFpvMlLecLI9uSE461OKxMv.jpg",
		"imdb": 8.3,
		"release_date": "2010-02-06",
		"runtime": 108,
		"genre_ids": [
			18
		],
		"hash": "79F6806435EFC2596B6010A3C6D5BC7C386052B9",
		"updated": "2021-09-19T11:01:17.101+00:00"
	},
	{
		"id": 364,
		"tmdb_id": 38055,
		"imdb_id": "tt1001526",
		"title": "Kẻ Xấu Đẹp Trai",
		"english_title": "Megamind",
		"backdrop_path": "/22h4lNjlm3XYGJimNaKk61NS3Hj.jpg",
		"imdb": 7.2,
		"release_date": "2010-10-28",
		"runtime": 96,
		"genre_ids": [
			16,
			28,
			35,
			10751,
			878
		],
		"hash": "BC43F5C3B5021F98CEF2C769B08F188A80B4E844",
		"updated": "2021-09-19T08:22:23.03+00:00"
	},
	{
		"id": 377,
		"tmdb_id": 71676,
		"imdb_id": "tt1071875",
		"title": "Ma Tốc Độ 2: Linh Hồn Báo Thù",
		"english_title": "Ghost Rider: Spirit of Vengeance",
		"backdrop_path": "/mLBReXFauC7xtbvWOMaBM891vF7.jpg",
		"imdb": 4.3,
		"release_date": "2011-12-11",
		"runtime": 96,
		"genre_ids": [
			28,
			14,
			53
		],
		"hash": "598BD95A8009E30D243144F195D40024EF936D83",
		"updated": "2021-09-19T10:11:42.59+00:00"
	},
	{
		"id": 406,
		"tmdb_id": 64690,
		"imdb_id": "tt0780504",
		"title": "Tay Lái Siêu Hạng",
		"english_title": "Drive",
		"backdrop_path": "/uslmOwQpdRRUwr6AmBP6JdzeHjS.jpg",
		"imdb": 7.8,
		"release_date": "2011-06-17",
		"runtime": 100,
		"genre_ids": [
			18,
			53,
			80
		],
		"hash": "C90B471E739D8ECDAC085F9927383A804F2832AC",
		"updated": "2021-09-21T01:50:08.368+00:00"
	},
	{
		"id": 396,
		"tmdb_id": 10195,
		"imdb_id": "tt0800369",
		"title": "Thần Sấm",
		"english_title": "Thor",
		"backdrop_path": "/mptGxzWrePQgzba2uPpvp0SCWt.jpg",
		"imdb": 7,
		"release_date": "2011-04-21",
		"runtime": 115,
		"genre_ids": [
			12,
			14,
			28
		],
		"hash": "ABCE88CCC2D0690078840A20398F32077C89FF0E",
		"updated": "2021-09-18T12:53:03.05+00:00"
	},
	{
		"id": 394,
		"tmdb_id": 1771,
		"imdb_id": "tt0458339",
		"title": "Captain America: Kẻ Báo Thù Đầu Tiên",
		"english_title": "Captain America: The First Avenger",
		"backdrop_path": "/cYlbgqeeKufdEdDoZQUyZsl11II.jpg",
		"imdb": 6.9,
		"release_date": "2011-07-22",
		"runtime": 124,
		"genre_ids": [
			28,
			12,
			878
		],
		"hash": "25AA732E39DB228AA7989EE66CC487C914AEBF40",
		"updated": "2021-09-18T12:53:46.537+00:00"
	},
	{
		"id": 386,
		"tmdb_id": 1865,
		"imdb_id": "tt1298650",
		"title": "Cướp Biển Vùng Caribbean 4: Suối Nguồn Tươi Trẻ",
		"english_title": "Pirates of the Caribbean: On Stranger Tides",
		"backdrop_path": "/bfTKq6mGHt2CzZlBU31JHF9bMog.jpg",
		"imdb": 6.6,
		"release_date": "2011-05-14",
		"runtime": 137,
		"genre_ids": [
			12,
			28,
			14
		],
		"hash": "851502F054EC0482A3BB9B9532D50F2B34E660EA",
		"updated": "2021-09-19T00:43:49.228+00:00"
	},
	{
		"id": 404,
		"tmdb_id": 45243,
		"imdb_id": "tt1411697",
		"title": "Ba Chàng Ngự Lâm 2",
		"english_title": "The Hangover Part II",
		"backdrop_path": "/u7xhTnyjstNA5vHt4qgaJGXSPN5.jpg",
		"imdb": 6.5,
		"release_date": "2011-05-25",
		"runtime": 102,
		"genre_ids": [
			35
		],
		"hash": "0EFA56AEC69D6B886FCB919322AC40A7E27E48F5",
		"updated": "2021-09-19T01:35:28.498+00:00"
	},
	{
		"id": 390,
		"tmdb_id": 56292,
		"imdb_id": "tt1229238",
		"title": "Nhiệm Vụ Bất Khả Thi 4: Chiến Dịch Bóng Ma",
		"english_title": "Mission: Impossible - Ghost Protocol",
		"backdrop_path": "/dP1LWMVH1KlEeIX3e6SPiioA6Ah.jpg",
		"imdb": 7.4,
		"release_date": "2011-12-07",
		"runtime": 133,
		"genre_ids": [
			28,
			53,
			12
		],
		"hash": "EE02FB104C549A1EC0E3AEEEF2025E3B1A71F7EE",
		"updated": "2021-09-19T03:05:40.394+00:00"
	},
	{
		"id": 395,
		"tmdb_id": 61791,
		"imdb_id": "tt1318514",
		"title": "Sự Nổi Dậy Của Bầy Khỉ",
		"english_title": "Rise of the Planet of the Apes",
		"backdrop_path": "/96R0YGzL0Lbaf6k275atss3EPCk.jpg",
		"imdb": 7.6,
		"release_date": "2011-08-03",
		"runtime": 105,
		"genre_ids": [
			53,
			28,
			18,
			878
		],
		"hash": "4CBAABB7B8E6F10BAEA13842215A15DA2A52E054",
		"updated": "2021-09-19T04:41:26.473+00:00"
	},
	{
		"id": 408,
		"tmdb_id": 45612,
		"imdb_id": "tt0945513",
		"title": "Mật Mã Sống Còn",
		"english_title": "Source Code",
		"backdrop_path": "/xZKOQM2EMEzWgoRSXX97Fulrf8b.jpg",
		"imdb": 7.5,
		"release_date": "2011-03-30",
		"runtime": 93,
		"genre_ids": [
			53,
			878,
			9648
		],
		"hash": "7D93B02F80E22FB8FD470D48783D9545093C2752",
		"updated": "2021-09-19T04:47:50.866+00:00"
	},
	{
		"id": 399,
		"tmdb_id": 51540,
		"imdb_id": "tt1499658",
		"title": "Những Vị Sếp Khó Tính",
		"english_title": "Horrible Bosses",
		"backdrop_path": "/7LE1w1Aq3HdvKB0IS6IusEKTAKm.jpg",
		"imdb": 6.9,
		"release_date": "2011-07-08",
		"runtime": 98,
		"genre_ids": [
			35,
			80
		],
		"hash": "A437EB6825720E780C4C33063476499EC6B57276",
		"updated": "2021-09-19T05:35:20.369+00:00"
	},
	{
		"id": 402,
		"tmdb_id": 27582,
		"imdb_id": "tt0472399",
		"title": "Sát Thủ Thợ Máy",
		"english_title": "The Mechanic",
		"backdrop_path": "/7UYhTrXIzEW0mugj7IMoO7UQGmJ.jpg",
		"imdb": 6.6,
		"release_date": "2011-01-13",
		"runtime": 93,
		"genre_ids": [
			28,
			53,
			80
		],
		"hash": "3162976719D2921665C09100650E992C9BE63DDC",
		"updated": "2021-09-19T05:51:10.646+00:00"
	},
	{
		"id": 403,
		"tmdb_id": 50544,
		"imdb_id": "tt1632708",
		"title": "Yêu Lầm Bạn Thân",
		"english_title": "Friends with Benefits",
		"backdrop_path": "/sADMOwdhVQp0LXvNj0CGogVEjXy.jpg",
		"imdb": 6.5,
		"release_date": "2011-07-21",
		"runtime": 109,
		"genre_ids": [
			10749,
			35
		],
		"hash": "D2BB0166D7E43AC58E2F73934A2EEA0824FA9395",
		"updated": "2021-09-19T05:54:34.473+00:00"
	},
	{
		"id": 398,
		"tmdb_id": 39538,
		"imdb_id": "tt1598778",
		"title": "Bệnh Truyền Nhiễm",
		"english_title": "Contagion",
		"backdrop_path": "/skgblVymGBn0ELriScZmUnMmo3.jpg",
		"imdb": 6.7,
		"release_date": "2011-09-08",
		"runtime": 106,
		"genre_ids": [
			18,
			53,
			878
		],
		"hash": "5B075D0A44AA4B8BFB90A36AF99EEE80AB3D24DE",
		"updated": "2021-09-19T06:35:20.899+00:00"
	},
	{
		"id": 401,
		"tmdb_id": 58574,
		"imdb_id": "tt1515091",
		"title": "Thám Tử Sherlock Holmes 2: Trò Chơi Bóng Tối",
		"english_title": "Sherlock Holmes: A Game of Shadows",
		"backdrop_path": "/9jqVUpvQ6udSNHe0mwFdCNvQxEu.jpg",
		"imdb": 7.5,
		"release_date": "2011-11-22",
		"runtime": 129,
		"genre_ids": [
			12,
			28,
			80,
			9648
		],
		"hash": "7DE2D079C2AD50F4AF24870D800F5D5A23947721",
		"updated": "2021-09-19T07:51:57.107+00:00"
	},
	{
		"id": 393,
		"tmdb_id": 44826,
		"imdb_id": "tt0970179",
		"title": "Cuộc Phiêu Lưu của Hugo",
		"english_title": "Hugo",
		"backdrop_path": "/fWAhWqW9EGrzlanCSA8NatFh05K.jpg",
		"imdb": 7.5,
		"release_date": "2011-11-22",
		"runtime": 126,
		"genre_ids": [
			12,
			18,
			10751
		],
		"hash": "777644FAD60B1CB4B19B3D6BB5572DE5E0BF21B3",
		"updated": "2021-09-19T08:06:15.188+00:00"
	},
	{
		"id": 389,
		"tmdb_id": 44912,
		"imdb_id": "tt1133985",
		"title": "Chiến Binh Đèn Lồng Xanh",
		"english_title": "Green Lantern",
		"backdrop_path": "/oD9I5XFyFVK2vJil1t3zL55kwTd.jpg",
		"imdb": 5.5,
		"release_date": "2011-06-16",
		"runtime": 114,
		"genre_ids": [
			12,
			28,
			53,
			878
		],
		"hash": "936F4CB95B643D1690EF6665EF94B414A3944321",
		"updated": "2021-09-19T08:11:40.707+00:00"
	},
	{
		"id": 388,
		"tmdb_id": 75174,
		"imdb_id": "tt1601913",
		"title": "Bản Năng Sinh Tồn",
		"english_title": "The Grey",
		"backdrop_path": "/qQel3tHow9lby8MRawog1ENSuXT.jpg",
		"imdb": 6.8,
		"release_date": "2011-12-11",
		"runtime": 117,
		"genre_ids": [
			18,
			53,
			28,
			12
		],
		"hash": "AB76B5D6051A24E151F7A20486F97D0D86602CC5",
		"updated": "2021-09-19T08:14:19.239+00:00"
	},
	{
		"id": 387,
		"tmdb_id": 44896,
		"imdb_id": "tt1192628",
		"title": "Tắc Kè Nhát Gan",
		"english_title": "Rango",
		"backdrop_path": "/tmFRnTNRWqrKWRLmXusLd1OIDR.jpg",
		"imdb": 7.2,
		"release_date": "2011-03-02",
		"runtime": 107,
		"genre_ids": [
			16,
			35,
			10751,
			37,
			12
		],
		"hash": "A39EC0316DF1037E00FB0B8C2E7E6D669B963D2F",
		"updated": "2021-09-19T08:15:34.107+00:00"
	},
	{
		"id": 391,
		"tmdb_id": 60308,
		"imdb_id": "tt1210166",
		"title": "Cuộc Chiến Sân Cỏ",
		"english_title": "Moneyball",
		"backdrop_path": "/hBG3shtLRT2tbostaqa6FtawoC.jpg",
		"imdb": 7.6,
		"release_date": "2011-09-22",
		"runtime": 134,
		"genre_ids": [
			18
		],
		"hash": "EE7485AED23B74DADE08017A1B20AD083FE00668",
		"updated": "2021-09-19T08:38:44.768+00:00"
	},
	{
		"id": 385,
		"tmdb_id": 83389,
		"imdb_id": "tt1798188",
		"title": "Ngọn Đồi Hoa Hồng Anh",
		"english_title": "From Up on Poppy Hill",
		"backdrop_path": "/w2KlhERUVSVPntGta0mBtwenihY.jpg",
		"imdb": 7.4,
		"release_date": "2011-07-16",
		"runtime": 91,
		"genre_ids": [
			16,
			18
		],
		"hash": "810ECE2B3A99F29F51875A3282EA1264DA554332",
		"updated": "2021-09-19T10:46:52.703+00:00"
	},
	{
		"id": 400,
		"tmdb_id": 84111,
		"imdb_id": "tt2036416",
		"title": "Cô Gái Năm Ấy Chúng Ta Cùng Theo Đuổi",
		"english_title": "You Are the Apple of My Eye",
		"backdrop_path": "/gYULvXs45yTcYpTBrPk1GSRZTMh.jpg",
		"imdb": 7.6,
		"release_date": "2011-08-19",
		"runtime": 105,
		"genre_ids": [
			18,
			10749,
			35
		],
		"hash": "D6D9432E09FA08FCB3895A7FE1A8F9BBA626864A",
		"updated": "2021-09-19T11:02:02.775+00:00"
	},
	{
		"id": 397,
		"tmdb_id": 58233,
		"imdb_id": "tt1634122",
		"title": "Điệp Viên Không Không Thấy 2: Tái Xuất",
		"english_title": "Johnny English Reborn",
		"backdrop_path": "/rpJotXIyyEsVlXIsu5E8DxPaymp.jpg",
		"imdb": 6.3,
		"release_date": "2011-09-15",
		"runtime": 101,
		"genre_ids": [
			80,
			12,
			28,
			35,
			53
		],
		"hash": "F567C3ECF422CC14C8E02DBBB1A487BBC1951628",
		"updated": "2021-09-19T11:02:49.15+00:00"
	},
	{
		"id": 407,
		"tmdb_id": 59436,
		"imdb_id": "tt1605783",
		"title": "Paris Lúc Nửa Đêm",
		"english_title": "Midnight in Paris",
		"backdrop_path": "/wHhI5aIRnP6d1j8uCeqhuc8HvPr.jpg",
		"imdb": 7.7,
		"release_date": "2011-05-11",
		"runtime": 94,
		"genre_ids": [
			14,
			35,
			10749
		],
		"hash": "663FF5E4CF87C8D593B6B3E44E9993CB218E702B",
		"updated": "2021-09-19T11:06:20.752+00:00"
	},
	{
		"id": 411,
		"tmdb_id": 24428,
		"imdb_id": "tt0848228",
		"title": "Biệt Đội Siêu Anh Hùng",
		"english_title": "The Avengers",
		"backdrop_path": "/huOmAVZBfXPMIRwjFmyGzZLojHR.jpg",
		"imdb": 8,
		"release_date": "2012-04-25",
		"runtime": 143,
		"genre_ids": [
			878,
			28,
			12
		],
		"hash": "E9F759B6A26113F3745311DAD4BD332B4612EB60",
		"updated": "2021-09-18T05:57:46.027+00:00"
	},
	{
		"id": 429,
		"tmdb_id": 49051,
		"imdb_id": "tt0903624",
		"title": "Người Hobbit: Hành Trình Vô Định",
		"english_title": "The Hobbit: An Unexpected Journey",
		"backdrop_path": "/52S6ajW0Hh4fLQhAK49fSVPJzt7.jpg",
		"imdb": 7.8,
		"release_date": "2012-11-26",
		"runtime": 169,
		"genre_ids": [
			12,
			14,
			28
		],
		"hash": "0653C32F1CD717E5723793F4E422731E581CAB87",
		"updated": "2021-09-18T13:02:13.166+00:00"
	},
	{
		"id": 431,
		"tmdb_id": 68734,
		"imdb_id": "tt1024648",
		"title": "Chiến Dịch Sinh Tử",
		"english_title": "Argo",
		"backdrop_path": "/7JIBNtF3xKt4FhhpDoouSj7nQuv.jpg",
		"imdb": 7.7,
		"release_date": "2012-10-11",
		"runtime": 120,
		"genre_ids": [
			18,
			53
		],
		"hash": "32DDAA8C1BBC4C78339199FAB88CF7EBFA0C9720",
		"updated": "2021-09-19T01:34:21.254+00:00"
	},
	{
		"id": 414,
		"tmdb_id": 59967,
		"imdb_id": "tt1276104",
		"title": "Kẻ Xuyên Không",
		"english_title": "Looper",
		"backdrop_path": "/vD7QdPWMGtweUIUWRN7wl1uHp4O.jpg",
		"imdb": 7.4,
		"release_date": "2012-09-26",
		"runtime": 118,
		"genre_ids": [
			28,
			53,
			878
		],
		"hash": "C32020405D0362A38D09853234F0487892E8E1BC",
		"updated": "2021-09-19T04:48:59.458+00:00"
	},
	{
		"id": 415,
		"tmdb_id": 41154,
		"imdb_id": "tt1409024",
		"title": "Đặc Vụ Áo Đen 3",
		"english_title": "Men in Black 3",
		"backdrop_path": "/eatyvS4UXTLl5AGMWolsQ4WD069.jpg",
		"imdb": 6.8,
		"release_date": "2012-05-23",
		"runtime": 106,
		"genre_ids": [
			28,
			35,
			878
		],
		"hash": "0952F7934725114DBE141A9E9A4878C77C8773A7",
		"updated": "2021-09-19T04:54:35.167+00:00"
	},
	{
		"id": 412,
		"tmdb_id": 64688,
		"imdb_id": "tt1232829",
		"title": "Cớm Học Đường",
		"english_title": "21 Jump Street",
		"backdrop_path": "/yhtGHBSa1bPh4YwQGLt25G7OizE.jpg",
		"imdb": 7.2,
		"release_date": "2012-03-14",
		"runtime": 109,
		"genre_ids": [
			28,
			35,
			80
		],
		"hash": "F48D3B26BF8ED798722964EFF78171D3AAC5B475",
		"updated": "2021-09-19T05:03:02.099+00:00"
	},
	{
		"id": 428,
		"tmdb_id": 114150,
		"imdb_id": "tt1981677",
		"title": "Sự Nổi Loạn Hoàn Hảo",
		"english_title": "Pitch Perfect",
		"backdrop_path": "/rBdVmPGdJLj7tUtKSTTCZ1EZc9R.jpg",
		"imdb": 7.1,
		"release_date": "2012-09-28",
		"runtime": 112,
		"genre_ids": [
			35,
			10402,
			10749
		],
		"hash": "3753270E02CEBB06C3004A9B06EF94800807BE02",
		"updated": "2021-09-19T05:07:13.019+00:00"
	},
	{
		"id": 432,
		"tmdb_id": 49049,
		"imdb_id": "tt1343727",
		"title": "Hội Thẩm Phán",
		"english_title": "Dredd",
		"backdrop_path": "/4ujN1aV0qQYwR9DJHPNOhVeHG3q.jpg",
		"imdb": 7.1,
		"release_date": "2012-09-07",
		"runtime": 95,
		"genre_ids": [
			28,
			878
		],
		"hash": "F3D27F88BEC6418FF43F9CBAC1F53CDA59257C14",
		"updated": "2021-09-19T05:09:25.496+00:00"
	},
	{
		"id": 420,
		"tmdb_id": 81188,
		"imdb_id": "tt1446192",
		"title": "Sự Trỗi Dậy Của Các Vệ Thần",
		"english_title": "Rise of the Guardians",
		"backdrop_path": "/5TocKDeCb9vF7R8Xq32kyPUfx8C.jpg",
		"imdb": 7.3,
		"release_date": "2012-11-21",
		"runtime": 97,
		"genre_ids": [
			10751,
			16,
			14,
			28,
			12
		],
		"hash": "197ECD273DC3E0455B0AC3FC08E6E633E277356B",
		"updated": "2021-12-07T04:28:03.316+00:00"
	},
	{
		"id": 413,
		"tmdb_id": 76163,
		"imdb_id": "tt1764651",
		"title": "Biệt Đội Đánh Thuê 2",
		"english_title": "The Expendables 2",
		"backdrop_path": "/nKRqIgGDbXCVSGfwGs0SCDMgLGK.jpg",
		"imdb": 6.6,
		"release_date": "2012-08-08",
		"runtime": 103,
		"genre_ids": [
			28,
			12,
			53
		],
		"hash": "0D352981ECAC8C3F56BB256EB3FC72D84B6DAE55",
		"updated": "2021-09-19T05:50:00.034+00:00"
	},
	{
		"id": 427,
		"tmdb_id": 72387,
		"imdb_id": "tt1656190",
		"title": "Safe",
		"english_title": "Safe",
		"backdrop_path": "/gxOgbcnX6A0L6d62nZ27ri5xAah.jpg",
		"imdb": 6.5,
		"release_date": "2012-04-16",
		"runtime": 94,
		"genre_ids": [
			28,
			80,
			53
		],
		"hash": "DFC1F87FB449F77A77F17DA4C014C38362419BB0",
		"updated": "2021-09-19T05:53:41.538+00:00"
	},
	{
		"id": 419,
		"tmdb_id": 76492,
		"imdb_id": "tt0837562",
		"title": "Khách Sạn Huyền Bí",
		"english_title": "Hotel Transylvania",
		"backdrop_path": "/tcHF7MvHRNyu23XsGnJmTnvB9Rc.jpg",
		"imdb": 7.1,
		"release_date": "2012-09-20",
		"runtime": 91,
		"genre_ids": [
			16,
			35,
			10751,
			14
		],
		"hash": "CD16F300B060E3C01C9E643F6D15526526B37648",
		"updated": "2021-09-19T06:35:50.245+00:00"
	},
	{
		"id": 423,
		"tmdb_id": 97630,
		"imdb_id": "tt1790885",
		"title": "Truy Sát Osama Bin Laden",
		"english_title": "Zero Dark Thirty",
		"backdrop_path": "/2O7qcKBJ9FpibQCx5qLxGeCs3f1.jpg",
		"imdb": 7.4,
		"release_date": "2012-12-19",
		"runtime": 157,
		"genre_ids": [
			53,
			18,
			36
		],
		"hash": "9A1ACB21848EEC60B1C01114BDE6C1B450E45E32",
		"updated": "2021-09-19T07:53:03.909+00:00"
	},
	{
		"id": 425,
		"tmdb_id": 62177,
		"imdb_id": "tt1217209",
		"title": "Công Chúa Tóc Xù",
		"english_title": "Brave",
		"backdrop_path": "/2fPiJYfPwYNbW7B05FfZPrySdm3.jpg",
		"imdb": 7.1,
		"release_date": "2012-06-21",
		"runtime": 93,
		"genre_ids": [
			16,
			12,
			35,
			10751,
			28,
			14
		],
		"hash": "4FFA45CE7350E7AA19C90A432089662DCD2621D5",
		"updated": "2021-09-19T07:56:33.685+00:00"
	},
	{
		"id": 417,
		"tmdb_id": 82507,
		"imdb_id": "tt1922777",
		"title": "Điềm Gở",
		"english_title": "Sinister",
		"backdrop_path": "/51zfEzYwTgZADXDGxRfL7btpgKR.jpg",
		"imdb": 6.8,
		"release_date": "2012-03-29",
		"runtime": 110,
		"genre_ids": [
			27,
			53,
			9648
		],
		"hash": "B32C9405806B3740D0D0A4D2417FEDAE4EAC4EB3",
		"updated": "2021-09-19T07:57:22.826+00:00"
	},
	{
		"id": 421,
		"tmdb_id": 86838,
		"imdb_id": "tt1931533",
		"title": "Bảy Kẻ Tâm Thần",
		"english_title": "Seven Psychopaths",
		"backdrop_path": "/5iqkbA1YXDuGuiX0C1ToxItR4oR.jpg",
		"imdb": 7.2,
		"release_date": "2012-10-12",
		"runtime": 110,
		"genre_ids": [
			35,
			80
		],
		"hash": "9E0C905018034B518F17D41BB551A9320AF9478C",
		"updated": "2021-09-19T07:58:43.204+00:00"
	},
	{
		"id": 422,
		"tmdb_id": 77174,
		"imdb_id": "tt1623288",
		"title": "ParaNorman",
		"english_title": "ParaNorman",
		"backdrop_path": "/1bEeM6C9tpF4qwsi06SMpRdB2Tk.jpg",
		"imdb": 7,
		"release_date": "2012-08-03",
		"runtime": 90,
		"genre_ids": [
			10751,
			16,
			12,
			35
		],
		"hash": "C55800078660AC9C0B8E0C0976C66C7F0C37E088",
		"updated": "2021-09-19T07:59:44.765+00:00"
	},
	{
		"id": 426,
		"tmdb_id": 49529,
		"imdb_id": "tt0401729",
		"title": "Người Hùng Sao Hỏa",
		"english_title": "John Carter",
		"backdrop_path": "/34B85FbSXmPGTYPgITmUVbcHGes.jpg",
		"imdb": 6.6,
		"release_date": "2012-03-07",
		"runtime": 132,
		"genre_ids": [
			28,
			12,
			878
		],
		"hash": "D93D5C27B83FD4850D32B079DB8F6DFDF0ECA0C0",
		"updated": "2021-09-19T08:09:35.69+00:00"
	},
	{
		"id": 409,
		"tmdb_id": 68812,
		"imdb_id": "tt1491044",
		"title": "Sát Thủ Máu Lạnh",
		"english_title": "The Iceman",
		"backdrop_path": "/p15h5542uhSzQmhSXHq0WhuD6XB.jpg",
		"imdb": 6.8,
		"release_date": "2012-09-01",
		"runtime": 105,
		"genre_ids": [
			53,
			80,
			18
		],
		"hash": "9A242EE5D732BCF1397BA725363BBD211351DFA9",
		"updated": "2021-09-19T08:17:46.258+00:00"
	},
	{
		"id": 410,
		"tmdb_id": 65086,
		"imdb_id": "tt1596365",
		"title": "Người Đàn Bà Áo Đen",
		"english_title": "The Woman in Black",
		"backdrop_path": "/m9AXMgSf7p78L819rn8tWS4H2ig.jpg",
		"imdb": 6.4,
		"release_date": "2012-02-03",
		"runtime": 95,
		"genre_ids": [
			18,
			27,
			53
		],
		"hash": "2A11B71C1EEB5D5FC29C574295BAB41184DD2DB0",
		"updated": "2021-09-19T08:24:29.429+00:00"
	},
	{
		"id": 430,
		"tmdb_id": 77016,
		"imdb_id": "tt1855199",
		"title": "Tàn Cuộc",
		"english_title": "End of Watch",
		"backdrop_path": "/gJJ8MagD7XAfwro3yO08DzY1f1L.jpg",
		"imdb": 7.6,
		"release_date": "2012-09-20",
		"runtime": 109,
		"genre_ids": [
			80,
			18,
			53
		],
		"hash": "253D66A984B05B20AD45E675F22DBACB0E323C05",
		"updated": "2021-09-19T08:26:51.345+00:00"
	},
	{
		"id": 424,
		"tmdb_id": 75674,
		"imdb_id": "tt1591479",
		"title": "Biệt Kích Ngầm",
		"english_title": "Act of Valor",
		"backdrop_path": "/sCcbOvmfxcOXs9GugAp2LVWaweC.jpg",
		"imdb": 6.5,
		"release_date": "2012-02-24",
		"runtime": 110,
		"genre_ids": [
			28,
			53,
			10752
		],
		"hash": "508B32FF7B247A8A2FB1CEB827F8CE129E228A18",
		"updated": "2021-09-19T08:36:57.369+00:00"
	},
	{
		"id": 416,
		"tmdb_id": 70981,
		"imdb_id": "tt1446714",
		"title": "Bí Ẩn Hành Tinh Chết",
		"english_title": "Prometheus",
		"backdrop_path": "/pi8sHFuXpMhb3uQUUUOCgRCoryD.jpg",
		"imdb": 7,
		"release_date": "2012-05-30",
		"runtime": 124,
		"genre_ids": [
			878,
			12,
			9648
		],
		"hash": "8E777F258E50F07FB778F6889EA4674A6C86300A",
		"updated": "2021-10-01T13:54:23.935+00:00"
	},
	{
		"id": 436,
		"tmdb_id": 70160,
		"imdb_id": "tt1392170",
		"title": "Đấu Trường Sinh Tử",
		"english_title": "The Hunger Games",
		"backdrop_path": "/m76jG1ecOV2lNi3iDNg8okSvYCK.jpg",
		"imdb": 7.2,
		"release_date": "2012-03-12",
		"runtime": 142,
		"genre_ids": [
			878,
			12,
			14
		],
		"hash": "9C696F27070A6E9927BD165AA77E61108815F8B1",
		"updated": "2021-09-18T12:57:50.515+00:00"
	},
	{
		"id": 434,
		"tmdb_id": 37724,
		"imdb_id": "tt1074638",
		"title": "Điệp Viên 007: Tử Địa Skyfall",
		"english_title": "Skyfall",
		"backdrop_path": "/1cHTQBfxfuIsT1zYEV5Fvndlt3S.jpg",
		"imdb": 7.7,
		"release_date": "2012-10-25",
		"runtime": 143,
		"genre_ids": [
			28,
			12,
			53
		],
		"hash": "188AA63C64E1D6B64B74F5BE36CB9244C08A3456",
		"updated": "2021-09-19T00:47:52.636+00:00"
	},
	{
		"id": 446,
		"tmdb_id": 82675,
		"imdb_id": "tt1397280",
		"title": "Cưỡng Đoạt 2",
		"english_title": "Taken 2",
		"backdrop_path": "/8Fpo3FrggeOdDcf0lPCCLmWcvN4.jpg",
		"imdb": 6.3,
		"release_date": "2012-09-27",
		"runtime": 91,
		"genre_ids": [
			28,
			80,
			53
		],
		"hash": "8C3868B3D1B54BB38AD89DF15EB8DD21C0105D47",
		"updated": "2021-09-19T01:25:05.206+00:00"
	},
	{
		"id": 454,
		"tmdb_id": 82693,
		"imdb_id": "tt1045658",
		"title": "Tình Yêu Tìm Lại",
		"english_title": "Silver Linings Playbook",
		"backdrop_path": "/pKEWe1JIWXZsumgBW7V2hNQcp1h.jpg",
		"imdb": 7.7,
		"release_date": "2012-09-08",
		"runtime": 122,
		"genre_ids": [
			18,
			35,
			10749
		],
		"hash": "61AEA426AFCF697773A762777BDF67E417A00891",
		"updated": "2021-09-19T03:04:47.16+00:00"
	},
	{
		"id": 444,
		"tmdb_id": 83542,
		"imdb_id": "tt1371111",
		"title": "Vân Đồ",
		"english_title": "Cloud Atlas",
		"backdrop_path": "/9ALq4ixy8xKNqdxdfnyReFWFg80.jpg",
		"imdb": 7.4,
		"release_date": "2012-10-26",
		"runtime": 172,
		"genre_ids": [
			18,
			878
		],
		"hash": "320B93AE469B77A1C71ABE7519E5D79585ED3BC0",
		"updated": "2021-09-19T04:52:31.13+00:00"
	},
	{
		"id": 448,
		"tmdb_id": 75780,
		"imdb_id": "tt0790724",
		"title": "Jack Reacher: Phát Súng Cuối Cùng",
		"english_title": "Jack Reacher",
		"backdrop_path": "/j6ZuTuZGsVMIVdYGaQEzeGFhFjT.jpg",
		"imdb": 7,
		"release_date": "2012-12-20",
		"runtime": 130,
		"genre_ids": [
			80,
			18,
			53,
			28
		],
		"hash": "FBAAB19E3B96BF5E32D3857E3A4A67F1D79AAD37",
		"updated": "2021-09-19T05:20:33.344+00:00"
	},
	{
		"id": 440,
		"tmdb_id": 22970,
		"imdb_id": "tt1259521",
		"title": "Ngôi Nhà Gỗ Trong Rừng",
		"english_title": "The Cabin in the Woods",
		"backdrop_path": "/1CxlO26zcinq9Pze7MyUMvuO9nn.jpg",
		"imdb": 7,
		"release_date": "2012-04-12",
		"runtime": 95,
		"genre_ids": [
			27,
			35,
			14,
			53
		],
		"hash": "EE48AC557B1ABE606D87F9C89758498F5AD660BA",
		"updated": "2021-09-19T05:13:55.029+00:00"
	},
	{
		"id": 443,
		"tmdb_id": 72105,
		"imdb_id": "tt1637725",
		"title": "Chú Gấu Ted",
		"english_title": "Ted",
		"backdrop_path": "/cfBHNVv9pto26a4qnwJ5F0gq9jg.jpg",
		"imdb": 6.9,
		"release_date": "2012-06-29",
		"runtime": 107,
		"genre_ids": [
			35,
			14
		],
		"hash": "D1C1A7EC4F83ADEECC70D698CA27F4762F11F2F5",
		"updated": "2021-09-19T05:26:17.322+00:00"
	},
	{
		"id": 435,
		"tmdb_id": 71679,
		"imdb_id": "tt1855325",
		"title": "Vùng Đất Quỷ Dữ 5: Báo Thù",
		"english_title": "Resident Evil: Retribution",
		"backdrop_path": "/daOUMiTRNA5BcACG0sb6SS1xjZx.jpg",
		"imdb": 5.4,
		"release_date": "2012-09-12",
		"runtime": 95,
		"genre_ids": [
			28,
			27,
			878
		],
		"hash": "87A915F1E07929600CF7A6CD9042A991816FCB4C",
		"updated": "2021-09-19T05:42:22.842+00:00"
	},
	{
		"id": 449,
		"tmdb_id": 64635,
		"imdb_id": "tt1386703",
		"title": "Tìm Lại Ký Ức",
		"english_title": "Total Recall",
		"backdrop_path": "/wyBFuzh9EQIeEB1xLJQTJFX06y2.jpg",
		"imdb": 6.3,
		"release_date": "2012-08-02",
		"runtime": 121,
		"genre_ids": [
			28,
			878,
			12,
			53
		],
		"hash": "D1C88A110FC4010789C9419FDAD00043C19CE2D1",
		"updated": "2021-09-19T06:19:03.826+00:00"
	},
	{
		"id": 438,
		"tmdb_id": 82690,
		"imdb_id": "tt1772341",
		"title": "Ralph Đập Phá",
		"english_title": "Wreck-It Ralph",
		"backdrop_path": "/hEIyL9G7QpXKEonUx2HAHRZ1Yqc.jpg",
		"imdb": 7.7,
		"release_date": "2012-11-01",
		"runtime": 101,
		"genre_ids": [
			10751,
			16,
			35,
			12
		],
		"hash": "2EF6DE6BE35239D370DB76E5B47BE49D96BBF4DA",
		"updated": "2021-09-19T06:25:35.718+00:00"
	},
	{
		"id": 447,
		"tmdb_id": 87502,
		"imdb_id": "tt1907668",
		"title": "Chuyến Bay Định Mệnh",
		"english_title": "Flight",
		"backdrop_path": "/40UF5BPMgdEQtcQ0amZW9UBvM2t.jpg",
		"imdb": 7.3,
		"release_date": "2012-11-02",
		"runtime": 138,
		"genre_ids": [
			18
		],
		"hash": "672E5156975C36B1077C7FC6B050112F271B7FE3",
		"updated": "2021-09-19T07:51:32.048+00:00"
	},
	{
		"id": 433,
		"tmdb_id": 72976,
		"imdb_id": "tt0443272",
		"title": "Lincoln",
		"english_title": "Lincoln",
		"backdrop_path": "/j525ynPzedarMUYvJDl3sP71Byd.jpg",
		"imdb": 7.3,
		"release_date": "2012-11-09",
		"runtime": 149,
		"genre_ids": [
			36,
			18
		],
		"hash": "6D457C7F1110530B4A3738B077D78A0543B47455",
		"updated": "2021-09-19T07:52:40.278+00:00"
	},
	{
		"id": 455,
		"tmdb_id": 58244,
		"imdb_id": "tt1374992",
		"title": "Thế Giới Ngược",
		"english_title": "Upside Down",
		"backdrop_path": "/vVZwOnovnXT0IUvXmc5J07x5hbw.jpg",
		"imdb": 6.4,
		"release_date": "2012-09-27",
		"runtime": 104,
		"genre_ids": [
			10749,
			878,
			18,
			14
		],
		"hash": "40DB1208112A361095428938115DE1A5DA1C817F",
		"updated": "2021-09-19T07:57:03.578+00:00"
	},
	{
		"id": 452,
		"tmdb_id": 76726,
		"imdb_id": "tt1706593",
		"title": "Sức Mạnh Vô Hình",
		"english_title": "Chronicle",
		"backdrop_path": "/gnVj0anmHmk3S4tprHbBHXFCo5M.jpg",
		"imdb": 7,
		"release_date": "2012-02-01",
		"runtime": 84,
		"genre_ids": [
			878,
			18,
			53
		],
		"hash": "A51CA799FAE92A8CF7F09A8C8218869DBAA356AE",
		"updated": "2021-09-19T08:13:17.222+00:00"
	},
	{
		"id": 445,
		"tmdb_id": 82633,
		"imdb_id": "tt1212450",
		"title": "Luật Rừng",
		"english_title": "Lawless",
		"backdrop_path": "/o6STU97ojxZgsHbFMvOgTFzBc33.jpg",
		"imdb": 7.3,
		"release_date": "2012-08-29",
		"runtime": 115,
		"genre_ids": [
			80,
			18,
			37
		],
		"hash": "D256434148ADBAA2837A4FE19CF92066488429A9",
		"updated": "2021-09-19T08:13:28.851+00:00"
	},
	{
		"id": 439,
		"tmdb_id": 84199,
		"imdb_id": "tt1763303",
		"title": "Lần Đầu Tiên",
		"english_title": "The First Time",
		"backdrop_path": "/dE0NoGwzU81sYTLY9gUGEzLjozG.jpg",
		"imdb": 6.8,
		"release_date": "2012-10-19",
		"runtime": 95,
		"genre_ids": [
			18,
			35,
			10749
		],
		"hash": "BF3BAF59A7EF128E6D8F1DF28C56D942CA9DB611",
		"updated": "2021-09-19T08:15:25.568+00:00"
	},
	{
		"id": 456,
		"tmdb_id": 68722,
		"imdb_id": "tt1560747",
		"title": "Bậc Thầy",
		"english_title": "The Master",
		"backdrop_path": "/q8BrpqSdH6csD4oNHbuCl0vplC1.jpg",
		"imdb": 7.2,
		"release_date": "2012-09-07",
		"runtime": 137,
		"genre_ids": [
			18
		],
		"hash": "633A43681D60A4E6B11408CD34C4A9C5BF8BD570",
		"updated": "2021-09-19T08:15:44.402+00:00"
	},
	{
		"id": 442,
		"tmdb_id": 72570,
		"imdb_id": "tt1606389",
		"title": "Yêu Lại Từ đầu",
		"english_title": "The Vow",
		"backdrop_path": "/owAKFPjkXs0GQith6B9rF2VBsMd.jpg",
		"imdb": 6.8,
		"release_date": "2012-02-05",
		"runtime": 104,
		"genre_ids": [
			18,
			10749
		],
		"hash": "AA9B85BDCB25B6C5155C8C76D701E191C1B7F8EC",
		"updated": "2021-09-19T08:24:16.274+00:00"
	},
	{
		"id": 453,
		"tmdb_id": 127533,
		"imdb_id": "tt1979319",
		"title": "Lãng Khách Kenshin: Sát Thủ Huyền Thoại",
		"english_title": "Rurouni Kenshin Part I: Origins",
		"backdrop_path": "/eK8haajpcaI6hoto7B57gUt943r.jpg",
		"imdb": 7.5,
		"release_date": "2012-08-25",
		"runtime": 134,
		"genre_ids": [
			12,
			28,
			18,
			36
		],
		"hash": "DBB37A8B3CC01DE6B1A51876194D5CDBD31ECFA5",
		"updated": "2021-09-19T08:36:19.383+00:00"
	},
	{
		"id": 450,
		"tmdb_id": 85446,
		"imdb_id": "tt1800741",
		"title": "Bước Nhảy Đường Phố (Vũ Điệu Miami)",
		"english_title": "Step Up Revolution",
		"backdrop_path": "/j4uVkUey1oOqhrTOaxLj0lDjxZO.jpg",
		"imdb": 6.4,
		"release_date": "2012-07-26",
		"runtime": 99,
		"genre_ids": [
			10402,
			18,
			10749
		],
		"hash": "11311FB7E957D04905D4E9B863713241F5A2CCF0",
		"updated": "2021-09-19T08:40:46.672+00:00"
	},
	{
		"id": 437,
		"tmdb_id": 1930,
		"imdb_id": "tt0948470",
		"title": "Người Nhện Siêu Đẳng",
		"english_title": "The Amazing Spider-Man",
		"backdrop_path": "/2zHtm2Ohz9Q9sxsbpRMLuVJIlGK.jpg",
		"imdb": 6.9,
		"release_date": "2012-06-23",
		"runtime": 136,
		"genre_ids": [
			28,
			12,
			14
		],
		"hash": "7A3736A3B7DB99F57FC0A35FA8270059CDD3B741",
		"updated": "2021-09-19T10:09:24.462+00:00"
	},
	{
		"id": 451,
		"tmdb_id": 75629,
		"imdb_id": "tt0860907",
		"title": "Đặc Vụ Không Gian: Không Thể Làm Lại",
		"english_title": "Evangelion: 3.0 You Can (Not) Redo",
		"backdrop_path": "/yREwtI2YIpyd1VmMIJBMJE0tF4U.jpg",
		"imdb": 7,
		"release_date": "2012-11-17",
		"runtime": 96,
		"genre_ids": [
			16,
			878,
			28,
			18
		],
		"hash": "519DE9C78B597664F54BCA4BC3859B01F6825AF6",
		"updated": "2021-09-19T10:11:16.304+00:00"
	},
	{
		"id": 459,
		"tmdb_id": 84892,
		"imdb_id": "tt1659337",
		"title": "Câu chuyện tuổi teen",
		"english_title": "The Perks of Being a Wallflower",
		"backdrop_path": "/rP7yVVy5qUc6mzqnbvvskmR4OvN.jpg",
		"imdb": 8,
		"release_date": "2012-09-20",
		"runtime": 103,
		"genre_ids": [
			18
		],
		"hash": "6E4836EB717303628B4C90D5EA2DE0A0ACBAED0C",
		"updated": "2021-09-18T05:58:52.029+00:00"
	},
	{
		"id": 460,
		"tmdb_id": 54138,
		"imdb_id": "tt1408101",
		"title": "Du Hành Giữa Các Vì Sao: Chìm Vào Bóng Tối",
		"english_title": "Star Trek Into Darkness",
		"backdrop_path": "/gH6NnSOEPLbRJ2U6D7xm2zmp6bJ.jpg",
		"imdb": 7.7,
		"release_date": "2013-05-05",
		"runtime": 132,
		"genre_ids": [
			28,
			12,
			878
		],
		"hash": "BF5529C12559DB47FEA3E57BC7ECE827D188589B",
		"updated": "2021-09-19T00:54:17.672+00:00"
	},
	{
		"id": 466,
		"tmdb_id": 109445,
		"imdb_id": "tt2294629",
		"title": "Nữ Hoàng Băng Giá",
		"english_title": "Frozen",
		"backdrop_path": "/ws1dxpFpOXMOBPkplThbNaUtxFp.jpg",
		"imdb": 7.4,
		"release_date": "2013-11-20",
		"runtime": 102,
		"genre_ids": [
			16,
			12,
			10751
		],
		"hash": "4956A4E976EA948025C3C3554567CA2820F65F64",
		"updated": "2021-09-19T04:51:34.022+00:00"
	},
	{
		"id": 464,
		"tmdb_id": 49047,
		"imdb_id": "tt1454468",
		"title": "Cuộc Chiến Không Trọng Lực",
		"english_title": "Gravity",
		"backdrop_path": "/oR3RLn0sFdbuvkAIHl5uaKgIuv4.jpg",
		"imdb": 7.7,
		"release_date": "2013-10-03",
		"runtime": 91,
		"genre_ids": [
			878,
			53,
			18
		],
		"hash": "95731CE3C5EA065766F6EB92C9A426A58ADA56FE",
		"updated": "2021-09-19T04:36:04.484+00:00"
	},
	{
		"id": 462,
		"tmdb_id": 4258,
		"imdb_id": "tt0795461",
		"title": "Scary Movie 5",
		"english_title": "Scary Movie 5",
		"backdrop_path": "/mYFFk3H8AO3A5e2zU7yqMXQQrDv.jpg",
		"imdb": 3.5,
		"release_date": "2013-04-11",
		"runtime": 86,
		"genre_ids": [
			35
		],
		"hash": "143A4E1024B3456110445B9D7C850D79B1AE1711",
		"updated": "2021-09-19T04:40:53.577+00:00"
	},
	{
		"id": 480,
		"tmdb_id": 116745,
		"imdb_id": "tt0359950",
		"title": "Bí Mật Của Walter Mitty",
		"english_title": "The Secret Life of Walter Mitty",
		"backdrop_path": "/6GrruoWWXJuGTF4DUnwfS9Wfohp.jpg",
		"imdb": 7.3,
		"release_date": "2013-12-18",
		"runtime": 114,
		"genre_ids": [
			12,
			35,
			18,
			14
		],
		"hash": "15EB8FF6F65CB51F59E95F6BE55EFE22DC70D707",
		"updated": "2021-09-19T04:53:49.081+00:00"
	},
	{
		"id": 476,
		"tmdb_id": 75656,
		"imdb_id": "tt1670345",
		"title": "Phi Vụ Thế Kỷ",
		"english_title": "Now You See Me",
		"backdrop_path": "/bPk4yspDWAWpNcF9nqQdVSWN3uZ.jpg",
		"imdb": 7.3,
		"release_date": "2013-05-29",
		"runtime": 116,
		"genre_ids": [
			53,
			80
		],
		"hash": "781AD3ADBD9B81B64E4C530712AE9199B1DFBAE5",
		"updated": "2021-09-19T05:01:06.136+00:00"
	},
	{
		"id": 468,
		"tmdb_id": 107985,
		"imdb_id": "tt1213663",
		"title": "Kết Thúc Của Thế Giới",
		"english_title": "The World's End",
		"backdrop_path": "/pHQ52ncAab9LOcQXRI0Tgfc5CsI.jpg",
		"imdb": 7,
		"release_date": "2013-07-18",
		"runtime": 109,
		"genre_ids": [
			35,
			28,
			878
		],
		"hash": "BD70010EECD72ECBD57B250A8335560AF7F938D1",
		"updated": "2021-09-19T05:13:38.415+00:00"
	},
	{
		"id": 478,
		"tmdb_id": 68726,
		"imdb_id": "tt1663662",
		"title": "Siêu Đại Chiến Thái Bình Dương",
		"english_title": "Pacific Rim",
		"backdrop_path": "/bKgVjZtwOsN5Ezz42HbtC38GClo.jpg",
		"imdb": 6.9,
		"release_date": "2013-07-11",
		"runtime": 131,
		"genre_ids": [
			28,
			878,
			12
		],
		"hash": "4F178D9782845F20714E5D8B5E05EF68A77E54F9",
		"updated": "2021-09-19T05:26:42.716+00:00"
	},
	{
		"id": 463,
		"tmdb_id": 158015,
		"imdb_id": "tt2184339",
		"title": "Ngày Thanh Trừng",
		"english_title": "The Purge",
		"backdrop_path": "/1xs0mkou44cWhcPgiKPdmROffqq.jpg",
		"imdb": 5.7,
		"release_date": "2013-05-31",
		"runtime": 86,
		"genre_ids": [
			878,
			27,
			53
		],
		"hash": "479BB1022275E502DF5E4A7578D5E9220A9C3CB4",
		"updated": "2021-09-19T06:17:24.624+00:00"
	},
	{
		"id": 475,
		"tmdb_id": 117251,
		"imdb_id": "tt2334879",
		"title": "Giải Cứu Nhà Trắng",
		"english_title": "White House Down",
		"backdrop_path": "/5ib5uwY84VkcO8Q4xULbCTBuoVt.jpg",
		"imdb": 6.4,
		"release_date": "2013-06-27",
		"runtime": 131,
		"genre_ids": [
			28,
			18,
			53
		],
		"hash": "5ADBAD2FDF1BF2F98575B4D4876CC3F4A4D78FB8",
		"updated": "2021-09-19T06:18:34.769+00:00"
	},
	{
		"id": 467,
		"tmdb_id": 49519,
		"imdb_id": "tt0481499",
		"title": "Cuộc Phiêu Lưu Của Nhà Croods",
		"english_title": "The Croods",
		"backdrop_path": "/wU9Xurn5VgEEkpWR00GNGZu7hoy.jpg",
		"imdb": 7.2,
		"release_date": "2013-03-20",
		"runtime": 98,
		"genre_ids": [
			28,
			12,
			16,
			35,
			10751,
			14
		],
		"hash": "B07D2E283FEE5AE2E597CE02F7E158BEA0C8D153",
		"updated": "2021-09-19T06:28:45.74+00:00"
	},
	{
		"id": 471,
		"tmdb_id": 64682,
		"imdb_id": "tt1343092",
		"title": "Gatsby Vĩ Đại",
		"english_title": "The Great Gatsby",
		"backdrop_path": "/6v4ha2dkk9nmjP3nQtgSDe45qrU.jpg",
		"imdb": 7.2,
		"release_date": "2013-05-10",
		"runtime": 143,
		"genre_ids": [
			18,
			10749
		],
		"hash": "56F6CBBA64F07D96AE6FE51828A60B8E03A3F028",
		"updated": "2021-09-19T06:38:55.081+00:00"
	},
	{
		"id": 474,
		"tmdb_id": 109451,
		"imdb_id": "tt1985966",
		"title": "Cơn Mưa Thịt Viên II",
		"english_title": "Cloudy with a Chance of Meatballs 2",
		"backdrop_path": "/2iHkXF7fE3fQHrhriW34gA8vMUn.jpg",
		"imdb": 6.4,
		"release_date": "2013-09-26",
		"runtime": 95,
		"genre_ids": [
			16,
			10751,
			35
		],
		"hash": "0DC67F870DF40EC329534CB9D68E77D206062B1B",
		"updated": "2021-09-19T07:52:29.3+00:00"
	},
	{
		"id": 472,
		"tmdb_id": 91586,
		"imdb_id": "tt2226417",
		"title": "Qủy Quyệt 2",
		"english_title": "Insidious: Chapter 2",
		"backdrop_path": "/qKemWilOMuRE8nfKEQdxY1ZWUcM.jpg",
		"imdb": 6.6,
		"release_date": "2013-09-12",
		"runtime": 106,
		"genre_ids": [
			27,
			53
		],
		"hash": "64FB492A59B41F148E0A8126132FE7FF8E0826ED",
		"updated": "2021-09-19T07:57:50.341+00:00"
	},
	{
		"id": 470,
		"tmdb_id": 112949,
		"imdb_id": "tt1702439",
		"title": "Thiên Đường Bình Yên",
		"english_title": "Safe Haven",
		"backdrop_path": "/uL8YonCCjqsjHU4er5XBQuhPD8T.jpg",
		"imdb": 6.7,
		"release_date": "2013-02-07",
		"runtime": 115,
		"genre_ids": [
			10749
		],
		"hash": "87E0C631D4DB0710638377584E20D9F6976C275C",
		"updated": "2021-09-19T08:02:32.474+00:00"
	},
	{
		"id": 479,
		"tmdb_id": 97370,
		"imdb_id": "tt1441395",
		"title": "Dưới Lớp Mặt Nạ",
		"english_title": "Under the Skin",
		"backdrop_path": "/vzILG1ED2h7XfV3IRmonhvlzazu.jpg",
		"imdb": 6.3,
		"release_date": "2013-08-29",
		"runtime": 108,
		"genre_ids": [
			53,
			878,
			18
		],
		"hash": "FAA634C2A3B68D2617F2828C8B3EC90D0A803D2C",
		"updated": "2021-09-19T08:04:03.168+00:00"
	},
	{
		"id": 461,
		"tmdb_id": 160588,
		"imdb_id": "tt2334873",
		"title": "Hoa Nhài Xanh",
		"english_title": "Blue Jasmine",
		"backdrop_path": "/5hwNsCH7QHbC8DlLWYCxIYEKafy.jpg",
		"imdb": 7.3,
		"release_date": "2013-07-25",
		"runtime": 99,
		"genre_ids": [
			18
		],
		"hash": "44EC61297D65C408B6638D2B6702AF63B50A1E7E",
		"updated": "2021-09-19T08:14:09.781+00:00"
	},
	{
		"id": 477,
		"tmdb_id": 198277,
		"imdb_id": "tt1980929",
		"title": "Yêu Cuồng Si",
		"english_title": "Begin Again",
		"backdrop_path": "/ofOIQtc296XZvK4tdA1dEWUAn1F.jpg",
		"imdb": 7.4,
		"release_date": "2013-09-07",
		"runtime": 104,
		"genre_ids": [
			35,
			10402,
			10749,
			18
		],
		"hash": "BF341CCF15B62DE9D41E4FF5E06840CE8E8851F5",
		"updated": "2021-09-19T08:18:16.613+00:00"
	},
	{
		"id": 465,
		"tmdb_id": 258216,
		"imdb_id": "tt1937390",
		"title": "Người Đàn Bà Cuồng Dâm 1",
		"english_title": "Nymphomaniac: Vol. I",
		"backdrop_path": "/3qpXXZ5R9kFLeNauTWUHyg7JPk2.jpg",
		"imdb": 6.9,
		"release_date": "2013-12-25",
		"runtime": 118,
		"genre_ids": [
			18
		],
		"hash": "0DC934BFD54019CC126EA31DFA10E6F4336693AF",
		"updated": "2021-09-19T08:21:39.542+00:00"
	},
	{
		"id": 469,
		"tmdb_id": 72559,
		"imdb_id": "tt1583421",
		"title": "Biệt Đội G.I. Joe: Báo Thù",
		"english_title": "G.I. Joe: Retaliation",
		"backdrop_path": "/nwGPPwwJ7M3eIeIl1Uml2JfzYrF.jpg",
		"imdb": 5.8,
		"release_date": "2013-03-27",
		"runtime": 110,
		"genre_ids": [
			878,
			12,
			28,
			53
		],
		"hash": "6FA5159DF4B4138BD009FCA8F0F1E103D7FA3C37",
		"updated": "2021-09-19T08:38:19.597+00:00"
	},
	{
		"id": 458,
		"tmdb_id": 44833,
		"imdb_id": "tt1440129",
		"title": "Chiến Hạm",
		"english_title": "Battleship",
		"backdrop_path": "/tDoOnGlfCDn6etsWMEzrg40lM4b.jpg",
		"imdb": 5.8,
		"release_date": "2012-04-11",
		"runtime": 131,
		"genre_ids": [
			53,
			28,
			12,
			878
		],
		"hash": "46820F05C9E4372DE6426BDF3DC089DFFA1831EB",
		"updated": "2021-09-19T11:01:02.406+00:00"
	},
	{
		"id": 473,
		"tmdb_id": 149870,
		"imdb_id": "tt2013293",
		"title": "Gió Nổi",
		"english_title": "The Wind Rises",
		"backdrop_path": "/qHNn6lQ4TLS6ClckCztMAvgsTIP.jpg",
		"imdb": 7.8,
		"release_date": "2013-07-20",
		"runtime": 126,
		"genre_ids": [
			16,
			10752,
			36,
			18,
			10749
		],
		"hash": "2B62A7AE11BB59C19E8E17D158C2612EFE1020D8",
		"updated": "2021-09-19T10:44:06.468+00:00"
	},
	{
		"id": 482,
		"tmdb_id": 152532,
		"imdb_id": "tt0790636",
		"title": "Hội những người mua thuốc Dallas",
		"english_title": "Dallas Buyers Club",
		"backdrop_path": "/28POTJOV9RBk7UrAomf7i5oOCtQ.jpg",
		"imdb": 8,
		"release_date": "2013-11-17",
		"runtime": 117,
		"genre_ids": [
			18,
			36
		],
		"hash": "9DE63BACB65CE4BBB853F57D4843410D1F09FFBD",
		"updated": "2021-09-18T05:59:48.202+00:00"
	},
	{
		"id": 492,
		"tmdb_id": 169813,
		"imdb_id": "tt2370248",
		"title": "Trại Trẻ 12",
		"english_title": "Short Term 12",
		"backdrop_path": "/hL5fvJrLeJrYbSYeUuV8SR96GVa.jpg",
		"imdb": 8,
		"release_date": "2013-08-23",
		"runtime": 96,
		"genre_ids": [
			18
		],
		"hash": "6C9C291C40FA6AF227F41F62312CB556CDE6AF5F",
		"updated": "2021-09-18T06:00:16.041+00:00"
	},
	{
		"id": 499,
		"tmdb_id": 76338,
		"imdb_id": "tt1981115",
		"title": "Thần Sấm 2: Thế Giới Bóng Tối",
		"english_title": "Thor: The Dark World",
		"backdrop_path": "/2WA9tdy5RcUgh5rL9xR473pNzVn.jpg",
		"imdb": 6.9,
		"release_date": "2013-10-29",
		"runtime": 112,
		"genre_ids": [
			28,
			12,
			14
		],
		"hash": "6393195B9986C748E4F8E7CCB4F10C72F6CE7BBC",
		"updated": "2021-09-18T12:53:23.947+00:00"
	},
	{
		"id": 495,
		"tmdb_id": 47964,
		"imdb_id": "tt1606378",
		"title": "Đương Đầu Thử Thách 5",
		"english_title": "A Good Day to Die Hard",
		"backdrop_path": "/2oonCHLm8xdl9f6LKz8JXOWtyUn.jpg",
		"imdb": 5.3,
		"release_date": "2013-02-06",
		"runtime": 98,
		"genre_ids": [
			28,
			53
		],
		"hash": "E65FA726F06082ADBA2378D42515003C2B85E6C0",
		"updated": "2021-09-18T13:20:21.468+00:00"
	},
	{
		"id": 497,
		"tmdb_id": 96721,
		"imdb_id": "tt1979320",
		"title": "Đường Đua Nghẹt Thở",
		"english_title": "Rush",
		"backdrop_path": "/nAtf9zsCRYBX1rKAZeoYUm7hlyO.jpg",
		"imdb": 8.1,
		"release_date": "2013-09-02",
		"runtime": 123,
		"genre_ids": [
			18,
			28
		],
		"hash": "1E9E92954339BBAE593FD6B77211302A7F1DEDD6",
		"updated": "2021-09-18T13:20:51.898+00:00"
	},
	{
		"id": 491,
		"tmdb_id": 138843,
		"imdb_id": "tt1457767",
		"title": "Ám Ảnh Kinh Hoàng",
		"english_title": "The Conjuring",
		"backdrop_path": "/7oBlplQLcQ0E8rF6Pd4Cbi9ADg.jpg",
		"imdb": 7.5,
		"release_date": "2013-03-20",
		"runtime": 112,
		"genre_ids": [
			27,
			53
		],
		"hash": "374A9448662B6D8073FE54933B52D9FC8E206B93",
		"updated": "2021-09-19T04:47:14.643+00:00"
	},
	{
		"id": 501,
		"tmdb_id": 168672,
		"imdb_id": "tt1800241",
		"title": "Săn Tiền Kiểu Mỹ",
		"english_title": "American Hustle",
		"backdrop_path": "/7h51ikiQmckWoJI2J9CHA5KmUdw.jpg",
		"imdb": 7.2,
		"release_date": "2013-12-12",
		"runtime": 138,
		"genre_ids": [
			18,
			80
		],
		"hash": "10AB9CAD41F545893AF00993CBFA168FABD46395",
		"updated": "2021-09-19T05:02:46.971+00:00"
	},
	{
		"id": 498,
		"tmdb_id": 110415,
		"imdb_id": "tt1706620",
		"title": "Chuyến Tàu Băng Giá",
		"english_title": "Snowpiercer",
		"backdrop_path": "/tmrmuszmAKwh33qiRuwpAMEr4Kk.jpg",
		"imdb": 7.1,
		"release_date": "2013-08-01",
		"runtime": 127,
		"genre_ids": [
			28,
			878,
			18
		],
		"hash": "FE305724B1EA9F0FB142A6A46D425160F3C458E8",
		"updated": "2021-09-19T05:09:09.974+00:00"
	},
	{
		"id": 481,
		"tmdb_id": 204082,
		"imdb_id": "tt2312718",
		"title": "Bước Đường Cùng",
		"english_title": "Homefront",
		"backdrop_path": "/xtKTawJFuMlwxgURA3SdEQl63QA.jpg",
		"imdb": 6.5,
		"release_date": "2013-11-12",
		"runtime": 100,
		"genre_ids": [
			28,
			53
		],
		"hash": "32744E797CBCA3260DFE2BBCB2E4C7CB2A0957CE",
		"updated": "2021-09-19T05:54:06.36+00:00"
	},
	{
		"id": 505,
		"tmdb_id": 119283,
		"imdb_id": "tt1904996",
		"title": "Tay Trộm Chuyên Nghiệp",
		"english_title": "Parker",
		"backdrop_path": "/uERxWouKjpH17VGjsXiLYX6qqjR.jpg",
		"imdb": 6.2,
		"release_date": "2013-01-23",
		"runtime": 118,
		"genre_ids": [
			28,
			80
		],
		"hash": "285006D3F9C95919CF9BFC0C0D840F7B09E12343",
		"updated": "2021-09-19T06:22:21.613+00:00"
	},
	{
		"id": 488,
		"tmdb_id": 87421,
		"imdb_id": "tt1411250",
		"title": "Riddick 3: Thống Lĩnh Bóng Tối",
		"english_title": "Riddick",
		"backdrop_path": "/7dlup4brptOJJ0h2ObUA7kOZkvp.jpg",
		"imdb": 6.4,
		"release_date": "2013-09-02",
		"runtime": 119,
		"genre_ids": [
			878,
			28,
			53
		],
		"hash": "92B760ABFCAF71DFF25298315CF54FED8BBE6F1C",
		"updated": "2021-09-19T06:37:43.969+00:00"
	},
	{
		"id": 493,
		"tmdb_id": 138697,
		"imdb_id": "tt2229499",
		"title": "Don Jon",
		"english_title": "Don Jon",
		"backdrop_path": "/waAURZ6ETQR06BJqiueTCztgAAz.jpg",
		"imdb": 6.5,
		"release_date": "2013-09-12",
		"runtime": 90,
		"genre_ids": [
			10749,
			35,
			18
		],
		"hash": "B4658CCF0C2947ED8CF3E602E02C4F9E092E2EC4",
		"updated": "2021-09-19T06:39:28.854+00:00"
	},
	{
		"id": 487,
		"tmdb_id": 109428,
		"imdb_id": "tt1288558",
		"title": "Ma Cây",
		"english_title": "Evil Dead",
		"backdrop_path": "/1sZLyym7CFTGAzfIwUUNPz2ZCiD.jpg",
		"imdb": 6.5,
		"release_date": "2013-04-05",
		"runtime": 91,
		"genre_ids": [
			27
		],
		"hash": "854800D77EE9F85F0883D29A1C3DDF1E701C1C17",
		"updated": "2021-09-19T06:39:40.589+00:00"
	},
	{
		"id": 489,
		"tmdb_id": 116711,
		"imdb_id": "tt0848537",
		"title": "Trận Hùng Chiến Xứ Sở Lá Cây",
		"english_title": "Epic",
		"backdrop_path": "/g29apjNwL39ridK0NMeTipoSRSx.jpg",
		"imdb": 6.7,
		"release_date": "2013-05-15",
		"runtime": 102,
		"genre_ids": [
			16,
			12,
			10751,
			14
		],
		"hash": "B3E429BCDF14FE36514103D59F851018472727E6",
		"updated": "2021-09-19T07:51:21.898+00:00"
	},
	{
		"id": 494,
		"tmdb_id": 76640,
		"imdb_id": "tt1549920",
		"title": "Chốt Chặn Cuối Cùng",
		"english_title": "The Last Stand",
		"backdrop_path": "/jpRH65VSlpM27OK1W3QnDNpebPz.jpg",
		"imdb": 6.3,
		"release_date": "2013-01-12",
		"runtime": 107,
		"genre_ids": [
			28,
			80,
			53
		],
		"hash": "09DBF7DF3928A8D1215113F4441D2F9A7DCDBFA6",
		"updated": "2021-09-19T07:52:07.808+00:00"
	},
	{
		"id": 496,
		"tmdb_id": 116741,
		"imdb_id": "tt2234155",
		"title": "Thực Tập Sinh",
		"english_title": "The Internship",
		"backdrop_path": "/w9eHQBCT9WlVEy2u2jjO2JY26xs.jpg",
		"imdb": 6.3,
		"release_date": "2013-06-07",
		"runtime": 119,
		"genre_ids": [
			35
		],
		"hash": "62CA2E028A460BDA3E9CB523B363579924327C8B",
		"updated": "2021-09-19T07:54:53.375+00:00"
	},
	{
		"id": 484,
		"tmdb_id": 157547,
		"imdb_id": "tt2388715",
		"title": "Ma Gương",
		"english_title": "Oculus",
		"backdrop_path": "/vsgari5D8JqxUjSeMLosEdzvIWE.jpg",
		"imdb": 6.5,
		"release_date": "2013-09-08",
		"runtime": 104,
		"genre_ids": [
			27
		],
		"hash": "99D372502D9F34A9CFBB70D689F46D8945AAB70B",
		"updated": "2021-09-19T07:58:32.522+00:00"
	},
	{
		"id": 483,
		"tmdb_id": 140823,
		"imdb_id": "tt2140373",
		"title": "Cuộc Giải Cứu Thần Kỳ",
		"english_title": "Saving Mr. Banks",
		"backdrop_path": "/aq2AhzqhszN6YsFMd1pFJwikZpG.jpg",
		"imdb": 7.5,
		"release_date": "2013-11-16",
		"runtime": 125,
		"genre_ids": [
			35,
			18,
			36
		],
		"hash": "90E99C776DBA9F61E705EA288790E1781539F199",
		"updated": "2021-09-19T07:59:34.852+00:00"
	},
	{
		"id": 502,
		"tmdb_id": 165213,
		"imdb_id": "tt2625030",
		"title": "Thế Giới Mới",
		"english_title": "New World",
		"backdrop_path": "/zPo7SQ20IqcZK6JPjCWg2GzOCQp.jpg",
		"imdb": 7.6,
		"release_date": "2013-02-21",
		"runtime": 134,
		"genre_ids": [
			53
		],
		"hash": "A0EB3E3AF868266A1125FDEAE16F514D3D72EF6B",
		"updated": "2021-09-19T08:01:14.353+00:00"
	},
	{
		"id": 485,
		"tmdb_id": 152742,
		"imdb_id": "tt1924396",
		"title": "Kẻ Lập Dị",
		"english_title": "The Best Offer",
		"backdrop_path": "/6EQ5L1Sqjcq30anS1hzGABe9ySa.jpg",
		"imdb": 7.8,
		"release_date": "2013-01-01",
		"runtime": 124,
		"genre_ids": [
			18,
			10749,
			80,
			9648
		],
		"hash": "C69035D35175B7A47089985B5B731854EB4C0B77",
		"updated": "2021-09-19T08:09:25.279+00:00"
	},
	{
		"id": 504,
		"tmdb_id": 200085,
		"imdb_id": "tt2351310",
		"title": "Đại Dịch Cúm",
		"english_title": "The Flu",
		"backdrop_path": "/p5QRkJPpshbNWmS9hpuPcrW2j4G.jpg",
		"imdb": 6.6,
		"release_date": "2013-08-14",
		"runtime": 122,
		"genre_ids": [
			28,
			18
		],
		"hash": "F4B982DE273FB13AB4A2C0703AC0FE7D65E9067F",
		"updated": "2021-09-19T10:12:17.525+00:00"
	},
	{
		"id": 503,
		"tmdb_id": 86825,
		"imdb_id": "tt1682180",
		"title": "Kẻ Đốt Lò",
		"english_title": "Stoker",
		"backdrop_path": "/e3vrH5vo1Gj9rh0gQnLmrOmXyv7.jpg",
		"imdb": 6.8,
		"release_date": "2013-02-28",
		"runtime": 99,
		"genre_ids": [
			18,
			27,
			53
		],
		"hash": "8D91D847E2AD4430DA071EE30257C9531ED28359",
		"updated": "2021-09-19T08:12:03.798+00:00"
	},
	{
		"id": 486,
		"tmdb_id": 181886,
		"imdb_id": "tt2316411",
		"title": "Kẻ Thù",
		"english_title": "Enemy",
		"backdrop_path": "/f6B9dv6YVPU0ZA5zyilPA72X85Y.jpg",
		"imdb": 6.9,
		"release_date": "2013-12-31",
		"runtime": 91,
		"genre_ids": [
			53,
			9648
		],
		"hash": "152FD0BED61676D6253AFD2AFCAEBBA9686F101C",
		"updated": "2021-12-02T10:37:33.718+00:00"
	},
	{
		"id": 522,
		"tmdb_id": 152601,
		"imdb_id": "tt1798709",
		"title": "Hạnh Phúc Ảo",
		"english_title": "Her",
		"backdrop_path": "/cUqkGYzj11e0a0bceUUsN8VEgT1.jpg",
		"imdb": 8,
		"release_date": "2013-12-18",
		"runtime": 126,
		"genre_ids": [
			10749,
			878,
			18
		],
		"hash": "E56880DBBDC834706C9F9272C84C68517A7ADBB9",
		"updated": "2021-09-18T06:02:30.722+00:00"
	},
	{
		"id": 512,
		"tmdb_id": 132344,
		"imdb_id": "tt2209418",
		"title": "Trước Lúc Nửa Đêm",
		"english_title": "Before Midnight",
		"backdrop_path": "/k2MNeyhNTKN6W6twE0IMyVkAsGF.jpg",
		"imdb": 7.9,
		"release_date": "2013-04-05",
		"runtime": 109,
		"genre_ids": [
			10749,
			18
		],
		"hash": "D6EEAAAEDCB817F04011340521555CD79C96E8CE",
		"updated": "2021-09-18T12:05:30.071+00:00"
	},
	{
		"id": 517,
		"tmdb_id": 101299,
		"imdb_id": "tt1951264",
		"title": "Đấu Trường Sinh Tử 2: Bắt Lửa",
		"english_title": "The Hunger Games: Catching Fire",
		"backdrop_path": "/iRjWCoZ2bnv1fwJlzy2AMSkT3zp.jpg",
		"imdb": 7.5,
		"release_date": "2013-11-15",
		"runtime": 146,
		"genre_ids": [
			12,
			28,
			878
		],
		"hash": "40D0B4BF5A44D73BC7CE64D0D59D2DBDAC424A76",
		"updated": "2021-09-18T12:58:12.08+00:00"
	},
	{
		"id": 508,
		"tmdb_id": 109421,
		"imdb_id": "tt2053463",
		"title": "Tác Dụng Phụ",
		"english_title": "Side Effects",
		"backdrop_path": "/4hhMDcFhK1h3J9EIKPujeMlfyHs.jpg",
		"imdb": 7.1,
		"release_date": "2013-02-07",
		"runtime": 106,
		"genre_ids": [
			53,
			80,
			18
		],
		"hash": "18DE652706D396EE64EAC241AC6EA38E013EC270",
		"updated": "2021-09-19T00:49:02.931+00:00"
	},
	{
		"id": 510,
		"tmdb_id": 50275,
		"imdb_id": "tt2608732",
		"title": "Vịnh Hải Tặc AKF",
		"english_title": "TPB AFK: The Pirate Bay - Away from Keyboard",
		"backdrop_path": "/3EEoeOPsR2Q5HFX6UWxo356AZqV.jpg",
		"imdb": 7.5,
		"release_date": "2013-02-08",
		"runtime": 82,
		"genre_ids": [
			99
		],
		"hash": "BB267C20DA25E8F3DC705027BE25FD6A87882121",
		"updated": "2021-09-19T00:49:22.796+00:00"
	},
	{
		"id": 524,
		"tmdb_id": 122906,
		"imdb_id": "tt2194499",
		"title": "Đã Đến Lúc",
		"english_title": "About Time",
		"backdrop_path": "/Tnnzf6jwwjksXoytPqZ91kQZFd.jpg",
		"imdb": 7.8,
		"release_date": "2013-09-04",
		"runtime": 123,
		"genre_ids": [
			35,
			18,
			10749,
			14
		],
		"hash": "48D3ABA2D9EEF7CE9E9E6756F34E199B0F4EF1DA",
		"updated": "2021-09-19T01:33:34.788+00:00"
	},
	{
		"id": 516,
		"tmdb_id": 109439,
		"imdb_id": "tt1951261",
		"title": "Ba Chàng Ngự Lâm 3: Siêu Quậy Las Vegas",
		"english_title": "The Hangover Part III",
		"backdrop_path": "/c5PBG66R6SCvALJdHiCCslZ3ulF.jpg",
		"imdb": 5.8,
		"release_date": "2013-05-23",
		"runtime": 100,
		"genre_ids": [
			35
		],
		"hash": "9B5DAB3546A4C0B5F6CC9A3EFC77DA27B82F8F84",
		"updated": "2021-09-19T01:35:53.592+00:00"
	},
	{
		"id": 527,
		"tmdb_id": 59859,
		"imdb_id": "tt1650554",
		"title": "Người Hùng Củ Chuối 2",
		"english_title": "Kick-Ass 2",
		"backdrop_path": "/ndYQzK9GDBfPesGD79LZatlFWAq.jpg",
		"imdb": 6.5,
		"release_date": "2013-07-17",
		"runtime": 103,
		"genre_ids": [
			28,
			12,
			80
		],
		"hash": "74A3F683672B1F1C2E3E3529034B89F35ADBD24F",
		"updated": "2021-09-19T04:40:17.157+00:00"
	},
	{
		"id": 511,
		"tmdb_id": 138832,
		"imdb_id": "tt1723121",
		"title": "Gia Đình Bá Đạo",
		"english_title": "We're the Millers",
		"backdrop_path": "/pCyJ7OEthv6HuAgshp3Ev9pZLli.jpg",
		"imdb": 7,
		"release_date": "2013-08-07",
		"runtime": 110,
		"genre_ids": [
			35,
			80
		],
		"hash": "98394265476493FD83E0AD5AEC5028A5CB376C93",
		"updated": "2021-09-19T05:09:52.042+00:00"
	},
	{
		"id": 513,
		"tmdb_id": 146216,
		"imdb_id": "tt1821694",
		"title": "CIA Tái Xuất 2",
		"english_title": "RED 2",
		"backdrop_path": "/kjNCChDXQplTK6uTBmxJi3PdrhT.jpg",
		"imdb": 6.6,
		"release_date": "2013-07-18",
		"runtime": 116,
		"genre_ids": [
			28,
			35,
			80,
			53
		],
		"hash": "2EEF772FB1FB88BC38BB22F0B627B628D2CC6439",
		"updated": "2021-09-19T05:22:15.872+00:00"
	},
	{
		"id": 507,
		"tmdb_id": 75612,
		"imdb_id": "tt1483013",
		"title": "Bí Mật Trái Đất Diệt Vong",
		"english_title": "Oblivion",
		"backdrop_path": "/o17r7t3pJlAXvOaOBoFGuEKCTD1.jpg",
		"imdb": 7,
		"release_date": "2013-04-10",
		"runtime": 124,
		"genre_ids": [
			28,
			878,
			12,
			9648
		],
		"hash": "045E85F2EBC24A875A64FE2E9AC9B61F7AAD0499",
		"updated": "2021-09-19T05:24:21.575+00:00"
	},
	{
		"id": 518,
		"tmdb_id": 68724,
		"imdb_id": "tt1535108",
		"title": "Kỷ Nguyên Elysium",
		"english_title": "Elysium",
		"backdrop_path": "/iVYnUkT21jW8pg1Xp6wEJSmt50i.jpg",
		"imdb": 6.6,
		"release_date": "2013-08-07",
		"runtime": 109,
		"genre_ids": [
			878,
			28,
			18,
			53
		],
		"hash": "130C1E9D107B96D6E63DC7FE5EBF1EE59AF044E1",
		"updated": "2021-09-19T05:52:48.819+00:00"
	},
	{
		"id": 523,
		"tmdb_id": 203833,
		"imdb_id": "tt0816442",
		"title": "Kẻ Trộm Sách",
		"english_title": "The Book Thief",
		"backdrop_path": "/rh1IhBByDwTKBcfGx3sYmpk8XnH.jpg",
		"imdb": 7.6,
		"release_date": "2013-11-08",
		"runtime": 131,
		"genre_ids": [
			18
		],
		"hash": "12FE760C039F1F847838BF92E31FD8A132A6E47D",
		"updated": "2021-09-19T07:55:02.753+00:00"
	},
	{
		"id": 526,
		"tmdb_id": 132232,
		"imdb_id": "tt2023587",
		"title": "Mẹ Ma",
		"english_title": "Mama",
		"backdrop_path": "/knvCsevnktNvt04UhcOn243gwaB.jpg",
		"imdb": 6.2,
		"release_date": "2013-01-17",
		"runtime": 100,
		"genre_ids": [
			27
		],
		"hash": "5066456E21A6D4FF59701AE560969904EAB6F0D4",
		"updated": "2021-09-19T07:55:33.644+00:00"
	},
	{
		"id": 519,
		"tmdb_id": 97367,
		"imdb_id": "tt1817273",
		"title": "Bên Kia Rừng Thông",
		"english_title": "The Place Beyond the Pines",
		"backdrop_path": "/6VRKBfA9Bz0urfaQJRIOA8A6dhy.jpg",
		"imdb": 7.3,
		"release_date": "2013-03-14",
		"runtime": 140,
		"genre_ids": [
			18,
			80
		],
		"hash": "7B95BF4CD15333DFB2B752E22ADC4CC6448F35F6",
		"updated": "2021-09-19T07:55:42.502+00:00"
	},
	{
		"id": 521,
		"tmdb_id": 85889,
		"imdb_id": "tt1450321",
		"title": "Cảnh Sát Xảo Quyệt",
		"english_title": "Filth",
		"backdrop_path": "/4uUUtq21v35esXRCMqtZHaaQe3A.jpg",
		"imdb": 7.1,
		"release_date": "2013-09-23",
		"runtime": 97,
		"genre_ids": [
			80,
			18,
			35
		],
		"hash": "6543FD334166B0968C304DFBB534683ADF4ACA81",
		"updated": "2021-09-19T08:06:50.922+00:00"
	},
	{
		"id": 520,
		"tmdb_id": 156700,
		"imdb_id": "tt2179116",
		"title": "Mùa Hè Bá Đạo",
		"english_title": "The Kings of Summer",
		"backdrop_path": "/zyPszsaXeaQGxuzzwpXAejglbCT.jpg",
		"imdb": 7.1,
		"release_date": "2013-01-19",
		"runtime": 93,
		"genre_ids": [
			35,
			18
		],
		"hash": "3459DE889B7334F0C56F183A12832A1E1F27F699",
		"updated": "2021-09-19T08:03:37.85+00:00"
	},
	{
		"id": 528,
		"tmdb_id": 220289,
		"imdb_id": "tt2866360",
		"title": "Hiện Tượng Siêu Nhiên",
		"english_title": "Coherence",
		"backdrop_path": "/6KKL5x0hKYt6rYwa3UiDbBy5whZ.jpg",
		"imdb": 7.2,
		"release_date": "2013-09-19",
		"runtime": 89,
		"genre_ids": [
			53,
			878
		],
		"hash": "95863294E0C5A182FC358C4C09C9DEA26330DF71",
		"updated": "2021-09-19T08:08:08.895+00:00"
	},
	{
		"id": 514,
		"tmdb_id": 41602,
		"imdb_id": "tt1196948",
		"title": "Từ Khi Em Đến",
		"english_title": "Charlie Countryman",
		"backdrop_path": "/4PoyhmrObhrjzSdbj2rFNBf5n6d.jpg",
		"imdb": 6.4,
		"release_date": "2013-02-09",
		"runtime": 108,
		"genre_ids": [
			28,
			35,
			18,
			10749,
			53
		],
		"hash": "1DE95CBAEE836DBD644FD88159F17C74DCFE6300",
		"updated": "2021-09-19T08:12:13.372+00:00"
	},
	{
		"id": 529,
		"tmdb_id": 162903,
		"imdb_id": "tt1837703",
		"title": "Quyền Lực Thứ Năm",
		"english_title": "The Fifth Estate",
		"backdrop_path": "/arRteiSx6vGsJzr6h0TdtNty0xB.jpg",
		"imdb": 6.2,
		"release_date": "2013-10-11",
		"runtime": 128,
		"genre_ids": [
			18,
			53
		],
		"hash": "3BA1DB1F6B4EF655CAA3DD2A285D10495D992449",
		"updated": "2021-09-19T08:14:39.298+00:00"
	},
	{
		"id": 525,
		"tmdb_id": 87499,
		"imdb_id": "tt1869716",
		"title": "Nữ Tình Báo",
		"english_title": "The East",
		"backdrop_path": "/nn5ODHie1LPHJ2uWBodDVqRn2fL.jpg",
		"imdb": 6.8,
		"release_date": "2013-05-31",
		"runtime": 116,
		"genre_ids": [
			18,
			53
		],
		"hash": "C2167FD02C911A1018C69601E1EFFE2D162AF564",
		"updated": "2021-09-19T08:16:15.404+00:00"
	},
	{
		"id": 509,
		"tmdb_id": 157370,
		"imdb_id": "tt1311071",
		"title": "Giết Người Yêu Dấu",
		"english_title": "Kill Your Darlings",
		"backdrop_path": "/lkQ5ZZsCrQ1S7TOzujXM2Ct7NvZ.jpg",
		"imdb": 6.5,
		"release_date": "2013-09-19",
		"runtime": 104,
		"genre_ids": [
			18,
			10749,
			53
		],
		"hash": "1FD6B2838E000F6E979B1F32F780867350A9E5D6",
		"updated": "2021-09-19T08:20:54.388+00:00"
	},
	{
		"id": 515,
		"tmdb_id": 249397,
		"imdb_id": "tt2382009",
		"title": "Người Đàn Bà Cuồng Dâm 2",
		"english_title": "Nymphomaniac: Vol. II",
		"backdrop_path": "/oRJLL9mhcxisfopnvjJZDablxsP.jpg",
		"imdb": 6.7,
		"release_date": "2013-12-25",
		"runtime": 124,
		"genre_ids": [
			18,
			9648
		],
		"hash": "B5D7AD740C20210AE5EB2B4DC77EF108B3869263",
		"updated": "2021-09-19T08:21:51.38+00:00"
	},
	{
		"id": 546,
		"tmdb_id": 72190,
		"imdb_id": "tt0816711",
		"title": "Thế Chiến Z",
		"english_title": "World War Z",
		"backdrop_path": "/kIKKwaw4TPcfRlBH5e0HueyybGo.jpg",
		"imdb": 7,
		"release_date": "2013-06-20",
		"runtime": 116,
		"genre_ids": [
			28,
			18,
			27,
			878,
			53
		],
		"hash": "319FC21F3DB3254C5BC976A096801AB791458E95",
		"updated": "2021-11-27T11:26:14.428+00:00"
	},
	{
		"id": 541,
		"tmdb_id": 76203,
		"imdb_id": "tt2024544",
		"title": "12 Năm Nô Lệ",
		"english_title": "12 Years a Slave",
		"backdrop_path": "/io6uGJEJclbbSoesCBigsGAAdLD.jpg",
		"imdb": 8.1,
		"release_date": "2013-10-18",
		"runtime": 134,
		"genre_ids": [
			18,
			36
		],
		"hash": "AAD050EE1BB22E196939547B134535824DABF0CE",
		"updated": "2021-09-17T12:38:08.847+00:00"
	},
	{
		"id": 533,
		"tmdb_id": 68721,
		"imdb_id": "tt1300854",
		"title": "Người Sắt 3",
		"english_title": "Iron Man 3",
		"backdrop_path": "/5evczgF0I48FTn3C3XXi7i1p8eK.jpg",
		"imdb": 7.1,
		"release_date": "2013-04-18",
		"runtime": 130,
		"genre_ids": [
			28,
			12,
			878
		],
		"hash": "70B487B9E21E2869AF831397851F45A00D3EA7CA",
		"updated": "2021-09-18T12:51:38.306+00:00"
	},
	{
		"id": 536,
		"tmdb_id": 49521,
		"imdb_id": "tt0770828",
		"title": "Người Đàn Ông Thép",
		"english_title": "Man of Steel",
		"backdrop_path": "/zQmawynS76X7SXGS39g8Z7aiXI2.jpg",
		"imdb": 7,
		"release_date": "2013-06-12",
		"runtime": 143,
		"genre_ids": [
			28,
			12,
			14,
			878
		],
		"hash": "6A450B7F275D5B777B2A8D29C92FEBE26D654909",
		"updated": "2021-09-18T12:59:45.85+00:00"
	},
	{
		"id": 534,
		"tmdb_id": 76170,
		"imdb_id": "tt1430132",
		"title": "Người Sói Wolverine",
		"english_title": "The Wolverine",
		"backdrop_path": "/8FcWiTouaMg7F0ttweuhjaKyIww.jpg",
		"imdb": 6.7,
		"release_date": "2013-07-23",
		"runtime": 126,
		"genre_ids": [
			28,
			878,
			12,
			14
		],
		"hash": "D91FBB667D8F7E9CC653123AABF37BB4851B2270",
		"updated": "2021-09-18T13:37:46.001+00:00"
	},
	{
		"id": 545,
		"tmdb_id": 109424,
		"imdb_id": "tt1535109",
		"title": "Thuyền Trưởng Phillips",
		"english_title": "Captain Phillips",
		"backdrop_path": "/sPu5Zzgv0IfE2F3Vgjv676fBNQ.jpg",
		"imdb": 7.8,
		"release_date": "2013-10-10",
		"runtime": 134,
		"genre_ids": [
			28,
			18,
			53
		],
		"hash": "6041818DE2D64FEA82405BBA08B52D3F10B0F89C",
		"updated": "2021-09-19T01:32:39.92+00:00"
	},
	{
		"id": 538,
		"tmdb_id": 93456,
		"imdb_id": "tt1690953",
		"title": "Kẻ Cắp Mặt Trăng 2",
		"english_title": "Despicable Me 2",
		"backdrop_path": "/z9TyU9t3Xrdpze4qqstVS6XW1ji.jpg",
		"imdb": 7.3,
		"release_date": "2013-06-25",
		"runtime": 98,
		"genre_ids": [
			16,
			35,
			10751
		],
		"hash": "AFFC3A2BBB7DA2FAB119D1C85C20072B394DB1CB",
		"updated": "2021-09-19T04:41:08.284+00:00"
	},
	{
		"id": 554,
		"tmdb_id": 227159,
		"imdb_id": "tt2170439",
		"title": "Những Vị Sếp Khó Tính 2",
		"english_title": "Horrible Bosses 2",
		"backdrop_path": "/qXORgOQz57Kp1dwsH6EDxoh6x3l.jpg",
		"imdb": 6.3,
		"release_date": "2014-11-26",
		"runtime": 108,
		"genre_ids": [
			35
		],
		"hash": "DD465FE1256FC9A36EF8C889AAA49BE5D7D2AFA0",
		"updated": "2021-09-19T05:35:33.527+00:00"
	},
	{
		"id": 532,
		"tmdb_id": 146233,
		"imdb_id": "tt1392214",
		"title": "Lần Theo Dấu Vết",
		"english_title": "Prisoners",
		"backdrop_path": "/iHNLbBE1zMLAJJKfdm3RfeUxd5e.jpg",
		"imdb": 8.1,
		"release_date": "2013-09-18",
		"runtime": 153,
		"genre_ids": [
			18,
			53,
			80
		],
		"hash": "3CF2AE7742BC8B22467A2DFD4F1AC93E0E6FDA10",
		"updated": "2021-11-28T02:45:29.206+00:00"
	},
	{
		"id": 540,
		"tmdb_id": 107846,
		"imdb_id": "tt1211956",
		"title": "Kế Hoạch Đào Tẩu",
		"english_title": "Escape Plan",
		"backdrop_path": "/w0D0kWeOvle6vWKgW2KAbUoPla3.jpg",
		"imdb": 6.7,
		"release_date": "2013-10-09",
		"runtime": 115,
		"genre_ids": [
			28,
			53
		],
		"hash": "60C1D8CBE90E24340EF86937A685921456EE2E79",
		"updated": "2021-09-19T05:40:28.361+00:00"
	},
	{
		"id": 549,
		"tmdb_id": 109414,
		"imdb_id": "tt1245492",
		"title": "Sống Nốt Ngày Cuối",
		"english_title": "This Is the End",
		"backdrop_path": "/lgUb6FcEzMWX5KFOW82Ug8o6XJ2.jpg",
		"imdb": 6.6,
		"release_date": "2013-06-12",
		"runtime": 107,
		"genre_ids": [
			28,
			35
		],
		"hash": "A58E766FC3F701587BBC883F8D52E47B12F5FF86",
		"updated": "2021-09-19T05:49:31.504+00:00"
	},
	{
		"id": 531,
		"tmdb_id": 80274,
		"imdb_id": "tt1731141",
		"title": "Cuộc Đấu Của Ender",
		"english_title": "Ender's Game",
		"backdrop_path": "/oX6M2XPQjit0lzQ3kzSFWCOTqLq.jpg",
		"imdb": 6.6,
		"release_date": "2013-10-24",
		"runtime": 114,
		"genre_ids": [
			878,
			28,
			12
		],
		"hash": "A63755CFCEB25413EF88FACE5101B5D457D4BD4D",
		"updated": "2021-09-19T05:52:30.673+00:00"
	},
	{
		"id": 551,
		"tmdb_id": 270946,
		"imdb_id": "tt1911658",
		"title": "Biệt Đội Cánh Cụt Vùng Madagascar",
		"english_title": "Penguins of Madagascar",
		"backdrop_path": "/kGFVnzad1GgsWNpE3zY7cCrsWOZ.jpg",
		"imdb": 6.7,
		"release_date": "2014-11-22",
		"runtime": 92,
		"genre_ids": [
			10751,
			16,
			12,
			35
		],
		"hash": "B15E844D0A35915D8D401F91C469CBB9D65215F0",
		"updated": "2021-09-19T06:35:31.088+00:00"
	},
	{
		"id": 542,
		"tmdb_id": 77950,
		"imdb_id": "tt1860353",
		"title": "Tay Đua Siêu Tốc",
		"english_title": "Turbo",
		"backdrop_path": "/d1wyBiFUtewwgXgF14eMkKNQfha.jpg",
		"imdb": 6.4,
		"release_date": "2013-07-11",
		"runtime": 96,
		"genre_ids": [
			16,
			10751
		],
		"hash": "77ABAA386DB081248200EBB75DF2215F72E28ED2",
		"updated": "2021-09-19T07:51:06.918+00:00"
	},
	{
		"id": 550,
		"tmdb_id": 154400,
		"imdb_id": "tt1600196",
		"title": " Phi Vụ Rửa Tiền",
		"english_title": "The Drop",
		"backdrop_path": "/84yHKC9vGlrwY0T4bJVuu4nFaxd.jpg",
		"imdb": 7.1,
		"release_date": "2014-09-12",
		"runtime": 106,
		"genre_ids": [
			18,
			80
		],
		"hash": "2AA6E9486E8886C2F3E8D1211D279591AD4FA995",
		"updated": "2021-09-19T07:57:14.468+00:00"
	},
	{
		"id": 555,
		"tmdb_id": 212778,
		"imdb_id": "tt2883512",
		"title": "Siêu Đầu Bếp",
		"english_title": "Chef",
		"backdrop_path": "/ddkUQ7qEGXBqPn3vkxGkKLmzrX8.jpg",
		"imdb": 7.3,
		"release_date": "2014-05-08",
		"runtime": 114,
		"genre_ids": [
			35
		],
		"hash": "B7906D6F5878DDC2D42376FB04A8438BE6FBF0B0",
		"updated": "2021-09-19T07:55:24.147+00:00"
	},
	{
		"id": 548,
		"tmdb_id": 146239,
		"imdb_id": "tt2387559",
		"title": "Người Giao Hàng",
		"english_title": "Delivery Man",
		"backdrop_path": "/7ycS5dZXZrFb0RJP5YleTClXVd.jpg",
		"imdb": 6.4,
		"release_date": "2013-10-10",
		"runtime": 105,
		"genre_ids": [
			35
		],
		"hash": "FACB4AC6E6FE3E43E26575C0D5708A7411D0603B",
		"updated": "2021-09-19T08:00:07.103+00:00"
	},
	{
		"id": 535,
		"tmdb_id": 87516,
		"imdb_id": "tt1321511",
		"title": "Đồng Môn",
		"english_title": "Oldboy",
		"backdrop_path": "/c2Wa6Cqo6KS3e8Kk4eYEzyvHo5j.jpg",
		"imdb": 5.7,
		"release_date": "2013-11-14",
		"runtime": 104,
		"genre_ids": [
			18,
			53,
			9648,
			28
		],
		"hash": "DBE29246EDFFEF157CBBCFE2331ACD76963ED106",
		"updated": "2021-09-19T08:01:23.929+00:00"
	},
	{
		"id": 553,
		"tmdb_id": 157849,
		"imdb_id": "tt1972571",
		"title": "Kẻ Truy Nã Đặc Biệt",
		"english_title": "A Most Wanted Man",
		"backdrop_path": "/7Q5LZhmNhwlJKueFrxVY49CRRM2.jpg",
		"imdb": 6.8,
		"release_date": "2014-07-25",
		"runtime": 121,
		"genre_ids": [
			53
		],
		"hash": "1EEAB3AF2AB7E198944B67A7E2B8277D39FA952A",
		"updated": "2021-09-19T08:02:21.253+00:00"
	},
	{
		"id": 552,
		"tmdb_id": 227156,
		"imdb_id": "tt0435651",
		"title": "Người Truyền Ký Ức",
		"english_title": "The Giver",
		"backdrop_path": "/m5HtIYziINP1hn0sZMm956cYAJW.jpg",
		"imdb": 6.5,
		"release_date": "2014-08-11",
		"runtime": 97,
		"genre_ids": [
			18,
			878
		],
		"hash": "9939DF36A6563DC89436BD6E02DBF885BFA9C1FB",
		"updated": "2021-09-19T08:05:39.898+00:00"
	},
	{
		"id": 544,
		"tmdb_id": 152603,
		"imdb_id": "tt1714915",
		"title": "Chỉ Những Kẻ Yêu Nhau Mới Bất Tử",
		"english_title": "Only Lovers Left Alive",
		"backdrop_path": "/eOdKMgGkGzg8Y9UjYpwrpnmn3VV.jpg",
		"imdb": 7.3,
		"release_date": "2013-12-12",
		"runtime": 123,
		"genre_ids": [
			18,
			10749
		],
		"hash": "923867F9CF81F800F70A82B1A8965AC0E9617651",
		"updated": "2021-09-19T08:23:51.645+00:00"
	},
	{
		"id": 537,
		"tmdb_id": 139038,
		"imdb_id": "tt2243537",
		"title": "A Haunted House",
		"english_title": "A Haunted House",
		"backdrop_path": "/akKBMXHEesqfuoYFt7LaRptFAO0.jpg",
		"imdb": 5,
		"release_date": "2013-01-11",
		"runtime": 86,
		"genre_ids": [
			35,
			27
		],
		"hash": "9F33519A76ADE933566B957E31DBB3625D0C1947",
		"updated": "2021-09-19T08:29:22.944+00:00"
	},
	{
		"id": 647,
		"tmdb_id": 257211,
		"imdb_id": "tt2361509",
		"title": "Bố Già Học Việc",
		"english_title": "The Intern",
		"backdrop_path": "/pmRQKfLHlQ0TdRFeZv1COQxVzuc.jpg",
		"imdb": 7.1,
		"release_date": "2015-09-24",
		"runtime": 121,
		"genre_ids": [
			35
		],
		"hash": "12AD37D952D5D0446AB07DAE6822954FA520EEAF",
		"updated": "2021-10-04T11:30:02.711+00:00"
	},
	{
		"id": 579,
		"tmdb_id": 244786,
		"imdb_id": "tt2582802",
		"title": "Whiplash",
		"english_title": "Whiplash",
		"backdrop_path": "/xH5P06rKAeUQX58JQSiviW0FpJP.jpg",
		"imdb": 8.5,
		"release_date": "2014-10-10",
		"runtime": 107,
		"genre_ids": [
			18,
			10402
		],
		"hash": "FB9829645F26087B0A286BE666D830D9800FE83F",
		"updated": "2021-09-16T02:52:22.968+00:00"
	},
	{
		"id": 575,
		"tmdb_id": 157353,
		"imdb_id": "tt2209764",
		"title": "Trí Tuệ Siêu Việt",
		"english_title": "Transcendence",
		"backdrop_path": "/x80KfWxzdl27OYOi2mEqiGtmSCl.jpg",
		"imdb": 6.3,
		"release_date": "2014-04-16",
		"runtime": 119,
		"genre_ids": [
			53,
			878,
			18,
			9648
		],
		"hash": "65BABE2F3FE49434DEB9216CCD30994B507645B7",
		"updated": "2021-10-10T14:20:04.57+00:00"
	},
	{
		"id": 576,
		"tmdb_id": 120467,
		"imdb_id": "tt2278388",
		"title": "Khách Sạn Đế Vương",
		"english_title": "The Grand Budapest Hotel",
		"backdrop_path": "/a6oy1G8rX7H04jCKy5Vi1ZrWY9s.jpg",
		"imdb": 8.1,
		"release_date": "2014-02-26",
		"runtime": 100,
		"genre_ids": [
			35,
			18
		],
		"hash": "50C4F4DC98003E9D8F1618609108199F22D5A392",
		"updated": "2021-09-17T12:38:52.739+00:00"
	},
	{
		"id": 556,
		"tmdb_id": 118340,
		"imdb_id": "tt2015381",
		"title": "Vệ Binh Giải Ngân Hà",
		"english_title": "Guardians of the Galaxy",
		"backdrop_path": "/1loyi19ULLd976Oz9XP6elzxG6X.jpg",
		"imdb": 8,
		"release_date": "2014-07-30",
		"runtime": 121,
		"genre_ids": [
			28,
			878,
			12
		],
		"hash": "11A2AC68A11634E980F265CB1433C599D017A759",
		"updated": "2021-09-18T06:03:21.359+00:00"
	},
	{
		"id": 558,
		"tmdb_id": 119450,
		"imdb_id": "tt2103281",
		"title": "Sự Khởi Đầu Của Hành Tinh Khỉ",
		"english_title": "Dawn of the Planet of the Apes",
		"backdrop_path": "/8nhLz27ubU22JCBvXAQOX96t9d4.jpg",
		"imdb": 7.6,
		"release_date": "2014-06-26",
		"runtime": 130,
		"genre_ids": [
			878,
			28,
			18,
			53
		],
		"hash": "BA1C73B4BF5FD35FAABB37FECE1786945780760E",
		"updated": "2021-10-28T11:34:39.717+00:00"
	},
	{
		"id": 577,
		"tmdb_id": 245891,
		"imdb_id": "tt2911666",
		"title": "Sát Thủ John Wick",
		"english_title": "John Wick",
		"backdrop_path": "/jyNcNRpe9hPSFFj09efB2RI5j9d.jpg",
		"imdb": 7.4,
		"release_date": "2014-10-22",
		"runtime": 101,
		"genre_ids": [
			28,
			53
		],
		"hash": "0988A8FEA9D4949574A32918565E04E677BBAB5D",
		"updated": "2021-09-18T12:48:02.23+00:00"
	},
	{
		"id": 570,
		"tmdb_id": 190859,
		"imdb_id": "tt2179136",
		"title": "Lính Bắn Tỉa Mỹ",
		"english_title": "American Sniper",
		"backdrop_path": "/8IG5bBhTWNv2iHmAZWiZGdnTj0y.jpg",
		"imdb": 7.3,
		"release_date": "2014-12-11",
		"runtime": 133,
		"genre_ids": [
			10752,
			28
		],
		"hash": "FB62CA94115A16CF51ADB139D75D7F31F7552D55",
		"updated": "2022-01-14T03:47:52.408+00:00"
	},
	{
		"id": 559,
		"tmdb_id": 91314,
		"imdb_id": "tt2109248",
		"title": "Robot Đại Chiến 4: Kỷ Nguyên Huỷ Diệt",
		"english_title": "Transformers: Age of Extinction",
		"backdrop_path": "/jthiNxYFvp4FYV4F3ZtQlQblHM0.jpg",
		"imdb": 5.6,
		"release_date": "2014-06-25",
		"runtime": 165,
		"genre_ids": [
			878,
			28,
			12
		],
		"hash": "774DA94A7602E1B053C61205DF20C810A5621828",
		"updated": "2021-09-19T05:12:18.105+00:00"
	},
	{
		"id": 574,
		"tmdb_id": 228967,
		"imdb_id": "tt2788710",
		"title": "Ám Sát Kim Jong Un",
		"english_title": "The Interview",
		"backdrop_path": "/6lhuQMWl9og77WmyQ7SGMmupQZd.jpg",
		"imdb": 6.5,
		"release_date": "2014-12-25",
		"runtime": 112,
		"genre_ids": [
			28,
			35
		],
		"hash": "746F5C84A8B21256636A2A93482434DCF73741EB",
		"updated": "2021-09-19T05:53:14.605+00:00"
	},
	{
		"id": 571,
		"tmdb_id": 82702,
		"imdb_id": "tt1646971",
		"title": "Bí Kíp Luyện Rồng 2",
		"english_title": "How to Train Your Dragon 2",
		"backdrop_path": "/tn6S5PI7Qoz5GdGSC81bv1jspNF.jpg",
		"imdb": 7.8,
		"release_date": "2014-06-09",
		"runtime": 102,
		"genre_ids": [
			14,
			28,
			12,
			16,
			35,
			10751
		],
		"hash": "6AB715782A9A1438B9054CDFFF3B20CDFE0B94FA",
		"updated": "2021-09-19T06:25:52.341+00:00"
	},
	{
		"id": 578,
		"tmdb_id": 242582,
		"imdb_id": "tt2872718",
		"title": "Kẻ Săn Tin Đen",
		"english_title": "Nightcrawler",
		"backdrop_path": "/c4Mu8smik4Ovs4A8xzokJcATkJp.jpg",
		"imdb": 7.9,
		"release_date": "2014-10-23",
		"runtime": 118,
		"genre_ids": [
			80,
			18,
			53
		],
		"hash": "1FC7726B937C03F1B812C4D4C8251F657B28B811",
		"updated": "2021-10-25T06:05:05.545+00:00"
	},
	{
		"id": 560,
		"tmdb_id": 195589,
		"imdb_id": "tt2004420",
		"title": "Hàng Xóm Ôn Dịch",
		"english_title": "Neighbors",
		"backdrop_path": "/jKZLnXjylhcajEGRLjKT8xmLZw9.jpg",
		"imdb": 6.3,
		"release_date": "2014-05-08",
		"runtime": 97,
		"genre_ids": [
			35
		],
		"hash": "E807F27AB22487F56581E9EAE72885A20F382C7A",
		"updated": "2021-09-19T06:19:51.153+00:00"
	},
	{
		"id": 563,
		"tmdb_id": 116149,
		"imdb_id": "tt1109624",
		"title": "Gấu Paddington",
		"english_title": "Paddington",
		"backdrop_path": "/3wT9cdcoWkBpDhoCphFfOR9se0j.jpg",
		"imdb": 7.2,
		"release_date": "2014-11-24",
		"runtime": 96,
		"genre_ids": [
			35,
			12,
			10751
		],
		"hash": "8EC835C8285EF421D3B77768425A8FDCEF72B2BD",
		"updated": "2021-09-19T06:27:10.959+00:00"
	},
	{
		"id": 562,
		"tmdb_id": 137106,
		"imdb_id": "tt1490017",
		"title": "Câu Chuyện Lego",
		"english_title": "The Lego Movie",
		"backdrop_path": "/35wqrUpVaC8ulFHdAhKx7GUGKYY.jpg",
		"imdb": 7.7,
		"release_date": "2014-02-06",
		"runtime": 100,
		"genre_ids": [
			12,
			16,
			35,
			10751,
			14
		],
		"hash": "1AF3A7EE127B936F39B28810BD8E1E6D07624C0C",
		"updated": "2021-09-19T06:38:45.371+00:00"
	},
	{
		"id": 561,
		"tmdb_id": 228326,
		"imdb_id": "tt2262227",
		"title": "Hành Trình Giải Cứu Tình Yêu",
		"english_title": "The Book of Life",
		"backdrop_path": "/rJt9HdAAn33UUo9PmQMOgYZCfmp.jpg",
		"imdb": 7.3,
		"release_date": "2014-10-01",
		"runtime": 95,
		"genre_ids": [
			16,
			12,
			35,
			10751,
			14
		],
		"hash": "4EBD6B18A51AE1B329E81C655C40396D58AE8EC3",
		"updated": "2021-09-19T07:58:21.506+00:00"
	},
	{
		"id": 573,
		"tmdb_id": 200727,
		"imdb_id": "tt1638002",
		"title": "Bồng Bột Tuổi Dậy Thì",
		"english_title": "Love, Rosie",
		"backdrop_path": "/rsYdHBaWwodnB6hMu0F8E7aCpfL.jpg",
		"imdb": 7.2,
		"release_date": "2014-10-16",
		"runtime": 102,
		"genre_ids": [
			35,
			10749
		],
		"hash": "26409EF604E5DC73872DFD609017FE946105F6B1",
		"updated": "2021-09-19T08:00:30.888+00:00"
	},
	{
		"id": 565,
		"tmdb_id": 177494,
		"imdb_id": "tt2771372",
		"title": "Nữ Thám Tử Veronica Mars",
		"english_title": "Veronica Mars",
		"backdrop_path": "/5GVReOHFQZrjy7uBF8CQQpK4ftp.jpg",
		"imdb": 6.8,
		"release_date": "2014-03-13",
		"runtime": 107,
		"genre_ids": [
			35,
			18,
			80
		],
		"hash": "1214CC7CC80A53CC67A40B33CE2C0CF3F7E8060E",
		"updated": "2021-09-19T08:17:56.175+00:00"
	},
	{
		"id": 569,
		"tmdb_id": 239563,
		"imdb_id": "tt2170593",
		"title": "Bão Mẫu Cựu Binh",
		"english_title": "St. Vincent",
		"backdrop_path": "/h6ypHCyuc8ew3AgjXJljy3AsHUE.jpg",
		"imdb": 7.2,
		"release_date": "2014-10-09",
		"runtime": 102,
		"genre_ids": [
			35
		],
		"hash": "CC1B6AC147CE0C7F92B59C1FE1DAA9408F3CC0C4",
		"updated": "2021-09-19T08:20:39.862+00:00"
	},
	{
		"id": 580,
		"tmdb_id": 284536,
		"imdb_id": "tt2039393",
		"title": "Giáo Sư Cờ Bạc",
		"english_title": "The Gambler",
		"backdrop_path": "/oInzp3TfKIJJLhsOpt1Nsr0247m.jpg",
		"imdb": 6.1,
		"release_date": "2014-12-25",
		"runtime": 111,
		"genre_ids": [
			53,
			80,
			18
		],
		"hash": "2CCF32793CE04E367FFD39E7EFEFE01966029654",
		"updated": "2021-09-19T08:30:34.842+00:00"
	},
	{
		"id": 557,
		"tmdb_id": 221731,
		"imdb_id": "tt3029558",
		"title": "Lãng khách Kenshin 2: Đại Hỏa Kyoto",
		"english_title": "Rurouni Kenshin Part II: Kyoto Inferno",
		"backdrop_path": "/q3jiq1PRpOGnRScbj3cur7RkZYv.jpg",
		"imdb": 7.6,
		"release_date": "2014-08-01",
		"runtime": 138,
		"genre_ids": [
			28,
			12,
			18,
			14
		],
		"hash": "86CC294C392BD35F18F76B269FDC660408DDEB34",
		"updated": "2021-09-19T08:36:26.175+00:00"
	},
	{
		"id": 568,
		"tmdb_id": 102382,
		"imdb_id": "tt1872181",
		"title": "Người Nhện Siêu Đẳng 2",
		"english_title": "The Amazing Spider-Man 2",
		"backdrop_path": "/4rL2zlusJHFoeJWnVZAa9S2Up0k.jpg",
		"imdb": 6.6,
		"release_date": "2014-04-16",
		"runtime": 142,
		"genre_ids": [
			28,
			12,
			14
		],
		"hash": "0259F6B98A7CA160A36F13457C89344C7DD34000",
		"updated": "2021-09-19T10:09:41.102+00:00"
	},
	{
		"id": 572,
		"tmdb_id": 110416,
		"imdb_id": "tt1865505",
		"title": "Bài Ca Của Biển Cả",
		"english_title": "Song of the Sea",
		"backdrop_path": "/AaIRBsx4hpa2fVQzeCfFyOdzCEM.jpg",
		"imdb": 8.1,
		"release_date": "2014-09-06",
		"runtime": 93,
		"genre_ids": [
			10751,
			16,
			14
		],
		"hash": "ECFC7A0B4C6343DABAA70AD1DA537ECEC75990B2",
		"updated": "2021-10-07T02:22:21.576+00:00"
	},
	{
		"id": 603,
		"tmdb_id": 85350,
		"imdb_id": "tt1065073",
		"title": "Thuở Niên Thiếu",
		"english_title": "Boyhood",
		"backdrop_path": "/oOvgCQaRQOgSTYCOZ2qlxKWtwZa.jpg",
		"imdb": 7.9,
		"release_date": "2014-06-05",
		"runtime": 165,
		"genre_ids": [
			18
		],
		"hash": "F893641B2B9F021DF1C9A073B3CC37EAB62E70F2",
		"updated": "2021-09-18T12:06:51.363+00:00"
	},
	{
		"id": 595,
		"tmdb_id": 131631,
		"imdb_id": "tt1951265",
		"title": "Đấu Trường Sinh Tử: Húng Nhại 1",
		"english_title": "The Hunger Games: Mockingjay - Part 1",
		"backdrop_path": "/tLhl4JAF5aYArko2zVWROJ20UCm.jpg",
		"imdb": 6.6,
		"release_date": "2014-11-19",
		"runtime": 123,
		"genre_ids": [
			878,
			12,
			53
		],
		"hash": "C353F618210665A77BCE482A1EE571112E24AFC3",
		"updated": "2021-09-18T12:58:37.34+00:00"
	},
	{
		"id": 584,
		"tmdb_id": 122917,
		"imdb_id": "tt2310332",
		"title": "Người Hobbit 3: Đại Chiến Năm Cánh Quân",
		"english_title": "The Hobbit: The Battle of the Five Armies",
		"backdrop_path": "/6Xt11malHxuIsQqg8K6Y6PLf4nh.jpg",
		"imdb": 7.4,
		"release_date": "2014-12-10",
		"runtime": 144,
		"genre_ids": [
			28,
			12,
			14
		],
		"hash": "2C62576911D20044701CCB15558E1C063CBA3194",
		"updated": "2021-09-18T13:03:21.313+00:00"
	},
	{
		"id": 588,
		"tmdb_id": 170687,
		"imdb_id": "tt0787474",
		"title": "The Boxtrolls",
		"english_title": "The Boxtrolls",
		"backdrop_path": "/hAifTW42IwrMkP2ImNIvROSUos9.jpg",
		"imdb": 6.8,
		"release_date": "2014-09-10",
		"runtime": 97,
		"genre_ids": [
			16,
			35,
			10751,
			14
		],
		"hash": "205F03DB95617F7EAC3E9ED4415BB89FC6E362A8",
		"updated": "2021-09-19T00:48:38.39+00:00"
	},
	{
		"id": 590,
		"tmdb_id": 222935,
		"imdb_id": "tt2582846",
		"title": "Lỗi Của Những Vì Sao",
		"english_title": "The Fault in Our Stars",
		"backdrop_path": "/jbrExTJXi07ypzwJiJNoZiGl6q3.jpg",
		"imdb": 7.7,
		"release_date": "2014-05-16",
		"runtime": 126,
		"genre_ids": [
			10749,
			18
		],
		"hash": "1D92D1128EDCE4B465E1355D4C002F2F2902F992",
		"updated": "2021-09-19T03:04:25.488+00:00"
	},
	{
		"id": 594,
		"tmdb_id": 53182,
		"imdb_id": "tt1253863",
		"title": "300 Chiến Binh: Đế Chế Trỗi Dậy",
		"english_title": "300: Rise of an Empire",
		"backdrop_path": "/v3FHpsVAKb7E0SXRynndlewEqK6.jpg",
		"imdb": 6.2,
		"release_date": "2014-03-05",
		"runtime": 102,
		"genre_ids": [
			28,
			18
		],
		"hash": "344E74A9B07EC8D3F00627A38F45483A3DB08A04",
		"updated": "2021-09-19T04:39:05.388+00:00"
	},
	{
		"id": 604,
		"tmdb_id": 156022,
		"imdb_id": "tt0455944",
		"title": "Thiện Ác Đối Đầu",
		"english_title": "The Equalizer",
		"backdrop_path": "/3EAuo1fRWo7oQ0d6Qo04s2VKsX0.jpg",
		"imdb": 7.2,
		"release_date": "2014-09-24",
		"runtime": 132,
		"genre_ids": [
			53,
			28,
			80
		],
		"hash": "FE4CD297ECE7ECDEECA59462ACD825327215D2B5",
		"updated": "2021-09-19T05:01:35.696+00:00"
	},
	{
		"id": 591,
		"tmdb_id": 198663,
		"imdb_id": "tt1790864",
		"title": "Giải Mã Mê Cung",
		"english_title": "The Maze Runner",
		"backdrop_path": "/zsUWyWHdMbeNyU0t5DmwqCLCRf6.jpg",
		"imdb": 6.8,
		"release_date": "2014-09-10",
		"runtime": 113,
		"genre_ids": [
			28,
			9648,
			878,
			53
		],
		"hash": "2552169E161A1E766AA1DDC5F03B16AC5CB50F68",
		"updated": "2021-09-19T05:37:10.435+00:00"
	},
	{
		"id": 600,
		"tmdb_id": 242224,
		"imdb_id": "tt2321549",
		"title": "Cuốn Sách Ma",
		"english_title": "The Babadook",
		"backdrop_path": "/bkg1ie9tvdGC6hdtBvYVmVlmfyE.jpg",
		"imdb": 6.8,
		"release_date": "2014-05-22",
		"runtime": 94,
		"genre_ids": [
			18,
			27
		],
		"hash": "5421AC9B999A41E7970C8E9A2F51452CDB5B44CA",
		"updated": "2021-09-19T05:38:10.012+00:00"
	},
	{
		"id": 592,
		"tmdb_id": 250546,
		"imdb_id": "tt3322940",
		"title": "Búp Bê Annabelle",
		"english_title": "Annabelle",
		"backdrop_path": "/boxuxPM8r5ptlQHrd7Ia8U8dWvV.jpg",
		"imdb": 5.4,
		"release_date": "2014-10-02",
		"runtime": 99,
		"genre_ids": [
			27
		],
		"hash": "43F5521BE773815EF2365F6B9BEAFEACE6A61A8B",
		"updated": "2021-09-19T06:16:27.446+00:00"
	},
	{
		"id": 589,
		"tmdb_id": 238636,
		"imdb_id": "tt2975578",
		"title": "Ngày Thanh Trừng 2: Hỗn Loạn",
		"english_title": "The Purge: Anarchy",
		"backdrop_path": "/mur6J0AVBVm5nPN0gK1wnGCGt6.jpg",
		"imdb": 6.4,
		"release_date": "2014-07-17",
		"runtime": 104,
		"genre_ids": [
			27,
			53
		],
		"hash": "F2C1C5141C0B9C4ED985442DD76C3207BD8C1601",
		"updated": "2021-09-19T06:17:36.35+00:00"
	},
	{
		"id": 596,
		"tmdb_id": 240832,
		"imdb_id": "tt2872732",
		"title": "Lucy Siêu Phàm",
		"english_title": "Lucy",
		"backdrop_path": "/x1SAbosLQzZ0NrAgQMOgFdmDUl2.jpg",
		"imdb": 6.4,
		"release_date": "2014-07-25",
		"runtime": 89,
		"genre_ids": [
			28,
			878
		],
		"hash": "D421A1EFA2A8231F4FC1EABC69C5B64F8E823F71",
		"updated": "2021-09-19T06:18:13.725+00:00"
	},
	{
		"id": 587,
		"tmdb_id": 97020,
		"imdb_id": "tt1234721",
		"title": "Cảnh Sát Người Máy",
		"english_title": "RoboCop",
		"backdrop_path": "/po5ADptYxM6QR1RRw49AhcJsZGd.jpg",
		"imdb": 6.1,
		"release_date": "2014-01-30",
		"runtime": 118,
		"genre_ids": [
			28,
			878
		],
		"hash": "2739E390227B3851106B62DCAE4B994720419817",
		"updated": "2021-09-19T06:39:05.778+00:00"
	},
	{
		"id": 582,
		"tmdb_id": 98566,
		"imdb_id": "tt1291150",
		"title": "Ninja Rùa",
		"english_title": "Teenage Mutant Ninja Turtles",
		"backdrop_path": "/nPRwI7U7GoZstXEHyHVc5LuuSVr.jpg",
		"imdb": 5.8,
		"release_date": "2014-08-07",
		"runtime": 101,
		"genre_ids": [
			878,
			28,
			12,
			35
		],
		"hash": "07C5AE66B57763F5DC0E598A29355A61C975B04F",
		"updated": "2021-09-19T06:23:42.724+00:00"
	},
	{
		"id": 585,
		"tmdb_id": 168530,
		"imdb_id": "tt1408253",
		"title": "Bộ Đôi Cảnh Sát",
		"english_title": "Ride Along",
		"backdrop_path": "/rp5Qt3SUD9mXzrGA7WdD1stXVr9.jpg",
		"imdb": 6.2,
		"release_date": "2014-01-07",
		"runtime": 99,
		"genre_ids": [
			28,
			35
		],
		"hash": "6D33A5B43D4FC8F70BC272667197E24D1B71E99B",
		"updated": "2021-09-19T07:55:51.985+00:00"
	},
	{
		"id": 583,
		"tmdb_id": 249164,
		"imdb_id": "tt1355630",
		"title": "Nếu Em Ở Lại",
		"english_title": "If I Stay",
		"backdrop_path": "/6i7fiMSq8mkBhmBbIqs7LTmhS7G.jpg",
		"imdb": 6.7,
		"release_date": "2014-08-21",
		"runtime": 106,
		"genre_ids": [
			18
		],
		"hash": "F7272F52B6009671A92580C8DEFD28F669E826D6",
		"updated": "2021-09-19T07:56:17.833+00:00"
	},
	{
		"id": 581,
		"tmdb_id": 87492,
		"imdb_id": "tt1100089",
		"title": "Kẻ Săn Cáo",
		"english_title": "Foxcatcher",
		"backdrop_path": "/7iWcPJ9pbCMt1xqAyp9iaO8DXkE.jpg",
		"imdb": 7,
		"release_date": "2014-05-19",
		"runtime": 134,
		"genre_ids": [
			18,
			53
		],
		"hash": "9B84BC82445496114F147FC6D9E818B9F0BCB23E",
		"updated": "2021-09-19T08:08:22.058+00:00"
	},
	{
		"id": 597,
		"tmdb_id": 228970,
		"imdb_id": "tt2305051",
		"title": "Chuyến Phiêu Lưu Hoang Dã",
		"english_title": "Wild",
		"backdrop_path": "/evp20taoQnL9N9K1cbXjxyT4mK8.jpg",
		"imdb": 7.1,
		"release_date": "2014-01-16",
		"runtime": 115,
		"genre_ids": [
			18
		],
		"hash": "FD311D8A9BAA5D573D6BACDB50A033E9E20F3AEE",
		"updated": "2021-09-19T08:13:04.414+00:00"
	},
	{
		"id": 593,
		"tmdb_id": 184345,
		"imdb_id": "tt2828996",
		"title": "A Haunted House 2",
		"english_title": "A Haunted House 2",
		"backdrop_path": "/sh6DwUCIdEqmHCtfjypJnUpDcD0.jpg",
		"imdb": 4.7,
		"release_date": "2014-04-17",
		"runtime": 87,
		"genre_ids": [
			35,
			27
		],
		"hash": "72B04BAC492184FF6CA58FDE99503C6C47354326",
		"updated": "2021-09-19T08:29:33.358+00:00"
	},
	{
		"id": 601,
		"tmdb_id": 242828,
		"imdb_id": "tt3398268",
		"title": "Marnie Trong Ký Ức",
		"english_title": "When Marnie Was There",
		"backdrop_path": "/sbtqmaprl6fzhPLaOrFWYJ8ZDli.jpg",
		"imdb": 7.7,
		"release_date": "2014-07-19",
		"runtime": 103,
		"genre_ids": [
			16,
			18
		],
		"hash": "8DC148D0286DD7FDE015D31FBF4B8038D2405E0B",
		"updated": "2021-09-19T10:11:00.761+00:00"
	},
	{
		"id": 586,
		"tmdb_id": 265177,
		"imdb_id": "tt3612616",
		"title": "Mẹ",
		"english_title": "Mommy",
		"backdrop_path": "/dIHezuC3AmylT8mkXQiWSjz2wJR.jpg",
		"imdb": 8.1,
		"release_date": "2014-05-22",
		"runtime": 138,
		"genre_ids": [
			18
		],
		"hash": "E2A9A56790CC35D262FA667DFAA8B507E9B45D8F",
		"updated": "2021-09-19T10:12:29.97+00:00"
	},
	{
		"id": 598,
		"tmdb_id": 228194,
		"imdb_id": "tt2980648",
		"title": "Hành Trình 100 Bước Chân",
		"english_title": "The Hundred-Foot Journey",
		"backdrop_path": "/dvPNck5dL9kGUsGhhVZRUMTnWzs.jpg",
		"imdb": 7.3,
		"release_date": "2014-08-06",
		"runtime": 122,
		"genre_ids": [
			18
		],
		"hash": "ABE88D85221EC21DA0CDD1E5B82272EA37D9150B",
		"updated": "2021-09-19T11:00:44.638+00:00"
	},
	{
		"id": 602,
		"tmdb_id": 266856,
		"imdb_id": "tt2980516",
		"title": "Thuyết Vạn Vật",
		"english_title": "The Theory of Everything",
		"backdrop_path": "/skN8ZK0Xrx6rawPKX1xBnhHvmsu.jpg",
		"imdb": 7.7,
		"release_date": "2014-11-26",
		"runtime": 123,
		"genre_ids": [
			18,
			10749
		],
		"hash": "236F0D62C2DCFDDEFFA383D7F93BD21EECA63FB9",
		"updated": "2021-09-25T02:48:22.803+00:00"
	},
	{
		"id": 606,
		"tmdb_id": 137113,
		"imdb_id": "tt1631867",
		"title": "Cuộc Chiến Luân Hồi",
		"english_title": "Edge of Tomorrow",
		"backdrop_path": "/toosdcGOOgmEjpgeN7HJ0Wt32yo.jpg",
		"imdb": 7.9,
		"release_date": "2014-05-27",
		"runtime": 113,
		"genre_ids": [
			28,
			878
		],
		"hash": "5A37B321FD63828F2B304961CC151A1C696AEE3E",
		"updated": "2021-09-18T12:07:41.811+00:00"
	},
	{
		"id": 622,
		"tmdb_id": 205596,
		"imdb_id": "tt2084970",
		"title": "Người Giải Mã",
		"english_title": "The Imitation Game",
		"backdrop_path": "/wDCPRDqbLXnwQURZnVXVLDQgPDB.jpg",
		"imdb": 8,
		"release_date": "2014-11-14",
		"runtime": 113,
		"genre_ids": [
			36,
			18,
			53,
			10752
		],
		"hash": "B9A19040C3FCCC5F8AD963F43B4AC8EA3097AF9B",
		"updated": "2021-09-18T04:36:41.473+00:00"
	},
	{
		"id": 619,
		"tmdb_id": 100402,
		"imdb_id": "tt1843866",
		"title": "Captain America 2: Chiến Binh Mùa Đông",
		"english_title": "Captain America: The Winter Soldier",
		"backdrop_path": "/qtuhyJeVdKYko844D4LbNBAOXgy.jpg",
		"imdb": 7.7,
		"release_date": "2014-03-20",
		"runtime": 136,
		"genre_ids": [
			28,
			12,
			878
		],
		"hash": "04A8C73349E0FE148557C3A9BA8482E0AA67AD49",
		"updated": "2021-09-18T12:54:12.108+00:00"
	},
	{
		"id": 624,
		"tmdb_id": 260346,
		"imdb_id": "tt2446042",
		"title": "Cưỡng Đoạt 3",
		"english_title": "Taken 3",
		"backdrop_path": "/xjZ7Hb1huRXABmGg8J8n97BcfEo.jpg",
		"imdb": 6,
		"release_date": "2014-12-16",
		"runtime": 109,
		"genre_ids": [
			53,
			28
		],
		"hash": "4F77DED985802AE75972A97B4B82171075DC4623",
		"updated": "2021-09-19T01:25:23.999+00:00"
	},
	{
		"id": 620,
		"tmdb_id": 177572,
		"imdb_id": "tt2245084",
		"title": "Biệt Đội Big Hero 6",
		"english_title": "Big Hero 6",
		"backdrop_path": "/xTLl2qNYGIEKxqkqKdL5VuR3Er2.jpg",
		"imdb": 7.8,
		"release_date": "2014-10-24",
		"runtime": 102,
		"genre_ids": [
			12,
			10751,
			16,
			28,
			35
		],
		"hash": "966D30A8BBC61A1FB50842CAB6983B17ECA2CF9A",
		"updated": "2021-09-19T01:27:03.293+00:00"
	},
	{
		"id": 623,
		"tmdb_id": 207703,
		"imdb_id": "tt2802144",
		"title": "Mật Vụ Kingsman",
		"english_title": "Kingsman: The Secret Service",
		"backdrop_path": "/guF1RNIPHGfAIx8nD6OXsVcCmI9.jpg",
		"imdb": 7.7,
		"release_date": "2014-12-13",
		"runtime": 129,
		"genre_ids": [
			80,
			35,
			28,
			12
		],
		"hash": "FA8F6D21EEB3948B8497439B4D540294C42653DF",
		"updated": "2021-09-19T03:06:21.155+00:00"
	},
	{
		"id": 616,
		"tmdb_id": 194662,
		"imdb_id": "tt2562232",
		"title": "Người Chim",
		"english_title": "Birdman or (The Unexpected Virtue of Ignorance)",
		"backdrop_path": "/twkv6anhoGy7LvnwXq7CUlU1T40.jpg",
		"imdb": 7.7,
		"release_date": "2014-08-27",
		"runtime": 120,
		"genre_ids": [
			18,
			35
		],
		"hash": "2302ECAB74207E7831055400563A61AA23025FE5",
		"updated": "2021-09-19T03:07:00.074+00:00"
	},
	{
		"id": 621,
		"tmdb_id": 228150,
		"imdb_id": "tt2713180",
		"title": "Cuồng Nộ",
		"english_title": "Fury",
		"backdrop_path": "/kdbLf3aTQsEXqYlH9vA4fzmnSFz.jpg",
		"imdb": 7.6,
		"release_date": "2014-10-15",
		"runtime": 135,
		"genre_ids": [
			10752,
			18,
			28
		],
		"hash": "2F335F14CEFD735A7687CF7F31BA42A0DB15A217",
		"updated": "2021-09-19T04:43:08.828+00:00"
	},
	{
		"id": 614,
		"tmdb_id": 206487,
		"imdb_id": "tt2397535",
		"title": "Tiền Định",
		"english_title": "Predestination",
		"backdrop_path": "/lzuoCKrq8vnczpQSpq6hPM2Pu6H.jpg",
		"imdb": 7.5,
		"release_date": "2014-08-28",
		"runtime": 97,
		"genre_ids": [
			878,
			53
		],
		"hash": "02A5AD1A8AF7A8B7BFF49C8FAE39D84A0A25C96A",
		"updated": "2021-09-19T04:45:25.729+00:00"
	},
	{
		"id": 608,
		"tmdb_id": 187017,
		"imdb_id": "tt2294449",
		"title": "Cớm Học Đường 2: Cớm Đại Học",
		"english_title": "22 Jump Street",
		"backdrop_path": "/3CPBBTknyOsgUauYbp5OZe3nvHq.jpg",
		"imdb": 7,
		"release_date": "2014-06-05",
		"runtime": 112,
		"genre_ids": [
			80,
			35,
			28
		],
		"hash": "AAB6D70636774C8D965479F15AA992CB1CA31FF7",
		"updated": "2021-09-19T05:03:18.208+00:00"
	},
	{
		"id": 627,
		"tmdb_id": 270303,
		"imdb_id": "tt3235888",
		"title": "Cuộc Đi Săn Của Quỷ",
		"english_title": "It Follows",
		"backdrop_path": "/sx9llXg8N8JNNAsVCEe8PoWW5tU.jpg",
		"imdb": 6.8,
		"release_date": "2014-05-07",
		"runtime": 101,
		"genre_ids": [
			27
		],
		"hash": "3AC92081BFFA4DDE1A123A7866DA2ED5D25566D9",
		"updated": "2021-09-19T05:39:30.545+00:00"
	},
	{
		"id": 628,
		"tmdb_id": 157350,
		"imdb_id": "tt1840309",
		"title": "Dị Biệt 1: Những Kẻ Bất Trị",
		"english_title": "Divergent",
		"backdrop_path": "/1xUpyKziMq7NNiekBXEWixwYj9S.jpg",
		"imdb": 6.6,
		"release_date": "2014-03-14",
		"runtime": 139,
		"genre_ids": [
			28,
			12,
			878
		],
		"hash": "2D58067BEE4D36F294D0485F2506815C32A89900",
		"updated": "2021-09-19T05:40:43.938+00:00"
	},
	{
		"id": 612,
		"tmdb_id": 205587,
		"imdb_id": "tt1872194",
		"title": "Ngài Thẩm Phán",
		"english_title": "The Judge",
		"backdrop_path": "/lbiQLKU4GA02F5HGlbQBC2JhUQi.jpg",
		"imdb": 7.4,
		"release_date": "2014-10-08",
		"runtime": 141,
		"genre_ids": [
			18
		],
		"hash": "BC72679810C879A5EC663FACFB43E84180AC65DD",
		"updated": "2021-09-19T07:50:44.11+00:00"
	},
	{
		"id": 609,
		"tmdb_id": 138103,
		"imdb_id": "tt2333784",
		"title": "Biệt Đội Đánh Thuê 3",
		"english_title": "The Expendables 3",
		"backdrop_path": "/7DgVRisuIte2nSGqcIusAQsIdpp.jpg",
		"imdb": 6.1,
		"release_date": "2014-08-04",
		"runtime": 126,
		"genre_ids": [
			28,
			12,
			53
		],
		"hash": "38970F3FAA789F4942D33E94C29CEC49D500A255",
		"updated": "2021-09-19T05:50:32.416+00:00"
	},
	{
		"id": 626,
		"tmdb_id": 244267,
		"imdb_id": "tt2884206",
		"title": "Nguồn Gốc",
		"english_title": "I Origins",
		"backdrop_path": "/4nS85GzwTYFgtr8vepGQDmhkX0G.jpg",
		"imdb": 7.4,
		"release_date": "2014-07-18",
		"runtime": 106,
		"genre_ids": [
			878,
			18
		],
		"hash": "6B6A3A5EB90818AA0B184390492335A4DDD3EDFD",
		"updated": "2021-09-19T08:01:55.976+00:00"
	},
	{
		"id": 615,
		"tmdb_id": 244506,
		"imdb_id": "tt2994190",
		"title": "Nữ Binh Sĩ",
		"english_title": "Camp X-Ray",
		"backdrop_path": "/oj63kcrnd78L0AEcd4CvuqIToQ6.jpg",
		"imdb": 6.9,
		"release_date": "2014-10-17",
		"runtime": 117,
		"genre_ids": [
			18
		],
		"hash": "F3934602F749FA73F434A4DF0E7E2BA6DCA02781",
		"updated": "2021-09-19T08:13:38.486+00:00"
	},
	{
		"id": 611,
		"tmdb_id": 124905,
		"imdb_id": "tt0831387",
		"title": "Chúa Tể Godzilla",
		"english_title": "Godzilla",
		"backdrop_path": "/woODl0viQxvYfvENU6Uuh04QrUd.jpg",
		"imdb": 6.4,
		"release_date": "2014-05-14",
		"runtime": 123,
		"genre_ids": [
			28,
			18,
			878
		],
		"hash": "70F05DA4F10DFC028D1FF455D520C0A2D7121B57",
		"updated": "2021-09-19T08:09:56.693+00:00"
	},
	{
		"id": 610,
		"tmdb_id": 297270,
		"imdb_id": "tt3120408",
		"title": "Tinker Bell Và Huyền Thoại Quái Vật",
		"english_title": "Tinker Bell and the Legend of the NeverBeast",
		"backdrop_path": "/i6kebIbNtaXWThG9VbKGdjiUdYW.jpg",
		"imdb": 7.2,
		"release_date": "2014-12-12",
		"runtime": 77,
		"genre_ids": [
			12,
			16,
			10751
		],
		"hash": "E306EAE157E4FB3301F14ADC631C59D01963CA2C",
		"updated": "2021-09-19T08:18:55.854+00:00"
	},
	{
		"id": 625,
		"tmdb_id": 253306,
		"imdb_id": "tt3504048",
		"title": "Ra Khỏi Nhà",
		"english_title": "Housebound",
		"backdrop_path": "/3haw0ndhE0MihQHvyIbU9etWpoN.jpg",
		"imdb": 6.8,
		"release_date": "2014-09-04",
		"runtime": 109,
		"genre_ids": [
			27,
			35,
			53
		],
		"hash": "063D465AD7B452FE6F6C399F100A889F782CCBB4",
		"updated": "2021-09-19T08:28:03.494+00:00"
	},
	{
		"id": 629,
		"tmdb_id": 221732,
		"imdb_id": "tt3029556",
		"title": "Lãng Khách Kenshin 3: Kết Thúc Một Huyền Thoại",
		"english_title": "Rurouni Kenshin Part III: The Legend Ends",
		"backdrop_path": "/4UXfZjqt0C5kHTROotrsnfDYCh.jpg",
		"imdb": 7.6,
		"release_date": "2014-09-13",
		"runtime": 135,
		"genre_ids": [
			28,
			12,
			18,
			14
		],
		"hash": "B81C2A9B56829FDD4152F8B5B94D0C7CB78732C0",
		"updated": "2021-09-19T08:36:36.201+00:00"
	},
	{
		"id": 617,
		"tmdb_id": 136797,
		"imdb_id": "tt2369135",
		"title": "Đam Mê Tốc Độ",
		"english_title": "Need for Speed",
		"backdrop_path": "/tdklHUkunjVOa5POkOpy6PCu3t5.jpg",
		"imdb": 6.4,
		"release_date": "2014-03-13",
		"runtime": 132,
		"genre_ids": [
			28,
			80,
			18,
			53
		],
		"hash": "4CD7D9E2985AFB340B24A5266B368246823FB086",
		"updated": "2021-09-19T08:34:34.915+00:00"
	},
	{
		"id": 607,
		"tmdb_id": 115290,
		"imdb_id": "tt2287663",
		"title": "Blue Lagoon: The Awakening",
		"english_title": "Blue Lagoon: The Awakening",
		"backdrop_path": "/fOMPr3MpZkrJEYcT5f3kI1JwESg.jpg",
		"imdb": 5.5,
		"release_date": "2014-12-08",
		"runtime": 85,
		"genre_ids": [
			18,
			12,
			10749,
			10770
		],
		"hash": "42FB128D15C3D48C83C3DDE29BB2DF85C33F4737",
		"updated": "2021-09-19T08:40:11.299+00:00"
	},
	{
		"id": 644,
		"tmdb_id": 140607,
		"imdb_id": "tt2488496",
		"title": "Chiến Tranh Giữa Các Vì Sao 7: Thần Lực Thức Tỉnh",
		"english_title": "Star Wars: The Force Awakens",
		"backdrop_path": "/fK0423lqxNG20ZXCDO41vfJjBTU.jpg",
		"imdb": 7.9,
		"release_date": "2015-12-15",
		"runtime": 136,
		"genre_ids": [
			28,
			12,
			878,
			14
		],
		"hash": "423EED0C53F3857F66FCFB7522FB8C3829D1DCF4",
		"updated": "2021-09-18T12:21:58.536+00:00"
	},
	{
		"id": 641,
		"tmdb_id": 206647,
		"imdb_id": "tt2379713",
		"title": "Điệp Viên 007: Bóng Ma",
		"english_title": "Spectre",
		"backdrop_path": "/tXhi8m3SsWc5R93n5S4POSNQGDq.jpg",
		"imdb": 6.8,
		"release_date": "2015-10-26",
		"runtime": 148,
		"genre_ids": [
			28,
			12,
			53
		],
		"hash": "65A2EB308B6F99522FA672FCA08C999F0611C591",
		"updated": "2021-09-19T00:48:12.328+00:00"
	},
	{
		"id": 648,
		"tmdb_id": 277216,
		"imdb_id": "tt1398426",
		"title": "Straight Outta Compton",
		"english_title": "Straight Outta Compton",
		"backdrop_path": "/lM40xQYLDjrihfyYMPeOxM2V3Ci.jpg",
		"imdb": 7.8,
		"release_date": "2015-08-13",
		"runtime": 147,
		"genre_ids": [
			10402,
			18
		],
		"hash": "86B895C4535B1CC6DD9BBD19C5E3430E69E5F609",
		"updated": "2021-09-19T01:25:47.896+00:00"
	},
	{
		"id": 646,
		"tmdb_id": 273248,
		"imdb_id": "tt3460252",
		"title": "Tám Hận Thù",
		"english_title": "The Hateful Eight",
		"backdrop_path": "/u8XzXOEfS33kIgL7hT4kG7Hdrqw.jpg",
		"imdb": 7.8,
		"release_date": "2015-12-25",
		"runtime": 188,
		"genre_ids": [
			80,
			18,
			9648,
			37
		],
		"hash": "5CB561222EAA619DFA38D742DBA67EF134F33D4A",
		"updated": "2021-09-19T01:31:15.441+00:00"
	},
	{
		"id": 653,
		"tmdb_id": 273481,
		"imdb_id": "tt3397884",
		"title": "Sicario: Ranh Giới",
		"english_title": "Sicario",
		"backdrop_path": "/dXLnbn3oYP7g2ThWBwnhfZOTHXj.jpg",
		"imdb": 7.6,
		"release_date": "2015-09-17",
		"runtime": 122,
		"genre_ids": [
			28,
			80,
			53
		],
		"hash": "791585794116D6BF67703727621A772105E85F9E",
		"updated": "2021-09-19T04:39:35.061+00:00"
	},
	{
		"id": 638,
		"tmdb_id": 296098,
		"imdb_id": "tt3682448",
		"title": "Người Đàm Phán",
		"english_title": "Bridge of Spies",
		"backdrop_path": "/yq3RPPEbI1OQc2pRZzjMTgzRalQ.jpg",
		"imdb": 7.6,
		"release_date": "2015-10-15",
		"runtime": 141,
		"genre_ids": [
			53,
			18
		],
		"hash": "B7997D660E1EAED4314316ADC2EE70B8893361DD",
		"updated": "2021-09-19T04:41:59.262+00:00"
	},
	{
		"id": 652,
		"tmdb_id": 203801,
		"imdb_id": "tt1638355",
		"title": "Tổ Chức Bóng Đêm U.N.C.L.E.",
		"english_title": "The Man from U.N.C.L.E.",
		"backdrop_path": "/5ORKoZPlzfO9hKJ5pG1zMjrhvwg.jpg",
		"imdb": 7.3,
		"release_date": "2015-08-13",
		"runtime": 116,
		"genre_ids": [
			35,
			28,
			12
		],
		"hash": "746162059F157B17D9484D2ED325B9CE31971BCC",
		"updated": "2021-09-19T05:00:54.366+00:00"
	},
	{
		"id": 632,
		"tmdb_id": 102651,
		"imdb_id": "tt1587310",
		"title": "Tiên Hắc Ám",
		"english_title": "Maleficent",
		"backdrop_path": "/nLT2CbDag1Ncv5wNKYL4hA3mGxU.jpg",
		"imdb": 7,
		"release_date": "2014-05-28",
		"runtime": 97,
		"genre_ids": [
			14,
			12,
			28,
			10751,
			10749
		],
		"hash": "1A097CC231756AE06C3A2BC1E39780765D5FBAF3",
		"updated": "2021-09-19T05:13:23.077+00:00"
	},
	{
		"id": 650,
		"tmdb_id": 310131,
		"imdb_id": "tt4263482",
		"title": "Phù Thủy Bóng Tối",
		"english_title": "The Witch",
		"backdrop_path": "/gDv7TmCZK3BM5R1Gc0Q1KkUvZ6l.jpg",
		"imdb": 6.9,
		"release_date": "2015-01-27",
		"runtime": 92,
		"genre_ids": [
			27,
			18,
			9648,
			36
		],
		"hash": "D476B049A5D4650E9CFBD65E24C97BFD91A420FC",
		"updated": "2021-09-19T05:36:08.195+00:00"
	},
	{
		"id": 651,
		"tmdb_id": 214756,
		"imdb_id": "tt2637276",
		"title": "Chú Gấu Ted 2",
		"english_title": "Ted 2",
		"backdrop_path": "/sabbmaIKLDg13XUsmimM6jbrPfX.jpg",
		"imdb": 6.3,
		"release_date": "2015-06-25",
		"runtime": 115,
		"genre_ids": [
			35
		],
		"hash": "199BB951CC50BA1367B066D2197A0D82158C33D8",
		"updated": "2021-09-19T05:26:30.345+00:00"
	},
	{
		"id": 649,
		"tmdb_id": 262500,
		"imdb_id": "tt2908446",
		"title": "Dị Biệt 2: Những Kẻ Nổi Loạn",
		"english_title": "Insurgent",
		"backdrop_path": "/pRwl2bBX33FI6NzpwgelWWkQ57D.jpg",
		"imdb": 6.2,
		"release_date": "2015-03-18",
		"runtime": 119,
		"genre_ids": [
			28,
			12,
			878,
			53
		],
		"hash": "6AB9E319C6414F4800FEB05AFBB84111A671C8E1",
		"updated": "2021-09-19T05:40:55.542+00:00"
	},
	{
		"id": 636,
		"tmdb_id": 158852,
		"imdb_id": "tt1964418",
		"title": "Thế Giới Bí Ẩn",
		"english_title": "Tomorrowland",
		"backdrop_path": "/8hKd1OPsLxzAsHl81RHzKGVkVFn.jpg",
		"imdb": 6.4,
		"release_date": "2015-05-19",
		"runtime": 130,
		"genre_ids": [
			12,
			10751,
			9648,
			878
		],
		"hash": "32415815A0B4621400688F0BF2966D7FD3435D93",
		"updated": "2021-09-19T06:16:55.676+00:00"
	},
	{
		"id": 640,
		"tmdb_id": 211672,
		"imdb_id": "tt2293640",
		"title": "Minions",
		"english_title": "Minions",
		"backdrop_path": "/pZxmcsa3FX3kYLhJD5DLutsamNo.jpg",
		"imdb": 6.4,
		"release_date": "2015-06-17",
		"runtime": 91,
		"genre_ids": [
			10751,
			16,
			12,
			35
		],
		"hash": "7F67D9B6CCEEC8876F0BCF1BFD206D42A507C5E0",
		"updated": "2021-09-19T06:18:00.797+00:00"
	},
	{
		"id": 637,
		"tmdb_id": 254128,
		"imdb_id": "tt2126355",
		"title": "Khe Nứt San Andreas",
		"english_title": "San Andreas",
		"backdrop_path": "/yBd1zpfXylcUHiuyREs4kFPOxs1.jpg",
		"imdb": 6.1,
		"release_date": "2015-05-27",
		"runtime": 114,
		"genre_ids": [
			28,
			18,
			53
		],
		"hash": "E8BB36B5199EB989D49828460CF90019958A3F4C",
		"updated": "2021-09-19T06:23:03.067+00:00"
	},
	{
		"id": 642,
		"tmdb_id": 159824,
		"imdb_id": "tt2510894",
		"title": "Khách Sạn Huyền Bí 2",
		"english_title": "Hotel Transylvania 2",
		"backdrop_path": "/7VzSrR2AATUzF2JdHPCUB9771nJ.jpg",
		"imdb": 6.7,
		"release_date": "2015-09-21",
		"runtime": 89,
		"genre_ids": [
			10751,
			16,
			35,
			14
		],
		"hash": "7DF3FE6BD0F2C209F581DB2D26CB69878608FFB9",
		"updated": "2021-09-19T06:36:06.637+00:00"
	},
	{
		"id": 634,
		"tmdb_id": 241848,
		"imdb_id": "tt2980592",
		"title": "Vị Khách Không Mời",
		"english_title": "The Guest",
		"backdrop_path": "/icExaq5L2N0FNGmacNuS7ushEY6.jpg",
		"imdb": 6.7,
		"release_date": "2014-09-17",
		"runtime": 100,
		"genre_ids": [
			9648,
			53,
			28
		],
		"hash": "C0E6E2013925A063FEDBD9DB3F0F18F328C08C9B",
		"updated": "2021-09-19T08:03:25.111+00:00"
	},
	{
		"id": 635,
		"tmdb_id": 227306,
		"imdb_id": "tt1809398",
		"title": "Không Khuất Phục",
		"english_title": "Unbroken",
		"backdrop_path": "/i3t3eJyPsLnODc0Y7NuDoY1GOoS.jpg",
		"imdb": 7.2,
		"release_date": "2014-12-25",
		"runtime": 137,
		"genre_ids": [
			18,
			10752
		],
		"hash": "DEAC407A10AE056525A93EFA957BD252715DEB07",
		"updated": "2021-09-19T08:07:48.098+00:00"
	},
	{
		"id": 639,
		"tmdb_id": 318846,
		"imdb_id": "tt1596363",
		"title": "Đại Suy Thoái",
		"english_title": "The Big Short",
		"backdrop_path": "/bchL81rPXMZG5MTRmojVqGNhGmO.jpg",
		"imdb": 7.8,
		"release_date": "2015-12-11",
		"runtime": 131,
		"genre_ids": [
			35,
			18
		],
		"hash": "E903BD232A363C0F5A10F5B12B5893445364AE9B",
		"updated": "2022-01-17T12:32:32.609+00:00"
	},
	{
		"id": 654,
		"tmdb_id": 263109,
		"imdb_id": "tt2872750",
		"title": "Người Bạn Ngoài Hành Tinh",
		"english_title": "Shaun the Sheep Movie",
		"backdrop_path": "/nWLaQghS2v9jKGXFsl6M5y1UG3U.jpg",
		"imdb": 7.3,
		"release_date": "2015-02-05",
		"runtime": 85,
		"genre_ids": [
			10751,
			16,
			35,
			12
		],
		"hash": "B8B871BEDE279977AA5A5EAE80F2A17E5729424D",
		"updated": "2021-09-19T08:24:06.191+00:00"
	},
	{
		"id": 631,
		"tmdb_id": 246741,
		"imdb_id": "tt3416742",
		"title": "Chúng Ta Làm Gì Trong Bóng Tối",
		"english_title": "What We Do in the Shadows",
		"backdrop_path": "/cdFfjPgUeyZNvz3aTaWEcEGAUDG.jpg",
		"imdb": 7.7,
		"release_date": "2014-06-19",
		"runtime": 86,
		"genre_ids": [
			35,
			27
		],
		"hash": "1917A3AABDBF41A5F61C20B5DA56C0F5595F9276",
		"updated": "2021-09-19T08:27:38.659+00:00"
	},
	{
		"id": 643,
		"tmdb_id": 325348,
		"imdb_id": "tt3072482",
		"title": "Hardcore Henry",
		"english_title": "Hardcore Henry",
		"backdrop_path": "/7GXTf0oEXVASafSaS9BITRALpdU.jpg",
		"imdb": 6.7,
		"release_date": "2015-09-12",
		"runtime": 97,
		"genre_ids": [
			28,
			12,
			878
		],
		"hash": "C5C46CD14999C0945AD988C837457247CB0A6800",
		"updated": "2021-09-19T08:39:46.338+00:00"
	},
	{
		"id": 633,
		"tmdb_id": 243683,
		"imdb_id": "tt2626350",
		"title": "Bước Nhảy Đường Phố 5",
		"english_title": "Step Up All In",
		"backdrop_path": "/t1d4KVUdCP9J5mYtOUrdEfugvKg.jpg",
		"imdb": 6,
		"release_date": "2014-07-16",
		"runtime": 112,
		"genre_ids": [
			10749,
			18,
			10402
		],
		"hash": "3DAD63DAD93ACE3076C2095E5C337C9E0DC1DCA3",
		"updated": "2021-09-19T08:40:57.888+00:00"
	},
	{
		"id": 630,
		"tmdb_id": 286554,
		"imdb_id": "tt2140619",
		"title": "Tình Hai Đêm",
		"english_title": "Two Night Stand",
		"backdrop_path": "/dgZ5e1q6dGUYLUxepmZTmoGqwEy.jpg",
		"imdb": 6.4,
		"release_date": "2014-09-26",
		"runtime": 86,
		"genre_ids": [
			10749,
			35
		],
		"hash": "379C0A8B728DD8EF23B3B5C354EF15171A6B7BFA",
		"updated": "2021-10-25T11:58:36.084+00:00"
	},
	{
		"id": 667,
		"tmdb_id": 264644,
		"imdb_id": "tt3170832",
		"title": "Căn Phòng",
		"english_title": "Room",
		"backdrop_path": "/nNUmSF50ISSMndJA7y4HhuAvyTV.jpg",
		"imdb": 8.1,
		"release_date": "2015-10-16",
		"runtime": 118,
		"genre_ids": [
			18,
			53
		],
		"hash": "F6287E2169D68FB1A315DED14D6BF74765736564",
		"updated": "2021-10-17T04:44:13.546+00:00"
	},
	{
		"id": 655,
		"tmdb_id": 274167,
		"imdb_id": "tt1528854",
		"title": "Bố Ngoan, Bố Hư",
		"english_title": "Daddy's Home",
		"backdrop_path": "/tfAU98jhpXbayiPSMX8IpmA4dGZ.jpg",
		"imdb": 6.2,
		"release_date": "2015-12-25",
		"runtime": 96,
		"genre_ids": [
			35
		],
		"hash": "AC149C7224B2B57B8644B3F4ACB8FBCA09F5EBF4",
		"updated": "2021-09-26T02:23:01.883+00:00"
	},
	{
		"id": 678,
		"tmdb_id": 150540,
		"imdb_id": "tt2096673",
		"title": "Những Mảnh Ghép Cảm Xúc",
		"english_title": "Inside Out",
		"backdrop_path": "/1F2p6zS62l6qnNUnS15U6Y7LOSi.jpg",
		"imdb": 8.1,
		"release_date": "2015-06-09",
		"runtime": 95,
		"genre_ids": [
			16,
			10751,
			12,
			18,
			35
		],
		"hash": "556BE0BD40C4880E29BA567663C65BD8BAE9FBEB",
		"updated": "2021-09-17T12:41:51.58+00:00"
	},
	{
		"id": 672,
		"tmdb_id": 228161,
		"imdb_id": "tt2224026",
		"title": "Hành Trình Trở Về",
		"english_title": "Home",
		"backdrop_path": "/lqyMilfeIrurdB2Z3ZccsVp5Ve8.jpg",
		"imdb": 6.6,
		"release_date": "2015-03-18",
		"runtime": 94,
		"genre_ids": [
			14,
			35,
			16,
			878,
			10751
		],
		"hash": "F07C2A0B3CE09ACB4C72611CF108B77C7D967949",
		"updated": "2021-09-18T01:23:37.278+00:00"
	},
	{
		"id": 664,
		"tmdb_id": 286217,
		"imdb_id": "tt3659388",
		"title": "Người Về Từ Sao Hỏa",
		"english_title": "The Martian",
		"backdrop_path": "/z7dEefw5mgvYn6N6d6TojTi550s.jpg",
		"imdb": 8,
		"release_date": "2015-09-30",
		"runtime": 144,
		"genre_ids": [
			18,
			12,
			878
		],
		"hash": "874932A935D0C9C0E439259C60F38AC331661F66",
		"updated": "2021-09-18T06:04:44.456+00:00"
	},
	{
		"id": 674,
		"tmdb_id": 281957,
		"imdb_id": "tt1663202",
		"title": "Người về từ cõi chết",
		"english_title": "The Revenant",
		"backdrop_path": "/utbrAEM81AdnRmJ0qoqNiMo1iRt.jpg",
		"imdb": 8,
		"release_date": "2015-12-25",
		"runtime": 157,
		"genre_ids": [
			37,
			18,
			12
		],
		"hash": "931A5BC5CE3767168D00F92A2E4CFFE472B9CE54",
		"updated": "2021-09-18T06:06:53.083+00:00"
	},
	{
		"id": 666,
		"tmdb_id": 87101,
		"imdb_id": "tt1340138",
		"title": "Kẻ Hủy Diệt 5: Thời Đại Genisys",
		"english_title": "Terminator Genisys",
		"backdrop_path": "/269Q90CiiDmNmvQbazECN7zbaGZ.jpg",
		"imdb": 6.3,
		"release_date": "2015-06-23",
		"runtime": 126,
		"genre_ids": [
			878,
			28,
			53,
			12
		],
		"hash": "C1D7DF860B8EE683ABCA0007007AF7212CD6A980",
		"updated": "2021-09-18T13:17:13.263+00:00"
	},
	{
		"id": 670,
		"tmdb_id": 150689,
		"imdb_id": "tt1661199",
		"title": "Lọ Lem",
		"english_title": "Cinderella",
		"backdrop_path": "/mlNQHqEIWtRn1R4vbtiboEHmZPW.jpg",
		"imdb": 6.9,
		"release_date": "2015-03-12",
		"runtime": 105,
		"genre_ids": [
			10749,
			14,
			10751,
			18
		],
		"hash": "93E545F95354D90539C51BC3A59AC685B613C75C",
		"updated": "2021-09-19T01:32:06.261+00:00"
	},
	{
		"id": 668,
		"tmdb_id": 177677,
		"imdb_id": "tt2381249",
		"title": "Nhiệm Vụ Bất Khả Thi 5: Quốc Gia Bí Ẩn",
		"english_title": "Mission: Impossible - Rogue Nation",
		"backdrop_path": "/iTW3l6tFcOna1x6OSnetz1xImay.jpg",
		"imdb": 7.4,
		"release_date": "2015-07-23",
		"runtime": 131,
		"genre_ids": [
			28,
			12
		],
		"hash": "08082C3DCE2219347225A42E43CC7214032A09AC",
		"updated": "2021-09-19T03:06:05.101+00:00"
	},
	{
		"id": 658,
		"tmdb_id": 264660,
		"imdb_id": "tt0470752",
		"title": "Người Máy Trỗi Dậy",
		"english_title": "Ex Machina",
		"backdrop_path": "/d9aM98DXYyoza1PcGRUvUOU25nC.jpg",
		"imdb": 7.7,
		"release_date": "2015-01-16",
		"runtime": 108,
		"genre_ids": [
			18,
			878
		],
		"hash": "31FF6C7F8AF99BDBC2D5F022367BC6B85BD613EE",
		"updated": "2021-09-19T04:36:24.022+00:00"
	},
	{
		"id": 665,
		"tmdb_id": 254470,
		"imdb_id": "tt2848292",
		"title": "Sự Nổi Loạn Hoàn Hảo 2",
		"english_title": "Pitch Perfect 2",
		"backdrop_path": "/ytnMCLz9n7JFeksIpih74Liz3ih.jpg",
		"imdb": 6.4,
		"release_date": "2015-05-07",
		"runtime": 115,
		"genre_ids": [
			35,
			10402
		],
		"hash": "F777147438E22C15C8E16EF61133F97BD58E09CF",
		"updated": "2021-09-19T05:06:55.772+00:00"
	},
	{
		"id": 661,
		"tmdb_id": 294254,
		"imdb_id": "tt4046784",
		"title": "Giải Mã Mê Cung 2: Thử Nghiệm Đất Cháy",
		"english_title": "Maze Runner: The Scorch Trials",
		"backdrop_path": "/8Al7lHTWQglsNtAI5mremGo4BsE.jpg",
		"imdb": 6.3,
		"release_date": "2015-09-09",
		"runtime": 131,
		"genre_ids": [
			878,
			28,
			53
		],
		"hash": "4B1C856363402A138389AE940DF2C3367BAEA7B3",
		"updated": "2021-09-19T05:37:26.675+00:00"
	},
	{
		"id": 656,
		"tmdb_id": 249070,
		"imdb_id": "tt2679042",
		"title": "Sát Thủ: Mật Danh 47",
		"english_title": "Hitman: Agent 47",
		"backdrop_path": "/9UEZo4i0XioHBVA2Z5hy8tcCx8V.jpg",
		"imdb": 5.7,
		"release_date": "2015-08-20",
		"runtime": 96,
		"genre_ids": [
			28,
			80,
			53
		],
		"hash": "C0602E072C816A780A9AEBE1066A4BD5CE4D3F95",
		"updated": "2021-09-19T06:20:16.962+00:00"
	},
	{
		"id": 659,
		"tmdb_id": 192141,
		"imdb_id": "tt1781922",
		"title": "Không Lối Thoát",
		"english_title": "No Escape",
		"backdrop_path": "/cIslo9c3woWELPmTwsGjTe4vK83.jpg",
		"imdb": 6.8,
		"release_date": "2015-08-26",
		"runtime": 103,
		"genre_ids": [
			53
		],
		"hash": "9FEA22B76E5EFC8CE6C9354A2C4AF6FE592E46D5",
		"updated": "2021-10-07T10:18:50.172+00:00"
	},
	{
		"id": 677,
		"tmdb_id": 135397,
		"imdb_id": "tt0369610",
		"title": "Thế Giới Khủng Long",
		"english_title": "Jurassic World",
		"backdrop_path": "/7scm8kMHeCO71VARxYVyCcVHYjp.jpg",
		"imdb": 7,
		"release_date": "2015-06-06",
		"runtime": 124,
		"genre_ids": [
			28,
			12,
			878,
			53
		],
		"hash": "D6525C8CB07CBC6CE001A97541DAD408D4F1FFF0",
		"updated": "2021-09-19T06:30:00.545+00:00"
	},
	{
		"id": 676,
		"tmdb_id": 241554,
		"imdb_id": "tt2199571",
		"title": "Tẩu Thoát Trong Đêm",
		"english_title": "Run All Night",
		"backdrop_path": "/1TW0w7PvPP8fHxkaToZ2b6b39xc.jpg",
		"imdb": 6.6,
		"release_date": "2015-03-11",
		"runtime": 114,
		"genre_ids": [
			28,
			18,
			53,
			80
		],
		"hash": "9D535CC988C98BBC45630F0CD2EAC7021EAEC303",
		"updated": "2021-09-19T07:56:53.714+00:00"
	},
	{
		"id": 660,
		"tmdb_id": 227719,
		"imdb_id": "tt2436386",
		"title": "Du Hành Quá Khứ",
		"english_title": "Project Almanac",
		"backdrop_path": "/ws4c54YRe0RB0ym44Sh5lIaKcO3.jpg",
		"imdb": 6.4,
		"release_date": "2015-01-28",
		"runtime": 106,
		"genre_ids": [
			878,
			53,
			18
		],
		"hash": "F42B13271DB2BAB941EE0D49F2558399ED6D963B",
		"updated": "2021-09-19T08:01:45.12+00:00"
	},
	{
		"id": 663,
		"tmdb_id": 257091,
		"imdb_id": "tt2561572",
		"title": "Tập Làm Côn Đồ",
		"english_title": "Get Hard",
		"backdrop_path": "/wZUbpRbeR4ISGDgCYSYn8XTLdSY.jpg",
		"imdb": 6,
		"release_date": "2015-03-26",
		"runtime": 100,
		"genre_ids": [
			35
		],
		"hash": "1A79B3C1987AE9A456BAB4617A9B47C8231E59C7",
		"updated": "2021-09-19T08:08:50.954+00:00"
	},
	{
		"id": 669,
		"tmdb_id": 228165,
		"imdb_id": "tt2279373",
		"title": "The SpongeBob Movie: Sponge Out of Water",
		"english_title": "The SpongeBob Movie: Sponge Out of Water",
		"backdrop_path": "/xAoy0cdIRMAGZEor5IClyC4yAsb.jpg",
		"imdb": 6,
		"release_date": "2015-01-28",
		"runtime": 92,
		"genre_ids": [
			12,
			35,
			10751,
			14,
			16
		],
		"hash": "3161E1EFE9B3534E888F065A233962DB76F02DE1",
		"updated": "2021-09-19T08:03:15.03+00:00"
	},
	{
		"id": 675,
		"tmdb_id": 365222,
		"imdb_id": "tt2888046",
		"title": "Diệp Vấn 3",
		"english_title": "Ip Man 3",
		"backdrop_path": "/x9VtC7BHZL3bk9nTIhnhcdFUKTF.jpg",
		"imdb": 7.1,
		"release_date": "2015-12-19",
		"runtime": 105,
		"genre_ids": [
			28,
			18,
			36
		],
		"hash": "E9454AE042C9C5530CEBF55E31F3034AA43E4BBB",
		"updated": "2021-09-19T08:35:03.122+00:00"
	},
	{
		"id": 662,
		"tmdb_id": 336882,
		"imdb_id": "tt3616916",
		"title": "Sóng Tử Thần",
		"english_title": "The Wave",
		"backdrop_path": "/uD8keI7yfJjz9oGgmt3aNGvQfuQ.jpg",
		"imdb": 6.7,
		"release_date": "2015-08-28",
		"runtime": 104,
		"genre_ids": [
			28,
			18,
			53
		],
		"hash": "99C6A9E5565A9C979E8738F93F28CB6E28C341CA",
		"updated": "2021-09-19T10:14:43.348+00:00"
	},
	{
		"id": 657,
		"tmdb_id": 228205,
		"imdb_id": "tt2726560",
		"title": "Con Đường Bất Tận",
		"english_title": "The Longest Ride",
		"backdrop_path": "/9PjyjwidxWl0FLeOixVXq89u0iV.jpg",
		"imdb": 7.1,
		"release_date": "2015-04-09",
		"runtime": 128,
		"genre_ids": [
			18,
			10749
		],
		"hash": "F83E1B203F936CF5D676B45CD19C6E68718BA22B",
		"updated": "2021-09-19T10:38:28.806+00:00"
	},
	{
		"id": 671,
		"tmdb_id": 314365,
		"imdb_id": "tt1895587",
		"title": "Tiêu Điểm",
		"english_title": "Spotlight",
		"backdrop_path": "/5gvMByVGYoGbGFQKBH3Ngg0pcE7.jpg",
		"imdb": 8.1,
		"release_date": "2015-11-06",
		"runtime": 129,
		"genre_ids": [
			18,
			53,
			36
		],
		"hash": "D865DF5BB761D4C976265DF922AC679D39130B4E",
		"updated": "2021-09-22T09:12:20.29+00:00"
	},
	{
		"id": 695,
		"tmdb_id": 372058,
		"imdb_id": "tt5311514",
		"title": "Tên Cậu Là Gì?",
		"english_title": "Your Name.",
		"backdrop_path": "/qg0P94wHVrrozZkxfcXx0w5fHl.jpg",
		"imdb": 8.4,
		"release_date": "2016-08-26",
		"runtime": 106,
		"genre_ids": [
			10749,
			16,
			18
		],
		"hash": "4DCDDD6DEB6FDE94DAE41F9991FE4223C30972E8",
		"updated": "2021-09-16T02:59:31.559+00:00"
	},
	{
		"id": 699,
		"tmdb_id": 379170,
		"imdb_id": "tt3845232",
		"title": "Thám Tử Sherlock: Cô Dâu Gớm Ghiếc",
		"english_title": "Sherlock: The Abominable Bride",
		"backdrop_path": "/6DQhA8HTimkNw7AXIohr5NQhtv3.jpg",
		"imdb": 8.2,
		"release_date": "2016-01-01",
		"runtime": 90,
		"genre_ids": [
			80,
			18,
			9648
		],
		"hash": "BBEACB684526B0BF5F5BD3646A04F82C8708CEA5",
		"updated": "2021-09-16T06:31:59.687+00:00"
	},
	{
		"id": 702,
		"tmdb_id": 290250,
		"imdb_id": "tt3799694",
		"title": "Những Chàng Trai Ngoan",
		"english_title": "The Nice Guys",
		"backdrop_path": "/cWh55wCeuScolP0KbIeL4Hz9enH.jpg",
		"imdb": 7.4,
		"release_date": "2016-05-15",
		"runtime": 116,
		"genre_ids": [
			35,
			80,
			28
		],
		"hash": "346D0E22F0164334B85CE793550C4C8FA8066A6F",
		"updated": "2021-12-13T10:49:03.651+00:00"
	},
	{
		"id": 694,
		"tmdb_id": 293660,
		"imdb_id": "tt1431045",
		"title": "Quái Nhân Deadpool",
		"english_title": "Deadpool",
		"backdrop_path": "/igmvRtYSm6viwEFFKfna6ckGHRt.jpg",
		"imdb": 8,
		"release_date": "2016-02-09",
		"runtime": 108,
		"genre_ids": [
			28,
			12,
			35
		],
		"hash": "6268ABCCB049444BEE76813177AA46643A7ADA88",
		"updated": "2021-09-18T06:07:28.105+00:00"
	},
	{
		"id": 681,
		"tmdb_id": 102899,
		"imdb_id": "tt0478970",
		"title": "Người Kiến",
		"english_title": "Ant-Man",
		"backdrop_path": "/6tkAVEGQTBt8svDlDj3zyIw7mtP.jpg",
		"imdb": 7.3,
		"release_date": "2015-07-14",
		"runtime": 117,
		"genre_ids": [
			878,
			28,
			12
		],
		"hash": "EE07FC0BC38040AC3E7440C4DE02C02A4A8E0154",
		"updated": "2021-09-18T12:55:35.258+00:00"
	},
	{
		"id": 679,
		"tmdb_id": 99861,
		"imdb_id": "tt2395427",
		"title": "Biệt Đội Siêu Anh Hùng: Đế Chế Ultron",
		"english_title": "Avengers: Age of Ultron",
		"backdrop_path": "/pGILiW2loBuc0tBxdylgalX3zFM.jpg",
		"imdb": 7.3,
		"release_date": "2015-04-22",
		"runtime": 141,
		"genre_ids": [
			28,
			12,
			878
		],
		"hash": "92B4D5EA2D21BC2692A2CB1E5B9FBECD489863EC",
		"updated": "2021-09-18T12:56:02.147+00:00"
	},
	{
		"id": 682,
		"tmdb_id": 131634,
		"imdb_id": "tt1951266",
		"title": "Đấu Trường Sinh Tử: Húng Nhại 2",
		"english_title": "The Hunger Games: Mockingjay - Part 2",
		"backdrop_path": "/buzWkRH5Y1dgS55ZbHQUZDw6pzF.jpg",
		"imdb": 6.6,
		"release_date": "2015-11-18",
		"runtime": 137,
		"genre_ids": [
			28,
			12,
			878
		],
		"hash": "42FDF1AEEE3C641BE8C41BC1FEEDDF87A50CAE12",
		"updated": "2021-09-18T12:59:14.664+00:00"
	},
	{
		"id": 680,
		"tmdb_id": 312221,
		"imdb_id": "tt3076658",
		"title": "Tay Đấm Huyền Thoại",
		"english_title": "Creed",
		"backdrop_path": "/qLenDQT9JaxAPZXMUkVGp7Vn0YC.jpg",
		"imdb": 7.6,
		"release_date": "2015-11-25",
		"runtime": 133,
		"genre_ids": [
			18
		],
		"hash": "61F4841963901478DB54DE00AECC72297EC2E0BD",
		"updated": "2021-09-19T04:38:16.155+00:00"
	},
	{
		"id": 700,
		"tmdb_id": 127380,
		"imdb_id": "tt2277860",
		"title": "Đi Tìm Dory",
		"english_title": "Finding Dory",
		"backdrop_path": "/9zAhWbqVxYH3Hw7Z4LY8FG7l8E1.jpg",
		"imdb": 7.3,
		"release_date": "2016-06-16",
		"runtime": 97,
		"genre_ids": [
			12,
			16,
			35,
			10751
		],
		"hash": "C9CD862A631FDD4AE7B15BC8C6077BD2932A4A4D",
		"updated": "2021-09-19T04:58:56.892+00:00"
	},
	{
		"id": 691,
		"tmdb_id": 296524,
		"imdb_id": "tt1860357",
		"title": "Thảm Họa Giàn Khoan",
		"english_title": "Deepwater Horizon",
		"backdrop_path": "/uC8Fk8294wzuIqmJhCFeHcgext2.jpg",
		"imdb": 7.1,
		"release_date": "2016-09-29",
		"runtime": 107,
		"genre_ids": [
			18,
			28
		],
		"hash": "59ABD803BAA1651F575D1FBE9ABEFAAEA9253A0D",
		"updated": "2021-09-19T05:09:38.304+00:00"
	},
	{
		"id": 696,
		"tmdb_id": 300671,
		"imdb_id": "tt4172430",
		"title": "13 Giờ: Lính Ngầm Benghazi",
		"english_title": "13 Hours: The Secret Soldiers of Benghazi",
		"backdrop_path": "/DFR0W7HUJUTKfnagXpptwFOJFp.jpg",
		"imdb": 7.3,
		"release_date": "2016-01-13",
		"runtime": 144,
		"genre_ids": [
			10752,
			28,
			36,
			53,
			18
		],
		"hash": "D13974224462B0DF3B7FDE14C8DA48CBB2CFD9ED",
		"updated": "2021-09-19T05:00:11.905+00:00"
	},
	{
		"id": 683,
		"tmdb_id": 238713,
		"imdb_id": "tt3079380",
		"title": "Quý Bà Điệp Viên",
		"english_title": "Spy",
		"backdrop_path": "/hRZcQGEzWVZ2Q21XLKgWUedGuga.jpg",
		"imdb": 7,
		"release_date": "2015-05-06",
		"runtime": 120,
		"genre_ids": [
			28,
			35,
			80
		],
		"hash": "2A210983F89C48822FA82421F31B4D8D55F5C20D",
		"updated": "2021-09-19T05:14:10.664+00:00"
	},
	{
		"id": 690,
		"tmdb_id": 43074,
		"imdb_id": "tt1289401",
		"title": "Biệt Đội Săn Ma",
		"english_title": "Ghostbusters",
		"backdrop_path": "/i2pghg6fLX865mCu8qpVjkG54Ml.jpg",
		"imdb": 6.5,
		"release_date": "2016-07-14",
		"runtime": 117,
		"genre_ids": [
			28,
			14,
			35
		],
		"hash": "38B3427AA82B6E09D6333C6CBB75B5DD47C850E3",
		"updated": "2021-09-19T05:49:21.463+00:00"
	},
	{
		"id": 687,
		"tmdb_id": 256591,
		"imdb_id": "tt2381941",
		"title": "Thánh Lừa",
		"english_title": "Focus",
		"backdrop_path": "/qgyU5gTVyr7WbE8BjmOejBQa4ld.jpg",
		"imdb": 6.6,
		"release_date": "2015-02-25",
		"runtime": 105,
		"genre_ids": [
			10749,
			35,
			80,
			18
		],
		"hash": "63666C575CBEBBF5DFC3D69F1CDBDA66C02F87CB",
		"updated": "2021-09-19T05:51:00.303+00:00"
	},
	{
		"id": 701,
		"tmdb_id": 278924,
		"imdb_id": "tt3522806",
		"title": "Sát Thủ Thợ Máy: Sự Tái Xuất",
		"english_title": "Mechanic: Resurrection",
		"backdrop_path": "/zEBTykHQoM54XTFXOvVteqtGvwK.jpg",
		"imdb": 5.7,
		"release_date": "2016-08-25",
		"runtime": 98,
		"genre_ids": [
			28,
			80,
			53
		],
		"hash": "F767308A8F049CC4FDA72FF94B351D2E70DAF730",
		"updated": "2021-09-19T05:51:42.341+00:00"
	},
	{
		"id": 693,
		"tmdb_id": 346685,
		"imdb_id": "tt3631112",
		"title": "Cô Gái Trên Tàu",
		"english_title": "The Girl on the Train",
		"backdrop_path": "/hqSS9juvWBh2zTMTQzIBJaTxP93.jpg",
		"imdb": 6.5,
		"release_date": "2016-10-05",
		"runtime": 112,
		"genre_ids": [
			80,
			18,
			9648,
			53
		],
		"hash": "1D123A02A30767F44EB8D2FB12BF5E0D5BB09373",
		"updated": "2021-09-19T05:53:30.182+00:00"
	},
	{
		"id": 697,
		"tmdb_id": 316727,
		"imdb_id": "tt4094724",
		"title": "Ngày Thanh Trừng 3: Năm Bầu Cử",
		"english_title": "The Purge: Election Year",
		"backdrop_path": "/88LxLootqAbqfJ4uQhI7Z4BpYyp.jpg",
		"imdb": 6,
		"release_date": "2016-06-29",
		"runtime": 105,
		"genre_ids": [
			28,
			27,
			53
		],
		"hash": "899EAC60E91CE6D8047461881115AAD7DF150C7F",
		"updated": "2021-09-19T06:17:51.755+00:00"
	},
	{
		"id": 689,
		"tmdb_id": 291870,
		"imdb_id": "tt1860213",
		"title": "Ông Nội Ăn Chơi",
		"english_title": "Dirty Grandpa",
		"backdrop_path": "/yfXYte5ASR8g4UYwhwFxKarbeqR.jpg",
		"imdb": 5.9,
		"release_date": "2016-01-20",
		"runtime": 102,
		"genre_ids": [
			35
		],
		"hash": "D932C178C473E5E800D9E6857BEDB34D891873C7",
		"updated": "2021-09-19T06:24:08.421+00:00"
	},
	{
		"id": 685,
		"tmdb_id": 280092,
		"imdb_id": "tt3195644",
		"title": "Qủy Quyệt 3",
		"english_title": "Insidious: Chapter 3",
		"backdrop_path": "/aGd1ORQkK5KsIgILA3TzGjF5rxP.jpg",
		"imdb": 6.1,
		"release_date": "2015-06-04",
		"runtime": 97,
		"genre_ids": [
			27,
			18,
			53
		],
		"hash": "3EB3F89ADBD69867F82E3A1DE98CC801B66099E2",
		"updated": "2021-09-19T07:58:02.076+00:00"
	},
	{
		"id": 692,
		"tmdb_id": 267935,
		"imdb_id": "tt3691740",
		"title": "Chuyện Chưa Kể Ở Xứ Sở Khổng Lồ",
		"english_title": "The BFG",
		"backdrop_path": "/AwBp6kOUkJXrV69wqDE0GNLL2Q3.jpg",
		"imdb": 6.4,
		"release_date": "2016-06-01",
		"runtime": 117,
		"genre_ids": [
			12,
			10751,
			14
		],
		"hash": "B47E5CE37DDCAE25ED126CF06201C189F069EE08",
		"updated": "2021-09-19T08:16:56.506+00:00"
	},
	{
		"id": 686,
		"tmdb_id": 254320,
		"imdb_id": "tt3464902",
		"title": "Những Người Độc Thân",
		"english_title": "The Lobster",
		"backdrop_path": "/bvr5gxpGwGdbt3miGorymuxAdHR.jpg",
		"imdb": 7.2,
		"release_date": "2015-10-15",
		"runtime": 118,
		"genre_ids": [
			35,
			18,
			10749
		],
		"hash": "46E3B61C9A16531F3DAFEE1942B2F371436F71D4",
		"updated": "2021-09-19T10:09:54.466+00:00"
	},
	{
		"id": 688,
		"tmdb_id": 76341,
		"imdb_id": "tt1392190",
		"title": "Max Điên: Con Đường Tử Thần",
		"english_title": "Mad Max: Fury Road",
		"backdrop_path": "/8BVSqAfU5knNkxyCH4JiANHwjeZ.jpg",
		"imdb": 8.1,
		"release_date": "2015-05-13",
		"runtime": 121,
		"genre_ids": [
			28,
			12,
			878
		],
		"hash": "13241FE16A2797B2A41B7822BDE970274D6B687C",
		"updated": "2021-09-23T08:46:13.899+00:00"
	},
	{
		"id": 725,
		"tmdb_id": 290098,
		"imdb_id": "tt4016934",
		"title": "Người Hầu Gái",
		"english_title": "The Handmaiden",
		"backdrop_path": "/jmJFgotr5QqNBDPu4L9aNK2pirc.jpg",
		"imdb": 8.1,
		"release_date": "2016-06-01",
		"runtime": 145,
		"genre_ids": [
			53,
			18,
			10749
		],
		"hash": "C5FD4B0AE74AB2F1D9D0D4BA866DC2B747FC6420",
		"updated": "2021-09-17T12:42:11.73+00:00"
	},
	{
		"id": 710,
		"tmdb_id": 269149,
		"imdb_id": "tt2948356",
		"title": "Thành Phố Động Vật: Phi Vụ Động Trời",
		"english_title": "Zootopia",
		"backdrop_path": "/dFONBBz4BkmtZm73Ym8q5GBJ1TT.jpg",
		"imdb": 8,
		"release_date": "2016-02-11",
		"runtime": 109,
		"genre_ids": [
			16,
			12,
			10751,
			35
		],
		"hash": "AE6C7870E48D1F7E1F03CBCB4BBCDEA70CE8AF9D",
		"updated": "2021-09-18T06:08:01.019+00:00"
	},
	{
		"id": 726,
		"tmdb_id": 271110,
		"imdb_id": "tt3498820",
		"title": "Captain America 3: Nội Chiến Siêu Anh Hùng",
		"english_title": "Captain America: Civil War",
		"backdrop_path": "/bIzXgxDHxAAKcl2R5p5KmwfutmC.jpg",
		"imdb": 7.8,
		"release_date": "2016-04-27",
		"runtime": 147,
		"genre_ids": [
			12,
			28,
			878
		],
		"hash": "89925FB48CAE260801F35FB7175530BF6E5E055A",
		"updated": "2021-09-18T12:55:03.441+00:00"
	},
	{
		"id": 721,
		"tmdb_id": 297761,
		"imdb_id": "tt1386697",
		"title": "Biệt Đội Cảm Tử",
		"english_title": "Suicide Squad",
		"backdrop_path": "/kWKL00UD18HAI4r7lo4Q6qsNmFg.jpg",
		"imdb": 6,
		"release_date": "2016-08-03",
		"runtime": 123,
		"genre_ids": [
			28,
			12,
			80,
			14,
			878
		],
		"hash": "8DCEC817168702F38B707519356FE6E5A8367341",
		"updated": "2021-09-18T13:00:38.649+00:00"
	},
	{
		"id": 706,
		"tmdb_id": 311324,
		"imdb_id": "tt2034800",
		"title": "Tử Chiến Trường Thành",
		"english_title": "The Great Wall",
		"backdrop_path": "/517g7LIW3GFsQqF6nTiuCnsI7iv.jpg",
		"imdb": 5.9,
		"release_date": "2016-12-16",
		"runtime": 103,
		"genre_ids": [
			28,
			12,
			14
		],
		"hash": "2B13F0B560496A63B46CB35707EDFA96A7B687D1",
		"updated": "2021-09-19T00:53:56.058+00:00"
	},
	{
		"id": 708,
		"tmdb_id": 396535,
		"imdb_id": "tt5700672",
		"title": "Chuyến Tàu Sinh Tử",
		"english_title": "Train to Busan",
		"backdrop_path": "/6B9HaZYBG1ugyd5g6at6F3n4wOw.jpg",
		"imdb": 7.6,
		"release_date": "2016-07-20",
		"runtime": 118,
		"genre_ids": [
			28,
			27,
			53
		],
		"hash": "168637B7A074323F92B4D233383DF90E7EB88CE0",
		"updated": "2021-09-19T04:42:14.967+00:00"
	},
	{
		"id": 707,
		"tmdb_id": 259693,
		"imdb_id": "tt3065204",
		"title": "Ám Ảnh Kinh Hoàng 2",
		"english_title": "The Conjuring 2",
		"backdrop_path": "/8yd5GRYbSARUeqvhZYoagYUKp6Z.jpg",
		"imdb": 7.3,
		"release_date": "2016-05-13",
		"runtime": 134,
		"genre_ids": [
			27,
			9648,
			53
		],
		"hash": "B51A833C9C2DF976D1B9C9864AADFD20A3008641",
		"updated": "2021-09-19T04:47:38.403+00:00"
	},
	{
		"id": 704,
		"tmdb_id": 345920,
		"imdb_id": "tt4682786",
		"title": "Vẻ Đẹp Cuộc Sống",
		"english_title": "Collateral Beauty",
		"backdrop_path": "/eJ3OIOMROW2jKSFfh49jOnD6cY2.jpg",
		"imdb": 6.8,
		"release_date": "2016-12-06",
		"runtime": 97,
		"genre_ids": [
			18,
			10749
		],
		"hash": "365534B4A05D523DDC03FA3603832648B4FA3745",
		"updated": "2021-09-19T05:38:21.456+00:00"
	},
	{
		"id": 705,
		"tmdb_id": 397243,
		"imdb_id": "tt3289956",
		"title": "Mổ Xác",
		"english_title": "The Autopsy of Jane Doe",
		"backdrop_path": "/lCtlmlT2n6uvdzSOqXGQ3NaYaRG.jpg",
		"imdb": 6.8,
		"release_date": "2016-12-21",
		"runtime": 86,
		"genre_ids": [
			27,
			9648
		],
		"hash": "571AA20196B833D5BA0BA0D9DC1AD4518E70843F",
		"updated": "2021-09-19T05:39:18.432+00:00"
	},
	{
		"id": 719,
		"tmdb_id": 325133,
		"imdb_id": "tt4438848",
		"title": "Hàng Xóm Ôn Dịch 2",
		"english_title": "Neighbors 2: Sorority Rising",
		"backdrop_path": "/dAjPrOQ43ZFmvF4onMu46vrPYKo.jpg",
		"imdb": 5.7,
		"release_date": "2016-05-04",
		"runtime": 92,
		"genre_ids": [
			35
		],
		"hash": "A96BC6A20D144E9A6352811CC132B33719858F6D",
		"updated": "2021-09-19T06:19:36.291+00:00"
	},
	{
		"id": 722,
		"tmdb_id": 262504,
		"imdb_id": "tt3410834",
		"title": "Dị Biệt 3: Những Kẻ Trung Kiên",
		"english_title": "Allegiant",
		"backdrop_path": "/kOSqUMjQFw6tMJxFGS7doTJ6U09.jpg",
		"imdb": 5.7,
		"release_date": "2016-03-09",
		"runtime": 120,
		"genre_ids": [
			12,
			878,
			28,
			9648
		],
		"hash": "F04C387EC9D743AF92CB58F91CF09704A72839E4",
		"updated": "2021-09-19T05:41:11.797+00:00"
	},
	{
		"id": 703,
		"tmdb_id": 345911,
		"imdb_id": "tt4786282",
		"title": "Ác Mộng Bóng Đêm",
		"english_title": "Lights Out",
		"backdrop_path": "/exA7x4fLgjQGET9lwpEhdRce7j7.jpg",
		"imdb": 6.3,
		"release_date": "2016-07-21",
		"runtime": 81,
		"genre_ids": [
			27,
			53,
			9648,
			18
		],
		"hash": "1CBE3A5D27F112A53C54EDCA8EA674BBB7D07FDE",
		"updated": "2021-09-19T06:21:33.692+00:00"
	},
	{
		"id": 717,
		"tmdb_id": 302699,
		"imdb_id": "tt1489889",
		"title": "Điệp Viên Không Hoàn Hảo",
		"english_title": "Central Intelligence",
		"backdrop_path": "/6CObV5Ww1a9aLjMGUNRmA644Ibk.jpg",
		"imdb": 6.3,
		"release_date": "2016-06-15",
		"runtime": 107,
		"genre_ids": [
			28,
			35,
			9648
		],
		"hash": "BB6A70468DBC07C93B14C6A5F7C8D02FCD79B68F",
		"updated": "2021-09-19T06:21:47.091+00:00"
	},
	{
		"id": 718,
		"tmdb_id": 258489,
		"imdb_id": "tt0918940",
		"title": "Huyền Thoại Người Rừng",
		"english_title": "The Legend of Tarzan",
		"backdrop_path": "/1KGcoiksZwB1dmFVfLq240xP9w2.jpg",
		"imdb": 6.2,
		"release_date": "2016-06-29",
		"runtime": 109,
		"genre_ids": [
			14,
			28,
			12,
			18,
			10749
		],
		"hash": "B36113D00A92367893164D60C64A7F0A1736DC2C",
		"updated": "2021-09-19T06:22:12.295+00:00"
	},
	{
		"id": 711,
		"tmdb_id": 316023,
		"imdb_id": "tt2823054",
		"title": "Mike and Dave Need Wedding Dates",
		"english_title": "Mike and Dave Need Wedding Dates",
		"backdrop_path": "/r7fubpXPjenKYlNRjvCslAAAIOX.jpg",
		"imdb": 6,
		"release_date": "2016-07-07",
		"runtime": 98,
		"genre_ids": [
			35
		],
		"hash": "B576424591E2C451E9D6FB9DD5AB8B41C5E1762B",
		"updated": "2021-09-19T06:23:27.148+00:00"
	},
	{
		"id": 709,
		"tmdb_id": 314095,
		"imdb_id": "tt1212428",
		"title": "Thành Phố Vàng Đã Mất",
		"english_title": "The Lost City of Z",
		"backdrop_path": "/et8HSp4turL6ILh7dABOtTlfh0a.jpg",
		"imdb": 6.6,
		"release_date": "2016-10-15",
		"runtime": 141,
		"genre_ids": [
			12,
			18,
			36
		],
		"hash": "43711F859699E7CD529A1C9FF67B2FFEA1172605",
		"updated": "2021-09-19T06:31:18.246+00:00"
	},
	{
		"id": 712,
		"tmdb_id": 68730,
		"imdb_id": "tt0490215",
		"title": "Silence",
		"english_title": "Silence",
		"backdrop_path": "/lU9rDQJPDxtb3p0ix31BVXyXV71.jpg",
		"imdb": 7.2,
		"release_date": "2016-12-22",
		"runtime": 161,
		"genre_ids": [
			18,
			36
		],
		"hash": "F659B04A8952D749722746AA711F5AB60CE3C044",
		"updated": "2021-09-19T06:36:45.716+00:00"
	},
	{
		"id": 720,
		"tmdb_id": 140300,
		"imdb_id": "tt2267968",
		"title": "Công Phu Gấu Trúc 3",
		"english_title": "Kung Fu Panda 3",
		"backdrop_path": "/AlOBVOjEZh1YvpYojcLCAVZqBkT.jpg",
		"imdb": 7.1,
		"release_date": "2016-01-23",
		"runtime": 95,
		"genre_ids": [
			28,
			12,
			16,
			35,
			10751
		],
		"hash": "943684F47A09192B1FBB9384AC7382DFCBA6286F",
		"updated": "2021-09-19T08:04:44.367+00:00"
	},
	{
		"id": 724,
		"tmdb_id": 258230,
		"imdb_id": "tt3416532",
		"title": "Lời Thỉnh Cầu Quái Vật",
		"english_title": "A Monster Calls",
		"backdrop_path": "/69hvi7xf6VIRRJduSYl1yZIzJn8.jpg",
		"imdb": 7.5,
		"release_date": "2016-01-01",
		"runtime": 108,
		"genre_ids": [
			18,
			14
		],
		"hash": "C4203DEE0DCC6AF1B63AC3B586C70D2FA3C5BF98",
		"updated": "2021-09-19T08:21:15.212+00:00"
	},
	{
		"id": 723,
		"tmdb_id": 378108,
		"imdb_id": "tt4769824",
		"title": "Góc Khuất Của Thế Giới",
		"english_title": "In This Corner of the World",
		"backdrop_path": "/aRF9yXMlQBwO1cYA6jCuwrFk68q.jpg",
		"imdb": 7.8,
		"release_date": "2016-11-12",
		"runtime": 130,
		"genre_ids": [
			18,
			16,
			10749,
			10752,
			36
		],
		"hash": "05BE1A78B3E009E417C8DA5EA80052BB69DBEFDD",
		"updated": "2021-09-19T08:31:11.025+00:00"
	},
	{
		"id": 714,
		"tmdb_id": 337703,
		"imdb_id": "tt3666024",
		"title": "La tortue rouge",
		"english_title": "The Red Turtle",
		"backdrop_path": "/uRjJHCpKciC24WLSJbDOXmPIpF3.jpg",
		"imdb": 7.5,
		"release_date": "2016-06-29",
		"runtime": 80,
		"genre_ids": [
			16,
			18,
			14,
			10751
		],
		"hash": "BB296E4A27E7F56CA651FBE8950384DB0320F74C",
		"updated": "2021-09-19T08:37:49.024+00:00"
	},
	{
		"id": 716,
		"tmdb_id": 293670,
		"imdb_id": "tt5215952",
		"title": "Tiếng Than",
		"english_title": "The Wailing",
		"backdrop_path": "/zeN3dtitwseyUfqHiFJKwvE3aaO.jpg",
		"imdb": 7.5,
		"release_date": "2016-05-12",
		"runtime": 156,
		"genre_ids": [
			27,
			9648
		],
		"hash": "35CA86FB51C7255167586F0E3BF331674125FBA5",
		"updated": "2021-09-19T10:15:13.672+00:00"
	},
	{
		"id": 729,
		"tmdb_id": 329865,
		"imdb_id": "tt2543164",
		"title": "Cuộc Đổ Bộ Bí Ẩn",
		"english_title": "Arrival",
		"backdrop_path": "/A4HLCA9sJfpExgXUi0ul6oAXbsV.jpg",
		"imdb": 7.9,
		"release_date": "2016-11-10",
		"runtime": 116,
		"genre_ids": [
			18,
			878,
			9648
		],
		"hash": "AB41076CAABD1A9EBEF25795F1CFCC6491553881",
		"updated": "2021-09-18T12:22:37.955+00:00"
	},
	{
		"id": 739,
		"tmdb_id": 284052,
		"imdb_id": "tt1211837",
		"title": "Phù Thủy Tối Thượng",
		"english_title": "Doctor Strange",
		"backdrop_path": "/jBV13AskO81pjvjQ9375Hm1hwp9.jpg",
		"imdb": 7.5,
		"release_date": "2016-10-25",
		"runtime": 115,
		"genre_ids": [
			28,
			12,
			14,
			878
		],
		"hash": "7BA0C6BD9B4E52EA2AD137D02394DE7D83B98091",
		"updated": "2021-09-18T12:57:11.437+00:00"
	},
	{
		"id": 744,
		"tmdb_id": 334541,
		"imdb_id": "tt4034228",
		"title": "Bờ Biển Manchester",
		"english_title": "Manchester by the Sea",
		"backdrop_path": "/ep1Ix0Nq04J1yfSZVUzCqt9vXkO.jpg",
		"imdb": 7.8,
		"release_date": "2016-11-18",
		"runtime": 138,
		"genre_ids": [
			18
		],
		"hash": "153CA4BE3D5CAE9119EEC8C48D7B8982012D8DE5",
		"updated": "2021-09-19T01:26:23.924+00:00"
	},
	{
		"id": 740,
		"tmdb_id": 381284,
		"imdb_id": "tt4846340",
		"title": "Bộ Ba Siêu Việt",
		"english_title": "Hidden Figures",
		"backdrop_path": "/rfkIeCaIHhN3K5wjJJqKmfUjYp8.jpg",
		"imdb": 7.8,
		"release_date": "2016-12-10",
		"runtime": 127,
		"genre_ids": [
			18,
			36
		],
		"hash": "DFF534983894844D5189D021BC2014448FF20368",
		"updated": "2021-09-18T13:34:19.264+00:00"
	},
	{
		"id": 737,
		"tmdb_id": 277834,
		"imdb_id": "tt3521164",
		"title": "Hành Trình Của Moana",
		"english_title": "Moana",
		"backdrop_path": "/mtYxEUvcjrwzfzpJTGqziewyGR3.jpg",
		"imdb": 7.6,
		"release_date": "2016-11-23",
		"runtime": 107,
		"genre_ids": [
			12,
			35,
			10751,
			16
		],
		"hash": "635F4FE104291989E433EF7100C33F6106E85007",
		"updated": "2021-09-19T04:42:32.336+00:00"
	},
	{
		"id": 750,
		"tmdb_id": 388399,
		"imdb_id": "tt4572514",
		"title": "Ngày Định Mệnh",
		"english_title": "Patriots Day",
		"backdrop_path": "/9Pu9JXKs93Q3hhnKAvHtfap1hl5.jpg",
		"imdb": 7.4,
		"release_date": "2016-12-12",
		"runtime": 133,
		"genre_ids": [
			28,
			80,
			18,
			36,
			53
		],
		"hash": "EEDC45F57B3181C9B1E5734D57209D600241C31B",
		"updated": "2021-09-19T04:48:44.314+00:00"
	},
	{
		"id": 734,
		"tmdb_id": 302401,
		"imdb_id": "tt3774114",
		"title": "Snowden",
		"english_title": "Snowden",
		"backdrop_path": "/SBtFrseqyWjAZAJZDINZ2iGRV1.jpg",
		"imdb": 7.3,
		"release_date": "2016-09-15",
		"runtime": 134,
		"genre_ids": [
			18,
			36,
			80,
			53
		],
		"hash": "EC341BBC6F228AD669C9B5397DE7904E496A5EB9",
		"updated": "2021-09-19T04:55:03.999+00:00"
	},
	{
		"id": 748,
		"tmdb_id": 291805,
		"imdb_id": "tt3110958",
		"title": "Phi Vụ Thế Kỷ 2",
		"english_title": "Now You See Me 2",
		"backdrop_path": "/aHOjl4AviAmeeYJm6fkcbEvXi4k.jpg",
		"imdb": 6.5,
		"release_date": "2016-06-02",
		"runtime": 129,
		"genre_ids": [
			53,
			28,
			35
		],
		"hash": "EC8D03A62DCB4B0F96F0EEDB05C5CE02A53A3F44",
		"updated": "2021-09-19T05:01:21.635+00:00"
	},
	{
		"id": 738,
		"tmdb_id": 333371,
		"imdb_id": "tt1179933",
		"title": "Căn Hầm",
		"english_title": "10 Cloverfield Lane",
		"backdrop_path": "/ebjZv6XG4M5st4oiVGLcooByvrw.jpg",
		"imdb": 7.2,
		"release_date": "2016-03-10",
		"runtime": 104,
		"genre_ids": [
			53,
			878,
			18,
			27
		],
		"hash": "F6AE395ACC047CA46D3796B564335FDF4F8DB19A",
		"updated": "2021-09-19T05:03:48.218+00:00"
	},
	{
		"id": 733,
		"tmdb_id": 308266,
		"imdb_id": "tt2005151",
		"title": "Cộng Sự Hổ Báo",
		"english_title": "War Dogs",
		"backdrop_path": "/y7BWUaDrOcMaVmDZv4H69z6waUD.jpg",
		"imdb": 7.1,
		"release_date": "2016-08-17",
		"runtime": 114,
		"genre_ids": [
			35,
			80,
			18
		],
		"hash": "503DEB16092C022444E60AA21254314FD286C1DE",
		"updated": "2021-09-19T05:06:32.453+00:00"
	},
	{
		"id": 735,
		"tmdb_id": 343611,
		"imdb_id": "tt3393786",
		"title": "Jack Reacher: Không Quay Đầu",
		"english_title": "Jack Reacher: Never Go Back",
		"backdrop_path": "/cLBWqZHI6gpBlFMaEFoBx8AkHSC.jpg",
		"imdb": 6.1,
		"release_date": "2016-10-19",
		"runtime": 118,
		"genre_ids": [
			28
		],
		"hash": "2866AC87A65D6D1D690D5E0085D8B688623A4238",
		"updated": "2021-09-19T05:20:45.918+00:00"
	},
	{
		"id": 743,
		"tmdb_id": 333484,
		"imdb_id": "tt2404435",
		"title": "Bảy Tay Súng Huyền Thoại",
		"english_title": "The Magnificent Seven",
		"backdrop_path": "/yvGqqMFOeoniindHBgmW6KGUVEc.jpg",
		"imdb": 6.9,
		"release_date": "2016-09-14",
		"runtime": 132,
		"genre_ids": [
			12,
			28,
			37
		],
		"hash": "9B4C9DB1F1ECC3AB3F4E4EF9A7D5D38D791B7F7A",
		"updated": "2021-09-19T05:24:44.448+00:00"
	},
	{
		"id": 727,
		"tmdb_id": 328111,
		"imdb_id": "tt2709768",
		"title": "Đẳng Cấp Thú Cưng",
		"english_title": "The Secret Life of Pets",
		"backdrop_path": "/A9wjsXPYYnffcI8SbxSPMeuWccq.jpg",
		"imdb": 6.5,
		"release_date": "2016-06-18",
		"runtime": 87,
		"genre_ids": [
			12,
			35,
			16,
			10751
		],
		"hash": "660426E302992B361C13B82C6B424C4637A43475",
		"updated": "2021-09-19T05:53:03.185+00:00"
	},
	{
		"id": 728,
		"tmdb_id": 308531,
		"imdb_id": "tt3949660",
		"title": "Ninja Rùa: Đập Tan Bóng Tối",
		"english_title": "Teenage Mutant Ninja Turtles: Out of the Shadows",
		"backdrop_path": "/ow71fDadXi9JruRgg55bDWVMo5P.jpg",
		"imdb": 6,
		"release_date": "2016-06-01",
		"runtime": 112,
		"genre_ids": [
			28,
			12,
			35,
			10751,
			878
		],
		"hash": "8072250A8E94022FD95832277DC5C7D968641706",
		"updated": "2021-09-19T06:23:56.099+00:00"
	},
	{
		"id": 732,
		"tmdb_id": 332210,
		"imdb_id": "tt4624424",
		"title": "Tiểu Đội Cò Bay",
		"english_title": "Storks",
		"backdrop_path": "/u29ByP7guTFZkjUm1CUreHqM48g.jpg",
		"imdb": 6.8,
		"release_date": "2016-09-22",
		"runtime": 87,
		"genre_ids": [
			12,
			16,
			35,
			10751
		],
		"hash": "7BB10CA92AEAA876A9CAFA3BB622C9FD81025ED9",
		"updated": "2021-09-19T06:30:32.693+00:00"
	},
	{
		"id": 736,
		"tmdb_id": 207932,
		"imdb_id": "tt3062096",
		"title": "Hỏa Ngục",
		"english_title": "Inferno",
		"backdrop_path": "/cKQvNs8aFGfcMkGbUlDG22cI5Z6.jpg",
		"imdb": 6.2,
		"release_date": "2016-10-13",
		"runtime": 121,
		"genre_ids": [
			9648,
			53,
			18,
			28
		],
		"hash": "55D6FBB9E49561FB0E793E6E40F9528F5D941BAF",
		"updated": "2021-09-19T06:30:44.949+00:00"
	},
	{
		"id": 742,
		"tmdb_id": 299687,
		"imdb_id": "tt2304933",
		"title": "Đợt Tấn Công thứ 5",
		"english_title": "The 5th Wave",
		"backdrop_path": "/4cVYodkoi1sbdUlru25JX3wBKAy.jpg",
		"imdb": 5.2,
		"release_date": "2016-01-14",
		"runtime": 112,
		"genre_ids": [
			878,
			12,
			28
		],
		"hash": "F6188FC124C0B613C3FB4E2D0A462B6322372A3D",
		"updated": "2021-09-19T06:30:56.188+00:00"
	},
	{
		"id": 745,
		"tmdb_id": 313297,
		"imdb_id": "tt4302938",
		"title": "Kubo và Sứ Mệnh Samurai",
		"english_title": "Kubo and the Two Strings",
		"backdrop_path": "/AfYtIbyattunmLoTBnGCSMCqpGf.jpg",
		"imdb": 7.8,
		"release_date": "2016-08-18",
		"runtime": 102,
		"genre_ids": [
			16,
			12,
			10751
		],
		"hash": "AE886E4EF3AE5B86C65F991136AD0F3CAAEFCF9F",
		"updated": "2021-09-19T06:31:53.341+00:00"
	},
	{
		"id": 749,
		"tmdb_id": 323675,
		"imdb_id": "tt2869728",
		"title": "Bộ Đôi Cảnh Sát 2",
		"english_title": "Ride Along 2",
		"backdrop_path": "/f014KAKV0r8UheDWlnPcxQljgWr.jpg",
		"imdb": 5.9,
		"release_date": "2016-01-14",
		"runtime": 102,
		"genre_ids": [
			28,
			35
		],
		"hash": "4E0B184009813485F9BB3FBB458042DB0F7DD79E",
		"updated": "2021-09-19T07:56:01.904+00:00"
	},
	{
		"id": 746,
		"tmdb_id": 376660,
		"imdb_id": "tt1878870",
		"title": "Khi Em 17",
		"english_title": "The Edge of Seventeen",
		"backdrop_path": "/jG9AswBnMnSKM4z9gIIbZEY141t.jpg",
		"imdb": 7.3,
		"release_date": "2016-11-18",
		"runtime": 105,
		"genre_ids": [
			35,
			18
		],
		"hash": "A3A1299AD388D7DE11E0EC85AEA3B33BC0DD117C",
		"updated": "2021-09-19T08:16:39.081+00:00"
	},
	{
		"id": 747,
		"tmdb_id": 294272,
		"imdb_id": "tt2788732",
		"title": "Pete Và Người Bạn Rồng",
		"english_title": "Pete's Dragon",
		"backdrop_path": "/yadGrEjzIeeIilJHuh7q8Itdio2.jpg",
		"imdb": 6.7,
		"release_date": "2016-08-10",
		"runtime": 103,
		"genre_ids": [
			12,
			10751,
			14
		],
		"hash": "072CFE8223E313007875A999EA9A15299FDF9C6D",
		"updated": "2021-09-19T08:21:02.924+00:00"
	},
	{
		"id": 730,
		"tmdb_id": 223702,
		"imdb_id": "tt1700841",
		"title": "Đại Tiệc Xúc Xích",
		"english_title": "Sausage Party",
		"backdrop_path": "/eoo1hoOg7CwktPN0Bd0qQIgdMUA.jpg",
		"imdb": 6.1,
		"release_date": "2016-07-11",
		"runtime": 89,
		"genre_ids": [
			12,
			16,
			35,
			14
		],
		"hash": "C9161E8083130DBE9488E334D152F5063C279D03",
		"updated": "2021-09-19T08:40:01.68+00:00"
	},
	{
		"id": 763,
		"tmdb_id": 378064,
		"imdb_id": "tt5323662",
		"title": "Dáng Hình Thanh Âm",
		"english_title": "A Silent Voice: The Movie",
		"backdrop_path": "/k7s48prOhOwn00YAsScJsYIGb0J.jpg",
		"imdb": 8.1,
		"release_date": "2016-09-17",
		"runtime": 130,
		"genre_ids": [
			16,
			18,
			10749
		],
		"hash": "209E41EA945303DE23C48B0254481E76BF897F4A",
		"updated": "2021-09-17T12:46:10.75+00:00"
	},
	{
		"id": 752,
		"tmdb_id": 334533,
		"imdb_id": "tt3553976",
		"title": "Thuyền Trưởng Tuyệt Vời",
		"english_title": "Captain Fantastic",
		"backdrop_path": "/l88jr2BmO59vxYwoWHEJ72PludA.jpg",
		"imdb": 7.9,
		"release_date": "2016-07-02",
		"runtime": 118,
		"genre_ids": [
			12,
			18
		],
		"hash": "89DFCCBA39B53DF018C534ED572A4EF7DA96BC1A",
		"updated": "2021-09-18T12:23:06.245+00:00"
	},
	{
		"id": 770,
		"tmdb_id": 246655,
		"imdb_id": "tt3385516",
		"title": "Dị Nhân 7: Cuộc Chiến Chống Apocalypse",
		"english_title": "X-Men: Apocalypse",
		"backdrop_path": "/iCrF2EyzEGy32E1qJ7QK6TSjIdA.jpg",
		"imdb": 6.9,
		"release_date": "2016-05-18",
		"runtime": 144,
		"genre_ids": [
			28,
			12,
			878,
			14
		],
		"hash": "D411DA76E36A00C6EF9101D1642AF6A2E5EF9883",
		"updated": "2021-09-18T13:37:25.771+00:00"
	},
	{
		"id": 757,
		"tmdb_id": 121856,
		"imdb_id": "tt2094766",
		"title": "Sát Thủ Bóng Đêm",
		"english_title": "Assassin's Creed",
		"backdrop_path": "/jbUrrsk3NbvqDOcvng1HolawhuX.jpg",
		"imdb": 5.7,
		"release_date": "2016-12-21",
		"runtime": 115,
		"genre_ids": [
			28,
			12,
			878
		],
		"hash": "FF6705C7A7CD984E53EBC301051FBA6AE4BB3264",
		"updated": "2021-09-19T00:49:42.258+00:00"
	},
	{
		"id": 754,
		"tmdb_id": 188927,
		"imdb_id": "tt2660888",
		"title": "Du Hành Giữa Các Vì Sao: Không Giới Hạn",
		"english_title": "Star Trek Beyond",
		"backdrop_path": "/2REHZDBzRmLL6LzcdUPwgLj2Ttp.jpg",
		"imdb": 7.1,
		"release_date": "2016-07-07",
		"runtime": 122,
		"genre_ids": [
			28,
			12,
			878
		],
		"hash": "2E0C4217A839B0BD573CFD27BE00BAF94E92F56B",
		"updated": "2021-09-19T00:54:54.79+00:00"
	},
	{
		"id": 765,
		"tmdb_id": 330459,
		"imdb_id": "tt3748528",
		"title": "Chiến Tranh Giữa Các Vì Sao Ngoại Truyện: Rogue One",
		"english_title": "Rogue One: A Star Wars Story",
		"backdrop_path": "/8IEXw6zCFIuL0c2knzI1H51ulc7.jpg",
		"imdb": 7.8,
		"release_date": "2016-12-14",
		"runtime": 133,
		"genre_ids": [
			28,
			12,
			878
		],
		"hash": "FC9B4318E4D45FF9B52E60D28177D58BC573CC0D",
		"updated": "2021-09-19T01:22:41.453+00:00"
	},
	{
		"id": 756,
		"tmdb_id": 313369,
		"imdb_id": "tt3783958",
		"title": "Những Kẻ Khờ Mộng Mơ",
		"english_title": "La La Land",
		"backdrop_path": "/pnFOEnr0T1oqdvfvLMRF03gS95l.jpg",
		"imdb": 8,
		"release_date": "2016-11-29",
		"runtime": 129,
		"genre_ids": [
			35,
			18,
			10749,
			10402
		],
		"hash": "BA2409BC42C5B2D8E7AE7C8BB7A10FD0502E8A35",
		"updated": "2021-12-05T06:35:36.378+00:00"
	},
	{
		"id": 753,
		"tmdb_id": 363676,
		"imdb_id": "tt3263904",
		"title": "Cơ Trưởng Sully",
		"english_title": "Sully",
		"backdrop_path": "/bF35jlD2SJCEiXKMTHNsDufXJny.jpg",
		"imdb": 7.4,
		"release_date": "2016-09-07",
		"runtime": 96,
		"genre_ids": [
			18,
			36
		],
		"hash": "1581F09B4A26C3615F72B3B932627F5B8D6DD9F0",
		"updated": "2021-09-19T04:48:32.995+00:00"
	},
	{
		"id": 762,
		"tmdb_id": 376867,
		"imdb_id": "tt4975722",
		"title": "Ánh Trăng",
		"english_title": "Moonlight",
		"backdrop_path": "/9yea5rGFPmLyuVUCjvDCdYvSn0Q.jpg",
		"imdb": 7.4,
		"release_date": "2016-10-21",
		"runtime": 111,
		"genre_ids": [
			18
		],
		"hash": "CBE24E29CD49AB2923DC927B467AA594B73A119A",
		"updated": "2021-09-19T04:52:53.537+00:00"
	},
	{
		"id": 772,
		"tmdb_id": 259316,
		"imdb_id": "tt3183660",
		"title": "Sinh Vật Huyền Bí và Nơi Tìm Ra Chúng",
		"english_title": "Fantastic Beasts and Where to Find Them",
		"backdrop_path": "/3SQFrpsF3zl8ksgIvqZAf2MU1lc.jpg",
		"imdb": 7.3,
		"release_date": "2016-11-16",
		"runtime": 132,
		"genre_ids": [
			12,
			14
		],
		"hash": "945A012C70375ED7C08296E3215A506E221B2BEB",
		"updated": "2021-09-19T04:53:32.536+00:00"
	},
	{
		"id": 766,
		"tmdb_id": 278927,
		"imdb_id": "tt3040964",
		"title": "Cậu Bé Rừng Xanh",
		"english_title": "The Jungle Book",
		"backdrop_path": "/jhzGDjui2btjERdDavTKnoLnbUu.jpg",
		"imdb": 7.4,
		"release_date": "2016-04-07",
		"runtime": 106,
		"genre_ids": [
			12,
			18,
			10751,
			14
		],
		"hash": "7254BDB5EFD440273F2555A60D8D5A722AC5EDEA",
		"updated": "2021-10-15T01:47:58+00:00"
	},
	{
		"id": 773,
		"tmdb_id": 310307,
		"imdb_id": "tt4276820",
		"title": "Người Sáng Lập",
		"english_title": "The Founder",
		"backdrop_path": "/4Yfzr8aaiZgnnN4DXytME9BgdTI.jpg",
		"imdb": 7.2,
		"release_date": "2016-09-13",
		"runtime": 115,
		"genre_ids": [
			18,
			36
		],
		"hash": "51818AF477A5A40398BCA294CDEFF6615EF21E21",
		"updated": "2021-09-19T05:03:33.921+00:00"
	},
	{
		"id": 751,
		"tmdb_id": 274870,
		"imdb_id": "tt1355644",
		"title": "Người Du Hành",
		"english_title": "Passengers",
		"backdrop_path": "/yaBCRF5hIROoazolRfZiCqBdiv7.jpg",
		"imdb": 7,
		"release_date": "2016-12-21",
		"runtime": 116,
		"genre_ids": [
			18,
			10749,
			878
		],
		"hash": "FFCDCB5312F25DB37034552849843981BD401C9D",
		"updated": "2021-09-19T05:24:05.199+00:00"
	},
	{
		"id": 764,
		"tmdb_id": 340666,
		"imdb_id": "tt4550098",
		"title": "Kẻ Săn Đêm",
		"english_title": "Nocturnal Animals",
		"backdrop_path": "/tcfw4UBEpVLrXFzxy3Sv59Ut3WE.jpg",
		"imdb": 7.5,
		"release_date": "2016-11-04",
		"runtime": 116,
		"genre_ids": [
			18,
			53
		],
		"hash": "947ED7E09F9C5BE3FD4EC7A3352D13FB3ECFE571",
		"updated": "2021-11-28T10:17:12.36+00:00"
	},
	{
		"id": 759,
		"tmdb_id": 356305,
		"imdb_id": "tt4501244",
		"title": "Bố Vợ Đối Đầu Chàng Rể",
		"english_title": "Why Him?",
		"backdrop_path": "/uM57nCmQcW51qFlm0qg2lBZ3G5x.jpg",
		"imdb": 6.2,
		"release_date": "2016-12-22",
		"runtime": 111,
		"genre_ids": [
			35
		],
		"hash": "1248332C0F3486EA3C1B38B8ADC7EDD5FB88C590",
		"updated": "2021-09-19T06:21:59.765+00:00"
	},
	{
		"id": 760,
		"tmdb_id": 136799,
		"imdb_id": "tt1679335",
		"title": "Quỷ Lùn Tinh Nghịch",
		"english_title": "Trolls",
		"backdrop_path": "/p2b6tWaaCO5QVaRGgs78V4IImg9.jpg",
		"imdb": 6.5,
		"release_date": "2016-10-13",
		"runtime": 92,
		"genre_ids": [
			10751,
			16,
			14,
			12,
			35,
			10402
		],
		"hash": "0E8E845BF545BFCE6A53C616483815453B26B89D",
		"updated": "2021-09-19T06:36:56.94+00:00"
	},
	{
		"id": 774,
		"tmdb_id": 153518,
		"imdb_id": "tt1985949",
		"title": "Những Chú Chim Giận Dữ",
		"english_title": "The Angry Birds Movie",
		"backdrop_path": "/u5hThFQeYxF1nacuO3QiRjaXICV.jpg",
		"imdb": 6.3,
		"release_date": "2016-05-11",
		"runtime": 97,
		"genre_ids": [
			16,
			12,
			35
		],
		"hash": "1C55DDFE37A9F247C4D72CFCDC326F0B196A9A06",
		"updated": "2021-09-19T08:00:42.371+00:00"
	},
	{
		"id": 768,
		"tmdb_id": 328387,
		"imdb_id": "tt3531824",
		"title": "Trò Chơi Đoạt Mạng",
		"english_title": "Nerve",
		"backdrop_path": "/8Y5hpnCkSrJmOYWGFoQNpvbHyvA.jpg",
		"imdb": 6.5,
		"release_date": "2016-06-27",
		"runtime": 96,
		"genre_ids": [
			9648,
			12,
			80
		],
		"hash": "F332B22DF11F93AF63E3228B5BE5D8A6C385246C",
		"updated": "2021-10-15T11:09:58.33+00:00"
	},
	{
		"id": 771,
		"tmdb_id": 396263,
		"imdb_id": "tt5923962",
		"title": "Sinh Tử Luân Hồi: Đại chiến Osaka",
		"english_title": "Gantz:O",
		"backdrop_path": "/wyDNiOVWwviCFzWITuxs9CnjmAW.jpg",
		"imdb": 7.1,
		"release_date": "2016-10-14",
		"runtime": 95,
		"genre_ids": [
			878,
			28,
			16
		],
		"hash": "21CB1837023F1F6ACABEDA2D2398FD3A6CFB1FC9",
		"updated": "2021-09-19T08:04:13.898+00:00"
	},
	{
		"id": 761,
		"tmdb_id": 347031,
		"imdb_id": "tt4034354",
		"title": "Xác Chết Biết Nói",
		"english_title": "Swiss Army Man",
		"backdrop_path": "/1aso6Akg39t0rsaTGZ0CIqHLEUG.jpg",
		"imdb": 7,
		"release_date": "2016-06-24",
		"runtime": 97,
		"genre_ids": [
			35,
			18,
			10749,
			14,
			12
		],
		"hash": "77B2E67817ED9B23540797E9057A87B5C614EC96",
		"updated": "2021-09-19T08:25:55.588+00:00"
	},
	{
		"id": 758,
		"tmdb_id": 369885,
		"imdb_id": "tt3640424",
		"title": "Liên Minh Sát Thủ",
		"english_title": "Allied",
		"backdrop_path": "/7jUyLJngCmvniTYE8EW7voXlcEp.jpg",
		"imdb": 7.1,
		"release_date": "2016-11-17",
		"runtime": 124,
		"genre_ids": [
			28,
			18,
			10752,
			10749,
			53
		],
		"hash": "C4205F4B2B707CD3C8CFF6F1B2DAD41A0FCF0E3D",
		"updated": "2021-09-19T08:05:04.652+00:00"
	},
	{
		"id": 769,
		"tmdb_id": 309886,
		"imdb_id": "tt3647498",
		"title": "Bố Già Sát Thủ",
		"english_title": "Blood Father",
		"backdrop_path": "/4Ww7TbcJigP90dpcazJtOJcsULk.jpg",
		"imdb": 6.4,
		"release_date": "2016-08-11",
		"runtime": 88,
		"genre_ids": [
			28,
			53,
			18
		],
		"hash": "B39AE3451ABAA17ED2731176F8A7059E5C33113C",
		"updated": "2021-09-19T10:14:08.374+00:00"
	},
	{
		"id": 767,
		"tmdb_id": 296096,
		"imdb_id": "tt2674426",
		"title": "Trước Ngày Em Đến",
		"english_title": "Me Before You",
		"backdrop_path": "/p75wRaBhgXc4dYAzPAsZ6B5ZWaY.jpg",
		"imdb": 7.4,
		"release_date": "2016-06-01",
		"runtime": 110,
		"genre_ids": [
			18,
			10749
		],
		"hash": "CDCD3EBF324ECED39E6B580A69C992111EB97E2C",
		"updated": "2021-09-20T03:25:26.8+00:00"
	},
	{
		"id": 776,
		"tmdb_id": 335797,
		"imdb_id": "tt3470600",
		"title": "Đấu Trường Âm Nhạc",
		"english_title": "Sing",
		"backdrop_path": "/uTMpa7aDKmsCzAdcAnErxKBGYod.jpg",
		"imdb": 7.1,
		"release_date": "2016-11-23",
		"runtime": 108,
		"genre_ids": [
			10751,
			16,
			10402,
			35,
			18
		],
		"hash": "EF3B95AEF1C94FC8E98825386C3B12560FE21CFF",
		"updated": "2022-01-07T16:42:11.363+00:00"
	},
	{
		"id": 792,
		"tmdb_id": 437068,
		"imdb_id": "tt6878038",
		"title": "Tài Xế Taxi",
		"english_title": "A Taxi Driver",
		"backdrop_path": "/dbXjTu5J00kCggPnQlDpVZmDBil.jpg",
		"imdb": 7.9,
		"release_date": "2017-08-02",
		"runtime": 138,
		"genre_ids": [
			18,
			36,
			28
		],
		"hash": "127B09127BC7756B4472B317082D79A2F73EF666",
		"updated": "2021-09-18T12:23:39.617+00:00"
	},
	{
		"id": 783,
		"tmdb_id": 395834,
		"imdb_id": "tt5362988",
		"title": "Vùng Đất Tử Thần",
		"english_title": "Wind River",
		"backdrop_path": "/gfFMhlzvTNOVlnEE5xIq0cYE2rC.jpg",
		"imdb": 7.7,
		"release_date": "2017-08-03",
		"runtime": 107,
		"genre_ids": [
			80,
			18,
			9648,
			53
		],
		"hash": "F28F254E61F2D98D40AD1578C6B5318931647304",
		"updated": "2021-09-18T12:43:37.996+00:00"
	},
	{
		"id": 798,
		"tmdb_id": 343668,
		"imdb_id": "tt4649466",
		"title": "Mật Vụ Kingsman 2: Tổ Chức Hoàng Kim",
		"english_title": "Kingsman: The Golden Circle",
		"backdrop_path": "/fNXu0ZEFaO6LNgL7sjZn2CKclq9.jpg",
		"imdb": 6.7,
		"release_date": "2017-09-20",
		"runtime": 141,
		"genre_ids": [
			28,
			12,
			35,
			80,
			53
		],
		"hash": "81A07AB3CCE77AD1161ED629E5A1E99C708D2BE5",
		"updated": "2021-09-18T12:44:14.714+00:00"
	},
	{
		"id": 794,
		"tmdb_id": 391713,
		"imdb_id": "tt4925292",
		"title": "Tuổi Nổi Loạn",
		"english_title": "Lady Bird",
		"backdrop_path": "/6Pv9WEk0k3PXAtW7IWfQpbA2ezx.jpg",
		"imdb": 7.4,
		"release_date": "2017-09-08",
		"runtime": 94,
		"genre_ids": [
			18,
			35
		],
		"hash": "D502A2BB17F341DD3ACE39C6767B0A5F1CAA806D",
		"updated": "2021-09-18T12:48:38.784+00:00"
	},
	{
		"id": 793,
		"tmdb_id": 346364,
		"imdb_id": "tt1396484",
		"title": "Gã Hề Ma Quái 1",
		"english_title": "It",
		"backdrop_path": "/9IHPpCSAmP4KO3gCq7GpgFjVKcy.jpg",
		"imdb": 7.3,
		"release_date": "2017-09-06",
		"runtime": 135,
		"genre_ids": [
			27
		],
		"hash": "AD1BA686C1B2028858B0AEFD835E995D76707D44",
		"updated": "2021-09-18T13:08:10.495+00:00"
	},
	{
		"id": 787,
		"tmdb_id": 337339,
		"imdb_id": "tt4630562",
		"title": "Quá Nhanh Quá Nguy Hiểm 8",
		"english_title": "The Fate of the Furious",
		"backdrop_path": "/pEL81RWzS3LaybTCf7vp2KvVLhw.jpg",
		"imdb": 6.7,
		"release_date": "2017-04-12",
		"runtime": 136,
		"genre_ids": [
			28,
			80,
			53
		],
		"hash": "11334535AFDBF65619FB1A31E79EED2B9EAAE287",
		"updated": "2021-09-18T13:18:23.546+00:00"
	},
	{
		"id": 778,
		"tmdb_id": 338766,
		"imdb_id": "tt2582782",
		"title": "Không Lùi Bước",
		"english_title": "Hell or High Water",
		"backdrop_path": "/r4GO2GFdpuG9qxIu9Na88DkktIt.jpg",
		"imdb": 7.6,
		"release_date": "2016-08-12",
		"runtime": 102,
		"genre_ids": [
			37,
			80
		],
		"hash": "77EEE3740BCF77A5507C9344E276E792289D7BA8",
		"updated": "2021-09-19T04:42:47.172+00:00"
	},
	{
		"id": 780,
		"tmdb_id": 353616,
		"imdb_id": "tt4765284",
		"title": "Sự Nổi Loạn Hoàn Hảo 3",
		"english_title": "Pitch Perfect 3",
		"backdrop_path": "/9lpg3QF1EXjMVgRGUdWrqZEUIzS.jpg",
		"imdb": 5.8,
		"release_date": "2017-12-20",
		"runtime": 93,
		"genre_ids": [
			35,
			10402
		],
		"hash": "64DE93197BEC1C41231E32FEEA16C482D24A406C",
		"updated": "2021-09-19T05:06:44.697+00:00"
	},
	{
		"id": 791,
		"tmdb_id": 335988,
		"imdb_id": "tt3371366",
		"title": "Robot Đại Chiến 5: Kỵ Sĩ Cuối Cùng",
		"english_title": "Transformers: The Last Knight",
		"backdrop_path": "/54wjId66JMYuD21oQrlYNAbKKip.jpg",
		"imdb": 5.2,
		"release_date": "2017-06-16",
		"runtime": 154,
		"genre_ids": [
			28,
			12,
			878,
			14
		],
		"hash": "76BCA8612B2623149792DFC51ECDB8B0B0C95B73",
		"updated": "2021-09-19T05:12:37.172+00:00"
	},
	{
		"id": 775,
		"tmdb_id": 68735,
		"imdb_id": "tt0803096",
		"title": "Warcraft: Đại Chiến Hai Thế Giới",
		"english_title": "Warcraft",
		"backdrop_path": "/qM5DyvyemRL7BmhU5S7NJvGzoT8.jpg",
		"imdb": 6.8,
		"release_date": "2016-05-25",
		"runtime": 123,
		"genre_ids": [
			28,
			12,
			14
		],
		"hash": "1B5AD195A79DFC49DA7876BDBA4D22274E1BCAB7",
		"updated": "2021-09-19T05:36:54.786+00:00"
	},
	{
		"id": 788,
		"tmdb_id": 397722,
		"imdb_id": "tt5649108",
		"title": "Kế Hoạch Giết Dượng",
		"english_title": "Thoroughbreds",
		"backdrop_path": "/7DXhRwpBrNQqK5GqU4BISZiMhfo.jpg",
		"imdb": 6.7,
		"release_date": "2017-01-21",
		"runtime": 92,
		"genre_ids": [
			18,
			53
		],
		"hash": "CBA56153717D9017F5D1D04689499A5DFE2AF4C7",
		"updated": "2021-09-19T05:41:27.439+00:00"
	},
	{
		"id": 786,
		"tmdb_id": 353070,
		"imdb_id": "tt2568862",
		"title": "Già Gân Trả Đũa",
		"english_title": "Going in Style",
		"backdrop_path": "/tMdhYyzqrK6fG8COdsTCj5j9D6V.jpg",
		"imdb": 6.6,
		"release_date": "2017-04-06",
		"runtime": 96,
		"genre_ids": [
			80,
			35
		],
		"hash": "BC4CACAC280742496EF899E0DC771E2E1FA26700",
		"updated": "2021-09-19T05:42:48.631+00:00"
	},
	{
		"id": 785,
		"tmdb_id": 305470,
		"imdb_id": "tt3717490",
		"title": "Năm Anh Em Siêu Nhân",
		"english_title": "Power Rangers",
		"backdrop_path": "/qXlLWNH1CWVIQY7IAnMExBjLZ8I.jpg",
		"imdb": 5.9,
		"release_date": "2017-03-23",
		"runtime": 124,
		"genre_ids": [
			28,
			12,
			878
		],
		"hash": "77DCEB861E1876F260C91D3F2F5D89AF8357E78F",
		"updated": "2021-09-19T06:24:21.843+00:00"
	},
	{
		"id": 784,
		"tmdb_id": 282035,
		"imdb_id": "tt2345759",
		"title": "Xác Ướp",
		"english_title": "The Mummy",
		"backdrop_path": "/voz3tY5a0COnEZoRzoiTJ1OjTLe.jpg",
		"imdb": 5.4,
		"release_date": "2017-06-06",
		"runtime": 110,
		"genre_ids": [
			14,
			53,
			28,
			12,
			27
		],
		"hash": "AB72D891EA2A17DAD9873F7D48277FD19265252E",
		"updated": "2021-09-19T06:24:41.92+00:00"
	},
	{
		"id": 797,
		"tmdb_id": 346648,
		"imdb_id": "tt4468740",
		"title": "Gấu Paddington 2",
		"english_title": "Paddington 2",
		"backdrop_path": "/FNfVMTpCEBlKBUbo63FrFyRxr0.jpg",
		"imdb": 7.8,
		"release_date": "2017-11-09",
		"runtime": 104,
		"genre_ids": [
			12,
			35,
			10751
		],
		"hash": "AA723562227CF6167AC2AD612F42F047FB9BD973",
		"updated": "2021-09-19T06:27:25.232+00:00"
	},
	{
		"id": 790,
		"tmdb_id": 419479,
		"imdb_id": "tt4225622",
		"title": "Cô Giữ Trẻ Sát Nhân",
		"english_title": "The Babysitter",
		"backdrop_path": "/f972T0Zhh6piKtXMEyYG3fzzds1.jpg",
		"imdb": 6.3,
		"release_date": "2017-10-13",
		"runtime": 85,
		"genre_ids": [
			27,
			35
		],
		"hash": "D5F8012DF6A55110CC4AF30D6B0D591A21544A0B",
		"updated": "2021-09-19T06:28:30.256+00:00"
	},
	{
		"id": 789,
		"tmdb_id": 297762,
		"imdb_id": "tt0451279",
		"title": "Wonder Woman: Nữ Thần Chiến Binh",
		"english_title": "Wonder Woman",
		"backdrop_path": "/hYA8GBCCVdtV2oUvQxGfbKiFofs.jpg",
		"imdb": 7.4,
		"release_date": "2017-05-30",
		"runtime": 141,
		"genre_ids": [
			28,
			12,
			14
		],
		"hash": "995F4ACCFB50711D0F8B1DE8B098CAD1EA9ADE47",
		"updated": "2021-10-07T02:06:06.896+00:00"
	},
	{
		"id": 782,
		"tmdb_id": 433808,
		"imdb_id": "tt5638642",
		"title": "Nghi Lễ Tế Thần",
		"english_title": "The Ritual",
		"backdrop_path": "/mTucZH3tjhmo14rEogE6gratEbO.jpg",
		"imdb": 6.3,
		"release_date": "2017-10-11",
		"runtime": 94,
		"genre_ids": [
			27,
			53
		],
		"hash": "79C0B3D18068229346A9D573F69E5A2A8ACC19FA",
		"updated": "2021-09-19T06:29:37.786+00:00"
	},
	{
		"id": 781,
		"tmdb_id": 290512,
		"imdb_id": "tt2226597",
		"title": "Ngọn Núi Giữa Hai Ta",
		"english_title": "The Mountain Between Us",
		"backdrop_path": "/ewycanB26wIMZw8zSGunw27D4pa.jpg",
		"imdb": 6.4,
		"release_date": "2017-10-05",
		"runtime": 109,
		"genre_ids": [
			10749,
			12,
			18
		],
		"hash": "E550FEB89287EF00D45F8257970CF9A0AA9EA7D7",
		"updated": "2021-09-19T06:36:19.796+00:00"
	},
	{
		"id": 795,
		"tmdb_id": 449927,
		"imdb_id": "tt6015328",
		"title": "Trùm Hương Cảng",
		"english_title": "Chasing the Dragon",
		"backdrop_path": "/2UD3CbzvZO46Mo99vaOweHp5P8g.jpg",
		"imdb": 6.7,
		"release_date": "2017-09-28",
		"runtime": 128,
		"genre_ids": [
			28,
			80,
			36
		],
		"hash": "49A66C51024C82EE08D40047794811736D00AD4C",
		"updated": "2021-09-19T08:36:08.41+00:00"
	},
	{
		"id": 796,
		"tmdb_id": 408220,
		"imdb_id": "tt2494376",
		"title": "Justice League Dark",
		"english_title": "Justice League Dark",
		"backdrop_path": "/a7gDe2aEA9KeFT980FVYJcwoohL.jpg",
		"imdb": 7.1,
		"release_date": "2017-01-24",
		"runtime": 75,
		"genre_ids": [
			28,
			16,
			14,
			878,
			53
		],
		"hash": "0EEB7D86EE9544BCCAB15D18DF65144BB4D4FA20",
		"updated": "2021-09-20T02:14:45.337+00:00"
	},
	{
		"id": 815,
		"tmdb_id": 263115,
		"imdb_id": "tt3315342",
		"title": "Logan: Trận Chiến Cuối Cùng",
		"english_title": "Logan",
		"backdrop_path": "/9P8rpxHIjFSRuJZA4U93QDg58Sh.jpg",
		"imdb": 8.1,
		"release_date": "2017-02-28",
		"runtime": 137,
		"genre_ids": [
			28,
			18,
			878
		],
		"hash": "1AB2CE4D62A9A46E91A3A3097BCEBD6248978D40",
		"updated": "2021-09-17T12:46:44.302+00:00"
	},
	{
		"id": 811,
		"tmdb_id": 283995,
		"imdb_id": "tt3896198",
		"title": "Vệ Binh Giải Ngân Hà 2",
		"english_title": "Guardians of the Galaxy Vol. 2",
		"backdrop_path": "/zFJk6l2OGwLFBUMjCM5hY4CruVH.jpg",
		"imdb": 7.6,
		"release_date": "2017-04-19",
		"runtime": 137,
		"genre_ids": [
			28,
			12,
			35,
			878
		],
		"hash": "4F3E2C6A942C2C270CB7E9D5498AC9AE96F3E31E",
		"updated": "2021-09-18T12:38:58.662+00:00"
	},
	{
		"id": 801,
		"tmdb_id": 181808,
		"imdb_id": "tt2527336",
		"title": "Chiến Tranh Giữa Các Vì Sao 8: Jedi Cuối Cùng",
		"english_title": "Star Wars: The Last Jedi",
		"backdrop_path": "/siAr9GFGABdCqakvBoM11N8Sbdg.jpg",
		"imdb": 7,
		"release_date": "2017-12-13",
		"runtime": 152,
		"genre_ids": [
			878,
			28,
			12
		],
		"hash": "25476766BDB2D52119E1F40CF4801C05F9F3CD06",
		"updated": "2021-09-18T12:41:46.653+00:00"
	},
	{
		"id": 817,
		"tmdb_id": 166426,
		"imdb_id": "tt1790809",
		"title": "Cướp Biển Vùng Caribbean 5: Salazar Báo Thù",
		"english_title": "Pirates of the Caribbean: Dead Men Tell No Tales",
		"backdrop_path": "/sIi1wS0hHSs21zwIDeF7HJ9wwj7.jpg",
		"imdb": 6.5,
		"release_date": "2017-05-23",
		"runtime": 129,
		"genre_ids": [
			12,
			28,
			14,
			35
		],
		"hash": "9549456AB002511EFF145D2DE73A1F1B6AE6115B",
		"updated": "2021-09-18T12:42:25.607+00:00"
	},
	{
		"id": 822,
		"tmdb_id": 446354,
		"imdb_id": "tt6294822",
		"title": "Bí Mật Sau Bài Báo",
		"english_title": "The Post",
		"backdrop_path": "/hQS5lCOeTHWm35chfgqPXmRHyNI.jpg",
		"imdb": 7.2,
		"release_date": "2017-01-19",
		"runtime": 116,
		"genre_ids": [
			18,
			36
		],
		"hash": "487813A85F537CFADB5E0DEC2608F8F7EE8B0C2D",
		"updated": "2022-01-14T11:17:51.246+00:00"
	},
	{
		"id": 800,
		"tmdb_id": 281338,
		"imdb_id": "tt3450958",
		"title": "Đại Chiến Hành Tinh Khỉ",
		"english_title": "War for the Planet of the Apes",
		"backdrop_path": "/1qCHDjaIZ4AfpfiFxF02LeA241d.jpg",
		"imdb": 7.4,
		"release_date": "2017-07-11",
		"runtime": 140,
		"genre_ids": [
			18,
			878,
			10752
		],
		"hash": "AAE6A38853798DA45DBCE6045D457D8A75E489F0",
		"updated": "2021-09-18T12:46:36.716+00:00"
	},
	{
		"id": 804,
		"tmdb_id": 337170,
		"imdb_id": "tt3532216",
		"title": "Lách Luật Kiểu Mỹ",
		"english_title": "American Made",
		"backdrop_path": "/z5dkdQQFeZwjj8Bp6vW75sEc22G.jpg",
		"imdb": 7.2,
		"release_date": "2017-08-08",
		"runtime": 115,
		"genre_ids": [
			28,
			80,
			35
		],
		"hash": "791C6A8E1627CD275F3E48C3FFFB9068F7E5274F",
		"updated": "2021-09-19T05:02:29.913+00:00"
	},
	{
		"id": 809,
		"tmdb_id": 379149,
		"imdb_id": "tt1615160",
		"title": "Kẻ Ngoại Tộc",
		"english_title": "The Foreigner",
		"backdrop_path": "/eu2ntJw9fFZaw9sKfsz3Ig2OqcL.jpg",
		"imdb": 7,
		"release_date": "2017-09-28",
		"runtime": 113,
		"genre_ids": [
			28,
			53
		],
		"hash": "1483866234EC0CE88E25640C4BEA335B1F5C253B",
		"updated": "2021-09-19T05:13:06.042+00:00"
	},
	{
		"id": 820,
		"tmdb_id": 390043,
		"imdb_id": "tt1959563",
		"title": "Vệ Sĩ Sát Thủ",
		"english_title": "The Hitman's Bodyguard",
		"backdrop_path": "/iz4ehTOmEcb1iecAn48DcMcRRlD.jpg",
		"imdb": 6.9,
		"release_date": "2017-08-16",
		"runtime": 118,
		"genre_ids": [
			53,
			35,
			80,
			28
		],
		"hash": "79C0CB48CD77946FC20AEA3B9F80DE605FD7A06C",
		"updated": "2021-09-19T05:25:00.368+00:00"
	},
	{
		"id": 819,
		"tmdb_id": 398181,
		"imdb_id": "tt5742374",
		"title": "Giải Cứu",
		"english_title": "You Were Never Really Here",
		"backdrop_path": "/AqnIOHIWoIXQTyIiGcDl2HospBN.jpg",
		"imdb": 6.8,
		"release_date": "2017-12-12",
		"runtime": 89,
		"genre_ids": [
			53,
			18
		],
		"hash": "3589848DB66277283ADB2031A7CC810B780FE424",
		"updated": "2021-09-19T05:36:40.014+00:00"
	},
	{
		"id": 807,
		"tmdb_id": 406990,
		"imdb_id": "tt1536537",
		"title": "Chuyện Gì Xảy Ra Với Thứ Hai",
		"english_title": "What Happened to Monday",
		"backdrop_path": "/ijyZOANn7cbgXIoQeJknrt3gJmF.jpg",
		"imdb": 6.9,
		"release_date": "2017-08-18",
		"runtime": 123,
		"genre_ids": [
			878,
			53,
			18,
			9648
		],
		"hash": "D53E940FF6C92105E9E734FBD4175B1C075E4432",
		"updated": "2021-09-19T05:35:55.213+00:00"
	},
	{
		"id": 803,
		"tmdb_id": 295693,
		"imdb_id": "tt3874544",
		"title": "Nhóc Trùm",
		"english_title": "The Boss Baby",
		"backdrop_path": "/mg5JmT3dC9FFFUvsGost6KkRSL5.jpg",
		"imdb": 6.3,
		"release_date": "2017-03-23",
		"runtime": 97,
		"genre_ids": [
			16,
			35,
			10751
		],
		"hash": "3997AC6DB4C767B9CC3DE84D25E3E912CF24612E",
		"updated": "2021-09-19T06:21:05.76+00:00"
	},
	{
		"id": 818,
		"tmdb_id": 478187,
		"imdb_id": "tt7243686",
		"title": "Vòng Xoáy Lừa Đảo",
		"english_title": "The Swindlers",
		"backdrop_path": "/6LIyz3BJe8fyHpwxbl2XE7DS6bp.jpg",
		"imdb": 6.6,
		"release_date": "2017-11-22",
		"runtime": 117,
		"genre_ids": [
			80,
			28
		],
		"hash": "8A6E8C20B2B4265BBDC9FE76664812BBDE67E4F4",
		"updated": "2021-09-19T06:24:58.752+00:00"
	},
	{
		"id": 814,
		"tmdb_id": 400106,
		"imdb_id": "tt5519340",
		"title": "Chiếc Đũa Quyền Năng",
		"english_title": "Bright",
		"backdrop_path": "/yqlVVYZek754Yf8p4smdBF1piDN.jpg",
		"imdb": 6.3,
		"release_date": "2017-12-22",
		"runtime": 117,
		"genre_ids": [
			28,
			14,
			53
		],
		"hash": "6DCE82DC63E8911B7458666CE3AB491418684649",
		"updated": "2021-09-19T06:26:57.49+00:00"
	},
	{
		"id": 802,
		"tmdb_id": 387426,
		"imdb_id": "tt3967856",
		"title": "Siêu Lợn Okja",
		"english_title": "Okja",
		"backdrop_path": "/y5GzQXUGHY9y90Qdkp7599vJjeL.jpg",
		"imdb": 7.3,
		"release_date": "2017-06-28",
		"runtime": 122,
		"genre_ids": [
			12,
			18,
			878,
			28
		],
		"hash": "DEBC500B398B810CA117BA4E0033CEAC1A5A41ED",
		"updated": "2021-09-19T06:28:05.061+00:00"
	},
	{
		"id": 813,
		"tmdb_id": 435601,
		"imdb_id": "tt6413410",
		"title": "Theo Dấu Sát Nhân",
		"english_title": "V.I.P.",
		"backdrop_path": "/iRyT1pIRUZgk9XO5GTFYm0YJDbU.jpg",
		"imdb": 6.4,
		"release_date": "2017-08-23",
		"runtime": 128,
		"genre_ids": [
			80,
			53,
			28
		],
		"hash": "D63D9C2FA4D7BF64B50D2542F3A775A64B178688",
		"updated": "2021-09-19T06:27:53.24+00:00"
	},
	{
		"id": 812,
		"tmdb_id": 488623,
		"imdb_id": "tt7057496",
		"title": "Đêm Ký Ức",
		"english_title": "Forgotten",
		"backdrop_path": "/kJUYhuTNadtg94NUlxeJlJAvCrI.jpg",
		"imdb": 7.4,
		"release_date": "2017-11-29",
		"runtime": 108,
		"genre_ids": [
			53,
			9648,
			18
		],
		"hash": "01CC3BB5B2EEA003254CF877962EE94C48787ABF",
		"updated": "2021-09-19T06:29:29.127+00:00"
	},
	{
		"id": 810,
		"tmdb_id": 293167,
		"imdb_id": "tt3731562",
		"title": "Kong: Đảo Đầu Lâu",
		"english_title": "Kong: Skull Island",
		"backdrop_path": "/qz0u7Kv5y026xLcsecYYF7WffGK.jpg",
		"imdb": 6.6,
		"release_date": "2017-03-08",
		"runtime": 118,
		"genre_ids": [
			28,
			12,
			14
		],
		"hash": "148242CB8F98CFD40D2725B43931DAAEA55E752C",
		"updated": "2021-09-19T08:10:13.984+00:00"
	},
	{
		"id": 799,
		"tmdb_id": 479718,
		"imdb_id": "tt7468056",
		"title": "Ngoài Vòng Pháp Luật",
		"english_title": "The Outlaws",
		"backdrop_path": "/a8XS6Ctm6U0Kgf2IU82iwtGX8Fw.jpg",
		"imdb": 7.2,
		"release_date": "2017-10-03",
		"runtime": 121,
		"genre_ids": [
			80,
			28
		],
		"hash": "96BD2EA42FFF68C45F865CBB01C52850C3ACB005",
		"updated": "2021-09-19T08:22:09.324+00:00"
	},
	{
		"id": 821,
		"tmdb_id": 416477,
		"imdb_id": "tt5462602",
		"title": "Bệnh Lạ",
		"english_title": "The Big Sick",
		"backdrop_path": "/rckZvJzV6JUUbYxSjSkJzvhLvsm.jpg",
		"imdb": 7.5,
		"release_date": "2017-03-30",
		"runtime": 120,
		"genre_ids": [
			35,
			18,
			10749
		],
		"hash": "F7B56FC2DA8C8D5380631542F43A70BB59BE1030",
		"updated": "2021-09-19T08:20:12.945+00:00"
	},
	{
		"id": 816,
		"tmdb_id": 455714,
		"imdb_id": "tt6788942",
		"title": "Thiên Tài Bất Hảo",
		"english_title": "Bad Genius",
		"backdrop_path": "/lu2gC4gM5L80gJV1TMFpUwQ50wS.jpg",
		"imdb": 7.6,
		"release_date": "2017-05-03",
		"runtime": 130,
		"genre_ids": [
			35,
			18,
			80,
			53
		],
		"hash": "D9C931EC7DC9911EED402A8249E853006A4DC211",
		"updated": "2021-09-19T10:13:21.008+00:00"
	},
	{
		"id": 806,
		"tmdb_id": 126889,
		"imdb_id": "tt2316204",
		"title": "Quái Vật Không Gian 5: Khế Ước",
		"english_title": "Alien: Covenant",
		"backdrop_path": "/lEEvPikMCqVxzzpLZ31vSGinuJF.jpg",
		"imdb": 6.4,
		"release_date": "2017-05-09",
		"runtime": 122,
		"genre_ids": [
			27,
			878,
			9648
		],
		"hash": "3B759F75517C209DA21365DEC92F43335B677E68",
		"updated": "2021-09-28T02:21:33.305+00:00"
	},
	{
		"id": 836,
		"tmdb_id": 141052,
		"imdb_id": "tt0974015",
		"title": "Liên Minh Công Lý",
		"english_title": "Justice League",
		"backdrop_path": "/uRnVOQjJhhFWyfRjEgDHhMxVLWk.jpg",
		"imdb": 6.3,
		"release_date": "2017-11-15",
		"runtime": 120,
		"genre_ids": [
			28,
			12,
			14,
			878
		],
		"hash": "7C1C844B2CCC8F46EFF97FC2CA735F9E4DBFD2FA",
		"updated": "2021-09-18T12:40:49.952+00:00"
	},
	{
		"id": 838,
		"tmdb_id": 406997,
		"imdb_id": "tt2543472",
		"title": "Điều Kỳ Diệu",
		"english_title": "Wonder",
		"backdrop_path": "/veAgWJPB7NbctNCr8zOomoAHjKo.jpg",
		"imdb": 8,
		"release_date": "2017-11-13",
		"runtime": 113,
		"genre_ids": [
			18,
			10751
		],
		"hash": "479C9BCA3BE56E10D7B8B580FD3159A64EF9564C",
		"updated": "2021-09-18T06:09:56.972+00:00"
	},
	{
		"id": 839,
		"tmdb_id": 354912,
		"imdb_id": "tt2380307",
		"title": "Coco: Hội Ngộ Diệu Kỳ",
		"english_title": "Coco",
		"backdrop_path": "/dV8LIdxBHZHfBQp1uMuzF749qiK.jpg",
		"imdb": 8.4,
		"release_date": "2017-10-27",
		"runtime": 105,
		"genre_ids": [
			10751,
			16,
			14,
			10402,
			35,
			12
		],
		"hash": "56EA070327C4F34BFB3ADFBEBDA29BB1125799E7",
		"updated": "2021-09-16T03:00:40.024+00:00"
	},
	{
		"id": 843,
		"tmdb_id": 335984,
		"imdb_id": "tt1856101",
		"title": "Tội Phạm Nhân Bản 2049",
		"english_title": "Blade Runner 2049",
		"backdrop_path": "/zdhCwSOHkvyRqOwXv0g3TVEOCKU.jpg",
		"imdb": 8,
		"release_date": "2017-10-04",
		"runtime": 164,
		"genre_ids": [
			878,
			18
		],
		"hash": "8F4F1C37649D5A6276A3A789B4AE62FEEFF23D27",
		"updated": "2021-10-30T02:48:29.374+00:00"
	},
	{
		"id": 828,
		"tmdb_id": 359940,
		"imdb_id": "tt5027774",
		"title": "Truy Tìm Công Lý",
		"english_title": "Three Billboards Outside Ebbing, Missouri",
		"backdrop_path": "/4rzQjl5OldTrwQrgyUzyUGgxE6x.jpg",
		"imdb": 8.2,
		"release_date": "2017-11-10",
		"runtime": 115,
		"genre_ids": [
			80,
			18
		],
		"hash": "67A23F568666FB735AED9BF340B520FE72F8BCED",
		"updated": "2021-09-16T06:34:21.763+00:00"
	},
	{
		"id": 825,
		"tmdb_id": 374720,
		"imdb_id": "tt5013056",
		"title": "Cuộc Di Tản Dunkirk",
		"english_title": "Dunkirk",
		"backdrop_path": "/3AewYTdWm5nBAJ986LCTOfjcJre.jpg",
		"imdb": 7.8,
		"release_date": "2017-07-19",
		"runtime": 107,
		"genre_ids": [
			10752,
			28,
			18
		],
		"hash": "E8177A457C5BE6DE1B84A093A6A9FE4B046A35BB",
		"updated": "2021-09-18T12:36:09.915+00:00"
	},
	{
		"id": 845,
		"tmdb_id": 316029,
		"imdb_id": "tt1485796",
		"title": "Bậc Thầy Của Những Ước Mơ",
		"english_title": "The Greatest Showman",
		"backdrop_path": "/jHhoix2bnaTd1464d5uLWQ8GmY8.jpg",
		"imdb": 7.6,
		"release_date": "2017-12-20",
		"runtime": 105,
		"genre_ids": [
			18
		],
		"hash": "5BAF1D6F5BC1BB8FDC463411019B89717A819CCC",
		"updated": "2021-09-18T12:45:13.564+00:00"
	},
	{
		"id": 823,
		"tmdb_id": 324852,
		"imdb_id": "tt3469046",
		"title": "Kẻ Cắp Mặt Trăng 3",
		"english_title": "Despicable Me 3",
		"backdrop_path": "/kNhsBc0sJdzglKx7ouHsdYUm6TB.jpg",
		"imdb": 6.3,
		"release_date": "2017-06-15",
		"runtime": 96,
		"genre_ids": [
			28,
			16,
			35,
			10751,
			12
		],
		"hash": "68D9400AB168C471740FB383F35A467705AC01FB",
		"updated": "2021-09-18T12:46:13.417+00:00"
	},
	{
		"id": 840,
		"tmdb_id": 389015,
		"imdb_id": "tt5580036",
		"title": "Tôi Là Tonya",
		"english_title": "I, Tonya",
		"backdrop_path": "/zEaRhzUVoOFbDzNxBdGVl4DmNBe.jpg",
		"imdb": 7.5,
		"release_date": "2017-12-08",
		"runtime": 120,
		"genre_ids": [
			18
		],
		"hash": "D4C2417DE29697269EB0B8266F28CCFFD9518D76",
		"updated": "2021-09-18T12:47:14.808+00:00"
	},
	{
		"id": 833,
		"tmdb_id": 396422,
		"imdb_id": "tt5140878",
		"title": "Búp Bê Ma Ám: Khởi Nguồn",
		"english_title": "Annabelle: Creation",
		"backdrop_path": "/imszMw4h1HE9oy3OzQmXW0CrlLc.jpg",
		"imdb": 6.5,
		"release_date": "2017-08-03",
		"runtime": 109,
		"genre_ids": [
			27,
			9648,
			53
		],
		"hash": "2375DD151E5E851A48A7766157B67AA4B4DA99EE",
		"updated": "2021-09-19T06:16:39.887+00:00"
	},
	{
		"id": 830,
		"tmdb_id": 274857,
		"imdb_id": "tt1972591",
		"title": "Huyền Thoại Vua Arthur: Thanh Gươm Trong Đá",
		"english_title": "King Arthur: Legend of the Sword",
		"backdrop_path": "/8BG1YPOa04O2s8C5v1ZeeYOZOAZ.jpg",
		"imdb": 6.7,
		"release_date": "2017-05-10",
		"runtime": 126,
		"genre_ids": [
			28,
			18,
			14
		],
		"hash": "08E3EE133B1516E6807A5928BD78C8138DDA3626",
		"updated": "2021-09-19T05:40:05.599+00:00"
	},
	{
		"id": 834,
		"tmdb_id": 417644,
		"imdb_id": "tt0493405",
		"title": "Thanh Tra Đường Cao Tốc",
		"english_title": "CHiPS",
		"backdrop_path": "/fkmqmIiIoFgGTPSbZkm32WMMIjm.jpg",
		"imdb": 6,
		"release_date": "2017-01-16",
		"runtime": 100,
		"genre_ids": [
			28,
			35,
			80
		],
		"hash": "8BB41BFE0D7EEC449E78D5AACDB5F5435A07C43D",
		"updated": "2021-09-19T06:23:16.698+00:00"
	},
	{
		"id": 846,
		"tmdb_id": 440472,
		"imdb_id": "tt1987680",
		"title": "Trợ Lý Hết Ý",
		"english_title": "The Upside",
		"backdrop_path": "/8CYt9KRvdGiFjoflx1hhfBI43uS.jpg",
		"imdb": 7,
		"release_date": "2017-01-11",
		"runtime": 126,
		"genre_ids": [
			35,
			18
		],
		"hash": "C8205420477D490A41DC82701007DB6B59467C5E",
		"updated": "2021-10-11T01:40:39.037+00:00"
	},
	{
		"id": 841,
		"tmdb_id": 419680,
		"imdb_id": "tt5657846",
		"title": "Bố Ngoan, Bố Hư 2",
		"english_title": "Daddy's Home 2",
		"backdrop_path": "/jxyFs27LJuXgTlRyDO77Qe4Bwk0.jpg",
		"imdb": 6,
		"release_date": "2017-11-09",
		"runtime": 100,
		"genre_ids": [
			35
		],
		"hash": "3A7E77D70A52799924C33B88B81EA4D29F9BD7C7",
		"updated": "2021-09-26T02:23:38.675+00:00"
	},
	{
		"id": 832,
		"tmdb_id": 381289,
		"imdb_id": "tt1753383",
		"title": "Mục Đích Sống Của Một Chú Chó",
		"english_title": "A Dog's Purpose",
		"backdrop_path": "/wkQR6Eie8k1ktC90xGa3x4FOZGa.jpg",
		"imdb": 7.2,
		"release_date": "2017-01-19",
		"runtime": 100,
		"genre_ids": [
			35,
			18,
			10751,
			14,
			12
		],
		"hash": "221278E4E50F75302B4150C5D3CA2DF9A2E68E6E",
		"updated": "2021-09-19T06:35:10.388+00:00"
	},
	{
		"id": 824,
		"tmdb_id": 339403,
		"imdb_id": "tt3890160",
		"title": "Quái Xế Baby",
		"english_title": "Baby Driver",
		"backdrop_path": "/ltuJeVT7tM32ratdVHwcYGgONdU.jpg",
		"imdb": 7.6,
		"release_date": "2017-06-28",
		"runtime": 113,
		"genre_ids": [
			28,
			80
		],
		"hash": "3676634E0B750299F5CF31E52B2AD035DF641ACE",
		"updated": "2021-09-19T06:38:25.219+00:00"
	},
	{
		"id": 831,
		"tmdb_id": 298250,
		"imdb_id": "tt3348730",
		"title": "Lưỡi Cưa 8: Di Sản Để Lại",
		"english_title": "Jigsaw",
		"backdrop_path": "/9GD9I2fbjpvV5E6urywaN620PCh.jpg",
		"imdb": 5.8,
		"release_date": "2017-10-26",
		"runtime": 92,
		"genre_ids": [
			27,
			80,
			9648,
			53
		],
		"hash": "8812EC222487B121CED38CB3B5DBD3ADA8D36DEB",
		"updated": "2021-09-19T07:54:30.964+00:00"
	},
	{
		"id": 842,
		"tmdb_id": 390062,
		"imdb_id": "tt3758172",
		"title": "Hiểm Họa Rừng Chết",
		"english_title": "Jungle",
		"backdrop_path": "/sRXmUTAbG6hiPdUTkvg19L3RirL.jpg",
		"imdb": 6.7,
		"release_date": "2017-06-27",
		"runtime": 115,
		"genre_ids": [
			12,
			18,
			53
		],
		"hash": "1072138DFD6D43C335DD8E8F87C5C252748604EE",
		"updated": "2021-09-19T08:09:02.079+00:00"
	},
	{
		"id": 826,
		"tmdb_id": 397837,
		"imdb_id": "tt1691916",
		"title": "Không Có Ngày Mai",
		"english_title": "Before I Fall",
		"backdrop_path": "/87tCWcWaQAKeJobbXm0Am27Clmo.jpg",
		"imdb": 6.5,
		"release_date": "2017-03-02",
		"runtime": 98,
		"genre_ids": [
			18,
			9648,
			53,
			14
		],
		"hash": "AE28BAEC7A304E9714228E0C70D45E4CB194EE91",
		"updated": "2021-09-19T10:13:11.136+00:00"
	},
	{
		"id": 829,
		"tmdb_id": 339877,
		"imdb_id": "tt3262342",
		"title": "Vincent Thương Mến",
		"english_title": "Loving Vincent",
		"backdrop_path": "/maWylBMJX6PRSwB5OB5APFMeipK.jpg",
		"imdb": 7.8,
		"release_date": "2017-06-22",
		"runtime": 95,
		"genre_ids": [
			16,
			18,
			9648
		],
		"hash": "BB786E3BA689E950743E8467B1F06EFADBCDA3C6",
		"updated": "2021-09-19T10:15:04.192+00:00"
	},
	{
		"id": 837,
		"tmdb_id": 432615,
		"imdb_id": "tt6333054",
		"title": "Rạn San Hô",
		"english_title": "Chasing Coral",
		"backdrop_path": "/oY5NWGRHyfJcchaJYZseQpIO7RE.jpg",
		"imdb": 8.1,
		"release_date": "2017-03-16",
		"runtime": 93,
		"genre_ids": [
			99
		],
		"hash": "BA60A7A1EC51FC9A37FF410BBB243FCFE162D43F",
		"updated": "2021-09-19T11:00:30.161+00:00"
	},
	{
		"id": 835,
		"tmdb_id": 434203,
		"imdb_id": "tt6408226",
		"title": "Sự Mới Lạ",
		"english_title": "Newness",
		"backdrop_path": "/gN72pP8YxwdPPRTxyg7OL4l0EQg.jpg",
		"imdb": 6.3,
		"release_date": "2017-11-03",
		"runtime": 112,
		"genre_ids": [
			10749,
			18
		],
		"hash": "D34AF97C0563E79C5D382EF0F9F072C005DCAB0E",
		"updated": "2021-09-23T05:14:10.181+00:00"
	},
	{
		"id": 827,
		"tmdb_id": 436391,
		"imdb_id": "tt5969696",
		"title": "Đảo Địa Ngục",
		"english_title": "The Battleship Island",
		"backdrop_path": "/3gRvfpmPtBrJ5Xp6iLFyz7pJ06d.jpg",
		"imdb": 7.1,
		"release_date": "2017-07-26",
		"runtime": 132,
		"genre_ids": [
			28,
			36,
			18
		],
		"hash": "638BEC56730ADDD662B0B213E6830A016C332434",
		"updated": "2021-09-19T11:05:49.196+00:00"
	},
	{
		"id": 862,
		"tmdb_id": 284054,
		"imdb_id": "tt1825683",
		"title": "Chiến Binh Báo Đen",
		"english_title": "Black Panther",
		"backdrop_path": "/kGxFD1k0kzZQC3W1qdvZRbwpfgx.jpg",
		"imdb": 7.3,
		"release_date": "2018-02-13",
		"runtime": 134,
		"genre_ids": [
			28,
			12,
			14,
			878
		],
		"hash": "E156CE70FEE6464549FEF653C8468AECB3E7E9F1",
		"updated": "2021-09-17T11:52:30.048+00:00"
	},
	{
		"id": 866,
		"tmdb_id": 400535,
		"imdb_id": "tt5052474",
		"title": "Sicario 2: Chiến Binh Mexico",
		"english_title": "Sicario: Day of the Soldado",
		"backdrop_path": "/d5kHqDs3DgKXkbKSjpGNDbqv5hv.jpg",
		"imdb": 7.1,
		"release_date": "2018-06-27",
		"runtime": 122,
		"genre_ids": [
			28,
			80,
			18,
			53
		],
		"hash": "2F200765BBFA5802AC2AFDF0CB71865714E833A2",
		"updated": "2021-09-17T12:10:29.124+00:00"
	},
	{
		"id": 868,
		"tmdb_id": 458737,
		"imdb_id": "tt6053438",
		"title": "Niềm Tin Lung Lay",
		"english_title": "First Reformed",
		"backdrop_path": "/qlP3vaP4OWEKs6PAd8Xrh1kukgT.jpg",
		"imdb": 7.1,
		"release_date": "2018-05-18",
		"runtime": 113,
		"genre_ids": [
			18
		],
		"hash": "44FEB844C3C1FB612F613802B3BA0ABDE311CDFD",
		"updated": "2021-09-17T13:00:35.715+00:00"
	},
	{
		"id": 863,
		"tmdb_id": 424783,
		"imdb_id": "tt4701182",
		"title": "Bumblebee",
		"english_title": "Bumblebee",
		"backdrop_path": "/eAyrOEREZ915iibMbUeTJdS6OBJ.jpg",
		"imdb": 6.8,
		"release_date": "2018-12-15",
		"runtime": 114,
		"genre_ids": [
			28,
			12,
			878
		],
		"hash": "D55DBE69B24071B7661ED886A77136CA7278D065",
		"updated": "2021-09-17T13:01:47.142+00:00"
	},
	{
		"id": 870,
		"tmdb_id": 455207,
		"imdb_id": "tt3104988",
		"title": "Con Nhà Siêu Giàu Châu Á",
		"english_title": "Crazy Rich Asians",
		"backdrop_path": "/zPGA2iF4Sef9rAjvXMErcOZh71N.jpg",
		"imdb": 6.9,
		"release_date": "2018-08-15",
		"runtime": 121,
		"genre_ids": [
			35,
			18,
			10749
		],
		"hash": "DE856C536A196BFEBF7FD17F99C6D5A49035B6D9",
		"updated": "2021-09-18T00:22:00.818+00:00"
	},
	{
		"id": 851,
		"tmdb_id": 395992,
		"imdb_id": "tt5442430",
		"title": "Mầm Sống Hiểm Họa",
		"english_title": "Life",
		"backdrop_path": "/bfS76yEsad1hnhCVJhwweIeyaIZ.jpg",
		"imdb": 6.6,
		"release_date": "2017-03-22",
		"runtime": 104,
		"genre_ids": [
			27,
			878,
			53
		],
		"hash": "4B814DC29235E4F9C0C7E1AC34F0A45C7C23109B",
		"updated": "2021-09-19T05:51:55.476+00:00"
	},
	{
		"id": 850,
		"tmdb_id": 284053,
		"imdb_id": "tt3501632",
		"title": "Thần Sấm 3: Tận Thế Ragnarok",
		"english_title": "Thor: Ragnarok",
		"backdrop_path": "/wv8QNcwSbbGjGQgVWUTuSOeO3GK.jpg",
		"imdb": 7.9,
		"release_date": "2017-10-25",
		"runtime": 131,
		"genre_ids": [
			28,
			12,
			35,
			14,
			878
		],
		"hash": "E9D130CE07D0F1997CB4AE6F9EFF2A8CC07D0E97",
		"updated": "2021-09-18T12:24:13.865+00:00"
	},
	{
		"id": 848,
		"tmdb_id": 324552,
		"imdb_id": "tt4425200",
		"title": "Sát Thủ John Wick 2",
		"english_title": "John Wick: Chapter 2",
		"backdrop_path": "/o68wHtCr2xxAFJnm0n0ORJeBMM9.jpg",
		"imdb": 7.5,
		"release_date": "2017-02-08",
		"runtime": 122,
		"genre_ids": [
			53,
			28,
			80
		],
		"hash": "8560165D89CD5645916145B337C2993AE0E00266",
		"updated": "2021-09-18T12:41:16.334+00:00"
	},
	{
		"id": 860,
		"tmdb_id": 419430,
		"imdb_id": "tt5052448",
		"title": "Trốn Thoát",
		"english_title": "Get Out",
		"backdrop_path": "/piQqKE2KilzYjnlhADAovoODHUn.jpg",
		"imdb": 7.7,
		"release_date": "2017-02-24",
		"runtime": 104,
		"genre_ids": [
			9648,
			53,
			27
		],
		"hash": "CB415C7E5D04770BEA35BC5C649AB1D3FE6654A7",
		"updated": "2021-09-18T12:44:47.428+00:00"
	},
	{
		"id": 857,
		"tmdb_id": 381288,
		"imdb_id": "tt4972582",
		"title": "Tách Biệt",
		"english_title": "Split",
		"backdrop_path": "/3na3Y4PM4uB4vKrrzp5nhzxaOn9.jpg",
		"imdb": 7.3,
		"release_date": "2017-01-09",
		"runtime": 117,
		"genre_ids": [
			27,
			53
		],
		"hash": "AA1FCD4067A829B6866D3D3D36263D993D994A69",
		"updated": "2021-09-18T13:38:27.313+00:00"
	},
	{
		"id": 847,
		"tmdb_id": 399366,
		"imdb_id": "tt5886440",
		"title": "Dinh Thự Quỷ Ám",
		"english_title": "Marrowbone",
		"backdrop_path": "/lLnUzXFiBPc6ehCCSS9Gb2uFj3x.jpg",
		"imdb": 6.7,
		"release_date": "2017-10-27",
		"runtime": 111,
		"genre_ids": [
			18,
			53,
			9648,
			27
		],
		"hash": "DC42122062A311EEA5D7A7C9304CB679A6143C61",
		"updated": "2021-09-19T05:02:12.941+00:00"
	},
	{
		"id": 856,
		"tmdb_id": 321612,
		"imdb_id": "tt2771200",
		"title": "Người Đẹp Và Quái Vật",
		"english_title": "Beauty and the Beast",
		"backdrop_path": "/mRgpZvbRgvneY6qKbg44mREbYka.jpg",
		"imdb": 7.1,
		"release_date": "2017-03-16",
		"runtime": 129,
		"genre_ids": [
			10751,
			14,
			10749
		],
		"hash": "1BE839B8032095048F5F7945081A3349232126A1",
		"updated": "2021-09-19T05:08:43.862+00:00"
	},
	{
		"id": 854,
		"tmdb_id": 260514,
		"imdb_id": "tt3606752",
		"title": "Vương Quốc Xe Hơi 3",
		"english_title": "Cars 3",
		"backdrop_path": "/agA6Kvr1xc6o9UTm82A9QafoEpE.jpg",
		"imdb": 6.7,
		"release_date": "2017-06-15",
		"runtime": 102,
		"genre_ids": [
			12,
			35,
			18
		],
		"hash": "F20D4989E9E0984135720708ABC75246CDCB25B8",
		"updated": "2021-09-19T05:08:27.746+00:00"
	},
	{
		"id": 861,
		"tmdb_id": 353486,
		"imdb_id": "tt2283362",
		"title": "Jumanji: Trò Chơi Kỳ Ảo",
		"english_title": "Jumanji: Welcome to the Jungle",
		"backdrop_path": "/aYqlTVGEDnD1O4dAh7ytYaWR7sp.jpg",
		"imdb": 6.9,
		"release_date": "2017-12-09",
		"runtime": 119,
		"genre_ids": [
			28,
			12,
			35,
			14
		],
		"hash": "0F49BC61F331288FFD7CC5665A3B598EA5481C20",
		"updated": "2021-09-19T05:26:55.982+00:00"
	},
	{
		"id": 867,
		"tmdb_id": 336843,
		"imdb_id": "tt4500922",
		"title": "Giải Mã Mê Cung 3: Lối Thoát Tử Thần",
		"english_title": "Maze Runner: The Death Cure",
		"backdrop_path": "/ha7SGZoNSAV0vgGGnlbJn0ItQ8v.jpg",
		"imdb": 6.3,
		"release_date": "2018-01-10",
		"runtime": 143,
		"genre_ids": [
			878,
			28
		],
		"hash": "8C6870A32AD9C4A7F1F9DF309B53C98690F1189F",
		"updated": "2021-09-19T05:37:46.474+00:00"
	},
	{
		"id": 852,
		"tmdb_id": 440021,
		"imdb_id": "tt5308322",
		"title": "Sinh Nhật Chết Chóc",
		"english_title": "Happy Death Day",
		"backdrop_path": "/dC6GFl6Xbjig0aMtBcQ5aFPFbWh.jpg",
		"imdb": 6.6,
		"release_date": "2017-10-12",
		"runtime": 97,
		"genre_ids": [
			27,
			9648,
			35
		],
		"hash": "1AA2C761656224B92463475E66A9EFDD30DE4232",
		"updated": "2021-09-19T05:52:08.044+00:00"
	},
	{
		"id": 849,
		"tmdb_id": 392044,
		"imdb_id": "tt3402236",
		"title": "Án Mạng Trên Chuyến Tàu Tốc Hành Phương Đông",
		"english_title": "Murder on the Orient Express",
		"backdrop_path": "/joHK7AhNjgMKc6483O3VsvD3z0e.jpg",
		"imdb": 6.5,
		"release_date": "2017-11-03",
		"runtime": 114,
		"genre_ids": [
			9648,
			80,
			18
		],
		"hash": "2BF96FECC677F07E1316139A0BC52AFAC6A6417E",
		"updated": "2021-09-19T05:53:52.98+00:00"
	},
	{
		"id": 859,
		"tmdb_id": 315837,
		"imdb_id": "tt1219827",
		"title": "Vỏ Bọc Ma",
		"english_title": "Ghost in the Shell",
		"backdrop_path": "/9q3vcHwxOgnvuJtIIALfNt7qugI.jpg",
		"imdb": 6.3,
		"release_date": "2017-03-29",
		"runtime": 107,
		"genre_ids": [
			28,
			878
		],
		"hash": "475E515A79DAECC6917B4606DD06D44045263EFD",
		"updated": "2021-09-19T06:20:39.99+00:00"
	},
	{
		"id": 858,
		"tmdb_id": 438857,
		"imdb_id": "tt6315750",
		"title": "Quyết Chiến Thực Thần",
		"english_title": "Cook Up a Storm",
		"backdrop_path": "/6PGzwKqNQyIaiAcTLueRAklRAJ3.jpg",
		"imdb": 6.4,
		"release_date": "2017-02-10",
		"runtime": 98,
		"genre_ids": [
			18,
			35
		],
		"hash": "76E10862D5BA19B88FEDF628917604B27CA4035F",
		"updated": "2021-09-19T06:28:17.421+00:00"
	},
	{
		"id": 853,
		"tmdb_id": 339964,
		"imdb_id": "tt2239822",
		"title": "Valerian Và Thành Phố Ngàn Hành Tinh",
		"english_title": "Valerian and the City of a Thousand Planets",
		"backdrop_path": "/7rAYZ5u50KEtpepqUTByP1cpLDu.jpg",
		"imdb": 6.5,
		"release_date": "2017-07-20",
		"runtime": 136,
		"genre_ids": [
			12,
			878,
			28
		],
		"hash": "0702E59124A97AE4E60FC935FDA7B0B9E6B6E042",
		"updated": "2021-09-19T06:32:35.292+00:00"
	},
	{
		"id": 855,
		"tmdb_id": 345922,
		"imdb_id": "tt3401882",
		"title": "Nắm Đấm",
		"english_title": "Fist Fight",
		"backdrop_path": "/gZ4j8vtgfu3iU46HGYIiwhRVSDw.jpg",
		"imdb": 5.6,
		"release_date": "2017-02-16",
		"runtime": 91,
		"genre_ids": [
			35
		],
		"hash": "B352C5F078A618C0AA0842D79BCB4EC48D8D23AE",
		"updated": "2021-09-19T10:13:33.144+00:00"
	},
	{
		"id": 869,
		"tmdb_id": 491584,
		"imdb_id": "tt7282468",
		"title": "Thiêu Đốt",
		"english_title": "Burning",
		"backdrop_path": "/p4JvZZFonKPvIeXZ1c4xkJD8Ty7.jpg",
		"imdb": 7.5,
		"release_date": "2018-05-17",
		"runtime": 148,
		"genre_ids": [
			9648,
			18,
			53
		],
		"hash": "92EC8FB2865E028401DE3363F7CF3450BA1F11B9",
		"updated": "2021-09-19T11:04:40.683+00:00"
	},
	{
		"id": 880,
		"tmdb_id": 363088,
		"imdb_id": "tt5095030",
		"title": "Người Kiến và Chiến Binh Ong",
		"english_title": "Ant-Man and the Wasp",
		"backdrop_path": "/36HLHFLHAlWMv9bYtnn8OmnFLgz.jpg",
		"imdb": 7.1,
		"release_date": "2018-07-04",
		"runtime": 119,
		"genre_ids": [
			28,
			12,
			878,
			35
		],
		"hash": "F01D441E6AEF6D05A3E7C3705BFBD543D4F80695",
		"updated": "2021-09-17T11:51:41.291+00:00"
	},
	{
		"id": 886,
		"tmdb_id": 297802,
		"imdb_id": "tt1477834",
		"title": "Aquaman: Đế Vương Atlantis",
		"english_title": "Aquaman",
		"backdrop_path": "/85gpZHaYZQm9vQyOC9iCiqSdY83.jpg",
		"imdb": 6.9,
		"release_date": "2018-12-07",
		"runtime": 143,
		"genre_ids": [
			28,
			12,
			14
		],
		"hash": "2EAB6D69E8206C982EC29F4E88B5AF83A4E7EAC2",
		"updated": "2021-09-17T11:53:10.754+00:00"
	},
	{
		"id": 883,
		"tmdb_id": 383498,
		"imdb_id": "tt5463162",
		"title": "Quái Nhân Deadpool 2",
		"english_title": "Deadpool 2",
		"backdrop_path": "/zaVbBJOpTD09sRSPhnnZXWvjJxQ.jpg",
		"imdb": 7.7,
		"release_date": "2018-05-10",
		"runtime": 119,
		"genre_ids": [
			28,
			35,
			12
		],
		"hash": "E774B886539A3F7EBF1FFE7CD01A107F73298248",
		"updated": "2021-09-17T12:00:23.67+00:00"
	},
	{
		"id": 894,
		"tmdb_id": 360920,
		"imdb_id": "tt2709692",
		"title": "Kẻ Cắp Giáng Sinh",
		"english_title": "The Grinch",
		"backdrop_path": "/2dd5TE9P78YVo4Rs0TqbZKCuy7S.jpg",
		"imdb": 6.3,
		"release_date": "2018-11-08",
		"runtime": 85,
		"genre_ids": [
			16,
			10751,
			35,
			14
		],
		"hash": "59D3122D5C39D5F2A9940CBCDDAD0956AEA17F53",
		"updated": "2021-09-17T12:01:54.075+00:00"
	},
	{
		"id": 876,
		"tmdb_id": 480530,
		"imdb_id": "tt6343314",
		"title": "Tay Đấm Huyền Thoại 2",
		"english_title": "Creed II",
		"backdrop_path": "/dSYfTIUuYxgtk7oSH606Zy0cFWK.jpg",
		"imdb": 7.1,
		"release_date": "2018-11-21",
		"runtime": 130,
		"genre_ids": [
			18
		],
		"hash": "6FEE0D4978D5B3A33C38EE5C8281A3D1FD438C96",
		"updated": "2021-09-17T12:10:02.449+00:00"
	},
	{
		"id": 893,
		"tmdb_id": 332562,
		"imdb_id": "tt1517451",
		"title": "Vì Sao Vụt Sáng",
		"english_title": "A Star Is Born",
		"backdrop_path": "/dD1DgLRjaLcy4tpTGatyrK2C3o8.jpg",
		"imdb": 7.6,
		"release_date": "2018-10-03",
		"runtime": 136,
		"genre_ids": [
			18,
			10749,
			10402
		],
		"hash": "27DD7AC116569241ED94730EC562759A95B6AC02",
		"updated": "2021-09-17T12:12:38.245+00:00"
	},
	{
		"id": 885,
		"tmdb_id": 443463,
		"imdb_id": "tt3892172",
		"title": "Không Để Lại Dấu Vết",
		"english_title": "Leave No Trace",
		"backdrop_path": "/nA0qsiFPgnfihpfeR5gJobpnj1h.jpg",
		"imdb": 7.2,
		"release_date": "2018-06-29",
		"runtime": 110,
		"genre_ids": [
			18
		],
		"hash": "9696C0611782230CF3B0117A0395C14FA51C66E7",
		"updated": "2021-09-17T12:32:34.419+00:00"
	},
	{
		"id": 878,
		"tmdb_id": 345887,
		"imdb_id": "tt3766354",
		"title": "Thiện Ác Đối Đầu 2",
		"english_title": "The Equalizer 2",
		"backdrop_path": "/bZ9aamxffGJ0tTTEFk6TavkcQT6.jpg",
		"imdb": 6.7,
		"release_date": "2018-07-19",
		"runtime": 121,
		"genre_ids": [
			28,
			53,
			80
		],
		"hash": "25FF54CE7780165143F1F6BE427F9321A897E10C",
		"updated": "2021-09-17T12:31:55.011+00:00"
	},
	{
		"id": 890,
		"tmdb_id": 504172,
		"imdb_id": "tt7959026",
		"title": "Già Gân",
		"english_title": "The Mule",
		"backdrop_path": "/cSrTLxNBcamVZvdpnwZfV9QCMms.jpg",
		"imdb": 7,
		"release_date": "2018-12-14",
		"runtime": 116,
		"genre_ids": [
			80,
			18,
			53
		],
		"hash": "A94E5B490C838290B99950F175B67830042728D9",
		"updated": "2021-09-17T13:02:56.095+00:00"
	},
	{
		"id": 873,
		"tmdb_id": 406563,
		"imdb_id": "tt5726086",
		"title": "Quỷ Quyệt 4: Chìa Khóa Quỷ Dữ",
		"english_title": "Insidious: The Last Key",
		"backdrop_path": "/bvumeOIY1Xje535u94ewIKwHdos.jpg",
		"imdb": 5.7,
		"release_date": "2018-01-03",
		"runtime": 103,
		"genre_ids": [
			27,
			9648,
			53
		],
		"hash": "BFD7CF83F3A905D9BF999819B10BCEE08FC69D31",
		"updated": "2021-09-17T13:04:53.177+00:00"
	},
	{
		"id": 872,
		"tmdb_id": 300668,
		"imdb_id": "tt2798920",
		"title": "Vùng Hủy Diệt",
		"english_title": "Annihilation",
		"backdrop_path": "/4MrvvI3NT2mjYokK7VFXh9Gpxsq.jpg",
		"imdb": 6.8,
		"release_date": "2018-02-22",
		"runtime": 115,
		"genre_ids": [
			878,
			27
		],
		"hash": "65C100E2892A65DEF42BE62BA80496C2D9AF42AF",
		"updated": "2021-09-18T00:22:51.117+00:00"
	},
	{
		"id": 871,
		"tmdb_id": 401981,
		"imdb_id": "tt2873282",
		"title": "Điệp Vụ Chim Sẻ Đỏ",
		"english_title": "Red Sparrow",
		"backdrop_path": "/wIkazaE9Ux51WHha1DlUm809yRQ.jpg",
		"imdb": 6.6,
		"release_date": "2018-02-28",
		"runtime": 140,
		"genre_ids": [
			9648,
			53
		],
		"hash": "BE4A79D8AEA954E3061E1A2D538F7CB7BD8BCBD1",
		"updated": "2021-09-18T00:51:53.833+00:00"
	},
	{
		"id": 875,
		"tmdb_id": 460885,
		"imdb_id": "tt6998518",
		"title": "Kẻ Săn Lùng",
		"english_title": "Mandy",
		"backdrop_path": "/sEWvxTc1xVgYMQfmVd86bUvBx2f.jpg",
		"imdb": 6.5,
		"release_date": "2018-09-13",
		"runtime": 122,
		"genre_ids": [
			27
		],
		"hash": "D4099FC02D43A9221E3FE817C73F2685A802CD1C",
		"updated": "2021-09-18T01:01:59.235+00:00"
	},
	{
		"id": 881,
		"tmdb_id": 399035,
		"imdb_id": "tt1590193",
		"title": "Hành Khách Bí Ẩn",
		"english_title": "The Commuter",
		"backdrop_path": "/1wCBH21RmJeGhg5idy3hCfaLT6W.jpg",
		"imdb": 6.3,
		"release_date": "2018-01-11",
		"runtime": 104,
		"genre_ids": [
			28,
			53
		],
		"hash": "99CA78548596F5FD2D8EE685351109A0F09E8E3C",
		"updated": "2021-09-18T01:33:10.002+00:00"
	},
	{
		"id": 874,
		"tmdb_id": 428078,
		"imdb_id": "tt1571234",
		"title": "Cỗ Máy Tử Thần",
		"english_title": "Mortal Engines",
		"backdrop_path": "/geMvIxchL34qG2KnNlDiGjp6xAF.jpg",
		"imdb": 6.1,
		"release_date": "2018-11-27",
		"runtime": 129,
		"genre_ids": [
			12,
			878
		],
		"hash": "D018E4881DBDA4C91BBF7F1D4B2927C938D79772",
		"updated": "2021-09-18T01:34:26.995+00:00"
	},
	{
		"id": 887,
		"tmdb_id": 345940,
		"imdb_id": "tt4779682",
		"title": "Cá Mập Siêu Bạo Chúa",
		"english_title": "The Meg",
		"backdrop_path": "/pUmHGpIyqKVxIT4XFtLzLmVrs5w.jpg",
		"imdb": 5.6,
		"release_date": "2018-08-09",
		"runtime": 113,
		"genre_ids": [
			28,
			878,
			27
		],
		"hash": "B3576709811E0657B1136031094C28B0FE9F9C15",
		"updated": "2021-09-18T01:35:09.298+00:00"
	},
	{
		"id": 891,
		"tmdb_id": 439079,
		"imdb_id": "tt5814060",
		"title": "Ác Quỷ Ma Sơ",
		"english_title": "The Nun",
		"backdrop_path": "/dolmFOJqhMcW38O0Sx1TZ235vWW.jpg",
		"imdb": 5.3,
		"release_date": "2018-09-05",
		"runtime": 96,
		"genre_ids": [
			27,
			9648,
			53
		],
		"hash": "A8EDFC02C8001EB3AF8507E61B7903262C33F59D",
		"updated": "2021-09-18T01:35:33.941+00:00"
	},
	{
		"id": 889,
		"tmdb_id": 338970,
		"imdb_id": "tt1365519",
		"title": "Tomb Raider: Huyền Thoại Bắt Đầu",
		"english_title": "Tomb Raider",
		"backdrop_path": "/egJVPbf1AmvkZTdxvUndC4Xx1a3.jpg",
		"imdb": 6.3,
		"release_date": "2018-03-05",
		"runtime": 118,
		"genre_ids": [
			28,
			12,
			14
		],
		"hash": "DD2A46AA0F99CC04F3563EDF3BC85BD35CC790E8",
		"updated": "2021-09-18T01:37:37.6+00:00"
	},
	{
		"id": 879,
		"tmdb_id": 404368,
		"imdb_id": "tt5848272",
		"title": "Ralph Đập Phá Thế Giới Ảo",
		"english_title": "Ralph Breaks the Internet",
		"backdrop_path": "/2PTSN3pl1tVFD8MzifruPRdW9u6.jpg",
		"imdb": 7,
		"release_date": "2018-11-20",
		"runtime": 112,
		"genre_ids": [
			10751,
			16,
			35,
			12
		],
		"hash": "9C7A49095C405310FA2001CD2038FE2979E9C2D6",
		"updated": "2021-09-18T01:41:34.671+00:00"
	},
	{
		"id": 884,
		"tmdb_id": 347375,
		"imdb_id": "tt4560436",
		"title": "Mốc 22",
		"english_title": "Mile 22",
		"backdrop_path": "/ktyravz9OMkYsgrBfPLlD2P4eGK.jpg",
		"imdb": 6.1,
		"release_date": "2018-08-16",
		"runtime": 95,
		"genre_ids": [
			28,
			53
		],
		"hash": "C667960B3D8BBE4332D7066D5B544692D854A6BB",
		"updated": "2021-09-18T01:44:52.43+00:00"
	},
	{
		"id": 892,
		"tmdb_id": 400155,
		"imdb_id": "tt5220122",
		"title": "Khách Sạn Huyền Bí 3",
		"english_title": "Hotel Transylvania 3: Summer Vacation",
		"backdrop_path": "/sVrDNdepQvX4WsnB6pPj5Dn36h8.jpg",
		"imdb": 6.3,
		"release_date": "2018-06-28",
		"runtime": 97,
		"genre_ids": [
			10751,
			14,
			35,
			16
		],
		"hash": "008C7E4941E786510205F87FE86D405C6072F061",
		"updated": "2021-09-18T01:48:19.385+00:00"
	},
	{
		"id": 877,
		"tmdb_id": 335983,
		"imdb_id": "tt1270797",
		"title": "Venom",
		"english_title": "Venom",
		"backdrop_path": "/cnBfZeUAwehPiNR3c3tI0JJ5Cce.jpg",
		"imdb": 6.7,
		"release_date": "2018-09-28",
		"runtime": 112,
		"genre_ids": [
			878,
			28
		],
		"hash": "D57527B7C54823445B957A998F4CAB99F3652558",
		"updated": "2021-11-24T02:46:33.939+00:00"
	},
	{
		"id": 888,
		"tmdb_id": 487670,
		"imdb_id": "tt7167658",
		"title": "Cái Chết Của Siêu Nhân",
		"english_title": "The Death of Superman",
		"backdrop_path": "/71sByb8dUu09osTsW2V31TqxRRR.jpg",
		"imdb": 7.4,
		"release_date": "2018-07-24",
		"runtime": 81,
		"genre_ids": [
			878,
			16,
			28,
			18
		],
		"hash": "9286A209DEA041EB9AADAD6125F45CBD1FBF7C44",
		"updated": "2021-09-18T01:57:45.706+00:00"
	},
	{
		"id": 898,
		"tmdb_id": 348350,
		"imdb_id": "tt3778644",
		"title": "Chiến Tranh Giữa Các Vì Sao Ngoại Truyện: Solo",
		"english_title": "Solo: A Star Wars Story",
		"backdrop_path": "/visr1MJy3i2vm4UAmqKdLNJxkdQ.jpg",
		"imdb": 6.9,
		"release_date": "2018-05-15",
		"runtime": 135,
		"genre_ids": [
			878,
			12
		],
		"hash": "E2E457B2E77128CD20FAFD0837BBDB9A4D543578",
		"updated": "2021-09-17T12:02:30.981+00:00"
	},
	{
		"id": 897,
		"tmdb_id": 402900,
		"imdb_id": "tt5164214",
		"title": "Băng Cướp Thế Kỷ: Đẳng Cấp Quý Cô",
		"english_title": "Ocean's Eight",
		"backdrop_path": "/6NKYKtzFGa5mtMU5FlTywFV2Unp.jpg",
		"imdb": 7,
		"release_date": "2018-06-07",
		"runtime": 111,
		"genre_ids": [
			80,
			35,
			28,
			53
		],
		"hash": "CD6B83749DA1B293D18ECA36DA083386048A7784",
		"updated": "2021-09-17T12:03:49.134+00:00"
	},
	{
		"id": 895,
		"tmdb_id": 353081,
		"imdb_id": "tt4912910",
		"title": "Nhiệm Vụ Bất Khả Thi 6: Sụp Đổ",
		"english_title": "Mission: Impossible - Fallout",
		"backdrop_path": "/3MJ2TeXkGefDfUMifcvV0xTF8SB.jpg",
		"imdb": 7.7,
		"release_date": "2018-07-13",
		"runtime": 147,
		"genre_ids": [
			28,
			12
		],
		"hash": "E03A72E6864336B9BB388A7207A8FF1E4C543EBA",
		"updated": "2021-09-21T04:48:58.746+00:00"
	},
	{
		"id": 913,
		"tmdb_id": 487558,
		"imdb_id": "tt7349662",
		"title": "Hội Kín KKK",
		"english_title": "BlacKkKlansman",
		"backdrop_path": "/8QCljpGINkXmBpNLy7JOOfn9Gp.jpg",
		"imdb": 7.5,
		"release_date": "2018-07-30",
		"runtime": 135,
		"genre_ids": [
			80,
			18,
			36,
			35
		],
		"hash": "97C8235A8440C0F0D3A2EAF014102E6847F2A970",
		"updated": "2021-09-17T12:20:29.43+00:00"
	},
	{
		"id": 904,
		"tmdb_id": 493922,
		"imdb_id": "tt7784604",
		"title": "Dòng Máu Bị Nguyền Rủa",
		"english_title": "Hereditary",
		"backdrop_path": "/gCoqM7p0KcqvVPBa16joXpxCg7u.jpg",
		"imdb": 7.3,
		"release_date": "2018-06-07",
		"runtime": 127,
		"genre_ids": [
			27,
			9648,
			53
		],
		"hash": "DFCBF7DE16D3FA94AD27CC547B295704E297A122",
		"updated": "2021-09-17T12:27:15.57+00:00"
	},
	{
		"id": 899,
		"tmdb_id": 400579,
		"imdb_id": "tt5610554",
		"title": "Cuộc Chiến Bỉm Sữa",
		"english_title": "Tully",
		"backdrop_path": "/88piOStQwIejbmGMVKFL7bRAKVm.jpg",
		"imdb": 7,
		"release_date": "2018-05-04",
		"runtime": 96,
		"genre_ids": [
			18
		],
		"hash": "B8BEF5A3E05844E2E0DEF60A04077D03B41295F3",
		"updated": "2021-09-17T13:06:07.539+00:00"
	},
	{
		"id": 908,
		"tmdb_id": 548066,
		"imdb_id": "tt4006302",
		"title": "Level 16",
		"english_title": "Level 16",
		"backdrop_path": "/sArWGfBetiJbej5FcpL8Y9MT4SZ.jpg",
		"imdb": 6,
		"release_date": "2018-02-20",
		"runtime": 102,
		"genre_ids": [
			878,
			53
		],
		"hash": "DE5E1B4E1AB288F89EAF35D697F176FC89B48198",
		"updated": "2021-09-17T13:06:41.004+00:00"
	},
	{
		"id": 905,
		"tmdb_id": 401469,
		"imdb_id": "tt4218572",
		"title": "Khi Các Góa Phụ Hành Động",
		"english_title": "Widows",
		"backdrop_path": "/mrRvSto1mmMwmTPwipiSFa0AjKc.jpg",
		"imdb": 6.9,
		"release_date": "2018-11-06",
		"runtime": 129,
		"genre_ids": [
			80,
			53
		],
		"hash": "D4C495A4735B802255F04B67C01B7B62B1CDB48A",
		"updated": "2021-09-17T13:07:19.967+00:00"
	},
	{
		"id": 896,
		"tmdb_id": 442249,
		"imdb_id": "tt6133466",
		"title": "Ngày Thanh Trừng 4: Cuộc Thanh Trừng Đầu Tiên",
		"english_title": "The First Purge",
		"backdrop_path": "/nIlCfEXXPcAj2vsj8rBaR56bDWu.jpg",
		"imdb": 5.2,
		"release_date": "2018-07-04",
		"runtime": 97,
		"genre_ids": [
			28,
			878,
			53,
			27,
			80
		],
		"hash": "F07BCBA4C2CBA741ED919B9A8CA9AD32A4BEFA31",
		"updated": "2021-09-18T01:02:38.041+00:00"
	},
	{
		"id": 918,
		"tmdb_id": 427641,
		"imdb_id": "tt2231461",
		"title": "Siêu Thú Cuồng Nộ",
		"english_title": "Rampage",
		"backdrop_path": "/sEDR2gGJqHd47rutBnBCG5Rum3p.jpg",
		"imdb": 6.1,
		"release_date": "2018-04-12",
		"runtime": 107,
		"genre_ids": [
			28,
			12,
			878
		],
		"hash": "04F561FCBC2CCC6FFB3853975D22CF3AE9C92AE5",
		"updated": "2021-09-18T01:33:44.139+00:00"
	},
	{
		"id": 901,
		"tmdb_id": 351286,
		"imdb_id": "tt4881806",
		"title": "Thế Giới Khủng Long: Vương Quốc Sụp Đổ",
		"english_title": "Jurassic World: Fallen Kingdom",
		"backdrop_path": "/n9Qm4aYL1xx9Bmg5Q9JWQc1E9gi.jpg",
		"imdb": 6.2,
		"release_date": "2018-06-06",
		"runtime": 129,
		"genre_ids": [
			28,
			12,
			878
		],
		"hash": "A7E089442821593CFA6C36A43C2858102972D87F",
		"updated": "2021-09-18T01:40:43.774+00:00"
	},
	{
		"id": 900,
		"tmdb_id": 429351,
		"imdb_id": "tt1413492",
		"title": "12 Kỵ Binh Quả Cảm",
		"english_title": "12 Strong",
		"backdrop_path": "/uMU6l6zYtM83PLe0Dqkyr8Rciio.jpg",
		"imdb": 6.6,
		"release_date": "2018-01-16",
		"runtime": 130,
		"genre_ids": [
			10752,
			18,
			28,
			36
		],
		"hash": "93D7FC60C422DF10829799E1DE104A497BA5ACB9",
		"updated": "2021-09-18T01:45:34.938+00:00"
	},
	{
		"id": 914,
		"tmdb_id": 455980,
		"imdb_id": "tt2854926",
		"title": "Trò Gắn Thẻ",
		"english_title": "Tag",
		"backdrop_path": "/1NFRyjidhjROBxcgmCTgB2Yfl85.jpg",
		"imdb": 6.5,
		"release_date": "2018-05-30",
		"runtime": 100,
		"genre_ids": [
			35,
			18
		],
		"hash": "36CA9CD3EDA54B8E427DC2D7C5C8B76001F436B8",
		"updated": "2021-09-18T01:47:18.856+00:00"
	},
	{
		"id": 902,
		"tmdb_id": 375588,
		"imdb_id": "tt4532826",
		"title": "Siêu Trộm Lừng Danh",
		"english_title": "Robin Hood",
		"backdrop_path": "/wEmIAHQyR1HQtLJba2A1Ihz35UO.jpg",
		"imdb": 5.3,
		"release_date": "2018-11-21",
		"runtime": 116,
		"genre_ids": [
			12,
			28,
			53
		],
		"hash": "014F3A70E3B27E36B787D0E41F6AD24F2FACC5BE",
		"updated": "2021-09-18T01:47:46.781+00:00"
	},
	{
		"id": 911,
		"tmdb_id": 449443,
		"imdb_id": "tt1259528",
		"title": "Những Kẻ Bất Bại",
		"english_title": "Den of Thieves",
		"backdrop_path": "/4ndElsn2A2lsVwoOMtjzTcszBhv.jpg",
		"imdb": 7,
		"release_date": "2018-01-18",
		"runtime": 140,
		"genre_ids": [
			28,
			53,
			80
		],
		"hash": "85C2F245E754E84BD19B04B241490BD6FDB62252",
		"updated": "2021-09-18T01:49:03.07+00:00"
	},
	{
		"id": 916,
		"tmdb_id": 453755,
		"imdb_id": "tt6820256",
		"title": "Sinh Tồn Ở Bắc Cực",
		"english_title": "Arctic",
		"backdrop_path": "/g6UfkY6sc0s36LhETzTSOUlfVLM.jpg",
		"imdb": 6.8,
		"release_date": "2018-11-21",
		"runtime": 98,
		"genre_ids": [
			18
		],
		"hash": "C6388397ADBA8B5940C75FDFED3DFDEB8B4D2957",
		"updated": "2021-09-18T01:50:44.472+00:00"
	},
	{
		"id": 915,
		"tmdb_id": 484247,
		"imdb_id": "tt7040874",
		"title": "Lời Thỉnh Cầu Bí Ẩn",
		"english_title": "A Simple Favor",
		"backdrop_path": "/omiMTfPIqScD2ceGcsMEJLxMZvU.jpg",
		"imdb": 6.8,
		"release_date": "2018-08-29",
		"runtime": 117,
		"genre_ids": [
			80,
			53
		],
		"hash": "F996202A81080A727CBD8B8EA054C83282B7CA57",
		"updated": "2021-09-18T01:51:07.478+00:00"
	},
	{
		"id": 910,
		"tmdb_id": 499028,
		"imdb_id": "tt8092252",
		"title": "Và Em Sẽ Đến",
		"english_title": "Be with You",
		"backdrop_path": "/jsE5vI2xKIhnFDyMb0jO1YxouyL.jpg",
		"imdb": 7.7,
		"release_date": "2018-03-14",
		"runtime": 132,
		"genre_ids": [
			10749,
			18
		],
		"hash": "4970A9ED8441884402016DA4DEFD0B2B5134EAE3",
		"updated": "2021-09-18T01:51:38.859+00:00"
	},
	{
		"id": 906,
		"tmdb_id": 463272,
		"imdb_id": "tt6921996",
		"title": "Điệp Viên Không Không Thấy 3: Tái Xuất Giang Hồ",
		"english_title": "Johnny English Strikes Again",
		"backdrop_path": "/7Qz09bgOcHFETFEceq8u0LBL7rt.jpg",
		"imdb": 6.2,
		"release_date": "2018-09-13",
		"runtime": 89,
		"genre_ids": [
			28,
			12,
			35
		],
		"hash": "ACB11C45384D68FA1CD01E2C20620DF65985835E",
		"updated": "2021-09-18T01:55:32.484+00:00"
	},
	{
		"id": 912,
		"tmdb_id": 530254,
		"imdb_id": "tt8574252",
		"title": "Sát Thủ Nhân Tạo",
		"english_title": "The Witch: Part 1. The Subversion",
		"backdrop_path": "/iRcaxDqSCmuyczHg6vx4jJgqWd.jpg",
		"imdb": 7.1,
		"release_date": "2018-06-27",
		"runtime": 125,
		"genre_ids": [
			28,
			9648,
			14
		],
		"hash": "B298A191B78B294924A05152F2BBD2B6D374CE0A",
		"updated": "2021-09-18T01:57:22.32+00:00"
	},
	{
		"id": 903,
		"tmdb_id": 517814,
		"imdb_id": "tt8267604",
		"title": "Cậu Bé Nổi Loạn",
		"english_title": "Capernaum",
		"backdrop_path": "/2rXFgdX8fPtyvih9zWsV8yUHYZU.jpg",
		"imdb": 8.4,
		"release_date": "2018-10-06",
		"runtime": 126,
		"genre_ids": [
			18
		],
		"hash": "4F88DB474538442B98C39F0158987C4D1A644A50",
		"updated": "2021-09-19T11:01:40.399+00:00"
	},
	{
		"id": 909,
		"tmdb_id": 500664,
		"imdb_id": "tt6499752",
		"title": "Nâng Cấp",
		"english_title": "Upgrade",
		"backdrop_path": "/l8dyVacadBCMdHXGr1dQSKFLF1l.jpg",
		"imdb": 7.5,
		"release_date": "2018-06-01",
		"runtime": 100,
		"genre_ids": [
			28,
			53,
			878
		],
		"hash": "5331C7E22F95F25C9A2AF5BDEAF3A93EEFCF9145",
		"updated": "2021-09-30T07:39:25.359+00:00"
	},
	{
		"id": 919,
		"tmdb_id": 424694,
		"imdb_id": "tt1727824",
		"title": "Huyền Thoại Ngôi Sao Nhạc Rock",
		"english_title": "Bohemian Rhapsody",
		"backdrop_path": "/cdakNMS02KILElwW4j7IZPEVw7D.jpg",
		"imdb": 8,
		"release_date": "2018-10-24",
		"runtime": 135,
		"genre_ids": [
			10402,
			18,
			36
		],
		"hash": "23097FEA0B3E79F4AE89884623B267FCEFB7CB1D",
		"updated": "2021-09-17T12:01:04.721+00:00"
	},
	{
		"id": 929,
		"tmdb_id": 333339,
		"imdb_id": "tt1677720",
		"title": "Đấu Trường Kỳ Ảo",
		"english_title": "Ready Player One",
		"backdrop_path": "/7ngkC5XeGgtSEOVc5dXmQPd1lUh.jpg",
		"imdb": 7.5,
		"release_date": "2018-03-28",
		"runtime": 140,
		"genre_ids": [
			878,
			12,
			28
		],
		"hash": "0B2A8EAC63A94CEDF31118400F3F4BCB08B72D1A",
		"updated": "2021-09-16T11:07:21.945+00:00"
	},
	{
		"id": 940,
		"tmdb_id": 522627,
		"imdb_id": "tt8367814",
		"title": "Quý Ông Thế Giới Ngầm",
		"english_title": "The Gentlemen",
		"backdrop_path": "/aOoKjLoZWia4Uy5nbumrefdJPV6.jpg",
		"imdb": 7.8,
		"release_date": "2019-12-03",
		"runtime": 113,
		"genre_ids": [
			28,
			80,
			35
		],
		"hash": "925D989331A0B4AB626554F94AD958A439C62510",
		"updated": "2021-09-17T04:54:33.05+00:00"
	},
	{
		"id": 936,
		"tmdb_id": 474350,
		"imdb_id": "tt7349950",
		"title": "Gã Hề Ma Quái 2",
		"english_title": "It Chapter Two",
		"backdrop_path": "/fJWe8TyNJHCybsbdinj0b562FDT.jpg",
		"imdb": 6.5,
		"release_date": "2019-09-04",
		"runtime": 169,
		"genre_ids": [
			27,
			14
		],
		"hash": "13E1117D43A38A199ECFB8CD83AC846C4E83B8C1",
		"updated": "2021-09-17T05:05:12.52+00:00"
	},
	{
		"id": 939,
		"tmdb_id": 504608,
		"imdb_id": "tt2066051",
		"title": "Người Hỏa Tiễn",
		"english_title": "Rocketman",
		"backdrop_path": "/yNd5roZh1HbZb8lJ1ZPRzXNvLnF.jpg",
		"imdb": 7.3,
		"release_date": "2019-05-22",
		"runtime": 121,
		"genre_ids": [
			10402,
			18,
			36
		],
		"hash": "19F244E87DA6E947B229237EA99910646F1595FA",
		"updated": "2021-09-17T05:04:25.01+00:00"
	},
	{
		"id": 935,
		"tmdb_id": 420809,
		"imdb_id": "tt4777008",
		"title": "Tiên Hắc Ám 2",
		"english_title": "Maleficent: Mistress of Evil",
		"backdrop_path": "/lqjNJiwDJzfMqOaiaR9QauscBfp.jpg",
		"imdb": 6.6,
		"release_date": "2019-10-16",
		"runtime": 119,
		"genre_ids": [
			10751,
			14,
			12
		],
		"hash": "AC66DD4247A84C25D85415C7AF8A1CEA19A8E4BB",
		"updated": "2021-09-17T06:24:23.586+00:00"
	},
	{
		"id": 942,
		"tmdb_id": 512196,
		"imdb_id": "tt8155288",
		"title": "Sinh Nhật Chết Chóc 2",
		"english_title": "Happy Death Day 2U",
		"backdrop_path": "/rTFnqSSWreCgRYJ1awI1PLL3dpA.jpg",
		"imdb": 6.2,
		"release_date": "2019-02-13",
		"runtime": 100,
		"genre_ids": [
			35,
			27,
			878
		],
		"hash": "C7FCF9033DEBA4F309631AA89BE64A84C2CBAFB8",
		"updated": "2021-09-17T07:09:40.483+00:00"
	},
	{
		"id": 937,
		"tmdb_id": 619264,
		"imdb_id": "tt8228288",
		"title": "Hố Sâu Đói Khát",
		"english_title": "The Platform",
		"backdrop_path": "/qKluOuGpYnsXILy5tRMmQCRGCHc.jpg",
		"imdb": 7,
		"release_date": "2019-11-08",
		"runtime": 95,
		"genre_ids": [
			18,
			878,
			53
		],
		"hash": "1F1478F56483D6EAF9BAFA08B77BCDB3D7C98C21",
		"updated": "2021-09-17T07:19:48.591+00:00"
	},
	{
		"id": 943,
		"tmdb_id": 398978,
		"imdb_id": "tt1302006",
		"title": "Người Đàn Ông Ireland",
		"english_title": "The Irishman",
		"backdrop_path": "/4P6bqSY4goBnDleDLj7kLupyiW3.jpg",
		"imdb": 7.9,
		"release_date": "2019-11-01",
		"runtime": 209,
		"genre_ids": [
			80,
			18,
			36
		],
		"hash": "90CAFA0040B2EFDD6E7179F5066AE1BD9F2D1799",
		"updated": "2021-09-17T07:21:23.476+00:00"
	},
	{
		"id": 941,
		"tmdb_id": 533444,
		"imdb_id": "tt8652728",
		"title": "Sóng Đời",
		"english_title": "Waves",
		"backdrop_path": "/vT7xQpsw2J5Yz8G2FjxGDr7rYss.jpg",
		"imdb": 7.6,
		"release_date": "2019-11-15",
		"runtime": 136,
		"genre_ids": [
			10749,
			18
		],
		"hash": "5921DB966A5B5AA94FA6791FD9A242FA1800F2B0",
		"updated": "2021-09-17T07:40:17.408+00:00"
	},
	{
		"id": 938,
		"tmdb_id": 475557,
		"imdb_id": "tt7286456",
		"title": "Gã Hề",
		"english_title": "Joker",
		"backdrop_path": "/nxt5320P4XdkCaRb99FEmFYfMh3.jpg",
		"imdb": 8.5,
		"release_date": "2019-10-02",
		"runtime": 122,
		"genre_ids": [
			80,
			53,
			18
		],
		"hash": "BFEA2333B7A7959270B1FD296D7D9632D1AF5713",
		"updated": "2021-09-17T07:43:59.369+00:00"
	},
	{
		"id": 932,
		"tmdb_id": 489999,
		"imdb_id": "tt7668870",
		"title": "Tìm Kiếm",
		"english_title": "Searching",
		"backdrop_path": "/ufcvW6ex4s9ivrkCqOzt0v2O9yX.jpg",
		"imdb": 7.6,
		"release_date": "2018-08-24",
		"runtime": 102,
		"genre_ids": [
			53,
			9648,
			18
		],
		"hash": "EC8D34782B9B89024460D55362656BBAA3143C43",
		"updated": "2021-09-17T12:11:16.935+00:00"
	},
	{
		"id": 934,
		"tmdb_id": 447332,
		"imdb_id": "tt6644200",
		"title": "Vùng Đất Câm Lặng",
		"english_title": "A Quiet Place",
		"backdrop_path": "/qC6ZkvZTNlAdEbDobsdFhha7hnL.jpg",
		"imdb": 7.5,
		"release_date": "2018-04-03",
		"runtime": 91,
		"genre_ids": [
			27,
			18,
			878
		],
		"hash": "6858FDA107A9EC678F9237A4E5A8AB30F9AED200",
		"updated": "2021-09-17T12:21:30.325+00:00"
	},
	{
		"id": 920,
		"tmdb_id": 489925,
		"imdb_id": "tt7014006",
		"title": "Lớp 8",
		"english_title": "Eighth Grade",
		"backdrop_path": "/efZ8oWcR3lkpWLNmaBpaS7iIMNt.jpg",
		"imdb": 7.4,
		"release_date": "2018-01-19",
		"runtime": 94,
		"genre_ids": [
			35,
			18
		],
		"hash": "F2D3D8B087B35F554F6E12F4A988228D329866E3",
		"updated": "2021-09-17T12:23:01.675+00:00"
	},
	{
		"id": 922,
		"tmdb_id": 369972,
		"imdb_id": "tt1213641",
		"title": "Bước Chân Đầu Tiên",
		"english_title": "First Man",
		"backdrop_path": "/yJbvcGEAOqtqLrFcbPE7U6GBXPv.jpg",
		"imdb": 7.3,
		"release_date": "2018-10-11",
		"runtime": 141,
		"genre_ids": [
			36,
			18
		],
		"hash": "5C8EF96FDF6A3B8913B3F5DCCB9EB80751BADA32",
		"updated": "2021-09-17T12:25:49.815+00:00"
	},
	{
		"id": 930,
		"tmdb_id": 268896,
		"imdb_id": "tt2557478",
		"title": "Siêu Đại Chiến Thái Bình Dương: Trỗi Dậy",
		"english_title": "Pacific Rim: Uprising",
		"backdrop_path": "/dGc8JSWo8girXJX98pq0VZelpad.jpg",
		"imdb": 5.6,
		"release_date": "2018-03-21",
		"runtime": 111,
		"genre_ids": [
			28,
			14,
			878,
			12
		],
		"hash": "256410B929595AFD5C7FA611A359C52588573363",
		"updated": "2021-09-17T13:07:48.249+00:00"
	},
	{
		"id": 923,
		"tmdb_id": 445571,
		"imdb_id": "tt2704998",
		"title": "Đêm Chơi Nhớ Đời",
		"english_title": "Game Night",
		"backdrop_path": "/lW2TgMLkmHjOew5Sr6Koqoibpet.jpg",
		"imdb": 6.9,
		"release_date": "2018-02-22",
		"runtime": 100,
		"genre_ids": [
			9648,
			35,
			80
		],
		"hash": "DC572B590306A23DCAB63B46554536FB3FFD5C19",
		"updated": "2021-09-17T13:19:39.188+00:00"
	},
	{
		"id": 928,
		"tmdb_id": 429203,
		"imdb_id": "tt2837574",
		"title": "Bố Già Và Khẩu Súng",
		"english_title": "The Old Man & the Gun",
		"backdrop_path": "/gcoYscnX1etA6Ih8N58pnr4HJfY.jpg",
		"imdb": 6.7,
		"release_date": "2018-09-27",
		"runtime": 94,
		"genre_ids": [
			35,
			80,
			18
		],
		"hash": "64EED8A8E3BA23836DD39F92B9128224569506FF",
		"updated": "2021-09-18T00:23:34.11+00:00"
	},
	{
		"id": 921,
		"tmdb_id": 548352,
		"imdb_id": "tt8986842",
		"title": "Người Quen Xa Lạ",
		"english_title": "Intimate Strangers",
		"backdrop_path": "/sZVNCFeOXBVVGP7nGmuzE2VGU6B.jpg",
		"imdb": 6.8,
		"release_date": "2018-10-31",
		"runtime": 115,
		"genre_ids": [
			18,
			35
		],
		"hash": "A7905229B4C6C6761D281A39F513484CEF16F046",
		"updated": "2021-09-18T01:36:29.627+00:00"
	},
	{
		"id": 925,
		"tmdb_id": 405774,
		"imdb_id": "tt2737304",
		"title": "Lồng Chim",
		"english_title": "Bird Box",
		"backdrop_path": "/2Ormf88lEBhDbE1EzTC25UDJeOZ.jpg",
		"imdb": 6.6,
		"release_date": "2018-12-13",
		"runtime": 124,
		"genre_ids": [
			53,
			18,
			878
		],
		"hash": "8F3948C6D7FF72D973D6F61D726EAD492535B814",
		"updated": "2021-09-18T01:37:07.629+00:00"
	},
	{
		"id": 926,
		"tmdb_id": 399360,
		"imdb_id": "tt4244998",
		"title": "Alpha: Người Thủ Lĩnh",
		"english_title": "Alpha",
		"backdrop_path": "/xkQFYmbM8rKZSaWtRXENywS2tMR.jpg",
		"imdb": 6.7,
		"release_date": "2018-08-17",
		"runtime": 97,
		"genre_ids": [
			12,
			18
		],
		"hash": "1AAFBAC04228B387AFA4F63B2B113B14531942A8",
		"updated": "2021-09-18T01:41:53.893+00:00"
	},
	{
		"id": 933,
		"tmdb_id": 505192,
		"imdb_id": "tt8075192",
		"title": "Gia Đình Đạo Tặc",
		"english_title": "Shoplifters",
		"backdrop_path": "/nHlGsXXwFWAJSKIIwK6iCEY4qhI.jpg",
		"imdb": 7.9,
		"release_date": "2018-06-02",
		"runtime": 121,
		"genre_ids": [
			18,
			80
		],
		"hash": "B50D46D1B7BB3C0D046E2CE48D0ADB348748CFC0",
		"updated": "2021-09-18T01:52:15.741+00:00"
	},
	{
		"id": 924,
		"tmdb_id": 438799,
		"imdb_id": "tt4530422",
		"title": "Chiến Dịch Overlord",
		"english_title": "Overlord",
		"backdrop_path": "/6BoeESBwfqfwijt3QZeoUKoLwa6.jpg",
		"imdb": 6.6,
		"release_date": "2018-11-01",
		"runtime": 110,
		"genre_ids": [
			27,
			10752,
			878
		],
		"hash": "BB63EB9DB905E662F541C457C1E0E1A2B0733A38",
		"updated": "2021-09-18T01:56:03.352+00:00"
	},
	{
		"id": 967,
		"tmdb_id": 181812,
		"imdb_id": "tt2527338",
		"title": "Chiến Tranh Giữa Các Vì Sao 9: Skywalker Trỗi Dậy",
		"english_title": "Star Wars: The Rise of Skywalker",
		"backdrop_path": "/lrVaLGYp6svK8zKd9JLd0TyhEuB.jpg",
		"imdb": 6.6,
		"release_date": "2019-12-18",
		"runtime": 142,
		"genre_ids": [
			28,
			12,
			878
		],
		"hash": "CE42026E6839415CEC7A31B2FD2A3C5EA5B7647F",
		"updated": "2021-09-17T04:44:39.217+00:00"
	},
	{
		"id": 947,
		"tmdb_id": 290859,
		"imdb_id": "tt6450804",
		"title": "Kẻ Hủy Diệt 6: Vận Mệnh Đen Tối",
		"english_title": "Terminator: Dark Fate",
		"backdrop_path": "/kYZlCzi1hksvqLGw13kXStpcBk1.jpg",
		"imdb": 6.2,
		"release_date": "2019-10-23",
		"runtime": 128,
		"genre_ids": [
			28,
			12,
			878
		],
		"hash": "81E4A23C268AD550D28D157BB0C9BFD81FB73F9B",
		"updated": "2021-09-17T04:45:36.896+00:00"
	},
	{
		"id": 953,
		"tmdb_id": 320288,
		"imdb_id": "tt6565702",
		"title": "Dị Nhân 8: Phượng Hoàng Bóng Tối",
		"english_title": "Dark Phoenix",
		"backdrop_path": "/rNgwj5XhpBMfcQn4Jr9tD6s1kfg.jpg",
		"imdb": 5.7,
		"release_date": "2019-06-05",
		"runtime": 114,
		"genre_ids": [
			878,
			28,
			12
		],
		"hash": "3D52FDCAFB57AC6C0D70878ADC3A488CC3B882A3",
		"updated": "2021-09-17T04:46:46.051+00:00"
	},
	{
		"id": 965,
		"tmdb_id": 546554,
		"imdb_id": "tt8946378",
		"title": "Kẻ Đâm Lén",
		"english_title": "Knives Out",
		"backdrop_path": "/id4AHzGdMRTn3hwnR3zJsW1Z6eB.jpg",
		"imdb": 7.9,
		"release_date": "2019-11-27",
		"runtime": 131,
		"genre_ids": [
			35,
			80,
			9648,
			53,
			18
		],
		"hash": "3B2694FB0E0BB41D7FB92C79D7D0CC7B90543A13",
		"updated": "2021-09-17T04:51:58.148+00:00"
	},
	{
		"id": 946,
		"tmdb_id": 466272,
		"imdb_id": "tt7131622",
		"title": "Chuyện ngày xưa ở… Hollywood",
		"english_title": "Once Upon a Time… in Hollywood",
		"backdrop_path": "/hj59t2wo5sYdPW3OSONMHYmAz09.jpg",
		"imdb": 7.6,
		"release_date": "2019-07-24",
		"runtime": 162,
		"genre_ids": [
			35,
			18,
			53
		],
		"hash": "2B68B4DFEE0D1CC403D6B5B7A08E745FA45CB603",
		"updated": "2021-09-17T05:01:00.88+00:00"
	},
	{
		"id": 950,
		"tmdb_id": 479455,
		"imdb_id": "tt2283336",
		"title": "Đặc Vụ Áo Đen: Sứ Mệnh Toàn Cầu",
		"english_title": "Men in Black: International",
		"backdrop_path": "/rar4Qg2OuKfmWA8ol8pmqnyT4M3.jpg",
		"imdb": 5.6,
		"release_date": "2019-06-12",
		"runtime": 115,
		"genre_ids": [
			35,
			878
		],
		"hash": "9858BE06B3DB166ACE914230C5B5DBA23AFE4414",
		"updated": "2021-09-17T05:03:25.55+00:00"
	},
	{
		"id": 954,
		"tmdb_id": 384018,
		"imdb_id": "tt6806448",
		"title": "Quá Nhanh Quá Nguy Hiểm: Hobbs và Shaw",
		"english_title": "Fast & Furious Presents: Hobbs & Shaw",
		"backdrop_path": "/ugHp3jSbf0LlLwRPs6oefmsVNHU.jpg",
		"imdb": 6.4,
		"release_date": "2019-08-01",
		"runtime": 137,
		"genre_ids": [
			28,
			12,
			35
		],
		"hash": "1B0CFCAB42488198FBC4558B6F1F02D57EDECCC5",
		"updated": "2021-09-17T05:05:59.577+00:00"
	},
	{
		"id": 963,
		"tmdb_id": 399579,
		"imdb_id": "tt0437086",
		"title": "Alita: Thiên Thần Chiến Binh",
		"english_title": "Alita: Battle Angel",
		"backdrop_path": "/cnLztHqdz6CWFCpZ0OAWJzyGmK.jpg",
		"imdb": 7.3,
		"release_date": "2019-01-31",
		"runtime": 122,
		"genre_ids": [
			28,
			878,
			12
		],
		"hash": "A00C58D4DA22EB47F3A547AAC1D17A699DAB3FBD",
		"updated": "2021-09-17T05:07:30.943+00:00"
	},
	{
		"id": 957,
		"tmdb_id": 450465,
		"imdb_id": "tt6823368",
		"title": "Bộ Ba Quái Nhân",
		"english_title": "Glass",
		"backdrop_path": "/y8NRZ14bEw6shDIIzZhh6CBOhZo.jpg",
		"imdb": 6.7,
		"release_date": "2019-01-16",
		"runtime": 129,
		"genre_ids": [
			53,
			18,
			878
		],
		"hash": "50DA094C782A3D206A3E2D8EDC36566D754BAA39",
		"updated": "2021-09-17T05:11:39.033+00:00"
	},
	{
		"id": 958,
		"tmdb_id": 505600,
		"imdb_id": "tt1489887",
		"title": "Đêm Trước Lễ Tốt Nghiệp",
		"english_title": "Booksmart",
		"backdrop_path": "/r4AkcQ4yDyWAQCygO0hvVrGM9SL.jpg",
		"imdb": 7.2,
		"release_date": "2019-05-24",
		"runtime": 102,
		"genre_ids": [
			35
		],
		"hash": "F43D8A5931AAC6BE0EFE302E313FDFE4F168C4B6",
		"updated": "2021-09-17T06:20:24.402+00:00"
	},
	{
		"id": 945,
		"tmdb_id": 484641,
		"imdb_id": "tt7456310",
		"title": "Sát Thủ Anna",
		"english_title": "Anna",
		"backdrop_path": "/z6gwxl7C7Psf6CEfggGgJPv3lrl.jpg",
		"imdb": 6.6,
		"release_date": "2019-06-19",
		"runtime": 119,
		"genre_ids": [
			53,
			28
		],
		"hash": "FA344616D94AA4274E452ED3F06E0C31F710E2F4",
		"updated": "2021-09-17T07:08:09.234+00:00"
	},
	{
		"id": 960,
		"tmdb_id": 457335,
		"imdb_id": "tt6902676",
		"title": "Hai Tay Hai Súng",
		"english_title": "Guns Akimbo",
		"backdrop_path": "/89z4wmGVLYLnlCMmSiqODs3FK6u.jpg",
		"imdb": 6.3,
		"release_date": "2019-09-09",
		"runtime": 95,
		"genre_ids": [
			35,
			28
		],
		"hash": "81E624D337AE377A5B5C400D49E6832D5A1F01F1",
		"updated": "2021-09-17T07:11:23.418+00:00"
	},
	{
		"id": 969,
		"tmdb_id": 399361,
		"imdb_id": "tt1488606",
		"title": "Băng Cướp Bất Đắc Dĩ",
		"english_title": "Triple Frontier",
		"backdrop_path": "/dDbZcEWzHwW3reH67omeWlLeBoX.jpg",
		"imdb": 6.4,
		"release_date": "2019-03-06",
		"runtime": 125,
		"genre_ids": [
			28,
			53,
			80,
			12
		],
		"hash": "3F1861A35A9702620F9C721F3522227889D3FFD6",
		"updated": "2021-09-17T07:18:31.256+00:00"
	},
	{
		"id": 964,
		"tmdb_id": 486131,
		"imdb_id": "tt4463894",
		"title": "Gia Đình Thám Tử",
		"english_title": "Shaft",
		"backdrop_path": "/lioccYPAyFtAUhTQrjYiWJnuYd.jpg",
		"imdb": 6.4,
		"release_date": "2019-06-14",
		"runtime": 111,
		"genre_ids": [
			28,
			80
		],
		"hash": "6CBC0193412C7ED1229478D02A6AFFA8B67F397C",
		"updated": "2021-09-17T07:19:21.603+00:00"
	},
	{
		"id": 956,
		"tmdb_id": 559969,
		"imdb_id": "tt9243946",
		"title": "El Camino: Phim Hậu Bản Của \"Tập Làm Người Xấu\"",
		"english_title": "El Camino: A Breaking Bad Movie",
		"backdrop_path": "/kt2ky8yfyKcXyE6EdCWI7cri9dK.jpg",
		"imdb": 7.3,
		"release_date": "2019-10-11",
		"runtime": 123,
		"genre_ids": [
			80,
			18,
			53,
			28
		],
		"hash": "7ED59BECDCD44E00C24C803D71A7F7D01D790331",
		"updated": "2021-09-17T07:20:20.705+00:00"
	},
	{
		"id": 961,
		"tmdb_id": 492188,
		"imdb_id": "tt7653254",
		"title": "Câu Chuyện Hôn Nhân",
		"english_title": "Marriage Story",
		"backdrop_path": "/uS0PuLzD514pcyymRPzwTo1ULvz.jpg",
		"imdb": 7.9,
		"release_date": "2019-11-06",
		"runtime": 137,
		"genre_ids": [
			18
		],
		"hash": "D3F192474721722EB425EB1B22A1FED513596AA3",
		"updated": "2021-09-17T07:20:54.378+00:00"
	},
	{
		"id": 966,
		"tmdb_id": 551332,
		"imdb_id": "tt8404614",
		"title": "Hai Vị Giáo Hoàng",
		"english_title": "The Two Popes",
		"backdrop_path": "/jQpxHT3t6PaugWQPdehwmIgSjNT.jpg",
		"imdb": 7.6,
		"release_date": "2019-11-27",
		"runtime": 125,
		"genre_ids": [
			18,
			35,
			36
		],
		"hash": "3E4FC1ACA759D2443B88EE5666455C93D10CEA93",
		"updated": "2021-09-17T07:23:49.916+00:00"
	},
	{
		"id": 962,
		"tmdb_id": 519010,
		"imdb_id": "tt8291806",
		"title": "Đau Đớn Và Vinh Quang",
		"english_title": "Pain and Glory",
		"backdrop_path": "/5sheidh8vTZNCae9jRquogRt1c9.jpg",
		"imdb": 7.5,
		"release_date": "2019-03-22",
		"runtime": 114,
		"genre_ids": [
			18
		],
		"hash": "0AE711B2A303255EEE4B65E1EF209FB123530D56",
		"updated": "2021-09-17T07:25:52.61+00:00"
	},
	{
		"id": 952,
		"tmdb_id": 454640,
		"imdb_id": "tt6095472",
		"title": "Những Chú Chim Giận Dữ 2",
		"english_title": "The Angry Birds Movie 2",
		"backdrop_path": "/d556j1SrMtHiFlajZY2JwWJvatV.jpg",
		"imdb": 6.4,
		"release_date": "2019-08-02",
		"runtime": 97,
		"genre_ids": [
			16,
			35,
			12,
			10751
		],
		"hash": "2089110917EBB8D82F48961ABA3E6E75977777CD",
		"updated": "2021-09-17T07:28:12.603+00:00"
	},
	{
		"id": 955,
		"tmdb_id": 511987,
		"imdb_id": "tt8364368",
		"title": "Địa Đạo Cá Sấu Tử Thần",
		"english_title": "Crawl",
		"backdrop_path": "/45opDPWU30mrKWq9vGDCud5kmxg.jpg",
		"imdb": 6.1,
		"release_date": "2019-07-11",
		"runtime": 88,
		"genre_ids": [
			53,
			27,
			18
		],
		"hash": "28A29A9696A5FEE3734B231E7058E86E0F068B23",
		"updated": "2021-09-17T07:30:24.406+00:00"
	},
	{
		"id": 948,
		"tmdb_id": 301528,
		"imdb_id": "tt1979376",
		"title": "Câu Chuyện Đồ Chơi 4",
		"english_title": "Toy Story 4",
		"backdrop_path": "/c4ywOrSJ1HxEtWuT9OOG0NAmgDI.jpg",
		"imdb": 7.7,
		"release_date": "2019-06-19",
		"runtime": 100,
		"genre_ids": [
			12,
			16,
			35,
			10751,
			14,
			18
		],
		"hash": "0B9C7DD6E98FBB2965706D3719D846C0F2E1367A",
		"updated": "2021-09-17T07:34:58.688+00:00"
	},
	{
		"id": 944,
		"tmdb_id": 522938,
		"imdb_id": "tt1206885",
		"title": "Rambo: Hồi kết đẫm máu",
		"english_title": "Rambo: Last Blood",
		"backdrop_path": "/5ivHs6giRx3Wt9K9MkQfMe4g7jx.jpg",
		"imdb": 6.1,
		"release_date": "2019-09-19",
		"runtime": 89,
		"genre_ids": [
			28,
			53,
			18
		],
		"hash": "7857CD9BFD755381EA65EBD51B532CA38D13D670",
		"updated": "2021-09-17T07:36:52.231+00:00"
	},
	{
		"id": 980,
		"tmdb_id": 508965,
		"imdb_id": "tt4729430",
		"title": "Klaus",
		"english_title": "Klaus",
		"backdrop_path": "/hDqxDXxwqdCdktYDRyLy1MpyjJZ.jpg",
		"imdb": 8.2,
		"release_date": "2019-11-08",
		"runtime": 96,
		"genre_ids": [
			16,
			10751,
			12,
			35
		],
		"hash": "806D709AB276772C415193B783B44663D4369267",
		"updated": "2021-09-16T06:38:13.385+00:00"
	},
	{
		"id": 975,
		"tmdb_id": 299537,
		"imdb_id": "tt4154664",
		"title": "Đại Úy Marvel",
		"english_title": "Captain Marvel",
		"backdrop_path": "/bhzAR4GuGGICX6bomEblOfCW3Mu.jpg",
		"imdb": 6.8,
		"release_date": "2019-03-06",
		"runtime": 124,
		"genre_ids": [
			28,
			12,
			878
		],
		"hash": "00DE6A0146A8526CB3EA004479B8EAB3B5B40245",
		"updated": "2021-09-17T04:37:15.119+00:00"
	},
	{
		"id": 976,
		"tmdb_id": 458156,
		"imdb_id": "tt6146586",
		"title": "Sát Thủ John Wick 3: Chuẩn Bị Chiến Tranh",
		"english_title": "John Wick: Chapter 3 - Parabellum",
		"backdrop_path": "/7bPej4t6p1yitElhfAZ3ChczlqJ.jpg",
		"imdb": 7.4,
		"release_date": "2019-05-15",
		"runtime": 130,
		"genre_ids": [
			28,
			53,
			80
		],
		"hash": "43D8135EB4EA2036FF1D22D4DCEDED5587A953E0",
		"updated": "2021-09-17T04:39:36.849+00:00"
	},
	{
		"id": 983,
		"tmdb_id": 531428,
		"imdb_id": "tt8613070",
		"title": "Chân Dung Cô Gái Trên Ngọn Lửa",
		"english_title": "Portrait of a Lady on Fire",
		"backdrop_path": "/5nbBtRqfpsWA6jpEsOvtrkyvCsr.jpg",
		"imdb": 8.1,
		"release_date": "2019-06-17",
		"runtime": 120,
		"genre_ids": [
			18,
			10749
		],
		"hash": "A018551A86F7116EAD5E95F97F45297C7D3D152F",
		"updated": "2021-09-17T04:50:14.991+00:00"
	},
	{
		"id": 987,
		"tmdb_id": 329996,
		"imdb_id": "tt3861390",
		"title": "Dumbo: Chú Voi Biết Bay",
		"english_title": "Dumbo",
		"backdrop_path": "/1vKBw0xogBfmCo9nnTEbna93Tdm.jpg",
		"imdb": 6.3,
		"release_date": "2019-03-27",
		"runtime": 112,
		"genre_ids": [
			12,
			10751,
			14
		],
		"hash": "542AFF6B01A9132D8EC7DA14382A8F429E62F77F",
		"updated": "2021-09-17T04:50:57.388+00:00"
	},
	{
		"id": 986,
		"tmdb_id": 515001,
		"imdb_id": "tt2584384",
		"title": "Jojo Thỏ Đế",
		"english_title": "Jojo Rabbit",
		"backdrop_path": "/fNjEw11CfvDliHWBpAD2Izrk3Qx.jpg",
		"imdb": 7.9,
		"release_date": "2019-10-18",
		"runtime": 108,
		"genre_ids": [
			35,
			10752,
			18
		],
		"hash": "1690AFD55A6889963F341417F5E0E05EA1A8749D",
		"updated": "2021-09-17T04:53:48.18+00:00"
	},
	{
		"id": 974,
		"tmdb_id": 512200,
		"imdb_id": "tt7975244",
		"title": "Jumanji - Trò Chơi Kỳ Ảo: Thăng Cấp",
		"english_title": "Jumanji: The Next Level",
		"backdrop_path": "/cKCNNrvbfasHo5X3vPr1mdsr38v.jpg",
		"imdb": 6.7,
		"release_date": "2019-12-04",
		"runtime": 123,
		"genre_ids": [
			12,
			35,
			14
		],
		"hash": "6C595A5EABDEB86650D4A57B570578F19AEBCCB5",
		"updated": "2021-09-17T06:25:07.001+00:00"
	},
	{
		"id": 982,
		"tmdb_id": 458723,
		"imdb_id": "tt6857112",
		"title": "Chúng Ta",
		"english_title": "Us",
		"backdrop_path": "/veJUV2d3PLuEOwSNsPTwJdb6qKu.jpg",
		"imdb": 6.8,
		"release_date": "2019-03-14",
		"runtime": 116,
		"genre_ids": [
			53,
			27,
			9648
		],
		"hash": "BAFFBAC8F71F19CAA938D521046CEC37BEB41FE0",
		"updated": "2021-09-17T06:34:25.279+00:00"
	},
	{
		"id": 977,
		"tmdb_id": 515195,
		"imdb_id": "tt8079248",
		"title": "Ngày Hôm Qua",
		"english_title": "Yesterday",
		"backdrop_path": "/sAuRn33B7Cd7sPo0w4BwNeKc2Xu.jpg",
		"imdb": 6.8,
		"release_date": "2019-06-27",
		"runtime": 116,
		"genre_ids": [
			10402,
			35,
			10749,
			14
		],
		"hash": "9CDC6EE20AD52FF2BF35BF24E1A3D5103C01A9BA",
		"updated": "2021-09-17T06:35:16.113+00:00"
	},
	{
		"id": 971,
		"tmdb_id": 412117,
		"imdb_id": "tt5113040",
		"title": "Đẳng Cấp Thú Cưng 2",
		"english_title": "The Secret Life of Pets 2",
		"backdrop_path": "/ayQIoDsJQDIttEekqo7R110ebsR.jpg",
		"imdb": 6.5,
		"release_date": "2019-05-24",
		"runtime": 86,
		"genre_ids": [
			12,
			16,
			35,
			10751
		],
		"hash": "806AE4FCC53433124A4B9E1A821D766FC35A2078",
		"updated": "2021-09-17T07:10:16.198+00:00"
	},
	{
		"id": 978,
		"tmdb_id": 521029,
		"imdb_id": "tt8350360",
		"title": "Annabelle: Ác Quỷ Trở Về",
		"english_title": "Annabelle Comes Home",
		"backdrop_path": "/rKySTdyKSZMXlw9RK3MuQzXzYz8.jpg",
		"imdb": 5.9,
		"release_date": "2019-06-26",
		"runtime": 106,
		"genre_ids": [
			27,
			53,
			9648
		],
		"hash": "BE33D8F586C08975CFA5B2F5DB0E9F62CA49D247",
		"updated": "2021-09-17T07:10:51.535+00:00"
	},
	{
		"id": 991,
		"tmdb_id": 166428,
		"imdb_id": "tt2386490",
		"title": "Bí Kíp Luyện Rồng: Vùng Đất Bí Ẩn",
		"english_title": "How to Train Your Dragon: The Hidden World",
		"backdrop_path": "/bmoWzpkVKhmioBDldDSkFuDyiB0.jpg",
		"imdb": 7.5,
		"release_date": "2019-01-03",
		"runtime": 104,
		"genre_ids": [
			16,
			10751,
			12
		],
		"hash": "E371A905F5DEF9162DEA8418DAA26623F956972A",
		"updated": "2021-09-17T07:17:51.663+00:00"
	},
	{
		"id": 972,
		"tmdb_id": 509967,
		"imdb_id": "tt8106534",
		"title": "Đại Chiến Thế Giới Ngầm",
		"english_title": "6 Underground",
		"backdrop_path": "/eFw5YSorHidsajLTayo1noueIxI.jpg",
		"imdb": 6.1,
		"release_date": "2019-12-13",
		"runtime": 128,
		"genre_ids": [
			28,
			53
		],
		"hash": "331794EC49DB1698EE48F1DBDD7A5942E2FC7C7B",
		"updated": "2021-09-17T07:19:59.414+00:00"
	},
	{
		"id": 979,
		"tmdb_id": 431693,
		"imdb_id": "tt5814534",
		"title": "Điệp Viên Ẩn Danh",
		"english_title": "Spies in Disguise",
		"backdrop_path": "/nGklNSmiCcDHKGeoAYvv7zINTO7.jpg",
		"imdb": 6.8,
		"release_date": "2019-12-04",
		"runtime": 102,
		"genre_ids": [
			16,
			28,
			12,
			35,
			10751
		],
		"hash": "FC4DDA455EBECB5CADBC0FC8A26D7334EC7FDF7F",
		"updated": "2021-09-17T07:25:26.268+00:00"
	},
	{
		"id": 984,
		"tmdb_id": 280217,
		"imdb_id": "tt3513498",
		"title": "Câu Chuyện Lego 2",
		"english_title": "The Lego Movie 2: The Second Part",
		"backdrop_path": "/cJTnOO8BewJ5uvzQAZOeVoUWAzi.jpg",
		"imdb": 6.6,
		"release_date": "2019-01-26",
		"runtime": 106,
		"genre_ids": [
			28,
			12,
			16,
			35,
			10751
		],
		"hash": "60127DA14851E525983910E7BB4FA726802FB912",
		"updated": "2021-09-17T07:26:29.263+00:00"
	},
	{
		"id": 985,
		"tmdb_id": 373571,
		"imdb_id": "tt3741700",
		"title": "Chúa Tể Godzilla: Đế Vương Bất Tử",
		"english_title": "Godzilla: King of the Monsters",
		"backdrop_path": "/zQQloXsTh7wBUD129StE2ULjkUc.jpg",
		"imdb": 6,
		"release_date": "2019-05-29",
		"runtime": 132,
		"genre_ids": [
			878,
			28
		],
		"hash": "0DDBB442E9812A60FBEE21B102BF4E669A05D667",
		"updated": "2021-09-17T07:28:48.143+00:00"
	},
	{
		"id": 988,
		"tmdb_id": 568160,
		"imdb_id": "tt9426210",
		"title": "Đứa Con Của Thời Tiết",
		"english_title": "Weathering with You",
		"backdrop_path": "/60PhaKOXAC5ZYrzyeAmgjMBm5Ph.jpg",
		"imdb": 7.5,
		"release_date": "2019-06-19",
		"runtime": 112,
		"genre_ids": [
			16,
			10749,
			14,
			18
		],
		"hash": "67E3C6794209F64EAC5355ECC09264D42F7562A0",
		"updated": "2021-09-17T07:31:12.24+00:00"
	},
	{
		"id": 992,
		"tmdb_id": 522162,
		"imdb_id": "tt6924650",
		"title": "Trận Chiến Midway",
		"english_title": "Midway",
		"backdrop_path": "/5znrTCVD2qWX59IhvdKMgM6SIaC.jpg",
		"imdb": 6.7,
		"release_date": "2019-11-06",
		"runtime": 138,
		"genre_ids": [
			10752,
			36,
			28,
			18
		],
		"hash": "B31C5ACDFD0C9494BD2E5C8B4643DAAAC5F9DE80",
		"updated": "2021-09-17T07:35:30.168+00:00"
	},
	{
		"id": 973,
		"tmdb_id": 568091,
		"imdb_id": "tt4332232",
		"title": "Rạn Vỡ",
		"english_title": "Fractured",
		"backdrop_path": "/xaA40kSRy4liGR015hwsg4OU8oD.jpg",
		"imdb": 6.4,
		"release_date": "2019-09-22",
		"runtime": 99,
		"genre_ids": [
			53
		],
		"hash": "5DE801D7AF03100D1984298F7ABC89FD857FB3C5",
		"updated": "2021-09-17T07:36:20.858+00:00"
	},
	{
		"id": 970,
		"tmdb_id": 475303,
		"imdb_id": "tt7139936",
		"title": "Chuyện Ngày Mưa Ở New York",
		"english_title": "A Rainy Day in New York",
		"backdrop_path": "/j1juayOewO4TL3kKP5e6o3AHsJx.jpg",
		"imdb": 6.5,
		"release_date": "2019-07-26",
		"runtime": 92,
		"genre_ids": [
			35,
			10749
		],
		"hash": "ACCB9D73FCF8EDF5C084BCD0EA2BBD0EE0223CFB",
		"updated": "2021-09-17T07:38:58.389+00:00"
	},
	{
		"id": 996,
		"tmdb_id": 530915,
		"imdb_id": "tt8579674",
		"title": "Thế Chiến 1917",
		"english_title": "1917",
		"backdrop_path": "/tJgmraUAmVlJPlq72yC76tKDyC4.jpg",
		"imdb": 8.3,
		"release_date": "2019-12-25",
		"runtime": 119,
		"genre_ids": [
			10752,
			18,
			28,
			53
		],
		"hash": "EE5240D6A3376B2733430B30F7889B11F6EEB033",
		"updated": "2021-09-15T03:11:26.264+00:00"
	},
	{
		"id": 1007,
		"tmdb_id": 554600,
		"imdb_id": "tt8291224",
		"title": "Biệt Đội Chống Khủng Bố",
		"english_title": "Uri: The Surgical Strike",
		"backdrop_path": "/pzcXrOcKLQjVo1B2wMx1HOpwudF.jpg",
		"imdb": 8.3,
		"release_date": "2019-01-11",
		"runtime": 138,
		"genre_ids": [
			28,
			18,
			10752
		],
		"hash": "885D2C87E91EE507C3150CB3C6839401C10C26C2",
		"updated": "2021-09-16T06:40:20.557+00:00"
	},
	{
		"id": 1001,
		"tmdb_id": 504949,
		"imdb_id": "tt7984766",
		"title": "The King",
		"english_title": "The King",
		"backdrop_path": "/uX4ppkaQfp8oZxBAcA8X9PIs0xW.jpg",
		"imdb": 7.2,
		"release_date": "2019-10-11",
		"runtime": 140,
		"genre_ids": [
			18,
			36,
			10752
		],
		"hash": "BF29332808E858432E8799B2CB08D15A029F3F70",
		"updated": "2021-09-17T02:10:39.256+00:00"
	},
	{
		"id": 1017,
		"tmdb_id": 575774,
		"imdb_id": "tt8508734",
		"title": "Nhà Của Hắn",
		"english_title": "His House",
		"backdrop_path": "/7uQb0Sm7b9kfyYxAG3qLklfju0g.jpg",
		"imdb": 6.5,
		"release_date": "2020-01-27",
		"runtime": 93,
		"genre_ids": [
			18,
			27,
			53
		],
		"hash": "46CE04C6850B0E3FFEA5F1DCDE0F45BD1527FEBA",
		"updated": "2021-09-17T03:25:26.401+00:00"
	},
	{
		"id": 1013,
		"tmdb_id": 429617,
		"imdb_id": "tt6320628",
		"title": "Người Nhện: Xa Nhà",
		"english_title": "Spider-Man: Far from Home",
		"backdrop_path": "/vA4GjP2AVhx5zwKzJdh33PDp3J9.jpg",
		"imdb": 7.5,
		"release_date": "2019-06-28",
		"runtime": 129,
		"genre_ids": [
			28,
			12,
			878
		],
		"hash": "510AADAA88CA9473470CA31C7696977C5BE57DEF",
		"updated": "2021-09-17T04:36:30.978+00:00"
	},
	{
		"id": 999,
		"tmdb_id": 420817,
		"imdb_id": "tt6139732",
		"title": "Aladdin và Cây Đèn Thần",
		"english_title": "Aladdin",
		"backdrop_path": "/fRQtk23AQV5uj2sIoJhWCqt37qW.jpg",
		"imdb": 6.9,
		"release_date": "2019-05-22",
		"runtime": 128,
		"genre_ids": [
			12,
			14,
			10749,
			10751
		],
		"hash": "E1AF5F59F021775254627EC1D9A861695DC20B0E",
		"updated": "2021-09-17T04:38:13.426+00:00"
	},
	{
		"id": 1006,
		"tmdb_id": 549559,
		"imdb_id": "tt8760684",
		"title": "Tàu Du Hành Vũ Trụ Apollo 11",
		"english_title": "Apollo 11",
		"backdrop_path": "/fATfqIPAhfqVt0xxd1uJBHjxwXg.jpg",
		"imdb": 8.2,
		"release_date": "2019-03-01",
		"runtime": 93,
		"genre_ids": [
			99,
			36
		],
		"hash": "CC4124E362A87E3776397753DDB12182D63C8B70",
		"updated": "2021-09-17T04:46:11.115+00:00"
	},
	{
		"id": 1003,
		"tmdb_id": 359724,
		"imdb_id": "tt1950186",
		"title": "Cuộc Đua Lịch Sử",
		"english_title": "Ford v Ferrari",
		"backdrop_path": "/jy1Q0sKQGNaSfNqAkvE6DCAfdKz.jpg",
		"imdb": 8.1,
		"release_date": "2019-11-13",
		"runtime": 153,
		"genre_ids": [
			18,
			28,
			36
		],
		"hash": "2361C5A76F5904B6A781A8B61DE3D98F0641BBFE",
		"updated": "2021-09-17T04:49:20.456+00:00"
	},
	{
		"id": 1012,
		"tmdb_id": 503919,
		"imdb_id": "tt7984734",
		"title": "The Lighthouse",
		"english_title": "The Lighthouse",
		"backdrop_path": "/xkh1tzewXSOfJqGk6Iafu2qM1QP.jpg",
		"imdb": 7.5,
		"release_date": "2019-10-18",
		"runtime": 109,
		"genre_ids": [
			18,
			14,
			53,
			27
		],
		"hash": "D5DF4FB3C3BC5577DE1129AE43A82FB1D292DA7A",
		"updated": "2021-09-17T05:01:23.597+00:00"
	},
	{
		"id": 997,
		"tmdb_id": 330457,
		"imdb_id": "tt4520988",
		"title": "Nữ Hoàng Băng Giá II",
		"english_title": "Frozen II",
		"backdrop_path": "/xD7yQyIZTU56OhzIjEa6FhD66Pe.jpg",
		"imdb": 6.9,
		"release_date": "2019-11-20",
		"runtime": 103,
		"genre_ids": [
			10751,
			16,
			12,
			35,
			14,
			10402
		],
		"hash": "6C73EB4F6F62CACB7D8BA6872F849D7658BE3061",
		"updated": "2021-09-17T05:01:47.08+00:00"
	},
	{
		"id": 995,
		"tmdb_id": 530385,
		"imdb_id": "tt8772262",
		"title": "Lễ Hội Đẫm Máu",
		"english_title": "Midsommar",
		"backdrop_path": "/twHJbKdaMYjbsDwpHzXzQlCLXvF.jpg",
		"imdb": 7.1,
		"release_date": "2019-07-03",
		"runtime": 148,
		"genre_ids": [
			27,
			18,
			9648
		],
		"hash": "8A36EB1EB22437ACF3E55CF4F169428EA42C375D",
		"updated": "2021-09-17T06:21:07.568+00:00"
	},
	{
		"id": 1014,
		"tmdb_id": 420818,
		"imdb_id": "tt6105098",
		"title": "Vua Sư Tử",
		"english_title": "The Lion King",
		"backdrop_path": "/27Cdsc6MiMdVgzHyOiZdatvr8KH.jpg",
		"imdb": 6.9,
		"release_date": "2019-07-12",
		"runtime": 118,
		"genre_ids": [
			12,
			10751,
			16
		],
		"hash": "F4C231734DF63E05D214B08308D2EF93210C1858",
		"updated": "2021-09-17T06:34:51.862+00:00"
	},
	{
		"id": 998,
		"tmdb_id": 480414,
		"imdb_id": "tt4913966",
		"title": "Mẹ Ma Than Khóc La Llorona",
		"english_title": "The Curse of La Llorona",
		"backdrop_path": "/6EGFXfLCYzCZJULx8Lp7xnK7ZYF.jpg",
		"imdb": 5.3,
		"release_date": "2019-04-17",
		"runtime": 93,
		"genre_ids": [
			53,
			27,
			9648
		],
		"hash": "2E468D7A7737086B53BFCDF6F5216247A2C4CFED",
		"updated": "2021-09-17T07:16:59.702+00:00"
	},
	{
		"id": 1011,
		"tmdb_id": 459992,
		"imdb_id": "tt2139881",
		"title": "Yêu Nhầm Sếp Bự",
		"english_title": "Long Shot",
		"backdrop_path": "/ijrjl7w9dTMl0bepXkaksy1H8OF.jpg",
		"imdb": 6.8,
		"release_date": "2019-05-02",
		"runtime": 125,
		"genre_ids": [
			35,
			10749
		],
		"hash": "7019D584301272BB2A43DB8E1CFAD69E7C309DA9",
		"updated": "2021-09-17T07:17:22.504+00:00"
	},
	{
		"id": 1004,
		"tmdb_id": 586461,
		"imdb_id": "tt8372298",
		"title": "Nuốt Chửng",
		"english_title": "Swallow",
		"backdrop_path": "/jup3DX9TiIUgsSKaucoN3YPMdo8.jpg",
		"imdb": 6.5,
		"release_date": "2019-04-28",
		"runtime": 96,
		"genre_ids": [
			18,
			53,
			27
		],
		"hash": "B8F4B3CA58C6BFC68F65EEAEBB357A6CBC26B0CF",
		"updated": "2021-09-17T07:22:10.167+00:00"
	},
	{
		"id": 1005,
		"tmdb_id": 453405,
		"imdb_id": "tt1025100",
		"title": "Đàn Ông Song Tử",
		"english_title": "Gemini Man",
		"backdrop_path": "/igLrkzTS9fvEcWx3SPu6hFjS1ik.jpg",
		"imdb": 5.7,
		"release_date": "2019-10-02",
		"runtime": 117,
		"genre_ids": [
			878,
			28,
			18,
			53
		],
		"hash": "BC55FD6E26269073A158328F6B50D99D2C32F5FC",
		"updated": "2021-09-17T07:23:15.591+00:00"
	},
	{
		"id": 1008,
		"tmdb_id": 606856,
		"imdb_id": "tt5116302",
		"title": "Chú Chó Togo",
		"english_title": "Togo",
		"backdrop_path": "/6Yd64bSqrhBTuaWZti4nItoY6vu.jpg",
		"imdb": 8,
		"release_date": "2019-12-20",
		"runtime": 113,
		"genre_ids": [
			12,
			10751
		],
		"hash": "AC8DF63C8E9D3AE615951A9ADBF00BBA9B54A106",
		"updated": "2021-09-17T07:27:44.548+00:00"
	},
	{
		"id": 1015,
		"tmdb_id": 431580,
		"imdb_id": "tt6324278",
		"title": "Người Tuyết Bé Nhỏ",
		"english_title": "Abominable",
		"backdrop_path": "/dsA4i5JGkAaTkuGoAUcqtyZr979.jpg",
		"imdb": 7,
		"release_date": "2019-09-19",
		"runtime": 97,
		"genre_ids": [
			10751,
			16,
			12,
			35
		],
		"hash": "8A83DE40FC438CBF4D9C99E02351D1BAF32D6DBA",
		"updated": "2021-09-17T07:24:53.924+00:00"
	},
	{
		"id": 993,
		"tmdb_id": 501170,
		"imdb_id": "tt5606664",
		"title": "Kí Ức Kinh Hoàng",
		"english_title": "Doctor Sleep",
		"backdrop_path": "/3JdojU6VMfs1UFgery1eEN1yfHM.jpg",
		"imdb": 7.3,
		"release_date": "2019-10-30",
		"runtime": 152,
		"genre_ids": [
			27,
			18,
			14,
			53
		],
		"hash": "12269BEACC94FA3D768D3B0604E4899A4DB34A39",
		"updated": "2021-09-17T07:29:47.798+00:00"
	},
	{
		"id": 1016,
		"tmdb_id": 567609,
		"imdb_id": "tt7798634",
		"title": "Trò Chơi Giết Người",
		"english_title": "Ready or Not",
		"backdrop_path": "/pSSq9EyTm8Wh9Sfhshxw0TzRGte.jpg",
		"imdb": 6.8,
		"release_date": "2019-08-21",
		"runtime": 95,
		"genre_ids": [
			27,
			53,
			35
		],
		"hash": "79C8998A00804518206026E9B1D5603E2D4D10F3",
		"updated": "2021-09-17T07:30:51.419+00:00"
	},
	{
		"id": 994,
		"tmdb_id": 449924,
		"imdb_id": "tt2076298",
		"title": "Diệp Vấn 4: Hồi Cuối",
		"english_title": "Ip Man 4: The Finale",
		"backdrop_path": "/2o8rxEVmB1sjzZg7uFl1jxFwb5J.jpg",
		"imdb": 7,
		"release_date": "2019-12-19",
		"runtime": 107,
		"genre_ids": [
			28,
			18,
			36
		],
		"hash": "99995788F7810F02A29E79C558410674E107B54E",
		"updated": "2021-09-17T07:38:05.176+00:00"
	},
	{
		"id": 1010,
		"tmdb_id": 487672,
		"imdb_id": "tt7167686",
		"title": "Triều Đại Của Siêu Nhân",
		"english_title": "Reign of the Supermen",
		"backdrop_path": "/d7vEQilXsgvikcqYHl2BOcQHmFg.jpg",
		"imdb": 6.8,
		"release_date": "2019-01-10",
		"runtime": 87,
		"genre_ids": [
			878,
			16,
			28
		],
		"hash": "969E7690114CCD6F7F8B4E70B7A85E52D0E54EBE",
		"updated": "2021-09-17T07:39:22.455+00:00"
	},
	{
		"id": 1009,
		"tmdb_id": 514999,
		"imdb_id": "tt1618434",
		"title": "Bí Ẩn Sát Nhân",
		"english_title": "Murder Mystery",
		"backdrop_path": "/nw78XYq8uN5ByuuV1iaGVtsaTwF.jpg",
		"imdb": 6,
		"release_date": "2019-05-25",
		"runtime": 97,
		"genre_ids": [
			35
		],
		"hash": "8C730517FD5FFBBEB520FC0FB615216B959F1C48",
		"updated": "2021-09-17T07:39:51.493+00:00"
	},
	{
		"id": 1029,
		"tmdb_id": 737157,
		"imdb_id": "tt8618654",
		"title": "Hôn Lên Mạch Đất",
		"english_title": "Kiss the Ground",
		"backdrop_path": "/7tjVjvvbv8HgbsLrF9BeMkC2F0f.jpg",
		"imdb": 8.3,
		"release_date": "2020-09-22",
		"runtime": 85,
		"genre_ids": [
			99
		],
		"hash": "8E414ACD280E586E4660C93A2A892A4F1E81BAF8",
		"updated": "2021-09-16T04:43:12.261+00:00"
	},
	{
		"id": 1023,
		"tmdb_id": 524047,
		"imdb_id": "tt7737786",
		"title": "Greenland: Thảm Họa Thiên Thạch",
		"english_title": "Greenland",
		"backdrop_path": "/nNinYyiKzsGin0Qt55elelP1wSi.jpg",
		"imdb": 6.4,
		"release_date": "2020-07-29",
		"runtime": 120,
		"genre_ids": [
			28,
			53
		],
		"hash": "22B3185CE29E4DF9AAE9CA7B409ED82FE1136BF3",
		"updated": "2021-09-16T10:49:20.208+00:00"
	},
	{
		"id": 1018,
		"tmdb_id": 508442,
		"imdb_id": "tt2948372",
		"title": "Cuộc Sống Nhiệm Màu",
		"english_title": "Soul",
		"backdrop_path": "/7EslmAX1Pz0HGwpa8hnVAqiOWf9.jpg",
		"imdb": 8.1,
		"release_date": "2020-12-25",
		"runtime": 101,
		"genre_ids": [
			10751,
			16,
			35,
			18,
			10402,
			14
		],
		"hash": "B25CD5B511F114C6F4E278269E38D0257B6CD8A1",
		"updated": "2021-09-16T10:51:34.275+00:00"
	},
	{
		"id": 1030,
		"tmdb_id": 500840,
		"imdb_id": "tt7939766",
		"title": "Có Chăng Nên Chấm Dứt",
		"english_title": "I'm Thinking of Ending Things",
		"backdrop_path": "/s9OgnhLkgpKvdXTN6iQKqY0LJ8E.jpg",
		"imdb": 6.6,
		"release_date": "2020-08-28",
		"runtime": 135,
		"genre_ids": [
			18,
			53
		],
		"hash": "53652E8A76782C71B4648CAA6261049907FC5577",
		"updated": "2021-09-17T03:36:47.14+00:00"
	},
	{
		"id": 1022,
		"tmdb_id": 581032,
		"imdb_id": "tt6878306",
		"title": "Chuyến Đi Định Mệnh",
		"english_title": "News of the World",
		"backdrop_path": "/6tRn1C3LFfVPClJ7If3tR4KcwDr.jpg",
		"imdb": 6.8,
		"release_date": "2020-12-25",
		"runtime": 118,
		"genre_ids": [
			28,
			12,
			18,
			37
		],
		"hash": "4EA9FCF7397310D6A8E5044A1F3233AFD3DCADAE",
		"updated": "2021-09-16T11:11:53.358+00:00"
	},
	{
		"id": 1032,
		"tmdb_id": 497582,
		"imdb_id": "tt7846844",
		"title": "Nữ Thám Tử Enola Holmes",
		"english_title": "Enola Holmes",
		"backdrop_path": "/9Vs7ybqN2Ij2TzTjabWEFdKbm6G.jpg",
		"imdb": 6.6,
		"release_date": "2020-09-23",
		"runtime": 123,
		"genre_ids": [
			80,
			18,
			9648
		],
		"hash": "5AAEB916ED2150247C173569221E9DEAAF153902",
		"updated": "2021-09-17T03:37:30.262+00:00"
	},
	{
		"id": 1025,
		"tmdb_id": 581859,
		"imdb_id": "tt9777644",
		"title": "Năm Chiến Hữu",
		"english_title": "Da 5 Bloods",
		"backdrop_path": "/b0xLmHoIx9V1pBojWzUr9i9rZNS.jpg",
		"imdb": 6.5,
		"release_date": "2020-06-12",
		"runtime": 156,
		"genre_ids": [
			10752,
			18
		],
		"hash": "E42E1BF48016DF6E83C48075766A78610909F31C",
		"updated": "2021-09-17T03:38:27.432+00:00"
	},
	{
		"id": 1039,
		"tmdb_id": 743601,
		"imdb_id": "tt12987894",
		"title": "Án Mạng Nước Mỹ: Gia Đình Hàng Xóm",
		"english_title": "American Murder: The Family Next Door",
		"backdrop_path": "/4ItQDa3lUhXxJGoJkBbUG06tnJr.jpg",
		"imdb": 7.2,
		"release_date": "2020-09-30",
		"runtime": 83,
		"genre_ids": [
			99,
			9648,
			80
		],
		"hash": "EC416FC957BF50505A2D31AAFC74253E09CD6622",
		"updated": "2021-09-17T03:41:08.567+00:00"
	},
	{
		"id": 1026,
		"tmdb_id": 492008,
		"imdb_id": "tt7035004",
		"title": "Kiếm Khách",
		"english_title": "The Swordsman",
		"backdrop_path": "/odznoi0el0i4ZxkuAJNFJ5WmIuc.jpg",
		"imdb": 6.9,
		"release_date": "2020-09-23",
		"runtime": 101,
		"genre_ids": [
			28
		],
		"hash": "EF83772733C234A0A1992D4BAF67CD68008CA34C",
		"updated": "2021-09-17T03:54:20.798+00:00"
	},
	{
		"id": 1038,
		"tmdb_id": 594718,
		"imdb_id": "tt11905962",
		"title": "Quái Vật Săn Đêm",
		"english_title": "Sputnik",
		"backdrop_path": "/u7k09ZbD3pnstXMDcmTxTX7HYHd.jpg",
		"imdb": 6.4,
		"release_date": "2020-09-08",
		"runtime": 113,
		"genre_ids": [
			878,
			18,
			27
		],
		"hash": "336CC47406DB9F085F2BAB9FEBD1F8408E662B3D",
		"updated": "2021-09-17T04:02:54.986+00:00"
	},
	{
		"id": 1024,
		"tmdb_id": 723072,
		"imdb_id": "tt12749596",
		"title": "Phòng Chat Quỷ Ám",
		"english_title": "Host",
		"backdrop_path": "/hDoVYWwXBTlSYTPZCZvcfH9AgDn.jpg",
		"imdb": 6.5,
		"release_date": "2020-12-04",
		"runtime": 56,
		"genre_ids": [
			27,
			9648
		],
		"hash": "0908E98673B4E902A0C22DBED344906FB6E6F9E8",
		"updated": "2021-09-17T04:03:27.606+00:00"
	},
	{
		"id": 1040,
		"tmdb_id": 446893,
		"imdb_id": "tt6587640",
		"title": "Quỷ Lùn Tinh Nghịch: Chuyến Lưu Diễn Thế Giới",
		"english_title": "Trolls World Tour",
		"backdrop_path": "/1sdTzGEGR72gVozO4T6g50JdRm1.jpg",
		"imdb": 6.1,
		"release_date": "2020-03-11",
		"runtime": 90,
		"genre_ids": [
			16,
			10751,
			35,
			14,
			12,
			10402
		],
		"hash": "FAF9E12C73DB982266BB3178A2CD531FCCA3E1A8",
		"updated": "2021-09-17T04:05:30.49+00:00"
	},
	{
		"id": 1034,
		"tmdb_id": 508439,
		"imdb_id": "tt7146812",
		"title": "Truy Tìm Phép Thuật",
		"english_title": "Onward",
		"backdrop_path": "/1eKOlhpIH1LMfxOP4YTasldKwiI.jpg",
		"imdb": 7.4,
		"release_date": "2020-02-29",
		"runtime": 103,
		"genre_ids": [
			16,
			10751,
			12,
			35,
			14
		],
		"hash": "BFCAA877D9A136CB3BB9AC33F590C384CEB7B994",
		"updated": "2021-09-17T04:04:42.147+00:00"
	},
	{
		"id": 1041,
		"tmdb_id": 618344,
		"imdb_id": "tt11079148",
		"title": "Liên Minh Công Lý Bóng Đêm: Cuộc Chiến Apokolips",
		"english_title": "Justice League Dark: Apokolips War",
		"backdrop_path": "/ygCVyAfj3xFu1lzma3QUftAttEb.jpg",
		"imdb": 7.8,
		"release_date": "2020-05-05",
		"runtime": 90,
		"genre_ids": [
			16,
			28,
			12,
			14,
			878
		],
		"hash": "F25B44A4D94A1B4278A860FC8CBBF2E697DAC6A0",
		"updated": "2021-09-17T04:06:03.678+00:00"
	},
	{
		"id": 1027,
		"tmdb_id": 587792,
		"imdb_id": "tt9484998",
		"title": "Mở Mắt Thấy Hôm Qua",
		"english_title": "Palm Springs",
		"backdrop_path": "/ybBnaA3Yh0tG6z78bDvtnVLwZcb.jpg",
		"imdb": 7.4,
		"release_date": "2020-07-10",
		"runtime": 90,
		"genre_ids": [
			35,
			10749,
			14,
			9648,
			878
		],
		"hash": "A6F2C735533600DF4425E279C828B4B30F01E1E9",
		"updated": "2021-09-17T04:06:36.945+00:00"
	},
	{
		"id": 1035,
		"tmdb_id": 575776,
		"imdb_id": "tt7557108",
		"title": "Nữ Y Tá Cuồng Tín",
		"english_title": "Saint Maud",
		"backdrop_path": "/rXMADlYrK578PZFG2fId65YmxnA.jpg",
		"imdb": 6.7,
		"release_date": "2020-10-09",
		"runtime": 85,
		"genre_ids": [
			18,
			27,
			9648
		],
		"hash": "3E09E31D6D677A38207EA1F59A2EADB2FD165C29",
		"updated": "2021-09-17T04:07:11.721+00:00"
	},
	{
		"id": 1037,
		"tmdb_id": 558582,
		"imdb_id": "tt9231040",
		"title": "Chú Bò Đầu Tiên",
		"english_title": "First Cow",
		"backdrop_path": "/uOEgO7wZkrpDYPesojITaTkKZFn.jpg",
		"imdb": 7.1,
		"release_date": "2020-03-06",
		"runtime": 122,
		"genre_ids": [
			18,
			37,
			36
		],
		"hash": "CF9E93292F7087742696153379E66310552FEED2",
		"updated": "2021-09-17T04:09:10.25+00:00"
	},
	{
		"id": 1033,
		"tmdb_id": 556984,
		"imdb_id": "tt1070874",
		"title": "Phiên Tòa Chicago 7",
		"english_title": "The Trial of the Chicago 7",
		"backdrop_path": "/v8Nf6Y1qL1Q3PWTBezXNPPaXqza.jpg",
		"imdb": 7.8,
		"release_date": "2020-09-25",
		"runtime": 130,
		"genre_ids": [
			18,
			36,
			53
		],
		"hash": "DB32D35023A1276435D00916729AF4453A464140",
		"updated": "2021-09-17T04:13:48.47+00:00"
	},
	{
		"id": 1031,
		"tmdb_id": 506281,
		"imdb_id": "tt9738716",
		"title": "Thế Giới Sẽ Đến",
		"english_title": "The World to Come",
		"backdrop_path": "/eIcMFyHJPydabnRfhw6MsSkTupe.jpg",
		"imdb": 6.2,
		"release_date": "2020-09-06",
		"runtime": 105,
		"genre_ids": [
			18,
			10749
		],
		"hash": "5E0FD844E83242EFEB33039CB9FC25631079036B",
		"updated": "2021-09-17T04:14:24.659+00:00"
	},
	{
		"id": 1020,
		"tmdb_id": 594328,
		"imdb_id": "tt1817232",
		"title": "Phineas và Ferb: Candace Chống Lại Cả Vũ Trụ",
		"english_title": "Phineas and Ferb the Movie: Candace Against the Universe",
		"backdrop_path": "/aTMufnE3EjO61H60qqYp1cKgp96.jpg",
		"imdb": 7.1,
		"release_date": "2020-08-28",
		"runtime": 84,
		"genre_ids": [
			16,
			878,
			35,
			10402,
			10751,
			12,
			10770
		],
		"hash": "FD8DDD8CCE84C97024A90968B9DDCD9ECDD97070",
		"updated": "2021-09-17T04:16:16.276+00:00"
	},
	{
		"id": 1036,
		"tmdb_id": 522241,
		"imdb_id": "tt8368512",
		"title": "Điệp Vụ Hạt Nhân",
		"english_title": "The Courier",
		"backdrop_path": "/lUwd90YMdzRZCGsiXyMZhXIlvV9.jpg",
		"imdb": 7.1,
		"release_date": "2020-09-27",
		"runtime": 112,
		"genre_ids": [
			18,
			53
		],
		"hash": "8EB5F49F925B6742F342E70B4FBEE689E7BC6AE3",
		"updated": "2021-09-17T04:17:01.397+00:00"
	},
	{
		"id": 1021,
		"tmdb_id": 458576,
		"imdb_id": "tt6475714",
		"title": "Thợ Săn Quái Vật",
		"english_title": "Monster Hunter",
		"backdrop_path": "/2LwPUWJLrXqOKyURmaD6DsUrFZl.jpg",
		"imdb": 5.3,
		"release_date": "2020-12-03",
		"runtime": 104,
		"genre_ids": [
			14,
			28,
			12
		],
		"hash": "6EDBC8CAD1164F8EFB06CC80C588451437EABBC3",
		"updated": "2021-10-06T02:00:23.637+00:00"
	},
	{
		"id": 1055,
		"tmdb_id": 556574,
		"imdb_id": "tt8503618",
		"title": "Anh Hùng Hamilton",
		"english_title": "Hamilton",
		"backdrop_path": "/xNFgDw3wqvIDC0MQjngIGbFKIrN.jpg",
		"imdb": 8.4,
		"release_date": "2020-07-03",
		"runtime": 160,
		"genre_ids": [
			10402,
			36,
			18
		],
		"hash": "C0374D3C5C40E8FBBA43EB6DA676A301A9E83E80",
		"updated": "2021-09-16T03:06:28.14+00:00"
	},
	{
		"id": 1054,
		"tmdb_id": 38700,
		"imdb_id": "tt1502397",
		"title": "Những Gã Trai Hư Trọn Đời",
		"english_title": "Bad Boys for Life",
		"backdrop_path": "/iAg68Ir7w4Ih8Iz2leKXRAMTECR.jpg",
		"imdb": 6.6,
		"release_date": "2020-01-15",
		"runtime": 124,
		"genre_ids": [
			53,
			28,
			80
		],
		"hash": "50FBC82FAE38144739022707BF15624DC49785CB",
		"updated": "2021-09-16T07:30:52.887+00:00"
	},
	{
		"id": 1060,
		"tmdb_id": 577922,
		"imdb_id": "tt6723592",
		"title": "Tenet",
		"english_title": "Tenet",
		"backdrop_path": "/A73wIkce4NGCom5dNuIHdkWOZ99.jpg",
		"imdb": 7.4,
		"release_date": "2020-08-22",
		"runtime": 150,
		"genre_ids": [
			28,
			53,
			878
		],
		"hash": "182B1965ADF9DCD3CDAE27C68DE9E810CEF75346",
		"updated": "2021-09-16T07:38:16.133+00:00"
	},
	{
		"id": 1053,
		"tmdb_id": 502425,
		"imdb_id": "tt5797184",
		"title": "Phi vụ đào tẩu",
		"english_title": "Escape From Pretoria",
		"backdrop_path": "/wP02GjxMG0gUwgGT5Nhk5hloh4b.jpg",
		"imdb": 6.8,
		"release_date": "2020-03-06",
		"runtime": 102,
		"genre_ids": [
			18,
			36,
			53
		],
		"hash": "8A377CD6638FE6ABABC52CA1F9AEC3217C81F15E",
		"updated": "2021-09-16T07:43:48.044+00:00"
	},
	{
		"id": 1063,
		"tmdb_id": 627725,
		"imdb_id": "tt6285944",
		"title": "Chuyên Gia Tài Chính",
		"english_title": "The Banker",
		"backdrop_path": "/fwkQhwfpyM2nExax0FG4ayyCokx.jpg",
		"imdb": 7.3,
		"release_date": "2020-03-06",
		"runtime": 120,
		"genre_ids": [
			18
		],
		"hash": "45037CF24AC2E730D9DB3830D6AE0B8C85CF42D1",
		"updated": "2021-09-16T07:51:14.121+00:00"
	},
	{
		"id": 1064,
		"tmdb_id": 553604,
		"imdb_id": "tt1838556",
		"title": "Phi Vụ Hoàn Lương",
		"english_title": "Honest Thief",
		"backdrop_path": "/rLazmme4Vv04wSKejFnqYAs0ngT.jpg",
		"imdb": 6,
		"release_date": "2020-09-03",
		"runtime": 99,
		"genre_ids": [
			28,
			53,
			80,
			18
		],
		"hash": "471145937565BD86EEE447FE16D0927744A19861",
		"updated": "2021-09-16T10:49:50.49+00:00"
	},
	{
		"id": 1052,
		"tmdb_id": 546121,
		"imdb_id": "tt8633478",
		"title": "Trốn Chạy",
		"english_title": "Run",
		"backdrop_path": "/3jdplO905qVFq79LcKX3hTWkEEW.jpg",
		"imdb": 6.7,
		"release_date": "2020-11-20",
		"runtime": 90,
		"genre_ids": [
			53,
			27,
			18
		],
		"hash": "05C39EEC683623153D31D2485F9654DD8CB1E5D6",
		"updated": "2021-09-16T10:51:02.265+00:00"
	},
	{
		"id": 1042,
		"tmdb_id": 629017,
		"imdb_id": "tt11456054",
		"title": "Lựa Chọn Sinh Tử",
		"english_title": "Run Hide Fight",
		"backdrop_path": "/fy2sZcWR0h2uR7PCQNRv4SftHye.jpg",
		"imdb": 6.4,
		"release_date": "2020-09-10",
		"runtime": 109,
		"genre_ids": [
			28,
			80,
			18,
			53
		],
		"hash": "42162DE90324F54E2DA20D6CF30A63C56DE0CE54",
		"updated": "2021-09-16T10:55:59.254+00:00"
	},
	{
		"id": 1057,
		"tmdb_id": 570670,
		"imdb_id": "tt1051906",
		"title": "Kẻ Vô Hình",
		"english_title": "The Invisible Man",
		"backdrop_path": "/vUO7NYFH8wHpK9wnYUJzvuYFGUr.jpg",
		"imdb": 7.1,
		"release_date": "2020-02-26",
		"runtime": 124,
		"genre_ids": [
			53,
			878,
			27
		],
		"hash": "B4639172371B1610CF92C69FE5A2CF358582AFFF",
		"updated": "2021-09-16T11:12:27.233+00:00"
	},
	{
		"id": 1047,
		"tmdb_id": 545609,
		"imdb_id": "tt8936646",
		"title": "Tyler Rake: Nhiệm vụ giải cứu",
		"english_title": "Extraction",
		"backdrop_path": "/30H4qs0vZ6iHjCnNpoXmID0J5xY.jpg",
		"imdb": 6.7,
		"release_date": "2020-04-24",
		"runtime": 116,
		"genre_ids": [
			18,
			28,
			53
		],
		"hash": "5EB5104B94724F2AEF5D1D3545DE45833E8FE614",
		"updated": "2021-09-17T03:39:02.541+00:00"
	},
	{
		"id": 1056,
		"tmdb_id": 597219,
		"imdb_id": "tt9683478",
		"title": "Một Nửa Chân Thành",
		"english_title": "The Half of It",
		"backdrop_path": "/8YSpQBdGvuvSj9pLsY2yoUb9fZn.jpg",
		"imdb": 6.9,
		"release_date": "2020-05-01",
		"runtime": 104,
		"genre_ids": [
			35,
			10749
		],
		"hash": "03BFB96BFF6CAF52022C9A50CB9CCA33EB615E31",
		"updated": "2021-09-16T11:17:57.118+00:00"
	},
	{
		"id": 1062,
		"tmdb_id": 757860,
		"imdb_id": "tt11454718",
		"title": "Âm Dương Sư: Tình Nhã Tập",
		"english_title": "The Yin Yang Master: Dream of Eternity",
		"backdrop_path": "/w2irJuQcnGk696erT7EL9oxdALx.jpg",
		"imdb": 6.5,
		"release_date": "2020-12-24",
		"runtime": 132,
		"genre_ids": [
			28,
			18,
			14,
			9648,
			878
		],
		"hash": "2DB66D871BF26AE205DDCF4343D370B3CE3BB2A4",
		"updated": "2021-09-17T03:42:22.5+00:00"
	},
	{
		"id": 1061,
		"tmdb_id": 623491,
		"imdb_id": "tt11024272",
		"title": "Cô Giữ Trẻ: Nữ Hoàng Sát Nhân",
		"english_title": "The Babysitter: Killer Queen",
		"backdrop_path": "/j4YLTxsNQFlM4iEi2SMAn60d5Wj.jpg",
		"imdb": 5.8,
		"release_date": "2020-09-10",
		"runtime": 101,
		"genre_ids": [
			35,
			27
		],
		"hash": "C0BE85C4F666FFAA7DB3080D1099972E0FC5A3A7",
		"updated": "2021-09-17T03:43:07.723+00:00"
	},
	{
		"id": 1046,
		"tmdb_id": 529203,
		"imdb_id": "tt2850386",
		"title": "Gia Đình Croods: Kỷ Nguyên Mới",
		"english_title": "The Croods: A New Age",
		"backdrop_path": "/ge5FfHLfGd5fLVLmsNVGEbXmFgL.jpg",
		"imdb": 7,
		"release_date": "2020-11-25",
		"runtime": 95,
		"genre_ids": [
			10751,
			12,
			14,
			16
		],
		"hash": "DBBC4A31E23EA325A8FA232717EC03D9E5A65769",
		"updated": "2021-09-17T03:53:08.342+00:00"
	},
	{
		"id": 1050,
		"tmdb_id": 575604,
		"imdb_id": "tt10530176",
		"title": "Cuộc Gọi",
		"english_title": "The Call",
		"backdrop_path": "/iDw6J49rf7Xlu9QZBWpvmrMqSzI.jpg",
		"imdb": 7.1,
		"release_date": "2020-11-27",
		"runtime": 112,
		"genre_ids": [
			53,
			9648,
			878
		],
		"hash": "1C1A55E5C8ACF808155C465E91C9B99408473910",
		"updated": "2021-09-17T04:08:33.959+00:00"
	},
	{
		"id": 1058,
		"tmdb_id": 508935,
		"imdb_id": "tt7294150",
		"title": "Bát Bách",
		"english_title": "The Eight Hundred",
		"backdrop_path": "/k4WU82qscgRgZGf7G1NZ2EDpaiM.jpg",
		"imdb": 6.8,
		"release_date": "2020-08-14",
		"runtime": 147,
		"genre_ids": [
			10752,
			36,
			18,
			28
		],
		"hash": "F62184372F5FED066CCBEC4A357EFB867D0FBAA7",
		"updated": "2021-09-17T03:55:46.629+00:00"
	},
	{
		"id": 1043,
		"tmdb_id": 635389,
		"imdb_id": "tt11177804",
		"title": "Khương Tử Nha: Nhất Chiến Phong Thần",
		"english_title": "Legend of Deification",
		"backdrop_path": "/1AcnJCtuDe8eOBRg1Y3MKGS4Crh.jpg",
		"imdb": 6.6,
		"release_date": "2020-10-01",
		"runtime": 105,
		"genre_ids": [
			16,
			28,
			14,
			12
		],
		"hash": "107B4BF02CBC24DCF94D7DFBC7D7A325CC270981",
		"updated": "2021-09-17T03:55:59.673+00:00"
	},
	{
		"id": 1045,
		"tmdb_id": 400160,
		"imdb_id": "tt4823776",
		"title": "Spongebob: Bọt Biển Đào Tẩu",
		"english_title": "The SpongeBob Movie: Sponge on the Run",
		"backdrop_path": "/cDjKDI9kE3lrO6okJQYLhRtsohV.jpg",
		"imdb": 6,
		"release_date": "2020-08-14",
		"runtime": 95,
		"genre_ids": [
			16,
			14,
			12,
			35,
			10751
		],
		"hash": "D6277F16EF48E2B1AEDA532ECC4CC303DA2F6349",
		"updated": "2021-09-17T04:10:10.006+00:00"
	},
	{
		"id": 1059,
		"tmdb_id": 670266,
		"imdb_id": "tt8322060",
		"title": "Sâu Đất: Đảo Shrieker",
		"english_title": "Tremors: Shrieker Island",
		"backdrop_path": "/3FfnQIbXGV4GJGl4YycWKwu7szC.jpg",
		"imdb": 5.5,
		"release_date": "2020-10-20",
		"runtime": 103,
		"genre_ids": [
			28,
			27
		],
		"hash": "4280C41C6A38D38339D291C1AF665DE7517E316C",
		"updated": "2021-09-17T04:17:55.014+00:00"
	},
	{
		"id": 1048,
		"tmdb_id": 605116,
		"imdb_id": "tt7550000",
		"title": "Dự Án Siêu Năng Lực",
		"english_title": "Project Power",
		"backdrop_path": "/typOYkXC8nNoyp55mViEI1A1Qp6.jpg",
		"imdb": 6,
		"release_date": "2020-08-14",
		"runtime": 113,
		"genre_ids": [
			28,
			80,
			878
		],
		"hash": "84B29629AFDA75ACD6C1AE90F45D8E822954B339",
		"updated": "2021-09-17T04:18:44.438+00:00"
	},
	{
		"id": 1044,
		"tmdb_id": 608195,
		"imdb_id": "tt6508228",
		"title": "Dinh Thự Oan Khuất",
		"english_title": "Ghost of War",
		"backdrop_path": "/rvd1JQjAEuzcEDSwN4qRmZJPZT9.jpg",
		"imdb": 5.5,
		"release_date": "2020-07-03",
		"runtime": 94,
		"genre_ids": [
			27,
			53,
			10752,
			14
		],
		"hash": "48B6D4B41BA7F716B071564F296CAEC34E617A14",
		"updated": "2021-09-17T04:19:11.916+00:00"
	},
	{
		"id": 1225,
		"tmdb_id": 1366,
		"imdb_id": "tt0075148",
		"title": "Rocky",
		"english_title": "Rocky",
		"backdrop_path": "/19lkX9IGhVDLGqOdXT5HjXsRcez.jpg",
		"imdb": 8.1,
		"release_date": "1976-11-21",
		"runtime": 120,
		"genre_ids": [
			18,
			28
		],
		"hash": "CCE385B2472097275F5E56D500CC80D65712856B",
		"updated": "2021-09-17T12:56:06.493+00:00"
	},
	{
		"id": 1087,
		"tmdb_id": 628534,
		"imdb_id": "tt6571548",
		"title": "Cọp Trắng",
		"english_title": "The White Tiger",
		"backdrop_path": "/eyFZPeN14FGJUKyXQT8RrxmPQ2L.jpg",
		"imdb": 7.1,
		"release_date": "2021-01-13",
		"runtime": 125,
		"genre_ids": [
			18
		],
		"hash": "46AD63292B5A9766CD1B96FE107486E8E5ED3947",
		"updated": "2021-09-15T05:28:26.867+00:00"
	},
	{
		"id": 1086,
		"tmdb_id": 663558,
		"imdb_id": "tt13269670",
		"title": "Tân Phong Thần: Na Tra Trùng Sinh",
		"english_title": "New Gods: Nezha Reborn",
		"backdrop_path": "/6tTBlyWbppRqd67pw5LerkdznFl.jpg",
		"imdb": 6.9,
		"release_date": "2021-02-06",
		"runtime": 116,
		"genre_ids": [
			16,
			28,
			14
		],
		"hash": "905CFAD072D37BDE8922D0AD932E205AEBC6613E",
		"updated": "2021-09-15T06:04:37.04+00:00"
	},
	{
		"id": 1085,
		"tmdb_id": 602734,
		"imdb_id": "tt10342730",
		"title": "Lưỡi Cưa 9",
		"english_title": "Spiral: From the Book of Saw",
		"backdrop_path": "/p4D5q4GibvYekvFpwev4MI82Oeh.jpg",
		"imdb": 5.3,
		"release_date": "2021-05-12",
		"runtime": 93,
		"genre_ids": [
			53,
			27,
			9648
		],
		"hash": "79ABAA206DE999617B5CCDA0ED68CC750BD9CAAA",
		"updated": "2021-09-15T06:55:32.722+00:00"
	},
	{
		"id": 1074,
		"tmdb_id": 581600,
		"imdb_id": "tt8629748",
		"title": "Công lý của Spenser",
		"english_title": "Spenser Confidential",
		"backdrop_path": "/gXYPqdri0uLRq0go9Z2xhs9IQR3.jpg",
		"imdb": 6.2,
		"release_date": "2020-03-06",
		"runtime": 110,
		"genre_ids": [
			35,
			28,
			53
		],
		"hash": "05C4DC412EE69C5A21BF7D2BAC306CD09E02F94C",
		"updated": "2021-09-17T03:37:58.739+00:00"
	},
	{
		"id": 1073,
		"tmdb_id": 516486,
		"imdb_id": "tt6048922",
		"title": "Chiến Hạm Thủ Lĩnh",
		"english_title": "Greyhound",
		"backdrop_path": "/o2FD8cxcGLzJMscPFHYfeZAs9Ky.jpg",
		"imdb": 7,
		"release_date": "2020-07-10",
		"runtime": 91,
		"genre_ids": [
			10752,
			28,
			18
		],
		"hash": "1272B6F0A25AE3176BAE5325700A54B061D891D6",
		"updated": "2021-09-16T07:52:59.87+00:00"
	},
	{
		"id": 1088,
		"tmdb_id": 574060,
		"imdb_id": "tt8368408",
		"title": "Mẹ Con Sát Thủ",
		"english_title": "Gunpowder Milkshake",
		"backdrop_path": "/r4NaLr86Rmc4RLVeqq2JowJ9afT.jpg",
		"imdb": 6,
		"release_date": "2021-07-15",
		"runtime": 114,
		"genre_ids": [
			28,
			53,
			80
		],
		"hash": "8B36544EBFA45A54C720F850005ADCF7C24671E0",
		"updated": "2021-10-11T01:51:57.452+00:00"
	},
	{
		"id": 1071,
		"tmdb_id": 454626,
		"imdb_id": "tt3794354",
		"title": "Nhím Sonic",
		"english_title": "Sonic the Hedgehog",
		"backdrop_path": "/eYPrbL5WUMwrcctQYs3xpZJTm3m.jpg",
		"imdb": 6.5,
		"release_date": "2020-02-12",
		"runtime": 99,
		"genre_ids": [
			28,
			878,
			35,
			10751
		],
		"hash": "BDA94F6ECE68D7174979E80B1652D5001BA406DA",
		"updated": "2021-09-16T10:53:32.204+00:00"
	},
	{
		"id": 1083,
		"tmdb_id": 596161,
		"imdb_id": "tt9340860",
		"title": "Let Him Go",
		"english_title": "Let Him Go",
		"backdrop_path": "/pks7lkgxy7CimGGrN6vMqWNIQO4.jpg",
		"imdb": 6.7,
		"release_date": "2020-11-05",
		"runtime": 114,
		"genre_ids": [
			18,
			53,
			80
		],
		"hash": "871A0F6A64B3809BBE1C087823759A1DE7A279A3",
		"updated": "2021-09-16T11:13:15.681+00:00"
	},
	{
		"id": 1078,
		"tmdb_id": 547016,
		"imdb_id": "tt7556122",
		"title": "Những Chiến Binh Bất Tử",
		"english_title": "The Old Guard",
		"backdrop_path": "/hz9MhSaZTv6AjCVY4Ear5ZPXeoh.jpg",
		"imdb": 6.7,
		"release_date": "2020-07-10",
		"runtime": 125,
		"genre_ids": [
			28,
			14
		],
		"hash": "E9C667FBED735AD0C6602748EB5CDC7709CC42AA",
		"updated": "2021-09-16T11:15:06.619+00:00"
	},
	{
		"id": 1068,
		"tmdb_id": 611395,
		"imdb_id": "tt10508838",
		"title": "Hành Trình",
		"english_title": "Double World",
		"backdrop_path": "/jzT7kjW1U4JWkM4y4Uwaouu5R8d.jpg",
		"imdb": 6.1,
		"release_date": "2020-07-21",
		"runtime": 110,
		"genre_ids": [
			28,
			12,
			14
		],
		"hash": "0D80870C073A8697D215B0C3E02AB979D32C1166",
		"updated": "2021-09-16T11:16:10.667+00:00"
	},
	{
		"id": 1077,
		"tmdb_id": 499932,
		"imdb_id": "tt7395114",
		"title": "Vùng Đất Bị Ruồng Bỏ",
		"english_title": "The Devil All the Time",
		"backdrop_path": "/tn2GW9gupWNFQGipUSXfpHtmeVF.jpg",
		"imdb": 7.1,
		"release_date": "2020-09-11",
		"runtime": 138,
		"genre_ids": [
			80,
			18,
			53
		],
		"hash": "EBB9AC690EAFBC441E764641C763969078DF6FDE",
		"updated": "2021-09-16T11:18:55.591+00:00"
	},
	{
		"id": 1072,
		"tmdb_id": 342470,
		"imdb_id": "tt3907584",
		"title": "Những Ngày Tươi Đẹp",
		"english_title": "All the Bright Places",
		"backdrop_path": "/q5vKYuUDs2DV7ucYYNrEV28vqEK.jpg",
		"imdb": 6.5,
		"release_date": "2020-02-28",
		"runtime": 108,
		"genre_ids": [
			18,
			10749
		],
		"hash": "B756DB115172668163155C15E0339A0B3E90CC10",
		"updated": "2021-09-16T11:20:14.553+00:00"
	},
	{
		"id": 1081,
		"tmdb_id": 635302,
		"imdb_id": "tt11032374",
		"title": "Thanh Gươm Diệt Quỷ: Chuyến Tàu Vô Tận",
		"english_title": "Demon Slayer: Mugen Train",
		"backdrop_path": "/musenv5SRqh7jsrL61k4zLWUnHM.jpg",
		"imdb": 8.3,
		"release_date": "2020-10-16",
		"runtime": 117,
		"genre_ids": [
			16,
			28,
			12,
			14,
			18
		],
		"hash": "987A8A1AD88BED1F1D4ACD0DDD8B5D3F5CAFB206",
		"updated": "2021-09-16T11:21:19.727+00:00"
	},
	{
		"id": 1075,
		"tmdb_id": 592984,
		"imdb_id": "tt6772802",
		"title": "Khúc Bi Ca Từ Nguồn Cội",
		"english_title": "Hillbilly Elegy",
		"backdrop_path": "/drVGstbqatK4S1W1XIIXA2SMwT8.jpg",
		"imdb": 6.7,
		"release_date": "2020-11-11",
		"runtime": 117,
		"genre_ids": [
			18,
			35
		],
		"hash": "4710FD1EB82B9F873C7491DD1271B9A2A43E63A4",
		"updated": "2021-09-17T03:40:03.63+00:00"
	},
	{
		"id": 1067,
		"tmdb_id": 568467,
		"imdb_id": "tt7983894",
		"title": "Cuồng Tình",
		"english_title": "Ammonite",
		"backdrop_path": "/8NviCu4q01tK0Imq8ZIFOZBeQEQ.jpg",
		"imdb": 6.5,
		"release_date": "2020-11-13",
		"runtime": 118,
		"genre_ids": [
			10749,
			18
		],
		"hash": "9E0AB9E60EC0CF2A522CA4B90ED2DC83DD32EA9F",
		"updated": "2021-09-17T03:41:33.649+00:00"
	},
	{
		"id": 1065,
		"tmdb_id": 656690,
		"imdb_id": "tt11464826",
		"title": "Song Đề Xã Hội",
		"english_title": "The Social Dilemma",
		"backdrop_path": "/jUgyHcjrOH5vk9HC7UmNnJk0dKB.jpg",
		"imdb": 7.7,
		"release_date": "2020-01-26",
		"runtime": 94,
		"genre_ids": [
			99,
			18
		],
		"hash": "7488122430EF0034550814F30BAF96FAC4BDC845",
		"updated": "2021-09-17T03:58:19.987+00:00"
	},
	{
		"id": 1066,
		"tmdb_id": 641662,
		"imdb_id": "tt11161474",
		"title": "Những Mảnh Vỡ Của Người Phụ Nữ",
		"english_title": "Pieces of a Woman",
		"backdrop_path": "/7HVO15FMFcwmrbChM4y4xV6KIWH.jpg",
		"imdb": 7.1,
		"release_date": "2020-12-30",
		"runtime": 127,
		"genre_ids": [
			18
		],
		"hash": "772E63E5F11306800047E1F63D4D6919EA444724",
		"updated": "2021-09-17T04:00:54.455+00:00"
	},
	{
		"id": 1069,
		"tmdb_id": 582014,
		"imdb_id": "tt9620292",
		"title": "Promising Young Woman",
		"english_title": "Promising Young Woman",
		"backdrop_path": "/vytKw8HapJ65tYbgdxEG1rC3QMK.jpg",
		"imdb": 7.5,
		"release_date": "2020-12-13",
		"runtime": 114,
		"genre_ids": [
			53,
			80,
			18
		],
		"hash": "004F9A66511A34CA65D20FF2C0F5FB859F8038E1",
		"updated": "2021-09-17T04:00:07.154+00:00"
	},
	{
		"id": 1082,
		"tmdb_id": 337401,
		"imdb_id": "tt4566758",
		"title": "Hoa Mộc Lan",
		"english_title": "Mulan",
		"backdrop_path": "/yw3ZvsL6uh78u9jqZeUOAa4R1jz.jpg",
		"imdb": 5.7,
		"release_date": "2020-09-04",
		"runtime": 115,
		"genre_ids": [
			12,
			14
		],
		"hash": "6D4318B38EB00C3516B6CF46A3027E2DF716D25C",
		"updated": "2021-09-17T04:11:07.672+00:00"
	},
	{
		"id": 1070,
		"tmdb_id": 441130,
		"imdb_id": "tt5198068",
		"title": "Người Hóa Sói",
		"english_title": "Wolfwalkers",
		"backdrop_path": "/vp5I07UnTnscbPKXa0wXpSzsdiz.jpg",
		"imdb": 8.1,
		"release_date": "2020-10-26",
		"runtime": 103,
		"genre_ids": [
			10751,
			12,
			16,
			14
		],
		"hash": "C0157163819160A2A97E8C84B9E427F3201D3B6F",
		"updated": "2021-09-17T04:11:58.11+00:00"
	},
	{
		"id": 1076,
		"tmdb_id": 502033,
		"imdb_id": "tt5363618",
		"title": "Tiếng Gọi Của Metal",
		"english_title": "Sound of Metal",
		"backdrop_path": "/cbfVEIkcMD65Pz9gwg5P4dj6D2N.jpg",
		"imdb": 7.8,
		"release_date": "2020-11-20",
		"runtime": 121,
		"genre_ids": [
			18,
			10402
		],
		"hash": "F04941D177EE06F9923A2EE2E145854136B891B8",
		"updated": "2021-09-17T04:13:33.513+00:00"
	},
	{
		"id": 1079,
		"tmdb_id": 615643,
		"imdb_id": "tt10633456",
		"title": "Khát Vọng Đổi Đời",
		"english_title": "Minari",
		"backdrop_path": "/tk23R6rt0q0PZH2BF5JMZiyPhot.jpg",
		"imdb": 7.5,
		"release_date": "2020-12-11",
		"runtime": 115,
		"genre_ids": [
			18
		],
		"hash": "90A0610810693BE24C07A023866D8B620E232D0F",
		"updated": "2021-09-17T04:14:55.003+00:00"
	},
	{
		"id": 1084,
		"tmdb_id": 464052,
		"imdb_id": "tt7126948",
		"title": "Wonder Woman 1984: Nữ Thần Chiến Binh",
		"english_title": "Wonder Woman 1984",
		"backdrop_path": "/18wXXGjhhM7QiGiey6q7B9Xx473.jpg",
		"imdb": 5.4,
		"release_date": "2020-12-16",
		"runtime": 151,
		"genre_ids": [
			28,
			12,
			14
		],
		"hash": "A4B39D923BED7EA2DD1E40041114E87B1DAC7188",
		"updated": "2021-10-07T02:21:20.168+00:00"
	},
	{
		"id": 1097,
		"tmdb_id": 722913,
		"imdb_id": "tt12676326",
		"title": "Malcolm và Marie",
		"english_title": "Malcolm & Marie",
		"backdrop_path": "/8sv94F2Cc5dyrtdKt0DxDUQHN23.jpg",
		"imdb": 6.7,
		"release_date": "2021-01-28",
		"runtime": 106,
		"genre_ids": [
			18,
			10749
		],
		"hash": "1AF2C24F8CAD27BEBAE4C36FC7063B5CA6AA8A25",
		"updated": "2021-09-15T05:30:19.507+00:00"
	},
	{
		"id": 1101,
		"tmdb_id": 581389,
		"imdb_id": "tt12838766",
		"title": "Con Tàu Chiến Thắng",
		"english_title": "Space Sweepers",
		"backdrop_path": "/2TVcor2K4nD384PwZvRx9Nx1wRT.jpg",
		"imdb": 6.6,
		"release_date": "2021-02-05",
		"runtime": 136,
		"genre_ids": [
			18,
			14,
			878
		],
		"hash": "10ABFC20867C8BB5BAB962847C7BED8F2AC1F822",
		"updated": "2021-09-15T05:31:45.26+00:00"
	},
	{
		"id": 1103,
		"tmdb_id": 614409,
		"imdb_id": "tt10676012",
		"title": "Những Chàng Trai Năm Ấy Mãi Yêu",
		"english_title": "To All the Boys: Always and Forever",
		"backdrop_path": "/gw5XDLT5FzK0tovCMnDv4WBVd0d.jpg",
		"imdb": 6.3,
		"release_date": "2021-02-12",
		"runtime": 115,
		"genre_ids": [
			35,
			18,
			10749
		],
		"hash": "B11C04ECF1EA72077CD2612DEC63278C0E606A3C",
		"updated": "2021-09-15T05:32:24.394+00:00"
	},
	{
		"id": 1107,
		"tmdb_id": 513310,
		"imdb_id": "tt7638348",
		"title": "Đẳng Cấp Boss",
		"english_title": "Boss Level",
		"backdrop_path": "/haP6bMoBqhKv3FQsxolTmfli1Wv.jpg",
		"imdb": 6.8,
		"release_date": "2021-02-19",
		"runtime": 100,
		"genre_ids": [
			28,
			878,
			53,
			9648
		],
		"hash": "B8877B3E613C7FFFB48F267AA4BDBB5FBA73C8B8",
		"updated": "2021-09-15T05:34:13.141+00:00"
	},
	{
		"id": 1102,
		"tmdb_id": 615457,
		"imdb_id": "tt7888964",
		"title": "Kẻ Vô Danh",
		"english_title": "Nobody",
		"backdrop_path": "/jfzQouXBEDHDTNLuEaC60Pz8BXN.jpg",
		"imdb": 7.4,
		"release_date": "2021-03-18",
		"runtime": 92,
		"genre_ids": [
			28,
			53,
			80
		],
		"hash": "135E2BE1F525D30AAC80E413F371AD171E81C68D",
		"updated": "2021-11-28T06:09:33.124+00:00"
	},
	{
		"id": 1090,
		"tmdb_id": 630004,
		"imdb_id": "tt9742794",
		"title": "Siêu Trộm",
		"english_title": "The Vault",
		"backdrop_path": "/6y32oP0gkrN16GPofRDaTYvrjvm.jpg",
		"imdb": 6.4,
		"release_date": "2021-03-03",
		"runtime": 118,
		"genre_ids": [
			80,
			28,
			53
		],
		"hash": "62C09C34B68B89DC5441F99E7186C5F22D91057C",
		"updated": "2021-09-15T05:55:54.267+00:00"
	},
	{
		"id": 1100,
		"tmdb_id": 412656,
		"imdb_id": "tt2076822",
		"title": "Hành Tinh Hỗn Loạn",
		"english_title": "Chaos Walking",
		"backdrop_path": "/x84AqK3vJtLJ2Vn8sHkTEkbLuMq.jpg",
		"imdb": 5.7,
		"release_date": "2021-02-24",
		"runtime": 109,
		"genre_ids": [
			878,
			28,
			12,
			53
		],
		"hash": "A50DDC28B38899953C05F31BA4D390853BEA5BEC",
		"updated": "2021-09-15T06:03:30.83+00:00"
	},
	{
		"id": 1095,
		"tmdb_id": 399566,
		"imdb_id": "tt5034838",
		"title": "Godzilla Đại Chiến Kong",
		"english_title": "Godzilla vs. Kong",
		"backdrop_path": "/7eEhXg48Cl2fski0JxP9oezEbG.jpg",
		"imdb": 6.4,
		"release_date": "2021-03-24",
		"runtime": 113,
		"genre_ids": [
			28,
			12,
			14
		],
		"hash": "849D669347F28F548291DF57054E670D79858BAD",
		"updated": "2021-09-15T06:00:58.648+00:00"
	},
	{
		"id": 1106,
		"tmdb_id": 501929,
		"imdb_id": "tt7979580",
		"title": "Nhà Mitchell Đối Đầu Với Máy Móc",
		"english_title": "The Mitchells vs. The Machines",
		"backdrop_path": "/dXo6ZXksI2iWybcjIlvusqY9rcF.jpg",
		"imdb": 7.7,
		"release_date": "2021-04-22",
		"runtime": 114,
		"genre_ids": [
			16,
			12,
			35,
			10751,
			878
		],
		"hash": "29EB0D60F586B30B95942A90B954DBC15EB3658B",
		"updated": "2021-09-15T06:20:31.018+00:00"
	},
	{
		"id": 1108,
		"tmdb_id": 503736,
		"imdb_id": "tt0993840",
		"title": "Đội Quân Người Chết",
		"english_title": "Army of the Dead",
		"backdrop_path": "/vHCUVA8UikgJl5Q4gjAu0N3JB1v.jpg",
		"imdb": 5.8,
		"release_date": "2021-05-13",
		"runtime": 148,
		"genre_ids": [
			28,
			27,
			878,
			53
		],
		"hash": "71FD7672CD7069EE28D53C57F156881D6AE896A4",
		"updated": "2021-09-15T06:22:33.849+00:00"
	},
	{
		"id": 1112,
		"tmdb_id": 602269,
		"imdb_id": "tt10016180",
		"title": "Manh Mối Nhỏ Nhặt",
		"english_title": "The Little Things",
		"backdrop_path": "/359L6SQd52GvTpoyVSEQuDQ5OAC.jpg",
		"imdb": 6.3,
		"release_date": "2021-01-28",
		"runtime": 128,
		"genre_ids": [
			53,
			80
		],
		"hash": "859BFA2A4D443BA63415A8F7B1B3F6EE5A6FB88F",
		"updated": "2021-09-15T06:53:05.31+00:00"
	},
	{
		"id": 1113,
		"tmdb_id": 581726,
		"imdb_id": "tt6654210",
		"title": "Vô Hạn",
		"english_title": "Infinite",
		"backdrop_path": "/gJ49KEaZUNSXDb8fXq6YbR7uHeG.jpg",
		"imdb": 5.4,
		"release_date": "2021-09-08",
		"runtime": 106,
		"genre_ids": [
			878,
			28,
			53
		],
		"hash": "1320D6D3B332399B2F4865F36823731ABD1444C0",
		"updated": "2021-09-15T07:00:28.002+00:00"
	},
	{
		"id": 1094,
		"tmdb_id": 643586,
		"imdb_id": "tt8114980",
		"title": "Willy's Wonderland",
		"english_title": "Willy's Wonderland",
		"backdrop_path": "/bmMiun1WsNcrHo9zV1mAyIaop6P.jpg",
		"imdb": 5.5,
		"release_date": "2021-02-12",
		"runtime": 88,
		"genre_ids": [
			28,
			27,
			35
		],
		"hash": "274C0EFAA3A56E7D72C9A9780FFA72717382B710",
		"updated": "2021-09-15T07:05:01.619+00:00"
	},
	{
		"id": 1110,
		"tmdb_id": 550205,
		"imdb_id": "tt5562070",
		"title": "Ước Nguyện Thần Long",
		"english_title": "Wish Dragon",
		"backdrop_path": "/gVHq5zIfge7XvXymx2MIONfzPX5.jpg",
		"imdb": 7.2,
		"release_date": "2021-01-15",
		"runtime": 99,
		"genre_ids": [
			16,
			10751,
			35,
			14
		],
		"hash": "F123A6F07137D02AB9037CA0B6A69EB6DCA6B33E",
		"updated": "2021-09-15T07:20:32.673+00:00"
	},
	{
		"id": 1105,
		"tmdb_id": 497698,
		"imdb_id": "tt3480822",
		"title": "Goá Phụ Đen",
		"english_title": "Black Widow",
		"backdrop_path": "/ApH5y0E92GiAYzFJPNLDws3v5oK.jpg",
		"imdb": 6.8,
		"release_date": "2021-07-07",
		"runtime": 134,
		"genre_ids": [
			28,
			12,
			53,
			878
		],
		"hash": "995ECD1010EFC8EABCDB1D0EE2FCBE1AFE63E1D5",
		"updated": "2021-09-15T07:32:13.967+00:00"
	},
	{
		"id": 1098,
		"tmdb_id": 591274,
		"imdb_id": "tt9701940",
		"title": "Phố Fear Phần 2: 1978",
		"english_title": "Fear Street Part Two: 1978",
		"backdrop_path": "/c4M9A5bP5PPSnEp6tvJGyhNlmnS.jpg",
		"imdb": 6.7,
		"release_date": "2021-07-09",
		"runtime": 110,
		"genre_ids": [
			27,
			9648
		],
		"hash": "3526F4D5EC58B68A2A3B773D745EB4DC4FD268D0",
		"updated": "2021-09-15T07:35:57.78+00:00"
	},
	{
		"id": 1104,
		"tmdb_id": 379686,
		"imdb_id": "tt3554046",
		"title": "Space Jam: Kỷ nguyên mới",
		"english_title": "Space Jam: A New Legacy",
		"backdrop_path": "/sUinmO9aRJEX5dOjM7h7Ysp0B92.jpg",
		"imdb": 4.4,
		"release_date": "2021-07-08",
		"runtime": 115,
		"genre_ids": [
			16,
			35,
			10751,
			878
		],
		"hash": "B9F89CFDF8E74E9ACE0E58528932FCC437AD0D0E",
		"updated": "2021-09-15T07:37:12.814+00:00"
	},
	{
		"id": 1093,
		"tmdb_id": 602223,
		"imdb_id": "tt10327252",
		"title": "Cuộc Thanh Trừng Vĩnh Viễn",
		"english_title": "The Forever Purge",
		"backdrop_path": "/5F6OJAGcCnmPeCRtzoIPqCQnR4T.jpg",
		"imdb": 5.4,
		"release_date": "2021-06-30",
		"runtime": 103,
		"genre_ids": [
			12,
			53,
			28,
			27,
			37
		],
		"hash": "F4237BDCBD331110B043F3BBC00FCD413D3C12C3",
		"updated": "2021-09-15T07:38:43.08+00:00"
	},
	{
		"id": 1111,
		"tmdb_id": 795853,
		"imdb_id": "tt11881160",
		"title": "Đất Mẹ",
		"english_title": "Gaia",
		"backdrop_path": "/u8NUwk6yEFwNWI9BcbBpd5nVU0z.jpg",
		"imdb": 5.5,
		"release_date": "2021-06-18",
		"runtime": 95,
		"genre_ids": [
			27,
			14,
			18
		],
		"hash": "3F601D27D8AB95119E317DD9E25707B2704BD31D",
		"updated": "2021-09-15T07:40:33.039+00:00"
	},
	{
		"id": 1099,
		"tmdb_id": 672322,
		"imdb_id": "tt11991748",
		"title": "Lãng Khách Kenshin: Khởi Đầu",
		"english_title": "Rurouni Kenshin: The Beginning",
		"backdrop_path": "/heMC3jAjQPNSlr1n9mZKUQ58EOE.jpg",
		"imdb": 7.5,
		"release_date": "2021-06-04",
		"runtime": 138,
		"genre_ids": [
			28,
			18,
			12
		],
		"hash": "24D1308BBE36193A226B4F313A8C23F35EFECC44",
		"updated": "2021-09-15T07:44:36.772+00:00"
	},
	{
		"id": 1096,
		"tmdb_id": 736074,
		"imdb_id": "tt14402926",
		"title": "Người Dơi: Đêm Trường Halloween, Phần 2",
		"english_title": "Batman: The Long Halloween, Part Two",
		"backdrop_path": "/7WuVUAsWWHt4g11R1HalX0RX2bh.jpg",
		"imdb": 7.2,
		"release_date": "2021-07-26",
		"runtime": 87,
		"genre_ids": [
			16,
			9648,
			28,
			80
		],
		"hash": "AFABBDFBA96364B5F054FBBB3D68F778FE13806D",
		"updated": "2021-09-15T07:45:23.734+00:00"
	},
	{
		"id": 1092,
		"tmdb_id": 801058,
		"imdb_id": "tt14152756",
		"title": "Sự thật về nghề cá bền vững",
		"english_title": "Seaspiracy",
		"backdrop_path": "/AcvxSLa140z7qgGQ8G2UjhcgVEY.jpg",
		"imdb": 8.2,
		"release_date": "2021-03-24",
		"runtime": 89,
		"genre_ids": [
			99
		],
		"hash": "6F8560291E700DB4E14C321747BC2441DAEBFA08",
		"updated": "2021-10-06T02:42:52.705+00:00"
	},
	{
		"id": 1130,
		"tmdb_id": 791373,
		"imdb_id": "tt12361974",
		"title": "Liên Minh Công Lý Phiên Bản của Zack Snyder",
		"english_title": "Zack Snyder's Justice League",
		"backdrop_path": "/bJkQXnkg8V9KcuGJqM58WfkmjzY.jpg",
		"imdb": 8.1,
		"release_date": "2021-03-18",
		"runtime": 242,
		"genre_ids": [
			28,
			12,
			14,
			878
		],
		"hash": "34CF1B02E39B94E38F099BA24EBA9131823AEDB3",
		"updated": "2021-09-15T03:27:42.576+00:00"
	},
	{
		"id": 1135,
		"tmdb_id": 458220,
		"imdb_id": "tt6857376",
		"title": "Palmer",
		"english_title": "Palmer",
		"backdrop_path": "/rgXawT9MN1yH3PNPk2tiT4Gchpz.jpg",
		"imdb": 7.3,
		"release_date": "2021-01-29",
		"runtime": 110,
		"genre_ids": [
			18
		],
		"hash": "340FB51F1D3863DE60612F60A03F66D568DF58D9",
		"updated": "2021-09-15T05:29:22.848+00:00"
	},
	{
		"id": 1117,
		"tmdb_id": 527774,
		"imdb_id": "tt5109280",
		"title": "Raya và Rồng Thần Cuối Cùng",
		"english_title": "Raya and the Last Dragon",
		"backdrop_path": "/3emtmbHAp145frh3Pps1bZCCEHY.jpg",
		"imdb": 7.4,
		"release_date": "2021-03-03",
		"runtime": 107,
		"genre_ids": [
			16,
			28,
			12,
			14,
			10751,
			18
		],
		"hash": "602A60BB6B4F061B5E4E7BE9822B67D6CD289E23",
		"updated": "2021-09-15T05:43:50.027+00:00"
	},
	{
		"id": 1121,
		"tmdb_id": 634528,
		"imdb_id": "tt6902332",
		"title": "Tay Xạ Thủ",
		"english_title": "The Marksman",
		"backdrop_path": "/a2tdrbqPLRuJrl5EhqMgjp1WEhB.jpg",
		"imdb": 5.6,
		"release_date": "2021-01-15",
		"runtime": 108,
		"genre_ids": [
			28,
			53,
			80
		],
		"hash": "F92C05A1F8C1BFDCF2CC78E335F72FB1EDFDE764",
		"updated": "2021-09-15T06:10:39.718+00:00"
	},
	{
		"id": 1120,
		"tmdb_id": 460465,
		"imdb_id": "tt0293429",
		"title": "Mortal Kombat: Cuộc Chiến Sinh Tử",
		"english_title": "Mortal Kombat",
		"backdrop_path": "/4EyEEBgMOrhg3TJfAgUGsY9Z2b2.jpg",
		"imdb": 6.1,
		"release_date": "2021-04-07",
		"runtime": 110,
		"genre_ids": [
			28,
			14,
			12
		],
		"hash": "D12F137F1C2CB6E1DB2EAFF9382C093F9D062492",
		"updated": "2021-09-15T06:19:25.366+00:00"
	},
	{
		"id": 1126,
		"tmdb_id": 520663,
		"imdb_id": "tt6111574",
		"title": "Bí Mật Bên Kia Khung Cửa",
		"english_title": "The Woman in the Window",
		"backdrop_path": "/g62tE4jauKTTcpTko5F0EQ4LDvj.jpg",
		"imdb": 5.7,
		"release_date": "2021-05-14",
		"runtime": 102,
		"genre_ids": [
			80,
			18,
			9648,
			53
		],
		"hash": "E44099CAD52909AFC47864AE4C688F5DA5E19FC9",
		"updated": "2021-09-15T06:21:23.582+00:00"
	},
	{
		"id": 1123,
		"tmdb_id": 581734,
		"imdb_id": "tt9770150",
		"title": "Đất Du Mục",
		"english_title": "Nomadland",
		"backdrop_path": "/FsqiWu9TKUzs8f2UMdk7nAWYsx.jpg",
		"imdb": 7.4,
		"release_date": "2021-01-29",
		"runtime": 108,
		"genre_ids": [
			18
		],
		"hash": "99CD6253F88D9ADD088B87E425882F03E124B69C",
		"updated": "2021-09-15T06:29:30.23+00:00"
	},
	{
		"id": 1127,
		"tmdb_id": 578701,
		"imdb_id": "tt3215824",
		"title": "Kẻ Nguyền Ta Chết",
		"english_title": "Those Who Wish Me Dead",
		"backdrop_path": "/5EN2XIxUuASc3eBPbU3shjMNVb5.jpg",
		"imdb": 6,
		"release_date": "2021-05-05",
		"runtime": 100,
		"genre_ids": [
			53
		],
		"hash": "9C5DBCE33341D173741112EFEE86FA73E651B103",
		"updated": "2021-09-15T06:45:11.123+00:00"
	},
	{
		"id": 1124,
		"tmdb_id": 508943,
		"imdb_id": "tt12801262",
		"title": "Mùa hè của Luca",
		"english_title": "Luca",
		"backdrop_path": "/wiqOdWT643wYXSGvSGLjdQSkwpM.jpg",
		"imdb": 7.5,
		"release_date": "2021-06-17",
		"runtime": 95,
		"genre_ids": [
			16,
			35,
			10751,
			14
		],
		"hash": "94D1B695CFA239513D7219C5508EF14926FAE7EC",
		"updated": "2021-09-15T07:06:59.633+00:00"
	},
	{
		"id": 1132,
		"tmdb_id": 637649,
		"imdb_id": "tt11083552",
		"title": "Cơn Thịnh Nộ Chết Người",
		"english_title": "Wrath of Man",
		"backdrop_path": "/7DbZSbMZGQtqzWdXyfNz3sxlAZX.jpg",
		"imdb": 7.2,
		"release_date": "2021-04-22",
		"runtime": 119,
		"genre_ids": [
			28,
			80
		],
		"hash": "D5310E816BA80FCD87F175872501CB3E5887195D",
		"updated": "2021-09-15T06:54:02.522+00:00"
	},
	{
		"id": 1115,
		"tmdb_id": 637693,
		"imdb_id": "tt11084896",
		"title": "Chú Ngựa Bất Kham",
		"english_title": "Spirit Untamed",
		"backdrop_path": "/ezFtrbcVWxwQDMIu8rBegQPgyko.jpg",
		"imdb": 5.4,
		"release_date": "2021-05-20",
		"runtime": 88,
		"genre_ids": [
			16,
			12,
			10751,
			37
		],
		"hash": "133634CE8C0F5EE309AEB08B832504544F96C5CE",
		"updated": "2021-09-15T07:21:31.02+00:00"
	},
	{
		"id": 1114,
		"tmdb_id": 790850,
		"imdb_id": "tt8999372",
		"title": "Sir Alex Ferguson: Never Give In",
		"english_title": "Sir Alex Ferguson: Never Give In",
		"backdrop_path": "/mrcYV03qsVl9ogezGG1g8Vu0p4W.jpg",
		"imdb": 8.4,
		"release_date": "2021-05-27",
		"runtime": 108,
		"genre_ids": [
			99
		],
		"hash": "B8B52F31B0DEA5B2727E35AA7CD9811F0BE56E61",
		"updated": "2021-09-15T07:25:53.053+00:00"
	},
	{
		"id": 1129,
		"tmdb_id": 672741,
		"imdb_id": "tt11804152",
		"title": "Cho Đến Khi Chết",
		"english_title": "Till Death",
		"backdrop_path": "/arCipiid1zjLnUtVKbLJS5hHHpO.jpg",
		"imdb": 5.8,
		"release_date": "2021-07-01",
		"runtime": 89,
		"genre_ids": [
			27,
			53
		],
		"hash": "59AACFD9F15160E63E2B53949F71F45924B4A656",
		"updated": "2021-09-15T07:33:36.477+00:00"
	},
	{
		"id": 1122,
		"tmdb_id": 591273,
		"imdb_id": "tt6566576",
		"title": "Phố Fear Phần 1: 1994",
		"english_title": "Fear Street Part One: 1994",
		"backdrop_path": "/cBRrYjxB4dHVTR9mILg9KJXVnkE.jpg",
		"imdb": 6.2,
		"release_date": "2021-06-28",
		"runtime": 107,
		"genre_ids": [
			27,
			9648
		],
		"hash": "83C36BCA18770DDB651E8A2A1F813C705C224AF4",
		"updated": "2021-09-15T07:35:27.965+00:00"
	},
	{
		"id": 1119,
		"tmdb_id": 591275,
		"imdb_id": "tt9701942",
		"title": "Phố Fear Phần 3: 1666",
		"english_title": "Fear Street: 1666",
		"backdrop_path": "/xBt5MV06n6YupZIEnrr2GCnAUiL.jpg",
		"imdb": 6.6,
		"release_date": "2021-07-16",
		"runtime": 114,
		"genre_ids": [
			27,
			9648
		],
		"hash": "C545B46540FD534DC2250342D0C7182475DAD508",
		"updated": "2021-09-15T07:36:34.697+00:00"
	},
	{
		"id": 1128,
		"tmdb_id": 522931,
		"imdb_id": "tt8385148",
		"title": "Vệ Sĩ Sát Thủ 2: Nhà Có Nóc",
		"english_title": "Hitman's Wife's Bodyguard",
		"backdrop_path": "/nkiWymkJMpbCceL59vJHWJTFUln.jpg",
		"imdb": 6.1,
		"release_date": "2021-06-14",
		"runtime": 117,
		"genre_ids": [
			28,
			35,
			53
		],
		"hash": "EEAD43E6FBCFFC02FAC5FDBB724586882FA18C3B",
		"updated": "2021-09-15T07:37:55.513+00:00"
	},
	{
		"id": 1137,
		"tmdb_id": 736073,
		"imdb_id": "tt14324650",
		"title": "Người Dơi: Halloween Dài, Phần Một",
		"english_title": "Batman: The Long Halloween, Part One",
		"backdrop_path": "/2uc9wzQ8KXcP7F5jzjyCbnudq32.jpg",
		"imdb": 7.3,
		"release_date": "2021-06-21",
		"runtime": 85,
		"genre_ids": [
			16,
			9648,
			28,
			80
		],
		"hash": "2ED06163703824BD0BE7DC884B65724C7FD4A3B9",
		"updated": "2021-09-15T07:42:02.836+00:00"
	},
	{
		"id": 1134,
		"tmdb_id": 436969,
		"imdb_id": "tt6334354",
		"title": "Suicide Squad: Điệp vụ cảm tử",
		"english_title": "The Suicide Squad",
		"backdrop_path": "/ir30jXozCwU7tuIZC6gDCMS1Ck3.jpg",
		"imdb": 7.3,
		"release_date": "2021-07-28",
		"runtime": 132,
		"genre_ids": [
			28,
			12,
			35,
			878
		],
		"hash": "B7E42E1F039695F9D2FBD2D559543367CBDD96A9",
		"updated": "2021-10-16T02:14:13.217+00:00"
	},
	{
		"id": 1131,
		"tmdb_id": 451048,
		"imdb_id": "tt0870154",
		"title": "Jungle Cruise: Thám Hiểm Rừng Xanh",
		"english_title": "Jungle Cruise",
		"backdrop_path": "/fJNLzKQgdBOU6KxZlHQ4UM7bKIz.jpg",
		"imdb": 6.6,
		"release_date": "2021-07-28",
		"runtime": 127,
		"genre_ids": [
			12,
			14,
			35,
			28
		],
		"hash": "33969D34FC1A1988ABDFE061F4EC19AD70D7BE4B",
		"updated": "2021-09-15T07:46:36.967+00:00"
	},
	{
		"id": 1238,
		"tmdb_id": 437103,
		"imdb_id": "tt6493286",
		"title": "1987",
		"english_title": "1987: When the Day Comes",
		"backdrop_path": "/ctVqiXvQI3MioVxg4NQyYz2pbsd.jpg",
		"imdb": 7.8,
		"release_date": "2017-12-27",
		"runtime": 129,
		"genre_ids": [
			18,
			36,
			53
		],
		"hash": "E3D36F3AD3A40585DFF940F132FD1C6A6CF9D8AB",
		"updated": "2021-09-19T10:32:33.303+00:00"
	},
	{
		"id": 1136,
		"tmdb_id": 632357,
		"imdb_id": "tt9419056",
		"title": "Ấn Quỷ",
		"english_title": "The Unholy",
		"backdrop_path": "/rur1m5UQDpXiU042HWX8ArxoyQs.jpg",
		"imdb": 5.1,
		"release_date": "2021-03-31",
		"runtime": 99,
		"genre_ids": [
			27
		],
		"hash": "44A02B80BFF36869556F0F6644705FCCDB705F06",
		"updated": "2021-09-24T02:48:17.181+00:00"
	},
	{
		"id": 1145,
		"tmdb_id": 601666,
		"imdb_id": "tt9893250",
		"title": "Người Giám Hộ Hoàn Hảo",
		"english_title": "I Care a Lot",
		"backdrop_path": "/a5gPkRzBZNMVLhxoy255sCErZ4B.jpg",
		"imdb": 6.3,
		"release_date": "2021-02-19",
		"runtime": 119,
		"genre_ids": [
			35,
			80,
			53
		],
		"hash": "439232F66CC8171D02AC4F6E943742FD178A3BB6",
		"updated": "2021-09-15T03:23:28.456+00:00"
	},
	{
		"id": 1152,
		"tmdb_id": 587807,
		"imdb_id": "tt1361336",
		"title": "Tom và Jerry: Quậy Tung New York",
		"english_title": "Tom & Jerry",
		"backdrop_path": "/cWlSnILiBXolR5vE1nHU2MzSxSp.jpg",
		"imdb": 5.3,
		"release_date": "2021-02-11",
		"runtime": 101,
		"genre_ids": [
			35,
			10751,
			16
		],
		"hash": "F778B064DFC5FED9CD1B60CE46611623E1259C69",
		"updated": "2021-09-15T03:36:41.516+00:00"
	},
	{
		"id": 1150,
		"tmdb_id": 630586,
		"imdb_id": "tt9110170",
		"title": "Ngã Rẽ Tử Thần",
		"english_title": "Wrong Turn",
		"backdrop_path": "/4xLbNRW0AzxeXVZ0UXBo9LQsrrh.jpg",
		"imdb": 5.5,
		"release_date": "2021-01-26",
		"runtime": 110,
		"genre_ids": [
			27,
			53
		],
		"hash": "C7240F4C9FAEA09B53B49779E39F767B8B32DE29",
		"updated": "2021-09-15T05:33:21.053+00:00"
	},
	{
		"id": 1141,
		"tmdb_id": 544401,
		"imdb_id": "tt9130508",
		"title": "Cherry",
		"english_title": "Cherry",
		"backdrop_path": "/vGV4HRDCW38vPzu79l67IWwh3DX.jpg",
		"imdb": 6.6,
		"release_date": "2021-02-26",
		"runtime": 140,
		"genre_ids": [
			80,
			18,
			53
		],
		"hash": "F6B5020DFDD7E6621CF5000BEF8E07AE8D0318A8",
		"updated": "2021-09-15T05:45:26.425+00:00"
	},
	{
		"id": 1147,
		"tmdb_id": 567189,
		"imdb_id": "tt0499097",
		"title": "Không Hối Tiếc",
		"english_title": "Tom Clancy's Without Remorse",
		"backdrop_path": "/kn9osqcpSmZTEkpiFuo4QG1UPEk.jpg",
		"imdb": 5.8,
		"release_date": "2021-04-29",
		"runtime": 109,
		"genre_ids": [
			28,
			12,
			53,
			10752
		],
		"hash": "94DBD05EC34F2E7A975F3804F0A67BDA5C681EEC",
		"updated": "2021-09-15T06:06:27.573+00:00"
	},
	{
		"id": 1140,
		"tmdb_id": 607259,
		"imdb_id": "tt4733624",
		"title": "Làm Cha",
		"english_title": "Fatherhood",
		"backdrop_path": "/miOnymJ0dN2psWBB8Vleo3fUyrc.jpg",
		"imdb": 6.6,
		"release_date": "2021-06-18",
		"runtime": 109,
		"genre_ids": [
			18,
			10751,
			35
		],
		"hash": "5CB37E623BDD1F82F5A88E2E132B9333109751CA",
		"updated": "2021-09-15T07:08:07.306+00:00"
	},
	{
		"id": 1146,
		"tmdb_id": 811367,
		"imdb_id": "tt14499632",
		"title": "22 vs. Trái Đất",
		"english_title": "22 vs. Earth",
		"backdrop_path": "/ytNh1WaXYcmTv1Sg7v8VQVb6BoS.jpg",
		"imdb": 6.5,
		"release_date": "2021-04-30",
		"runtime": 9,
		"genre_ids": [
			10751,
			16,
			35
		],
		"hash": "CA644552193D46665C79C3DC8670BDEF580F5A17",
		"updated": "2021-09-15T06:50:26.058+00:00"
	},
	{
		"id": 1139,
		"tmdb_id": 423108,
		"imdb_id": "tt7069210",
		"title": "Ám Ảnh Kinh Hoàng: Ma Xui Quỷ Khiến",
		"english_title": "The Conjuring: The Devil Made Me Do It",
		"backdrop_path": "/k39HmBAxY3aiwOsHjo6Il9qYiwX.jpg",
		"imdb": 6.3,
		"release_date": "2021-05-25",
		"runtime": 111,
		"genre_ids": [
			27,
			9648,
			53
		],
		"hash": "7D5EA42115F9346F622C6C58489F1BDECDE96448",
		"updated": "2021-09-15T06:59:38.144+00:00"
	},
	{
		"id": 1144,
		"tmdb_id": 587996,
		"imdb_id": "tt9845564",
		"title": "Dưới Độ Không",
		"english_title": "Below Zero",
		"backdrop_path": "/pQkC7sUME53GtzzR47NVrngN7Ch.jpg",
		"imdb": 6.2,
		"release_date": "2021-01-29",
		"runtime": 106,
		"genre_ids": [
			28,
			80,
			53
		],
		"hash": "64B643AF2F5FE152198F2CC98F576799F040D4ED",
		"updated": "2021-09-15T07:16:58.269+00:00"
	},
	{
		"id": 1138,
		"tmdb_id": 602063,
		"imdb_id": "tt11809034",
		"title": "Lãng Khách Kenshin: Hồi Kết",
		"english_title": "Rurouni Kenshin: The Final",
		"backdrop_path": "/hrupEUsVaHZzgJrfcIT6LHcD9FV.jpg",
		"imdb": 7.3,
		"release_date": "2021-04-23",
		"runtime": 138,
		"genre_ids": [
			28,
			12,
			18
		],
		"hash": "F04500B178D0BE7BF819CFCD3E89D5D7EA87CA95",
		"updated": "2021-09-15T07:09:08.39+00:00"
	},
	{
		"id": 1151,
		"tmdb_id": 760883,
		"imdb_id": "tt6402468",
		"title": "Bầu Trời Nhuốm Máu",
		"english_title": "Blood Red Sky",
		"backdrop_path": "/2duEholjy7YeSDN1dYrS1be6jEC.jpg",
		"imdb": 6.1,
		"release_date": "2021-07-23",
		"runtime": 121,
		"genre_ids": [
			27,
			53,
			28
		],
		"hash": "5554F61D24C04C460A09DB6485C1A00219E5A8BA",
		"updated": "2021-12-03T04:46:27.929+00:00"
	},
	{
		"id": 1169,
		"tmdb_id": 776503,
		"imdb_id": "tt10366460",
		"title": "Giai Điệu Con Tim",
		"english_title": "CODA",
		"backdrop_path": "/6I2AxHEtUyD6MWF0CX4j9CeWVpn.jpg",
		"imdb": 8.1,
		"release_date": "2021-07-30",
		"runtime": 112,
		"genre_ids": [
			18,
			10402,
			10749
		],
		"hash": "3C26C9D8C3692D3C17007814E72A423715319255",
		"updated": "2021-12-05T06:31:24.219+00:00"
	},
	{
		"id": 1173,
		"tmdb_id": 4347,
		"imdb_id": "tt0783233",
		"title": "Chuộc Lại Lỗi Lầm",
		"english_title": "Atonement",
		"backdrop_path": "/sCDWoyRutBPVHzVGB2nmXE8oxaX.jpg",
		"imdb": 7.8,
		"release_date": "2007-09-07",
		"runtime": 123,
		"genre_ids": [
			18,
			10749
		],
		"hash": "9C2BD436EC20365181DF7F9D25BBF6D9D195CA06",
		"updated": "2021-09-19T10:15:45.882+00:00"
	},
	{
		"id": 1172,
		"tmdb_id": 283566,
		"imdb_id": "tt2458948",
		"title": "Evangelion: 3.0+1.0 Thrice Upon a Time",
		"english_title": "Evangelion: 3.0+1.0 Thrice Upon a Time",
		"backdrop_path": "/yyHZT90Egv178RAtLp06YqKYQxj.jpg",
		"imdb": 8.1,
		"release_date": "2021-03-08",
		"runtime": 155,
		"genre_ids": [
			16,
			28,
			18,
			878
		],
		"hash": "21957D7A7B0D79928C717404F98514D7646DE1A9",
		"updated": "2021-12-22T01:01:03.503+00:00"
	},
	{
		"id": 1133,
		"tmdb_id": 617502,
		"imdb_id": "tt10228134",
		"title": "Giật Điện",
		"english_title": "Jolt",
		"backdrop_path": "/t9U70OMEqoHj72WO4UqYtQ1lY61.jpg",
		"imdb": 5.6,
		"release_date": "2021-07-15",
		"runtime": 91,
		"genre_ids": [
			28,
			35
		],
		"hash": "D94A90AA30DCA1D7478570292D15EC257F43C2F4",
		"updated": "2021-09-15T07:51:07.332+00:00"
	},
	{
		"id": 1143,
		"tmdb_id": 588228,
		"imdb_id": "tt9777666",
		"title": "Cuộc Chiến Tương Lai",
		"english_title": "The Tomorrow War",
		"backdrop_path": "/80OePJ6cOp7yEkZ3bknA6DRRqSD.jpg",
		"imdb": 6.6,
		"release_date": "2021-06-30",
		"runtime": 138,
		"genre_ids": [
			28,
			878
		],
		"hash": "0BCD062CC8D97872F8526F0B1A9E029D601BB9D1",
		"updated": "2021-11-28T06:09:51.406+00:00"
	},
	{
		"id": 1167,
		"tmdb_id": 579047,
		"imdb_id": "tt3272066",
		"title": "Hồi Sinh Ký Ức",
		"english_title": "Reminiscence",
		"backdrop_path": "/p9KXJKmmcBUMqXg0Ovk7Oa86psi.jpg",
		"imdb": 5.9,
		"release_date": "2021-08-19",
		"runtime": 116,
		"genre_ids": [
			878,
			9648,
			10749
		],
		"hash": "402C6610294ADDDD437197F8916E402EFE673B54",
		"updated": "2021-10-28T11:29:34.087+00:00"
	},
	{
		"id": 1170,
		"tmdb_id": 559907,
		"imdb_id": "tt9243804",
		"title": "Hiệp Sĩ Xanh",
		"english_title": "The Green Knight",
		"backdrop_path": "/1ZxBH4SEedXVKhTRAOEIFFCHOfP.jpg",
		"imdb": 6.6,
		"release_date": "2021-07-29",
		"runtime": 130,
		"genre_ids": [
			12,
			18,
			14
		],
		"hash": "B685367894123FCA4C8977996E0479E2A7C30CD7",
		"updated": "2021-09-15T07:53:54.521+00:00"
	},
	{
		"id": 1149,
		"tmdb_id": 845222,
		"imdb_id": "tt13412252",
		"title": "Vương Triều Xác Sống: Ashin Phương Bắc",
		"english_title": "Kingdom: Ashin of the North",
		"backdrop_path": "/lzbq6uYsG1UmiHQU5cJfHXFFLI9.jpg",
		"imdb": 7.1,
		"release_date": "2021-07-23",
		"runtime": 92,
		"genre_ids": [
			18,
			14,
			53
		],
		"hash": "729D7C716A4165230C40356D28BA4D1554A2DFFC",
		"updated": "2021-09-15T15:47:24.173+00:00"
	},
	{
		"id": 1175,
		"tmdb_id": 46146,
		"imdb_id": "tt1740707",
		"title": "Trolljegeren",
		"english_title": "Troll Hunter",
		"backdrop_path": "/njyZXa26rGlmZgO6j7MVCpMqJvc.jpg",
		"imdb": 7,
		"release_date": "2010-10-29",
		"runtime": 103,
		"genre_ids": [
			14,
			27
		],
		"hash": "32BA4AE4901090E69BD000A363BE84514F92CD36",
		"updated": "2021-09-19T10:16:05.319+00:00"
	},
	{
		"id": 1177,
		"tmdb_id": 809,
		"imdb_id": "tt0298148",
		"title": "Gã Chằn Tinh Tốt Bụng 2",
		"english_title": "Shrek 2",
		"backdrop_path": "/zzuMpUoFcvICLxKPEKFOmRTJb7H.jpg",
		"imdb": 7.2,
		"release_date": "2004-05-19",
		"runtime": 93,
		"genre_ids": [
			16,
			10751,
			35,
			14,
			12
		],
		"hash": "BC30A6186B6E3C86E560D8741EDBF277D06C6136",
		"updated": "2021-09-19T10:16:14.027+00:00"
	},
	{
		"id": 1148,
		"tmdb_id": 568620,
		"imdb_id": "tt8404256",
		"title": "Biệt Đội G.I. Joe: Xà Nhãn Báo Thù",
		"english_title": "Snake Eyes: G.I. Joe Origins",
		"backdrop_path": "/h5pUsPt3SRwrHeyMEOarzFkcyIW.jpg",
		"imdb": 5.4,
		"release_date": "2021-07-22",
		"runtime": 121,
		"genre_ids": [
			28,
			12
		],
		"hash": "B154F6140D1E267D1116B3A4D15F43C26E5C90ED",
		"updated": "2021-10-22T01:46:54.497+00:00"
	},
	{
		"id": 1186,
		"tmdb_id": 645788,
		"imdb_id": "tt6079772",
		"title": "Nữ Sát Thủ",
		"english_title": "The Protégé",
		"backdrop_path": "/4O40vu2KOgnFfxvrZgzBG6havQ.jpg",
		"imdb": 6.1,
		"release_date": "2021-08-19",
		"runtime": 109,
		"genre_ids": [
			28,
			53
		],
		"hash": "F9F94AA150547B2FA857FEDEE0F57F472331E9CC",
		"updated": "2021-09-15T07:56:09.432+00:00"
	},
	{
		"id": 1163,
		"tmdb_id": 619297,
		"imdb_id": "tt10731768",
		"title": "Đi Tìm Công Lý",
		"english_title": "Sweet Girl",
		"backdrop_path": "/bOJZC4ToKWaDyypUOGTLbgT0MeO.jpg",
		"imdb": 5.5,
		"release_date": "2021-08-18",
		"runtime": 110,
		"genre_ids": [
			28,
			53,
			18
		],
		"hash": "7FEAE8BD992551D527C68686F423CC441169FA3C",
		"updated": "2021-09-15T07:56:54.858+00:00"
	},
	{
		"id": 1182,
		"tmdb_id": 613,
		"imdb_id": "tt0363163",
		"title": "Đế Chế Sụp Đổ",
		"english_title": "Downfall",
		"backdrop_path": "/wM1Ou4vmeJF7nJe4YIzh0cjkG6q.jpg",
		"imdb": 8.2,
		"release_date": "2004-09-08",
		"runtime": 156,
		"genre_ids": [
			18,
			36,
			10752
		],
		"hash": "E83F17E65DCDA6A05146900234ABE10352BBC1F4",
		"updated": "2021-09-16T06:42:04.859+00:00"
	},
	{
		"id": 1184,
		"tmdb_id": 51828,
		"imdb_id": "tt1563738",
		"title": "Một Ngày Để Yêu",
		"english_title": "One Day",
		"backdrop_path": "/qwMKuCbPcGQaTuf6lGA3WVrObXv.jpg",
		"imdb": 7,
		"release_date": "2011-03-02",
		"runtime": 107,
		"genre_ids": [
			18,
			10749
		],
		"hash": "614AACF60140379F8DE0D2253B11408859318997",
		"updated": "2021-12-06T04:11:15.879+00:00"
	},
	{
		"id": 618,
		"tmdb_id": 210577,
		"imdb_id": "tt2267998",
		"title": "Cô Gái Mất Tích",
		"english_title": "Gone Girl",
		"backdrop_path": "/5Tqdk3eezqu945KcBtz3SYQxidN.jpg",
		"imdb": 8.1,
		"release_date": "2014-10-01",
		"runtime": 149,
		"genre_ids": [
			9648,
			53,
			18
		],
		"hash": "D2310F718EB02F98665266786F7D00B42A20F055",
		"updated": "2021-09-17T12:56:59.873+00:00"
	},
	{
		"id": 1176,
		"tmdb_id": 808,
		"imdb_id": "tt0126029",
		"title": "Gã Chằn Tinh Tốt Bụng",
		"english_title": "Shrek",
		"backdrop_path": "/kZy4ApKnFhOekGmOlYtauF2xLWq.jpg",
		"imdb": 7.9,
		"release_date": "2001-05-18",
		"runtime": 90,
		"genre_ids": [
			16,
			35,
			14,
			12,
			10751
		],
		"hash": "7B973E55B2198EAC530440DC7D9589DD708F5692",
		"updated": "2021-09-18T12:24:52.96+00:00"
	},
	{
		"id": 1178,
		"tmdb_id": 37799,
		"imdb_id": "tt1285016",
		"title": "Mạng Xã Hội",
		"english_title": "The Social Network",
		"backdrop_path": "/lpn1whaulslRtxxufxX9lhEQ0Bn.jpg",
		"imdb": 7.7,
		"release_date": "2010-10-01",
		"runtime": 121,
		"genre_ids": [
			18
		],
		"hash": "965554390D50F07B206115A0D6D619D5678AD5A4",
		"updated": "2021-09-19T10:16:31.408+00:00"
	},
	{
		"id": 1190,
		"tmdb_id": 398818,
		"imdb_id": "tt5726616",
		"title": "Gọi Em Bằng Tên Anh",
		"english_title": "Call Me by Your Name",
		"backdrop_path": "/yF3tTgu5O9r4rFvpUQ4RzWkATB2.jpg",
		"imdb": 7.9,
		"release_date": "2017-09-01",
		"runtime": 132,
		"genre_ids": [
			10749,
			18
		],
		"hash": "0B3E21F7E5B22895C412A5B24237F51076582F6C",
		"updated": "2021-09-18T12:27:19.924+00:00"
	},
	{
		"id": 1179,
		"tmdb_id": 811959,
		"imdb_id": "tt10443794",
		"title": "Lịch Sử Manchester United",
		"english_title": "The United Way",
		"backdrop_path": "/9RKGDZ5PAX3LGER44ieTrkLOj6j.jpg",
		"imdb": 7.4,
		"release_date": "2021-05-10",
		"runtime": 90,
		"genre_ids": [
			99
		],
		"hash": "0057EE9BB4EA5434E461E365A5F3E585764D406B",
		"updated": "2021-09-19T10:16:40.962+00:00"
	},
	{
		"id": 1180,
		"tmdb_id": 302946,
		"imdb_id": "tt2140479",
		"title": "Mật Danh: Kế Toán",
		"english_title": "The Accountant",
		"backdrop_path": "/n7xizEJJHitS4TMxXxODrXvv41J.jpg",
		"imdb": 7.3,
		"release_date": "2016-10-13",
		"runtime": 128,
		"genre_ids": [
			80,
			53,
			18
		],
		"hash": "DEFA7D8218BAA4F3B0F54A7A7619911D83B11607",
		"updated": "2021-09-19T10:16:56.828+00:00"
	},
	{
		"id": 1181,
		"tmdb_id": 278236,
		"imdb_id": "tt3149038",
		"title": "X+Y",
		"english_title": "X+Y",
		"backdrop_path": "/xPo3y1Z9BObabWR3tZ0ElKqy15r.jpg",
		"imdb": 7.1,
		"release_date": "2014-03-13",
		"runtime": 111,
		"genre_ids": [
			18
		],
		"hash": "EEFDB5FB0EA693A75FEBF320F7C86461ECE86507",
		"updated": "2021-09-19T10:17:05.461+00:00"
	},
	{
		"id": 1183,
		"tmdb_id": 10404,
		"imdb_id": "tt0101640",
		"title": "Đèn lồng đỏ treo cao",
		"english_title": "Raise the Red Lantern",
		"backdrop_path": "/7aRdT0ijJdME6jY8PzHgzAmw0dd.jpg",
		"imdb": 8.1,
		"release_date": "1991-12-20",
		"runtime": 125,
		"genre_ids": [
			18
		],
		"hash": "D5C0A9BCC52685DD8579E0333B19505FF37D8324",
		"updated": "2021-09-19T10:17:12.503+00:00"
	},
	{
		"id": 1189,
		"tmdb_id": 13448,
		"imdb_id": "tt0808151",
		"title": "Thiên Thần & Ác Quỷ",
		"english_title": "Angels & Demons",
		"backdrop_path": "/pEI1w71HQTpzzUPVtT6tZWmAB2U.jpg",
		"imdb": 6.7,
		"release_date": "2009-05-13",
		"runtime": 138,
		"genre_ids": [
			53,
			9648
		],
		"hash": "197188E1D16D82FA9ED73264014CB5B6C8C3B2CD",
		"updated": "2021-09-19T10:18:35.945+00:00"
	},
	{
		"id": 1187,
		"tmdb_id": 42006,
		"imdb_id": "tt0093206",
		"title": "Cao Lương Đỏ",
		"english_title": "Red Sorghum",
		"backdrop_path": "/4bjVA2NrkrdNPPpKUt7eR2P3xlf.jpg",
		"imdb": 7.4,
		"release_date": "1987-10-10",
		"runtime": 91,
		"genre_ids": [
			18,
			10752
		],
		"hash": "39CE9C79F7C40EF6435AAFFF652EADD97C8380B5",
		"updated": "2021-09-19T10:18:22.106+00:00"
	},
	{
		"id": 1188,
		"tmdb_id": 639,
		"imdb_id": "tt0098635",
		"title": "Khi Harry Gặp Sally...",
		"english_title": "When Harry Met Sally...",
		"backdrop_path": "/9USJhu2xLmJb1vqP6wRL7MQMXzD.jpg",
		"imdb": 7.6,
		"release_date": "1989-01-12",
		"runtime": 96,
		"genre_ids": [
			35,
			10749,
			18
		],
		"hash": "A0A3F57E4E6C958EA157C8802C1262C7D977CF50",
		"updated": "2021-09-19T10:18:01.184+00:00"
	},
	{
		"id": 566,
		"tmdb_id": 210479,
		"imdb_id": "tt2692904",
		"title": "Loạn Đả Tinh Thần",
		"english_title": "Locke",
		"backdrop_path": "/weilfHYpd84DTNux01h8tEsKosL.jpg",
		"imdb": 7.1,
		"release_date": "2014-04-10",
		"runtime": 85,
		"genre_ids": [
			18,
			53
		],
		"hash": "C8FB9F84FAF1DDE700719676DE253085017A86B7",
		"updated": "2021-09-19T10:18:45.56+00:00"
	},
	{
		"id": 79,
		"tmdb_id": 10674,
		"imdb_id": "tt0120762",
		"title": "Hoa Mộc Lan - 1998",
		"english_title": "Mulan - 1998",
		"backdrop_path": "/l9SZBrcphlgygG57NjbF8ipqIgc.jpg",
		"imdb": 7.6,
		"release_date": "1998-06-18",
		"runtime": 88,
		"genre_ids": [
			16,
			10751,
			12
		],
		"hash": "8E80FCBCA1ED9BDB332A61F1B0CF2E61AF56EE46",
		"updated": "2021-09-19T10:18:57.692+00:00"
	},
	{
		"id": 1191,
		"tmdb_id": 9769,
		"imdb_id": "tt0119558",
		"title": "Nàng Lotita",
		"english_title": "Lolita",
		"backdrop_path": "/kYZbdtV7JKYjyCwFzh3ocoGnLnk.jpg",
		"imdb": 6.9,
		"release_date": "1997-09-27",
		"runtime": 137,
		"genre_ids": [
			18
		],
		"hash": "CD0B20456D6C4DE4FD5F96DFFAE309B35C69C8FE",
		"updated": "2021-09-19T10:19:08.025+00:00"
	},
	{
		"id": 1195,
		"tmdb_id": 425,
		"imdb_id": "tt0268380",
		"title": "Kỷ Băng Hà",
		"english_title": "Ice Age",
		"backdrop_path": "/bPBiJSwVH0aLmESTkA8DBWshVxj.jpg",
		"imdb": 7.5,
		"release_date": "2002-03-10",
		"runtime": 81,
		"genre_ids": [
			16,
			35,
			10751,
			12
		],
		"hash": "9338693DA8A6011675C732AE140EE227A9D06DDF",
		"updated": "2021-09-19T10:19:15.992+00:00"
	},
	{
		"id": 1198,
		"tmdb_id": 57800,
		"imdb_id": "tt1667889",
		"title": "Kỷ Băng Hà 4: Lục Địa Trôi Dạt",
		"english_title": "Ice Age: Continental Drift",
		"backdrop_path": "/wZMZgllDGigqwgoPk4jvrb3OGWd.jpg",
		"imdb": 6.5,
		"release_date": "2012-06-27",
		"runtime": 88,
		"genre_ids": [
			16,
			35,
			12,
			10751
		],
		"hash": "17F648398EBC82DF11B132AF989778C918AC0FF9",
		"updated": "2021-09-19T10:19:58.276+00:00"
	},
	{
		"id": 1196,
		"tmdb_id": 950,
		"imdb_id": "tt0438097",
		"title": "Kỷ Băng Hà 2: Băng Tan",
		"english_title": "Ice Age: The Meltdown",
		"backdrop_path": "/gIEkfAMdIXU6inZdHyt5HXqeMMy.jpg",
		"imdb": 6.8,
		"release_date": "2006-03-29",
		"runtime": 91,
		"genre_ids": [
			16,
			10751,
			35,
			12
		],
		"hash": "D90078EADE11CDE424F62B1531859D5607806E56",
		"updated": "2021-09-19T10:19:32.724+00:00"
	},
	{
		"id": 1197,
		"tmdb_id": 8355,
		"imdb_id": "tt1080016",
		"title": "Kỷ Băng Hà 3: Khủng Long Thức Giấc",
		"english_title": "Ice Age: Dawn of the Dinosaurs",
		"backdrop_path": "/z3NwTOiJj4AJ61XP7xmivaBo0B2.jpg",
		"imdb": 6.9,
		"release_date": "2009-06-29",
		"runtime": 94,
		"genre_ids": [
			16,
			35,
			10751,
			12
		],
		"hash": "474C28F7C77AC8530235233775079FE43DB00A77",
		"updated": "2021-09-19T10:19:48.051+00:00"
	},
	{
		"id": 951,
		"tmdb_id": 496243,
		"imdb_id": "tt6751668",
		"title": "Ký Sinh Trùng",
		"english_title": "Parasite",
		"backdrop_path": "/TU9NIjwzjoKPwQHoHshkFcQUCG.jpg",
		"imdb": 8.6,
		"release_date": "2019-05-30",
		"runtime": 133,
		"genre_ids": [
			35,
			53,
			18
		],
		"hash": "CE6D2A6BBC439A8F6B94B23BA63B04164400FE3B",
		"updated": "2021-11-27T10:51:07.842+00:00"
	},
	{
		"id": 1192,
		"tmdb_id": 872,
		"imdb_id": "tt0045152",
		"title": "Hát Dưới Mưa",
		"english_title": "Singin' in the Rain",
		"backdrop_path": "/hUCbTukMQACtDkomHK67BafwPnk.jpg",
		"imdb": 8.3,
		"release_date": "1952-04-09",
		"runtime": 103,
		"genre_ids": [
			35,
			10402,
			10749
		],
		"hash": "FEF325BB26821B2ECA22DE13B153D698A5848F83",
		"updated": "2021-09-16T04:45:03.886+00:00"
	},
	{
		"id": 1193,
		"tmdb_id": 15,
		"imdb_id": "tt0033467",
		"title": "Công dân Kane",
		"english_title": "Citizen Kane",
		"backdrop_path": "/cis8NS6598onNKaOevnx1ZarydW.jpg",
		"imdb": 8.3,
		"release_date": "1941-04-17",
		"runtime": 119,
		"genre_ids": [
			9648,
			18
		],
		"hash": "21C1AC1B69FDE8BFFDD301970A8B571F13AEF500",
		"updated": "2021-09-16T04:45:43.086+00:00"
	},
	{
		"id": 1219,
		"tmdb_id": 1578,
		"imdb_id": "tt0081398",
		"title": "Raging Bull",
		"english_title": "Raging Bull",
		"backdrop_path": "/1cDU30i6lEOvnIQzRMkJXEXXyfn.jpg",
		"imdb": 8.2,
		"release_date": "1980-11-14",
		"runtime": 129,
		"genre_ids": [
			18,
			36
		],
		"hash": "511185D1D57D7A3EEF6FF6AD3DF364D341232750",
		"updated": "2021-09-16T06:42:34.126+00:00"
	},
	{
		"id": 1215,
		"tmdb_id": 581392,
		"imdb_id": "tt8850222",
		"title": "Bán Đảo Peninsula",
		"english_title": "Peninsula",
		"backdrop_path": "/9794HhDqe5ISu6WI8iqxaJcQaAo.jpg",
		"imdb": 5.5,
		"release_date": "2020-07-15",
		"runtime": 116,
		"genre_ids": [
			28,
			27,
			53
		],
		"hash": "D5436F9F8FC89A8B45D25789742141EDB53A9A48",
		"updated": "2021-09-17T04:19:33.749+00:00"
	},
	{
		"id": 1218,
		"tmdb_id": 531219,
		"imdb_id": "tt0805647",
		"title": "Phù Thủy, Phù Thủy",
		"english_title": "The Witches",
		"backdrop_path": "/n1pNyAVAe0pJMwcTNYNwKGHXjVx.jpg",
		"imdb": 5.3,
		"release_date": "2020-10-25",
		"runtime": 106,
		"genre_ids": [
			10751,
			14,
			12,
			35,
			27
		],
		"hash": "1956284560A8D18393868073C8E4B67B55C62F35",
		"updated": "2021-09-17T04:21:30.481+00:00"
	},
	{
		"id": 1214,
		"tmdb_id": 655,
		"imdb_id": "tt0087884",
		"title": "Paris, Texas",
		"english_title": "Paris, Texas",
		"backdrop_path": "/lo7cot0AgdqlHXkzGojiNNoR4zR.jpg",
		"imdb": 8.1,
		"release_date": "1984-08-23",
		"runtime": 146,
		"genre_ids": [
			18
		],
		"hash": "F4747ECDDB1E0EF43A299CB781941D18D67C2F68",
		"updated": "2021-09-17T13:21:02.523+00:00"
	},
	{
		"id": 1200,
		"tmdb_id": 381719,
		"imdb_id": "tt5117670",
		"title": "Thỏ Peter",
		"english_title": "Peter Rabbit",
		"backdrop_path": "/t7kbkhq8OBrCGQrY4snZvL1rq8D.jpg",
		"imdb": 6.6,
		"release_date": "2018-02-07",
		"runtime": 93,
		"genre_ids": [
			16,
			12,
			10751
		],
		"hash": "6A949410A0A716FA2FF949830CE2570B57FACE21",
		"updated": "2021-09-18T01:58:07.223+00:00"
	},
	{
		"id": 1207,
		"tmdb_id": 2503,
		"imdb_id": "tt0440963",
		"title": "Siêu Điệp Viên 3: Tối Hậu Thư Của Bourne",
		"english_title": "The Bourne Ultimatum",
		"backdrop_path": "/AffBOduzcA20erdBVclVnSBqRbK.jpg",
		"imdb": 8,
		"release_date": "2007-08-03",
		"runtime": 115,
		"genre_ids": [
			28,
			18,
			9648,
			53
		],
		"hash": "799976b3723ed41e6aebf3e47c3cdc9f41721d9d",
		"updated": "2021-09-18T06:10:43.384+00:00"
	},
	{
		"id": 1205,
		"tmdb_id": 2501,
		"imdb_id": "tt0258463",
		"title": "Siêu Điệp Viên 1: Danh Tính Của Bourne",
		"english_title": "The Bourne Identity",
		"backdrop_path": "/cylME6Zdver7eztKoOfttdk5pRH.jpg",
		"imdb": 7.9,
		"release_date": "2002-06-14",
		"runtime": 119,
		"genre_ids": [
			28,
			18,
			9648,
			53
		],
		"hash": "58564C03D930B85EE066E774AB4985FB18506E5D",
		"updated": "2021-09-18T12:27:51.42+00:00"
	},
	{
		"id": 1199,
		"tmdb_id": 278154,
		"imdb_id": "tt3416828",
		"title": "Kỷ Băng Hà 5: Trời Sập",
		"english_title": "Ice Age: Collision Course",
		"backdrop_path": "/rouLl5x50P6FUwmLkE8HWJrhR6n.jpg",
		"imdb": 5.7,
		"release_date": "2016-06-23",
		"runtime": 95,
		"genre_ids": [
			12,
			16,
			10751,
			35,
			878
		],
		"hash": "CBD24AEBF00EEC3B83763BBADA167AE008CBA49D",
		"updated": "2021-09-19T10:20:10.349+00:00"
	},
	{
		"id": 1202,
		"tmdb_id": 46195,
		"imdb_id": "tt1436562",
		"title": "Chú Vẹt Đuôi Dài",
		"english_title": "Rio",
		"backdrop_path": "/6V5XhkoFESnWlR0z5IQiU2XbhWE.jpg",
		"imdb": 6.9,
		"release_date": "2011-04-03",
		"runtime": 96,
		"genre_ids": [
			16,
			12,
			35,
			10751
		],
		"hash": "BB81A6394948FFB76A791F30D38141A06157214A",
		"updated": "2021-09-19T10:20:23.924+00:00"
	},
	{
		"id": 1203,
		"tmdb_id": 172385,
		"imdb_id": "tt2357291",
		"title": "Chú Vẹt Đuôi Dài 2",
		"english_title": "Rio 2",
		"backdrop_path": "/kpVU45naH1olQhQbkYcblSwFcUi.jpg",
		"imdb": 6.3,
		"release_date": "2014-03-19",
		"runtime": 101,
		"genre_ids": [
			10751,
			12,
			35,
			16
		],
		"hash": "F817191CAC3EC5832B789D39A9B1A2A6C0B43708",
		"updated": "2021-09-19T10:20:31.675+00:00"
	},
	{
		"id": 1204,
		"tmdb_id": 9257,
		"imdb_id": "tt0257076",
		"title": "S.W.A.T.",
		"english_title": "S.W.A.T.",
		"backdrop_path": "/kfZVaDvaLLdDA475wApw2smHcah.jpg",
		"imdb": 6,
		"release_date": "2003-08-08",
		"runtime": 117,
		"genre_ids": [
			28,
			53,
			80
		],
		"hash": "A352AE91972E617B13098CF7D4BF4C367BBF8A68",
		"updated": "2021-09-19T10:20:41.729+00:00"
	},
	{
		"id": 1208,
		"tmdb_id": 49040,
		"imdb_id": "tt1194173",
		"title": "Siêu Điệp Viên 4: Di Sản Của Bourne",
		"english_title": "The Bourne Legacy",
		"backdrop_path": "/j2qCDVZKrJch0bfm9lx2nQy5krJ.jpg",
		"imdb": 6.6,
		"release_date": "2012-08-08",
		"runtime": 135,
		"genre_ids": [
			28,
			53
		],
		"hash": "96DCC84F77266517AAD32AFF08CAE7C3BB765FDA",
		"updated": "2021-09-19T10:21:10.753+00:00"
	},
	{
		"id": 1209,
		"tmdb_id": 324668,
		"imdb_id": "tt4196776",
		"title": "Siêu Điệp Viên 5: Tái Xuất",
		"english_title": "Jason Bourne",
		"backdrop_path": "/jTk1PXXLN25cy4XpRQlvehrCH0S.jpg",
		"imdb": 6.6,
		"release_date": "2016-07-27",
		"runtime": 123,
		"genre_ids": [
			28,
			53
		],
		"hash": "F6847E2B2DA3351902F162797918ADDE2D66979D",
		"updated": "2021-09-19T10:21:20.178+00:00"
	},
	{
		"id": 1210,
		"tmdb_id": 9323,
		"imdb_id": "tt0113568",
		"title": "Hồn Ma Vô Tội",
		"english_title": "Ghost in the Shell",
		"backdrop_path": "/dC7diixUWOt9fATCjoSnrV4Lzgi.jpg",
		"imdb": 8,
		"release_date": "1995-11-18",
		"runtime": 83,
		"genre_ids": [
			28,
			16,
			878
		],
		"hash": "e0af50895c6c24b60d6c73400fe9687e458c1a03",
		"updated": "2021-09-19T10:29:20.001+00:00"
	},
	{
		"id": 1211,
		"tmdb_id": 183011,
		"imdb_id": "tt2820466",
		"title": "Liên Minh Công Lý: Nghịch Lý Tia Chớp",
		"english_title": "Justice League: The Flashpoint Paradox",
		"backdrop_path": "/cbzN3xLVPPNKXuVYymuRWteOzTW.jpg",
		"imdb": 8.1,
		"release_date": "2013-07-30",
		"runtime": 75,
		"genre_ids": [
			878,
			16,
			28,
			12
		],
		"hash": "09BAE54C000480EC23976A62C448B709846C5FA5",
		"updated": "2021-09-19T10:29:32.737+00:00"
	},
	{
		"id": 1212,
		"tmdb_id": 217993,
		"imdb_id": "tt3060952",
		"title": "Justice League: War",
		"english_title": "Justice League: War",
		"backdrop_path": "/oTwbtX0giCN83e4PliRD9jukOWH.jpg",
		"imdb": 7.3,
		"release_date": "2014-02-02",
		"runtime": 79,
		"genre_ids": [
			16,
			28
		],
		"hash": "27390BBB0CFF335679C06C1235DF34F88B08AC76",
		"updated": "2021-09-19T10:29:41.318+00:00"
	},
	{
		"id": 1216,
		"tmdb_id": 682153,
		"imdb_id": "tt10588750",
		"title": "Doraemon: Nobita và Những Bạn Khủng Long Mới",
		"english_title": "Doraemon: Nobita's New Dinosaur",
		"backdrop_path": "/8HK8Ce6JpAb8EJTjHKAWhnYy0xi.jpg",
		"imdb": 7.5,
		"release_date": "2020-08-07",
		"runtime": 110,
		"genre_ids": [
			16,
			12
		],
		"hash": "4BBFBACDF1406C1466BF10DBDD519E8DC3694FD4",
		"updated": "2021-09-19T10:30:32.048+00:00"
	},
	{
		"id": 1206,
		"tmdb_id": 2502,
		"imdb_id": "tt0372183",
		"title": "Siêu Điệp Viên 2: Quyền Lực Của Bourne",
		"english_title": "The Bourne Supremacy",
		"backdrop_path": "/dlgWCioLVLihadFTg1InE5PybrC.jpg",
		"imdb": 7.7,
		"release_date": "2004-07-23",
		"runtime": 108,
		"genre_ids": [
			28,
			18,
			53
		],
		"hash": "f06b4b62fbd503e020b4ff6d6761f54ba1b1907b",
		"updated": "2021-11-28T03:26:45.618+00:00"
	},
	{
		"id": 1217,
		"tmdb_id": 728754,
		"imdb_id": "tt13428402",
		"title": "Đôi Bạn Thân 2",
		"english_title": "Stand by Me Doraemon 2",
		"backdrop_path": "/fStC0dSCRQslE9NzXa36EyOom81.jpg",
		"imdb": 8,
		"release_date": "2020-11-20",
		"runtime": 96,
		"genre_ids": [
			16
		],
		"hash": "3D4C272A7ED67865F63DEBB95D68F17D8ABB5F65",
		"updated": "2021-11-24T02:46:07.71+00:00"
	},
	{
		"id": 1244,
		"tmdb_id": 459267,
		"imdb_id": "tt6927316",
		"title": "Con Người, Không Gian, Thời Gian Và Con Người",
		"english_title": "Human, Space, Time and Human",
		"backdrop_path": "/4lRT48BTQo7QLlZ3eq86GoPYJRZ.jpg",
		"imdb": 5.8,
		"release_date": "2018-02-01",
		"runtime": 122,
		"genre_ids": [
			18
		],
		"hash": "EC987DBB81E296CBD24CDF4C61F5C0C93D3AA138",
		"updated": "2021-09-18T01:59:02.352+00:00"
	},
	{
		"id": 1228,
		"tmdb_id": 11282,
		"imdb_id": "tt0366551",
		"title": "Harold & Kumar: Đến Lâu Đài Trắng",
		"english_title": "Harold & Kumar Go to White Castle",
		"backdrop_path": "/rhqZCh9kxnbmqgEvc0rK5eIEQHw.jpg",
		"imdb": 7,
		"release_date": "2004-05-30",
		"runtime": 88,
		"genre_ids": [
			35,
			12
		],
		"hash": "E69D10F1D9651B984E22F8FD4BDE430AE098E5CB",
		"updated": "2021-09-19T10:31:20.078+00:00"
	},
	{
		"id": 968,
		"tmdb_id": 287947,
		"imdb_id": "tt0448115",
		"title": "Shazam!",
		"english_title": "Shazam!",
		"backdrop_path": "/oVRl8WMCD4vJiIrlHu2YUjz6CAx.jpg",
		"imdb": 7,
		"release_date": "2019-03-29",
		"runtime": 132,
		"genre_ids": [
			28,
			35,
			14
		],
		"hash": "97F58867E989E0DA30CFC56522B08A01646F27D1",
		"updated": "2021-09-17T07:41:43.873+00:00"
	},
	{
		"id": 1116,
		"tmdb_id": 385128,
		"imdb_id": "tt5433138",
		"title": "Quá Nhanh Quá Nguy Hiểm 9: Huyền Thoại Tốc Độ",
		"english_title": "F9",
		"backdrop_path": "/pkW3zd4PLFFQDpGqYlS9Cw0iukH.jpg",
		"imdb": 5.2,
		"release_date": "2021-05-19",
		"runtime": 145,
		"genre_ids": [
			28,
			80,
			53
		],
		"hash": "C0225EBC5A324BF95B8DC6B2DF8D97B48FE0AFF1",
		"updated": "2021-09-15T05:27:08.672+00:00"
	},
	{
		"id": 1232,
		"tmdb_id": 482373,
		"imdb_id": "tt6246322",
		"title": "Sát Nhân Trong Bóng Tối 2",
		"english_title": "Don't Breathe 2",
		"backdrop_path": "/r88ZImtD58bObrNVoyI9wwL5w6N.jpg",
		"imdb": 6.1,
		"release_date": "2021-08-12",
		"runtime": 98,
		"genre_ids": [
			53,
			27
		],
		"hash": "1C33A5E9379C7AA93F847CAA285AF24ECF9681A7",
		"updated": "2021-09-15T05:25:00.927+00:00"
	},
	{
		"id": 1222,
		"tmdb_id": 505058,
		"imdb_id": "tt4761916",
		"title": "Hủy Kết Bạn 2",
		"english_title": "Unfriended: Dark Web",
		"backdrop_path": "/2Dk9WG8R0PYlgZjo5F9iheKybpO.jpg",
		"imdb": 6,
		"release_date": "2018-07-19",
		"runtime": 93,
		"genre_ids": [
			27,
			9648,
			53
		],
		"hash": "970F3DCA45E7024776939783F8D0D1BE1FA32141",
		"updated": "2021-09-18T01:58:27.241+00:00"
	},
	{
		"id": 1091,
		"tmdb_id": 646207,
		"imdb_id": "tt3758814",
		"title": "Con Đường Băng",
		"english_title": "The Ice Road",
		"backdrop_path": "/gVbC8ri54DztZPI4EYC2OE72Uhl.jpg",
		"imdb": 5.6,
		"release_date": "2021-06-25",
		"runtime": 108,
		"genre_ids": [
			28,
			53
		],
		"hash": "128E25D01BA287EAD64A5ED7511DDC6095C49439",
		"updated": "2021-09-15T05:24:13.187+00:00"
	},
	{
		"id": 1231,
		"tmdb_id": 28,
		"imdb_id": "tt0078788",
		"title": "Lời Sấm Truyền",
		"english_title": "Apocalypse Now",
		"backdrop_path": "/x3i07imkdsXUZtUMwQPGKpKmflL.jpg",
		"imdb": 8.4,
		"release_date": "1979-08-15",
		"runtime": 147,
		"genre_ids": [
			18,
			10752
		],
		"hash": "380CBECBD78723DEA6305DE0ABC6ED22CEACF4E8",
		"updated": "2021-09-16T03:08:02.216+00:00"
	},
	{
		"id": 1235,
		"tmdb_id": 115,
		"imdb_id": "tt0118715",
		"title": "Bá Tước Lebowski",
		"english_title": "The Big Lebowski",
		"backdrop_path": "/sV4f0Is799ZKRyXH6O97FPAINOU.jpg",
		"imdb": 8.1,
		"release_date": "1998-03-06",
		"runtime": 117,
		"genre_ids": [
			35,
			80
		],
		"hash": "E8837464DC6A254F18F610E2AA0D61E008830413",
		"updated": "2021-09-18T02:01:04.33+00:00"
	},
	{
		"id": 1220,
		"tmdb_id": 18329,
		"imdb_id": "tt0118845",
		"title": "Xuân Quang Xạ Tiết",
		"english_title": "Happy Together",
		"backdrop_path": "/uRjXeBb862YCI51GyZfbvWTv46r.jpg",
		"imdb": 7.7,
		"release_date": "1997-05-30",
		"runtime": 96,
		"genre_ids": [
			18,
			10749
		],
		"hash": "C843E61022024FDFE2464A24CEEB2FE508F1D6D9",
		"updated": "2021-09-19T10:30:52.064+00:00"
	},
	{
		"id": 1221,
		"tmdb_id": 277685,
		"imdb_id": "tt3713166",
		"title": "Huỷ Kết Bạn",
		"english_title": "Unfriended",
		"backdrop_path": "/tv1cMZ3fmVTKH1FiNljjMrCvyz9.jpg",
		"imdb": 5.5,
		"release_date": "2015-04-17",
		"runtime": 82,
		"genre_ids": [
			27,
			53,
			9648
		],
		"hash": "07CE5C6B7D5308D18A6ACA9307E4E0EC1494727E",
		"updated": "2021-09-19T10:31:01.088+00:00"
	},
	{
		"id": 1226,
		"tmdb_id": 36095,
		"imdb_id": "tt0123948",
		"title": "Kyua",
		"english_title": "Cure",
		"backdrop_path": "/73hRTdIpS2rGz6PWw2fIEpX2ivS.jpg",
		"imdb": 7.4,
		"release_date": "1997-11-06",
		"runtime": 111,
		"genre_ids": [
			80,
			53,
			27,
			9648
		],
		"hash": "77B240121AC0B28AAFC76C99C9737C25D1D0FB22",
		"updated": "2021-09-19T10:31:10.489+00:00"
	},
	{
		"id": 1229,
		"tmdb_id": 13335,
		"imdb_id": "tt0481536",
		"title": "Harold & Kumar 2: Thoát Khỏi Ngục Guantanamo",
		"english_title": "Harold & Kumar Escape from Guantanamo Bay",
		"backdrop_path": "/knZ1aHwheBallDosSk4aSiQG5Q0.jpg",
		"imdb": 6.6,
		"release_date": "2008-04-25",
		"runtime": 107,
		"genre_ids": [
			35,
			12
		],
		"hash": "761EAD2C455BB571CDCE5CA26BDF4357DA00B7A5",
		"updated": "2021-09-19T10:31:29.405+00:00"
	},
	{
		"id": 1230,
		"tmdb_id": 55465,
		"imdb_id": "tt1268799",
		"title": "Harold & Kumar 3: Giáng Sinh Đáng Nhớ",
		"english_title": "A Very Harold & Kumar Christmas",
		"backdrop_path": "/voF8tYKXpWa6GnDb4IJMIyGoXdP.jpg",
		"imdb": 6.3,
		"release_date": "2011-11-04",
		"runtime": 108,
		"genre_ids": [
			35
		],
		"hash": "B57F26EC658619E9B80678379B27ED70224239EE",
		"updated": "2021-09-19T10:31:37.895+00:00"
	},
	{
		"id": 698,
		"tmdb_id": 300669,
		"imdb_id": "tt4160708",
		"title": "Sát Nhân Trong Bóng Tối",
		"english_title": "Don't Breathe",
		"backdrop_path": "/xcTIwr5UuFcE7BpmZ2hvJijKvth.jpg",
		"imdb": 7.1,
		"release_date": "2016-06-08",
		"runtime": 89,
		"genre_ids": [
			27
		],
		"hash": "3BD27DB4D0A97DAE6A06C47F608C4A9DB171E7A3",
		"updated": "2021-09-19T10:31:47.206+00:00"
	},
	{
		"id": 1234,
		"tmdb_id": 334,
		"imdb_id": "tt0175880",
		"title": "Hương Mộc Lan",
		"english_title": "Magnolia",
		"backdrop_path": "/4qpYhfkhWR1lFFtxjmmG9SrPDUs.jpg",
		"imdb": 8,
		"release_date": "1999-12-10",
		"runtime": 189,
		"genre_ids": [
			18
		],
		"hash": "2DB9EA22348D1CBFA2D79B30456BA11D6788DF60",
		"updated": "2021-09-19T10:32:03.185+00:00"
	},
	{
		"id": 1236,
		"tmdb_id": 4588,
		"imdb_id": "tt0808357",
		"title": "Sắc, Giới",
		"english_title": "Lust, Caution",
		"backdrop_path": "/kV8nGVSRIpNZ42W8Y2vEiz5xrGL.jpg",
		"imdb": 7.5,
		"release_date": "2007-09-28",
		"runtime": 156,
		"genre_ids": [
			28,
			18,
			10749,
			53
		],
		"hash": "EBEB84604E61742C10D0BA441B559A1B33F464EB",
		"updated": "2021-09-19T10:32:15.99+00:00"
	},
	{
		"id": 1239,
		"tmdb_id": 251519,
		"imdb_id": "tt3139072",
		"title": "Son of Batman",
		"english_title": "Son of Batman",
		"backdrop_path": "/rSjFHjE4cCO1eCQ3VN7VRu6ZYqh.jpg",
		"imdb": 6.7,
		"release_date": "2014-05-13",
		"runtime": 74,
		"genre_ids": [
			16,
			28,
			12
		],
		"hash": "088928C10CA8413D763F5ED941C3285A669894C1",
		"updated": "2021-09-19T10:32:42.8+00:00"
	},
	{
		"id": 1240,
		"tmdb_id": 297556,
		"imdb_id": "tt3878542",
		"title": "Justice League: Throne of Atlantis",
		"english_title": "Justice League: Throne of Atlantis",
		"backdrop_path": "/3OGc8ff7cXAaFIcPlBN4rIZF7b.jpg",
		"imdb": 6.7,
		"release_date": "2015-01-27",
		"runtime": 72,
		"genre_ids": [
			878,
			28,
			16,
			12
		],
		"hash": "9379A56BC3A5A279496A7F67C798D113C03B5547",
		"updated": "2021-09-19T10:32:54.206+00:00"
	},
	{
		"id": 1241,
		"tmdb_id": 306947,
		"imdb_id": "tt2400463",
		"title": "Lời Mời",
		"english_title": "The Invitation",
		"backdrop_path": "/y4WHHWMdIPoUrU68qrVb5VMLPU.jpg",
		"imdb": 6.6,
		"release_date": "2015-08-05",
		"runtime": 100,
		"genre_ids": [
			53
		],
		"hash": "30D2502D09B14C63EFF28C19E1F670A796094E74",
		"updated": "2021-09-19T10:33:15.439+00:00"
	},
	{
		"id": 605,
		"tmdb_id": 256274,
		"imdb_id": "tt2870612",
		"title": "Trên Sao Dưới Vậy",
		"english_title": "As Above, So Below",
		"backdrop_path": "/4m8kLCmGbOtrmpMGq1Vb2vn5KWw.jpg",
		"imdb": 6.2,
		"release_date": "2014-08-14",
		"runtime": 93,
		"genre_ids": [
			27,
			53
		],
		"hash": "7DB0C7858C894D3C79462229B599F66E58C3296D",
		"updated": "2021-09-19T10:33:28.047+00:00"
	},
	{
		"id": 1242,
		"tmdb_id": 4552,
		"imdb_id": "tt0365376",
		"title": "Câu Chuyện Hai Chị Em",
		"english_title": "A Tale of Two Sisters",
		"backdrop_path": "/tM7uHa2Km5gSakooTQsZLwit3PK.jpg",
		"imdb": 7.2,
		"release_date": "2003-06-13",
		"runtime": 115,
		"genre_ids": [
			18,
			27,
			9648
		],
		"hash": "D42276E79948CC443A6A20746570FBBB71A8B8C8",
		"updated": "2021-09-19T10:33:36.478+00:00"
	},
	{
		"id": 1243,
		"tmdb_id": 14254,
		"imdb_id": "tt0815245",
		"title": "The Uninvited",
		"english_title": "The Uninvited",
		"backdrop_path": "/6e6B7G7KzyIy7hkHPl2V1DrLe1F.jpg",
		"imdb": 6.3,
		"release_date": "2009-01-30",
		"runtime": 87,
		"genre_ids": [
			27
		],
		"hash": "A72B2D9D549414AED627A06413B03587AE85092C",
		"updated": "2021-09-19T10:33:44.683+00:00"
	},
	{
		"id": 1246,
		"tmdb_id": 460019,
		"imdb_id": "tt6772950",
		"title": "Chơi Hay Chết?",
		"english_title": "Truth or Dare",
		"backdrop_path": "/yclaWj28yktRHEy3hFbFVTC9E7.jpg",
		"imdb": 5.2,
		"release_date": "2018-04-12",
		"runtime": 100,
		"genre_ids": [
			53,
			27
		],
		"hash": "2A63D27D37BF18E881B95C725DE304482B4F2C77",
		"updated": "2021-09-18T02:00:07.162+00:00"
	},
	{
		"id": 1247,
		"tmdb_id": 276907,
		"imdb_id": "tt3569230",
		"title": "Song Sinh Sát Thủ",
		"english_title": "Legend",
		"backdrop_path": "/tt4Ey2yuswpHcDSFYhSvAvohdKl.jpg",
		"imdb": 6.9,
		"release_date": "2015-09-09",
		"runtime": 132,
		"genre_ids": [
			80,
			53
		],
		"hash": "637F4A804B9C92F5EB1FB14B1779C8102FFEFFBB",
		"updated": "2021-09-19T10:33:57.731+00:00"
	},
	{
		"id": 1250,
		"tmdb_id": 585216,
		"imdb_id": "tt9844522",
		"title": "Căn Phòng Tử Thần: Cái Chết Trở Lại",
		"english_title": "Escape Room: Tournament of Champions",
		"backdrop_path": "/ec3FtK3RvsEbUkxzKvluLz67Y5H.jpg",
		"imdb": 5.9,
		"release_date": "2021-07-01",
		"runtime": 88,
		"genre_ids": [
			27,
			53,
			9648,
			28,
			878
		],
		"hash": "11E6E754B6C87666D72DF280C5C056B1882C55CB",
		"updated": "2021-09-15T05:09:05.456+00:00"
	},
	{
		"id": 150,
		"tmdb_id": 604,
		"imdb_id": "tt0234215",
		"title": "Ma Trận 2: Tái Lập",
		"english_title": "The Matrix Reloaded",
		"backdrop_path": "/4t6yb3USH1jRml18LiLgnGWq8q9.jpg",
		"imdb": 7.2,
		"release_date": "2003-05-15",
		"runtime": 138,
		"genre_ids": [
			12,
			28,
			53,
			878
		],
		"hash": "5F67A9966AA41C5E3CFD7C25226D49E1A656C982",
		"updated": "2021-12-23T12:21:14.874+00:00"
	},
	{
		"id": 1249,
		"tmdb_id": 426,
		"imdb_id": "tt0052357",
		"title": "Chóng Mặt",
		"english_title": "Vertigo",
		"backdrop_path": "/jdusFrnKhbDBUIHNzFTK9uDsmwU.jpg",
		"imdb": 8.3,
		"release_date": "1958-05-28",
		"runtime": 128,
		"genre_ids": [
			9648,
			10749,
			53
		],
		"hash": "FB157CCB94629D1CAA1F29BC49070E916E669BB8",
		"updated": "2021-09-16T04:47:14.913+00:00"
	},
	{
		"id": 1256,
		"tmdb_id": 205775,
		"imdb_id": "tt1390411",
		"title": "Biển Sâu Dậy Sóng",
		"english_title": "In the Heart of the Sea",
		"backdrop_path": "/fZCme3QpqXg1Y8T7xNl7kkatBNr.jpg",
		"imdb": 6.9,
		"release_date": "2015-11-20",
		"runtime": 122,
		"genre_ids": [
			53,
			18,
			12,
			28,
			36
		],
		"hash": "85F60DCA65082F5EF4D45CD6732AB1FC34A42E22",
		"updated": "2021-09-19T10:36:09.481+00:00"
	},
	{
		"id": 1080,
		"tmdb_id": 580175,
		"imdb_id": "tt10288566",
		"title": "Thêm Một Chầu Nữa Nhé",
		"english_title": "Another Round",
		"backdrop_path": "/fzQgasudHQuLWWb86qTPjIofDbV.jpg",
		"imdb": 7.8,
		"release_date": "2020-09-24",
		"runtime": 117,
		"genre_ids": [
			35,
			18
		],
		"hash": "2BC46380D7F5F2DB5E9CF51F6C3DE66AAB3B941E",
		"updated": "2021-09-17T04:22:04.818+00:00"
	},
	{
		"id": 673,
		"tmdb_id": 253412,
		"imdb_id": "tt2719848",
		"title": "Thảm Họa Đỉnh Everest",
		"english_title": "Everest",
		"backdrop_path": "/4dIl9EqpUmp0YbziWHqI1sT9csd.jpg",
		"imdb": 7.1,
		"release_date": "2015-09-10",
		"runtime": 121,
		"genre_ids": [
			12,
			18,
			28
		],
		"hash": "2FC0CECC4AD23489296A06B118FDDA9265DA5D3A",
		"updated": "2021-09-19T10:35:04.402+00:00"
	},
	{
		"id": 1257,
		"tmdb_id": 321741,
		"imdb_id": "tt3322364",
		"title": "Rung Chuyển",
		"english_title": "Concussion",
		"backdrop_path": "/3GygoiGFFf4Gm8tKFRWT4ppcwz8.jpg",
		"imdb": 7.1,
		"release_date": "2015-11-12",
		"runtime": 123,
		"genre_ids": [
			18,
			36
		],
		"hash": "1528894D713312A825E17A0F079C1B53B51C29E2",
		"updated": "2021-09-19T10:36:33.452+00:00"
	},
	{
		"id": 108,
		"tmdb_id": 9799,
		"imdb_id": "tt0232500",
		"title": "Quá Nhanh Quá Nguy Hiểm",
		"english_title": "The Fast and the Furious",
		"backdrop_path": "/AqWOz2XamtSe1mJVQ7QcLqLkV8Y.jpg",
		"imdb": 6.8,
		"release_date": "2001-06-22",
		"runtime": 106,
		"genre_ids": [
			28,
			80,
			53
		],
		"hash": "F6156A11AA8594553A63EDCD5AC337D9A667E402",
		"updated": "2021-09-19T10:36:43.174+00:00"
	},
	{
		"id": 1259,
		"tmdb_id": 103663,
		"imdb_id": "tt2106476",
		"title": "Cuộc Săn Đuổi",
		"english_title": "The Hunt",
		"backdrop_path": "/r0Iu0e4fYOwKegOHCRabzKGe21K.jpg",
		"imdb": 8.3,
		"release_date": "2012-09-24",
		"runtime": 116,
		"genre_ids": [
			18
		],
		"hash": "71A65BE392B42985BD8EBBBCB8B04F49EAD5F3C9",
		"updated": "2021-09-16T04:47:50.332+00:00"
	},
	{
		"id": 1254,
		"tmdb_id": 423204,
		"imdb_id": "tt6189022",
		"title": "Nhà Trắng Thất Thủ: Kẻ Phản Bội",
		"english_title": "Angel Has Fallen",
		"backdrop_path": "/xPaoV13DmzfLE7H2GTh8VZbtB1a.jpg",
		"imdb": 6.4,
		"release_date": "2019-08-21",
		"runtime": 122,
		"genre_ids": [
			28,
			53
		],
		"hash": "6F1CD8A4CB34A8F909D469CC8B4523DD49B687F1",
		"updated": "2021-09-17T07:42:08.211+00:00"
	},
	{
		"id": 1258,
		"tmdb_id": 968,
		"imdb_id": "tt0072890",
		"title": "Buổi Chiều Xui Xẻo",
		"english_title": "Dog Day Afternoon",
		"backdrop_path": "/xdMrLGbdNUo4qYwx8q8JbbZrEK3.jpg",
		"imdb": 8,
		"release_date": "1975-09-21",
		"runtime": 125,
		"genre_ids": [
			80,
			18,
			53
		],
		"hash": "40B2D35D844A0AAC7A4FC31E35DD6C01EB57BDB6",
		"updated": "2021-09-18T06:21:37.565+00:00"
	},
	{
		"id": 1251,
		"tmdb_id": 113,
		"imdb_id": "tt0374546",
		"title": "Xuân, Hạ, Thu, Đông... Rồi Lại Xuân",
		"english_title": "Spring, Summer, Fall, Winter... and Spring",
		"backdrop_path": "/d3Ayxo6kqE1GbNQpqnvElmvkPmm.jpg",
		"imdb": 8,
		"release_date": "2003-09-19",
		"runtime": 103,
		"genre_ids": [
			18
		],
		"hash": "751218FB2C5BC203504BBCD0B3330E8C3D54FFBB",
		"updated": "2021-09-19T10:34:06.55+00:00"
	},
	{
		"id": 805,
		"tmdb_id": 341013,
		"imdb_id": "tt2406566",
		"title": "Điệp Viên Báo Thù",
		"english_title": "Atomic Blonde",
		"backdrop_path": "/lUl54KgE1tICaUvkwpjY1fw0HYt.jpg",
		"imdb": 6.7,
		"release_date": "2017-07-26",
		"runtime": 115,
		"genre_ids": [
			28,
			53
		],
		"hash": "D81C7C13FEECDF16BEA544FF128992235C27238C",
		"updated": "2021-09-19T10:34:19.189+00:00"
	},
	{
		"id": 260,
		"tmdb_id": 1571,
		"imdb_id": "tt0337978",
		"title": "Đương Đầu Thử Thách 4",
		"english_title": "Live Free or Die Hard",
		"backdrop_path": "/ngpnT4srVK4LqLRwXkOvJDep46O.jpg",
		"imdb": 7.1,
		"release_date": "2007-06-20",
		"runtime": 128,
		"genre_ids": [
			28,
			53
		],
		"hash": "903E52E5723E983EA67A4249A5D15D6D3D1FD053",
		"updated": "2021-09-19T10:34:29.118+00:00"
	},
	{
		"id": 59,
		"tmdb_id": 954,
		"imdb_id": "tt0117060",
		"title": "Nhiệm Vụ Bất Khả Thi",
		"english_title": "Mission: Impossible",
		"backdrop_path": "/p4znKP6BNiQRfKmOKbXlrjEmUj4.jpg",
		"imdb": 7.1,
		"release_date": "1996-05-22",
		"runtime": 110,
		"genre_ids": [
			12,
			28,
			53
		],
		"hash": "31E67A2201BC9644AD1299209A0D12BC6277E4B7",
		"updated": "2021-09-19T10:34:53.625+00:00"
	},
	{
		"id": 1253,
		"tmdb_id": 3580,
		"imdb_id": "tt0824747",
		"title": "Sự Hoài Nghi",
		"english_title": "Changeling",
		"backdrop_path": "/4YHbBCA8QR1EAuNKGzNDZe6QjRV.jpg",
		"imdb": 7.7,
		"release_date": "2008-01-30",
		"runtime": 141,
		"genre_ids": [
			80,
			18,
			9648
		],
		"hash": "BCF0A7B8F631977DFE834C6E416C584012B24F4C",
		"updated": "2021-09-19T10:35:13.316+00:00"
	},
	{
		"id": 216,
		"tmdb_id": 9615,
		"imdb_id": "tt0463985",
		"title": "Quá Nhanh Quá Nguy Hiểm 3: Đường Đua Tokyo",
		"english_title": "The Fast and the Furious: Tokyo Drift",
		"backdrop_path": "/4uEiiDoHwtReE5EE4MkYVTHhg5q.jpg",
		"imdb": 6,
		"release_date": "2006-06-03",
		"runtime": 104,
		"genre_ids": [
			28,
			80,
			18,
			53
		],
		"hash": "60C3A40BEF2CB10A3068430692815AE122ECC892",
		"updated": "2021-09-19T10:35:23.135+00:00"
	},
	{
		"id": 1255,
		"tmdb_id": 52449,
		"imdb_id": "tt1284575",
		"title": "Cô Giáo Lắm Chiêu",
		"english_title": "Bad Teacher",
		"backdrop_path": "/zFPpcsWkFaff2mmwMNKkWdmiD8y.jpg",
		"imdb": 5.6,
		"release_date": "2011-05-16",
		"runtime": 92,
		"genre_ids": [
			35
		],
		"hash": "F39B36E172E61C4D92A00226D9B29174736AFEA9",
		"updated": "2021-09-19T10:35:32.371+00:00"
	},
	{
		"id": 684,
		"tmdb_id": 168259,
		"imdb_id": "tt2820852",
		"title": "Quá Nhanh Quá Nguy Hiểm 7",
		"english_title": "Furious 7",
		"backdrop_path": "/jeTbgBvpeFt5cpIFeCgT03EV6KD.jpg",
		"imdb": 7.1,
		"release_date": "2015-04-01",
		"runtime": 137,
		"genre_ids": [
			28,
			53
		],
		"hash": "1FC5BFFF2D39A97FE4A622C5B76D28A276CF2D8A",
		"updated": "2021-09-19T10:35:43.474+00:00"
	},
	{
		"id": 844,
		"tmdb_id": 396371,
		"imdb_id": "tt4209788",
		"title": "Nữ Hoàng Poker",
		"english_title": "Molly's Game",
		"backdrop_path": "/elMIHXYPs5fiA11COEAoXzEHuCq.jpg",
		"imdb": 7.4,
		"release_date": "2017-01-01",
		"runtime": 140,
		"genre_ids": [
			80,
			18
		],
		"hash": "48CAC83B94E5C16807B7D7A82726754A95CBF541",
		"updated": "2021-09-19T10:36:23.032+00:00"
	},
	{
		"id": 86,
		"tmdb_id": 603,
		"imdb_id": "tt0133093",
		"title": "Ma Trận",
		"english_title": "The Matrix",
		"backdrop_path": "/ll4HTrUVuELq7wixDB36uzI1VHN.jpg",
		"imdb": 8.7,
		"release_date": "1999-03-30",
		"runtime": 136,
		"genre_ids": [
			28,
			878
		],
		"hash": "D7A46713EAEE18C746B3254B7D1492A50FD9D6CE",
		"updated": "2021-12-23T12:20:49.422+00:00"
	},
	{
		"id": 1275,
		"tmdb_id": 33320,
		"imdb_id": "tt0291350",
		"title": "Vai Diễn Ngàn Năm",
		"english_title": "Millennium Actress",
		"backdrop_path": "/m1GLVFRwQMFXeZQqyehFIz5PB1b.jpg",
		"imdb": 7.9,
		"release_date": "2001-09-14",
		"runtime": 87,
		"genre_ids": [
			16,
			18,
			10749
		],
		"hash": "EFBE945C243988E62DE2697E505379B8FA59F192",
		"updated": "2021-09-19T10:38:55.656+00:00"
	},
	{
		"id": 959,
		"tmdb_id": 522681,
		"imdb_id": "tt5886046",
		"title": "Căn Phòng Tử Thần",
		"english_title": "Escape Room",
		"backdrop_path": "/nMi3K5BvydboIdzru88av1n94sV.jpg",
		"imdb": 6.4,
		"release_date": "2019-01-03",
		"runtime": 100,
		"genre_ids": [
			53,
			28,
			9648,
			12,
			27
		],
		"hash": "C9E48C5DF33D4E200EC2ADAE99FD937AECC1ED4E",
		"updated": "2021-09-17T07:42:38.39+00:00"
	},
	{
		"id": 1274,
		"tmdb_id": 11423,
		"imdb_id": "tt0353969",
		"title": "Hồi Ức Kẻ Sát Nhân",
		"english_title": "Memories of Murder",
		"backdrop_path": "/97SrVeGiR5Zrkp36i2krQVGDda.jpg",
		"imdb": 8.1,
		"release_date": "2003-05-02",
		"runtime": 131,
		"genre_ids": [
			80,
			18,
			53
		],
		"hash": "22B513B9762B2AAAA31F03BE9EBD525735D61E6D",
		"updated": "2021-09-19T11:07:12.843+00:00"
	},
	{
		"id": 1261,
		"tmdb_id": 62,
		"imdb_id": "tt0062622",
		"title": "2001: Chuyến Du Hành Không Gian",
		"english_title": "2001: A Space Odyssey",
		"backdrop_path": "/hatcFGvoR1yPw9282zyF3Azgein.jpg",
		"imdb": 8.3,
		"release_date": "1968-04-02",
		"runtime": 149,
		"genre_ids": [
			878,
			9648,
			12
		],
		"hash": "A2A78568F4CC7873E9E0088DDE28FA9D9976ACC7",
		"updated": "2021-09-16T05:44:25.348+00:00"
	},
	{
		"id": 1273,
		"tmdb_id": 46738,
		"imdb_id": "tt1255953",
		"title": "Bí Mật Người Mẹ",
		"english_title": "Incendies",
		"backdrop_path": "/sntH55F1EWXRLnguhZgupFdlHdt.jpg",
		"imdb": 8.3,
		"release_date": "2010-09-04",
		"runtime": 131,
		"genre_ids": [
			18,
			10752,
			9648
		],
		"hash": "55AE5F8F5C1554EBE6B094F0DEF3B9898E5E5431",
		"updated": "2021-09-22T02:36:48.726+00:00"
	},
	{
		"id": 779,
		"tmdb_id": 400928,
		"imdb_id": "tt4481414",
		"title": "Cô Bé Thần Đồng",
		"english_title": "Gifted",
		"backdrop_path": "/ucMb7GHuK8n8FC3nSU5jo52PlhW.jpg",
		"imdb": 7.6,
		"release_date": "2017-04-12",
		"runtime": 101,
		"genre_ids": [
			18,
			10751,
			35
		],
		"hash": "F6F9545E93D91ECAE4728964EF5CEF54A6F98609",
		"updated": "2021-09-19T10:36:56.798+00:00"
	},
	{
		"id": 418,
		"tmdb_id": 49026,
		"imdb_id": "tt1345836",
		"title": "Người Dơi: Hiệp Sĩ Bóng Đêm Trỗi Dậy",
		"english_title": "The Dark Knight Rises",
		"backdrop_path": "/s6OSiadvORQ98z2POR6GUdlwO9Z.jpg",
		"imdb": 8.4,
		"release_date": "2012-07-16",
		"runtime": 165,
		"genre_ids": [
			28,
			80,
			18,
			53
		],
		"hash": "FBC4BEED6422187F34556C5C0AD2473E4D2E5C18",
		"updated": "2021-09-16T02:27:26.534+00:00"
	},
	{
		"id": 279,
		"tmdb_id": 155,
		"imdb_id": "tt0468569",
		"title": "Người Dơi: Hiệp Sĩ Bóng Đêm",
		"english_title": "The Dark Knight",
		"backdrop_path": "/qg9NQ0Zkdfz9XWHtJ1X1GtKqqe9.jpg",
		"imdb": 9,
		"release_date": "2008-07-16",
		"runtime": 152,
		"genre_ids": [
			18,
			28,
			80,
			53
		],
		"hash": "A54926C2E07B0E5F0243954330B599B31C804F0B",
		"updated": "2021-10-01T05:42:42.639+00:00"
	},
	{
		"id": 1272,
		"tmdb_id": 614560,
		"imdb_id": "tt10618286",
		"title": "Mank",
		"english_title": "Mank",
		"backdrop_path": "/wztR46RlpFcTpYemIbrd1OcoeG7.jpg",
		"imdb": 6.9,
		"release_date": "2020-11-13",
		"runtime": 132,
		"genre_ids": [
			18,
			36
		],
		"hash": "57100458928F7D4C15EF680F319A199C433CDD05",
		"updated": "2021-09-17T04:23:17.583+00:00"
	},
	{
		"id": 1278,
		"tmdb_id": 501907,
		"imdb_id": "tt3224458",
		"title": "Một Ngày Đẹp Trời Trong Khu Phố",
		"english_title": "A Beautiful Day in the Neighborhood",
		"backdrop_path": "/mTeY25K5pp1wO9ISp14gjM24yD.jpg",
		"imdb": 7.3,
		"release_date": "2019-09-07",
		"runtime": 109,
		"genre_ids": [
			18
		],
		"hash": "A3D68F69CEE9CBE8A5250D86DD944128F5DB8FC6",
		"updated": "2021-09-17T07:43:15.445+00:00"
	},
	{
		"id": 1002,
		"tmdb_id": 473033,
		"imdb_id": "tt5727208",
		"title": "Kim Cương Trong Đá",
		"english_title": "Uncut Gems",
		"backdrop_path": "/ihQIgiM73tkYK9I2nFpYebUvit6.jpg",
		"imdb": 7.4,
		"release_date": "2019-08-30",
		"runtime": 136,
		"genre_ids": [
			80,
			53,
			18
		],
		"hash": "B162E674894D1C27410326CEE12C9BA876418E09",
		"updated": "2021-09-17T07:43:40.851+00:00"
	},
	{
		"id": 1265,
		"tmdb_id": 346910,
		"imdb_id": "tt3829266",
		"title": "Quái Thú Vô Hình 4",
		"english_title": "The Predator",
		"backdrop_path": "/9qQFncflRMzl5uhMa78cvKP3qmE.jpg",
		"imdb": 5.3,
		"release_date": "2018-09-05",
		"runtime": 107,
		"genre_ids": [
			878,
			28,
			12,
			35
		],
		"hash": "CC0FEBD165242940135560B07E5113E9A0E8F374",
		"updated": "2021-09-18T01:50:16.791+00:00"
	},
	{
		"id": 1260,
		"tmdb_id": 3078,
		"imdb_id": "tt0025316",
		"title": "Chuyện Xảy Ra Trong Đêm",
		"english_title": "It Happened One Night",
		"backdrop_path": "/yWpbG6BT0IdwBnGHpCUicKTDGOm.jpg",
		"imdb": 8.1,
		"release_date": "1934-02-22",
		"runtime": 105,
		"genre_ids": [
			35,
			10749
		],
		"hash": "DD6623EAAB97E1A784EA43095A922057A89E7439",
		"updated": "2021-09-18T02:01:47.104+00:00"
	},
	{
		"id": 1276,
		"tmdb_id": 78,
		"imdb_id": "tt0083658",
		"title": "Tội Phạm Nhân Bản",
		"english_title": "Blade Runner",
		"backdrop_path": "/pOqqbvIdXBAz3Nhmuh9ajyQGfU6.jpg",
		"imdb": 8.1,
		"release_date": "1982-06-25",
		"runtime": 117,
		"genre_ids": [
			878,
			18,
			53
		],
		"hash": "46378EA47454427D4D2B7A7A0D903F1E3B5732F2",
		"updated": "2021-09-18T02:02:39.405+00:00"
	},
	{
		"id": 1262,
		"tmdb_id": 106,
		"imdb_id": "tt0093773",
		"title": "Quái Thú Vô Hình",
		"english_title": "Predator",
		"backdrop_path": "/5o5jPiPgtq7pesQ8xHj8SfEcf0s.jpg",
		"imdb": 7.8,
		"release_date": "1987-06-12",
		"runtime": 107,
		"genre_ids": [
			878,
			28,
			12,
			53
		],
		"hash": "FB132F15FD902A715403C7F57025C3EEC86F77E5",
		"updated": "2021-09-19T10:37:09.154+00:00"
	},
	{
		"id": 1263,
		"tmdb_id": 169,
		"imdb_id": "tt0100403",
		"title": "Quái Thú Vô Hình 2",
		"english_title": "Predator 2",
		"backdrop_path": "/xEXHkMLCOmHwgSJlnHOw268DY2g.jpg",
		"imdb": 6.3,
		"release_date": "1990-11-20",
		"runtime": 108,
		"genre_ids": [
			878,
			28,
			53
		],
		"hash": "87BF72F0072ABED28A5CD9CA07FE5FDBD4149599",
		"updated": "2021-09-19T10:37:17.709+00:00"
	},
	{
		"id": 1264,
		"tmdb_id": 34851,
		"imdb_id": "tt1424381",
		"title": "Quái Thú Vô Hình 3",
		"english_title": "Predators",
		"backdrop_path": "/9D24HswqObhzNcpVSLzKz8sglpf.jpg",
		"imdb": 6.4,
		"release_date": "2010-07-03",
		"runtime": 107,
		"genre_ids": [
			878,
			28,
			53
		],
		"hash": "1F781B0C04C97B7A912352EC719489414EB99DFC",
		"updated": "2021-09-19T10:37:29.126+00:00"
	},
	{
		"id": 1266,
		"tmdb_id": 395,
		"imdb_id": "tt0370263",
		"title": "Quái Vật Và Người Ngoài Hành Tinh 1",
		"english_title": "AVP: Alien vs. Predator",
		"backdrop_path": "/vydmFyZoMcI1sT0Ib9jX3rOTeqg.jpg",
		"imdb": 5.6,
		"release_date": "2004-08-12",
		"runtime": 101,
		"genre_ids": [
			12,
			878,
			28,
			27
		],
		"hash": "431CEF9FDE309F6D03A5663A99BDFC7865C8109C",
		"updated": "2021-09-19T10:37:39.112+00:00"
	},
	{
		"id": 1268,
		"tmdb_id": 413052,
		"imdb_id": "tt3173594",
		"title": "Hacker",
		"english_title": "Hacker",
		"backdrop_path": "/7CJWFbNDjKDytkaOVvUE6nVLYQx.jpg",
		"imdb": 6.2,
		"release_date": "2016-09-15",
		"runtime": 95,
		"genre_ids": [
			80,
			18,
			53
		],
		"hash": "3A4FC95569E8669460658AC0F6EA5099E47C630C",
		"updated": "2021-09-19T10:37:56.913+00:00"
	},
	{
		"id": 1269,
		"tmdb_id": 614911,
		"imdb_id": "tt10539608",
		"title": "Lấp Lánh Trời Đêm",
		"english_title": "The Midnight Sky",
		"backdrop_path": "/dueiWzWc81UAgnbDAyH4Gjqnh4n.jpg",
		"imdb": 5.6,
		"release_date": "2020-12-10",
		"runtime": 118,
		"genre_ids": [
			878,
			18
		],
		"hash": "3CE4D516BB43770AB55DF1015F78769D7948771E",
		"updated": "2021-09-19T10:38:11.257+00:00"
	},
	{
		"id": 1270,
		"tmdb_id": 537996,
		"imdb_id": "tt6412452",
		"title": "Biên Niên Sử Miền Viễn Tây",
		"english_title": "The Ballad of Buster Scruggs",
		"backdrop_path": "/8ZwaQCK7awHyK9Oqt4y16dl6w6Y.jpg",
		"imdb": 7.3,
		"release_date": "2018-11-09",
		"runtime": 132,
		"genre_ids": [
			35,
			18,
			37,
			10402
		],
		"hash": "87E264D3A0880CCD98530A460E026B761FC2B851",
		"updated": "2021-09-19T10:38:19.116+00:00"
	},
	{
		"id": 1271,
		"tmdb_id": 6557,
		"imdb_id": "tt0988595",
		"title": "27 Lần Cưới",
		"english_title": "27 Dresses",
		"backdrop_path": "/80ikG9NYl4hAqQ4ozoPDV54uRYA.jpg",
		"imdb": 6.1,
		"release_date": "2008-01-10",
		"runtime": 111,
		"genre_ids": [
			35,
			10749
		],
		"hash": "4A0BF7B14652B8EA7B395472EF250214A7D8CD69",
		"updated": "2021-09-19T10:38:39.072+00:00"
	},
	{
		"id": 1277,
		"tmdb_id": 597891,
		"imdb_id": "tt7737528",
		"title": "Kate",
		"english_title": "Kate",
		"backdrop_path": "/x7b2M0AVOrQgFlA16ensZGevhKY.jpg",
		"imdb": 6.3,
		"release_date": "2021-09-10",
		"runtime": 106,
		"genre_ids": [
			28,
			53
		],
		"hash": "76A21F86338EC8116FCA9C89D47729F074DB6229",
		"updated": "2021-09-15T05:08:10.115+00:00"
	},
	{
		"id": 1287,
		"tmdb_id": 18239,
		"imdb_id": "tt1259571",
		"title": "Chạng Vạng 2: Trăng Non",
		"english_title": "The Twilight Saga: New Moon",
		"backdrop_path": "/m1U8r6KKITR5jLVrkir0mIU4m1c.jpg",
		"imdb": 4.7,
		"release_date": "2009-11-18",
		"runtime": 131,
		"genre_ids": [
			12,
			14,
			18,
			10749
		],
		"hash": "BC0137662D56AC4D2CA4E12FB653C13C9BB88AB4",
		"updated": "2021-09-19T10:56:52.402+00:00"
	},
	{
		"id": 1283,
		"tmdb_id": 103,
		"imdb_id": "tt0075314",
		"title": "Taxi Driver",
		"english_title": "Taxi Driver",
		"backdrop_path": "/h5ZlQjCtu8kIAqgA7pNx8uwgi6g.jpg",
		"imdb": 8.2,
		"release_date": "1976-02-09",
		"runtime": 114,
		"genre_ids": [
			80,
			18
		],
		"hash": "FAB522907F1FAF9D0ED6BCADC6A9E7C84B112CCB",
		"updated": "2021-09-16T06:42:57.928+00:00"
	},
	{
		"id": 1279,
		"tmdb_id": 619778,
		"imdb_id": "tt3811906",
		"title": "Hiện Thân Tà Ác",
		"english_title": "Malignant",
		"backdrop_path": "/bouOHVCnlvQQyCGZWQE1XXDL9uv.jpg",
		"imdb": 6.3,
		"release_date": "2021-09-01",
		"runtime": 111,
		"genre_ids": [
			27,
			53
		],
		"hash": "0EEC3DF2DB50147C1F9840DFE07935A93D7ADEFA",
		"updated": "2021-09-15T05:06:49.701+00:00"
	},
	{
		"id": 1293,
		"tmdb_id": 9286,
		"imdb_id": "tt0414982",
		"title": "Lưỡi Hái Tử Thần 3",
		"english_title": "Final Destination 3",
		"backdrop_path": "/5vHqaoQ4SmrGt8Z9kBl6eX9DPFh.jpg",
		"imdb": 5.8,
		"release_date": "2006-02-09",
		"runtime": 93,
		"genre_ids": [
			27,
			9648
		],
		"hash": "8C423E85E8381E85AA2C21139E6B1F27E8114253",
		"updated": "2021-09-19T10:58:02.955+00:00"
	},
	{
		"id": 1288,
		"tmdb_id": 24021,
		"imdb_id": "tt1325004",
		"title": "Chạng Vạng 3: Nhật Thực",
		"english_title": "The Twilight Saga: Eclipse",
		"backdrop_path": "/nWv2LdIwxzuE6FlOKNhoouzH4fd.jpg",
		"imdb": 5,
		"release_date": "2010-06-23",
		"runtime": 124,
		"genre_ids": [
			12,
			14,
			18,
			10749
		],
		"hash": "0EE517827C10098DBE92E385FECF79A9BC633CF3",
		"updated": "2021-09-19T10:57:04.437+00:00"
	},
	{
		"id": 1289,
		"tmdb_id": 50619,
		"imdb_id": "tt1324999",
		"title": "Chạng Vạng 4: Hửng Đông Phần 1",
		"english_title": "The Twilight Saga: Breaking Dawn - Part 1",
		"backdrop_path": "/AmDWWw7xlql1lCnUQ9lTEygIk8D.jpg",
		"imdb": 4.9,
		"release_date": "2011-11-16",
		"runtime": 117,
		"genre_ids": [
			12,
			14,
			10749
		],
		"hash": "90A1EE9A3D126EFE3275C4C6DECC26310739C35F",
		"updated": "2021-09-19T10:57:16.859+00:00"
	},
	{
		"id": 1290,
		"tmdb_id": 50620,
		"imdb_id": "tt1673434",
		"title": "Chạng Vạng 5: Hửng Đông Phần 2",
		"english_title": "The Twilight Saga: Breaking Dawn - Part 2",
		"backdrop_path": "/kL4bWA2sDiGME6c0TZ3yhxgeJE1.jpg",
		"imdb": 5.5,
		"release_date": "2012-11-13",
		"runtime": 115,
		"genre_ids": [
			12,
			14,
			18,
			10749
		],
		"hash": "1F6F591808900FF988A044D63C94ED3DEC32A1D1",
		"updated": "2021-09-19T10:57:28.312+00:00"
	},
	{
		"id": 1291,
		"tmdb_id": 9532,
		"imdb_id": "tt0195714",
		"title": "Lưỡi Hái Tử Thần",
		"english_title": "Final Destination",
		"backdrop_path": "/k2FlISeOSRUHbguaFRn1MJxerR7.jpg",
		"imdb": 6.7,
		"release_date": "2000-03-17",
		"runtime": 98,
		"genre_ids": [
			27
		],
		"hash": "97CE77FDAD9C7E1AF88DDD48D437BAD13D94FBCE",
		"updated": "2021-09-19T10:57:40.324+00:00"
	},
	{
		"id": 1286,
		"tmdb_id": 8966,
		"imdb_id": "tt1099212",
		"title": "Chạng Vạng",
		"english_title": "Twilight",
		"backdrop_path": "/5lJvx8HDUT5UpwkjhvO5VPVApdv.jpg",
		"imdb": 5.2,
		"release_date": "2008-11-20",
		"runtime": 122,
		"genre_ids": [
			14,
			18,
			10749
		],
		"hash": "E4EF339C1A0196733DE25A93B983250F47DFB3F5",
		"updated": "2021-09-19T10:57:52.052+00:00"
	},
	{
		"id": 1282,
		"tmdb_id": 114,
		"imdb_id": "tt0100405",
		"title": "Người Đàn Bà Đẹp",
		"english_title": "Pretty Woman",
		"backdrop_path": "/7H7nhN1pn4glt76cDMuwjckKVNr.jpg",
		"imdb": 7,
		"release_date": "1990-03-23",
		"runtime": 119,
		"genre_ids": [
			10749,
			35
		],
		"hash": "CBCFE3027DF90447777F791A41DF7C9CAD041972",
		"updated": "2021-09-19T10:59:17.442+00:00"
	},
	{
		"id": 1295,
		"tmdb_id": 55779,
		"imdb_id": "tt1622979",
		"title": "Lưỡi Hái Tử Thần 5",
		"english_title": "Final Destination 5",
		"backdrop_path": "/lstY9O0yg1ILqVdxDFLGC99YeJv.jpg",
		"imdb": 5.8,
		"release_date": "2011-08-12",
		"runtime": 92,
		"genre_ids": [
			27,
			9648
		],
		"hash": "68D67B42771553941FE0A44844623F684F57AE10",
		"updated": "2021-09-19T10:58:26.416+00:00"
	},
	{
		"id": 1294,
		"tmdb_id": 19912,
		"imdb_id": "tt1144884",
		"title": "Lưỡi Hái Tử Thần 4",
		"english_title": "The Final Destination",
		"backdrop_path": "/u7y5YiXHgx5ukJoKkvbvE8P6m3b.jpg",
		"imdb": 5.2,
		"release_date": "2009-08-26",
		"runtime": 82,
		"genre_ids": [
			27,
			9648
		],
		"hash": "75C613D03004514542C63B14F31EF85452E2C417",
		"updated": "2021-09-19T10:58:17.442+00:00"
	},
	{
		"id": 1297,
		"tmdb_id": 601,
		"imdb_id": "tt0083866",
		"title": "Cậu bé Người Ngoài Hành Tinh",
		"english_title": "E.T. the Extra-Terrestrial",
		"backdrop_path": "/3URnhekvLVJKscf4ElRzKF2zKjX.jpg",
		"imdb": 7.8,
		"release_date": "1982-06-11",
		"runtime": 115,
		"genre_ids": [
			878,
			12,
			10751,
			14
		],
		"hash": "18F035EA2D976B8037F4D84DA7F074B1372259E4",
		"updated": "2021-09-19T10:58:35.369+00:00"
	},
	{
		"id": 1118,
		"tmdb_id": 520763,
		"imdb_id": "tt8332922",
		"title": "Vùng Đất Câm Lặng 2",
		"english_title": "A Quiet Place Part II",
		"backdrop_path": "/tJRSV7UsuLb65svcEASDFmt4k30.jpg",
		"imdb": 7.3,
		"release_date": "2021-05-21",
		"runtime": 97,
		"genre_ids": [
			878,
			53,
			27
		],
		"hash": "4C30BB692B6E3679E95A68B36F0091AD294DB747",
		"updated": "2021-09-15T04:08:37.112+00:00"
	},
	{
		"id": 1292,
		"tmdb_id": 9358,
		"imdb_id": "tt0309593",
		"title": "Lưỡi Hái Tử Thần 2",
		"english_title": "Final Destination 2",
		"backdrop_path": "/xDi8BGXpyC7ukcOHLaFO8FwaVgN.jpg",
		"imdb": 6.2,
		"release_date": "2003-01-31",
		"runtime": 90,
		"genre_ids": [
			27,
			9648
		],
		"hash": "456478E02D2DD43C270CD04B61EF81F0AF34DDF9",
		"updated": "2021-09-19T10:59:06.455+00:00"
	},
	{
		"id": 1142,
		"tmdb_id": 337404,
		"imdb_id": "tt3228774",
		"title": "Cruella",
		"english_title": "Cruella",
		"backdrop_path": "/nt21xmsQ8Jah6FJWE2MHGfyTJLg.jpg",
		"imdb": 7.4,
		"release_date": "2021-05-26",
		"runtime": 134,
		"genre_ids": [
			35,
			80
		],
		"hash": "90753442658D029007D8D745ABE820752878F866",
		"updated": "2021-09-15T05:05:55.797+00:00"
	},
	{
		"id": 1285,
		"tmdb_id": 597433,
		"imdb_id": "tt10230994",
		"title": "Beckett",
		"english_title": "Beckett",
		"backdrop_path": "/zx1osLJLdncefrBty88vrKcZQyg.jpg",
		"imdb": 5.6,
		"release_date": "2021-08-04",
		"runtime": 109,
		"genre_ids": [
			12,
			53,
			18,
			28
		],
		"hash": "3D9B95C089990522A9D99BE8AF2E64EAEBB43B28",
		"updated": "2021-09-15T05:06:20.064+00:00"
	},
	{
		"id": 1284,
		"tmdb_id": 389,
		"imdb_id": "tt0050083",
		"title": "12 Người Đàn Ông Giận Dữ",
		"english_title": "12 Angry Men",
		"backdrop_path": "/3x1hh3VGugF4pvLURkLLOmb1rj5.jpg",
		"imdb": 9,
		"release_date": "1957-04-10",
		"runtime": 97,
		"genre_ids": [
			18
		],
		"hash": "4DB3FDD949B99781E6AB1979BA476EC3E932970C",
		"updated": "2021-09-15T06:39:33.954+00:00"
	},
	{
		"id": 1299,
		"tmdb_id": 486947,
		"imdb_id": "tt6742252",
		"title": "Tội Lỗi",
		"english_title": "The Guilty",
		"backdrop_path": "/tvRKSiVJcgrpRPZil1IBpwJSt6u.jpg",
		"imdb": 7.5,
		"release_date": "2018-06-14",
		"runtime": 86,
		"genre_ids": [
			18,
			80,
			53
		],
		"hash": "73F025D197BD54495368795794FD12328DE7E4F6",
		"updated": "2021-09-19T10:58:47.474+00:00"
	},
	{
		"id": 1281,
		"tmdb_id": 402,
		"imdb_id": "tt0103772",
		"title": "Bản Năng Gốc",
		"english_title": "Basic Instinct",
		"backdrop_path": "/a644C7JCMC0HFpaT6DbfallGTuh.jpg",
		"imdb": 7,
		"release_date": "1992-03-20",
		"runtime": 127,
		"genre_ids": [
			53,
			9648
		],
		"hash": "12BF28702F1A144279BF4205778E5485061C5DFB",
		"updated": "2021-09-19T10:59:31.921+00:00"
	},
	{
		"id": 1296,
		"tmdb_id": 9479,
		"imdb_id": "tt0107688",
		"title": "Đêm Kinh Hoàng Trước Giáng Sinh",
		"english_title": "The Nightmare Before Christmas",
		"backdrop_path": "/lBD57VKEe2kGknZTYNwGi4g9Po3.jpg",
		"imdb": 8,
		"release_date": "1993-10-09",
		"runtime": 76,
		"genre_ids": [
			14,
			16,
			10751
		],
		"hash": "892BBBFF9430147AFD14DED6C258BE2C62174AB9",
		"updated": "2021-12-07T04:26:26.914+00:00"
	},
	{
		"id": 43,
		"tmdb_id": 278,
		"imdb_id": "tt0111161",
		"title": "Nhà Tù Shawshank",
		"english_title": "The Shawshank Redemption",
		"backdrop_path": "/1bGBTCPC1lcvrNTluh1bgr1dd2F.jpg",
		"imdb": 9.3,
		"release_date": "1994-09-23",
		"runtime": 142,
		"genre_ids": [
			18,
			80
		],
		"hash": "E0D00667650ABA9EE05AACBBBD8B55EA8A51F534",
		"updated": "2021-09-15T03:04:33.662+00:00"
	},
	{
		"id": 567,
		"tmdb_id": 157336,
		"imdb_id": "tt0816692",
		"title": "Hố Đen Tử Thần",
		"english_title": "Interstellar",
		"backdrop_path": "/huD4cMhHtLkxcdM6PbKBcivBZuE.jpg",
		"imdb": 8.6,
		"release_date": "2014-11-05",
		"runtime": 169,
		"genre_ids": [
			12,
			18,
			878
		],
		"hash": "89599BF4DC369A3A8ECA26411C5CCF922D78B486",
		"updated": "2021-09-15T03:09:21.545+00:00"
	},
	{
		"id": 645,
		"tmdb_id": 198184,
		"imdb_id": "tt1823672",
		"title": "Cớm Người Máy",
		"english_title": "Chappie",
		"backdrop_path": "/xwYpVvpTick9t3h2cVU2OphqIwO.jpg",
		"imdb": 6.8,
		"release_date": "2015-03-04",
		"runtime": 120,
		"genre_ids": [
			80,
			28,
			878
		],
		"hash": "5B9AA3DE5580488E9D1B502C9EAC5540CF6FC07F",
		"updated": "2021-09-15T04:10:06.582+00:00"
	},
	{
		"id": 1028,
		"tmdb_id": 600354,
		"imdb_id": "tt10272386",
		"title": "Người Cha",
		"english_title": "The Father",
		"backdrop_path": "/s7qETbLuGQRSz7VswoFwwvvOO1E.jpg",
		"imdb": 8.3,
		"release_date": "2020-12-23",
		"runtime": 97,
		"genre_ids": [
			18
		],
		"hash": "C4FEB7456F03B6C7C945F348B2E91B7AC71322AF",
		"updated": "2021-09-15T04:38:57.558+00:00"
	},
	{
		"id": 543,
		"tmdb_id": 313106,
		"imdb_id": "tt2779318",
		"title": "Doctor Who: Ngày của Doctor",
		"english_title": "Doctor Who: The Day of the Doctor",
		"backdrop_path": "/xJtSCBz3dR4ileQYCP2ukTIO42z.jpg",
		"imdb": 7.4,
		"release_date": "2013-11-23",
		"runtime": 77,
		"genre_ids": [
			878,
			12
		],
		"hash": "682E309437DFAE8BA08F44AD00D236B94FC0CD30",
		"updated": "2021-09-15T04:39:43.879+00:00"
	},
	{
		"id": 8,
		"tmdb_id": 238,
		"imdb_id": "tt0068646",
		"title": "Bố Già",
		"english_title": "The Godfather",
		"backdrop_path": "/jiTiRWEZDOoggZsOpM7t7WEMDym.jpg",
		"imdb": 9.2,
		"release_date": "1972-03-14",
		"runtime": 175,
		"genre_ids": [
			18,
			80
		],
		"hash": "5E915039C619366E490D08DB3FFED21F3A3AE84A",
		"updated": "2021-09-15T04:43:42.041+00:00"
	},
	{
		"id": 1304,
		"tmdb_id": 475215,
		"imdb_id": "tt6900448",
		"title": "Mirai: Em Gái Đến Từ Tương Lai",
		"english_title": "Mirai",
		"backdrop_path": "/yvXIEuNmwybB4e1GDRGjdVUUL6f.jpg",
		"imdb": 7,
		"release_date": "2018-06-16",
		"runtime": 98,
		"genre_ids": [
			16,
			10751,
			14,
			12,
			18
		],
		"hash": "B85FBD3DFD815B7F8F36B5FB6651EE0ACBF9EFB0",
		"updated": "2021-09-19T17:39:10.152+00:00"
	},
	{
		"id": 38,
		"tmdb_id": 424,
		"imdb_id": "tt0108052",
		"title": "Bản Danh Sách Của Schindler",
		"english_title": "Schindler's List",
		"backdrop_path": "/wH7ZxjF1yU3azuj3pgXVcgrCTUk.jpg",
		"imdb": 8.9,
		"release_date": "1993-11-30",
		"runtime": 195,
		"genre_ids": [
			18,
			36,
			10752
		],
		"hash": "F64C844C39FCD6A5F9157884E97296F7019DB83B",
		"updated": "2021-09-15T04:45:12.84+00:00"
	},
	{
		"id": 1303,
		"tmdb_id": 110420,
		"imdb_id": "tt2140203",
		"title": "Hai đứa con của chó sói",
		"english_title": "Wolf Children",
		"backdrop_path": "/78EAqp0sdvtaRryS9QtBQxiQBes.jpg",
		"imdb": 8.1,
		"release_date": "2012-07-21",
		"runtime": 117,
		"genre_ids": [
			16,
			18,
			10751,
			14
		],
		"hash": "23A77846C89D4B2A42D7FA2FBD7496072FCF9069",
		"updated": "2021-09-20T02:22:25.734+00:00"
	},
	{
		"id": 715,
		"tmdb_id": 209112,
		"imdb_id": "tt2975590",
		"title": "Batman Đại Chiến Superman: Ánh Sáng Công Lý",
		"english_title": "Batman v Superman: Dawn of Justice",
		"backdrop_path": "/jzwwSZs9KqyvroROqqnDWR0jFG0.jpg",
		"imdb": 6.4,
		"release_date": "2016-03-23",
		"runtime": 152,
		"genre_ids": [
			28,
			12,
			14
		],
		"hash": "C4CF33A4F4827C1A1E1CCCCEB04CE01A8A115473",
		"updated": "2021-09-15T02:56:37.673+00:00"
	},
	{
		"id": 149,
		"tmdb_id": 122,
		"imdb_id": "tt0167260",
		"title": "Chúa Tể Của Những Chiếc Nhẫn 3: Sự Trở Lại Của Nhà Vua",
		"english_title": "The Lord of the Rings: The Return of the King",
		"backdrop_path": "/yhz8UCvBdenFLePNJU74RucQh1C.jpg",
		"imdb": 8.9,
		"release_date": "2003-12-01",
		"runtime": 201,
		"genre_ids": [
			12,
			14,
			28
		],
		"hash": "AD73D5576DC4ECFEEA4353D4503F9B3F93DFA740",
		"updated": "2021-09-15T05:02:18.93+00:00"
	},
	{
		"id": 127,
		"tmdb_id": 121,
		"imdb_id": "tt0167261",
		"title": "Chúa Tể Của Những Chiếc Nhẫn 2: Hai Tòa Tháp",
		"english_title": "The Lord of the Rings: The Two Towers",
		"backdrop_path": "/tb9ZtbjJH14hgOr0f2IVUUuDmsr.jpg",
		"imdb": 8.7,
		"release_date": "2002-12-18",
		"runtime": 179,
		"genre_ids": [
			12,
			14,
			28
		],
		"hash": "EBDA5B39978F58B50B2666A808A11C971A9CF080",
		"updated": "2021-09-15T05:05:09.555+00:00"
	},
	{
		"id": 1237,
		"tmdb_id": 602302,
		"imdb_id": "tt14527836",
		"title": "Triệu Hồi",
		"english_title": "Recalled",
		"backdrop_path": "/VzaTRghXBqr012yolfc63LHQrC.jpg",
		"imdb": 6.9,
		"release_date": "2021-04-21",
		"runtime": 99,
		"genre_ids": [
			9648,
			53
		],
		"hash": "F8099BB33C9CCB91D23A2C4D251ED1BA27A11C99",
		"updated": "2021-09-15T05:09:58.689+00:00"
	},
	{
		"id": 931,
		"tmdb_id": 490132,
		"imdb_id": "tt6966692",
		"title": "Cẩm Nang Xanh",
		"english_title": "Green Book",
		"backdrop_path": "/7I00UOZFyJiK1FtJBeRAgRwUCyH.jpg",
		"imdb": 8.2,
		"release_date": "2018-11-16",
		"runtime": 130,
		"genre_ids": [
			18,
			35,
			10402
		],
		"hash": "696CDF86B1402B7094719190269E76703786A390",
		"updated": "2021-09-16T02:30:37.669+00:00"
	},
	{
		"id": 1301,
		"tmdb_id": 8374,
		"imdb_id": "tt0144117",
		"title": "Súng Thần",
		"english_title": "The Boondock Saints",
		"backdrop_path": "/pIqoWJO8RhswojCNLbCJnlVZolN.jpg",
		"imdb": 7.7,
		"release_date": "1999-01-22",
		"runtime": 108,
		"genre_ids": [
			28,
			53,
			80
		],
		"hash": "3D36C4C922266CEE5DC1DC3E0624CEF3C2BED910",
		"updated": "2021-09-19T10:58:55.767+00:00"
	},
	{
		"id": 1329,
		"tmdb_id": 760873,
		"imdb_id": "tt6506264",
		"title": "Thuộc Địa",
		"english_title": "Tides",
		"backdrop_path": "/16tAfX4WWCxHxUnJoxNxdMO9qfi.jpg",
		"imdb": 5.4,
		"release_date": "2021-08-26",
		"runtime": 104,
		"genre_ids": [
			878
		],
		"hash": "2D6B660F7EE4DE4AC2D8C469E05C17DF70B061B4",
		"updated": "2021-09-18T08:38:29.92+00:00"
	},
	{
		"id": 1305,
		"tmdb_id": 1949,
		"imdb_id": "tt0443706",
		"title": "Tên Sát Nhân Hoàn Hảo",
		"english_title": "Zodiac",
		"backdrop_path": "/41pke1VcV9rI94RmlThLiceIW8O.jpg",
		"imdb": 7.7,
		"release_date": "2007-03-02",
		"runtime": 157,
		"genre_ids": [
			80,
			18,
			9648,
			53
		],
		"hash": "F371B8F6B88D425806FD25BFB46AEE8FBA573B0E",
		"updated": "2021-09-19T10:59:39.817+00:00"
	},
	{
		"id": 1306,
		"tmdb_id": 3133,
		"imdb_id": "tt0069762",
		"title": "Đất Dữ",
		"english_title": "Badlands",
		"backdrop_path": "/jW8cU20SiYBTfqXajKbvBQHTMMl.jpg",
		"imdb": 7.8,
		"release_date": "1973-10-15",
		"runtime": 94,
		"genre_ids": [
			18,
			80
		],
		"hash": "A02444CE6833CCC787284ACB6E199E88395D4278",
		"updated": "2021-09-19T10:59:49.35+00:00"
	},
	{
		"id": 1308,
		"tmdb_id": 10483,
		"imdb_id": "tt0452608",
		"title": "Cuộc Đua Tử Thần",
		"english_title": "Death Race",
		"backdrop_path": "/xUyHhsVZQlouuQNs8MvWMJQlxHS.jpg",
		"imdb": 6.3,
		"release_date": "2008-08-22",
		"runtime": 105,
		"genre_ids": [
			28,
			53,
			878
		],
		"hash": "ED191DA814209477EB23FDDC3E94F8EB2DB6C1E1",
		"updated": "2021-09-19T11:00:10.703+00:00"
	},
	{
		"id": 1309,
		"tmdb_id": 51620,
		"imdb_id": "tt1500491",
		"title": "Cuộc Đua Tử Thần 2",
		"english_title": "Death Race 2",
		"backdrop_path": "/gqSU32lVTUGHcdHQ5xLLzShoyXQ.jpg",
		"imdb": 5.6,
		"release_date": "2010-11-12",
		"runtime": 100,
		"genre_ids": [
			28,
			53,
			878
		],
		"hash": "BB808FC5362A1E52B919BC7DB0AD03088C37269B",
		"updated": "2021-09-19T11:00:19.13+00:00"
	},
	{
		"id": 1302,
		"tmdb_id": 770,
		"imdb_id": "tt0031381",
		"title": "Cuốn Theo Chiều Gió",
		"english_title": "Gone with the Wind",
		"backdrop_path": "/aFoqf4Q7HUT20OozQjIXr8JuMBq.jpg",
		"imdb": 8.1,
		"release_date": "1939-12-15",
		"runtime": 233,
		"genre_ids": [
			18,
			10752,
			10749
		],
		"hash": "1F225F957358FFEB30EFC046EC468346091278C4",
		"updated": "2021-09-19T11:07:25.84+00:00"
	},
	{
		"id": 87,
		"tmdb_id": 550,
		"imdb_id": "tt0137523",
		"title": "Fight Club",
		"english_title": "Fight Club",
		"backdrop_path": "/7XEtHQoy1hwa8XWaOkSv3rlteea.jpg",
		"imdb": 8.8,
		"release_date": "1999-10-15",
		"runtime": 139,
		"genre_ids": [
			18
		],
		"hash": "A086CE4AFABBD8AB949662E30134A49E22D1F0C7",
		"updated": "2021-12-18T02:55:36.729+00:00"
	},
	{
		"id": 349,
		"tmdb_id": 27205,
		"imdb_id": "tt1375666",
		"title": "Kẻ Đánh Cắp Giấc Mơ",
		"english_title": "Inception",
		"backdrop_path": "/rWDkbJlIyqN8KcqXajh9sZMwGzo.jpg",
		"imdb": 8.8,
		"release_date": "2010-07-15",
		"runtime": 148,
		"genre_ids": [
			28,
			878,
			12
		],
		"hash": "224BF45881252643DFC2E71ABC7B2660A21C68C4",
		"updated": "2021-09-15T06:48:12.929+00:00"
	},
	{
		"id": 1109,
		"tmdb_id": 459151,
		"imdb_id": "tt6932874",
		"title": "The Boss Baby: Family Business",
		"english_title": "The Boss Baby: Family Business",
		"backdrop_path": "/z1s7yuQbDOhJE2zvvADofBCL9j1.jpg",
		"imdb": 5.9,
		"release_date": "2021-07-01",
		"runtime": 107,
		"genre_ids": [
			16,
			35,
			12,
			10751
		],
		"hash": "79844D98E63DED2A6A3DAC0AC65E0DBDBCEA52F8",
		"updated": "2021-09-15T07:17:56.835+00:00"
	},
	{
		"id": 1194,
		"tmdb_id": 675445,
		"imdb_id": "tt11832046",
		"title": "Đội Đặc Nhiệm Siêu Đẳng",
		"english_title": "PAW Patrol: The Movie",
		"backdrop_path": "/w2jm8I0K83aZzHcI4Acl8DtuXCt.jpg",
		"imdb": 6.2,
		"release_date": "2021-08-09",
		"runtime": 90,
		"genre_ids": [
			16,
			10751,
			12,
			35
		],
		"hash": "6AF7C9DA45AB32CFCDD83CF63477F85736547613",
		"updated": "2021-09-15T07:50:33.352+00:00"
	},
	{
		"id": 1171,
		"tmdb_id": 666243,
		"imdb_id": "tt11657662",
		"title": "Thợ Săn Quái Vật: Ác Mộng Của Sói",
		"english_title": "The Witcher: Nightmare of the Wolf",
		"backdrop_path": "/hJK1o2MrcZ3qtSFjgtx5hKyWpH5.jpg",
		"imdb": 7.4,
		"release_date": "2021-08-23",
		"runtime": 81,
		"genre_ids": [
			16,
			28,
			14
		],
		"hash": "0DB411A776ACC1F41355D29A30FB6446621A2EA5",
		"updated": "2021-09-15T07:54:26.865+00:00"
	},
	{
		"id": 1201,
		"tmdb_id": 522478,
		"imdb_id": "tt8376234",
		"title": "Thỏ Peter 2: Cuộc Trốn Chạy",
		"english_title": "Peter Rabbit 2: The Runaway",
		"backdrop_path": "/aFu37l5RhfE1DPMsmuLkCfIymnw.jpg",
		"imdb": 6.2,
		"release_date": "2021-03-25",
		"runtime": 93,
		"genre_ids": [
			10751,
			35,
			12,
			16,
			14
		],
		"hash": "65E74C72553A542FE2156DFB0AD36419CDADE7BA",
		"updated": "2021-09-15T07:59:05.773+00:00"
	},
	{
		"id": 32,
		"tmdb_id": 274,
		"imdb_id": "tt0102926",
		"title": "Sự Im Lặng Của Bầy Cừu",
		"english_title": "The Silence of the Lambs",
		"backdrop_path": "/jEB8ILifjm2C4mOBOeTZNN4UNiF.jpg",
		"imdb": 8.6,
		"release_date": "1991-02-01",
		"runtime": 119,
		"genre_ids": [
			80,
			18,
			53,
			27
		],
		"hash": "B6EC2A4507B13ADE6BC4A1FAC5B39CA25888B326",
		"updated": "2021-09-15T08:00:53.696+00:00"
	},
	{
		"id": 1311,
		"tmdb_id": 321528,
		"imdb_id": "tt4324274",
		"title": "Batman vs. Robin",
		"english_title": "Batman vs. Robin",
		"backdrop_path": "/r7JUBp8WyadE6AljspzF6mo5hmP.jpg",
		"imdb": 7.1,
		"release_date": "2015-04-14",
		"runtime": 72,
		"genre_ids": [
			878,
			28,
			12,
			16
		],
		"hash": "2ED1ED7209F88092D97029B79B089C8112723342",
		"updated": "2021-09-16T02:08:37.576171+00:00"
	},
	{
		"id": 1312,
		"tmdb_id": 366924,
		"imdb_id": "tt4870838",
		"title": "Batman: Bad Blood",
		"english_title": "Batman: Bad Blood",
		"backdrop_path": "/jLslJietfQJEgOvQHk4fRYFCnTS.jpg",
		"imdb": 6.8,
		"release_date": "2016-03-22",
		"runtime": 72,
		"genre_ids": [
			878,
			28,
			16
		],
		"hash": "F566AFA330325BA5947019F64C9E36F2336DF171",
		"updated": "2021-09-16T02:11:00.658758+00:00"
	},
	{
		"id": 1313,
		"tmdb_id": 40751,
		"imdb_id": "tt0109688",
		"title": "Đông Tà Tây Độc",
		"english_title": "Ashes of Time",
		"backdrop_path": "/eCVxEk1NM5dCgcgzCXvn3Hv3B6a.jpg",
		"imdb": 7.1,
		"release_date": "1994-09-17",
		"runtime": 100,
		"genre_ids": [
			18,
			28
		],
		"hash": "EE9B057A344C028B03F3C3CE21A0AD8CFC0BDE27",
		"updated": "2021-09-16T02:13:42.186118+00:00"
	},
	{
		"id": 1314,
		"tmdb_id": 11220,
		"imdb_id": "tt0112913",
		"title": "Đọa Lạc Thiên Sứ",
		"english_title": "Fallen Angels",
		"backdrop_path": "/aw44D3PqjO6LCWad2bo6WjWRAMK.jpg",
		"imdb": 7.7,
		"release_date": "1995-09-06",
		"runtime": 98,
		"genre_ids": [
			18,
			28,
			10749
		],
		"hash": "D1A0795DDEBA288004143B2AA5B317BFBFAA39F1",
		"updated": "2021-09-16T02:19:18.600657+00:00"
	},
	{
		"id": 1316,
		"tmdb_id": 523638,
		"imdb_id": "tt6372694",
		"title": "Prisoners of the Ghostland",
		"english_title": "Prisoners of the Ghostland",
		"backdrop_path": "/gP5f4HL7WjuOeT46TWtVoBd3GM5.jpg",
		"imdb": 4.9,
		"release_date": "2021-08-31",
		"runtime": 103,
		"genre_ids": [
			28,
			53,
			27
		],
		"hash": "B2495C1C213D8D2E77A53AE8E0C9D1295FA138A5",
		"updated": "2021-09-16T02:25:10.782+00:00"
	},
	{
		"id": 222,
		"tmdb_id": 1422,
		"imdb_id": "tt0407887",
		"title": "Điệp Vụ Boston",
		"english_title": "The Departed",
		"backdrop_path": "/5Q4MgP6GtB0E3COVJijjQY4xEQo.jpg",
		"imdb": 8.5,
		"release_date": "2006-10-05",
		"runtime": 151,
		"genre_ids": [
			18,
			53,
			80
		],
		"hash": "6B4C0A61376C4DD7E3BC2E5EE543B3BBB3282ECD",
		"updated": "2021-09-16T02:44:10.556+00:00"
	},
	{
		"id": 1051,
		"tmdb_id": 664280,
		"imdb_id": "tt11989890",
		"title": "David Attenborough: Một Cuộc Đời Trên Trái Đất",
		"english_title": "David Attenborough: A Life on Our Planet",
		"backdrop_path": "/hHL4pwGzYS4njLpXhIjfc9skAQJ.jpg",
		"imdb": 7,
		"release_date": "2020-09-28",
		"runtime": 83,
		"genre_ids": [
			99
		],
		"hash": "CD2A82EDF1131C948E29D08E03C4BD1B6E6F38F3",
		"updated": "2021-09-16T02:44:42.146+00:00"
	},
	{
		"id": 299,
		"tmdb_id": 20453,
		"imdb_id": "tt1187043",
		"title": "3 Chàng Ngốc",
		"english_title": "3 Idiots",
		"backdrop_path": "/7fqChpiaXELdOBGHVJaEoetS7dw.jpg",
		"imdb": 8.4,
		"release_date": "2009-12-23",
		"runtime": 170,
		"genre_ids": [
			18,
			35
		],
		"hash": "F05FB1B5E23FBF98183958DA6D66EF87DB4D1A62",
		"updated": "2021-09-16T02:56:18.574+00:00"
	},
	{
		"id": 457,
		"tmdb_id": 68718,
		"imdb_id": "tt1853728",
		"title": "Giải Cứu Nô Lệ",
		"english_title": "Django Unchained",
		"backdrop_path": "/q0eee339t5vbAUvxxku5QPTXzQA.jpg",
		"imdb": 8.4,
		"release_date": "2012-12-25",
		"runtime": 165,
		"genre_ids": [
			18,
			37
		],
		"hash": "5A33FE6305951A420CA30A6A5FF2E48C6FB4C7F1",
		"updated": "2021-09-16T02:56:59.164+00:00"
	},
	{
		"id": 882,
		"tmdb_id": 324857,
		"imdb_id": "tt4633694",
		"title": "Người Nhện: Vũ Trụ Mới",
		"english_title": "Spider-Man: Into the Spider-Verse",
		"backdrop_path": "/8DpluQKl7e8v2A7flR1QLFrecnD.jpg",
		"imdb": 8.4,
		"release_date": "2018-12-06",
		"runtime": 117,
		"genre_ids": [
			28,
			12,
			16,
			878,
			35
		],
		"hash": "EADF812FFF1D9F1200AA87AB93DAEE6B40F96C33",
		"updated": "2021-09-16T03:03:07.756+00:00"
	},
	{
		"id": 927,
		"tmdb_id": 299536,
		"imdb_id": "tt4154756",
		"title": "Biệt Đội Siêu Anh Hùng: Cuộc Chiến Vô Cực",
		"english_title": "Avengers: Infinity War",
		"backdrop_path": "/b3XV61VdIV26VGTY7dncn9szOko.jpg",
		"imdb": 8.4,
		"release_date": "2018-04-25",
		"runtime": 149,
		"genre_ids": [
			12,
			28,
			878
		],
		"hash": "866BDCFA006930A718ADBC21D8CAE1F2C7F9D8B3",
		"updated": "2021-09-16T03:04:37.091+00:00"
	},
	{
		"id": 990,
		"tmdb_id": 299534,
		"imdb_id": "tt4154796",
		"title": "Biệt Đội Siêu Anh Hùng: Hồi Kết",
		"english_title": "Avengers: Endgame",
		"backdrop_path": "/lffEOwsdyUgVghJhDNoy9LLJrRK.jpg",
		"imdb": 8.4,
		"release_date": "2019-04-24",
		"runtime": 181,
		"genre_ids": [
			12,
			878,
			28
		],
		"hash": "223F7484D326AD8EFD3CF1E548DED524833CB77E",
		"updated": "2021-09-16T03:05:27.686+00:00"
	},
	{
		"id": 319,
		"tmdb_id": 14160,
		"imdb_id": "tt1049413",
		"title": "Vút Bay",
		"english_title": "Up",
		"backdrop_path": "/iHUpAKIQddwKq5qQRvujaNHb2Hv.jpg",
		"imdb": 8.2,
		"release_date": "2009-05-28",
		"runtime": 96,
		"genre_ids": [
			16,
			35,
			10751,
			12
		],
		"hash": "6AC7F6C2C49342F02DE3621B9595C073C485A47A",
		"updated": "2021-09-16T06:23:32.189+00:00"
	},
	{
		"id": 363,
		"tmdb_id": 10193,
		"imdb_id": "tt0435761",
		"title": "Câu Chuyện Đồ Chơi 3",
		"english_title": "Toy Story 3",
		"backdrop_path": "/6HguugAxjC9qwRu8B7nVGXhuLsu.jpg",
		"imdb": 8.2,
		"release_date": "2010-06-16",
		"runtime": 103,
		"genre_ids": [
			16,
			10751,
			35
		],
		"hash": "63EF65AC303B350E5C5C230C03066DCCB3A45E64",
		"updated": "2021-09-16T06:24:59.179+00:00"
	},
	{
		"id": 500,
		"tmdb_id": 106646,
		"imdb_id": "tt0993846",
		"title": "Sói Già Phố Wall",
		"english_title": "The Wolf of Wall Street",
		"backdrop_path": "/w7mPmuHFGq5AwURaEJYkD8O8GZW.jpg",
		"imdb": 8.2,
		"release_date": "2013-12-25",
		"runtime": 180,
		"genre_ids": [
			80,
			18,
			35
		],
		"hash": "4B642D022980E5EBAA7CF4B6E1CC93769921CB42",
		"updated": "2021-09-16T06:28:07.557+00:00"
	},
	{
		"id": 539,
		"tmdb_id": 158445,
		"imdb_id": "tt2659414",
		"title": "Điều Kì Diệu Ở Phòng Giam Số 7",
		"english_title": "Miracle in Cell No. 7",
		"backdrop_path": "/5zCLCGTWrzxbR0i6w64IH22ynce.jpg",
		"imdb": 8.2,
		"release_date": "2013-01-23",
		"runtime": 127,
		"genre_ids": [
			18,
			35,
			10751
		],
		"hash": "78EF3F9142D98C7F769CE0AA21D71BA7E709723F",
		"updated": "2021-09-16T06:30:47.567+00:00"
	},
	{
		"id": 1049,
		"tmdb_id": 495764,
		"imdb_id": "tt7713068",
		"title": "Birds of Prey: Cuộc Lột Xác Huy Hoàng Của Harley Quinn",
		"english_title": "Birds of Prey",
		"backdrop_path": "/qv46HlV4ZFnL8OWC6BXjbJyO92A.jpg",
		"imdb": 6.1,
		"release_date": "2020-02-05",
		"runtime": 109,
		"genre_ids": [
			28,
			80
		],
		"hash": "7E083EB9D86ECA81FADA5B7D8DA8852AD3CAEB5D",
		"updated": "2021-09-16T07:37:10.919+00:00"
	},
	{
		"id": 1019,
		"tmdb_id": 481848,
		"imdb_id": "tt7504726",
		"title": "Tiếng Gọi Nơi Hoang Dã",
		"english_title": "The Call of the Wild",
		"backdrop_path": "/85agqxjf6eUkq4F1hlsbTQEGpEC.jpg",
		"imdb": 6.8,
		"release_date": "2020-02-19",
		"runtime": 100,
		"genre_ids": [
			18,
			12,
			10751
		],
		"hash": "C667A1FCCEA2DAE0892306396C8C6BAF3BBDB070",
		"updated": "2021-09-16T07:43:19.833+00:00"
	},
	{
		"id": 1317,
		"tmdb_id": 454983,
		"imdb_id": "tt3799232",
		"title": "Bốt Hôn Phần 1",
		"english_title": "The Kissing Booth",
		"backdrop_path": "/wZLtIdehOlmhvkoNRXMkR1fmEXV.jpg",
		"imdb": 6,
		"release_date": "2018-05-11",
		"runtime": 105,
		"genre_ids": [
			10749,
			35
		],
		"hash": "1C531DEEFD07F29BFC00EFD43A823F0E6072A458",
		"updated": "2021-09-17T02:05:15.517313+00:00"
	},
	{
		"id": 1318,
		"tmdb_id": 583083,
		"imdb_id": "tt9784456",
		"title": "Bốt Hôn 2",
		"english_title": "The Kissing Booth 2",
		"backdrop_path": "/gmMihG5SRCXJW8RcHHsFvsV65YT.jpg",
		"imdb": 5.8,
		"release_date": "2020-07-24",
		"runtime": 132,
		"genre_ids": [
			35,
			10749
		],
		"hash": "A144C72FA03FB17D4AA93040BCA5AB0E5D31E977",
		"updated": "2021-09-17T02:06:44.866978+00:00"
	},
	{
		"id": 1319,
		"tmdb_id": 727745,
		"imdb_id": "tt12783454",
		"title": "Bốt Hôn 3",
		"english_title": "The Kissing Booth 3",
		"backdrop_path": "/id5O6oRlicUwH5RjqfmRzC0SaET.jpg",
		"imdb": 4.7,
		"release_date": "2021-08-11",
		"runtime": 112,
		"genre_ids": [
			10749,
			35
		],
		"hash": "29FEA7EBE9669634FF7F9B168FF4D8E82D171C54",
		"updated": "2021-09-17T02:07:54.695658+00:00"
	},
	{
		"id": 1320,
		"tmdb_id": 454227,
		"imdb_id": "tt6679794",
		"title": "Outlaw King",
		"english_title": "Outlaw King",
		"backdrop_path": "/lpyBAL1BgH9TScrIHVWkmw8zhzJ.jpg",
		"imdb": 6.9,
		"release_date": "2018-09-06",
		"runtime": 122,
		"genre_ids": [
			28,
			36,
			18,
			10752
		],
		"hash": "8404D8C020543F10270D2B0B4A40946C184F8716",
		"updated": "2021-09-17T02:09:49.082238+00:00"
	},
	{
		"id": 1321,
		"tmdb_id": 458027,
		"imdb_id": "tt7844166",
		"title": "Trận Chiến Cuối Cùng",
		"english_title": "The Last Warrior",
		"backdrop_path": "/uVdwsVFd1kHjvV2EDTaYdCcOWFE.jpg",
		"imdb": 6.2,
		"release_date": "2018-01-18",
		"runtime": 105,
		"genre_ids": [
			28,
			18,
			14,
			36,
			12
		],
		"hash": "8DB6373469FDF4B35C30F12434DE70388D5A90E2",
		"updated": "2021-09-17T02:14:23.595193+00:00"
	},
	{
		"id": 1322,
		"tmdb_id": 77338,
		"imdb_id": "tt1675434",
		"title": "Những Kẻ Bên Lề",
		"english_title": "The Intouchables",
		"backdrop_path": "/pcmcumbyTkNNdQD8T67xZD3kWlx.jpg",
		"imdb": 8.5,
		"release_date": "2011-11-02",
		"runtime": 113,
		"genre_ids": [
			18,
			35
		],
		"hash": "4BDCB593DAC54B2E78F710BF4E3E78349148A70B",
		"updated": "2021-09-17T02:41:53.44848+00:00"
	},
	{
		"id": 741,
		"tmdb_id": 411088,
		"imdb_id": "tt4857264",
		"title": "Sát Thủ Vô Hình",
		"english_title": "The Invisible Guest",
		"backdrop_path": "/cXLcvtYDl2djeuEXXXfuTf2pPfv.jpg",
		"imdb": 8.1,
		"release_date": "2016-09-22",
		"runtime": 107,
		"genre_ids": [
			9648,
			80,
			53
		],
		"hash": "D38FA41BF394F4A1E58761B1B9BB86A1F40FC590",
		"updated": "2021-09-17T12:42:29.347+00:00"
	},
	{
		"id": 1323,
		"tmdb_id": 22881,
		"imdb_id": "tt0878804",
		"title": "Mái Ấm Gia Đình",
		"english_title": "The Blind Side",
		"backdrop_path": "/513xjks4mVJRmcrPRvJGyTkf31x.jpg",
		"imdb": 7.6,
		"release_date": "2009-11-20",
		"runtime": 129,
		"genre_ids": [
			18
		],
		"hash": "1DEDD589022AD1D9C4578178E23A4DFB57C7CD00",
		"updated": "2021-09-17T02:53:58.521+00:00"
	},
	{
		"id": 1324,
		"tmdb_id": 404378,
		"imdb_id": "tt3606888",
		"title": "Chú Mèo Đường Phố",
		"english_title": "A Street Cat Named Bob",
		"backdrop_path": "/9aDrizajKm07U1ueeRWouuua4zx.jpg",
		"imdb": 7.4,
		"release_date": "2016-11-04",
		"runtime": 103,
		"genre_ids": [
			10751,
			18
		],
		"hash": "33EA48144377098EECD8F5A1431BC98A60F5B3A8",
		"updated": "2021-09-17T02:58:09.782+00:00"
	},
	{
		"id": 1325,
		"tmdb_id": 157354,
		"imdb_id": "tt2334649",
		"title": "Nhà Ga Fruitvale",
		"english_title": "Fruitvale Station",
		"backdrop_path": "/fvNJBmWeXPcIty9FC1ut9s7oSRq.jpg",
		"imdb": 7.5,
		"release_date": "2013-07-26",
		"runtime": 82,
		"genre_ids": [
			18
		],
		"hash": "626296504D89A8FBC4D0436E93BF322976142D4C",
		"updated": "2021-09-17T03:02:44.525+00:00"
	},
	{
		"id": 1000,
		"tmdb_id": 447404,
		"imdb_id": "tt5884052",
		"title": "Thám Tử PiKACHU",
		"english_title": "Pokémon Detective Pikachu",
		"backdrop_path": "/pcQm6XSbczWLSiUhaq6TbrctZZp.jpg",
		"imdb": 6.6,
		"release_date": "2019-05-03",
		"runtime": 105,
		"genre_ids": [
			28,
			12,
			14
		],
		"hash": "BD550DBE373C2344927A49D8F83BE4F44D40C400",
		"updated": "2021-09-17T07:08:56.743+00:00"
	},
	{
		"id": 917,
		"tmdb_id": 260513,
		"imdb_id": "tt3606756",
		"title": "Gia Đình Siêu Nhân 2",
		"english_title": "Incredibles 2",
		"backdrop_path": "/zzkvFJx1m1rplODfqOYpV9N0Dia.jpg",
		"imdb": 7.6,
		"release_date": "2018-06-14",
		"runtime": 118,
		"genre_ids": [
			28,
			12,
			16,
			10751
		],
		"hash": "2A4A6D6710F271957B1EA2F8A9A748E84E6D10A3",
		"updated": "2021-09-17T11:58:49.132+00:00"
	},
	{
		"id": 864,
		"tmdb_id": 338952,
		"imdb_id": "tt4123430",
		"title": "Sinh Vật Huyền Bí: Tội Ác Của Grindelwald",
		"english_title": "Fantastic Beasts: The Crimes of Grindelwald",
		"backdrop_path": "/zsBJzQBPKuoMQm2VI0v1eI4OxYg.jpg",
		"imdb": 6.6,
		"release_date": "2018-11-14",
		"runtime": 134,
		"genre_ids": [
			12,
			14,
			18
		],
		"hash": "425376A5E0442BD6F3D565DC7402979DB0B20EC3",
		"updated": "2021-09-17T12:24:52.422+00:00"
	},
	{
		"id": 328,
		"tmdb_id": 40662,
		"imdb_id": "tt1569923",
		"title": "Batman: Under the Red Hood",
		"english_title": "Batman: Under the Red Hood",
		"backdrop_path": "/eomLgXDXkTuCqeQK3EIxj1Gprhf.jpg",
		"imdb": 8.1,
		"release_date": "2010-07-27",
		"runtime": 75,
		"genre_ids": [
			878,
			80,
			28,
			16,
			9648
		],
		"hash": "33417B345DDD31E1061EC5FAD35958ACAF4713B9",
		"updated": "2021-09-17T12:35:12.229+00:00"
	},
	{
		"id": 755,
		"tmdb_id": 324786,
		"imdb_id": "tt2119532",
		"title": "Người Hùng Không Súng",
		"english_title": "Hacksaw Ridge",
		"backdrop_path": "/6Y26DQsPc2YDpliFwFDRYAZoLN7.jpg",
		"imdb": 8.1,
		"release_date": "2016-10-07",
		"runtime": 139,
		"genre_ids": [
			18,
			36,
			10752
		],
		"hash": "65793E99362AAD994AE86D3F97E43B3465B05B1B",
		"updated": "2021-10-08T05:26:31.249+00:00"
	},
	{
		"id": 177,
		"tmdb_id": 9806,
		"imdb_id": "tt0317705",
		"title": "Gia Đình Siêu Nhân",
		"english_title": "The Incredibles",
		"backdrop_path": "/8ls2yTRmhfK51giuARBUuicT6kL.jpg",
		"imdb": 8,
		"release_date": "2004-11-05",
		"runtime": 115,
		"genre_ids": [
			28,
			12,
			16,
			10751
		],
		"hash": "9988B0F171FC23AAE15399ACF7518D956B759D07",
		"updated": "2021-09-18T02:13:41.269+00:00"
	},
	{
		"id": 1328,
		"tmdb_id": 560008,
		"imdb_id": "tt9179096",
		"title": "Thảm Họa Minamata",
		"english_title": "Minamata",
		"backdrop_path": "/pFNPhV6aW2hiuVfvdqaY4gRcgb7.jpg",
		"imdb": 7.8,
		"release_date": "2020-03-13",
		"runtime": 115,
		"genre_ids": [
			18,
			36
		],
		"hash": "E8173B55203B6AB9F100763A6837CE7B5F8407F5",
		"updated": "2021-09-18T02:41:48.573932+00:00"
	},
	{
		"id": 1326,
		"tmdb_id": 573699,
		"imdb_id": "tt9288776",
		"title": "Bạch Xà: Duyên Khởi",
		"english_title": "White Snake",
		"backdrop_path": "/u0KP1UksGSiPEZckk3g7FnShzS3.jpg",
		"imdb": 7.1,
		"release_date": "2019-01-11",
		"runtime": 99,
		"genre_ids": [
			10749,
			16,
			14
		],
		"hash": "6EE8D30D88487AB086E84A20D8A3665BC9DA114A",
		"updated": "2021-10-04T02:38:46.937+00:00"
	},
	{
		"id": 564,
		"tmdb_id": 282297,
		"imdb_id": "tt3302820",
		"title": "Giải Pháp Cải Thiện Môi Trường",
		"english_title": "Cowspiracy: The Sustainability Secret",
		"backdrop_path": "/xUypYlThE5zRcf0ZFLA2RlYhNuh.jpg",
		"imdb": 8.2,
		"release_date": "2014-07-01",
		"runtime": 90,
		"genre_ids": [
			99
		],
		"hash": "06C4E68AFC8F1981C3BE69E8CA1F299068A1317F",
		"updated": "2021-10-06T04:13:32.09+00:00"
	},
	{
		"id": 1327,
		"tmdb_id": 565028,
		"imdb_id": "tt9347730",
		"title": "Sát Nhân Trong Gương",
		"english_title": "Candyman",
		"backdrop_path": "/rthGCeeGa3973gsyjndvc6l8zDD.jpg",
		"imdb": 6.3,
		"release_date": "2021-08-25",
		"runtime": 91,
		"genre_ids": [
			27,
			53
		],
		"hash": "6A430DA81D64EC1D2454DDFFFB77C9894A75D3BA",
		"updated": "2021-11-12T06:04:58.281+00:00"
	},
	{
		"id": 506,
		"tmdb_id": 149871,
		"imdb_id": "tt2576852",
		"title": "Chuyện cổ tích Công Chúa Kaguya",
		"english_title": "The Tale of the Princess Kaguya",
		"backdrop_path": "/3Y6F7EZWJza32RWKgWE7k77RBTG.jpg",
		"imdb": 8,
		"release_date": "2013-11-23",
		"runtime": 137,
		"genre_ids": [
			16,
			18,
			14
		],
		"hash": "E71979613276E19FCF100F0928245B5DCE14401B",
		"updated": "2021-09-18T06:01:31.838+00:00"
	},
	{
		"id": 599,
		"tmdb_id": 180299,
		"imdb_id": "tt2265171",
		"title": "Đột Kích 2: Kẻ Sát Nhân",
		"english_title": "The Raid 2",
		"backdrop_path": "/3J0JXOcbKGX4PBbqYqfzd8PkzkH.jpg",
		"imdb": 8,
		"release_date": "2014-03-27",
		"runtime": 150,
		"genre_ids": [
			28,
			80,
			53
		],
		"hash": "E15CE089EEA4CB50EAE2A6D1A59BDD86FCB0EA1F",
		"updated": "2021-09-18T06:03:59.687+00:00"
	},
	{
		"id": 50,
		"tmdb_id": 37797,
		"imdb_id": "tt0113824",
		"title": "Lời Thì Thầm Của Trái Tim",
		"english_title": "Whisper of the Heart",
		"backdrop_path": "/4VTq6HLm0LtaLaFHBuOfPUwbPFj.jpg",
		"imdb": 7.9,
		"release_date": "1995-07-15",
		"runtime": 111,
		"genre_ids": [
			16,
			18,
			10751
		],
		"hash": "69553E630A6FBA72642CA11EF1CCBAFDE0AC416D",
		"updated": "2021-09-18T06:13:02.081+00:00"
	},
	{
		"id": 1330,
		"tmdb_id": 241863,
		"imdb_id": "tt3354222",
		"title": "Trò Chơi Sinh Tồn",
		"english_title": "As the Gods Will",
		"backdrop_path": "/aIokpcLZ1CRJDqFCjb0KHlUY1UQ.jpg",
		"imdb": 6.4,
		"release_date": "2014-11-15",
		"runtime": 117,
		"genre_ids": [
			53,
			27,
			35,
			9648
		],
		"hash": "0A34124B853668BBE6258C6975ADE1F10A13F8CF",
		"updated": "2021-09-18T08:59:28.571055+00:00"
	},
	{
		"id": 441,
		"tmdb_id": 87827,
		"imdb_id": "tt0454876",
		"title": "Cuộc Đời Của Pi",
		"english_title": "Life of Pi",
		"backdrop_path": "/r9lL0JA65FijsKNqG7rfEDzKwqj.jpg",
		"imdb": 7.9,
		"release_date": "2012-11-20",
		"runtime": 127,
		"genre_ids": [
			12,
			18,
			28
		],
		"hash": "DB19274E188060B2815860D1D61E5C0DAF8807F5",
		"updated": "2021-09-18T12:03:26.71+00:00"
	},
	{
		"id": 613,
		"tmdb_id": 127585,
		"imdb_id": "tt1877832",
		"title": "Dị Nhân 6: Ngày Cũ Của Tương Lai",
		"english_title": "X-Men: Days of Future Past",
		"backdrop_path": "/tGvVxca7382cpnRoMpmdP6LoDUL.jpg",
		"imdb": 7.9,
		"release_date": "2014-05-15",
		"runtime": 132,
		"genre_ids": [
			28,
			12,
			14,
			878
		],
		"hash": "4F275301F4BAA51B455749599DC53250413EB9AD",
		"updated": "2021-09-18T12:20:26.556+00:00"
	},
	{
		"id": 808,
		"tmdb_id": 315635,
		"imdb_id": "tt2250912",
		"title": "Người Nhện: Trở Về Nhà",
		"english_title": "Spider-Man: Homecoming",
		"backdrop_path": "/yjNhOJccI1FQhQm2ia4zBfkFHL3.jpg",
		"imdb": 7.4,
		"release_date": "2017-07-05",
		"runtime": 133,
		"genre_ids": [
			28,
			12,
			878,
			18
		],
		"hash": "4415109A20908D55CD42EAF24DF9AAF89F7B0F7B",
		"updated": "2021-09-18T12:38:31.969+00:00"
	},
	{
		"id": 490,
		"tmdb_id": 57158,
		"imdb_id": "tt1170358",
		"title": "Người Hobbit 2: Đại Chiến Với Rồng Lửa",
		"english_title": "The Hobbit: The Desolation of Smaug",
		"backdrop_path": "/68NCoYsHAjgaxz88vXqrVVeVrbp.jpg",
		"imdb": 7.8,
		"release_date": "2013-12-11",
		"runtime": 161,
		"genre_ids": [
			14,
			12,
			28
		],
		"hash": "D61ABDBD6A17D5FA2F116078A2FA20F02B07AF8F",
		"updated": "2021-09-18T13:02:58.263+00:00"
	},
	{
		"id": 190,
		"tmdb_id": 1895,
		"imdb_id": "tt0121766",
		"title": "Chiến Tranh Giữa Các Vì Sao 3: Sự Trả Thù Của Người Sith",
		"english_title": "Star Wars: Episode III - Revenge of the Sith",
		"backdrop_path": "/A0wfk0gISF7gH78CKCfLlkAf1Vs.jpg",
		"imdb": 7.5,
		"release_date": "2005-05-17",
		"runtime": 140,
		"genre_ids": [
			878,
			12,
			28
		],
		"hash": "F85205AC49E3FFDFDCF8BCA341D8300F306DF7AD",
		"updated": "2021-09-18T13:10:54.33+00:00"
	},
	{
		"id": 355,
		"tmdb_id": 12444,
		"imdb_id": "tt0926084",
		"title": "Harry Potter và Bảo Bối Tử Thần: Phần 1 (7)",
		"english_title": "Harry Potter and the Deathly Hallows: Part 1",
		"backdrop_path": "/6MRBGzyQJ3Vg2oI25QWjFX1tZix.jpg",
		"imdb": 7.7,
		"release_date": "2010-10-17",
		"runtime": 146,
		"genre_ids": [
			12,
			14
		],
		"hash": "E2FA0B7873AC4D5078C189C99C248B577D21521D",
		"updated": "2021-09-18T13:45:05.984+00:00"
	},
	{
		"id": 392,
		"tmdb_id": 12445,
		"imdb_id": "tt1201607",
		"title": "Harry Potter và Bảo Bối Tử Thần: Phần 2",
		"english_title": "Harry Potter and the Deathly Hallows: Part 2",
		"backdrop_path": "/m9FFoIhYzNHdys59ZIb5yCN9LWE.jpg",
		"imdb": 8.1,
		"release_date": "2011-07-07",
		"runtime": 130,
		"genre_ids": [
			14,
			12
		],
		"hash": "2C9E99F41E63FF7BED2AE763D8F42A898DD0740F",
		"updated": "2021-09-18T13:45:38.519+00:00"
	},
	{
		"id": 1331,
		"tmdb_id": 20526,
		"imdb_id": "tt1104001",
		"title": "Trò Chơi Ảo Giác: Kế Thừa",
		"english_title": "TRON: Legacy",
		"backdrop_path": "/yiggfsFRk5z2005oGojfyKkv7DI.jpg",
		"imdb": 6.8,
		"release_date": "2010-12-14",
		"runtime": 125,
		"genre_ids": [
			12,
			28,
			878
		],
		"hash": "87FD269AF7322BDF47F7758582386DF6F3672B48",
		"updated": "2021-09-19T01:42:29.281636+00:00"
	},
	{
		"id": 1332,
		"tmdb_id": 11970,
		"imdb_id": "tt0119282",
		"title": "Dũng Sĩ Héc Quyn",
		"english_title": "Hercules",
		"backdrop_path": "/6tCEWxFyz3wsMuwGgNbW5PlY9mI.jpg",
		"imdb": 7.3,
		"release_date": "1997-06-20",
		"runtime": 93,
		"genre_ids": [
			16,
			10751,
			14,
			12,
			35,
			10749
		],
		"hash": "4874FAE99578625CD5DE06F9A72B1FBA2FB0A0C9",
		"updated": "2021-09-19T01:45:30.211+00:00"
	},
	{
		"id": 547,
		"tmdb_id": 82992,
		"imdb_id": "tt1905041",
		"title": "Quá Nhanh Quá Nguy Hiểm 6",
		"english_title": "Fast & Furious 6",
		"backdrop_path": "/citoZW4atdMAKgkI9YQsJ8hgCky.jpg",
		"imdb": 7.1,
		"release_date": "2013-05-21",
		"runtime": 131,
		"genre_ids": [
			28,
			53,
			80
		],
		"hash": "99D461C4746D590E8D91B43DA17C53C7B435DB2E",
		"updated": "2021-09-19T04:59:46.336+00:00"
	},
	{
		"id": 383,
		"tmdb_id": 38356,
		"imdb_id": "tt1399103",
		"title": "Robot Đại Chiến 3: Vùng Tối Của Mặt Trăng",
		"english_title": "Transformers: Dark of the Moon",
		"backdrop_path": "/wsvuU3npjSTgSHT2JMuRhfsdVuI.jpg",
		"imdb": 6.2,
		"release_date": "2011-06-28",
		"runtime": 154,
		"genre_ids": [
			28,
			878,
			12
		],
		"hash": "46DAA8D625783596972A5DC4D0705FF74F069514",
		"updated": "2021-09-19T05:12:01.213+00:00"
	},
	{
		"id": 731,
		"tmdb_id": 283366,
		"imdb_id": "tt1935859",
		"title": "Mái Ấm Lạ Kỳ Của Cô Peregrine",
		"english_title": "Miss Peregrine's Home for Peculiar Children",
		"backdrop_path": "/9NaiDwcpREaiA9BjoYjuNQJzoXj.jpg",
		"imdb": 6.7,
		"release_date": "2016-09-27",
		"runtime": 127,
		"genre_ids": [
			18,
			14,
			12,
			10751
		],
		"hash": "64BC21FE3AA40A29C3875577ACBFEF2E1908910C",
		"updated": "2021-09-19T05:39:47.072+00:00"
	},
	{
		"id": 713,
		"tmdb_id": 173897,
		"imdb_id": "tt2592614",
		"title": "Vùng Đất Quỷ Dữ 6: Hồi Cuối",
		"english_title": "Resident Evil: The Final Chapter",
		"backdrop_path": "/3IINcuXGhJLUxiAPausNxDeOYN1.jpg",
		"imdb": 5.5,
		"release_date": "2016-12-23",
		"runtime": 107,
		"genre_ids": [
			28,
			27,
			878
		],
		"hash": "49C365C72C5F0555687DDAFE65D1174912F91508",
		"updated": "2021-09-19T05:42:35.171+00:00"
	},
	{
		"id": 141,
		"tmdb_id": 1996,
		"imdb_id": "tt0325703",
		"title": "Kẻ Cướp Lăng Mộ 2: Cái Nôi Của Sự Sống",
		"english_title": "Lara Croft: Tomb Raider - The Cradle of Life",
		"backdrop_path": "/ckEzypzsHExueLZQoXacSkbk9p7.jpg",
		"imdb": 5.6,
		"release_date": "2003-07-21",
		"runtime": 117,
		"genre_ids": [
			28,
			12,
			14,
			53
		],
		"hash": "C151F1DAA460A3E03B8C235F93D38ADB54CBD9C6",
		"updated": "2021-09-19T08:41:40.455+00:00"
	},
	{
		"id": 1267,
		"tmdb_id": 440,
		"imdb_id": "tt0758730",
		"title": "Quái Vật Và Người Ngoài Hành Tinh 2",
		"english_title": "Aliens vs Predator: Requiem",
		"backdrop_path": "/4ifakHvtmjMzsWIP6o74VFvZb2V.jpg",
		"imdb": 4.6,
		"release_date": "2007-12-25",
		"runtime": 94,
		"genre_ids": [
			14,
			28,
			878,
			53,
			27
		],
		"hash": "79E226298C2FDDCA2C17EFF2366F7080C7D9A181",
		"updated": "2021-09-19T10:37:48.065+00:00"
	},
	{
		"id": 1307,
		"tmdb_id": 13885,
		"imdb_id": "tt0408236",
		"title": "Sweeney Todd: The Demon Barber of Fleet Street",
		"english_title": "Sweeney Todd: The Demon Barber of Fleet Street",
		"backdrop_path": "/ibkxEN5B025YuI45QnLXBJFS7FX.jpg",
		"imdb": 7.3,
		"release_date": "2007-01-25",
		"runtime": 116,
		"genre_ids": [
			18,
			27
		],
		"hash": "43D6D663E882A8B799D0F80103A0068AD00165E9",
		"updated": "2021-09-19T11:00:01.758+00:00"
	},
	{
		"id": 1333,
		"tmdb_id": 111,
		"imdb_id": "tt0086250",
		"title": "Ông Trùm Mặt Sẹo",
		"english_title": "Scarface",
		"backdrop_path": "/BCIaTLdgNwi3LwknKaI1ys23o7.jpg",
		"imdb": 8.3,
		"release_date": "1983-12-09",
		"runtime": 170,
		"genre_ids": [
			28,
			80,
			18,
			53
		],
		"hash": "CE113F99560B99CA854442B03602B8954079942E",
		"updated": "2021-09-20T01:30:29.690864+00:00"
	},
	{
		"id": 1334,
		"tmdb_id": 10950,
		"imdb_id": "tt0277027",
		"title": "Gà Trống Nuôi Con",
		"english_title": "I Am Sam",
		"backdrop_path": "/mOsg2l9zq315ouw55rbNATSwgU1.jpg",
		"imdb": 7.6,
		"release_date": "2001-12-28",
		"runtime": 132,
		"genre_ids": [
			18
		],
		"hash": "E1408AECA1FCCECC6BB60D24823B800E9D35C499",
		"updated": "2021-09-20T02:04:37.75104+00:00"
	},
	{
		"id": 1335,
		"tmdb_id": 407445,
		"imdb_id": "tt5716464",
		"title": "Trong Từng Nhịp Thở",
		"english_title": "Breathe",
		"backdrop_path": "/cRef4nrCBAnbU8C5W2lhIACpMhN.jpg",
		"imdb": 7.2,
		"release_date": "2017-10-13",
		"runtime": 118,
		"genre_ids": [
			18,
			10749
		],
		"hash": "99DB0667496BE1C50A539B2B76E8993755144F81",
		"updated": "2021-09-20T02:06:14.362455+00:00"
	},
	{
		"id": 1354,
		"tmdb_id": 370755,
		"imdb_id": "tt5247022",
		"title": "Thành phố Paterson",
		"english_title": "Paterson",
		"backdrop_path": "/p9CKRBoguiZVpzBPyh5onYngBFk.jpg",
		"imdb": 7.4,
		"release_date": "2016-11-17",
		"runtime": 118,
		"genre_ids": [
			35,
			18,
			10749
		],
		"hash": "9D2F5750D2EEDFD6AA9D816B4CB97EC493F1D6F7",
		"updated": "2021-09-23T03:05:01.187373+00:00"
	},
	{
		"id": 1336,
		"tmdb_id": 527641,
		"imdb_id": "tt6472976",
		"title": "Năm Bước Để Yêu",
		"english_title": "Five Feet Apart",
		"backdrop_path": "/ia3jr9klkOYO6cIwOmpnI5mohcy.jpg",
		"imdb": 7.2,
		"release_date": "2019-03-14",
		"runtime": 116,
		"genre_ids": [
			10749,
			18
		],
		"hash": "3942473A449499AEC6A282B465898DC0DE0AB246",
		"updated": "2021-09-20T02:08:30.024+00:00"
	},
	{
		"id": 1337,
		"tmdb_id": 83666,
		"imdb_id": "tt1748122",
		"title": "Vương Quốc Trăng Lên",
		"english_title": "Moonrise Kingdom",
		"backdrop_path": "/bsYv9IFIGfpAV0oUbe7YTiyxhox.jpg",
		"imdb": 7.8,
		"release_date": "2012-05-16",
		"runtime": 94,
		"genre_ids": [
			35,
			18,
			10749
		],
		"hash": "185A937249C870811399BA3E42FA1780FAA56D2C",
		"updated": "2021-09-20T02:12:06.70282+00:00"
	},
	{
		"id": 1338,
		"tmdb_id": 379291,
		"imdb_id": "tt5091548",
		"title": "Justice League vs. Teen Titans",
		"english_title": "Justice League vs. Teen Titans",
		"backdrop_path": "/xdJLjrOtkiNIRN3vskXvBA00qmy.jpg",
		"imdb": 7,
		"release_date": "2016-05-13",
		"runtime": 78,
		"genre_ids": [
			878,
			28,
			16
		],
		"hash": "437600F5062AF99850999AD44BFA92678B106960",
		"updated": "2021-09-20T02:14:24.54676+00:00"
	},
	{
		"id": 1339,
		"tmdb_id": 8456,
		"imdb_id": "tt1023111",
		"title": "Không Chùn Bước",
		"english_title": "Never Back Down",
		"backdrop_path": "/49K6xQqCg6tbROFGhww71UJxVl4.jpg",
		"imdb": 6.6,
		"release_date": "2008-03-04",
		"runtime": 115,
		"genre_ids": [
			18,
			28
		],
		"hash": "4CD62A0FF658AE7CE5643EBC71A8D1A3FEB5C77F",
		"updated": "2021-09-20T03:15:34.472704+00:00"
	},
	{
		"id": 1315,
		"tmdb_id": 739990,
		"imdb_id": "tt10521144",
		"title": "Chuyện Kinh Dị Đêm Nay",
		"english_title": "Nightbooks",
		"backdrop_path": "/qAbqRVFP4FiQvQXTfggN7BYjxHZ.jpg",
		"imdb": 5.8,
		"release_date": "2021-09-15",
		"runtime": 100,
		"genre_ids": [
			14,
			10751
		],
		"hash": "4247C3C3A643AE4D7FCF1F1884E16F42E35847EE",
		"updated": "2021-09-21T01:51:48.811+00:00"
	},
	{
		"id": 1340,
		"tmdb_id": 10315,
		"imdb_id": "tt0432283",
		"title": "Gia Đình Nhà Cáo",
		"english_title": "Fantastic Mr. Fox",
		"backdrop_path": "/bsXHePiwfXmNeQLcqoPL3S12VGH.jpg",
		"imdb": 7.9,
		"release_date": "2009-10-23",
		"runtime": 87,
		"genre_ids": [
			12,
			16,
			35,
			10751
		],
		"hash": "0AD684DC44CC5E73CBFCC15AC62C2D53ACABBF82",
		"updated": "2021-09-21T02:29:18.629301+00:00"
	},
	{
		"id": 1341,
		"tmdb_id": 14836,
		"imdb_id": "tt0327597",
		"title": "Cô Bé Coraline",
		"english_title": "Coraline",
		"backdrop_path": "/2Ete3hugeOMPN5VUIIegwD6bAi0.jpg",
		"imdb": 7.7,
		"release_date": "2009-02-05",
		"runtime": 100,
		"genre_ids": [
			16,
			10751,
			14
		],
		"hash": "CCB173EDDA28E5B1ECF89F41905C01BA24577ADC",
		"updated": "2021-09-21T02:33:30.735464+00:00"
	},
	{
		"id": 1342,
		"tmdb_id": 593910,
		"imdb_id": "tt10155932",
		"title": "Lọ Lem",
		"english_title": "Cinderella",
		"backdrop_path": "/oiHcPwRKTUtp8YBdvMLuExjVDiU.jpg",
		"imdb": 4.2,
		"release_date": "2021-09-03",
		"runtime": 113,
		"genre_ids": [
			14,
			10749,
			35
		],
		"hash": "433C324E765E5C11D015610F690257101E8F921C",
		"updated": "2021-09-21T02:59:31.935942+00:00"
	},
	{
		"id": 1343,
		"tmdb_id": 4553,
		"imdb_id": "tt0361862",
		"title": "Gã Thợ Máy",
		"english_title": "The Machinist",
		"backdrop_path": "/ruz7181OPmO6Amzm0Kzf8I1cR7T.jpg",
		"imdb": 7.7,
		"release_date": "2004-02-09",
		"runtime": 101,
		"genre_ids": [
			53,
			18
		],
		"hash": "9FB6CE0A7282EB8CA1443A2E41C87AB725133A38",
		"updated": "2021-09-21T05:33:51.34617+00:00"
	},
	{
		"id": 1344,
		"tmdb_id": 675319,
		"imdb_id": "tt8545482",
		"title": "Khu 414",
		"english_title": "Zone 414",
		"backdrop_path": "/rrgcP53eKKx0hF7i31BZE93znjX.jpg",
		"imdb": 4.9,
		"release_date": "2021-09-03",
		"runtime": 98,
		"genre_ids": [
			878,
			53,
			9648
		],
		"hash": "AADCC695FD779EC836E382E2CC79803C4361BEAF",
		"updated": "2021-09-22T05:32:56.668975+00:00"
	},
	{
		"id": 1345,
		"tmdb_id": 595743,
		"imdb_id": "tt4479380",
		"title": "SAS: Red Notice",
		"english_title": "SAS: Red Notice",
		"backdrop_path": "/cmND6ZG4LcvPDZ64GtgBRv9ffOt.jpg",
		"imdb": 5.1,
		"release_date": "2021-08-11",
		"runtime": 120,
		"genre_ids": [
			28,
			53
		],
		"hash": "F707E39CC3EF51E977FF20A37DEE864B04F01B8E",
		"updated": "2021-09-22T05:44:50.562296+00:00"
	},
	{
		"id": 1346,
		"tmdb_id": 523936,
		"imdb_id": "tt5752192",
		"title": "Méandre",
		"english_title": "Meander",
		"backdrop_path": "/sgYvrv6w6VsKhdsnH7NyuW4oWGU.jpg",
		"imdb": 5.7,
		"release_date": "2021-05-26",
		"runtime": 91,
		"genre_ids": [
			27,
			878,
			18,
			53
		],
		"hash": "B29812FD4BA8CA80A4DEEDA553EBC8377FE828C9",
		"updated": "2021-09-22T05:48:20.233912+00:00"
	},
	{
		"id": 1347,
		"tmdb_id": 625169,
		"imdb_id": "tt8482584",
		"title": "Đội Bóng Của Trẻ Mồ Côi",
		"english_title": "12 Mighty Orphans",
		"backdrop_path": "/jstgFaYsGJ0AScKpbLE8cQhwKhL.jpg",
		"imdb": 6.9,
		"release_date": "2021-06-11",
		"runtime": 118,
		"genre_ids": [
			36,
			18
		],
		"hash": "9A698322F7635FC29E2C422CDEE8E3FAD6247B8D",
		"updated": "2021-09-22T05:50:46.940102+00:00"
	},
	{
		"id": 1348,
		"tmdb_id": 443791,
		"imdb_id": "tt5774060",
		"title": "Kẻ Săn Mồi Đáy Biển",
		"english_title": "Underwater",
		"backdrop_path": "/gc11MhfRBs4ngOmaiEpqNKPHi1w.jpg",
		"imdb": 5.8,
		"release_date": "2020-01-08",
		"runtime": 95,
		"genre_ids": [
			28,
			27,
			878,
			53
		],
		"hash": "DFAEA19933AB21A461848516B31050C8F6BFF0DD",
		"updated": "2021-09-22T16:29:15.248662+00:00"
	},
	{
		"id": 1350,
		"tmdb_id": 76285,
		"imdb_id": "tt1854564",
		"title": "Percy Jackson: Biển Quái Vật",
		"english_title": "Percy Jackson: Sea of Monsters",
		"backdrop_path": "/ylZ8Yr5NguHA5d6jocncu9SNsgJ.jpg",
		"imdb": 5.8,
		"release_date": "2013-08-07",
		"runtime": 106,
		"genre_ids": [
			12,
			10751,
			14
		],
		"hash": "5438C050165B1797430B493415D3167D1EEABDCD",
		"updated": "2021-09-23T02:39:16.376+00:00"
	},
	{
		"id": 1352,
		"tmdb_id": 582596,
		"imdb_id": "tt9619798",
		"title": "Yêu Nhầm Missy",
		"english_title": "The Wrong Missy",
		"backdrop_path": "/7HXwjwNnZQqEOeT6TQwF2hlbQDP.jpg",
		"imdb": 5.7,
		"release_date": "2020-05-13",
		"runtime": 90,
		"genre_ids": [
			35,
			10749
		],
		"hash": "2C816E83E3AEB32B85521BE0E96A1C258238F1FE",
		"updated": "2021-09-23T02:58:10.008087+00:00"
	},
	{
		"id": 1353,
		"tmdb_id": 539537,
		"imdb_id": "tt0983946",
		"title": "Đảo Kinh Hoàng",
		"english_title": "Fantasy Island",
		"backdrop_path": "/6N4WJqbBExVpK07SGNnRwuKD3vn.jpg",
		"imdb": 4.9,
		"release_date": "2020-02-13",
		"runtime": 109,
		"genre_ids": [
			27,
			14,
			12,
			9648
		],
		"hash": "87BAAE44C1847BB96185A1C9B9ADB3E7317AE035",
		"updated": "2021-09-23T03:03:00.56874+00:00"
	},
	{
		"id": 1356,
		"tmdb_id": 171372,
		"imdb_id": "tt1605717",
		"title": "Đầu To Thỏ Đế",
		"english_title": "Frank",
		"backdrop_path": "/jBkKw0GSAOTBsnar5RstD7MzkmL.jpg",
		"imdb": 7,
		"release_date": "2014-05-02",
		"runtime": 95,
		"genre_ids": [
			35,
			18,
			9648
		],
		"hash": "2F81934C6CEEC348B7271B66D498711F08B61743",
		"updated": "2021-09-23T03:08:50.260131+00:00"
	},
	{
		"id": 1357,
		"tmdb_id": 8321,
		"imdb_id": "tt0780536",
		"title": "Cặp đôi sát thủ ở Bruges",
		"english_title": "In Bruges",
		"backdrop_path": "/LXfznKrbrxU7ToXAaLGtz8snd6.jpg",
		"imdb": 7.9,
		"release_date": "2008-02-08",
		"runtime": 108,
		"genre_ids": [
			35,
			18,
			80
		],
		"hash": "87446225F46BA4408691CB81F75A12EB7F4E95C9",
		"updated": "2021-09-23T03:12:46.057122+00:00"
	},
	{
		"id": 1349,
		"tmdb_id": 397567,
		"imdb_id": "tt7160070",
		"title": "Thử Thách Thần Chết: Giữa Hai Thế Giới",
		"english_title": "Along with the Gods: The Two Worlds",
		"backdrop_path": "/c9u0zCvBa2E7i8rjnXH9guucu4r.jpg",
		"imdb": 7.3,
		"release_date": "2017-12-14",
		"runtime": 139,
		"genre_ids": [
			18,
			14,
			28
		],
		"hash": "7F260B57CC75ACB57C18C0E4103E1C2F43BE53E2",
		"updated": "2021-09-24T06:42:39.942+00:00"
	},
	{
		"id": 1358,
		"tmdb_id": 38050,
		"imdb_id": "tt1385826",
		"title": "Bản Đồ Định Mệnh",
		"english_title": "The Adjustment Bureau",
		"backdrop_path": "/yy9vYUkURXja59a3puxa96LQe5p.jpg",
		"imdb": 7,
		"release_date": "2011-03-03",
		"runtime": 106,
		"genre_ids": [
			878,
			53,
			10749
		],
		"hash": "95566CA977E0B26CF564BDA97D2D9058F7C5C1D6",
		"updated": "2021-09-23T03:16:36.596+00:00"
	},
	{
		"id": 1359,
		"tmdb_id": 526007,
		"imdb_id": "tt7979142",
		"title": "Kẻ Trực Đêm",
		"english_title": "The Night Clerk",
		"backdrop_path": "/j438BBVpszrUPRX9GcIIdPXN84Q.jpg",
		"imdb": 5.5,
		"release_date": "2020-02-19",
		"runtime": 90,
		"genre_ids": [
			53,
			80,
			18
		],
		"hash": "860624EEC2313B74A698214669580E9509C8FAB7",
		"updated": "2021-09-23T03:23:55.705386+00:00"
	},
	{
		"id": 1355,
		"tmdb_id": 229297,
		"imdb_id": "tt2870756",
		"title": "Phép Màu Dưới Ánh Trăng",
		"english_title": "Magic in the Moonlight",
		"backdrop_path": "/eIOLmLhRQPC44u5YyyPVw6BNhFZ.jpg",
		"imdb": 6.5,
		"release_date": "2014-07-25",
		"runtime": 98,
		"genre_ids": [
			35,
			18,
			10749
		],
		"hash": "8E2ADC728C8DCD0B5A08604B1B7192770E64AC4B",
		"updated": "2021-09-23T03:25:19.762+00:00"
	},
	{
		"id": 1360,
		"tmdb_id": 16007,
		"imdb_id": "tt0758742",
		"title": "Cuốn Sổ Tử Thần",
		"english_title": "Death Note",
		"backdrop_path": "/u9EVLK41oijsaAQjvwbKkb1Pp3k.jpg",
		"imdb": 7.6,
		"release_date": "2006-06-17",
		"runtime": 126,
		"genre_ids": [
			14,
			9648,
			53
		],
		"hash": "02F4E55F9535230D489E71E8F455CD61E3671720",
		"updated": "2021-09-23T05:25:22.096298+00:00"
	},
	{
		"id": 1378,
		"tmdb_id": 109418,
		"imdb_id": "tt2191701",
		"title": "Những Đứa Trẻ To Xác 2",
		"english_title": "Grown Ups 2",
		"backdrop_path": "/is1ulNEtlFor9LBJDjnP4nRZNGC.jpg",
		"imdb": 5.4,
		"release_date": "2013-07-11",
		"runtime": 101,
		"genre_ids": [
			35
		],
		"hash": "DF3A83ED3EA446FFE09BF17B0E2D2EE6C6C9B2AD",
		"updated": "2021-09-27T02:54:41.353+00:00"
	},
	{
		"id": 1362,
		"tmdb_id": 38757,
		"imdb_id": "tt0398286",
		"title": "Người Đẹp Tóc Mây",
		"english_title": "Tangled",
		"backdrop_path": "/461ejNKKaPQgZd8iglx6H6qNImU.jpg",
		"imdb": 7.7,
		"release_date": "2010-11-24",
		"runtime": 100,
		"genre_ids": [
			16,
			10751
		],
		"hash": "0477C03A7C27555BEE24F123D774662ADE08D23F",
		"updated": "2021-09-24T02:17:19.056632+00:00"
	},
	{
		"id": 1363,
		"tmdb_id": 446021,
		"imdb_id": "tt6628394",
		"title": "Phút Kinh Hoàng Tại El Royale",
		"english_title": "Bad Times at the El Royale",
		"backdrop_path": "/2ViR85dBa6QOIkcIUaArXbPVBTz.jpg",
		"imdb": 7.1,
		"release_date": "2018-10-04",
		"runtime": 141,
		"genre_ids": [
			53,
			18,
			9648,
			80
		],
		"hash": "FEA984ACC6C0D14610219C11D09668D7AEB7B3B5",
		"updated": "2021-09-24T02:20:24.958308+00:00"
	},
	{
		"id": 1364,
		"tmdb_id": 11653,
		"imdb_id": "tt0365847",
		"title": "Thần Thoại",
		"english_title": "The Myth",
		"backdrop_path": "/xChyWmjDeEH8zOVi9dwVrtIJEfd.jpg",
		"imdb": 6.1,
		"release_date": "2005-05-11",
		"runtime": 118,
		"genre_ids": [
			28,
			12,
			35,
			18,
			14
		],
		"hash": "C07F3F012F704F81CB544D4BBD9F782649367789",
		"updated": "2021-09-24T02:53:30.479436+00:00"
	},
	{
		"id": 1365,
		"tmdb_id": 518068,
		"imdb_id": "tt8116428",
		"title": "Thử Thách Thần Chết 2: 49 Ngày Cuối Cùng",
		"english_title": "Along with the Gods: The Last 49 Days",
		"backdrop_path": "/ov1ZGX5nMqSQQJMjabWtmkc7HsY.jpg",
		"imdb": 7.2,
		"release_date": "2018-08-01",
		"runtime": 141,
		"genre_ids": [
			18,
			14,
			28
		],
		"hash": "2E044E8C6F2224D2371A2C49F024E4F907323BB5",
		"updated": "2021-09-24T06:42:50.822+00:00"
	},
	{
		"id": 1367,
		"tmdb_id": 10294,
		"imdb_id": "tt0452702",
		"title": "Nhà Trọ Kinh Hoàng",
		"english_title": "Vacancy",
		"backdrop_path": "/iRqGlcADl8st5K9Dach8cLxM6Uv.jpg",
		"imdb": 6.2,
		"release_date": "2007-04-20",
		"runtime": 80,
		"genre_ids": [
			27,
			53
		],
		"hash": "3364BB341873C48C98D6C3722012AF9E910084DF",
		"updated": "2021-09-24T09:33:40.087885+00:00"
	},
	{
		"id": 1368,
		"tmdb_id": 257344,
		"imdb_id": "tt2120120",
		"title": "Đại Chiến Pixels",
		"english_title": "Pixels",
		"backdrop_path": "/b3OW7vOJsG15DlIiADMEvAaNlVI.jpg",
		"imdb": 5.5,
		"release_date": "2015-07-16",
		"runtime": 105,
		"genre_ids": [
			28,
			35,
			878
		],
		"hash": "D5A14DD9675E85750E60051FC86F0AB402E9443F",
		"updated": "2021-09-24T13:43:00.663745+00:00"
	},
	{
		"id": 1371,
		"tmdb_id": 5595,
		"imdb_id": "tt1016301",
		"title": "Căn Phòng Của Fermat",
		"english_title": "Fermat's Room",
		"backdrop_path": "/z64TVs3tKCRLyK2gn3cG56XK4kO.jpg",
		"imdb": 6.7,
		"release_date": "2007-10-07",
		"runtime": 88,
		"genre_ids": [
			9648,
			53
		],
		"hash": "C46F78AA670CAE944F427AD1E352478C720AC1E8",
		"updated": "2021-09-26T02:03:36.868265+00:00"
	},
	{
		"id": 1369,
		"tmdb_id": 40805,
		"imdb_id": "tt0990407",
		"title": "Chiến Binh Bí Ẩn",
		"english_title": "The Green Hornet",
		"backdrop_path": "/hqnyQf9sxzKVCvx94BztywHWCRH.jpg",
		"imdb": 5.8,
		"release_date": "2011-01-12",
		"runtime": 119,
		"genre_ids": [
			28,
			80,
			35
		],
		"hash": "256D4BAFAB04CE246877C7E14F8E2BAC5E226AE9",
		"updated": "2021-09-25T02:58:40.717+00:00"
	},
	{
		"id": 1370,
		"tmdb_id": 2253,
		"imdb_id": "tt0985699",
		"title": "Điệp Vụ Valkyrie",
		"english_title": "Valkyrie",
		"backdrop_path": "/xvsdjCZlytljlaVOffR5J8e2Zbx.jpg",
		"imdb": 7.1,
		"release_date": "2008-12-25",
		"runtime": 121,
		"genre_ids": [
			18,
			53,
			36,
			10752
		],
		"hash": "968A74E96752636CA336283EC9E42B8F5C26EA36",
		"updated": "2021-09-25T03:35:40.308317+00:00"
	},
	{
		"id": 1372,
		"tmdb_id": 451997,
		"imdb_id": "tt6777370",
		"title": "Cuộc Chiến Ngầm",
		"english_title": "The Merciless",
		"backdrop_path": "/c9BXD7dGiDvqct7qj8pxylNHdrJ.jpg",
		"imdb": 6.7,
		"release_date": "2017-05-17",
		"runtime": 120,
		"genre_ids": [
			28,
			80,
			9648
		],
		"hash": "274EC1CF5BB450F33531979A85B4C142314EFF7A",
		"updated": "2021-09-26T02:10:58.7+00:00"
	},
	{
		"id": 1373,
		"tmdb_id": 581526,
		"imdb_id": "tt12763920",
		"title": "Ác Quỷ Đối Đầu",
		"english_title": "Deliver Us from Evil",
		"backdrop_path": "/6gcOdUNqi9sjdfq5lRfgKz4frx7.jpg",
		"imdb": 6.8,
		"release_date": "2020-08-05",
		"runtime": 108,
		"genre_ids": [
			28
		],
		"hash": "C73F765B61642CA1DE3B865BC0DDAFB868BADD1F",
		"updated": "2021-09-26T02:14:05.509708+00:00"
	},
	{
		"id": 1361,
		"tmdb_id": 631843,
		"imdb_id": "tt10954652",
		"title": "Già",
		"english_title": "Old",
		"backdrop_path": "/zaX13F2m7taSiyHzS3fKEY3EvgI.jpg",
		"imdb": 5.8,
		"release_date": "2021-07-21",
		"runtime": 108,
		"genre_ids": [
			9648,
			53,
			27
		],
		"hash": "2F8C775CC4CA6F7213BE2CE5ABA5C85591C83B92",
		"updated": "2021-09-26T14:25:16.493+00:00"
	},
	{
		"id": 1374,
		"tmdb_id": 43347,
		"imdb_id": "tt0758752",
		"title": "Tình Yêu và Tình Dược",
		"english_title": "Love & Other Drugs",
		"backdrop_path": "/gQv9cYc8HiuA1rN7eaoge7JNbCQ.jpg",
		"imdb": 6.7,
		"release_date": "2010-11-22",
		"runtime": 112,
		"genre_ids": [
			18,
			35,
			10749
		],
		"hash": "87D861DE96B568466E939601EA2A69960724D8A3",
		"updated": "2021-09-26T02:18:03.305676+00:00"
	},
	{
		"id": 1375,
		"tmdb_id": 7445,
		"imdb_id": "tt0765010",
		"title": "Tình Anh Em",
		"english_title": "Brothers",
		"backdrop_path": "/3EEkcQFbtYrna4U2moofyRi6RDW.jpg",
		"imdb": 7.1,
		"release_date": "2009-01-22",
		"runtime": 105,
		"genre_ids": [
			18,
			53,
			10752
		],
		"hash": "D557F1DD4EF654FBCFB593E695BE8269706D3BB5",
		"updated": "2021-09-26T02:24:22.234+00:00"
	},
	{
		"id": 1376,
		"tmdb_id": 435,
		"imdb_id": "tt0319262",
		"title": "Ngày Không Xa",
		"english_title": "The Day After Tomorrow",
		"backdrop_path": "/bwFfcqbNJmYaPd8X4DqF9n4GYCL.jpg",
		"imdb": 6.4,
		"release_date": "2004-05-26",
		"runtime": 124,
		"genre_ids": [
			28,
			12,
			878,
			53
		],
		"hash": "A56399B1BEC19ED53EFF7530FFDDE21C2C7D923A",
		"updated": "2021-12-02T05:33:08.155+00:00"
	},
	{
		"id": 1377,
		"tmdb_id": 38365,
		"imdb_id": "tt1375670",
		"title": "Những Đứa Trẻ To Xác",
		"english_title": "Grown Ups",
		"backdrop_path": "/7dSjrpdcsRgrxXT5m9sdDUuBdoi.jpg",
		"imdb": 6,
		"release_date": "2010-06-24",
		"runtime": 102,
		"genre_ids": [
			35
		],
		"hash": "205D839BE899858E6A72C032A37CE2EB50783AB9",
		"updated": "2021-09-27T02:52:11.561027+00:00"
	},
	{
		"id": 1379,
		"tmdb_id": 9543,
		"imdb_id": "tt0473075",
		"title": "Hoàng Tử Ba Tư: Dòng Cát Thời Gian",
		"english_title": "Prince of Persia: The Sands of Time",
		"backdrop_path": "/fPeSkRrJWunjhu0bhCxht6Cst6i.jpg",
		"imdb": 6.6,
		"release_date": "2010-05-19",
		"runtime": 116,
		"genre_ids": [
			12,
			14,
			28
		],
		"hash": "6CBAD769743E3D5D9DA25A0A0E87E0F777FD23ED",
		"updated": "2021-09-27T02:58:25.466247+00:00"
	},
	{
		"id": 1366,
		"tmdb_id": 550988,
		"imdb_id": "tt6264654",
		"title": "Giải Cứu Guy",
		"english_title": "Free Guy",
		"backdrop_path": "/3MF0ADRkiNkhklmCo9o4zTT39Mj.jpg",
		"imdb": 7.4,
		"release_date": "2021-08-11",
		"runtime": 115,
		"genre_ids": [
			35,
			28,
			12,
			878
		],
		"hash": "7FD23FE2308AE558DCFDD687F3C94AE106AE835F",
		"updated": "2021-11-28T06:07:45.79+00:00"
	},
	{
		"id": 1381,
		"tmdb_id": 637,
		"imdb_id": "tt0118799",
		"title": "Cuộc Sống Tươi Đẹp",
		"english_title": "Life Is Beautiful",
		"backdrop_path": "/tbJlC4u4qgsjg54M062dCptqtfq.jpg",
		"imdb": 8.6,
		"release_date": "1997-12-20",
		"runtime": 116,
		"genre_ids": [
			35,
			18
		],
		"hash": "35E38EB6225EA407A6DA679A59FEC79ECCC8B941",
		"updated": "2021-09-27T03:07:43.934592+00:00"
	},
	{
		"id": 1380,
		"tmdb_id": 309809,
		"imdb_id": "tt1754656",
		"title": "Hoàng Tử Bé",
		"english_title": "The Little Prince",
		"backdrop_path": "/otGpf6uVDG5hvLVE65nXg3tw73i.jpg",
		"imdb": 7.7,
		"release_date": "2015-07-29",
		"runtime": 108,
		"genre_ids": [
			12,
			16,
			14,
			10751
		],
		"hash": "AA256E618F2AF7AB4E1441C1BC7A84A8FC91B219",
		"updated": "2021-09-27T03:24:12.137+00:00"
	},
	{
		"id": 1382,
		"tmdb_id": 614587,
		"imdb_id": "tt10621032",
		"title": "Lupin Đệ III: Lần Đầu",
		"english_title": "Lupin III: The First",
		"backdrop_path": "/iBpgcE03sG38noXuEqhmtwGdipB.jpg",
		"imdb": 6.9,
		"release_date": "2019-12-06",
		"runtime": 93,
		"genre_ids": [
			12,
			28,
			16
		],
		"hash": "9CF3A15B7568193CDA8C90D36A7C2CC8503F4E04",
		"updated": "2021-09-27T04:52:10.376+00:00"
	},
	{
		"id": 1383,
		"tmdb_id": 380,
		"imdb_id": "tt0095953",
		"title": "Người Đàn Ông Trong Mưa",
		"english_title": "Rain Man",
		"backdrop_path": "/iswiXoOpTUX0vu4re5SWDxbg6IY.jpg",
		"imdb": 8,
		"release_date": "1988-12-11",
		"runtime": 134,
		"genre_ids": [
			18
		],
		"hash": "CFBAA1B40A7A4F5AAC57B10BB8FDACADA197E111",
		"updated": "2021-09-28T01:53:28.396997+00:00"
	},
	{
		"id": 1384,
		"tmdb_id": 141,
		"imdb_id": "tt0246578",
		"title": "Giấc Mơ",
		"english_title": "Donnie Darko",
		"backdrop_path": "/muBpaBw5kcge2FzS9FQv2ETlAwN.jpg",
		"imdb": 8,
		"release_date": "2001-10-26",
		"runtime": 114,
		"genre_ids": [
			14,
			18,
			9648
		],
		"hash": "0655287C71B59323613F09E83E50D051DADAC2CF",
		"updated": "2021-09-28T01:57:36.608834+00:00"
	},
	{
		"id": 1385,
		"tmdb_id": 345,
		"imdb_id": "tt0120663",
		"title": "Mắt Nhắm Hờ",
		"english_title": "Eyes Wide Shut",
		"backdrop_path": "/eAuS9UpWi44tyI7PdOLrcgLpZuV.jpg",
		"imdb": 7.4,
		"release_date": "1999-07-16",
		"runtime": 159,
		"genre_ids": [
			18,
			53,
			9648
		],
		"hash": "CC8E69DC26150E40F1A8D8350980778ACDCCEC33",
		"updated": "2021-09-28T02:03:38.875505+00:00"
	},
	{
		"id": 1386,
		"tmdb_id": 348,
		"imdb_id": "tt0078748",
		"title": "Quái Vật Không Gian",
		"english_title": "Alien",
		"backdrop_path": "/x9PWK3YCxVjDCTtID9f49v50mDl.jpg",
		"imdb": 8.4,
		"release_date": "1979-05-25",
		"runtime": 117,
		"genre_ids": [
			27,
			878
		],
		"hash": "63DBB194903342CB1A674A56BB520F7F48366FA4",
		"updated": "2021-09-28T02:13:15.298276+00:00"
	},
	{
		"id": 1387,
		"tmdb_id": 679,
		"imdb_id": "tt0090605",
		"title": "Quái Vật Không Gian 2",
		"english_title": "Aliens",
		"backdrop_path": "/aR8xkfamFzqQDO3jpmKCS5mse58.jpg",
		"imdb": 8.3,
		"release_date": "1986-07-18",
		"runtime": 137,
		"genre_ids": [
			28,
			53,
			878
		],
		"hash": "25DA5C0B1D5DB01009716F31481D89F7419B06C9",
		"updated": "2021-09-28T02:16:47.297534+00:00"
	},
	{
		"id": 1388,
		"tmdb_id": 8077,
		"imdb_id": "tt0103644",
		"title": "Quái Vật Không Gian 3",
		"english_title": "Alien³",
		"backdrop_path": "/8ZL0QCaCFAcvuJY59jK9TseqWSD.jpg",
		"imdb": 6.5,
		"release_date": "1992-05-22",
		"runtime": 114,
		"genre_ids": [
			878,
			28,
			27
		],
		"hash": "456B7837120FF55C4AE3534A4CADA769AED4F937",
		"updated": "2021-09-28T02:19:01.077519+00:00"
	},
	{
		"id": 1389,
		"tmdb_id": 8078,
		"imdb_id": "tt0118583",
		"title": "Quái Vật Không Gian 4: Hồi Sinh",
		"english_title": "Alien Resurrection",
		"backdrop_path": "/f8XUY6srsxTabJ8h353izrqaKfs.jpg",
		"imdb": 6.2,
		"release_date": "1997-11-12",
		"runtime": 109,
		"genre_ids": [
			878,
			27,
			28
		],
		"hash": "A25190880A8B33365205EB9182306EAF869FF8E1",
		"updated": "2021-09-28T02:21:10.485452+00:00"
	},
	{
		"id": 1390,
		"tmdb_id": 615453,
		"imdb_id": "tt10627720",
		"title": "Na Tra: Ma Đồng Giáng Thế",
		"english_title": "Ne Zha",
		"backdrop_path": "/1jLC8GsZROA2ttzw4WhjyOVElfB.jpg",
		"imdb": 7.5,
		"release_date": "2019-07-26",
		"runtime": 110,
		"genre_ids": [
			16,
			14,
			12
		],
		"hash": "C39B8DCD7BCACB07C3A8BC3BBC9F4568AC1FB056",
		"updated": "2021-09-29T02:02:07.43177+00:00"
	},
	{
		"id": 1391,
		"tmdb_id": 313108,
		"imdb_id": "tt3812366",
		"title": "Lời Hứa Với Cha",
		"english_title": "Ode To My Father",
		"backdrop_path": "/wcMlVCKjTIT3g3fQNo5iXo586mk.jpg",
		"imdb": 7.9,
		"release_date": "2014-12-17",
		"runtime": 126,
		"genre_ids": [
			18
		],
		"hash": "2244C8ACC81F09F4C253ADE903F1A125BC065482",
		"updated": "2021-09-29T02:04:19.685397+00:00"
	},
	{
		"id": 1392,
		"tmdb_id": 1579,
		"imdb_id": "tt0472043",
		"title": "Đế Chế Maya",
		"english_title": "Apocalypto",
		"backdrop_path": "/nnmbJvYyDS1VkMOCbxSpdBi3WbJ.jpg",
		"imdb": 7.8,
		"release_date": "2006-12-07",
		"runtime": 139,
		"genre_ids": [
			28,
			12,
			18,
			53
		],
		"hash": "0C57DE2DEEF4D6E86058053A47EBB69224381E69",
		"updated": "2021-09-29T02:09:37.075099+00:00"
	},
	{
		"id": 1393,
		"tmdb_id": 7840,
		"imdb_id": "tt0443649",
		"title": "10.000 Năm Trước Công Nguyên",
		"english_title": "10,000 BC",
		"backdrop_path": "/1oFMH3f5HJ9AJVnqQuNSWvYAP6q.jpg",
		"imdb": 5.1,
		"release_date": "2008-02-22",
		"runtime": 109,
		"genre_ids": [
			12,
			28,
			18,
			14
		],
		"hash": "FEF00E97CA2D5056E4828B97DD652ADA80F13CB4",
		"updated": "2021-09-29T02:11:49.802544+00:00"
	},
	{
		"id": 1394,
		"tmdb_id": 2105,
		"imdb_id": "tt0163651",
		"title": "Bánh Mỹ",
		"english_title": "American Pie",
		"backdrop_path": "/jwGklnM0XLNb1zagwtWRgbM7xJI.jpg",
		"imdb": 7,
		"release_date": "1999-07-09",
		"runtime": 95,
		"genre_ids": [
			35,
			10749
		],
		"hash": "1A7944A0EEC2F9A0B3624D628C2B616B7143BFC4",
		"updated": "2021-09-29T02:23:01.983972+00:00"
	},
	{
		"id": 1395,
		"tmdb_id": 2770,
		"imdb_id": "tt0252866",
		"title": "Bánh Mỹ 2",
		"english_title": "American Pie 2",
		"backdrop_path": "/uUyWP7JHNGvsxXOaaDkilD6LITE.jpg",
		"imdb": 6.4,
		"release_date": "2001-08-10",
		"runtime": 108,
		"genre_ids": [
			35,
			10749
		],
		"hash": "143F952739240372FA0A4D7951271D8FD71CFE1F",
		"updated": "2021-09-29T02:27:38.944146+00:00"
	},
	{
		"id": 1396,
		"tmdb_id": 8273,
		"imdb_id": "tt0328828",
		"title": "Bánh Mỹ 3: Đám Cưới Kiểu Mỹ",
		"english_title": "American Wedding",
		"backdrop_path": "/soWBGR6sEtcoTeOPt7nAkmP3cu0.jpg",
		"imdb": 6.3,
		"release_date": "2003-08-01",
		"runtime": 103,
		"genre_ids": [
			35,
			10749
		],
		"hash": "5AA0296A3C8C59C005E72AC38A016E63066AFCE6",
		"updated": "2021-09-29T03:05:59.529+00:00"
	},
	{
		"id": 1398,
		"tmdb_id": 8274,
		"imdb_id": "tt0436058",
		"title": "Bánh Mỹ 4: Hội Trại Ban Nhạc",
		"english_title": "American Pie Presents: Band Camp",
		"backdrop_path": "/3nfrY5zKz7LFtjCSANlKZKfyRW2.jpg",
		"imdb": 5.1,
		"release_date": "2005-10-30",
		"runtime": 94,
		"genre_ids": [
			35
		],
		"hash": "4467EC75635F9488A36A5AF3EBBDFF0706BCC0B6",
		"updated": "2021-09-29T03:06:41.499+00:00"
	},
	{
		"id": 1399,
		"tmdb_id": 8275,
		"imdb_id": "tt0808146",
		"title": "Bánh Mỹ 5: Một Dặm Khỏa Thân",
		"english_title": "American Pie Presents: The Naked Mile",
		"backdrop_path": "/svl9CkKXH0vSO7JUiD5GuXMDKpO.jpg",
		"imdb": 5.2,
		"release_date": "2006-12-07",
		"runtime": 97,
		"genre_ids": [
			35
		],
		"hash": "6BFE1940865C76B6E6169BE69828F00BCECA2915",
		"updated": "2021-09-29T03:06:47.114+00:00"
	},
	{
		"id": 1400,
		"tmdb_id": 8277,
		"imdb_id": "tt0974959",
		"title": "Bánh Mỹ 6: Nhà Beta",
		"english_title": "American Pie Presents: Beta House",
		"backdrop_path": "/zRB4eDRpO6apQO8mdBW6dZLmdP.jpg",
		"imdb": 5.3,
		"release_date": "2007-12-10",
		"runtime": 85,
		"genre_ids": [
			35
		],
		"hash": "13E10702ACE9316B06CBC5647B3664E9962B2349",
		"updated": "2021-09-29T03:06:52.626+00:00"
	},
	{
		"id": 1401,
		"tmdb_id": 26123,
		"imdb_id": "tt1407050",
		"title": "Bánh Mỹ 7: Cuốn Sách Tình Yêu",
		"english_title": "American Pie Presents: The Book of Love",
		"backdrop_path": "/hqpkFWxBxdLW0eKDfBgZdrkgu9P.jpg",
		"imdb": 4.8,
		"release_date": "2009-06-18",
		"runtime": 93,
		"genre_ids": [
			35
		],
		"hash": "1D1C7874AE34A088110CBB446D95160A6760CEA8",
		"updated": "2021-09-29T03:06:58.28+00:00"
	},
	{
		"id": 1397,
		"tmdb_id": 71552,
		"imdb_id": "tt1605630",
		"title": "Bánh Mỹ 8: Sum Họp Kiểu Mỹ",
		"english_title": "American Reunion",
		"backdrop_path": "/8bVrMwYBAelHdjADUX833FWebNR.jpg",
		"imdb": 6.7,
		"release_date": "2012-04-04",
		"runtime": 113,
		"genre_ids": [
			35
		],
		"hash": "27BDB516799385AC29CABC88C2996CF92F16AFDB",
		"updated": "2021-09-29T03:07:05.209+00:00"
	},
	{
		"id": 1427,
		"tmdb_id": 567748,
		"imdb_id": "tt9421570",
		"title": "Tổng Đài Truy Vết",
		"english_title": "The Guilty",
		"backdrop_path": "/q9MtaxtoXrcq7WH7il2z2hGnw9c.jpg",
		"imdb": 6.3,
		"release_date": "2021-09-24",
		"runtime": 91,
		"genre_ids": [
			18,
			80,
			53
		],
		"hash": "fbea4e9ef02bf415bb996ff14cdfe405bb23ef41",
		"updated": "2021-10-04T02:06:21.422132+00:00"
	},
	{
		"id": 1402,
		"tmdb_id": 858,
		"imdb_id": "tt0108160",
		"title": "Không Ngủ Ở Seattle",
		"english_title": "Sleepless in Seattle",
		"backdrop_path": "/7zzowh58WPIQATRoBQDvvJL96Fw.jpg",
		"imdb": 6.8,
		"release_date": "1993-06-24",
		"runtime": 105,
		"genre_ids": [
			35,
			18,
			10749
		],
		"hash": "8560979D097C695E3C2D4A86035014131359F32D",
		"updated": "2021-10-01T08:24:15.33+00:00"
	},
	{
		"id": 1403,
		"tmdb_id": 273477,
		"imdb_id": "tt1727776",
		"title": "Chiến Chống Zombie của Hướng Đạo Sinh",
		"english_title": "Scouts Guide to the Zombie Apocalypse",
		"backdrop_path": "/ih8UGrLCobuxGtJr8WvkoqgRssB.jpg",
		"imdb": 6.3,
		"release_date": "2015-10-23",
		"runtime": 93,
		"genre_ids": [
			35,
			27
		],
		"hash": "73550B4E0B0224563C6E752C11B2522BC6170BA5",
		"updated": "2021-10-01T02:14:44.035103+00:00"
	},
	{
		"id": 1404,
		"tmdb_id": 664767,
		"imdb_id": "tt9580138",
		"title": "Huyền Thoại Rồng Đen: Scorpion Báo Thù",
		"english_title": "Mortal Kombat Legends: Scorpion's Revenge",
		"backdrop_path": "/dVxG0lTMqKMCzrtxNqHJgvrccXV.jpg",
		"imdb": 7.5,
		"release_date": "2020-04-12",
		"runtime": 80,
		"genre_ids": [
			16,
			28,
			14
		],
		"hash": "5B018BA0BD100C3E2560F11930DD69C20CD3EA7A",
		"updated": "2021-10-01T02:19:16.309956+00:00"
	},
	{
		"id": 1405,
		"tmdb_id": 841755,
		"imdb_id": "tt14901058",
		"title": "Huyền Thoại Rồng Đen: Cuộc Chiến Của Các Vương Quốc",
		"english_title": "Mortal Kombat Legends: Battle of the Realms",
		"backdrop_path": "/tsQl0vfO6YTBNPUeL5RwZtCQgGp.jpg",
		"imdb": 6.7,
		"release_date": "2021-08-30",
		"runtime": 80,
		"genre_ids": [
			16,
			28,
			14
		],
		"hash": "6F243F804DE09FF73161BD6057A39A00D569B65C",
		"updated": "2021-10-01T02:23:39.268439+00:00"
	},
	{
		"id": 1419,
		"tmdb_id": 57165,
		"imdb_id": "tt1646987",
		"title": "Sự Phẫn Nộ Của Các Vị Thần",
		"english_title": "Wrath of the Titans",
		"backdrop_path": "/wAKFtdd8SH35MGjytdm9GjXuu0j.jpg",
		"imdb": 5.7,
		"release_date": "2012-03-28",
		"runtime": 99,
		"genre_ids": [
			14,
			12
		],
		"hash": "C3B16429FBCC71D6BDD70E9AD0C372A5B0DD402E",
		"updated": "2021-10-03T01:28:57.019878+00:00"
	},
	{
		"id": 1420,
		"tmdb_id": 30497,
		"imdb_id": "tt0072271",
		"title": "Tử Thần Vùng Texas",
		"english_title": "The Texas Chain Saw Massacre",
		"backdrop_path": "/2L9YmS44N1OPJCtWEJdga4M1ykd.jpg",
		"imdb": 7.5,
		"release_date": "1974-10-01",
		"runtime": 83,
		"genre_ids": [
			27
		],
		"hash": "10D3CF7D2ECDFDD59A5F8B6A00AA0460C605296A",
		"updated": "2021-10-03T01:34:57.623978+00:00"
	},
	{
		"id": 1406,
		"tmdb_id": 62046,
		"imdb_id": "tt1541160",
		"title": "Vụ Cướp Kỳ Quái",
		"english_title": "Flypaper",
		"backdrop_path": "/vJd0a9wnf3TZn9UOuEEON9fcPQu.jpg",
		"imdb": 6.4,
		"release_date": "2011-08-19",
		"runtime": 87,
		"genre_ids": [
			9648,
			35,
			80
		],
		"hash": "4D83F29BBF179F2A1B0DD78334513A3527896F20",
		"updated": "2021-10-01T02:28:00.125+00:00"
	},
	{
		"id": 1407,
		"tmdb_id": 11344,
		"imdb_id": "tt0456912",
		"title": "Ngọt Đắng Cuộc Đời",
		"english_title": "A Bittersweet Life",
		"backdrop_path": "/v8e2GycSmhoUiwSjJvUba6sXAbJ.jpg",
		"imdb": 7.5,
		"release_date": "2005-03-31",
		"runtime": 120,
		"genre_ids": [
			28,
			18,
			80
		],
		"hash": "3FB6A3EF530D9843C3F16C8ED0A4C7A5062E5F9B",
		"updated": "2021-10-01T02:33:02.660873+00:00"
	},
	{
		"id": 1408,
		"tmdb_id": 10625,
		"imdb_id": "tt0377092",
		"title": "Những Cô Nàng Lắm Chiêu",
		"english_title": "Mean Girls",
		"backdrop_path": "/2exN7unIoD1N7I92xxLcD9LzjJm.jpg",
		"imdb": 7,
		"release_date": "2004-04-30",
		"runtime": 97,
		"genre_ids": [
			35
		],
		"hash": "7251A08D78F35796EA875969517E9F1213AC4656",
		"updated": "2021-10-01T02:36:49.819748+00:00"
	},
	{
		"id": 1409,
		"tmdb_id": 152584,
		"imdb_id": "tt2278871",
		"title": "Màu Xanh Nồng Ấm",
		"english_title": "Blue Is the Warmest Color",
		"backdrop_path": "/v6HYncBgrVeoECD4JRLiWg2q1y6.jpg",
		"imdb": 7.7,
		"release_date": "2013-10-09",
		"runtime": 180,
		"genre_ids": [
			10749,
			18
		],
		"hash": "974A462549EC6EA91CEDDDDCC51ABBF5813A703E",
		"updated": "2021-10-01T02:39:27.826482+00:00"
	},
	{
		"id": 1421,
		"tmdb_id": 948,
		"imdb_id": "tt0077651",
		"title": "Halloween",
		"english_title": "Halloween",
		"backdrop_path": "/yk7KCUZUCT9VqH6QwDR1QeZLRxb.jpg",
		"imdb": 7.7,
		"release_date": "1978-10-24",
		"runtime": 91,
		"genre_ids": [
			27,
			53
		],
		"hash": "726A0323DDBE39AA419804FED36F03E5ECFD3E5E",
		"updated": "2021-10-03T01:41:27.778227+00:00"
	},
	{
		"id": 1411,
		"tmdb_id": 319,
		"imdb_id": "tt0108399",
		"title": "Lãng Mạn và Tội Ác",
		"english_title": "True Romance",
		"backdrop_path": "/5f0B7cRa0oWAWPgCsLmIZ7gAGpC.jpg",
		"imdb": 7.9,
		"release_date": "1993-09-09",
		"runtime": 120,
		"genre_ids": [
			28,
			53,
			80,
			10749
		],
		"hash": "FE85D73FED85C1155EFBD663AC352786B6E4B623",
		"updated": "2021-10-01T08:21:27.124+00:00"
	},
	{
		"id": 1422,
		"tmdb_id": 424139,
		"imdb_id": "tt1502407",
		"title": "Sát Nhân Halloween",
		"english_title": "Halloween",
		"backdrop_path": "/hx8xDgq8mqREhuxj90XI64HFLvu.jpg",
		"imdb": 6.5,
		"release_date": "2018-10-18",
		"runtime": 106,
		"genre_ids": [
			27,
			53
		],
		"hash": "8E2081D1911569444F753CD804E195BAA939CBAB",
		"updated": "2021-10-03T01:43:45.964822+00:00"
	},
	{
		"id": 1412,
		"tmdb_id": 151960,
		"imdb_id": "tt1691917",
		"title": "Thế Giới Máy Bay",
		"english_title": "Planes",
		"backdrop_path": "/8f7R7AS1Ke8avd8Bwn8CRj6DOFB.jpg",
		"imdb": 5.7,
		"release_date": "2013-08-09",
		"runtime": 91,
		"genre_ids": [
			16,
			10751,
			12,
			35
		],
		"hash": "39C768263C2C6611DD4035E0146E811EFD6A12FE",
		"updated": "2021-10-02T02:26:56.114026+00:00"
	},
	{
		"id": 1413,
		"tmdb_id": 390734,
		"imdb_id": "tt5595168",
		"title": "Final Fantasy XV: Đội Vệ Binh Tinh Nhuệ",
		"english_title": "Kingsglaive: Final Fantasy XV",
		"backdrop_path": "/zFqFrOLYliC4NCN9rHZRS52wPzv.jpg",
		"imdb": 6.8,
		"release_date": "2016-07-09",
		"runtime": 115,
		"genre_ids": [
			16,
			878,
			28
		],
		"hash": "C84D2543F29A83616124B1A498B4F0D57AE01118",
		"updated": "2021-10-02T02:32:32.144419+00:00"
	},
	{
		"id": 1414,
		"tmdb_id": 16859,
		"imdb_id": "tt0097814",
		"title": "Dịch Vụ Giao Hàng Kiki",
		"english_title": "Kiki's Delivery Service",
		"backdrop_path": "/glifOgG7nCKWLGAwdjP0B1yDA5R.jpg",
		"imdb": 7.9,
		"release_date": "1989-07-29",
		"runtime": 103,
		"genre_ids": [
			16,
			10751,
			14,
			12
		],
		"hash": "F1038A793048C29EA825DB792DCC69F4AD323AD1",
		"updated": "2021-10-02T02:37:42.41665+00:00"
	},
	{
		"id": 1415,
		"tmdb_id": 10386,
		"imdb_id": "tt0129167",
		"title": "Robot Khổng Lồ",
		"english_title": "The Iron Giant",
		"backdrop_path": "/ibzX5Ho1gOyaAg5FmpzaKRuFkKt.jpg",
		"imdb": 8,
		"release_date": "1999-08-06",
		"runtime": 86,
		"genre_ids": [
			10751,
			16,
			12,
			878,
			35
		],
		"hash": "14E7DA00453739E74170A27D933E0D5907B7C8BA",
		"updated": "2021-10-02T02:43:51.922519+00:00"
	},
	{
		"id": 1416,
		"tmdb_id": 537915,
		"imdb_id": "tt4126476",
		"title": "Sau Khi Ta Gặp Nhau",
		"english_title": "After",
		"backdrop_path": "/cvZCK1rjrCj5auPReCHQDMSscMu.jpg",
		"imdb": 5.3,
		"release_date": "2019-04-11",
		"runtime": 106,
		"genre_ids": [
			10749,
			18
		],
		"hash": "8BD7409FB555F9FEDFCB7F447BCF1CB20555A591",
		"updated": "2021-10-03T01:20:58.070545+00:00"
	},
	{
		"id": 1417,
		"tmdb_id": 218836,
		"imdb_id": "tt2980706",
		"title": "Anh Hùng & Biển Lửa",
		"english_title": "Planes: Fire & Rescue",
		"backdrop_path": "/i11jQDtgIb9eJCj1Q4JOheeEXjy.jpg",
		"imdb": 6,
		"release_date": "2014-07-17",
		"runtime": 83,
		"genre_ids": [
			16,
			35,
			12,
			10751
		],
		"hash": "80C950E2CFAA54BBECDD7A9F8F4CACDDB1C48AC8",
		"updated": "2021-10-03T01:23:08.188275+00:00"
	},
	{
		"id": 1418,
		"tmdb_id": 18823,
		"imdb_id": "tt0800320",
		"title": "Cuộc Chiến Giữa Các Vị Thần",
		"english_title": "Clash of the Titans",
		"backdrop_path": "/eJrRchR09AqlZn0WbH7UfEAs108.jpg",
		"imdb": 5.8,
		"release_date": "2010-03-31",
		"runtime": 106,
		"genre_ids": [
			12,
			14,
			28
		],
		"hash": "4D973B2056CBFF6C8F62A968D0CA1184A8EE5C71",
		"updated": "2021-10-03T01:26:41.563326+00:00"
	},
	{
		"id": 1423,
		"tmdb_id": 377,
		"imdb_id": "tt0087800",
		"title": "Ác Mộng Phố Elm",
		"english_title": "A Nightmare on Elm Street",
		"backdrop_path": "/u9Izap5fRHGR0S9om2KSm9eGFYR.jpg",
		"imdb": 7.5,
		"release_date": "1984-11-14",
		"runtime": 91,
		"genre_ids": [
			27
		],
		"hash": "69A8705B6039565C5DABD65D1BCFBC0ADE622C8C",
		"updated": "2021-10-03T01:52:15.137+00:00"
	},
	{
		"id": 1424,
		"tmdb_id": 12096,
		"imdb_id": "tt0383216",
		"title": "Điệp Vụ Báo Hồng",
		"english_title": "The Pink Panther",
		"backdrop_path": "/hANsyq5MShrY6BwAOw5MRVlxzKQ.jpg",
		"imdb": 5.7,
		"release_date": "2006-02-10",
		"runtime": 93,
		"genre_ids": [
			35,
			10751,
			9648,
			80,
			12,
			28
		],
		"hash": "64E0E27D69ED7C47E6758C6638989B320DDDD51A",
		"updated": "2021-10-03T05:18:37.546895+00:00"
	},
	{
		"id": 1425,
		"tmdb_id": 15159,
		"imdb_id": "tt0838232",
		"title": "Điệp Vụ Báo Hồng 2",
		"english_title": "The Pink Panther 2",
		"backdrop_path": "/44itBCIEwVBoQ1XCyzXImSVJ7Zb.jpg",
		"imdb": 5.6,
		"release_date": "2009-02-06",
		"runtime": 92,
		"genre_ids": [
			35,
			9648
		],
		"hash": "730FB2D07CF571C42A22595172ACFE62283611F4",
		"updated": "2021-10-03T05:20:15.498732+00:00"
	},
	{
		"id": 1426,
		"tmdb_id": 567646,
		"imdb_id": "tt9541602",
		"title": "Nghề Siêu Khó",
		"english_title": "Extreme Job",
		"backdrop_path": "/hn7oqr6RVqr3u6dcGoPRPi4jj1m.jpg",
		"imdb": 7.1,
		"release_date": "2019-01-23",
		"runtime": 111,
		"genre_ids": [
			28,
			35,
			80
		],
		"hash": "D893C146D581E095836D4C47A9581DB5F28A331A",
		"updated": "2021-10-04T01:29:24.463468+00:00"
	},
	{
		"id": 1429,
		"tmdb_id": 611698,
		"imdb_id": "tt9685342",
		"title": "Ám Sát Tiểu Thuyết Gia",
		"english_title": "A Writer's Odyssey",
		"backdrop_path": "/tE0WnUqq5eYhHcD73BWSQpa6k5g.jpg",
		"imdb": 6.2,
		"release_date": "2021-02-12",
		"runtime": 130,
		"genre_ids": [
			18,
			28,
			14
		],
		"hash": "7DEC35DA88B44E0E299736B3319B019E4DFDDA6A",
		"updated": "2021-10-04T02:23:16.781618+00:00"
	},
	{
		"id": 1431,
		"tmdb_id": 795607,
		"imdb_id": "tt15000314",
		"title": "Bạch Xà 2: Thanh Xà Kiếp Khởi",
		"english_title": "White Snake II: The Tribulation of the Green Snake",
		"backdrop_path": "/xoTxAxzloyUvDK2DKhGb9iSyBRe.jpg",
		"imdb": 6.8,
		"release_date": "2021-07-23",
		"runtime": 131,
		"genre_ids": [
			16,
			14,
			28,
			12
		],
		"hash": "0784cbb6318b2f5d348a8608e08b614e6eb6df87",
		"updated": "2021-10-04T02:38:54.239+00:00"
	},
	{
		"id": 1433,
		"tmdb_id": 585,
		"imdb_id": "tt0198781",
		"title": "Tập Đoàn Quái Vật",
		"english_title": "Monsters, Inc.",
		"backdrop_path": "/k7luxfi58XsBB6kgqWxYRpfo7aj.jpg",
		"imdb": 8.1,
		"release_date": "2001-11-01",
		"runtime": 92,
		"genre_ids": [
			16,
			35,
			10751
		],
		"hash": "D67281864031E5012B056C32EBDC6F9E33C42A44",
		"updated": "2021-10-05T01:21:50.197+00:00"
	},
	{
		"id": 1434,
		"tmdb_id": 62211,
		"imdb_id": "tt1453405",
		"title": "Lò Đào Tạo Quái Vật",
		"english_title": "Monsters University",
		"backdrop_path": "/vumvjhBipZlCLF2rbscf647oi8P.jpg",
		"imdb": 7.2,
		"release_date": "2013-06-19",
		"runtime": 104,
		"genre_ids": [
			16,
			10751
		],
		"hash": "905A72182BBEB603F5C57E834522460434D28B94",
		"updated": "2021-10-05T01:25:27.728676+00:00"
	},
	{
		"id": 1435,
		"tmdb_id": 12106,
		"imdb_id": "tt0114214",
		"title": "Nhanh Hay Là Chết",
		"english_title": "The Quick and the Dead",
		"backdrop_path": "/rLs4yZWuDaHwcG23VUL3PPLE2mm.jpg",
		"imdb": 6.4,
		"release_date": "1995-02-09",
		"runtime": 107,
		"genre_ids": [
			37,
			28,
			53
		],
		"hash": "C1CC8EC7108F958534B0AA71CB678999C302B7DC",
		"updated": "2021-10-05T01:31:07.315875+00:00"
	},
	{
		"id": 1436,
		"tmdb_id": 4148,
		"imdb_id": "tt0959337",
		"title": "Khát Vọng Tình Yêu",
		"english_title": "Revolutionary Road",
		"backdrop_path": "/dLAsYCwjuJhTKuFihi9Gwa4d0UM.jpg",
		"imdb": 7.3,
		"release_date": "2008-12-19",
		"runtime": 119,
		"genre_ids": [
			18,
			10749
		],
		"hash": "9A6F8D28AEE203269B11289178E0534DCA2BB768",
		"updated": "2021-10-05T01:44:11.048574+00:00"
	},
	{
		"id": 1437,
		"tmdb_id": 449176,
		"imdb_id": "tt5164432",
		"title": "Thương mến, Simon",
		"english_title": "Love, Simon",
		"backdrop_path": "/ga63PaqIeQMsGqZkZVuU8zjkDp6.jpg",
		"imdb": 7.6,
		"release_date": "2018-02-16",
		"runtime": 110,
		"genre_ids": [
			35,
			18,
			10749
		],
		"hash": "5DCCDF393954B934632FC37F7EAE8C0C282D3EDA",
		"updated": "2021-10-05T04:49:28.789074+00:00"
	},
	{
		"id": 1440,
		"tmdb_id": 554972,
		"imdb_id": "tt9225192",
		"title": "Găng Tơ Tái Xuất",
		"english_title": "Unstoppable",
		"backdrop_path": "/T8U4N0BN77VgAzdKSvexna3btv.jpg",
		"imdb": 6.7,
		"release_date": "2018-11-22",
		"runtime": 115,
		"genre_ids": [
			80,
			28
		],
		"hash": "dda0514d6ab32a1ac606f785ee94ee97a6c6c457",
		"updated": "2021-10-06T01:39:17.703+00:00"
	},
	{
		"id": 1441,
		"tmdb_id": 508642,
		"imdb_id": "tt8119752",
		"title": "Gonjiam: Bệnh Viện Ma Ám",
		"english_title": "Gonjiam: Haunted Asylum",
		"backdrop_path": "/rbDhKoas4MuThWyO58LataGBSEY.jpg",
		"imdb": 6.3,
		"release_date": "2018-03-28",
		"runtime": 94,
		"genre_ids": [
			27,
			9648
		],
		"hash": "5BC6C71DB0486CAA911214D8C0C8F0CDEEC57416",
		"updated": "2021-10-06T01:44:53.64+00:00"
	},
	{
		"id": 1442,
		"tmdb_id": 720755,
		"imdb_id": "tt8980602",
		"title": "Thám Tử Nhí",
		"english_title": "The Kid Detective",
		"backdrop_path": "/yzGCsbXbkJUrm9vmE9cao3zEbLA.jpg",
		"imdb": 7,
		"release_date": "2020-10-16",
		"runtime": 99,
		"genre_ids": [
			35,
			18,
			9648
		],
		"hash": "623AF696181DEDBA4C0B79F4151C0678E47AF5E4",
		"updated": "2021-10-06T01:58:44.620411+00:00"
	},
	{
		"id": 1443,
		"tmdb_id": 652,
		"imdb_id": "tt0332452",
		"title": "Người Hùng Thành Troy",
		"english_title": "Troy",
		"backdrop_path": "/nL4YYTWtKkgKZVRDxoNfVpQi3Xy.jpg",
		"imdb": 7.3,
		"release_date": "2004-05-03",
		"runtime": 163,
		"genre_ids": [
			12,
			36,
			10752
		],
		"hash": "23ce8acb3ff9a19f666ce69d47ffeea3b690ddf5",
		"updated": "2021-10-06T11:11:26.422748+00:00"
	},
	{
		"id": 1444,
		"tmdb_id": 8982,
		"imdb_id": "tt0427954",
		"title": "Người Bảo Vệ",
		"english_title": "The Protector",
		"backdrop_path": "/fd0Tjk1TUC0idBcVsaBrvMj1ItJ.jpg",
		"imdb": 7.1,
		"release_date": "2005-08-11",
		"runtime": 111,
		"genre_ids": [
			28,
			80,
			18,
			53
		],
		"hash": "50A8536753B2568874D2F8867D33AD22D76AD2E7",
		"updated": "2021-10-07T01:04:28.991511+00:00"
	},
	{
		"id": 1445,
		"tmdb_id": 97051,
		"imdb_id": "tt1999995",
		"title": "Trò Chơi Chết Chóc",
		"english_title": "Would You Rather",
		"backdrop_path": "/f41eZ9eD0V8bYacXCheqgg4KZRL.jpg",
		"imdb": 5.7,
		"release_date": "2012-10-14",
		"runtime": 93,
		"genre_ids": [
			53,
			27
		],
		"hash": "EFEED8E80B0D412CFD2691290B6E36A760744D6E",
		"updated": "2021-10-07T10:26:46.312279+00:00"
	},
	{
		"id": 1447,
		"tmdb_id": 547565,
		"imdb_id": "tt9731534",
		"title": "Ngôi Nhà Về Đêm",
		"english_title": "The Night House",
		"backdrop_path": "/g7UllrDr9rZvnZT2T4L0IqM6W4w.jpg",
		"imdb": 6.8,
		"release_date": "2021-07-15",
		"runtime": 107,
		"genre_ids": [
			27,
			53
		],
		"hash": "8E2E8A79D1B45368BCB9BA9AE32DAFB750028C0B",
		"updated": "2021-10-07T14:23:14.003465+00:00"
	},
	{
		"id": 1446,
		"tmdb_id": 3049,
		"imdb_id": "tt0109040",
		"title": "Thám Tử Thú Cưng",
		"english_title": "Ace Ventura: Pet Detective",
		"backdrop_path": "/p9ICbzpbYKNNYfUD5j0fIZXBeFe.jpg",
		"imdb": 6.9,
		"release_date": "1994-02-04",
		"runtime": 86,
		"genre_ids": [
			35,
			12
		],
		"hash": "D3115C5473B1EC2B70CC926977844585440B9CAA",
		"updated": "2021-10-07T10:33:30.701+00:00"
	},
	{
		"id": 1428,
		"tmdb_id": 785752,
		"imdb_id": "tt5563324",
		"title": "Xâm Nhập",
		"english_title": "Intrusion",
		"backdrop_path": "/ygJfZoaq4oSDdSuOqMk5eopdgeT.jpg",
		"imdb": 5.2,
		"release_date": "2021-09-22",
		"runtime": 93,
		"genre_ids": [
			53
		],
		"hash": "D8BE07408C86A7C1E6E47050868643426EF633D7",
		"updated": "2021-10-08T03:24:05.257+00:00"
	},
	{
		"id": 1448,
		"tmdb_id": 267860,
		"imdb_id": "tt3300542",
		"title": "London Thất Thủ",
		"english_title": "London Has Fallen",
		"backdrop_path": "/hcpoFKD6WcaCNrgXzI0fSlCJxkX.jpg",
		"imdb": 5.9,
		"release_date": "2016-03-02",
		"runtime": 99,
		"genre_ids": [
			28,
			53
		],
		"hash": "632613270A1D1F66429CA070C9ED5CB980357471",
		"updated": "2021-10-09T01:11:45.118372+00:00"
	},
	{
		"id": 1449,
		"tmdb_id": 117263,
		"imdb_id": "tt2302755",
		"title": "Nhà Trắng Thất Thủ",
		"english_title": "Olympus Has Fallen",
		"backdrop_path": "/1uGunbWLjSa04kmdPLwKbU6Ytt8.jpg",
		"imdb": 6.5,
		"release_date": "2013-03-20",
		"runtime": 120,
		"genre_ids": [
			28,
			53
		],
		"hash": "930B9163908EB31583587DF7415C4ABC9CC890F3",
		"updated": "2021-10-09T01:14:43.905033+00:00"
	},
	{
		"id": 1450,
		"tmdb_id": 105,
		"imdb_id": "tt0088763",
		"title": "Trở Về Tương Lai",
		"english_title": "Back to the Future",
		"backdrop_path": "/4rPDCsbZBGD8l9rBflmJt42NleV.jpg",
		"imdb": 8.5,
		"release_date": "1985-07-03",
		"runtime": 116,
		"genre_ids": [
			12,
			35,
			878,
			10751
		],
		"hash": "FB94D1F636CF921A7CD37BA2FFBB3C7FFD680113",
		"updated": "2021-10-09T01:29:57.587951+00:00"
	},
	{
		"id": 1451,
		"tmdb_id": 165,
		"imdb_id": "tt0096874",
		"title": "Trở Về Tương Lai 2",
		"english_title": "Back to the Future Part II",
		"backdrop_path": "/vxEO9eFyjegddYwrs7U5IKpJePj.jpg",
		"imdb": 7.8,
		"release_date": "1989-11-22",
		"runtime": 108,
		"genre_ids": [
			12,
			35,
			10751,
			878
		],
		"hash": "46047FF2077DE5C9A3ECBC8F3D1776150F87A203",
		"updated": "2021-10-09T01:38:42.176507+00:00"
	},
	{
		"id": 1452,
		"tmdb_id": 196,
		"imdb_id": "tt0099088",
		"title": "Trở Về Tương Lai 3",
		"english_title": "Back to the Future Part III",
		"backdrop_path": "/4pRcuEazHjS9uwGUEOoK7xHKCsB.jpg",
		"imdb": 7.4,
		"release_date": "1990-05-25",
		"runtime": 119,
		"genre_ids": [
			12,
			35,
			878
		],
		"hash": "1B3C0A0203DC252B4C551BC2B8584EE7603B4EDE",
		"updated": "2021-10-09T01:41:38.758346+00:00"
	},
	{
		"id": 1453,
		"tmdb_id": 50542,
		"imdb_id": "tt1554523",
		"title": "Chuyện Tình Cây Táo Gai",
		"english_title": "Under the Hawthorn Tree",
		"backdrop_path": "/hulaJrQbyYfxoNA4jfKgtVBPEsb.jpg",
		"imdb": 7.1,
		"release_date": "2010-09-15",
		"runtime": 113,
		"genre_ids": [
			18,
			10749
		],
		"hash": "a3ead9725adc62c4f38b47139af0c1534fb74b12",
		"updated": "2021-10-09T02:20:09.986+00:00"
	},
	{
		"id": 1454,
		"tmdb_id": 3638,
		"imdb_id": "tt0481141",
		"title": "Không Đặt Trước",
		"english_title": "No Reservations",
		"backdrop_path": "/fXZwnlHyHppL85Viwhip0Z7qRuz.jpg",
		"imdb": 6.3,
		"release_date": "2007-06-15",
		"runtime": 104,
		"genre_ids": [
			35,
			10749,
			18
		],
		"hash": "48EBA11037ED2330EB654C0118E0E2C5FFB3A349",
		"updated": "2021-10-09T06:06:26.496+00:00"
	},
	{
		"id": 1456,
		"tmdb_id": 257,
		"imdb_id": "tt0380599",
		"title": "Cậu Bé Mồ Côi",
		"english_title": "Oliver Twist",
		"backdrop_path": "/nOC6HLvmDVFcJ9dqiEHIQgvZ3y2.jpg",
		"imdb": 6.8,
		"release_date": "2005-09-23",
		"runtime": 130,
		"genre_ids": [
			80,
			18,
			10751
		],
		"hash": "978CA8E5851CC794FAFDE8AE3EC26DF45EB74AC4",
		"updated": "2021-10-10T00:35:25.886243+00:00"
	},
	{
		"id": 1457,
		"tmdb_id": 92321,
		"imdb_id": "tt2061702",
		"title": "Lạc Vào Khu Rừng Đom Đóm",
		"english_title": "To the Forest of Firefly Lights",
		"backdrop_path": "/hAHF7nzJHUKwrhyl3nB5ckSLHuc.jpg",
		"imdb": 7.9,
		"release_date": "2011-09-17",
		"runtime": 45,
		"genre_ids": [
			10749,
			16,
			14
		],
		"hash": "512D820061CA397C6017A7E9EBF3EBDEA726E1E5",
		"updated": "2021-10-10T00:41:40.014601+00:00"
	},
	{
		"id": 1473,
		"tmdb_id": 334543,
		"imdb_id": "tt3741834",
		"title": "Tìm Mẹ",
		"english_title": "Lion",
		"backdrop_path": "/4ylxU3OnEItUEoI7B8TbmzQ9va8.jpg",
		"imdb": 8,
		"release_date": "2016-01-20",
		"runtime": 118,
		"genre_ids": [
			18
		],
		"hash": "13EEF7CB88D39489AF91E7062F5FC6D52DC54D36",
		"updated": "2021-10-14T03:58:22.058383+00:00"
	},
	{
		"id": 1459,
		"tmdb_id": 51876,
		"imdb_id": "tt1219289",
		"title": "Trí Lực Siêu Phàm",
		"english_title": "Limitless",
		"backdrop_path": "/vQGo5VjJcHxpzIa8lMBFzpAth1w.jpg",
		"imdb": 7.4,
		"release_date": "2011-03-08",
		"runtime": 105,
		"genre_ids": [
			53,
			9648,
			878
		],
		"hash": "9B637C7763A5320F401586C86C530997F591C117",
		"updated": "2021-10-10T15:02:19.562+00:00"
	},
	{
		"id": 1460,
		"tmdb_id": 8656,
		"imdb_id": "tt0120647",
		"title": "Thảm Họa Hủy Diệt",
		"english_title": "Deep Impact",
		"backdrop_path": "/W5MC7M3ixXavzT8yC4xy07WLJO.jpg",
		"imdb": 6.2,
		"release_date": "1998-05-08",
		"runtime": 120,
		"genre_ids": [
			28,
			18,
			878
		],
		"hash": "D5BFBA611320AD115E9DC3F9B245F88FC1176BA1",
		"updated": "2021-10-11T01:15:34.934405+00:00"
	},
	{
		"id": 1461,
		"tmdb_id": 82,
		"imdb_id": "tt0430357",
		"title": "Chuyên án Miami",
		"english_title": "Miami Vice",
		"backdrop_path": "/4zR3ezQHE4idiJzgIiEJABVbS6p.jpg",
		"imdb": 6,
		"release_date": "2006-07-27",
		"runtime": 132,
		"genre_ids": [
			28,
			80,
			53
		],
		"hash": "5483CCCCF055BD81698B8D6E5F6D226CFD6751D9",
		"updated": "2021-10-11T01:20:35.679182+00:00"
	},
	{
		"id": 1462,
		"tmdb_id": 1538,
		"imdb_id": "tt0369339",
		"title": "Sát Thủ Giết Thuê",
		"english_title": "Collateral",
		"backdrop_path": "/pzos5cRwFo2IUuN4Pz14PG8VmyT.jpg",
		"imdb": 7.5,
		"release_date": "2004-08-04",
		"runtime": 120,
		"genre_ids": [
			18,
			80,
			53
		],
		"hash": "1626EC90D234C515106D833DB0F1660E43CDF7B5",
		"updated": "2021-10-11T01:28:28.388837+00:00"
	},
	{
		"id": 1463,
		"tmdb_id": 6075,
		"imdb_id": "tt0106519",
		"title": "Con Đường Tội Lỗi Của Carlito",
		"english_title": "Carlito's Way",
		"backdrop_path": "/cc8FuANpl42F4H9MpDs2e4XA8Qt.jpg",
		"imdb": 7.9,
		"release_date": "1993-11-10",
		"runtime": 144,
		"genre_ids": [
			80,
			53
		],
		"hash": "E784E9D61DE4FF2C78C9319831E545799904E286",
		"updated": "2021-10-12T01:22:31.667336+00:00"
	},
	{
		"id": 1464,
		"tmdb_id": 500,
		"imdb_id": "tt0105236",
		"title": "Những Kẻ Phản Bội",
		"english_title": "Reservoir Dogs",
		"backdrop_path": "/x9BaMt5XXu5EwMXZdVVivdQ6Y1K.jpg",
		"imdb": 8.3,
		"release_date": "1992-09-02",
		"runtime": 99,
		"genre_ids": [
			80,
			53
		],
		"hash": "3AC7749C54E6273CE187E842B20C4E710E3DCB24",
		"updated": "2021-10-12T01:27:40.130503+00:00"
	},
	{
		"id": 1465,
		"tmdb_id": 4232,
		"imdb_id": "tt0117571",
		"title": "Tiếng Thét",
		"english_title": "Scream",
		"backdrop_path": "/qhWq6FviYLVNeO8l4ZT1BzdDb2t.jpg",
		"imdb": 7.3,
		"release_date": "1996-12-20",
		"runtime": 112,
		"genre_ids": [
			80,
			27,
			9648
		],
		"hash": "F17E8CDF5BED026E7EF08CCCB111C0CA7AC67B88",
		"updated": "2021-10-12T01:30:09.652398+00:00"
	},
	{
		"id": 1466,
		"tmdb_id": 4233,
		"imdb_id": "tt0120082",
		"title": "Tiếng Thét 2",
		"english_title": "Scream 2",
		"backdrop_path": "/83DLsYzmXvzMFMxOzbdw2ChuDH8.jpg",
		"imdb": 6.2,
		"release_date": "1997-12-09",
		"runtime": 120,
		"genre_ids": [
			27,
			9648
		],
		"hash": "A97A50C6D9D8921A8C2F6B01FC8F15743518D473",
		"updated": "2021-10-12T01:34:02.208178+00:00"
	},
	{
		"id": 1474,
		"tmdb_id": 924,
		"imdb_id": "tt0363547",
		"title": "Bình Minh Tử Thần",
		"english_title": "Dawn of the Dead",
		"backdrop_path": "/eEfhUZfRyXJjFf6Rs5hp0GlI7wR.jpg",
		"imdb": 7.3,
		"release_date": "2004-03-19",
		"runtime": 101,
		"genre_ids": [
			28,
			27
		],
		"hash": "AE98062A2C9528578324B8D5E5CAA13ED532856D",
		"updated": "2021-10-14T04:07:45.38+00:00"
	},
	{
		"id": 1467,
		"tmdb_id": 4234,
		"imdb_id": "tt0134084",
		"title": "Tiếng Thét 3",
		"english_title": "Scream 3",
		"backdrop_path": "/wC299Wtt0k15CYvvSj37gIjKxar.jpg",
		"imdb": 5.6,
		"release_date": "2000-02-03",
		"runtime": 116,
		"genre_ids": [
			27,
			9648
		],
		"hash": "58117956923525DE261BEC879F6B22FA23D789FD",
		"updated": "2021-10-12T01:42:26.379+00:00"
	},
	{
		"id": 1468,
		"tmdb_id": 41446,
		"imdb_id": "tt1262416",
		"title": "Tiếng Thét 4",
		"english_title": "Scream 4",
		"backdrop_path": "/sjkapcnTaoDxcP923EspiYJTj5m.jpg",
		"imdb": 6.1,
		"release_date": "2011-04-11",
		"runtime": 111,
		"genre_ids": [
			27,
			9648
		],
		"hash": "52F92D8B7BF5141CEF2843DBBF69B34A0C0FF65D",
		"updated": "2021-10-12T01:50:10.189457+00:00"
	},
	{
		"id": 1470,
		"tmdb_id": 524216,
		"imdb_id": "tt7781432",
		"title": "Chuyện Kinh Dị Trong Nhà Xác",
		"english_title": "The Mortuary Collection",
		"backdrop_path": "/z581He48tB0GKYRRlHy27Myk9m9.jpg",
		"imdb": 6.4,
		"release_date": "2019-09-21",
		"runtime": 108,
		"genre_ids": [
			14,
			27
		],
		"hash": "4B80BDAAD148A3A0E248E4FB31432D4C1075F6C9",
		"updated": "2021-10-12T02:37:10.412631+00:00"
	},
	{
		"id": 1471,
		"tmdb_id": 639557,
		"imdb_id": "tt11448076",
		"title": "Nhiệm Vụ Bí Mật",
		"english_title": "Cliff Walkers",
		"backdrop_path": "/4xeI1T9nkQ2mwb6o2FwkZIIuhIg.jpg",
		"imdb": 6.9,
		"release_date": "2021-04-30",
		"runtime": 120,
		"genre_ids": [
			18,
			36,
			53,
			80
		],
		"hash": "F0F9E647A77F181626968271EFE6D7DDB294842C",
		"updated": "2021-10-12T02:55:14.37+00:00"
	},
	{
		"id": 1475,
		"tmdb_id": 740925,
		"imdb_id": "tt13056008",
		"title": "Ác Mộng Không Lối Thoát",
		"english_title": "No One Gets Out Alive",
		"backdrop_path": "/8LEfcrj12A0XuhOqGTBKfgtNhLo.jpg",
		"imdb": 5.3,
		"release_date": "2021-09-29",
		"runtime": 85,
		"genre_ids": [
			27,
			53,
			9648
		],
		"hash": "5585C8D8DA808B6E76D21E682FF433DF96A17245",
		"updated": "2021-10-14T04:16:55.346006+00:00"
	},
	{
		"id": 1476,
		"tmdb_id": 810,
		"imdb_id": "tt0413267",
		"title": "Gã Chằn Tinh Tốt Bụng 3",
		"english_title": "Shrek the Third",
		"backdrop_path": "/btoz1ZogtYY4oL7Qc9E4A2GMhv.jpg",
		"imdb": 6.1,
		"release_date": "2007-05-17",
		"runtime": 93,
		"genre_ids": [
			14,
			12,
			16,
			35,
			10751
		],
		"hash": "C7DAAA6C7926DF5F410CD20BD33FDACE9E389F92",
		"updated": "2021-10-14T06:27:11.620293+00:00"
	},
	{
		"id": 1477,
		"tmdb_id": 10192,
		"imdb_id": "tt0892791",
		"title": "Gã Chằn Tinh Tốt Bụng 4: Cuộc Phiêu Lưu Cuối Cùng",
		"english_title": "Shrek Forever After",
		"backdrop_path": "/6SOTgqVw53ZoOpHEZ7T457c4Ixz.jpg",
		"imdb": 6.3,
		"release_date": "2010-05-16",
		"runtime": 93,
		"genre_ids": [
			35,
			12,
			14,
			16,
			10751
		],
		"hash": "ABE1CA7C42D9435D47D747C50D99DA723E196D97",
		"updated": "2021-10-14T06:31:30.510976+00:00"
	},
	{
		"id": 1478,
		"tmdb_id": 10066,
		"imdb_id": "tt0397065",
		"title": "Ngôi Nhà Sáp",
		"english_title": "House of Wax",
		"backdrop_path": "/fQLjjOsKjSaE176ccbECKNLxqsS.jpg",
		"imdb": 5.4,
		"release_date": "2005-04-30",
		"runtime": 113,
		"genre_ids": [
			27,
			18
		],
		"hash": "6775C0D6455B722AE4E79AE91593B6304298450C",
		"updated": "2021-10-15T01:42:58.107551+00:00"
	},
	{
		"id": 1479,
		"tmdb_id": 514847,
		"imdb_id": "tt8244784",
		"title": "Cuộc Săn Lùng",
		"english_title": "The Hunt",
		"backdrop_path": "/b0bl4uQT7QNIVVZHOr8BJRp6tEQ.jpg",
		"imdb": 6.5,
		"release_date": "2020-03-11",
		"runtime": 90,
		"genre_ids": [
			28,
			53,
			27
		],
		"hash": "B8EBA9CFA551FCEBC07A460CBD92925F5F2DC15A",
		"updated": "2021-10-15T10:46:26.704198+00:00"
	},
	{
		"id": 1480,
		"tmdb_id": 341006,
		"imdb_id": "tt1082807",
		"title": "Trò Chết Chóc",
		"english_title": "The Belko Experiment",
		"backdrop_path": "/iTmT7Xzjeiypugreu9XvqKHkgUF.jpg",
		"imdb": 6.1,
		"release_date": "2016-03-17",
		"runtime": 89,
		"genre_ids": [
			27,
			28,
			53
		],
		"hash": "CEBF9BC1F06B6316B3F563E04FB1A5064EA6DF3E",
		"updated": "2021-10-15T10:51:19.525+00:00"
	},
	{
		"id": 1481,
		"tmdb_id": 865,
		"imdb_id": "tt0093894",
		"title": "Trốn Chạy Tử Thần",
		"english_title": "The Running Man",
		"backdrop_path": "/mmACpEFSs3aKNiaTBOnUJnS8XMh.jpg",
		"imdb": 6.7,
		"release_date": "1987-11-13",
		"runtime": 101,
		"genre_ids": [
			878,
			28,
			53
		],
		"hash": "D112C6B9EB74858804583923CE8D38C02E2A6BE9",
		"updated": "2021-10-15T10:54:51.854536+00:00"
	},
	{
		"id": 1472,
		"tmdb_id": 831405,
		"imdb_id": "tt5012504",
		"title": "Injustice",
		"english_title": "Injustice",
		"backdrop_path": "/ptWEtciGkuavzcrEb22RBbIL59c.jpg",
		"imdb": 6.3,
		"release_date": "2021-10-09",
		"runtime": 78,
		"genre_ids": [
			16,
			878,
			14,
			28
		],
		"hash": "9057E9E49A7F4855B067DA1BFA01EF938709E4DA",
		"updated": "2021-10-25T04:26:13.004+00:00"
	},
	{
		"id": 1482,
		"tmdb_id": 3176,
		"imdb_id": "tt0266308",
		"title": "Cuộc Chiến Sống Còn",
		"english_title": "Battle Royale",
		"backdrop_path": "/amBvmIshdsSkOtvVIgxl7YSQ9Dg.jpg",
		"imdb": 7.6,
		"release_date": "2000-12-16",
		"runtime": 123,
		"genre_ids": [
			18,
			53,
			28
		],
		"hash": "bf9bd187b18bf55f12a67395c62b50c206f91e0f",
		"updated": "2021-10-15T11:06:05.719512+00:00"
	},
	{
		"id": 1483,
		"tmdb_id": 37135,
		"imdb_id": "tt0120855",
		"title": "Cậu Bé Rừng Xanh 1999",
		"english_title": "Tarzan",
		"backdrop_path": "/h4qHvnGOmlFH82cWEIhhLExPj7N.jpg",
		"imdb": 7.3,
		"release_date": "1999-06-18",
		"runtime": 88,
		"genre_ids": [
			10751,
			12,
			16,
			18
		],
		"hash": "EBEE7B21F5372DE4923C56BAE36FF1E745529EC5",
		"updated": "2021-10-16T01:45:42.729997+00:00"
	},
	{
		"id": 1484,
		"tmdb_id": 300673,
		"imdb_id": "tt2025690",
		"title": "Giờ Lành",
		"english_title": "The Finest Hours",
		"backdrop_path": "/zHYCh0yTK9iUHeTZTd00gN1FPE.jpg",
		"imdb": 6.8,
		"release_date": "2016-01-25",
		"runtime": 117,
		"genre_ids": [
			28,
			18,
			36,
			53
		],
		"hash": "C302525F4534CB8863834FA53DE81CBEAAE8833C",
		"updated": "2021-10-16T01:48:18.537575+00:00"
	},
	{
		"id": 1485,
		"tmdb_id": 68728,
		"imdb_id": "tt1623205",
		"title": "Lạc Vào Xứ Oz Vĩ Đại và Quyền Năng",
		"english_title": "Oz the Great and Powerful",
		"backdrop_path": "/66ttAn3scJDrqAf4jNf75pdAF0r.jpg",
		"imdb": 6.3,
		"release_date": "2013-03-07",
		"runtime": 130,
		"genre_ids": [
			14,
			12,
			10751
		],
		"hash": "17C031536487885030D3FC658136F8D97634E26E",
		"updated": "2021-10-16T01:52:07.059042+00:00"
	},
	{
		"id": 1486,
		"tmdb_id": 637534,
		"imdb_id": "tt10404944",
		"title": "Thành Trì",
		"english_title": "The Stronghold",
		"backdrop_path": "/nO4WTaZv9gM86pUZHQPcLy4JRQk.jpg",
		"imdb": 6.9,
		"release_date": "2021-08-18",
		"runtime": 105,
		"genre_ids": [
			80,
			53
		],
		"hash": "117B70638156872C181422C03724A668C24EDFBA",
		"updated": "2021-10-16T06:27:12.221+00:00"
	},
	{
		"id": 1487,
		"tmdb_id": 2252,
		"imdb_id": "tt0765443",
		"title": "Hứa Hẹn Từ Châu Âu",
		"english_title": "Eastern Promises",
		"backdrop_path": "/5uiFvLcqwEG3RyhHz0HP7VWUu0C.jpg",
		"imdb": 7.6,
		"release_date": "2007-09-14",
		"runtime": 100,
		"genre_ids": [
			53,
			80,
			9648
		],
		"hash": "1315F997C98C4A5A3D2DC0B08A40E921C69EA920",
		"updated": "2021-10-17T02:54:25.751301+00:00"
	},
	{
		"id": 1488,
		"tmdb_id": 9366,
		"imdb_id": "tt0119008",
		"title": "Kẻ Nằm Vùng",
		"english_title": "Donnie Brasco",
		"backdrop_path": "/9BZqbUGdm5ltC3r9h9JoScLT1Jt.jpg",
		"imdb": 7.7,
		"release_date": "1997-02-27",
		"runtime": 127,
		"genre_ids": [
			80,
			18,
			53
		],
		"hash": "9B15687B515F5DBB17312A8D6DEE6EC003D371D8",
		"updated": "2021-10-17T02:56:15.51+00:00"
	},
	{
		"id": 1489,
		"tmdb_id": 610253,
		"imdb_id": "tt10665338",
		"title": "Sát Nhân Halloween",
		"english_title": "Halloween Kills",
		"backdrop_path": "/v1g47X1SAXTNgtvdkOW6wWuDyMY.jpg",
		"imdb": 6.3,
		"release_date": "2021-10-14",
		"runtime": 106,
		"genre_ids": [
			27,
			53
		],
		"hash": "089DA6C5A0713B69291185500301018872CA8F57",
		"updated": "2021-10-17T13:26:42.800887+00:00"
	},
	{
		"id": 1490,
		"tmdb_id": 105864,
		"imdb_id": "tt1979388",
		"title": "Chú Khủng Long Tốt Bụng",
		"english_title": "The Good Dinosaur",
		"backdrop_path": "/4ZDdzgqdWDb5IvdS7W4fU0om7Ys.jpg",
		"imdb": 6.7,
		"release_date": "2015-11-14",
		"runtime": 93,
		"genre_ids": [
			12,
			16,
			10751
		],
		"hash": "1F6BF1BDA08EC966D39279A30D0A0C325706B69E",
		"updated": "2021-10-18T02:24:02.385376+00:00"
	},
	{
		"id": 1491,
		"tmdb_id": 408647,
		"imdb_id": "tt6315800",
		"title": "Teen Titans: Thỏa Thuận Judas",
		"english_title": "Teen Titans: The Judas Contract",
		"backdrop_path": "/wwZoSk2u26UPYOMyLfQXJSZUiJ1.jpg",
		"imdb": 7,
		"release_date": "2017-03-31",
		"runtime": 84,
		"genre_ids": [
			878,
			16,
			28
		],
		"hash": "F039A12165298490F10C4EC9505D792D6BEFD85B",
		"updated": "2021-10-18T02:26:01.685463+00:00"
	},
	{
		"id": 1492,
		"tmdb_id": 487242,
		"imdb_id": "tt7167602",
		"title": "Biệt Đội Cảm Tử: Cuộc Thanh Toán Địa Ngục",
		"english_title": "Suicide Squad: Hell to Pay",
		"backdrop_path": "/hMZjSdiDpFenRfkCY86GdwHsXVz.jpg",
		"imdb": 7,
		"release_date": "2018-05-09",
		"runtime": 86,
		"genre_ids": [
			878,
			28,
			16
		],
		"hash": "A041B63F5C67D1BCF6C704950FC6D3D987500A80",
		"updated": "2021-10-18T02:28:44.451595+00:00"
	},
	{
		"id": 1493,
		"tmdb_id": 8587,
		"imdb_id": "tt0110357",
		"title": "Vua Sư Tử (1994)",
		"english_title": "The Lion King",
		"backdrop_path": "/pRGhpZMMEnUoLBfPRwjXnRFmSNK.jpg",
		"imdb": 8.5,
		"release_date": "1994-06-23",
		"runtime": 89,
		"genre_ids": [
			10751,
			16,
			18
		],
		"hash": "BB52D50D798D8B55994538CB73D9AE3CB22C943E",
		"updated": "2021-10-18T02:32:11.005934+00:00"
	},
	{
		"id": 1494,
		"tmdb_id": 9732,
		"imdb_id": "tt0120131",
		"title": "Vua Sư Tử 2: Niềm Kiêu Hãnh Của Simba",
		"english_title": "The Lion King II: Simba's Pride",
		"backdrop_path": "/vPY1DtF0hJ6Spxf9l9enegDux72.jpg",
		"imdb": 6.5,
		"release_date": "1998-10-24",
		"runtime": 81,
		"genre_ids": [
			10751,
			12,
			16
		],
		"hash": "1295FE180D708FB45F6E70CE21576A8CC099B4D6",
		"updated": "2021-10-18T02:58:58.1092+00:00"
	},
	{
		"id": 1495,
		"tmdb_id": 11430,
		"imdb_id": "tt0318403",
		"title": "Vua Sư Tử 3",
		"english_title": "The Lion King 1½",
		"backdrop_path": "/pTvIDmVIQw2AoT2cBWbEHXulW45.jpg",
		"imdb": 6.5,
		"release_date": "2004-02-06",
		"runtime": 77,
		"genre_ids": [
			10751,
			16,
			35
		],
		"hash": "E54916D6F9EA762EF8F6FF9FBC209E660EC47CFB",
		"updated": "2021-10-18T03:01:16.240798+00:00"
	},
	{
		"id": 1504,
		"tmdb_id": 669671,
		"imdb_id": "tt10763820",
		"title": "Nanh Sắc Trong Đêm",
		"english_title": "Night Teeth",
		"backdrop_path": "/mzulkJNDNasq6KyoNm03uaJVZSL.jpg",
		"imdb": 5.3,
		"release_date": "2021-10-20",
		"runtime": 107,
		"genre_ids": [
			53,
			28,
			14
		],
		"hash": "620C515E82224E635AF26FB4298F7D076CDF26DC",
		"updated": "2021-10-21T01:43:22.229482+00:00"
	},
	{
		"id": 1498,
		"tmdb_id": 74465,
		"imdb_id": "tt1389137",
		"title": "Vườn Bách Thú",
		"english_title": "We Bought a Zoo",
		"backdrop_path": "/g90n5FVxxzpKe7kELgpnXa3TRwI.jpg",
		"imdb": 7.1,
		"release_date": "2011-12-08",
		"runtime": 124,
		"genre_ids": [
			18,
			35,
			10751
		],
		"hash": "542125916246DA1F895C60E2DBBB135B053FFE44",
		"updated": "2021-10-19T01:09:05.97+00:00"
	},
	{
		"id": 1499,
		"tmdb_id": 953,
		"imdb_id": "tt0351283",
		"title": "Madagascar",
		"english_title": "Madagascar",
		"backdrop_path": "/2WLZi8563nJGSF8O3ay6cUT7L6e.jpg",
		"imdb": 6.9,
		"release_date": "2005-05-25",
		"runtime": 86,
		"genre_ids": [
			10751,
			16,
			12,
			35
		],
		"hash": "89AB1E505050AFCDABEF986E8BA259926C9CA4B0",
		"updated": "2021-10-19T02:13:49.404833+00:00"
	},
	{
		"id": 1500,
		"tmdb_id": 10527,
		"imdb_id": "tt0479952",
		"title": "Madagascar 2: Tẩu Thoát Đến Châu Phi",
		"english_title": "Madagascar: Escape 2 Africa",
		"backdrop_path": "/hOEgr77rasVe8NAgf2RvgtelmD9.jpg",
		"imdb": 6.6,
		"release_date": "2008-10-30",
		"runtime": 89,
		"genre_ids": [
			10751,
			12,
			16,
			35
		],
		"hash": "9758E8902A6868ECBD653808C8F1EEBCABC4FC45",
		"updated": "2021-10-19T02:14:43.053974+00:00"
	},
	{
		"id": 1501,
		"tmdb_id": 80321,
		"imdb_id": "tt1277953",
		"title": "Madagascar 3: Thần Tượng Châu Âu",
		"english_title": "Madagascar 3: Europe's Most Wanted",
		"backdrop_path": "/dN2euH7H9XXHeieeExRwpVtf7KB.jpg",
		"imdb": 6.8,
		"release_date": "2012-06-06",
		"runtime": 93,
		"genre_ids": [
			16,
			10751,
			35,
			12
		],
		"hash": "52645363E690C8FBF96FED51D85808BECFE0B81A",
		"updated": "2021-10-19T02:15:30.089948+00:00"
	},
	{
		"id": 1502,
		"tmdb_id": 785663,
		"imdb_id": "tt12731980",
		"title": "Lão Henry",
		"english_title": "Old Henry",
		"backdrop_path": "/6Jx7dM7HSdnkeChcvbaRCYYkMuK.jpg",
		"imdb": 7.2,
		"release_date": "2021-10-01",
		"runtime": 99,
		"genre_ids": [
			37,
			53
		],
		"hash": "BC88F4D06A066CCA4802EE4C517D5290F2CAEF88",
		"updated": "2021-10-20T02:29:59.398624+00:00"
	},
	{
		"id": 1503,
		"tmdb_id": 774021,
		"imdb_id": "tt13392012",
		"title": "Oan Hồn",
		"english_title": "Demonic",
		"backdrop_path": "/hhbkrgYgh4UoUkvBdYS9Q3JIT7U.jpg",
		"imdb": 4.2,
		"release_date": "2021-07-29",
		"runtime": 104,
		"genre_ids": [
			27,
			53
		],
		"hash": "D9A44899DF2EB193DB8B3FFE07D893AB65010760",
		"updated": "2021-10-20T02:42:31.784899+00:00"
	},
	{
		"id": 1505,
		"tmdb_id": 36647,
		"imdb_id": "tt0120611",
		"title": "Săn Quỷ",
		"english_title": "Blade",
		"backdrop_path": "/lPBMFxFnam736GBreSQb4Z5IZxP.jpg",
		"imdb": 7.1,
		"release_date": "1998-08-21",
		"runtime": 120,
		"genre_ids": [
			27,
			28
		],
		"hash": "77867B64F1F614764871694D9FDD1BB3D071CF3F",
		"updated": "2021-10-21T01:48:33.436515+00:00"
	},
	{
		"id": 1506,
		"tmdb_id": 36586,
		"imdb_id": "tt0187738",
		"title": "Săn Quỷ 2",
		"english_title": "Blade II",
		"backdrop_path": "/llQusb9csWB1JeSHqzXWcd35XW1.jpg",
		"imdb": 6.7,
		"release_date": "2002-03-22",
		"runtime": 117,
		"genre_ids": [
			14,
			27,
			28,
			53
		],
		"hash": "3B501B15A5AB6EC52FF01B9721C4101CFC74823A",
		"updated": "2021-10-21T01:53:32.943167+00:00"
	},
	{
		"id": 1507,
		"tmdb_id": 36648,
		"imdb_id": "tt0359013",
		"title": "Săn Quỷ 3",
		"english_title": "Blade: Trinity",
		"backdrop_path": "/wOdl2B0pGemh6VDq1ZTCEI3qsFs.jpg",
		"imdb": 5.8,
		"release_date": "2004-12-08",
		"runtime": 123,
		"genre_ids": [
			28,
			27,
			14
		],
		"hash": "3C1D63B033FC7E03137E758D6D1D86ADE1A6BAA6",
		"updated": "2021-10-21T01:57:05.564809+00:00"
	},
	{
		"id": 1508,
		"tmdb_id": 85,
		"imdb_id": "tt0082971",
		"title": "Indiana Jones và Chiếc Rương Thánh Tích",
		"english_title": "Indiana Jones: Raiders of the Lost Ark",
		"backdrop_path": "/klNR7FUpYPepTUcIKNp9WhyiczJ.jpg",
		"imdb": 8.4,
		"release_date": "1981-06-12",
		"runtime": 115,
		"genre_ids": [
			12,
			28
		],
		"hash": "00D76F58439FA2FC9889C95D98E05930A7C036A0",
		"updated": "2021-10-21T02:05:50.285+00:00"
	},
	{
		"id": 1509,
		"tmdb_id": 87,
		"imdb_id": "tt0087469",
		"title": "Indiana Jones và Ngôi Đền Của Sự Diệt Vong",
		"english_title": "Indiana Jones and the Temple of Doom",
		"backdrop_path": "/3KKslB5bg3vEhUXfunTdMlGJNn2.jpg",
		"imdb": 7.5,
		"release_date": "1984-05-23",
		"runtime": 118,
		"genre_ids": [
			12,
			28
		],
		"hash": "360742B73AC610669E6D7DC79391AE6CB1157FD6",
		"updated": "2021-10-21T02:07:41.920418+00:00"
	},
	{
		"id": 1510,
		"tmdb_id": 89,
		"imdb_id": "tt0097576",
		"title": "Indiana Jones và Cuộc Thập Tự Chinh Cuối Cùng",
		"english_title": "Indiana Jones and the Last Crusade",
		"backdrop_path": "/1OUVwKHt9OtBvJcoSZvDy5nOcYT.jpg",
		"imdb": 8.2,
		"release_date": "1989-05-24",
		"runtime": 127,
		"genre_ids": [
			12,
			28
		],
		"hash": "5C0E49252229C96840AC65A533BC4C5A6DAFFA6D",
		"updated": "2021-10-21T02:10:14.395423+00:00"
	},
	{
		"id": 1511,
		"tmdb_id": 217,
		"imdb_id": "tt0367882",
		"title": "Indiana Jones và Vương Quốc Sọ Người",
		"english_title": "Indiana Jones and the Kingdom of the Crystal Skull",
		"backdrop_path": "/yo32d3mDrqgwbm3F9jDurFWGliX.jpg",
		"imdb": 6.1,
		"release_date": "2008-05-21",
		"runtime": 122,
		"genre_ids": [
			12,
			28
		],
		"hash": "35CD4979FBC4BEB2EA06B6E3267C3BA2DD4A3FFF",
		"updated": "2021-10-21T02:13:07.837511+00:00"
	},
	{
		"id": 1512,
		"tmdb_id": 9820,
		"imdb_id": "tt0120783",
		"title": "Bẫy Phụ Huynh",
		"english_title": "The Parent Trap",
		"backdrop_path": "/9fA8GGRzTWs7m83SPeLzyJw074a.jpg",
		"imdb": 6.6,
		"release_date": "1998-07-28",
		"runtime": 128,
		"genre_ids": [
			35,
			10751
		],
		"hash": "95CB915837252C1E9362563FFB6D78DECD0644B9",
		"updated": "2021-10-21T02:16:48.073021+00:00"
	},
	{
		"id": 1513,
		"tmdb_id": 11544,
		"imdb_id": "tt0275847",
		"title": "Lilo và Stitch",
		"english_title": "Lilo & Stitch",
		"backdrop_path": "/gZzvgUq48rdpR1nURZdgJGMxCxR.jpg",
		"imdb": 7.3,
		"release_date": "2002-06-21",
		"runtime": 85,
		"genre_ids": [
			16,
			10751
		],
		"hash": "38C6EB9057D552AE05859186AF195E775C2253E9",
		"updated": "2021-10-21T02:21:34.994125+00:00"
	},
	{
		"id": 1514,
		"tmdb_id": 20760,
		"imdb_id": "tt0457993",
		"title": "Lilo Và Stitch 2: Phép Màu Yêu Thương",
		"english_title": "Lilo & Stitch 2: Stitch Has a Glitch",
		"backdrop_path": "/qTu1ADpp21S8iSrbpf43iMObILr.jpg",
		"imdb": 6.3,
		"release_date": "2005-01-22",
		"runtime": 68,
		"genre_ids": [
			16,
			10751,
			35,
			878
		],
		"hash": "FAE11AEED450514264D1714AED315AAF97BA6A6E",
		"updated": "2021-10-21T02:23:57.680219+00:00"
	},
	{
		"id": 1516,
		"tmdb_id": 16307,
		"imdb_id": "tt0070917",
		"title": "Hình Nhân Liễu Gai",
		"english_title": "The Wicker Man",
		"backdrop_path": "/actEgAPKXCZDCC8bSFor0d54IPk.jpg",
		"imdb": 7.5,
		"release_date": "1973-12-01",
		"runtime": 94,
		"genre_ids": [
			27
		],
		"hash": "6B9A4F157115CE497A1406B80091380BE6924E38",
		"updated": "2021-10-21T02:31:58.027816+00:00"
	},
	{
		"id": 1517,
		"tmdb_id": 881,
		"imdb_id": "tt0104257",
		"title": "Chỉ Vài Người Tốt",
		"english_title": "A Few Good Men",
		"backdrop_path": "/p1HUYD55KvyI7X1P2JtkFpnDUs7.jpg",
		"imdb": 7.7,
		"release_date": "1992-12-11",
		"runtime": 138,
		"genre_ids": [
			18
		],
		"hash": "BE604042FBCFDCA2DA4A639B5602BA375C19B588",
		"updated": "2021-10-21T02:34:45.558925+00:00"
	},
	{
		"id": 1518,
		"tmdb_id": 301365,
		"imdb_id": "tt1974419",
		"title": "Ác Quỷ Sàn Catwalk",
		"english_title": "The Neon Demon",
		"backdrop_path": "/z86absJaBCV5Es9bVWm2hkJliKh.jpg",
		"imdb": 6.2,
		"release_date": "2016-06-08",
		"runtime": 118,
		"genre_ids": [
			53,
			27
		],
		"hash": "E4AF43BD45F048457A1B95A7963999393581A8B4",
		"updated": "2021-10-21T02:37:37.386801+00:00"
	},
	{
		"id": 1515,
		"tmdb_id": 376570,
		"imdb_id": "tt5022702",
		"title": "Sự Im Lặng Chết Người",
		"english_title": "Hush",
		"backdrop_path": "/5CF3VZ91jJkHryy5d0bXgITbJ1F.jpg",
		"imdb": 6.6,
		"release_date": "2016-03-12",
		"runtime": 82,
		"genre_ids": [
			27,
			53
		],
		"hash": "345622502CE5F19771DF31A64718033A52C3A432",
		"updated": "2021-10-21T02:38:30.761+00:00"
	},
	{
		"id": 1519,
		"tmdb_id": 753453,
		"imdb_id": "tt14867006",
		"title": "V/H/S/94",
		"english_title": "V/H/S/94",
		"backdrop_path": "/qIxAagBgxyojIsKjLaSDkT3BDvk.jpg",
		"imdb": 5.5,
		"release_date": "2021-09-26",
		"runtime": 102,
		"genre_ids": [
			27,
			53
		],
		"hash": "38D3D91F80D892A69DCE0DC962F28A171271942C",
		"updated": "2021-10-22T00:03:04.481245+00:00"
	},
	{
		"id": 1496,
		"tmdb_id": 438631,
		"imdb_id": "tt1160419",
		"title": "Dune: Hành Tinh Cát",
		"english_title": "Dune",
		"backdrop_path": "/x6E7DS5ZcMoCITjkO0RiLLQ9Nb0.jpg",
		"imdb": 8.3,
		"release_date": "2021-09-15",
		"runtime": 155,
		"genre_ids": [
			28,
			12,
			18,
			878
		],
		"hash": "ED0DA850C273E3E15A819BDCBBF418BC85107EC8",
		"updated": "2021-10-22T02:37:10.554+00:00"
	},
	{
		"id": 1520,
		"tmdb_id": 4032,
		"imdb_id": "tt0102492",
		"title": "Cô Gái Của Tôi",
		"english_title": "My Girl",
		"backdrop_path": "/sckGI8ajjGEDWWKvKsS78NPNS9X.jpg",
		"imdb": 6.9,
		"release_date": "1991-11-27",
		"runtime": 103,
		"genre_ids": [
			35,
			18
		],
		"hash": "81AD68D4000E34E65EFE8EE0B03D4C0CC6F60FA8",
		"updated": "2021-10-23T02:39:34.282+00:00"
	},
	{
		"id": 1521,
		"tmdb_id": 6477,
		"imdb_id": "tt0952640",
		"title": "Sóc Siêu Quậy - Alvin and the Chipmunks",
		"english_title": "Alvin and the Chipmunks",
		"backdrop_path": "/ijhQ1jYtkO8um8zShKVYDTsJFEE.jpg",
		"imdb": 5.2,
		"release_date": "2007-12-13",
		"runtime": 92,
		"genre_ids": [
			35,
			10751,
			14,
			16
		],
		"hash": "9E3869C0D2D8A396047E07CED392978F299FF76A",
		"updated": "2021-10-23T02:42:43.047158+00:00"
	},
	{
		"id": 1522,
		"tmdb_id": 23398,
		"imdb_id": "tt1231580",
		"title": "Sóc Siêu Quậy 2",
		"english_title": "Alvin and the Chipmunks: The Squeakquel",
		"backdrop_path": "/eFspuHLlDdttBxmqV6YW9XmYxEf.jpg",
		"imdb": 4.5,
		"release_date": "2009-12-21",
		"runtime": 88,
		"genre_ids": [
			35,
			10751,
			16,
			14,
			10402
		],
		"hash": "21A2AC33F6C664BEC4FB0890ED4E02960879FE9A",
		"updated": "2021-10-23T02:53:19.667+00:00"
	},
	{
		"id": 1523,
		"tmdb_id": 55301,
		"imdb_id": "tt1615918",
		"title": "Sóc Siêu Quậy 3: Trên Đảo Hoang",
		"english_title": "Alvin and the Chipmunks: Chipwrecked",
		"backdrop_path": "/aVd2nrdJJipZNwoX7lWbweNvc8v.jpg",
		"imdb": 4.3,
		"release_date": "2011-12-14",
		"runtime": 87,
		"genre_ids": [
			35,
			14,
			10751,
			10402,
			16
		],
		"hash": "3c8db7066f2d57ebe843a828da5d38db1856508a",
		"updated": "2021-10-23T02:54:35.125+00:00"
	},
	{
		"id": 1524,
		"tmdb_id": 258509,
		"imdb_id": "tt2974918",
		"title": "Alvin and the Chipmunks: Sóc chuột du hí",
		"english_title": "Alvin and the Chipmunks: The Road Chip",
		"backdrop_path": "/lQhl0X4QgHNqPPVWKTn76LKQVnb.jpg",
		"imdb": 5,
		"release_date": "2015-12-17",
		"runtime": 92,
		"genre_ids": [
			12,
			16,
			35,
			10751
		],
		"hash": "C9BBAD93A518D737ABE2DF933E9BA353E69690D0",
		"updated": "2021-10-23T02:55:19.924+00:00"
	},
	{
		"id": 1525,
		"tmdb_id": 744275,
		"imdb_id": "tt13069986",
		"title": "Từ Khi Chúng Ta Tan Vỡ",
		"english_title": "After We Fell",
		"backdrop_path": "/vETDSkW4KakNzRS8lbW57kgs9Rq.jpg",
		"imdb": 5,
		"release_date": "2021-09-01",
		"runtime": 108,
		"genre_ids": [
			10749,
			18
		],
		"hash": "36781D72DC079D9AF4306D087F6B8B5E02E12AD1",
		"updated": "2021-10-23T12:24:56.697368+00:00"
	},
	{
		"id": 1526,
		"tmdb_id": 844,
		"imdb_id": "tt0212712",
		"title": "Căn Phòng 2046",
		"english_title": "2046",
		"backdrop_path": "/x4eqrTWjtfK7ASRpy8RrRSd3P6k.jpg",
		"imdb": 7.4,
		"release_date": "2004-09-29",
		"runtime": 128,
		"genre_ids": [
			14,
			18,
			878,
			10749
		],
		"hash": "29E8BE2274B0CD5FBEDD2FBD69B25C4BC2F808F2",
		"updated": "2021-10-25T00:50:37.020859+00:00"
	},
	{
		"id": 1527,
		"tmdb_id": 18311,
		"imdb_id": "tt0101258",
		"title": "A Phi Chính Truyện",
		"english_title": "Days of Being Wild",
		"backdrop_path": "/2Ep1Ws1n7MZJR7M2KQ3EJHjRIbA.jpg",
		"imdb": 7.5,
		"release_date": "1990-12-15",
		"runtime": 94,
		"genre_ids": [
			80,
			18,
			10749
		],
		"hash": "B167E705E78E307DE1D6B4124205862099E76C4A",
		"updated": "2021-10-25T00:52:56.518433+00:00"
	},
	{
		"id": 1528,
		"tmdb_id": 44048,
		"imdb_id": "tt0477080",
		"title": "Hiểm Nguy Di Động",
		"english_title": "Unstoppable",
		"backdrop_path": "/w4aRD18oTD2u2CRbYdIJYYVkHAJ.jpg",
		"imdb": 6.8,
		"release_date": "2010-11-04",
		"runtime": 98,
		"genre_ids": [
			28,
			53
		],
		"hash": "77786111C000A5D45FFBCB5E272F00C5300394B8",
		"updated": "2021-10-25T00:56:03.072+00:00"
	},
	{
		"id": 1529,
		"tmdb_id": 491926,
		"imdb_id": "tt6914122",
		"title": "Kháng Chiến",
		"english_title": "Resistance",
		"backdrop_path": "/ueh6EKh1Vvdh8096vIk6e3JZcuB.jpg",
		"imdb": 6.4,
		"release_date": "2020-03-27",
		"runtime": 120,
		"genre_ids": [
			10752,
			36,
			18
		],
		"hash": "5403E27334C33B79A0345970840146C3E9BF63CB",
		"updated": "2021-10-25T01:44:30.881359+00:00"
	},
	{
		"id": 1530,
		"tmdb_id": 625568,
		"imdb_id": "tt10059518",
		"title": "Kẻ Cuồng Sát",
		"english_title": "Unhinged",
		"backdrop_path": "/5YNA7Mu4XfeKCOOYN1squT28uaf.jpg",
		"imdb": 6,
		"release_date": "2020-07-16",
		"runtime": 90,
		"genre_ids": [
			28,
			53
		],
		"hash": "8CE95C617C8F1B811601F8A5A21141113873D0C3",
		"updated": "2021-10-25T02:14:23.562245+00:00"
	},
	{
		"id": 1469,
		"tmdb_id": 860623,
		"imdb_id": "tt12335692",
		"title": "Kẻ Báo Thù Cuối Cùng",
		"english_title": "Last Man Down",
		"backdrop_path": "/9TXtxDC3LBKoQnqgTNFtUeEO6TS.jpg",
		"imdb": 4.8,
		"release_date": "2021-10-19",
		"runtime": 87,
		"genre_ids": [
			28,
			53
		],
		"hash": "442743B56B31E4B0645B867563F7AC1518CA30E0",
		"updated": "2021-10-25T04:26:36.809+00:00"
	},
	{
		"id": 1531,
		"tmdb_id": 9740,
		"imdb_id": "tt0212985",
		"title": "Kẻ Ăn Thịt Người",
		"english_title": "Hannibal",
		"backdrop_path": "/uMHtsquHKV55RivOOW6mEdYge0i.jpg",
		"imdb": 6.8,
		"release_date": "2001-02-08",
		"runtime": 131,
		"genre_ids": [
			80,
			18,
			53,
			27
		],
		"hash": "EA222DE74D31C2CDF97A425E80CE1582A0488E32",
		"updated": "2021-10-26T03:30:24.292929+00:00"
	},
	{
		"id": 1532,
		"tmdb_id": 9533,
		"imdb_id": "tt0289765",
		"title": "Rồng Đỏ",
		"english_title": "Red Dragon",
		"backdrop_path": "/dw76XEunnUM2bPzGdkZjOA2pSNo.jpg",
		"imdb": 7.2,
		"release_date": "2002-09-29",
		"runtime": 124,
		"genre_ids": [
			80,
			53,
			9648,
			27
		],
		"hash": "B6EE18BFD6229D3F62FEFC1FA271799D8DF906FE",
		"updated": "2021-10-26T03:33:34.102516+00:00"
	},
	{
		"id": 1542,
		"tmdb_id": 864873,
		"imdb_id": "tt12383460",
		"title": "Thôi Miên",
		"english_title": "Hypnotic",
		"backdrop_path": "/1m75w8S0owjxmtNCTzEMYWopPnv.jpg",
		"imdb": 5.2,
		"release_date": "2021-10-27",
		"runtime": 88,
		"genre_ids": [
			53,
			18
		],
		"hash": "E86E7B679ED7BB22452AB66BCC3AB89F9CD63A62",
		"updated": "2021-10-29T04:03:17.077+00:00"
	},
	{
		"id": 1533,
		"tmdb_id": 696822,
		"imdb_id": "tt9772374",
		"title": "Địa Ngục Đẫm Máu",
		"english_title": "Bloody Hell",
		"backdrop_path": "/bn41poiU4CbSAmkcDuTGfzB2fcT.jpg",
		"imdb": 6.6,
		"release_date": "2020-09-09",
		"runtime": 94,
		"genre_ids": [
			27,
			35
		],
		"hash": "75BEF644BCCB74D3B777CC0A0C1E65F9DB21218F",
		"updated": "2021-10-26T04:05:23.09+00:00"
	},
	{
		"id": 1534,
		"tmdb_id": 399404,
		"imdb_id": "tt4555426",
		"title": "Thời Khắc Đen Tối",
		"english_title": "Darkest Hour",
		"backdrop_path": "/qCp5JBZxrnBwCjMdxOOwP1kh13m.jpg",
		"imdb": 7.4,
		"release_date": "2017-11-22",
		"runtime": 125,
		"genre_ids": [
			18,
			36
		],
		"hash": "3896234FB73CE4CBC17459BEAE65B7882103F6B2",
		"updated": "2021-10-26T04:19:39.058323+00:00"
	},
	{
		"id": 1535,
		"tmdb_id": 9602,
		"imdb_id": "tt0094898",
		"title": "Tìm Vợ Phương Xa",
		"english_title": "Coming to America",
		"backdrop_path": "/8YbLd57HS7QoECb9uFNQepTae7x.jpg",
		"imdb": 7.1,
		"release_date": "1988-06-29",
		"runtime": 117,
		"genre_ids": [
			35,
			10749
		],
		"hash": "753E70937B2DB2CFD07F570029D6AD4C45D7847E",
		"updated": "2021-10-26T04:21:44.511111+00:00"
	},
	{
		"id": 1536,
		"tmdb_id": 9645,
		"imdb_id": "tt0288477",
		"title": "Con Tàu Ma",
		"english_title": "Ghost Ship",
		"backdrop_path": "/71rJEBS9ZLGeqyhlk7QeOeUM6R1.jpg",
		"imdb": 5.5,
		"release_date": "2002-10-25",
		"runtime": 91,
		"genre_ids": [
			27,
			9648,
			53
		],
		"hash": "A523B015079095B3A5274EFA72D87FA583A18274",
		"updated": "2021-10-27T02:59:54.449703+00:00"
	},
	{
		"id": 1537,
		"tmdb_id": 11852,
		"imdb_id": "tt0302640",
		"title": "Sự Hoán Đổi Kỳ Diệu",
		"english_title": "The Hot Chick",
		"backdrop_path": "/oIMlVWZRxRK1XcOMqAA9HAMEP9R.jpg",
		"imdb": 5.5,
		"release_date": "2002-12-13",
		"runtime": 104,
		"genre_ids": [
			35,
			14
		],
		"hash": "C30785BF3BFDF459B0B8F66263A2520B3B2846FE",
		"updated": "2021-10-28T04:00:37.66+00:00"
	},
	{
		"id": 1538,
		"tmdb_id": 11362,
		"imdb_id": "tt0245844",
		"title": "Bá tước Monte Cristo",
		"english_title": "The Count of Monte Cristo",
		"backdrop_path": "/1LJ3ET1MXKCWJxXpbrxfPaH0R0w.jpg",
		"imdb": 7.7,
		"release_date": "2002-01-23",
		"runtime": 131,
		"genre_ids": [
			12
		],
		"hash": "C9F76BC1C80A78A93FB2DE416692273D436C70A7",
		"updated": "2021-10-28T04:03:25.2496+00:00"
	},
	{
		"id": 1541,
		"tmdb_id": 760747,
		"imdb_id": "tt13109952",
		"title": "Cặp Đôi Sát Ý",
		"english_title": "The Trip",
		"backdrop_path": "/y1WpGHdu5upQbuU2WqC2RsArZel.jpg",
		"imdb": 6.9,
		"release_date": "2021-07-30",
		"runtime": 113,
		"genre_ids": [
			28,
			35,
			53,
			27
		],
		"hash": "D1EC5B228C8BE375BDD112767BE7FD07142057E6",
		"updated": "2021-10-29T04:03:21.945+00:00"
	},
	{
		"id": 1539,
		"tmdb_id": 508747,
		"imdb_id": "tt8033592",
		"title": "Chúng Ta Của Sau Này",
		"english_title": "Us and Them",
		"backdrop_path": "/zSBL9MEjtzPgaTTTEhMNSSAUFs1.jpg",
		"imdb": 7.4,
		"release_date": "2018-04-28",
		"runtime": 120,
		"genre_ids": [
			10749,
			18
		],
		"hash": "56030411DB72E38CB9E4EEEC7A732230DF34C8C5",
		"updated": "2021-10-28T04:23:19.448+00:00"
	},
	{
		"id": 1540,
		"tmdb_id": 6615,
		"imdb_id": "tt0805564",
		"title": "Người Tình Trong Mộng",
		"english_title": "Lars and the Real Girl",
		"backdrop_path": "/jI3yYyIxwdDoMEJ23s87mFI5W7Y.jpg",
		"imdb": 7.3,
		"release_date": "2007-10-12",
		"runtime": 106,
		"genre_ids": [
			35,
			18,
			10749
		],
		"hash": "9E9447C175204D7E30629A9BF4245B9081A34B4A",
		"updated": "2021-10-28T04:36:56.266803+00:00"
	},
	{
		"id": 1548,
		"tmdb_id": 19908,
		"imdb_id": "tt1156398",
		"title": "Vùng Đất Thây Ma",
		"english_title": "Zombieland",
		"backdrop_path": "/4kxPyhgeUkEZCxwr5kT7jcT7679.jpg",
		"imdb": 7.6,
		"release_date": "2009-10-07",
		"runtime": 88,
		"genre_ids": [
			35,
			27
		],
		"hash": "41fbe902413f84bfbe3e0c0b9d711a5bff5341fc",
		"updated": "2021-10-30T01:22:15.980929+00:00"
	},
	{
		"id": 1543,
		"tmdb_id": 9297,
		"imdb_id": "tt0385880",
		"title": "Ngôi Nhà Ma Quái",
		"english_title": "Monster House",
		"backdrop_path": "/ysiOFhfeSQgE7GWTfniB87Mh3a4.jpg",
		"imdb": 6.6,
		"release_date": "2006-06-30",
		"runtime": 91,
		"genre_ids": [
			16,
			35,
			10751,
			14
		],
		"hash": "AC1EB564E4E253C2EA34AEE12373A9059A204DC3",
		"updated": "2021-10-29T00:48:44.562801+00:00"
	},
	{
		"id": 1544,
		"tmdb_id": 267193,
		"imdb_id": "tt3381008",
		"title": "Anh Em Nhà Grimsby",
		"english_title": "Grimsby",
		"backdrop_path": "/vJ15MXQWe5N1VF8CmCts8yM0YHP.jpg",
		"imdb": 6.2,
		"release_date": "2016-02-24",
		"runtime": 83,
		"genre_ids": [
			28,
			35
		],
		"hash": "1100DF0EF0CD35B8331C47D94CFFA4F43F88B0F5",
		"updated": "2021-10-29T07:34:15.499598+00:00"
	},
	{
		"id": 1545,
		"tmdb_id": 9637,
		"imdb_id": "tt0267913",
		"title": "Chú Chó Siêu Quậy",
		"english_title": "Scooby-Doo",
		"backdrop_path": "/elpGgM8ZmssR9mP0PULtG2bUm4p.jpg",
		"imdb": 5.2,
		"release_date": "2002-06-14",
		"runtime": 88,
		"genre_ids": [
			9648,
			12,
			35
		],
		"hash": "CAA385C23BA160DE57A3E4051F4B4990CC9887C4",
		"updated": "2021-10-29T07:39:18.555439+00:00"
	},
	{
		"id": 1546,
		"tmdb_id": 11024,
		"imdb_id": "tt0331632",
		"title": "Chú Chó Siêu Quậy 2: Quái Vật Sổng Chuồng",
		"english_title": "Scooby-Doo 2: Monsters Unleashed",
		"backdrop_path": "/urEpiO6dVdSnSlsPtbbcl9dKVjU.jpg",
		"imdb": 5.1,
		"release_date": "2004-03-24",
		"runtime": 93,
		"genre_ids": [
			9648,
			14,
			12,
			35
		],
		"hash": "E85FE7162D5AF5461A769F5634EA910164C2D50E",
		"updated": "2021-10-29T07:41:08.069323+00:00"
	},
	{
		"id": 1549,
		"tmdb_id": 338967,
		"imdb_id": "tt1560220",
		"title": "Vùng Đất Thây Ma: Cú Bắn Đúp",
		"english_title": "Zombieland: Double Tap",
		"backdrop_path": "/jAzYxFSNRIalHSO53ObrGjHWLQH.jpg",
		"imdb": 6.7,
		"release_date": "2019-10-09",
		"runtime": 99,
		"genre_ids": [
			27,
			28,
			35
		],
		"hash": "DD50A4D73C1000A995B43C27205D073886A38C8A",
		"updated": "2021-10-30T01:23:53.357078+00:00"
	},
	{
		"id": 1547,
		"tmdb_id": 796499,
		"imdb_id": "tt13024674",
		"title": "Đội Quân Đạo Tặc",
		"english_title": "Army of Thieves",
		"backdrop_path": "/uon0mslT23E0AObyVNtqlkv6WCN.jpg",
		"imdb": 6.3,
		"release_date": "2021-10-29",
		"runtime": 128,
		"genre_ids": [
			28,
			53,
			35
		],
		"hash": "5731C9471CE8107370EB9B331AFEF696716E0284",
		"updated": "2021-11-03T14:07:41.592+00:00"
	},
	{
		"id": 1550,
		"tmdb_id": 575417,
		"imdb_id": "tt9606374",
		"title": "Thử Thách Gia Đình",
		"english_title": "On the Rocks",
		"backdrop_path": "/eIMTITi3PzKzFzUFJ4fu6BoAX0i.jpg",
		"imdb": 6.5,
		"release_date": "2020-10-02",
		"runtime": 96,
		"genre_ids": [
			18,
			35
		],
		"hash": "9EAB5569C7E056E8685BB9ECB3380FF909254F3E",
		"updated": "2021-10-30T01:27:26.449+00:00"
	},
	{
		"id": 1551,
		"tmdb_id": 193756,
		"imdb_id": "tt1091191",
		"title": "Sống Sót",
		"english_title": "Lone Survivor",
		"backdrop_path": "/nin6NmYrYuua6RphpcFOfnbyC3J.jpg",
		"imdb": 7.5,
		"release_date": "2013-12-24",
		"runtime": 121,
		"genre_ids": [
			10752,
			28,
			18,
			36
		],
		"hash": "2127BD1C243C168C8AD59D839CF38E4BEA2DBBDB",
		"updated": "2021-10-30T01:32:09.734023+00:00"
	},
	{
		"id": 1552,
		"tmdb_id": 571648,
		"imdb_id": "tt9747594",
		"title": "Chó Săn Tiền",
		"english_title": "Beasts Clawing at Straws",
		"backdrop_path": "/qfhuDpPJ1F955QUc0cvHyQgbbw8.jpg",
		"imdb": 7.1,
		"release_date": "2020-02-19",
		"runtime": 108,
		"genre_ids": [
			9648,
			53,
			80,
			35,
			18
		],
		"hash": "CC8D33AEC42E56979AA88C268431C79FED594127",
		"updated": "2021-10-30T02:42:22.051186+00:00"
	},
	{
		"id": 1553,
		"tmdb_id": 4689,
		"imdb_id": "tt0310775",
		"title": "Quý Ông Báo Thù",
		"english_title": "Sympathy for Mr. Vengeance",
		"backdrop_path": "/6WMeEmwXWKwrWBd6uDXjtWPigzM.jpg",
		"imdb": 7.6,
		"release_date": "2002-03-29",
		"runtime": 129,
		"genre_ids": [
			28,
			18,
			53
		],
		"hash": "1239B49D4338634BBC119EAD1C3ED2BD7F392792",
		"updated": "2021-10-31T02:12:25.80574+00:00"
	},
	{
		"id": 1554,
		"tmdb_id": 4550,
		"imdb_id": "tt0451094",
		"title": "Người Đẹp Báo Thù",
		"english_title": "Sympathy for Lady Vengeance",
		"backdrop_path": "/vAJ6qpJWDICGiQWCmGXPm5TaazW.jpg",
		"imdb": 7.6,
		"release_date": "2005-07-29",
		"runtime": 115,
		"genre_ids": [
			18,
			53
		],
		"hash": "6DEC9FAE94D54CDFAB91A3A0D7D59E132C12BC46",
		"updated": "2021-10-31T02:15:30.366454+00:00"
	},
	{
		"id": 1555,
		"tmdb_id": 137,
		"imdb_id": "tt0107048",
		"title": "Ngày Chuột Chũi",
		"english_title": "Groundhog Day",
		"backdrop_path": "/cjwMqiUiJIuQkQOhCnKnSsHyNGr.jpg",
		"imdb": 8,
		"release_date": "1993-02-11",
		"runtime": 101,
		"genre_ids": [
			10749,
			14,
			18,
			35
		],
		"hash": "0D252349FFDC20167DBE29DEDBC1DF98B0489C97",
		"updated": "2021-10-31T02:18:16.632257+00:00"
	},
	{
		"id": 1556,
		"tmdb_id": 310,
		"imdb_id": "tt0315327",
		"title": "Một Ngày Làm Thượng Đế",
		"english_title": "Bruce Almighty",
		"backdrop_path": "/hySWsKKemU0JAT9eByL9OsEKeC0.jpg",
		"imdb": 6.8,
		"release_date": "2003-05-23",
		"runtime": 101,
		"genre_ids": [
			14,
			35
		],
		"hash": "15F0DF45FECEE29CD11D856410B26536977B15EE",
		"updated": "2021-10-31T02:20:28.104511+00:00"
	},
	{
		"id": 1557,
		"tmdb_id": 508,
		"imdb_id": "tt0314331",
		"title": "Tình Yêu Thực Sự",
		"english_title": "Love Actually",
		"backdrop_path": "/6xrA9tMvpb3cnktNH7voJ62S41N.jpg",
		"imdb": 7.6,
		"release_date": "2003-09-07",
		"runtime": 135,
		"genre_ids": [
			35,
			10749,
			18
		],
		"hash": "B5C3C301FF86F060D955E8E35B2990A318688469",
		"updated": "2021-10-31T02:24:07.255361+00:00"
	},
	{
		"id": 1558,
		"tmdb_id": 9603,
		"imdb_id": "tt0112697",
		"title": "Rơi Vào Bẫy Tình",
		"english_title": "Clueless",
		"backdrop_path": "/8mhEXI4smZcsOjSVnmHf7LKCN80.jpg",
		"imdb": 6.9,
		"release_date": "1995-07-19",
		"runtime": 97,
		"genre_ids": [
			35,
			10749
		],
		"hash": "CB239E9DC980CB6C02F3802547626D36752FF971",
		"updated": "2021-10-31T02:27:20.694+00:00"
	},
	{
		"id": 1559,
		"tmdb_id": 544,
		"imdb_id": "tt0129387",
		"title": "Câu Chuyện Tình của Mary",
		"english_title": "There's Something About Mary",
		"backdrop_path": "/iE8mFZKNYhqgs6RynCTQaaMcgcb.jpg",
		"imdb": 7.1,
		"release_date": "1998-07-15",
		"runtime": 119,
		"genre_ids": [
			10749,
			35
		],
		"hash": "2BAEBAA7A0CE09D02CC36B38B166E4EB70F64D90",
		"updated": "2021-11-01T00:55:19.501421+00:00"
	},
	{
		"id": 1560,
		"tmdb_id": 9522,
		"imdb_id": "tt0396269",
		"title": "Wedding Crashers",
		"english_title": "Wedding Crashers",
		"backdrop_path": "/iuaPEJJfA0oSp3Q9DkTkrGEntzv.jpg",
		"imdb": 6.9,
		"release_date": "2005-07-13",
		"runtime": 119,
		"genre_ids": [
			35,
			10749
		],
		"hash": "BCF77B38C97976CD1DE66E56300D8C6F2A8EE3D7",
		"updated": "2021-11-01T00:57:37.310012+00:00"
	},
	{
		"id": 1561,
		"tmdb_id": 10585,
		"imdb_id": "tt0094862",
		"title": "Búp Bê Sát Nhân 1",
		"english_title": "Child's Play",
		"backdrop_path": "/wY0MLtuj8DptGCkntHwjVzihy4z.jpg",
		"imdb": 6.6,
		"release_date": "1988-11-08",
		"runtime": 87,
		"genre_ids": [
			27
		],
		"hash": "D7E4E8370ABF594D95E638872B1CF8CC0691B615",
		"updated": "2021-11-01T04:14:37.528+00:00"
	},
	{
		"id": 1562,
		"tmdb_id": 11186,
		"imdb_id": "tt0099253",
		"title": "Búp Bê Sát Nhân 2",
		"english_title": "Child's Play 2",
		"backdrop_path": "/zkz2kgGAqwwiqLnpfhTNEjAjPa1.jpg",
		"imdb": 5.9,
		"release_date": "1990-11-09",
		"runtime": 84,
		"genre_ids": [
			27,
			53
		],
		"hash": "82575D19BC24EF2827E99B6291FE64F917615440",
		"updated": "2021-11-01T04:14:43.814+00:00"
	},
	{
		"id": 1563,
		"tmdb_id": 11187,
		"imdb_id": "tt0103956",
		"title": "Búp Bê Sát Nhân 3",
		"english_title": "Child's Play 3",
		"backdrop_path": "/jc8xhFkPhi1Q5hhVyt8MP48dKBV.jpg",
		"imdb": 5.1,
		"release_date": "1991-08-30",
		"runtime": 90,
		"genre_ids": [
			27,
			53
		],
		"hash": "6A354D451D1A5BA8E433D3F74F504A9C845DCA11",
		"updated": "2021-11-01T04:15:04.233+00:00"
	},
	{
		"id": 1566,
		"tmdb_id": 321697,
		"imdb_id": "tt2080374",
		"title": "Steve Jobs",
		"english_title": "Steve Jobs",
		"backdrop_path": "/bBgoMzo2fXpZYYNlJuG5WAW5wzA.jpg",
		"imdb": 7.2,
		"release_date": "2015-10-09",
		"runtime": 122,
		"genre_ids": [
			18,
			36
		],
		"hash": "46E7E399850BDC9039182074EFA32957CD82C9F1",
		"updated": "2021-11-01T08:45:07.745253+00:00"
	},
	{
		"id": 1564,
		"tmdb_id": 533642,
		"imdb_id": "tt8663516",
		"title": "Búp Bê Sát Nhân",
		"english_title": "Child's Play",
		"backdrop_path": "/ww2gLmgOaZpR6u9sbqT65lWDgG1.jpg",
		"imdb": 5.7,
		"release_date": "2019-06-19",
		"runtime": 90,
		"genre_ids": [
			27
		],
		"hash": "66A58C2DB1D5715258715B42373E76BA22E9FBB1",
		"updated": "2021-11-01T04:15:29.414+00:00"
	},
	{
		"id": 1571,
		"tmdb_id": 914,
		"imdb_id": "tt0032553",
		"title": "Kẻ Độc Tài Vĩ Đại",
		"english_title": "The Great Dictator",
		"backdrop_path": "/5uub6JZuZHXj5x2pP8q0DWKXiqS.jpg",
		"imdb": 8.4,
		"release_date": "1940-10-23",
		"runtime": 125,
		"genre_ids": [
			35
		],
		"hash": "791BFCED092757A1200CFF83B2C012CC5AC1EA3F",
		"updated": "2021-11-02T01:44:37.255+00:00"
	},
	{
		"id": 1568,
		"tmdb_id": 28978,
		"imdb_id": "tt0018773",
		"title": "Gánh Xiếc",
		"english_title": "The Circus",
		"backdrop_path": "/Alhc9UUvZxOlYtcoNawT1u4oDVD.jpg",
		"imdb": 8.1,
		"release_date": "1928-01-06",
		"runtime": 72,
		"genre_ids": [
			35,
			10749
		],
		"hash": "ED031BECD60B00CDBD00945BFCC828DC2C42E3F1",
		"updated": "2021-11-02T01:44:26.069+00:00"
	},
	{
		"id": 1569,
		"tmdb_id": 3082,
		"imdb_id": "tt0027977",
		"title": "Thời Đại Tân Kỳ",
		"english_title": "Modern Times",
		"backdrop_path": "/42RdMS0vRuiQIaWPn5JShGa5TlS.jpg",
		"imdb": 8.5,
		"release_date": "1936-02-11",
		"runtime": 87,
		"genre_ids": [
			35,
			18
		],
		"hash": "9EB43263BBE8B7DED8FE602FF414FA3ADDB2E2D7",
		"updated": "2021-11-02T01:43:25.553+00:00"
	},
	{
		"id": 1570,
		"tmdb_id": 10098,
		"imdb_id": "tt0012349",
		"title": "Đứa Trẻ",
		"english_title": "The Kid",
		"backdrop_path": "/r1dhecsu2j0cugw88Mc8Pv6Jt6z.jpg",
		"imdb": 8.3,
		"release_date": "1921-01-21",
		"runtime": 53,
		"genre_ids": [
			35,
			18
		],
		"hash": "5D640678EAE57C72C0D096904FD7D7405ECE6653",
		"updated": "2021-11-02T01:42:52.291+00:00"
	},
	{
		"id": 1572,
		"tmdb_id": 901,
		"imdb_id": "tt0021749",
		"title": "Ánh Sáng Đô Thị",
		"english_title": "City Lights",
		"backdrop_path": "/isbOxmWQmvBfeLE0iBJeiUyrW6G.jpg",
		"imdb": 8.5,
		"release_date": "1931-02-01",
		"runtime": 87,
		"genre_ids": [
			35,
			18,
			10749
		],
		"hash": "80E8A005E090AE95CCCD8833178170D8202A3C64",
		"updated": "2021-11-03T01:29:51.396263+00:00"
	},
	{
		"id": 1573,
		"tmdb_id": 962,
		"imdb_id": "tt0015864",
		"title": "Cơn Sốt Vàng",
		"english_title": "The Gold Rush",
		"backdrop_path": "/3fsVHbjkfPe5SBlSxPpDN9PIpYC.jpg",
		"imdb": 8.2,
		"release_date": "1925-07-12",
		"runtime": 89,
		"genre_ids": [
			12,
			35,
			18
		],
		"hash": "6E11E491A895E57CF6D738299226BD399D7FCCD0",
		"updated": "2021-11-03T01:33:22.952114+00:00"
	},
	{
		"id": 1574,
		"tmdb_id": 788929,
		"imdb_id": "tt9812474",
		"title": "Lamb",
		"english_title": "Lamb",
		"backdrop_path": "/guPEWOSXsdmwjttcO12h2tLRhFj.jpg",
		"imdb": 6.4,
		"release_date": "2021-08-12",
		"runtime": 106,
		"genre_ids": [
			18,
			27,
			9648
		],
		"hash": "231591813338C12E9E752B6C4FCFB72A76C94846",
		"updated": "2021-11-03T01:39:41.976609+00:00"
	},
	{
		"id": 1565,
		"tmdb_id": 607430,
		"imdb_id": "tt10451852",
		"title": "Chín Ngày",
		"english_title": "Nine Days",
		"backdrop_path": "/s9Y4HQ0bKIx5WERXrT5oUHzuM8q.jpg",
		"imdb": 6.9,
		"release_date": "2021-07-15",
		"runtime": 124,
		"genre_ids": [
			18,
			14
		],
		"hash": "1DED08DD9662AE137947DBCB942DB90F1D1B2AF3",
		"updated": "2021-11-30T09:51:42.24+00:00"
	},
	{
		"id": 1576,
		"tmdb_id": 618162,
		"imdb_id": "tt10696784",
		"title": "Vực Sâu Thù Hận",
		"english_title": "The Harder They Fall",
		"backdrop_path": "/lROPTZPTeuiS0C0Pww3xPvtfqT1.jpg",
		"imdb": 5.7,
		"release_date": "2021-10-22",
		"runtime": 130,
		"genre_ids": [
			37
		],
		"hash": "6a6e2b434c08089f9fa15a42aa36554b8f88c491",
		"updated": "2021-11-03T14:07:48.444+00:00"
	},
	{
		"id": 1577,
		"tmdb_id": 38684,
		"imdb_id": "tt1229822",
		"title": "Chuyện Tình Nàng Jane Eyre",
		"english_title": "Jane Eyre",
		"backdrop_path": "/m8TaN6991Tb8vG0NfXs0y8H920f.jpg",
		"imdb": 7.3,
		"release_date": "2011-03-11",
		"runtime": 120,
		"genre_ids": [
			18,
			10749
		],
		"hash": "B5C788FED4E94CF42E59AAB12543D3FF38BEC60A",
		"updated": "2021-11-04T03:54:07.738396+00:00"
	},
	{
		"id": 1578,
		"tmdb_id": 14412,
		"imdb_id": "tt0082089",
		"title": "Hơi Ấm Cơ Thể",
		"english_title": "Body Heat",
		"backdrop_path": "/4um2ThnhDgZgDxaVqUe0Mv786QD.jpg",
		"imdb": 7.4,
		"release_date": "1981-08-28",
		"runtime": 113,
		"genre_ids": [
			80,
			53,
			10749
		],
		"hash": "6171E7E21EB63B774384D0539A79DDC63C5C4749",
		"updated": "2021-11-05T01:34:49.827078+00:00"
	},
	{
		"id": 1579,
		"tmdb_id": 659,
		"imdb_id": "tt0078875",
		"title": "Chiếc Trống Thiếc",
		"english_title": "The Tin Drum",
		"backdrop_path": "/uZJjc4hMgckb3H3tVkTmbmcBhIT.jpg",
		"imdb": 7.5,
		"release_date": "1979-05-02",
		"runtime": 162,
		"genre_ids": [
			18,
			36,
			10752
		],
		"hash": "4A3F0D7CE1DA3333A9D98C418C63300B79BE18F1",
		"updated": "2021-11-05T01:41:58.077538+00:00"
	},
	{
		"id": 1580,
		"tmdb_id": 2133,
		"imdb_id": "tt0177971",
		"title": "Cơn Bão Kinh Hoàng",
		"english_title": "The Perfect Storm",
		"backdrop_path": "/sFq1UFM6R81kKVuKRm7Pj4JBwRx.jpg",
		"imdb": 6.4,
		"release_date": "2000-06-29",
		"runtime": 130,
		"genre_ids": [
			28,
			12,
			18,
			53
		],
		"hash": "210642D1F9E8D357953C27E398D021BDC2C41148",
		"updated": "2021-11-05T01:45:59.423266+00:00"
	},
	{
		"id": 1581,
		"tmdb_id": 628914,
		"imdb_id": "tt9054192",
		"title": "Phi Vụ Lừa Đảo",
		"english_title": "Queenpins",
		"backdrop_path": "/yedhMhRSViMjd3v1gLNQSjo9wMl.jpg",
		"imdb": 6.2,
		"release_date": "2021-08-26",
		"runtime": 110,
		"genre_ids": [
			35,
			80
		],
		"hash": "C7C17C937BB156D15237A4106DEC15768AC0C350",
		"updated": "2021-11-05T01:54:08.108707+00:00"
	},
	{
		"id": 1595,
		"tmdb_id": 629,
		"imdb_id": "tt0114814",
		"title": "Những Kẻ Đáng Ngờ",
		"english_title": "The Usual Suspects",
		"backdrop_path": "/7S7PE3vK9Eh5uzCYBDGk5qTJeYW.jpg",
		"imdb": 8.5,
		"release_date": "1995-07-19",
		"runtime": 106,
		"genre_ids": [
			18,
			80,
			53
		],
		"hash": "9D004A95228F7A66078A4FB3D8A47626767CE67B",
		"updated": "2021-11-08T01:46:59.481989+00:00"
	},
	{
		"id": 1583,
		"tmdb_id": 811592,
		"imdb_id": "tt14199590",
		"title": "One Shot",
		"english_title": "One Shot",
		"backdrop_path": "/al4f54LvFdM2gNv00PvotyE3UNm.jpg",
		"imdb": 5.8,
		"release_date": "2021-11-05",
		"runtime": 97,
		"genre_ids": [
			28
		],
		"hash": "F0B9A5604B4E90EBBA3EAFEB314323C985A2D66D",
		"updated": "2021-11-06T07:08:47.865023+00:00"
	},
	{
		"id": 1584,
		"tmdb_id": 703,
		"imdb_id": "tt0075686",
		"title": "Kẻ Tâm Thần",
		"english_title": "Annie Hall",
		"backdrop_path": "/nErPhnNopHCPhqQaTULWIuj5otF.jpg",
		"imdb": 8,
		"release_date": "1977-04-19",
		"runtime": 93,
		"genre_ids": [
			35,
			18,
			10749
		],
		"hash": "F5AC61D1ED17193F9B2AF32CC7907D2E624D3163",
		"updated": "2021-11-07T01:58:20.10254+00:00"
	},
	{
		"id": 1585,
		"tmdb_id": 72358,
		"imdb_id": "tt0763831",
		"title": "Một Nghìn Từ Cuối Đời",
		"english_title": "A Thousand Words",
		"backdrop_path": "/a72lzZOZ1NDfzvSPwuozBM56gAL.jpg",
		"imdb": 5.9,
		"release_date": "2012-03-07",
		"runtime": 91,
		"genre_ids": [
			18,
			35
		],
		"hash": "646387E8657E846439BFF6E2767EE86F94DAEB35",
		"updated": "2021-11-07T02:00:07.301905+00:00"
	},
	{
		"id": 1586,
		"tmdb_id": 533514,
		"imdb_id": "tt8652818",
		"title": "Violet Evergarden: Hồi Ức Không Quên",
		"english_title": "Violet Evergarden: The Movie",
		"backdrop_path": "/lp6SmwyNRspEYkkLXFEVuNlCw77.jpg",
		"imdb": 8.5,
		"release_date": "2020-09-18",
		"runtime": 140,
		"genre_ids": [
			16,
			18,
			14,
			10749
		],
		"hash": "97CE9DA892E438110496602598C791EB1E707F5C",
		"updated": "2021-11-07T02:04:00.076598+00:00"
	},
	{
		"id": 1587,
		"tmdb_id": 565,
		"imdb_id": "tt0298130",
		"title": "Vòng Tròn Tử Thần",
		"english_title": "The Ring",
		"backdrop_path": "/mTrfhlSAH5EcCccDGJOg7AgtB0X.jpg",
		"imdb": 7.1,
		"release_date": "2002-10-18",
		"runtime": 115,
		"genre_ids": [
			27,
			9648
		],
		"hash": "0e883df5fe70ca5f8ff715c08b606c54f0bf26be",
		"updated": "2021-11-07T02:11:16.347769+00:00"
	},
	{
		"id": 1589,
		"tmdb_id": 688258,
		"imdb_id": "tt8615822",
		"title": "Giải Cứu Địa Cầu 2: Miền Nhiệt Đới",
		"english_title": "Occupation: Rainfall",
		"backdrop_path": "/ukEoRjKXQkhfXqb62Mv9MZZGC0E.jpg",
		"imdb": 5.6,
		"release_date": "2021-01-28",
		"runtime": 128,
		"genre_ids": [
			878,
			28
		],
		"hash": "092969F2FBFC9F831A611C949782ED42C5DD9637",
		"updated": "2021-11-07T02:18:39.927607+00:00"
	},
	{
		"id": 1591,
		"tmdb_id": 623135,
		"imdb_id": "tt12664618",
		"title": "Hố Sụt",
		"english_title": "Sinkhole",
		"backdrop_path": "/vzK0zpc44aST9G9xD7agdmy4tAJ.jpg",
		"imdb": 6.2,
		"release_date": "2021-08-11",
		"runtime": 113,
		"genre_ids": [
			35,
			18
		],
		"hash": "F6EDC9DAD71A265FDA039A3CA231C35E44B3D544",
		"updated": "2021-11-07T02:23:35.137796+00:00"
	},
	{
		"id": 1582,
		"tmdb_id": 522402,
		"imdb_id": "tt3420504",
		"title": "Finch",
		"english_title": "Finch",
		"backdrop_path": "/5M1iC2uytvC1cGwkJ2IyXr66SNx.jpg",
		"imdb": 7,
		"release_date": "2021-11-04",
		"runtime": 115,
		"genre_ids": [
			878,
			18,
			12
		],
		"hash": "2298FADBA64CDF9FE01BE862A9765E7559EB797B",
		"updated": "2021-11-07T02:50:47.993+00:00"
	},
	{
		"id": 1567,
		"tmdb_id": 745881,
		"imdb_id": "tt13446168",
		"title": "Bà Đồng",
		"english_title": "The Medium",
		"backdrop_path": "/9SISFlf6SEiIb7CMk8h0Gu3NYow.jpg",
		"imdb": 6.7,
		"release_date": "2021-07-14",
		"runtime": 131,
		"genre_ids": [
			27,
			53
		],
		"hash": "BAEEE85FBF5A5FA0AE338E0F2BE99D6C75C0C17B",
		"updated": "2021-11-09T15:15:10.702+00:00"
	},
	{
		"id": 1594,
		"tmdb_id": 9285,
		"imdb_id": "tt0215129",
		"title": "Con Đường Tình Dục",
		"english_title": "Road Trip",
		"backdrop_path": "/htzLJz7mceoSBk1ixEs5UiYY0va.jpg",
		"imdb": 6.4,
		"release_date": "2000-05-19",
		"runtime": 93,
		"genre_ids": [
			35,
			12
		],
		"hash": "3E9E47711E833FEA07690D9A135D87F7FA795831",
		"updated": "2021-11-08T01:39:12.527178+00:00"
	},
	{
		"id": 1596,
		"tmdb_id": 1091,
		"imdb_id": "tt0084787",
		"title": "Quái Vật Biến Hình",
		"english_title": "The Thing",
		"backdrop_path": "/prvr9DJAH3ydpcA1PYcBohuxje0.jpg",
		"imdb": 8.1,
		"release_date": "1982-06-25",
		"runtime": 109,
		"genre_ids": [
			27,
			9648,
			878
		],
		"hash": "8A0507B28FEFD53830497021014D1B5C9CFD3416",
		"updated": "2021-11-08T01:55:07.373512+00:00"
	},
	{
		"id": 1597,
		"tmdb_id": 60935,
		"imdb_id": "tt0905372",
		"title": "Quái Vật Kinh Dị",
		"english_title": "The Thing",
		"backdrop_path": "/g9nvNlLmY8LCbeZ0kJYAtoKZhPV.jpg",
		"imdb": 6.2,
		"release_date": "2011-10-12",
		"runtime": 103,
		"genre_ids": [
			27,
			878,
			9648,
			53
		],
		"hash": "B4F8E043EDD930B08AB622928264EC30EAED5060",
		"updated": "2021-11-08T01:57:00.368891+00:00"
	},
	{
		"id": 1598,
		"tmdb_id": 23047,
		"imdb_id": "tt0479997",
		"title": "Thời Đại Của Phù Thủy",
		"english_title": "Season of the Witch",
		"backdrop_path": "/nfxAqZHExL4YxDNHexUFdVFYwGR.jpg",
		"imdb": 5.4,
		"release_date": "2011-01-07",
		"runtime": 95,
		"genre_ids": [
			12,
			14,
			28
		],
		"hash": "8DF1E44CB1803F4D58998F991C0D0D98EF9C5748",
		"updated": "2021-11-09T03:16:29.321+00:00"
	},
	{
		"id": 1588,
		"tmdb_id": 607844,
		"imdb_id": "tt14810692",
		"title": "Thoát Khỏi Mogadishu",
		"english_title": "Escape from Mogadishu",
		"backdrop_path": "/geisXPT4JrtbkUw5YPc6lmdi0e2.jpg",
		"imdb": 7.2,
		"release_date": "2021-07-28",
		"runtime": 121,
		"genre_ids": [
			10752,
			18,
			28
		],
		"hash": "27DE2F6C5C21520B9F3DEACDD805BDB3C42AB186",
		"updated": "2021-11-27T10:30:10.65+00:00"
	},
	{
		"id": 1590,
		"tmdb_id": 513692,
		"imdb_id": "tt8165192",
		"title": "Nộ Hỏa: Trọng Án",
		"english_title": "Raging Fire",
		"backdrop_path": "/nEFw5QBuw3oRrgAord2XkzdZPsj.jpg",
		"imdb": 6.8,
		"release_date": "2021-08-13",
		"runtime": 128,
		"genre_ids": [
			28,
			80
		],
		"hash": "1256748D3CDC11FE692096D76543A31CDBA3FE90",
		"updated": "2021-12-13T03:03:30.864+00:00"
	},
	{
		"id": 1593,
		"tmdb_id": 580489,
		"imdb_id": "tt7097896",
		"title": "Venom: Đối Mặt Tử Thù",
		"english_title": "Venom: Let There Be Carnage",
		"backdrop_path": "/8u1mMvyWej8wLQgMPtLsW5ivlWD.jpg",
		"imdb": 6,
		"release_date": "2021-09-30",
		"runtime": 97,
		"genre_ids": [
			878,
			28
		],
		"hash": "4051964F4F7504458E2F1ED7D0D999DA4FD283F2",
		"updated": "2022-01-14T04:01:33.508+00:00"
	},
	{
		"id": 1604,
		"tmdb_id": 512195,
		"imdb_id": "tt7991608",
		"title": "Lệnh Truy Nã Đỏ",
		"english_title": "Red Notice",
		"backdrop_path": "/vP7OeX0s9DjVBlOkqEy8FVEXEnM.jpg",
		"imdb": 7,
		"release_date": "2021-11-04",
		"runtime": 116,
		"genre_ids": [
			28,
			35,
			80,
			53
		],
		"hash": "68e2713bde8f16dba0c7862a5c52b1de28cf926e",
		"updated": "2021-11-28T06:09:08.184+00:00"
	},
	{
		"id": 1606,
		"tmdb_id": 10867,
		"imdb_id": "tt0213847",
		"title": "Tình Yêu Đầu Đời",
		"english_title": "Malena",
		"backdrop_path": "/jpPBtDJHIXOOYfQcidyvP42pqRL.jpg",
		"imdb": 7.5,
		"release_date": "2000-03-16",
		"runtime": 109,
		"genre_ids": [
			18
		],
		"hash": "241422CEA8DE6A29A7C7F5D16E200AED38D6555F",
		"updated": "2021-11-14T01:26:47.553447+00:00"
	},
	{
		"id": 1607,
		"tmdb_id": 576845,
		"imdb_id": "tt9639470",
		"title": "Đêm Trước Ở Soho",
		"english_title": "Last Night in Soho",
		"backdrop_path": "/wgwJj8PMhfZpnx8iYC8WMJYDD2G.jpg",
		"imdb": 7.4,
		"release_date": "2021-10-21",
		"runtime": 117,
		"genre_ids": [
			27,
			9648,
			53
		],
		"hash": "C6BE9B123B77C0B42EA89E18B8EE554733AA68E0",
		"updated": "2021-11-21T03:26:39.655817+00:00"
	},
	{
		"id": 1608,
		"tmdb_id": 13523,
		"imdb_id": "tt1135985",
		"title": "Con Đường Tình Ái",
		"english_title": "Sex Drive",
		"backdrop_path": "/o4gFreHkWyPeYdQIQBflOoC3MCt.jpg",
		"imdb": 6.5,
		"release_date": "2008-10-16",
		"runtime": 109,
		"genre_ids": [
			35,
			12,
			10749
		],
		"hash": "4511802E0F9AB07E301C6B1022FF11BC219D32DE",
		"updated": "2021-11-24T01:47:49.177681+00:00"
	},
	{
		"id": 1609,
		"tmdb_id": 370964,
		"imdb_id": "tt4057376",
		"title": "Truyền Thuyết Về Rồng",
		"english_title": "I Am Dragon",
		"backdrop_path": "/vNlbeLIvhccj0WzwVIoGgKDOKuN.jpg",
		"imdb": 6.9,
		"release_date": "2015-12-03",
		"runtime": 110,
		"genre_ids": [
			14,
			10749
		],
		"hash": "B85F40C0F3F2A36A414175832E9F5F9DD2956B57",
		"updated": "2021-11-24T01:51:19.23315+00:00"
	},
	{
		"id": 1610,
		"tmdb_id": 62214,
		"imdb_id": "tt1142977",
		"title": "Chú Chó Ma",
		"english_title": "Frankenweenie",
		"backdrop_path": "/1m7YOPdseNcpJwaukWc6alhMnks.jpg",
		"imdb": 6.9,
		"release_date": "2012-10-04",
		"runtime": 87,
		"genre_ids": [
			16,
			35,
			10751
		],
		"hash": "D09BFDE6035A5B15ED725E3B56DA79894A0A9073",
		"updated": "2021-11-24T01:53:49.748912+00:00"
	},
	{
		"id": 1611,
		"tmdb_id": 9255,
		"imdb_id": "tt0107144",
		"title": "Theo Gót Rambo",
		"english_title": "Hot Shots! Part Deux",
		"backdrop_path": "/gy3fRGlyXlOHck7FtAwHaFlvLFT.jpg",
		"imdb": 6.6,
		"release_date": "1993-05-21",
		"runtime": 86,
		"genre_ids": [
			28,
			35,
			10752
		],
		"hash": "1F85A282D46905A42EAE8B16A9691918594EC3E0",
		"updated": "2021-11-24T01:58:18.490104+00:00"
	},
	{
		"id": 1612,
		"tmdb_id": 1428,
		"imdb_id": "tt0285823",
		"title": "Mexico Một Thời Oanh Liệt",
		"english_title": "Once Upon a Time in Mexico",
		"backdrop_path": "/A3RORJvfZwuBH7xYQkLJZ7tLxV7.jpg",
		"imdb": 6.4,
		"release_date": "2003-09-11",
		"runtime": 102,
		"genre_ids": [
			28,
			18,
			9648
		],
		"hash": "CCAAA1370917C031C6D23630A3AF6789E84A5AE7",
		"updated": "2021-11-24T02:06:46.388558+00:00"
	},
	{
		"id": 1614,
		"tmdb_id": 21531,
		"imdb_id": "tt0269743",
		"title": "Chú Chó Mất Tích",
		"english_title": "Barking Dogs Never Bite",
		"backdrop_path": "/eZGtUwHn1xaTNeYecFybAcSRjih.jpg",
		"imdb": 7,
		"release_date": "2000-02-19",
		"runtime": 110,
		"genre_ids": [
			35,
			80
		],
		"hash": "187AB37684DA07F103CCD742E4106984ED882877",
		"updated": "2021-11-24T02:35:13.255622+00:00"
	},
	{
		"id": 1615,
		"tmdb_id": 1255,
		"imdb_id": "tt0468492",
		"title": "Quái Vật Sông Hàn",
		"english_title": "The Host",
		"backdrop_path": "/z4IUulsiqMjPAD5OYXEaBLXteyc.jpg",
		"imdb": 7.1,
		"release_date": "2006-07-27",
		"runtime": 120,
		"genre_ids": [
			27,
			18,
			878
		],
		"hash": "DAC8E7FFCA59EB946F68EA62A69371242CB27A93",
		"updated": "2021-11-24T02:38:48.210412+00:00"
	},
	{
		"id": 1601,
		"tmdb_id": 1280,
		"imdb_id": "tt0423866",
		"title": "Kẻ Ở Nhờ Kỳ Dị",
		"english_title": "3-Iron",
		"backdrop_path": "/nFtkNsd01rYZMQGyZJos2pagOHD.jpg",
		"imdb": 8,
		"release_date": "2004-10-15",
		"runtime": 88,
		"genre_ids": [
			18,
			10749,
			80
		],
		"hash": "7ECB865BCC626BDC837067B0FAB3CF9B41AD9C0A",
		"updated": "2021-11-11T02:12:15.371094+00:00"
	},
	{
		"id": 1602,
		"tmdb_id": 15804,
		"imdb_id": "tt0101985",
		"title": "Một Ngày Hè Tươi Sáng Hơn",
		"english_title": "A Brighter Summer Day",
		"backdrop_path": "/qMMaTIUTxCcRRrwgNsna8EUAd1z.jpg",
		"imdb": 8.4,
		"release_date": "1991-07-27",
		"runtime": 237,
		"genre_ids": [
			80,
			18,
			10749
		],
		"hash": "D1FC88A0BCC0504EFD66DCDA9A1FA30831753B98",
		"updated": "2021-11-11T02:17:19.831+00:00"
	},
	{
		"id": 1603,
		"tmdb_id": 10358,
		"imdb_id": "tt1007028",
		"title": "Hãng Phim Heo Nghiệp Dư",
		"english_title": "Zack and Miri Make a Porno",
		"backdrop_path": "/k2AF6EprKZy4gOoyf0wnZzuWz0.jpg",
		"imdb": 6.5,
		"release_date": "2008-09-18",
		"runtime": 102,
		"genre_ids": [
			35
		],
		"hash": "13026E68D32E3CF1E27BCD53CF9CC29E84E17D39",
		"updated": "2021-11-12T01:17:52.248311+00:00"
	},
	{
		"id": 1605,
		"tmdb_id": 82654,
		"imdb_id": "tt1588173",
		"title": "Tình Yêu Zombie",
		"english_title": "Warm Bodies",
		"backdrop_path": "/eA3A4pjs7YOZOM6caapUD5BsNdC.jpg",
		"imdb": 6.8,
		"release_date": "2013-01-31",
		"runtime": 97,
		"genre_ids": [
			27,
			35,
			10749
		],
		"hash": "0BB8E4C9F46443C134E96F92FCABCF536F6E1527",
		"updated": "2021-11-13T02:50:40.028978+00:00"
	},
	{
		"id": 1613,
		"tmdb_id": 265712,
		"imdb_id": "tt3331846",
		"title": "Doraemon Đôi Bạn Thân",
		"english_title": "Stand by Me Doraemon",
		"backdrop_path": "/1aABIiqBY7yoQESE8qWvR0w9bJZ.jpg",
		"imdb": 7.5,
		"release_date": "2014-08-08",
		"runtime": 90,
		"genre_ids": [
			16,
			10751,
			878,
			14
		],
		"hash": "A5DDC29A3E93F06BC671767D793472F0036AEC52",
		"updated": "2021-11-24T02:45:47.988+00:00"
	},
	{
		"id": 1599,
		"tmdb_id": 370172,
		"imdb_id": "tt2382320",
		"title": "Điệp Viên 007: Không Phải Lúc Chết",
		"english_title": "No Time to Die",
		"backdrop_path": "/dMuMiCrUDZ0AN0TNmBKkJ1wgKVM.jpg",
		"imdb": 7.5,
		"release_date": "2021-09-29",
		"runtime": 163,
		"genre_ids": [
			12,
			28,
			53
		],
		"hash": "0EF9E5FD42405DE76C8D8A2E3431FB3D153DB20C",
		"updated": "2021-11-28T06:08:09.452+00:00"
	},
	{
		"id": 1617,
		"tmdb_id": 662638,
		"imdb_id": "tt12093860",
		"title": "Thám Tử Lừng Danh Conan 24: Viên Đạn Đỏ",
		"english_title": "Detective Conan: The Scarlet Bullet",
		"backdrop_path": "/qIkAcIwS5e87JthROrT4THDgxxv.jpg",
		"imdb": 6.3,
		"release_date": "2021-04-16",
		"runtime": 110,
		"genre_ids": [
			16,
			28,
			80,
			9648,
			10749,
			53
		],
		"hash": "BFB661FD15ED89C6FF41A1AA5A8CF90C9B915218",
		"updated": "2021-11-30T09:42:19.858+00:00"
	},
	{
		"id": 1616,
		"tmdb_id": 716612,
		"imdb_id": "tt12536294",
		"title": "Giáng Sinh Cuối Cùng",
		"english_title": "Spencer",
		"backdrop_path": "/ziNykIy7takK7GdrzwfFwFawkUW.jpg",
		"imdb": 7,
		"release_date": "2021-11-05",
		"runtime": 111,
		"genre_ids": [
			18
		],
		"hash": "E7544F03E3B434E9E1523882CAFEC4A6AD6B7F50",
		"updated": "2021-11-30T09:52:40.255+00:00"
	},
	{
		"id": 1618,
		"tmdb_id": 617653,
		"imdb_id": "tt4244994",
		"title": "Trận Chiến Cuối Cùng",
		"english_title": "The Last Duel",
		"backdrop_path": "/cdUjiWUoRoS38m88enCiKp3RMCr.jpg",
		"imdb": 7.5,
		"release_date": "2021-10-13",
		"runtime": 152,
		"genre_ids": [
			28,
			18,
			36
		],
		"hash": "30D765334202B17661C4173F755A574E4458DFC1",
		"updated": "2021-12-10T01:39:10.828+00:00"
	},
	{
		"id": 1620,
		"tmdb_id": 824,
		"imdb_id": "tt0203009",
		"title": "Cối Xay Gió Đỏ",
		"english_title": "Moulin Rouge!",
		"backdrop_path": "/fvuet2jISV2hH6akFOPXQ16dhZb.jpg",
		"imdb": 7.6,
		"release_date": "2001-05-24",
		"runtime": 127,
		"genre_ids": [
			18,
			10749,
			10402
		],
		"hash": "FB7372E931327F5C3A0D5A9E26578CCB48C1EA9C",
		"updated": "2021-12-02T04:50:03.062161+00:00"
	},
	{
		"id": 1621,
		"tmdb_id": 2044,
		"imdb_id": "tt0410297",
		"title": "The Lake House",
		"english_title": "The Lake House",
		"backdrop_path": "/kWJMxNqQxpyPOTJREZ2VWetVEef.jpg",
		"imdb": 6.8,
		"release_date": "2006-06-16",
		"runtime": 99,
		"genre_ids": [
			10749,
			18,
			9648
		],
		"hash": "D33F828FE25019CC11608E83049BF89F9842C9CE",
		"updated": "2021-12-02T04:52:00.08127+00:00"
	},
	{
		"id": 1619,
		"tmdb_id": 600583,
		"imdb_id": "tt10293406",
		"title": "Sức Mạnh Của Loài Chó",
		"english_title": "The Power of the Dog",
		"backdrop_path": "/9ME2lhP4eXIzcIRKQBVHuhbzdZw.jpg",
		"imdb": 7,
		"release_date": "2021-09-13",
		"runtime": 126,
		"genre_ids": [
			18,
			10749,
			37
		],
		"hash": "f70f38981a9181ba8f99e7aef9df27419159d842",
		"updated": "2021-12-07T04:40:25.972+00:00"
	},
	{
		"id": 1622,
		"tmdb_id": 736146,
		"imdb_id": "tt13356884",
		"title": "Yakuza và Gia Đình",
		"english_title": "Yakuza and the Family",
		"backdrop_path": "/56pQfNPTgGELk0LtvMbSo9AbO2q.jpg",
		"imdb": 7,
		"release_date": "2021-01-29",
		"runtime": 136,
		"genre_ids": [
			80,
			18
		],
		"hash": "4464DF506852E7F8F331A31B62A4393FAB7E0295",
		"updated": "2021-12-02T04:55:19.108+00:00"
	},
	{
		"id": 1623,
		"tmdb_id": 22947,
		"imdb_id": "tt1193138",
		"title": "Lơ Lửng Trên Không",
		"english_title": "Up in the Air",
		"backdrop_path": "/8GT7oK5c8L6QFKsH9e528XaJ2MW.jpg",
		"imdb": 7.4,
		"release_date": "2009-09-05",
		"runtime": 110,
		"genre_ids": [
			18,
			10749
		],
		"hash": "D67968FE1FE6FB367632D1A817D091AF7F478E4D",
		"updated": "2021-12-02T04:58:26.235749+00:00"
	},
	{
		"id": 1624,
		"tmdb_id": 10198,
		"imdb_id": "tt0780521",
		"title": "Công Chúa và Chàng Ếch",
		"english_title": "The Princess and the Frog",
		"backdrop_path": "/xQACB8usmloU51lhjJCFiskGwZ4.jpg",
		"imdb": 7.1,
		"release_date": "2009-12-08",
		"runtime": 98,
		"genre_ids": [
			10749,
			10751,
			16
		],
		"hash": "C0C394D5ABF35EAEAEC91E2C57E58C361CCD3D27",
		"updated": "2021-12-02T05:00:54.694852+00:00"
	},
	{
		"id": 1625,
		"tmdb_id": 12230,
		"imdb_id": "tt0055254",
		"title": "101 Chú Chó Đốm",
		"english_title": "One Hundred and One Dalmatians",
		"backdrop_path": "/5vVd2l8MwjnTHamtcz3rvRJsvcH.jpg",
		"imdb": 7.3,
		"release_date": "1961-01-25",
		"runtime": 79,
		"genre_ids": [
			12,
			16,
			35,
			10751
		],
		"hash": "4BC78689D40E54590C93DAC2EAF9035468CD94FD",
		"updated": "2021-12-02T05:04:59.503992+00:00"
	},
	{
		"id": 1626,
		"tmdb_id": 15512,
		"imdb_id": "tt0892782",
		"title": "Quái Vật Ác Chiến Người Ngoài Hành Tinh",
		"english_title": "Monsters vs Aliens",
		"backdrop_path": "/a4BiP0NhZNP75c7JLiQKJbLZAcU.jpg",
		"imdb": 6.4,
		"release_date": "2009-03-19",
		"runtime": 94,
		"genre_ids": [
			16,
			10751,
			12,
			878
		],
		"hash": "3EA8E297A0B8B05965FCB58F9715919B5A09C477",
		"updated": "2021-12-02T05:07:10.932279+00:00"
	},
	{
		"id": 1627,
		"tmdb_id": 387,
		"imdb_id": "tt0082096",
		"title": "Trận Chiến Tàu Ngầm",
		"english_title": "Das Boot",
		"backdrop_path": "/iQH39wi0g2UX7aXZh5Dx5muHILm.jpg",
		"imdb": 8.3,
		"release_date": "1981-09-16",
		"runtime": 150,
		"genre_ids": [
			18,
			36,
			10752
		],
		"hash": "5F0D1B0BDF415962649F4036C99D5A10D69D669A",
		"updated": "2021-12-02T05:14:52.889888+00:00"
	},
	{
		"id": 1628,
		"tmdb_id": 80278,
		"imdb_id": "tt1649419",
		"title": "Thảm Họa Song Thần",
		"english_title": "The Impossible",
		"backdrop_path": "/lYPukI5ipeoQ1smlzJdMwuB4BgB.jpg",
		"imdb": 7.6,
		"release_date": "2012-09-09",
		"runtime": 113,
		"genre_ids": [
			53,
			18
		],
		"hash": "513D322F95F28F2D8B1F1BB6D65265327F8FAE76",
		"updated": "2021-12-02T05:25:02.35625+00:00"
	},
	{
		"id": 1629,
		"tmdb_id": 303991,
		"imdb_id": "tt1172049",
		"title": "Kẻ Hủy Hoại",
		"english_title": "Demolition",
		"backdrop_path": "/xo7FMjNpn07gqFOqOcV16aQ0cuX.jpg",
		"imdb": 7,
		"release_date": "2016-04-06",
		"runtime": 101,
		"genre_ids": [
			35,
			18
		],
		"hash": "7C9A5022C8293251742E5BCF5EE420E78A1EDC3C",
		"updated": "2021-12-03T15:18:16.918034+00:00"
	},
	{
		"id": 1630,
		"tmdb_id": 5255,
		"imdb_id": "tt0338348",
		"title": "The Polar Express",
		"english_title": "The Polar Express",
		"backdrop_path": "/vNudkyRBJ1OOcvHh9RdVXkF62LJ.jpg",
		"imdb": 6.6,
		"release_date": "2004-11-10",
		"runtime": 100,
		"genre_ids": [
			16,
			10751,
			12,
			14,
			35
		],
		"hash": "AC6B484A545AD1F44EA03AAAE71E7E24F908174A",
		"updated": "2021-12-07T04:24:39.364811+00:00"
	},
	{
		"id": 1631,
		"tmdb_id": 51052,
		"imdb_id": "tt1430607",
		"title": "Arthur Christmas",
		"english_title": "Arthur Christmas",
		"backdrop_path": "/9iBfNsWAIk7Yth9lv9RV5dhCLnl.jpg",
		"imdb": 7.1,
		"release_date": "2011-11-10",
		"runtime": 97,
		"genre_ids": [
			18,
			16,
			10751,
			35
		],
		"hash": "AC13962501B6105552E9AB01ED131223B4B8273D",
		"updated": "2021-12-07T04:26:13.939093+00:00"
	},
	{
		"id": 1632,
		"tmdb_id": 537116,
		"imdb_id": "tt8721424",
		"title": "tick, tick...BOOM!",
		"english_title": "tick, tick...BOOM!",
		"backdrop_path": "/t0BuUCkwoa3NrriHQdGOnCBSOdK.jpg",
		"imdb": 7.7,
		"release_date": "2021-11-11",
		"runtime": 121,
		"genre_ids": [
			18,
			10402
		],
		"hash": "C5116DB23D56FE88D3471C3A215BC0F1892C1D85",
		"updated": "2021-12-07T04:51:40.388867+00:00"
	},
	{
		"id": 1633,
		"tmdb_id": 95,
		"imdb_id": "tt0120591",
		"title": "Ngày Tận Thế",
		"english_title": "Armageddon",
		"backdrop_path": "/kI11qP6LpRsxbW3BiTpwZCseHAY.jpg",
		"imdb": 6.7,
		"release_date": "1998-07-01",
		"runtime": 151,
		"genre_ids": [
			28,
			53,
			878,
			12
		],
		"hash": "64962623F6A161302220AB7829BA08DC5AD040B8",
		"updated": "2021-12-08T02:07:55.119915+00:00"
	},
	{
		"id": 1634,
		"tmdb_id": 1585,
		"imdb_id": "tt0038650",
		"title": "Cuộc Sống Tuyệt Diệu",
		"english_title": "It's a Wonderful Life",
		"backdrop_path": "/A16RsBae9yLCsgAQgkUWbCJHZ6.jpg",
		"imdb": 8.6,
		"release_date": "1946-12-20",
		"runtime": 130,
		"genre_ids": [
			18,
			10751,
			14
		],
		"hash": "FCFD50DD87830C8DEB530A4131BDED170E162160",
		"updated": "2021-12-08T02:09:57.478779+00:00"
	},
	{
		"id": 1635,
		"tmdb_id": 510,
		"imdb_id": "tt0073486",
		"title": "Bay Trên Tổ Chim Cúc Cu",
		"english_title": "One Flew Over the Cuckoo's Nest",
		"backdrop_path": "/6M3aWkIueN1pzIWw0DZybQyT8E4.jpg",
		"imdb": 8.7,
		"release_date": "1975-11-18",
		"runtime": 133,
		"genre_ids": [
			18
		],
		"hash": "BFF25FBBAC88B6B9D24DBC18B359734015C8ABF4",
		"updated": "2021-12-08T02:13:52.266793+00:00"
	},
	{
		"id": 1636,
		"tmdb_id": 73,
		"imdb_id": "tt0120586",
		"title": "Khoảng Tối Lịch Sử Mỹ",
		"english_title": "American History X",
		"backdrop_path": "/uuMoylePCkDwhhSjO1GikIDalSl.jpg",
		"imdb": 8.5,
		"release_date": "1998-07-01",
		"runtime": 119,
		"genre_ids": [
			18
		],
		"hash": "3F2EF3A60146A38E4F65C26A10E3649D4E5C10D0",
		"updated": "2021-12-08T02:16:48.849559+00:00"
	},
	{
		"id": 1637,
		"tmdb_id": 549053,
		"imdb_id": "tt8623904",
		"title": "Giáng Sinh Năm Ấy",
		"english_title": "Last Christmas",
		"backdrop_path": "/iQ43rmwBp7fd5a2qUznlOhOiO35.jpg",
		"imdb": 6.5,
		"release_date": "2019-11-07",
		"runtime": 102,
		"genre_ids": [
			35,
			10749,
			18
		],
		"hash": "84BBA85F74B27BB9B862B950E208110D09D8746A",
		"updated": "2021-12-08T02:18:40.661281+00:00"
	},
	{
		"id": 1638,
		"tmdb_id": 645886,
		"imdb_id": "tt11233960",
		"title": "Không Thể Tha Thứ",
		"english_title": "The Unforgivable",
		"backdrop_path": "/utT4g1reTFC5aOwLI7wVXbtECx4.jpg",
		"imdb": 6.2,
		"release_date": "2021-11-24",
		"runtime": 112,
		"genre_ids": [
			18,
			53
		],
		"hash": "df6e24bb52330586d19decd5c783db9f9490b21d",
		"updated": "2021-12-11T02:23:55.648543+00:00"
	},
	{
		"id": 1639,
		"tmdb_id": 118,
		"imdb_id": "tt0367594",
		"title": "Charlie và Nhà Máy Sôcôla",
		"english_title": "Charlie and the Chocolate Factory",
		"backdrop_path": "/gbvLncaMd47pTuNjHKdCXR2gccq.jpg",
		"imdb": 6.6,
		"release_date": "2005-07-13",
		"runtime": 115,
		"genre_ids": [
			12,
			35,
			10751,
			14
		],
		"hash": "3FB0C1D2CF425A83BDBC5FB3E6B91932455A2F3B",
		"updated": "2021-12-13T02:49:02.387561+00:00"
	},
	{
		"id": 1640,
		"tmdb_id": 257088,
		"imdb_id": "tt2058673",
		"title": "Ranh Giới Chết",
		"english_title": "Point Break",
		"backdrop_path": "/5f4bHWTRkW7vHZrfM2GVV2KICsO.jpg",
		"imdb": 5.3,
		"release_date": "2015-12-03",
		"runtime": 114,
		"genre_ids": [
			28,
			80,
			53
		],
		"hash": "D22DDCC3CF8089AB1008357A2D10442DAA8DACB5",
		"updated": "2021-12-13T02:55:15.152882+00:00"
	},
	{
		"id": 1641,
		"tmdb_id": 449992,
		"imdb_id": "tt6116856",
		"title": "Màn Đêm Kéo Đến",
		"english_title": "The Night Comes for Us",
		"backdrop_path": "/s5ksD5C4sBjfeYKPOmB9mpCQLjo.jpg",
		"imdb": 7,
		"release_date": "2018-10-05",
		"runtime": 121,
		"genre_ids": [
			28,
			53,
			80
		],
		"hash": "EB7A50BBF94BFC50390CA24EA77FCADCC14DAB5B",
		"updated": "2021-12-13T02:57:40.503453+00:00"
	},
	{
		"id": 1642,
		"tmdb_id": 516329,
		"imdb_id": "tt7740510",
		"title": "Gạc",
		"english_title": "Antlers",
		"backdrop_path": "/muejeAIfCiWALDE1hLqCsKON0E7.jpg",
		"imdb": 6.3,
		"release_date": "2021-10-28",
		"runtime": 99,
		"genre_ids": [
			27,
			9648
		],
		"hash": "37E36490E56CE3CAF8E037CED68DF753F2CEB7C4",
		"updated": "2021-12-14T01:31:29.969656+00:00"
	},
	{
		"id": 1643,
		"tmdb_id": 207,
		"imdb_id": "tt0097165",
		"title": "Dead Poets Society",
		"english_title": "Dead Poets Society",
		"backdrop_path": "/gJ99rBbr1WhCcXF2CgLECsK2YGh.jpg",
		"imdb": 8.1,
		"release_date": "1989-06-02",
		"runtime": 128,
		"genre_ids": [
			18
		],
		"hash": "FB986A8112DA4188008C8B588ECB15E6DFCC536B",
		"updated": "2021-12-15T02:25:13.658093+00:00"
	},
	{
		"id": 1644,
		"tmdb_id": 12182,
		"imdb_id": "tt0981227",
		"title": "Khúc Nhạc Tình Yêu",
		"english_title": "Nick and Norah's Infinite Playlist",
		"backdrop_path": "/wuTrB8qHAmkpMSboFXjO8Uk88GA.jpg",
		"imdb": 6.6,
		"release_date": "2008-10-03",
		"runtime": 89,
		"genre_ids": [
			35,
			10402,
			18
		],
		"hash": "8759CD554E8BB6CFFCFCE529230252AC3A22D4D4",
		"updated": "2021-12-15T02:29:07.981788+00:00"
	},
	{
		"id": 1645,
		"tmdb_id": 10376,
		"imdb_id": "tt0120731",
		"title": "Huyền Thoại Về 1900",
		"english_title": "The Legend of 1900",
		"backdrop_path": "/u5RyW1HUKsFZ5x2Vfh2B1nNJHhC.jpg",
		"imdb": 8.1,
		"release_date": "1998-10-28",
		"runtime": 170,
		"genre_ids": [
			18,
			10402,
			10749
		],
		"hash": "88E9C7F0ABF8E1F6FD6FA25B860AF5585D66C444",
		"updated": "2021-12-15T02:32:18.45078+00:00"
	},
	{
		"id": 1646,
		"tmdb_id": 582681,
		"imdb_id": "tt9737688",
		"title": "Yêu Nhầm Bạn Thân",
		"english_title": "Friend Zone",
		"backdrop_path": "/fIHEiKFKOahCuKdQ4VRMIZt7GPB.jpg",
		"imdb": 7.2,
		"release_date": "2019-02-14",
		"runtime": 118,
		"genre_ids": [
			10749
		],
		"hash": "677E9A38796C267625E1D9B84B755F6C88FA663D",
		"updated": "2021-12-15T02:37:09.532+00:00"
	},
	{
		"id": 1647,
		"tmdb_id": 527261,
		"imdb_id": "tt7315484",
		"title": "Sinh Tồn Trong Câm Lặng",
		"english_title": "The Silence",
		"backdrop_path": "/1UKae3pCuVdlpaWXcLaRRSvI4c6.jpg",
		"imdb": 5.3,
		"release_date": "2019-05-16",
		"runtime": 91,
		"genre_ids": [
			27,
			18,
			53,
			14
		],
		"hash": "9B3FCA6673C884903B3A9C63C0E2B355389B8E4B",
		"updated": "2021-12-15T03:13:41.715213+00:00"
	},
	{
		"id": 1648,
		"tmdb_id": 630240,
		"imdb_id": "tt10944760",
		"title": "Titane",
		"english_title": "Titane",
		"backdrop_path": "/yJrdLTvXlwjUJ5l7dzrhCqznT8p.jpg",
		"imdb": 6.7,
		"release_date": "2021-07-14",
		"runtime": 108,
		"genre_ids": [
			18,
			53,
			27
		],
		"hash": "4338992FBDC3D2D492270EEC80EDA855E5E3EACC",
		"updated": "2021-12-16T02:02:18.351055+00:00"
	},
	{
		"id": 1650,
		"tmdb_id": 482321,
		"imdb_id": "tt7504818",
		"title": "Ron: Chú Robot Khác Biệt",
		"english_title": "Ron's Gone Wrong",
		"backdrop_path": "/hzGbPKQ4COhLv5LxMU3MB27rsmI.jpg",
		"imdb": 7.1,
		"release_date": "2021-10-15",
		"runtime": 106,
		"genre_ids": [
			16,
			878,
			10751,
			35
		],
		"hash": "E1386295A214A2DFBE488088F8319098E67B5B43",
		"updated": "2021-12-16T02:07:00.069052+00:00"
	},
	{
		"id": 1652,
		"tmdb_id": 609972,
		"imdb_id": "tt10515988",
		"title": "Hiện Tượng Siêu Nhiên: Máu Mủ",
		"english_title": "Paranormal Activity: Next of Kin",
		"backdrop_path": "/3s3vZTNzFuDkMRiRUcjFocpswI2.jpg",
		"imdb": 5.2,
		"release_date": "2021-10-29",
		"runtime": 98,
		"genre_ids": [
			27,
			9648,
			53
		],
		"hash": "EE6BC3A5379BC6EBCAC45A197367A41F1A3BD10D",
		"updated": "2021-12-16T02:18:34.038492+00:00"
	},
	{
		"id": 1658,
		"tmdb_id": 539517,
		"imdb_id": "tt9177882",
		"title": "Thành Phố Quỷ",
		"english_title": "Constantine: City of Demons - The Movie",
		"backdrop_path": "/4DDayvXxs7vwjd33fZNyWfTlCDA.jpg",
		"imdb": 7.4,
		"release_date": "2018-10-04",
		"runtime": 90,
		"genre_ids": [
			14,
			16,
			27,
			28
		],
		"hash": "4f14fe7201087799c0cd215fae121498c7f6e8b8",
		"updated": "2021-12-20T17:42:26.339+00:00"
	},
	{
		"id": 1651,
		"tmdb_id": 877013,
		"imdb_id": "tt15141632",
		"title": "Truy Tìm Kho Báu",
		"english_title": "Hell Hath No Fury",
		"backdrop_path": "/c12Kz0L9QDEWunXP6ZsPP0srGy0.jpg",
		"imdb": 5.3,
		"release_date": "2021-11-05",
		"runtime": 94,
		"genre_ids": [
			28,
			10752
		],
		"hash": "7A412D851DAF95ECA372C29217753CD1F4652FCC",
		"updated": "2021-12-16T06:16:50.809+00:00"
	},
	{
		"id": 1649,
		"tmdb_id": 454527,
		"imdb_id": "tt6823148",
		"title": "Câu Chuyện Về Benedetta",
		"english_title": "Benedetta",
		"backdrop_path": "/4H2BWdB5b0xZME79kmmJFyDVIGQ.jpg",
		"imdb": 6.7,
		"release_date": "2021-07-09",
		"runtime": 131,
		"genre_ids": [
			18,
			36,
			10749
		],
		"hash": "14832065C686BBCAA4A1D3E3B4196D7BD2806926",
		"updated": "2021-12-16T06:17:46.123+00:00"
	},
	{
		"id": 1654,
		"tmdb_id": 801,
		"imdb_id": "tt0093105",
		"title": "Chào Buổi Sáng, Việt Nam",
		"english_title": "Good Morning, Vietnam",
		"backdrop_path": "/bKYNxYkvSE4dxw8Yd4WTFG8roTQ.jpg",
		"imdb": 7.3,
		"release_date": "1987-12-23",
		"runtime": 121,
		"genre_ids": [
			35,
			18,
			10752
		],
		"hash": "CD56AB4F8D4EBDAF1F0A3B62D7CA8C6256A10FF7",
		"updated": "2021-12-17T04:02:26.948566+00:00"
	},
	{
		"id": 1655,
		"tmdb_id": 350,
		"imdb_id": "tt0458352",
		"title": "Yêu Nữ Thích Hàng Hiệu",
		"english_title": "The Devil Wears Prada",
		"backdrop_path": "/jg6xGAiAyG1P70nm8L26VO2L3oR.jpg",
		"imdb": 6.9,
		"release_date": "2006-06-30",
		"runtime": 109,
		"genre_ids": [
			35,
			18,
			10749
		],
		"hash": "2B46AB5F832EDABFA4C052EC054C702AC430E7AD",
		"updated": "2021-12-17T08:49:36.926+00:00"
	},
	{
		"id": 1657,
		"tmdb_id": 916,
		"imdb_id": "tt0062765",
		"title": "Bullitt",
		"english_title": "Bullitt",
		"backdrop_path": "/doOvLg1vEPAlCetJGIn458U5fNp.jpg",
		"imdb": 7.4,
		"release_date": "1968-10-17",
		"runtime": 113,
		"genre_ids": [
			28,
			80,
			18,
			53
		],
		"hash": "CE7CA2BA0EE135C62735E751C6668D61E481CF77",
		"updated": "2021-12-19T02:35:29.649714+00:00"
	},
	{
		"id": 1659,
		"tmdb_id": 537056,
		"imdb_id": "tt8752440",
		"title": "Người Dơi: Ác Nhân Bí Ẩn",
		"english_title": "Batman: Hush",
		"backdrop_path": "/reR0uW3nOdfKJIPIkCFHugzAPnK.jpg",
		"imdb": 6.9,
		"release_date": "2019-07-19",
		"runtime": 82,
		"genre_ids": [
			878,
			80,
			16,
			9648,
			28
		],
		"hash": "B71B4A1547D890A3260C3EFDB90B6486C779D74B",
		"updated": "2021-12-19T02:41:35.640454+00:00"
	},
	{
		"id": 1660,
		"tmdb_id": 9279,
		"imdb_id": "tt0116705",
		"title": "Cuộc Chiến Giáng Sinh",
		"english_title": "Jingle All the Way",
		"backdrop_path": "/ztYeVUUyTeKxLbxUlqdzXbM7pRn.jpg",
		"imdb": 5.7,
		"release_date": "1996-11-21",
		"runtime": 89,
		"genre_ids": [
			10751,
			35,
			12
		],
		"hash": "49909E9D82AFDF45852F903314B9D6E5CA687F69",
		"updated": "2021-12-19T02:44:20.937069+00:00"
	},
	{
		"id": 1656,
		"tmdb_id": 542178,
		"imdb_id": "tt8847712",
		"title": "Tờ Báo The French Dispatch",
		"english_title": "The French Dispatch",
		"backdrop_path": "/xQHyjcFUlhHJeK2wv9l5bsNQnoF.jpg",
		"imdb": 7.4,
		"release_date": "2021-10-21",
		"runtime": 108,
		"genre_ids": [
			18,
			35,
			10749
		],
		"hash": "B5A49805BD9F1F52494A3EFBA629826B7FA67749",
		"updated": "2022-01-14T03:45:42.205+00:00"
	},
	{
		"id": 1668,
		"tmdb_id": 476292,
		"imdb_id": "tt7339826",
		"title": "Chờ Ngày Lời Hứa Nở Hoa",
		"english_title": "Maquia: When the Promised Flower Blooms",
		"backdrop_path": "/4AxRcsZx6RaUtmcc4nsRiAx5mWW.jpg",
		"imdb": 7.5,
		"release_date": "2018-02-24",
		"runtime": 115,
		"genre_ids": [
			16,
			14,
			10749,
			18
		],
		"hash": "f977670c71bf79873f8e12b6f19299f44c1fbffd",
		"updated": "2021-12-22T02:40:47.20798+00:00"
	},
	{
		"id": 1662,
		"tmdb_id": 598331,
		"imdb_id": "tt8337158",
		"title": "Quái Thú So Chiêu",
		"english_title": "Rumble",
		"backdrop_path": "/vbcjMsuQs1BbM9vjAY3rjBvhPlg.jpg",
		"imdb": 5.9,
		"release_date": "2021-12-15",
		"runtime": 95,
		"genre_ids": [
			10751,
			35,
			16
		],
		"hash": "270B5D360DA21957F3F7E33710F10329278CFED0",
		"updated": "2021-12-22T00:54:48.610067+00:00"
	},
	{
		"id": 1664,
		"tmdb_id": 417384,
		"imdb_id": "tt3387520",
		"title": "Chuyện Kinh Dị Lúc Nữa Đêm",
		"english_title": "Scary Stories to Tell in the Dark",
		"backdrop_path": "/riRF7YoB8ilizkX0T0fbD2kQtF8.jpg",
		"imdb": 6.2,
		"release_date": "2019-08-08",
		"runtime": 108,
		"genre_ids": [
			27,
			53
		],
		"hash": "713C9D2BD64F0614FC497F912CE499EA0E3DBAE4",
		"updated": "2021-12-22T02:01:02.451601+00:00"
	},
	{
		"id": 1665,
		"tmdb_id": 293863,
		"imdb_id": "tt1655441",
		"title": "Sắc Đẹp Vĩnh Cửu",
		"english_title": "The Age of Adaline",
		"backdrop_path": "/4NRwZuUlbS7FLjVM1o5Zj9covxw.jpg",
		"imdb": 7.2,
		"release_date": "2015-04-16",
		"runtime": 112,
		"genre_ids": [
			10749,
			14,
			18
		],
		"hash": "F62B40A2335D17D92B56A4B38666665B56F59A66",
		"updated": "2021-12-22T02:04:04.850003+00:00"
	},
	{
		"id": 1666,
		"tmdb_id": 454294,
		"imdb_id": "tt6811018",
		"title": "Cậu Bé và Sứ Mệnh Thiên Tử",
		"english_title": "The Kid Who Would Be King",
		"backdrop_path": "/5NZdSaEPAByrbtFW7Rp2pUV7CU9.jpg",
		"imdb": 6,
		"release_date": "2019-01-16",
		"runtime": 120,
		"genre_ids": [
			28,
			12,
			14,
			10751
		],
		"hash": "18495F38DC861E84389216558F32085C1FA43DD8",
		"updated": "2021-12-22T02:28:54.064678+00:00"
	},
	{
		"id": 1667,
		"tmdb_id": 652837,
		"imdb_id": "tt12879624",
		"title": "Josee,  Khi Nàng Thơ Yêu",
		"english_title": "Josee, the Tiger and the Fish",
		"backdrop_path": "/dmZfiaSvBoCMTdyUsEqGql4yqul.jpg",
		"imdb": 7.9,
		"release_date": "2020-12-25",
		"runtime": 98,
		"genre_ids": [
			16,
			18,
			10749
		],
		"hash": "50D54F64C895DE7D576913F5BA50F29E6B9BDA30",
		"updated": "2021-12-22T02:35:11.492701+00:00"
	},
	{
		"id": 1669,
		"tmdb_id": 123025,
		"imdb_id": "tt2313197",
		"title": "Kỵ Sĩ Bóng Đêm Trở Lại 1",
		"english_title": "Batman: The Dark Knight Returns, Part 1",
		"backdrop_path": "/27dTeC9vYzZLJ6ub0j2ebF9ZqxV.jpg",
		"imdb": 8,
		"release_date": "2012-08-21",
		"runtime": 76,
		"genre_ids": [
			878,
			28,
			16,
			9648
		],
		"hash": "D0C50196258B143C8E65F04BB0AD51B31CCE07E5",
		"updated": "2021-12-22T02:42:21.863327+00:00"
	},
	{
		"id": 1670,
		"tmdb_id": 142061,
		"imdb_id": "tt2166834",
		"title": "Kỵ Sĩ Bóng Đêm Trở Lại 2",
		"english_title": "Batman: The Dark Knight Returns, Part 2",
		"backdrop_path": "/u3izvmbxCjd8Lc8c0D0Ib54I7Ei.jpg",
		"imdb": 8.4,
		"release_date": "2013-01-03",
		"runtime": 78,
		"genre_ids": [
			878,
			28,
			16,
			9648
		],
		"hash": "25B202358F376147364C328F04846DB56BE94DC3",
		"updated": "2021-12-22T02:43:43.622273+00:00"
	},
	{
		"id": 1661,
		"tmdb_id": 460458,
		"imdb_id": "tt6920084",
		"title": "Resident Evil: Quỷ Dữ Trỗi Dậy",
		"english_title": "Resident Evil: Welcome to Raccoon City",
		"backdrop_path": "/biVabQ1bDTfw6evfXFaUedXGKz9.jpg",
		"imdb": 5.5,
		"release_date": "2021-11-24",
		"runtime": 107,
		"genre_ids": [
			27,
			28,
			878
		],
		"hash": "EEADAE033A6251CBF798178FBD99225B7146F685",
		"updated": "2021-12-23T05:18:43.209+00:00"
	},
	{
		"id": 1671,
		"tmdb_id": 850,
		"imdb_id": "tt0085334",
		"title": "Câu Chuyện Giáng Sinh",
		"english_title": "A Christmas Story",
		"backdrop_path": "/jjQ2tRDp88PEs2JDo1G1TI9fLuV.jpg",
		"imdb": 7.9,
		"release_date": "1983-11-18",
		"runtime": 93,
		"genre_ids": [
			35,
			10751
		],
		"hash": "08BD996D4ADDF599B1788553472CDD4C5701C073",
		"updated": "2021-12-23T08:21:25.259771+00:00"
	},
	{
		"id": 1672,
		"tmdb_id": 10147,
		"imdb_id": "tt0307987",
		"title": "Ông Già Noel Xấu Tính",
		"english_title": "Bad Santa",
		"backdrop_path": "/mQBwwAxnRvkQx7sxPQSbPhm78wU.jpg",
		"imdb": 7,
		"release_date": "2003-11-26",
		"runtime": 92,
		"genre_ids": [
			18,
			35,
			80
		],
		"hash": "11E572900C3F63F31B9E7DF3EED1EBA52964C9F6",
		"updated": "2021-12-23T08:35:45.941678+00:00"
	},
	{
		"id": 1673,
		"tmdb_id": 1904,
		"imdb_id": "tt0397535",
		"title": "Hồi Ức Của Một Geisha",
		"english_title": "Memoirs of a Geisha",
		"backdrop_path": "/u6lBQ6KAlXk2ShoGDDllydhia5z.jpg",
		"imdb": 7.4,
		"release_date": "2005-12-06",
		"runtime": 146,
		"genre_ids": [
			18,
			10749,
			36
		],
		"hash": "C1E544E40960A747A0C71F0EFD6B577EB05DD55E",
		"updated": "2021-12-23T08:40:27.637302+00:00"
	},
	{
		"id": 1674,
		"tmdb_id": 618353,
		"imdb_id": "tt12794046",
		"title": "Batman: Death in the Family",
		"english_title": "Batman: Death in the Family",
		"backdrop_path": "/jwQM5dvTG84KoKwtibijqQB1maO.jpg",
		"imdb": 5.5,
		"release_date": "2020-10-13",
		"runtime": 31,
		"genre_ids": [
			16,
			28
		],
		"hash": "F96443B20B93E9FC9AAAF9EE12CB2821BC89D81E",
		"updated": "2021-12-23T08:42:15.1955+00:00"
	},
	{
		"id": 1682,
		"tmdb_id": 27581,
		"imdb_id": "tt1386588",
		"title": "Siêu Cớm Tranh Tài",
		"english_title": "The Other Guys",
		"backdrop_path": "/lWTIcUuZd5RXYq4LofJWDwM27P2.jpg",
		"imdb": 6.7,
		"release_date": "2010-08-06",
		"runtime": 107,
		"genre_ids": [
			35,
			28,
			80
		],
		"hash": "A2CE6369AC3A7DC72E47C35FB7D602DBCBA5A3BA",
		"updated": "2021-12-25T11:06:02.85654+00:00"
	},
	{
		"id": 1686,
		"tmdb_id": 2493,
		"imdb_id": "tt0093779",
		"title": "Cô Dâu Công Chúa",
		"english_title": "The Princess Bride",
		"backdrop_path": "/b5UuJpi0IuXvtCocSNFY1LhTJcE.jpg",
		"imdb": 8.1,
		"release_date": "1987-09-25",
		"runtime": 99,
		"genre_ids": [
			12,
			10751,
			14,
			35,
			10749
		],
		"hash": "955B24D7189449F1E01E878A551EBE1144BBA7AC",
		"updated": "2021-12-31T03:40:31.868856+00:00"
	},
	{
		"id": 1681,
		"tmdb_id": 429197,
		"imdb_id": "tt6266538",
		"title": "Quyền Lực Trong Bóng Tối",
		"english_title": "Vice",
		"backdrop_path": "/l5j3HWlZpmGq9PWqRlzFKOMjwfr.jpg",
		"imdb": 7.2,
		"release_date": "2018-12-25",
		"runtime": 132,
		"genre_ids": [
			18,
			36,
			35
		],
		"hash": "782ED44973AF44F151CD9A545C69FAC2B65A74E0",
		"updated": "2021-12-26T02:24:30.137+00:00"
	},
	{
		"id": 1675,
		"tmdb_id": 624860,
		"imdb_id": "tt10838180",
		"title": "Ma Trận 4: Hồi Sinh",
		"english_title": "The Matrix Resurrections",
		"backdrop_path": "/hjAI67s5P3QO8Tl04nLV0rpqbID.jpg",
		"imdb": 6,
		"release_date": "2021-12-16",
		"runtime": 148,
		"genre_ids": [
			12,
			28,
			878,
			53
		],
		"hash": "CF109D8D0CFE46BFE7AC5378B587D27B71DD87A8",
		"updated": "2021-12-24T01:43:30.651+00:00"
	},
	{
		"id": 1676,
		"tmdb_id": 504253,
		"imdb_id": "tt7236034",
		"title": "Tôi Muốn Ăn Tụy Của Cậu",
		"english_title": "I Want to Eat Your Pancreas",
		"backdrop_path": "/YLyORLsYIjC0d1TFBSpJKk7piP.jpg",
		"imdb": 8.1,
		"release_date": "2018-09-01",
		"runtime": 108,
		"genre_ids": [
			16,
			18,
			10749,
			10751
		],
		"hash": "7DB5D541B0C0671E8D34095FE7888E4E18C13440",
		"updated": "2021-12-24T01:43:40.534+00:00"
	},
	{
		"id": 1677,
		"tmdb_id": 568124,
		"imdb_id": "tt2953050",
		"title": "Vùng Đất Thần Kỳ",
		"english_title": "Encanto",
		"backdrop_path": "/1wv9TV3nSHT5UBYwxG6r0UAEVe2.jpg",
		"imdb": 7.6,
		"release_date": "2021-11-24",
		"runtime": 102,
		"genre_ids": [
			16,
			35,
			10751,
			14
		],
		"hash": "8c2327acb2143bdce6a5dbb6ba8e3fa0a46c4165",
		"updated": "2021-12-24T02:50:32.64+00:00"
	},
	{
		"id": 1678,
		"tmdb_id": 14069,
		"imdb_id": "tt0808506",
		"title": "Cô gái vượt thời gian",
		"english_title": "The Girl Who Leapt Through Time",
		"backdrop_path": "/wL7m6HNUbVDVXMGOzx7Xntq4MU6.jpg",
		"imdb": 7.7,
		"release_date": "2006-07-15",
		"runtime": 98,
		"genre_ids": [
			14,
			16,
			18,
			878
		],
		"hash": "72B88D04807469901048BF53EC4AE8135BBC5459",
		"updated": "2021-12-24T03:03:16.569938+00:00"
	},
	{
		"id": 1680,
		"tmdb_id": 17979,
		"imdb_id": "tt1067106",
		"title": "Giáng Sinh Yêu Thương",
		"english_title": "A Christmas Carol",
		"backdrop_path": "/iNLigK4bmzxljsoDUC2Gji4zNJ9.jpg",
		"imdb": 6.8,
		"release_date": "2009-11-04",
		"runtime": 94,
		"genre_ids": [
			16,
			10751,
			18,
			14
		],
		"hash": "C6308A9A184BF06462CCDCA0169701382D945AA3",
		"updated": "2021-12-25T01:23:28.049088+00:00"
	},
	{
		"id": 1687,
		"tmdb_id": 331482,
		"imdb_id": "tt3281548",
		"title": "Những Người Phụ Nữ Bé Nhỏ",
		"english_title": "Little Women",
		"backdrop_path": "/mRDCFRs1xOjDaA9tYLQHMkd1pdA.jpg",
		"imdb": 7.8,
		"release_date": "2019-12-25",
		"runtime": 135,
		"genre_ids": [
			18,
			10749
		],
		"hash": "6125A021965289FA8C6732D0EB0652A619279DC3",
		"updated": "2021-12-31T03:43:20.468148+00:00"
	},
	{
		"id": 1688,
		"tmdb_id": 74,
		"imdb_id": "tt0407304",
		"title": "Đại Chiến Thế Giới",
		"english_title": "War of the Worlds",
		"backdrop_path": "/1EkioJ0biPTl6oJCFE7m5Utga2U.jpg",
		"imdb": 6.5,
		"release_date": "2005-06-28",
		"runtime": 117,
		"genre_ids": [
			12,
			53,
			878
		],
		"hash": "961CBA21168BB8B7BB5C34F0C65DFDDCA0CF1D6D",
		"updated": "2021-12-31T10:24:23.847373+00:00"
	},
	{
		"id": 1683,
		"tmdb_id": 32985,
		"imdb_id": "tt0970452",
		"title": "Chiến Binh Thế Kỷ",
		"english_title": "Solomon Kane",
		"backdrop_path": "/lxKg1SGMFR9MMSTxu8hdlJshChE.jpg",
		"imdb": 6.1,
		"release_date": "2009-09-16",
		"runtime": 104,
		"genre_ids": [
			12,
			14,
			28
		],
		"hash": "FB670D56168EF6C8181081B5EE0D0ECEF525F843",
		"updated": "2021-12-26T03:52:36.778327+00:00"
	},
	{
		"id": 1684,
		"tmdb_id": 615666,
		"imdb_id": "tt10187208",
		"title": "Hành Trình Tìm Cha",
		"english_title": "A Boy Called Christmas",
		"backdrop_path": "/4A0gA4iprBHEhKfUGTngIhbN9Ic.jpg",
		"imdb": 6.7,
		"release_date": "2021-11-25",
		"runtime": 104,
		"genre_ids": [
			10751,
			12,
			14
		],
		"hash": "99C6BF63264912385F3A1FA867316A20B0DB729C",
		"updated": "2021-12-30T02:53:44.905+00:00"
	},
	{
		"id": 1685,
		"tmdb_id": 9655,
		"imdb_id": "tt0454945",
		"title": "Cô Ấy Là Đàn Ông",
		"english_title": "She's the Man",
		"backdrop_path": "/yiMcTsn3jwhgrSEnZ9T5wVp8tWL.jpg",
		"imdb": 6.3,
		"release_date": "2006-03-17",
		"runtime": 105,
		"genre_ids": [
			35,
			18,
			10751,
			10749
		],
		"hash": "43AF1994A4C58EAA3CE6F82067D808E9048C09BB",
		"updated": "2021-12-31T03:37:49.978083+00:00"
	},
	{
		"id": 1679,
		"tmdb_id": 646380,
		"imdb_id": "tt11286314",
		"title": "Đừng Nhìn Lên",
		"english_title": "Don't Look Up",
		"backdrop_path": "/nklNtTTQfBALJwUaEOhkrwvxTHU.jpg",
		"imdb": 7.3,
		"release_date": "2021-12-07",
		"runtime": 138,
		"genre_ids": [
			35,
			18,
			878
		],
		"hash": "DAB452AB6FE809CCB574C2B7E6AE52048B6DDC8C",
		"updated": "2021-12-31T15:02:44.539+00:00"
	},
	{
		"id": 1689,
		"tmdb_id": 899082,
		"imdb_id": "tt16116174",
		"title": "Kỷ Niệm 20 Năm Harry Potter: Trở Lại Hogwarts",
		"english_title": "Harry Potter 20th Anniversary: Return to Hogwarts",
		"backdrop_path": "/AseaidrApXgik6SsbhOKbhmD5Nz.jpg",
		"imdb": 8.3,
		"release_date": "2022-01-01",
		"runtime": 103,
		"genre_ids": [
			99
		],
		"hash": "180D1CEB84CDE71D4461E71421C1107199518695",
		"updated": "2022-01-05T02:51:40.879+00:00"
	},
	{
		"id": 1690,
		"tmdb_id": 425909,
		"imdb_id": "tt4513678",
		"title": "Biệt Đội Săn Ma: Chuyển Kiếp",
		"english_title": "Ghostbusters: Afterlife",
		"backdrop_path": "/EnDlndEvw6Ptpp8HIwmRcSSNKQ.jpg",
		"imdb": 7.4,
		"release_date": "2021-11-11",
		"runtime": 124,
		"genre_ids": [
			35,
			14,
			28,
			12,
			878
		],
		"hash": "D4FCD32B3D8ED74640E28DF354AEAE908871FA4E",
		"updated": "2022-01-12T02:40:15.504+00:00"
	},
	{
		"id": 1691,
		"tmdb_id": 438695,
		"imdb_id": "tt6467266",
		"title": "Đấu Trường Âm Nhạc 2",
		"english_title": "Sing 2",
		"backdrop_path": "/srFi3oLy8tBcpq07xusnAE5XhwE.jpg",
		"imdb": 7.6,
		"release_date": "2021-12-01",
		"runtime": 110,
		"genre_ids": [
			16,
			35,
			10751,
			10402
		],
		"hash": "6A8D3F8021D391A62E8729FDD41438C2F1AF303D",
		"updated": "2022-01-07T16:42:26.563+00:00"
	},
	{
		"id": 1693,
		"tmdb_id": 18491,
		"imdb_id": "tt0169858",
		"title": "Tân Thế Kỷ Evangelion",
		"english_title": "Neon Genesis Evangelion: The End of Evangelion",
		"backdrop_path": "/xYAnyvRVnvkXixum0CK9S8OD7cc.jpg",
		"imdb": 8.1,
		"release_date": "1997-07-19",
		"runtime": 87,
		"genre_ids": [
			18,
			878,
			16,
			28
		],
		"hash": "340FAA16E6FA3CA06AAE1BD1C2306A3823FD2FC7",
		"updated": "2022-01-12T01:39:02.067816+00:00"
	},
	{
		"id": 1694,
		"tmdb_id": 11299,
		"imdb_id": "tt0275277",
		"title": "Cánh Cổng Thiên Đàng",
		"english_title": "Cowboy Bebop: The Movie",
		"backdrop_path": "/1uAO4Tve9a5l9QNhOscLyrOeGyE.jpg",
		"imdb": 7.9,
		"release_date": "2001-09-01",
		"runtime": 115,
		"genre_ids": [
			28,
			16,
			878
		],
		"hash": "54393C4BAA352ED66890C4A8EE5610A53A6D47DE",
		"updated": "2022-01-12T01:41:11.239391+00:00"
	},
	{
		"id": 1695,
		"tmdb_id": 11101,
		"imdb_id": "tt0108211",
		"title": "Trận Chiến Stalingrad",
		"english_title": "Stalingrad",
		"backdrop_path": "/cTHccDdFHmFef6RKtjoWmIyrSke.jpg",
		"imdb": 7.5,
		"release_date": "1993-01-20",
		"runtime": 134,
		"genre_ids": [
			18,
			36,
			10752
		],
		"hash": "A4BB67B25671D00BECBFC18D858BF31259F84E4E",
		"updated": "2022-01-12T02:14:02.898392+00:00"
	},
	{
		"id": 1696,
		"tmdb_id": 415214,
		"imdb_id": "tt6044910",
		"title": "Điệp Vụ Tam Giác Vàng",
		"english_title": "Operation Mekong",
		"backdrop_path": "/xUmZHFZa85KxIKzsIdr16oGMjCH.jpg",
		"imdb": 6.6,
		"release_date": "2016-09-30",
		"runtime": 124,
		"genre_ids": [
			28,
			12,
			80,
			10752
		],
		"hash": "050B4A76DA8C8DE481761BF730832ED6BC194437",
		"updated": "2022-01-12T02:15:47.816767+00:00"
	},
	{
		"id": 1697,
		"tmdb_id": 395991,
		"imdb_id": "tt3829920",
		"title": "Không Lối Thoát Hiểm",
		"english_title": "Only the Brave",
		"backdrop_path": "/q6AKkZs4i49rHThE8nJalbEghCK.jpg",
		"imdb": 7.6,
		"release_date": "2017-09-22",
		"runtime": 134,
		"genre_ids": [
			18,
			28,
			36
		],
		"hash": "02431A1145B35439436C15F55FFE0C6900CBB9A1",
		"updated": "2022-01-12T02:18:07.210612+00:00"
	},
	{
		"id": 1698,
		"tmdb_id": 2048,
		"imdb_id": "tt0343818",
		"title": "Tôi, Robot",
		"english_title": "I, Robot",
		"backdrop_path": "/ye6UgODVjReIktsUzFA3EQqQaum.jpg",
		"imdb": 7.1,
		"release_date": "2004-07-15",
		"runtime": 115,
		"genre_ids": [
			28,
			878
		],
		"hash": "2E383843FAB7C3801E52CAA1C677A65F78377CF7",
		"updated": "2022-01-12T02:20:07.168672+00:00"
	},
	{
		"id": 1699,
		"tmdb_id": 435615,
		"imdb_id": "tt5918982",
		"title": "Người Sở Hữu",
		"english_title": "Possessor Uncut",
		"backdrop_path": "/sB2vzjOIcUZbLI7zC2hpn2rWZXV.jpg",
		"imdb": 6.5,
		"release_date": "2020-10-02",
		"runtime": 104,
		"genre_ids": [
			27,
			53,
			878,
			9648
		],
		"hash": "6EC52D993E3BCEF2DDDE760CC710D8B2BD78F1D8",
		"updated": "2022-01-12T02:22:45.657114+00:00"
	},
	{
		"id": 1700,
		"tmdb_id": 74135,
		"imdb_id": "tt1525836",
		"title": "Sinh Tử Luân Hồi: Đáp Án Hoàn Hảo",
		"english_title": "Gantz: Perfect Answer",
		"backdrop_path": "/kZPGVdP2tOepWdpgF1b0Ie6dOP7.jpg",
		"imdb": 6.2,
		"release_date": "2011-04-23",
		"runtime": 141,
		"genre_ids": [
			28,
			9648,
			878,
			27
		],
		"hash": "1F6EFADB0B46F556B342655759F5BB53D8E8CEC3",
		"updated": "2022-01-12T02:25:54.406985+00:00"
	},
	{
		"id": 1701,
		"tmdb_id": 282631,
		"imdb_id": "tt3541262",
		"title": "Đại Thủy Chiến",
		"english_title": "The Admiral: Roaring Currents",
		"backdrop_path": "/nCuY3xg1E5WmdQHHAUoRXR8VyKS.jpg",
		"imdb": 7.1,
		"release_date": "2014-07-30",
		"runtime": 126,
		"genre_ids": [
			10752,
			28,
			18,
			36
		],
		"hash": "D7A2DB8DC6013178627D12880EBF237E80EE99C9",
		"updated": "2022-01-12T02:33:41.174604+00:00"
	},
	{
		"id": 1702,
		"tmdb_id": 258480,
		"imdb_id": "tt2402927",
		"title": "Carol",
		"english_title": "Carol",
		"backdrop_path": "/44YBC9OEP9OCAyOgMnPWPfRbQ84.jpg",
		"imdb": 7.3,
		"release_date": "2015-11-20",
		"runtime": 118,
		"genre_ids": [
			10749,
			18
		],
		"hash": "AD8C875C4AB4EABFF9F758F4AE529F410DB839C3",
		"updated": "2022-01-12T02:36:09.189041+00:00"
	},
	{
		"id": 1703,
		"tmdb_id": 634,
		"imdb_id": "tt0243155",
		"title": "Bridget Jones's Diary",
		"english_title": "Bridget Jones's Diary",
		"backdrop_path": "/4EhElcy6G5LnF3JiG2Unp5whkfU.jpg",
		"imdb": 6.7,
		"release_date": "2001-04-13",
		"runtime": 97,
		"genre_ids": [
			35,
			10749,
			18
		],
		"hash": "385CE60B7CBD1BDE6788F9C316362A893B45E5EB",
		"updated": "2022-01-12T02:38:26.227937+00:00"
	},
	{
		"id": 1704,
		"tmdb_id": 2064,
		"imdb_id": "tt0114924",
		"title": "Khi Anh Hôn Mê",
		"english_title": "While You Were Sleeping",
		"backdrop_path": "/dLrP3UNladtXj4ELjfewFQjGwwX.jpg",
		"imdb": 6.7,
		"release_date": "1995-04-21",
		"runtime": 103,
		"genre_ids": [
			10749,
			35
		],
		"hash": "6D2AE62C02095474C15C19E8D30ECB00FFF871B2",
		"updated": "2022-01-12T02:39:58.784074+00:00"
	},
	{
		"id": 1600,
		"tmdb_id": 566525,
		"imdb_id": "tt9376612",
		"title": "Shang-Chi và Huyền Thoại Thập Luân",
		"english_title": "Shang-Chi and the Legend of the Ten Rings",
		"backdrop_path": "/6S2fCbyS7YltAAX2E3c2CzWe5lh.jpg",
		"imdb": 7.5,
		"release_date": "2021-09-01",
		"runtime": 132,
		"genre_ids": [
			28,
			12,
			14
		],
		"hash": "98B61FD9DF89D0F4D08A23C14A0DEDFE38F81EFB",
		"updated": "2022-01-14T03:58:52.409+00:00"
	},
	{
		"id": 1706,
		"tmdb_id": 483906,
		"imdb_id": "tt4139588",
		"title": "Sát Thủ Tái Xuất",
		"english_title": "Polar",
		"backdrop_path": "/kgDAn8CDANj9thBik9nvjG8s7zu.jpg",
		"imdb": 6.3,
		"release_date": "2019-01-25",
		"runtime": 118,
		"genre_ids": [
			28,
			80,
			18
		],
		"hash": "3A9591EF495A7D4EAFEEC6E7123899546ED228A2",
		"updated": "2022-01-14T04:06:02.136711+00:00"
	},
	{
		"id": 1710,
		"tmdb_id": 33909,
		"imdb_id": "tt1027718",
		"title": "Phố Wall: Ma Lực Đồng Tiền",
		"english_title": "Wall Street: Money Never Sleeps",
		"backdrop_path": "/kYYp3n3bsetQQBhnoOxTQFgDMgS.jpg",
		"imdb": 6.2,
		"release_date": "2010-09-02",
		"runtime": 133,
		"genre_ids": [
			18,
			80
		],
		"hash": "41312992FFDBE85AB844D32B7F121BCE2C303C4D",
		"updated": "2022-01-17T12:23:06.355199+00:00"
	},
	{
		"id": 1705,
		"tmdb_id": 4824,
		"imdb_id": "tt0119395",
		"title": "The Jackal",
		"english_title": "The Jackal",
		"backdrop_path": "/9J3FFPOriLoRL4flEmFZUH8R1z.jpg",
		"imdb": 6.4,
		"release_date": "1997-11-14",
		"runtime": 124,
		"genre_ids": [
			28,
			53,
			12,
			80
		],
		"hash": "34B6A3D15447432EFB72F6AD3CD2CB71483A2FB2",
		"updated": "2022-01-14T03:51:06.095388+00:00"
	},
	{
		"id": 1708,
		"tmdb_id": 591538,
		"imdb_id": "tt10095582",
		"title": "Bi Kịch Của Macbeth",
		"english_title": "The Tragedy of Macbeth",
		"backdrop_path": "/3HW2zLZz6jFWJLF3FOh01cwxinj.jpg",
		"imdb": 7.6,
		"release_date": "2021-12-05",
		"runtime": 105,
		"genre_ids": [
			18,
			10752
		],
		"hash": "E24EDDF97A536D9F1F5B5ECAAD834A14DDF3B4A9",
		"updated": "2022-01-14T14:08:27.918246+00:00"
	},
	{
		"id": 1709,
		"tmdb_id": 585083,
		"imdb_id": "tt9848626",
		"title": "Khách Sạn Huyền Bí 4: Ma Cà Rồng Biến Hình",
		"english_title": "Hotel Transylvania: Transformania",
		"backdrop_path": "/uG4DoSFDqOaaOjhpCXsmcYFVl4V.jpg",
		"imdb": 6.6,
		"release_date": "2022-01-14",
		"runtime": 98,
		"genre_ids": [
			10751,
			16,
			14,
			35,
			12
		],
		"hash": "812b2db839631e019c2a52cfc00b39d113f17f99",
		"updated": "2022-01-14T14:11:13.402781+00:00"
	},
	{
		"id": 1692,
		"tmdb_id": 524434,
		"imdb_id": "tt9032400",
		"title": "Chủng Tộc Bất Tử",
		"english_title": "Eternals",
		"backdrop_path": "/yqFmYiLKR13eJCqMfeGKOcbsuJf.jpg",
		"imdb": 6.6,
		"release_date": "2021-11-03",
		"runtime": 157,
		"genre_ids": [
			28,
			12,
			14,
			878
		],
		"hash": "1d9dc0766c179357dfe1b3b3a75e7bd819408d1d",
		"updated": "2022-01-16T01:54:06.306+00:00"
	},
	{
		"id": 1707,
		"tmdb_id": 592695,
		"imdb_id": "tt8550054",
		"title": "Ngôi Sao Khiêu Dâm",
		"english_title": "Pleasure",
		"backdrop_path": "/y0LhmaMYpFkIfrUlOpJYTVMH2eA.jpg",
		"imdb": 6.5,
		"release_date": "2021-10-08",
		"runtime": 105,
		"genre_ids": [
			18
		],
		"hash": "D70C2E5AC9097D2874D6771BC6963E0DD7A02010",
		"updated": "2022-01-18T00:48:41.085+00:00"
	},
	{
		"id": 1711,
		"tmdb_id": 245842,
		"imdb_id": "tt2328678",
		"title": "Con Gái Của Nhà Vua",
		"english_title": "The King's Daughter",
		"backdrop_path": "/9A4cGprwuAf3ME6jaD9oPLprKsm.jpg",
		"imdb": 6,
		"release_date": "2022-01-21",
		"runtime": 94,
		"genre_ids": [
			14,
			18,
			10749
		],
		"hash": "5B813FA06537917261DADAF84A73A3DEC08F2895",
		"updated": "2022-01-18T00:53:21.742+00:00"
	}
]
export default MOVIES_DATA;