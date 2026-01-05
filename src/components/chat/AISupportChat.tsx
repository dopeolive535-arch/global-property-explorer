import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, X, Send, Bot, User, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const initialMessages: Message[] = [
  {
    id: '1',
    role: 'assistant',
    content: "Hello! I'm your AI property assistant. I can help you find properties, answer questions about listings, compare options, and guide you through the rental or buying process. How can I assist you today?",
    timestamp: new Date(),
  },
];

const suggestedQuestions = [
  "What apartments are available in Kampala?",
  "Show me properties under $500/month",
  "What's the difference between a studio and bedsitter?",
  "How do I book a property viewing?",
];

const AISupportChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateAIResponse = (userMessage: string): string => {
    const lowercaseMessage = userMessage.toLowerCase();
    
    if (lowercaseMessage.includes('apartment') && lowercaseMessage.includes('kampala')) {
      return "Great choice! Kampala has a vibrant apartment market. In areas like Kololo, you'll find luxury penthouses from $1,500-3,000/month. Nakasero offers business district living at $800-2,000/month. For more affordable options, check Ntinda or Bugolobi at $400-800/month. Would you like me to show you specific listings in any of these areas?";
    }
    
    if (lowercaseMessage.includes('under') && lowercaseMessage.includes('500')) {
      return "For properties under $500/month, you have several options:\n\n• Self-contained units in Nansana ($300-400)\n• Bedsitters near Makerere University ($150-250)\n• Shared rooms in hostels ($100-200)\n• Studios in Ntinda ($350-500)\n\nThese are typically unfurnished. Would you like me to filter by any specific location or property type?";
    }
    
    if (lowercaseMessage.includes('studio') && lowercaseMessage.includes('bedsitter')) {
      return "Great question! Here's the difference:\n\n**Studio Apartment:**\n• Open-plan design with separate bathroom\n• Kitchen area integrated into living space\n• Usually larger (300-500 sqft)\n• More privacy and independence\n\n**Bedsitter:**\n• Single room with basic kitchenette\n• Bathroom may be shared or attached\n• Smaller (150-300 sqft)\n• More affordable option\n\nWould you like to see examples of either?";
    }
    
    if (lowercaseMessage.includes('booking') || lowercaseMessage.includes('viewing')) {
      return "Booking a property viewing is easy! Here's how:\n\n1. **Find a property** you like on our platform\n2. **Click 'Schedule Visit'** on the listing\n3. **Select your preferred date and time**\n4. **Confirm your contact details**\n\nOur system will automatically arrange the viewing. You'll receive confirmation via email with all the details. Would you like me to help you find properties to view?";
    }
    
    if (lowercaseMessage.includes('price') || lowercaseMessage.includes('cost')) {
      return "Property prices vary by location and type:\n\n**Uganda (Kampala):**\n• Studios: $300-600/month\n• 1-2 bed apartments: $500-1,500/month\n• Houses: $800-3,000/month\n\n**Kenya (Nairobi):**\n• Apartments: $400-2,000/month\n• Houses: $1,000-4,000/month\n\nPrices shown in USD but can be converted to local currency. What's your budget range?";
    }
    
    return "Thank you for your question! I can help you with:\n\n• **Property Search** - Find homes by location, price, or type\n• **Category Information** - Learn about different property types\n• **Pricing Details** - Understand costs and payment terms\n• **Booking Process** - Schedule viewings and inquiries\n• **Location Guides** - Discover neighborhoods across Africa\n\nWhat would you like to know more about?";
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: generateAIResponse(userMessage.content),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleSuggestedQuestion = (question: string) => {
    setInputValue(question);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-glow hover:shadow-large transition-all duration-300 flex items-center justify-center group",
          isOpen && "scale-0 opacity-0"
        )}
      >
        <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-secondary rounded-full flex items-center justify-center">
          <Sparkles className="w-2.5 h-2.5 text-secondary-foreground" />
        </span>
      </button>

      {/* Chat Panel */}
      <div
        className={cn(
          "fixed bottom-6 right-6 z-50 w-[90vw] max-w-md bg-background rounded-2xl shadow-large border border-border overflow-hidden transition-all duration-300",
          isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-4 pointer-events-none"
        )}
        style={{ height: 'min(600px, 80vh)' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border bg-muted/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <Bot className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">AI Property Assistant</h3>
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                Online • Ready to help
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 rounded-full hover:bg-muted flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4" style={{ height: 'calc(100% - 140px)' }}>
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "flex gap-3",
                message.role === 'user' && "flex-row-reverse"
              )}
            >
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",
                message.role === 'assistant' ? "bg-primary" : "bg-muted"
              )}>
                {message.role === 'assistant' ? (
                  <Bot className="w-4 h-4 text-primary-foreground" />
                ) : (
                  <User className="w-4 h-4 text-muted-foreground" />
                )}
              </div>
              <div className={cn(
                "max-w-[80%] rounded-2xl px-4 py-3",
                message.role === 'assistant' 
                  ? "bg-muted text-foreground rounded-tl-sm" 
                  : "bg-primary text-primary-foreground rounded-tr-sm"
              )}>
                <p className="text-sm whitespace-pre-line">{message.content}</p>
                <p className={cn(
                  "text-xs mt-1",
                  message.role === 'assistant' ? "text-muted-foreground" : "text-primary-foreground/70"
                )}>
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <Bot className="w-4 h-4 text-primary-foreground" />
              </div>
              <div className="bg-muted rounded-2xl rounded-tl-sm px-4 py-3">
                <div className="flex gap-1">
                  <span className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Questions */}
        {messages.length <= 2 && (
          <div className="px-4 pb-2">
            <p className="text-xs text-muted-foreground mb-2">Suggested questions:</p>
            <div className="flex flex-wrap gap-2">
              {suggestedQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestedQuestion(question)}
                  className="text-xs px-3 py-1.5 rounded-full bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <div className="p-4 border-t border-border bg-background">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about properties..."
              className="flex-1 px-4 py-2.5 bg-muted rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-muted-foreground"
            />
            <Button 
              size="icon" 
              onClick={handleSend}
              disabled={!inputValue.trim()}
              className="rounded-xl"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AISupportChat;
