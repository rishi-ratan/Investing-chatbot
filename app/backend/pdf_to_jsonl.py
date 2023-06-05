import pdfplumber
import json

# Open your PDF file
with pdfplumber.open("C:\\Users\\rishi\\OneDrive\\Learning\\CodingPrep\\Investing-chatbot\\data\\Venture Deals.pdf") as pdf:
    data = []
    
    # Iterate over all pages in the PDF
    for page in pdf.pages:
        
        # Extract text from the current page
        page_text = page.extract_text()
        
        # Add the page text to your data (you might want to process this further)
        data.append({"page": page.page_number, "text": page_text})
        
# Open a JSON Lines file and write your data to it, one object per line
with open("your_file.jsonl", "w", encoding="utf-8") as f:
    for entry in data:
        f.write(json.dumps(entry, ensure_ascii=False) + "\n")
