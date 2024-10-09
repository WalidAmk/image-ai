// app/api/posts/route.ts

import { supabase } from '@/lib/supabaseClient';
import { NextRequest, NextResponse } from 'next/server';
import { image_info } from '@/types/supabase'; 
import { auth } from '@clerk/nextjs/server'

export async function POST(request: NextRequest) {

    try {
        
        const body = await request.json();
        const { userId }: { userId: string | null } = auth()
        const { name, public_id, url, width, height} = body;

        // Validate that required fields are present
        if (!userId || !name || !public_id || !url || !width || !height ) {
        return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // Insert the new row into the 'posts' table
        const { data, error } = await supabase
        .from('image_info')
        .insert([{ user_id: userId, name, public_id, url, width, height}]);

        if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
        }

        // Respond with the inserted data
        return NextResponse.json({ data }, { status: 201 });

    } catch (err) {
        // Handle any other unexpected errors
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
