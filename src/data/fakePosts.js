const fakePosts = [
    {
        id: 1,
        title: 'Stone in Sunset',
        description: 'A beautiful sunset over a stone with mesmerizing colors.',
        impact: 'Inspires creativity and peace of mind.',
        searchDirection: 'Search for nature photography.',
        person: 'Talha Waleed',
        date: '12th Jan 2022',
        image: '/assets/post1.jpg',
        summary: "The sun dips below the horizon, painting the sky with a breathtaking palette of colors. Oranges, pinks, and purples blend seamlessly, creating a mesmerizing spectacle. In the foreground, a solitary stone stands tall, its weathered surface bathed in the warm glow of the setting sun. The light casts long shadows, accentuating the stone's rugged texture and intricate patterns The interplay of light and shadow creates a dramatic effect, highlighting the stone's unique contours and crevices. The colors of the sunset seem to seep into the stone, infusing it with a vibrant energy. It's as if the stone is absorbing the beauty of the moment, holding it captive within its depths.The scene evokes a sense of tranquility and wonder. The stillness of the stone contrasts with the dynamism of the changing sky, creating a powerful visual narrative. It's a reminder of the fleeting beauty of nature and the enduring strength of the earth.As the last rays of sunlight fade, the stone is enveloped in a soft, ethereal light. The colors of the sunset begin to soften, giving way to a gentle twilight. The stone remains, a silent witness to the spectacle, its presence a testament to the enduring power of nature.The image of the stone in sunset is a timeless one, a reminder of the beauty and wonder of the natural world. It's a scene that inspires awe and contemplation, inviting us to pause and appreciate the simple beauty of the moment."
    },
    {
        id: 2,
        title: 'Two Persons on Sea',
        description: 'Two people enjoying a serene view of the sea.',
        impact: 'Promotes the value of companionship.',
        searchDirection: 'Search for sea adventures.',
        person: 'John Doe',
        date: '15th Feb 2022',
        image: '/assets/post2.jpg',
        summary: "The sun dips below the horizon, painting the sky with a breathtaking palette of colors. Oranges, pinks, and purples blend seamlessly, creating a mesmerizing spectacle. In the foreground, a solitary stone stands tall, its weathered surface bathed in the warm glow of the setting sun. The light casts long shadows, accentuating the stone's rugged texture and intricate patterns The interplay of light and shadow creates a dramatic effect, highlighting the stone's unique contours and crevices. The colors of the sunset seem to seep into the stone, infusing it with a vibrant energy. It's as if the stone is absorbing the beauty of the moment, holding it captive within its depths.The scene evokes a sense of tranquility and wonder. The stillness of the stone contrasts with the dynamism of the changing sky, creating a powerful visual narrative. It's a reminder of the fleeting beauty of nature and the enduring strength of the earth.As the last rays of sunlight fade, the stone is enveloped in a soft, ethereal light. The colors of the sunset begin to soften, giving way to a gentle twilight. The stone remains, a silent witness to the spectacle, its presence a testament to the enduring power of nature.The image of the stone in sunset is a timeless one, a reminder of the beauty and wonder of the natural world. It's a scene that inspires awe and contemplation, inviting us to pause and appreciate the simple beauty of the moment."

    },
    {
        id: 3,
        title: 'Girls with Dog on Trip',
        description: 'A memorable trip with a loyal companion.',
        impact: 'Encourages traveling with pets.',
        searchDirection: 'Search for pet-friendly trips.',
        person: 'Jane Smith',
        date: '20th Mar 2022',
        image: '/assets/post3.jpg',
        summary: "The sun dips below the horizon, painting the sky with a breathtaking palette of colors. Oranges, pinks, and purples blend seamlessly, creating a mesmerizing spectacle. In the foreground, a solitary stone stands tall, its weathered surface bathed in the warm glow of the setting sun. The light casts long shadows, accentuating the stone's rugged texture and intricate patterns The interplay of light and shadow creates a dramatic effect, highlighting the stone's unique contours and crevices. The colors of the sunset seem to seep into the stone, infusing it with a vibrant energy. It's as if the stone is absorbing the beauty of the moment, holding it captive within its depths.The scene evokes a sense of tranquility and wonder. The stillness of the stone contrasts with the dynamism of the changing sky, creating a powerful visual narrative. It's a reminder of the fleeting beauty of nature and the enduring strength of the earth.As the last rays of sunlight fade, the stone is enveloped in a soft, ethereal light. The colors of the sunset begin to soften, giving way to a gentle twilight. The stone remains, a silent witness to the spectacle, its presence a testament to the enduring power of nature.The image of the stone in sunset is a timeless one, a reminder of the beauty and wonder of the natural world. It's a scene that inspires awe and contemplation, inviting us to pause and appreciate the simple beauty of the moment."

    },
    {
        id: 4,
        title: 'Train on Bridge Passing Sea',
        description: 'A train journey over a stunning sea bridge.',
        impact: 'Celebrates engineering marvels.',
        searchDirection: 'Search for train adventures.',
        person: 'Alex Johnson',
        date: '25th Apr 2022',
        image: '/assets/post4.jpg',
        summary: "The sun dips below the horizon, painting the sky with a breathtaking palette of colors. Oranges, pinks, and purples blend seamlessly, creating a mesmerizing spectacle. In the foreground, a solitary stone stands tall, its weathered surface bathed in the warm glow of the setting sun. The light casts long shadows, accentuating the stone's rugged texture and intricate patterns The interplay of light and shadow creates a dramatic effect, highlighting the stone's unique contours and crevices. The colors of the sunset seem to seep into the stone, infusing it with a vibrant energy. It's as if the stone is absorbing the beauty of the moment, holding it captive within its depths.The scene evokes a sense of tranquility and wonder. The stillness of the stone contrasts with the dynamism of the changing sky, creating a powerful visual narrative. It's a reminder of the fleeting beauty of nature and the enduring strength of the earth.As the last rays of sunlight fade, the stone is enveloped in a soft, ethereal light. The colors of the sunset begin to soften, giving way to a gentle twilight. The stone remains, a silent witness to the spectacle, its presence a testament to the enduring power of nature.The image of the stone in sunset is a timeless one, a reminder of the beauty and wonder of the natural world. It's a scene that inspires awe and contemplation, inviting us to pause and appreciate the simple beauty of the moment."

    },
    {
        id: 5,
        title: 'Building Construction',
        description: 'An awe-inspiring view of modern construction.',
        impact: 'Highlights urban development.',
        searchDirection: 'Search for construction sites.',
        person: 'Emily Davis',
        date: '10th May 2022',
        image: '/assets/post5.jpg',
        summary: "The sun dips below the horizon, painting the sky with a breathtaking palette of colors. Oranges, pinks, and purples blend seamlessly, creating a mesmerizing spectacle. In the foreground, a solitary stone stands tall, its weathered surface bathed in the warm glow of the setting sun. The light casts long shadows, accentuating the stone's rugged texture and intricate patterns The interplay of light and shadow creates a dramatic effect, highlighting the stone's unique contours and crevices. The colors of the sunset seem to seep into the stone, infusing it with a vibrant energy. It's as if the stone is absorbing the beauty of the moment, holding it captive within its depths.The scene evokes a sense of tranquility and wonder. The stillness of the stone contrasts with the dynamism of the changing sky, creating a powerful visual narrative. It's a reminder of the fleeting beauty of nature and the enduring strength of the earth.As the last rays of sunlight fade, the stone is enveloped in a soft, ethereal light. The colors of the sunset begin to soften, giving way to a gentle twilight. The stone remains, a silent witness to the spectacle, its presence a testament to the enduring power of nature.The image of the stone in sunset is a timeless one, a reminder of the beauty and wonder of the natural world. It's a scene that inspires awe and contemplation, inviting us to pause and appreciate the simple beauty of the moment."

    },
    {
        id: 6,
        title: 'Snowfall on House',
        description: 'A cozy house covered in snow.',
        impact: 'Showcases the beauty of winter.',
        searchDirection: 'Search for winter destinations.',
        person: 'Chris Lee',
        date: '15th Jun 2022',
        image: '/assets/post6.jpg',
        summary: "The sun dips below the horizon, painting the sky with a breathtaking palette of colors. Oranges, pinks, and purples blend seamlessly, creating a mesmerizing spectacle. In the foreground, a solitary stone stands tall, its weathered surface bathed in the warm glow of the setting sun. The light casts long shadows, accentuating the stone's rugged texture and intricate patterns The interplay of light and shadow creates a dramatic effect, highlighting the stone's unique contours and crevices. The colors of the sunset seem to seep into the stone, infusing it with a vibrant energy. It's as if the stone is absorbing the beauty of the moment, holding it captive within its depths.The scene evokes a sense of tranquility and wonder. The stillness of the stone contrasts with the dynamism of the changing sky, creating a powerful visual narrative. It's a reminder of the fleeting beauty of nature and the enduring strength of the earth.As the last rays of sunlight fade, the stone is enveloped in a soft, ethereal light. The colors of the sunset begin to soften, giving way to a gentle twilight. The stone remains, a silent witness to the spectacle, its presence a testament to the enduring power of nature.The image of the stone in sunset is a timeless one, a reminder of the beauty and wonder of the natural world. It's a scene that inspires awe and contemplation, inviting us to pause and appreciate the simple beauty of the moment."

    },
    {
        id: 7,
        title: 'Climbing Hill with Friends',
        description: 'An adventurous hike with friends.',
        impact: 'Motivates teamwork and adventure.',
        searchDirection: 'Search for hill climbing tips.',
        person: 'Patricia Brown',
        date: '20th Jul 2022',
        image: '/assets/post7.jpg',
        summary: "The sun dips below the horizon, painting the sky with a breathtaking palette of colors. Oranges, pinks, and purples blend seamlessly, creating a mesmerizing spectacle. In the foreground, a solitary stone stands tall, its weathered surface bathed in the warm glow of the setting sun. The light casts long shadows, accentuating the stone's rugged texture and intricate patterns The interplay of light and shadow creates a dramatic effect, highlighting the stone's unique contours and crevices. The colors of the sunset seem to seep into the stone, infusing it with a vibrant energy. It's as if the stone is absorbing the beauty of the moment, holding it captive within its depths.The scene evokes a sense of tranquility and wonder. The stillness of the stone contrasts with the dynamism of the changing sky, creating a powerful visual narrative. It's a reminder of the fleeting beauty of nature and the enduring strength of the earth.As the last rays of sunlight fade, the stone is enveloped in a soft, ethereal light. The colors of the sunset begin to soften, giving way to a gentle twilight. The stone remains, a silent witness to the spectacle, its presence a testament to the enduring power of nature.The image of the stone in sunset is a timeless one, a reminder of the beauty and wonder of the natural world. It's a scene that inspires awe and contemplation, inviting us to pause and appreciate the simple beauty of the moment."

    },
    {
        id: 8,
        title: 'Onboard in Nature with Family',
        description: 'A peaceful family outing in nature.',
        impact: 'Fosters family bonding.',
        searchDirection: 'Search for nature retreats.',
        person: 'Michael Green',
        date: '1st Aug 2022',
        image: '/assets/post8.jpg',
        summary: "The sun dips below the horizon, painting the sky with a breathtaking palette of colors. Oranges, pinks, and purples blend seamlessly, creating a mesmerizing spectacle. In the foreground, a solitary stone stands tall, its weathered surface bathed in the warm glow of the setting sun. The light casts long shadows, accentuating the stone's rugged texture and intricate patterns The interplay of light and shadow creates a dramatic effect, highlighting the stone's unique contours and crevices. The colors of the sunset seem to seep into the stone, infusing it with a vibrant energy. It's as if the stone is absorbing the beauty of the moment, holding it captive within its depths.The scene evokes a sense of tranquility and wonder. The stillness of the stone contrasts with the dynamism of the changing sky, creating a powerful visual narrative. It's a reminder of the fleeting beauty of nature and the enduring strength of the earth.As the last rays of sunlight fade, the stone is enveloped in a soft, ethereal light. The colors of the sunset begin to soften, giving way to a gentle twilight. The stone remains, a silent witness to the spectacle, its presence a testament to the enduring power of nature.The image of the stone in sunset is a timeless one, a reminder of the beauty and wonder of the natural world. It's a scene that inspires awe and contemplation, inviting us to pause and appreciate the simple beauty of the moment."

    },
    {
        id: 9,
        title: 'Success in Life',
        description: 'Celebrating success with loved ones.',
        impact: 'Inspires motivation and achievement.',
        searchDirection: 'Search for success stories.',
        person: 'Sophia White',
        date: '5th Sep 2022',
        image: '/assets/post9.jpg',
        summary: "The sun dips below the horizon, painting the sky with a breathtaking palette of colors. Oranges, pinks, and purples blend seamlessly, creating a mesmerizing spectacle. In the foreground, a solitary stone stands tall, its weathered surface bathed in the warm glow of the setting sun. The light casts long shadows, accentuating the stone's rugged texture and intricate patterns The interplay of light and shadow creates a dramatic effect, highlighting the stone's unique contours and crevices. The colors of the sunset seem to seep into the stone, infusing it with a vibrant energy. It's as if the stone is absorbing the beauty of the moment, holding it captive within its depths.The scene evokes a sense of tranquility and wonder. The stillness of the stone contrasts with the dynamism of the changing sky, creating a powerful visual narrative. It's a reminder of the fleeting beauty of nature and the enduring strength of the earth.As the last rays of sunlight fade, the stone is enveloped in a soft, ethereal light. The colors of the sunset begin to soften, giving way to a gentle twilight. The stone remains, a silent witness to the spectacle, its presence a testament to the enduring power of nature.The image of the stone in sunset is a timeless one, a reminder of the beauty and wonder of the natural world. It's a scene that inspires awe and contemplation, inviting us to pause and appreciate the simple beauty of the moment."

    },
];

export default fakePosts;
