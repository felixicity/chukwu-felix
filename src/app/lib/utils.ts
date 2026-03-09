export function calculateReadingTime(content: string): string {
      // 1. Remove MDX/HTML tags and special characters using Regex
      const plainText = content.replace(/[#*`<>!\[\]\(\)]/g, "");

      // 2. Split by whitespace and filter out empty strings
      const words = plainText.trim().split(/\s+/).length;

      // 3. Define average reading speed (WPM)
      const wordsPerMinute = 200;

      // 4. Calculate and round up
      const readingTime = Math.ceil(words / wordsPerMinute);

      return `${readingTime} min read`;
}
