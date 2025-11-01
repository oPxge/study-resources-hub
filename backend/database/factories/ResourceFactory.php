<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ResourceFactory extends Factory
{
    public function definition(): array
    {
        $titles = [
            "Intro to JavaScript (Beginner Guide)",
            "GCSE Maths: Algebra Basics",
            "A-Level Biology: Photosynthesis Summary",
            "Understanding Cybersecurity Fundamentals",
            "World War II Overview – History Notes",
            "Python Programming Crash Course",
            "GCSE English Literature: Macbeth Revision",
            "Chemistry: Atomic Structure Explained",
            "Study Skills: How to Revise Effectively",
            "Computer Networks: OSI Model Explained",
            "Khan Academy – Algebra Foundations",
            "Crash Course – World History Playlist",
            "Java Basics – Object-Oriented Programming",
            "GCSE Physics – Forces & Motion Notes",
            "A-Level Economics – Supply & Demand"
        ];

        $descriptions = [
            "A clear and easy introduction with examples and practice tasks.",
            "A detailed set of notes perfect for GCSE preparation.",
            "Concise revision sheet covering definitions and diagrams.",
            "A beginner-friendly explanation with modern examples.",
            "Well-structured notes covering causes, events and consequences.",
            "A beginner programming guide with hands-on exercises.",
            "Covers themes, characters, quotes and exam prep tips.",
            "A simple breakdown with diagrams and example questions.",
            "Proven revision techniques supported by research.",
            "Explains each OSI layer with real-world applications.",
            "Interactive maths lessons with practice questions.",
            "Short videos that explain key events in world history.",
            "Learn OOP concepts in Java with examples.",
            "Step-by-step physics revision for GCSE students.",
            "Economics concepts explained in a clear, visual way."
        ];

        $categories = [
            "Computing",
            "Mathematics",
            "Biology",
            "Chemistry",
            "Physics",
            "English",
            "History",
            "Economics",
            "Study Skills"
        ];

        $links = [
            "https://www.khanacademy.org/",
            "https://www.bbc.co.uk/bitesize",
            "https://www.w3schools.com/",
            "https://www.youtube.com/",
            "https://www.tutorialspoint.com/"
        ];

        return [
            'title' => $this->faker->randomElement($titles),
            'description' => $this->faker->randomElement($descriptions),
            'url' => $this->faker->randomElement($links),
            'category' => $this->faker->randomElement($categories),
        ];
    }
}
