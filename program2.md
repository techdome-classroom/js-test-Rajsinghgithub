# Difficulty Level: Moderate to Advanced

# Problem Statement:


Secret Decoder Ring Challenge

Imagine you have a secret decoder ring with two special symbols:

Star Symbol (*): This symbol acts like a wildcard and can stand in for any series of letters, including no letters at all.
Question Mark (?): This symbol can replace a single letter in a coded message.
Your job is to compare a secret message (the input string) with a decoder key (the pattern) using this decoder ring.

The Rules:

The decoder key must match the entire secret message, not just part of it.
The question mark can replace any single letter in the message.
The star symbol can replace any sequence of letters (including none) in the message.
Examples:

Message: "aa" Decoder Key: "a" Match: False ("a" doesn't fit the whole message)
Message: "aa" Decoder Key: "*" Match: True (the star can represent both "a"s)
Message: "cb" Decoder Key: "?a" Match: False (the question mark can only replace one letter, and "a" doesn't match "b")
Challenge:

Given a secret message and a decoder key using these symbols, can you tell if the decoder key unlocks the message (meaning it matches the entire message)?