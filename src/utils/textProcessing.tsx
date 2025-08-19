import React from "react";
import { Highlight } from "@/components/Highlight";
import { Text } from "@/components/Text";

interface WordToken {
  text: string;
  punctuation: string;
  highlight: boolean;
  type: "attribute" | "potencyEffect" | "word";
}

/**
 * Split a token into [A-Za-z]+ + trailing punctuation.
 * Anything not matching this returns the original token with no punctuation split.
 */
const separateWordAndPunctuation = (word: string) => {
  const match = word.match(/^([A-Za-z]+)([.,;:!?]*)$/);

  return match
    ? { word: match[1], punctuation: match[2] }
    : { word, punctuation: "" };
};

const isAttribute = (word: string): boolean => /^[A-Z]$/.test(word);

const isPotencyEffect = (words: string[], index: number): boolean => {
  const { word: first } = separateWordAndPunctuation(words[index]);
  if (!(index + 2 < words.length)) return false;

  const middle = words[index + 1];
  if (middle !== "<") return false;

  const { word: third } = separateWordAndPunctuation(words[index + 2]);
  return isAttribute(first) && /^[A-Za-z]+$/.test(third);
};

const createAttributeToken = (word: string): WordToken => {
  const { word: cleanWord, punctuation } = separateWordAndPunctuation(word);
  return { text: cleanWord, punctuation, highlight: true, type: "attribute" };
};

const createPotencyEffectToken = (
  words: string[],
  index: number
): WordToken => {
  const { word: first } = separateWordAndPunctuation(words[index]);
  const { word: third, punctuation } = separateWordAndPunctuation(
    words[index + 2]
  );

  return {
    text: `${first} ${words[index + 1]} ${third}`,
    punctuation,
    highlight: true,
    type: "potencyEffect",
  };
};

const createWordToken = (word: string): WordToken => {
  const { word: cleanWord, punctuation } = separateWordAndPunctuation(word);
  return { text: cleanWord, punctuation, highlight: false, type: "word" };
};

const renderToken = (token: WordToken, index: number) => {
  const spacing = index > 0 ? " " : "";
  if (token.highlight) {
    return (
      <React.Fragment key={index}>
        {spacing}
        <Highlight>{token.text}</Highlight>
        {token.punctuation}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment key={index}>
      {spacing}
      {token.text}
      {token.punctuation}
    </React.Fragment>
  );
};

// =========================
// Public API (full tokenizer)
// =========================

/**
 * Tokenizes text and highlights both cases:
 * 1) Attribute: single CAPITAL letter
 * 2) Potency Effect: "A < Word"
 */
const tokenizeWords = (text: string): WordToken[] => {
  const words = text.split(" ");
  const tokens: WordToken[] = [];

  for (let i = 0; i < words.length; i++) {
    const { word: current } = separateWordAndPunctuation(words[i]);

    if (isPotencyEffect(words, i)) {
      tokens.push(createPotencyEffectToken(words, i));
      i += 2;
    } else if (isAttribute(current)) {
      tokens.push(createAttributeToken(words[i]));
    } else {
      tokens.push(createWordToken(words[i]));
    }
  }

  return tokens;
};

export const processTierResultText = (text: string) => {
  const tokens = tokenizeWords(text);

  return <Text>{tokens.map(renderToken)}</Text>;
};
