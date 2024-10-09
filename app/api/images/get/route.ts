import { supabase } from '@/lib/supabaseClient';
import { NextRequest, NextResponse } from 'next/server';
import { image_info } from '@/types/supabase'; 
import { auth } from '@clerk/nextjs/server'

export async function GET(request: NextRequest) {

    try {
        const { userId} = auth();
        // Insert the new row into the 'posts' table
        const { data, error } = await supabase
        .from('image_info')
        .select()
        .eq('user_id', userId )

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
