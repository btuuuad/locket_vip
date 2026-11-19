(function () {
    const WORKER_DOMAIN = "shoptubim.chuanhtunt.workers.dev";
    const TARGET_URL = "https://" + WORKER_DOMAIN + "/generateFilteredImage?module=Shop_Tu_Bim";

    const STICKER_ID_MAP = {
        // --- 12 FILTER ĐỘC QUYỀN SHOP TÚ BỈM ---
        "tb_cyberpunk_neon": "tb_cyberpunk_neon",
        "tb_ghibli_anime": "tb_ghibli_anime",
        "tb_hk_90s_film": "tb_hk_90s_film",
        "tb_clay_3d_chibi": "tb_clay_3d_chibi",
        "tb_snowy_tokyo": "tb_snowy_tokyo",
        "tb_angel_wings": "tb_angel_wings",
        "tb_cat_ears_y2k": "tb_cat_ears_y2k",
        "tb_boss_mafia": "tb_boss_mafia",
        "tb_sakura_spring": "tb_sakura_spring",
        "tb_retro_ccd": "tb_retro_ccd",
        "tb_kr_photobooth_4cut": "tb_kr_photobooth_4cut",
        "tb_kr_photobooth_bw": "tb_kr_photobooth_bw",

        // --- CÁC FILTER MẶC ĐỊNH & PHOTOBOOTH ---
        "stk_rose_flower": "rose_flower", "rose_flower": "rose_flower",
        "stk_shrek_ogre": "shrek_ogre", "shrek_ogre": "shrek_ogre",
        "stk_superhero_cape": "superhero_cape", "superhero_cape": "superhero_cape",
        "stk_spooky_ghost": "spooky_ghost", "spooky_ghost": "spooky_ghost",
        "stk_pirate_hat": "pirate_hat", "pirate_hat": "pirate_hat",
        "stk_volcano_lava": "volcano_lava", "volcano_lava": "volcano_lava",
        "stk_rain_storm": "rain_storm", "rain_storm": "rain_storm",
        "stk_fortnite_llama": "fortnite_llama", "fortnite_llama": "fortnite_llama",
        "stk_watercolor_art": "watercolor_art", "watercolor_art": "watercolor_art",
        "stk_golden_hour": "golden_hour", "golden_hour": "golden_hour",
        "stk_jungle_leaf": "jungle_leaf", "jungle_leaf": "jungle_leaf",
        "stk_cute_zombie": "cute_zombie", "cute_zombie": "cute_zombie",
        "stk_fireworks": "fireworks", "fireworks": "fireworks",
        "stk_new_year_2026": "new_year_2026", "new_year_2026": "new_year_2026",
        "stk_harry_potter": "harry_potter", "harry_potter": "harry_potter",
        "stk_minecraft": "minecraft", "minecraft": "minecraft",
        "stk_fire_flame": "fire_flame", "fire_flame": "fire_flame",
        "stk_giant_spider": "giant_spider", "giant_spider": "giant_spider",
        "stk_ocean_underwater": "ocean_underwater", "ocean_underwater": "ocean_underwater",
        "stk_ufo_alien": "ufo_alien", "ufo_alien": "ufo_alien",
        "stk_dio_disco": "disco_lights", "disco": "disco_lights",
        "stk_dio_cowboy": "cowboy_cowgirl", "cowboy": "cowboy_cowgirl",
        "stk_dio_looksmaxing": "beard", "looksmaxing": "beard",
        "stk_dio_bearded": "beard", "bearded": "beard",
        "stk_dio_bleached_hair": "blonde_bleached", "bleached_hair": "blonde_bleached",
        "stk_dio_bob": "bob_cut", "bob": "bob_cut",
        "stk_dio_elf": "elf_cutout", "elf": "elf_cutout",
        "stk_dio_santa": "santa_cutout", "santa": "santa_cutout",
        "stk_dio_easter_chick": "easter_chick_cutout", "easter_chick": "easter_chick_cutout",
        "stk_dio_bye_brows": "bye_brows", "bye_brows": "bye_brows",
        "stk_dio_bowling_ball": "bowling_ball", "bowling_ball": "bowling_ball",
        "stk_dio_tatted": "tatted", "tatted": "tatted",
        "stk_dio_mohawk": "mohawk", "mohawk": "mohawk",
        "stk_dio_braces": "braces", "braces": "braces",
        "stk_dio_slimed": "slimed", "slimed": "slimed",
        "stk_dio_princess": "princess", "princess": "princess",
        "stk_dio_flower_crown": "flower_crown", "flower_crown": "flower_crown",
        "stk_dio_giraffe": "giraffe", "giraffe": "giraffe",
        "stk_dio_clown": "clown", "clown": "clown",
        "stk_dio_leprechaun": "leprechaun", "leprechaun": "leprechaun",
        "stk_dio_lucky_face": "lucky_face", "lucky_face": "lucky_face",
        "stk_dio_influencer": "influencer", "influencer": "influencer"
    };

    const AI_PROMPTS = {
        // --- 12 PROMPT ĐỘC QUYỀN ---
        "tb_cyberpunk_neon": "Keep the person's exact face, expression, and pose. Transform the lighting into dramatic cyberpunk neon with glowing cyan and magenta rim lights reflecting on skin and clothes, futuristic night city bokeh in the background, cinematic 8k.",
        "tb_ghibli_anime": "Redraw the entire photo in a hand-painted Studio Ghibli anime art style. Keep the person's exact pose, hairstyle, and likeness, with soft watercolor skies, warm sunlit colors, and delicate linework.",
        "tb_hk_90s_film": "Keep the person, pose, and background completely unchanged. Apply a nostalgic 1990s Hong Kong Wong Kar-wai cinema film grade with moody emerald-green shadows, warm amber highlights, subtle halation glow, and fine 35mm film grain.",
        "tb_clay_3d_chibi": "Transform the person and the entire scene into a cute handcrafted 3D stop-motion clay figure aesthetic. Preserve the exact pose, outfit colors, and facial expression with soft studio lighting and smooth matte clay texture.",
        "tb_snowy_tokyo": "Keep the person's face, pose, and framing identical. Add gentle falling snowflakes in the air, soft cold winter daylight, light frost on the background, and a cozy knitted scarf around the person's neck.",
        "tb_angel_wings": "Keep the person's exact pose, face, and background. Add realistic glowing white feathered angel wings extending naturally from behind their shoulders and a subtle soft golden halo floating above their head.",
        "tb_cat_ears_y2k": "Keep the person's exact face, pose, and background. Put a fluffy black-and-white plush cat-ear beanie hat on their head and add subtle Y2K silver star glitter stickers near the cheekbones, natural iPhone flash look.",
        "tb_boss_mafia": "Keep the person's exact face, hairstyle, pose, and background. Dress them in a tailored luxury black Italian suit with a crisp white shirt and sleek dark sunglasses, sharp editorial lighting.",
        "tb_sakura_spring": "Keep the person's exact pose, face, and framing. Fill the air with soft pink cherry blossom petals drifting in the breeze, dreamy pastel spring sunlight, and soft depth-of-field bokeh.",
        "tb_retro_ccd": "Keep the person, pose, and background 100% unchanged. Simulate a vintage 2005 Sony Cyber-shot CCD digital camera look with direct flash highlights, slightly cool shadows, crisp retro digital texture, and subtle lens bloom.",
        "tb_kr_photobooth_4cut": "Transform this photo into an authentic Korean Life4Cuts 4-cut photobooth collage (2x2 grid) with a clean pastel cream border. Keep the person's exact face, hairstyle, and outfit across 4 slightly varied candid cute poses, bright soft studio flash lighting, natural clear skin, Seoul photobooth aesthetic.",
        "tb_kr_photobooth_bw": "Transform this photo into a sleek Korean monochrome black-and-white 4-cut photobooth collage (2x2 grid) with a minimal matte black frame. Keep the person's exact face, hairstyle, and outfit, high-contrast studio flash, crisp editorial film grain, stylish Seoul self-photo studio aesthetic.",

        // --- PROMPT ĐÃ TỐI ƯU NGẮN GỌN CHO CÁC FILTER CŨ ---
        "rose_flower": "Keep the exact pose, face, and background. Place a single realistic red rose held lightly in the person's mouth, natural iPhone camera look.",
        "shrek_ogre": "Transform the person into Shrek with green skin, ogre ears, and rustic vest while keeping their exact pose, expression, hairstyle, and background.",
        "superhero_cape": "Dress the person in a sleek blue-and-red superhero suit with a flowing red cape, preserving their exact face, pose, and background.",
        "spooky_ghost": "Keep the person, pose, and background identical. Subtly blend a translucent, realistic spooky ghost figure in the background.",
        "pirate_hat": "Dress the person as a Caribbean pirate with a weathered tricorn hat and pirate coat, keeping their exact face, pose, and background.",
        "volcano_lava": "Keep the person's face, pose, and framing identical. Replace the ground and surroundings with glowing molten lava, magma cracks, and warm volcanic sparks.",
        "rain_storm": "Keep the person's exact face, pose, and background. Dress them in dramatic gothic Victorian Wuthering Heights attire with moody cinematic storm lighting.",
        "fortnite_llama": "Render the entire photo and person in vibrant 3D Fortnite video game graphics style, preserving the exact pose and composition.",
        "watercolor_art": "Repaint the entire photo as an expressive hand-painted watercolor artwork with soft pigment bleeds and brush strokes, keeping likeness and pose.",
        "golden_hour": "Keep everything identical, relight the entire scene with warm late-afternoon golden hour sunlight, soft lens glow, and long natural shadows.",
        "jungle_leaf": "Keep the person's face and pose unchanged, seamlessly overgrow the background with dense lush tropical jungle vines and leaves.",
        "cute_zombie": "Turn the person into a stylized spooky zombie with pale textured skin while preserving their exact pose, expression, and background.",
        "fireworks": "Keep the person and pose identical, fill the night sky background with vibrant exploding fireworks casting colorful reflections onto the subject.",
        "new_year_2026": "Keep the person's face, pose, and background identical. Add festive novelty party glasses reading '2026' on their face.",
        "harry_potter": "Dress the person in a Hogwarts wizard robe and house scarf from Harry Potter, keeping their exact face, pose, and background.",
        "minecraft": "Convert the entire scene and person into blocky 3D Minecraft style characters and voxel blocks while preserving the original framing.",
        "fire_flame": "Keep the person's exact face, pose, and background. Add a dramatic cinematic flame effect suspended safely in front of their mouth with warm glow on nearby clothing.",
        "giant_spider": "Keep the person's exact pose and background. Place a realistic detailed spider perched naturally on their shoulder or head.",
        "ocean_underwater": "Keep the person's exact pose and expression, submerge the entire scene underwater with blue aquatic lighting, caustic rays, and tiny air bubbles.",
        "ufo_alien": "Keep the person and pose identical, add a subtle glowing UFO hovering in the distant sky or a small alien peeking in the background.",
        "disco_lights": "Keep the person's face, pose, and background identical. Cast multicolored rotating disco ball light spots and beams across the entire scene, natural iPhone camera look.",
        "influencer": "Keep the person's exact pose and background. Apply hyper-glam influencer makeup with sculpted brows, dramatic long lashes, and glossy plump lips.",
        "princess": "Keep the person's exact face, pose, and background. Style them as a fairytale prince or princess with royal attire and a sparkling crown.",
        "beard": "Keep the person's exact face, pose, and background. Add a dense, realistic full-length beard and mustache matching their natural hair color.",
        "slimed": "Keep the person's exact face, pose, and background. Pour thick glossy green Nickelodeon-style slime splashing and dripping over their head and shoulders.",
        "cowboy_cowgirl": "Keep the person's exact face, pose, and background. Dress them in classic Western cowboy or cowgirl attire with a matching hat.",
        "clown": "Keep the person's exact face, pose, and background. Style them as a circus clown with a colorful curly wig, red rubber nose, and playful costume.",
        "tatted": "Keep the person's exact face, pose, and background. Add a realistic blackletter forehead tattoo reading 'Locket' and a tiny heart tattoo under the eye.",
        "bye_brows": "Keep the person's exact face, pose, and background. Cleanly remove all eyebrow hair, leaving natural skin texture and pores.",
        "bowling_ball": "Keep the person's exact face, pose, and background. Remove all scalp hair to make their head completely bald, smooth, and naturally shiny.",
        "blonde_bleached": "Keep the person's exact face, pose, and background. Change their hair to a tight bleached-blonde buzz cut following the natural skull contour.",
        "bob_cut": "Keep the person's exact face, pose, and background. Style their hair into a clean chin-length bob cut keeping their natural hair color and texture.",
        "mohawk": "Keep the person's exact face, pose, and background. Style their hair into a punk mohawk with closely shaved sides and a raised center strip.",
        "braces": "Keep the person's exact pose and background. Show them with a natural smile revealing multicolored orthodontic braces on their teeth.",
        "flower_crown": "Keep the person's exact face, pose, and background. Place a delicate natural wildflower and greenery crown resting on top of their head.",
        "giraffe": "Keep the person's exact face, pose, and background. Dress them in a plush giraffe onesie costume with a giraffe hood.",
        "leprechaun": "Keep the person's exact face, pose, and background. Dress them in a green leprechaun outfit with a buckled top hat.",
        "lucky_face": "Keep the person's exact face, pose, and background. Add subtle nose freckles and glossy small green clover stickers on both cheeks.",
        "elf_cutout": "Keep the person's exact face, pose, and background. Dress them as a festive Christmas Elf.",
        "santa_cutout": "Keep the person's exact face, pose, and background. Dress them as Santa Claus with a red hat and white trim.",
        "easter_chick_cutout": "Keep the person's exact face, pose, and background. Dress them in a fluffy yellow Easter chick onesie with a rounded hood.",

        // --- PHOTOBOOTH ---
        "photobooth": "Transform into a Korean Life4Cuts 4-cut photobooth aesthetic, soft bright studio flash, clear skin, modern iPhone look.",
        "photobooth_4cut": "Transform into a Korean Life4Cuts 4-cut photobooth aesthetic, soft bright studio flash, clear skin, modern iPhone look.",
        "photobooth_cute": "Apply a cute pastel Korean photobooth aesthetic with soft dreamy lighting and crisp facial detail.",
        "pb_strawberry": "Apply a sweet pastel strawberry Korean photobooth aesthetic with soft pink lighting and clean clarity.",
        "pb_vintage": "Apply a warm 90s vintage film photobooth aesthetic with soft grain and nostalgic tones.",
        "pb_galaxy": "Apply a dreamy galaxy night-sky photobooth aesthetic with subtle starry ambient glow.",
        "pb_holo_4cut": "Apply a Y2K holographic chrome photobooth aesthetic with iridescent highlights.",
        "pb_scrapbook_ripped_4cut": "Apply a warm vintage scrapbook paper photobooth aesthetic with soft film texture.",
        "pb_ripped_paper_4cut": "Apply an artistic ripped-paper collage photobooth aesthetic with soft shadows.",
        "pb_denim_ripped_2x2": "Apply a stylish 90s cool-tone denim photobooth aesthetic with crisp studio flash.",
        "frame_classic_pb": "Apply a classic high-contrast black-and-white film photobooth aesthetic with dramatic soft lighting."
    };

    // =========================================================================
    // 1. CHIỀU REQUEST: ĐÍNH KÈM PROMPT & ĐIỀU HƯỚNG SANG WORKER SHOP TÚ BỈM
    // =========================================================================
    if (typeof $response === "undefined") {
        try {
            if (!$request) return $done({});

            let headers = Object.assign({}, $request.headers || {});
            for (let k of Object.keys(headers)) {
                let lower = k.toLowerCase();
                if (lower === "content-length" || lower === "host") {
                    delete headers[k];
                }
            }

            headers["Host"] = WORKER_DOMAIN;
            headers["X-Module-Origin"] = "Shop_Tu_Bim";
            headers["Content-Type"] = "application/json";

            let bodyStr = $request.body;
            if (bodyStr) {
                try {
                    let bodyObj = JSON.parse(bodyStr);
                    let targetData = bodyObj.data || bodyObj;
                    let rawFilterId = targetData.filterId || targetData.filter_id || targetData.sticker_id || targetData.stickerId || "";
                    let mappedKey = STICKER_ID_MAP[rawFilterId] || rawFilterId;
                    if (AI_PROMPTS[mappedKey]) {
                        targetData.prompt = AI_PROMPTS[mappedKey];
                    }
                    bodyStr = JSON.stringify(bodyObj);
                } catch (err) {}
            }

            return $done({
                url: TARGET_URL,
                headers: headers,
                body: bodyStr
            });
        } catch (e) {
            return $done({});
        }
    }

    // =========================================================================
    // 2. CHIỀU RESPONSE: DỰ PHÒNG XÓA LỖI NẾU CÓ
    // =========================================================================
    try {
        if ($response && $response.body) {
            let resObj = JSON.parse($response.body);
            delete resObj.error;
            delete resObj.errors;
            if (resObj.result) {
                delete resObj.result.error;
                delete resObj.result.errors;
            }
            return $done({
                status: 200,
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    "Access-Control-Allow-Origin": "*"
                },
                body: JSON.stringify(resObj)
            });
        }
    } catch (e) {}

    return $done({});
})();
