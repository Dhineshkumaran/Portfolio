import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const notesDirectory = path.join(process.cwd(), 'content/notes');

export type NoteMeta = {
    slug: string;
    title: string;
    date: string;
    description: string;
};

export type Note = {
    meta: NoteMeta;
    content: string;
};

export function getNotesMeta(): NoteMeta[] {
    if (!fs.existsSync(notesDirectory)) return [];
    
    const fileNames = fs.readdirSync(notesDirectory);
    const allNotesData = fileNames.map((fileName) => {
        const slug = fileName.replace(/\.mdx?$/, '');
        const fullPath = path.join(notesDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        
        const { data } = matter(fileContents);
        
        return {
            slug,
            title: data.title || slug,
            date: data.date || '',
            description: data.description || '',
        };
    });
    
    return allNotesData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getNoteBySlug(slug: string): Note | null {
    try {
        const fullPathMDX = path.join(notesDirectory, `${slug}.mdx`);
        const fullPathMD = path.join(notesDirectory, `${slug}.md`);
        
        let fullPath = fullPathMDX;
        if (fs.existsSync(fullPathMD)) fullPath = fullPathMD;
        
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);
        
        return {
            meta: {
                slug,
                title: data.title || slug,
                date: data.date || '',
                description: data.description || '',
            },
            content,
        };
    } catch (e) {
        return null;
    }
}
