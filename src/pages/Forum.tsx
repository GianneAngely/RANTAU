import { motion } from "framer-motion";
import { MessageSquare, Heart, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { forumPosts } from "@/data/mockData";
import { useState } from "react";

export default function Forum() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = Array.from(
    new Set(forumPosts.flatMap(post => post.tags))
  );

  const filteredPosts = selectedTag
    ? forumPosts.filter(post => post.tags.includes(selectedTag))
    : forumPosts;

  return (
    <div className="min-h-screen pb-24 bg-background">
      <div className="bg-primary text-white p-6">
        <h1 className="text-3xl font-heading font-bold text-center">Forum Perantau</h1>
        <p className="text-center text-white/90 mt-2">Berbagi cerita, tips, dan dukungan</p>
      </div>

      <div className="max-w-4xl mx-auto p-4 space-y-6">
        {/* New Post Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Button 
            className="w-full gradient-primary text-white font-bold py-6 shadow-hover"
            size="lg"
          >
            <Plus className="w-5 h-5 mr-2" />
            Buat Postingan Baru
          </Button>
        </motion.div>

        {/* Tags Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="p-4">
            <p className="text-sm font-semibold text-muted-foreground mb-3">
              Filter berdasarkan tag:
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge
                className={`cursor-pointer transition-smooth ${
                  selectedTag === null ? "bg-primary text-white" : "bg-accent hover:bg-primary hover:text-white"
                }`}
                onClick={() => setSelectedTag(null)}
              >
                Semua
              </Badge>
              {allTags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className={`cursor-pointer transition-smooth ${
                    selectedTag === tag ? "bg-primary text-white border-primary" : "hover:bg-accent"
                  }`}
                  onClick={() => setSelectedTag(tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Posts Feed */}
        <div className="space-y-4">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="p-5 hover:shadow-hover transition-smooth">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-heading font-bold text-lg mb-1">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {post.author} • {post.campus}
                    </p>
                  </div>
                </div>

                <p className="text-foreground mb-4 leading-relaxed">
                  {post.content}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <button className="flex items-center gap-2 hover:text-primary transition-smooth">
                    <Heart className="w-4 h-4" />
                    <span>{post.likes}</span>
                  </button>
                  <button className="flex items-center gap-2 hover:text-primary transition-smooth">
                    <MessageSquare className="w-4 h-4" />
                    <span>{post.comments} komentar</span>
                  </button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Footer Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center py-8"
        >
          <p className="text-muted-foreground italic">
            Di rantau kita mungkin sendiri, tapi nggak harus kesepian 💬
          </p>
        </motion.div>
      </div>
    </div>
  );
}
