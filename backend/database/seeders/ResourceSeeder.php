<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ResourceSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('resources')->insert([
            [
                'title' => 'Introduction to Calculus',
                'description' => 'A beginner-friendly course covering limits, differentiation, and integration.',
                'url' => 'https://www.khanacademy.org/math/calculus-1',
                'category' => 'Maths',
            ],
            [
                'title' => 'Cognitive Psychology: Memory Models',
                'description' => 'Overview of the multi-store model and working memory model.',
                'url' => 'https://www.simplypsychology.org/memory.html',
                'category' => 'Psychology',
            ],
            [
                'title' => 'JavaScript ES6+ Crash Course',
                'description' => 'Modern JavaScript tutorial covering ES6+ features.',
                'url' => 'https://www.youtube.com/watch?v=NCwa_xi0Uuc',
                'category' => 'Computer Science',
            ],
            [
                'title' => 'Cell Structure & Organelles',
                'description' => 'Detailed comparison of prokaryotic and eukaryotic cells.',
                'url' => 'https://www.bbc.co.uk/bitesize/guides/zx48jty/revision/1',
                'category' => 'Biology',
            ],
            [
                'title' => 'Organic Chemistry Functional Groups',
                'description' => 'Guide covering key organic chemistry functional groups.',
                'url' => 'https://chem.libretexts.org/Bookshelves/Organic_Chemistry',
                'category' => 'Chemistry',
            ],
            [
                'title' => 'How to Write Academic Essays',
                'description' => 'Covers structuring essays, referencing, and critical writing.',
                'url' => 'https://student.unsw.edu.au/essay-writing-basics',
                'category' => 'Study Skills',
            ],
            [
                'title' => 'Shakespeare: Analysis of Macbeth',
                'description' => 'Key themes, character analysis, and important quotes.',
                'url' => 'https://www.sparknotes.com/shakespeare/macbeth',
                'category' => 'Literature',
            ],
            [
                'title' => 'The Cold War Timeline',
                'description' => 'Structured explanation of Cold War events between 1945–1991.',
                'url' => 'https://www.history.com/topics/cold-war',
                'category' => 'History',
            ],
            [
                'title' => 'Newton’s Laws of Motion',
                'description' => 'Interactive simulations explaining motion and forces.',
                'url' => 'https://phet.colorado.edu/en/simulation/forces-and-motion-basics',
                'category' => 'Physics',
            ],
            [
                'title' => 'Probability Fundamentals',
                'description' => 'Intro to probability, sample spaces, and expected value.',
                'url' => 'https://www.khanacademy.org/math/statistics-probability',
                'category' => 'Maths',
            ],
            [
                'title' => 'Anxiety Disorders Overview',
                'description' => 'Covers symptoms, causes, and research on anxiety disorders.',
                'url' => 'https://www.verywellmind.com/anxiety-disorder-overview-4177204',
                'category' => 'Psychology',
            ],
            [
                'title' => 'Learn Python Programming',
                'description' => 'Interactive Python tutorials covering core programming concepts.',
                'url' => 'https://www.learnpython.org/',
                'category' => 'Computer Science',
            ],
            [
                'title' => 'Enzymes & Reaction Rates',
                'description' => 'Explanation of enzyme structure and factors affecting activity.',
                'url' => 'https://www.biologyonline.com/dictionary/enzyme',
                'category' => 'Biology',
            ],
            [
                'title' => 'Chemical Bonding Revision',
                'description' => 'Overview of ionic, covalent, and metallic bonding.',
                'url' => 'https://www.bbc.co.uk/bitesize/guides/zgvd7hv/revision/1',
                'category' => 'Chemistry',
            ],
            [
                'title' => 'Study Techniques Backed by Science',
                'description' => 'Details on active recall, spaced repetition, and effective studying.',
                'url' => 'https://www.sciencedirect.com/science/article/pii/S0360131520300731',
                'category' => 'Study Skills',
            ],
            [
                'title' => 'Romantic Poets Analysis',
                'description' => 'Annotated poems and context from major Romantic poets.',
                'url' => 'https://www.poetryfoundation.org/collections/144090/romanticism',
                'category' => 'Literature',
            ],
            [
                'title' => 'World War II Overview',
                'description' => 'Causes, events, and consequences of World War II.',
                'url' => 'https://www.bbc.co.uk/bitesize/topics/zk94jxs',
                'category' => 'History',
            ],
            [
                'title' => 'Electricity & Circuits',
                'description' => 'Covers Ohm’s law, circuits, and physics practice problems.',
                'url' => 'https://www.khanacademy.org/science/physics/circuits-topic',
                'category' => 'Physics',
            ],
            [
                'title' => 'Algorithms & Big-O Notation',
                'description' => 'Explanation of time complexity, sorting, and recursion.',
                'url' => 'https://www.programiz.com/dsa',
                'category' => 'Computer Science',
            ],
            [
                'title' => 'Evaluating Research Methods',
                'description' => 'Strengths and weaknesses of psychological research designs.',
                'url' => 'https://www.simplypsychology.org/research-methods.html',
                'category' => 'Psychology',
            ],
        ]);
    }
}
