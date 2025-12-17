import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    Cell
} from 'recharts';
import { Users, TrendingUp, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

const StatsSection = () => {
    const [stats, setStats] = useState({ totalMembers: 0, batchDistribution: [] });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                // Fetch total members
                const { count, error: countError } = await supabase
                    .from('members')
                    .select('*', { count: 'exact', head: true });

                if (countError) throw countError;

                // Fetch batch distribution
                const { data: batchData, error: batchError } = await supabase
                    .from('members')
                    .select('batch');

                if (batchError) throw batchError;

                // Process batch data
                const distribution = batchData.reduce((acc, curr) => {
                    const batch = curr.batch || 'Unknown';
                    acc[batch] = (acc[batch] || 0) + 1;
                    return acc;
                }, {});

                const chartData = Object.entries(distribution)
                    .map(([name, value]) => ({ name: `Batch ${name}`, value }))
                    .sort((a, b) => a.name.localeCompare(b.name));

                setStats({
                    totalMembers: count,
                    batchDistribution: chartData
                });
            } catch (error) {
                console.error('Error fetching stats:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, []);

    const COLORS = ['#3b82f6', '#06b6d4', '#8b5cf6', '#ec4899'];

    if (loading) {
        return (
            <div className="flex justify-center items-center py-20 bg-slate-50 dark:bg-slate-950">
                <Loader2 className="animate-spin text-blue-500" size={32} />
            </div>
        );
    }

    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors relative overflow-hidden">

            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold mb-4 uppercase tracking-wider border border-blue-200 dark:border-blue-800"
                    >
                        <TrendingUp size={14} /> Growth
                    </motion.div>
                    <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">Community Stats</h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                        Pertumbuhan komunitas kami secara real-time.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Total Members Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ y: -5 }}
                        className="bg-white dark:bg-slate-800 p-10 rounded-[2.5rem] shadow-xl shadow-blue-500/5 dark:shadow-none border border-slate-100 dark:border-slate-700 relative overflow-hidden group"
                    >
                        {/* Card Reflection */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-bl-full transform translate-x-12 -translate-y-12 transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0"></div>

                        <div className="flex items-center gap-6 mb-6 relative z-10">
                            <div className="p-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl text-white shadow-lg shadow-blue-500/30">
                                <Users size={32} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Total Members</h3>
                                <div className="text-6xl sm:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 font-mono tracking-tighter">
                                    {stats.totalMembers}
                                </div>
                            </div>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed relative z-10">
                            Mahasiswa aktif yang telah bergabung dan belajar bersama di Sains Data Community.
                        </p>
                    </motion.div>

                    {/* Chart Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-white dark:bg-slate-800 p-8 rounded-[2.5rem] shadow-xl shadow-blue-500/5 dark:shadow-none border border-slate-100 dark:border-slate-700 h-[400px] flex flex-col relative overflow-hidden"
                    >
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                            <span className="w-2 h-6 bg-cyan-500 rounded-full"></span>
                            Distribusi Batch
                        </h3>
                        <div className="flex-grow w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={stats.batchDistribution}>
                                    <XAxis
                                        dataKey="name"
                                        stroke="#94a3b8"
                                        fontSize={12}
                                        tickLine={false}
                                        axisLine={false}
                                        dy={10}
                                    />
                                    <YAxis
                                        stroke="#94a3b8"
                                        fontSize={12}
                                        tickLine={false}
                                        axisLine={false}
                                        dx={-10}
                                    />
                                    <Tooltip
                                        cursor={{ fill: 'rgba(59, 130, 246, 0.1)' }}
                                        contentStyle={{
                                            backgroundColor: 'rgba(15, 23, 42, 0.9)',
                                            color: '#fff',
                                            borderRadius: '12px',
                                            border: 'none',
                                            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                                        }}
                                        itemStyle={{ color: '#fff' }}
                                    />
                                    <Bar dataKey="value" radius={[6, 6, 0, 0]} animationDuration={1500}>
                                        {stats.batchDistribution.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
