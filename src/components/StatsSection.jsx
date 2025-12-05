import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Users, TrendingUp, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

const StatsSection = () => {
    const [totalMembers, setTotalMembers] = useState(0);
    const [batchData, setBatchData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                setLoading(true);
                // Fetch all members to calculate stats
                // Note: For very large datasets, we should use RPC or separate count queries,
                // but for a community list this is fine for now.
                const { data, error } = await supabase
                    .from('members')
                    .select('batch');

                if (error) throw error;

                // 1. Calculate Total Members
                setTotalMembers(data.length);

                // 2. Process Batch Data
                const batchCounts = data.reduce((acc, curr) => {
                    const batch = curr.batch || 'Unknown';
                    acc[batch] = (acc[batch] || 0) + 1;
                    return acc;
                }, {});

                // Convert to array for Recharts and sort by batch name
                const chartData = Object.keys(batchCounts)
                    .map(key => ({
                        name: key,
                        count: batchCounts[key]
                    }))
                    .sort((a, b) => a.name.localeCompare(b.name)); // Sort alphabetically/numerically

                setBatchData(chartData);

            } catch (err) {
                console.error("Error fetching stats:", err);
                setError("Gagal memuat data statistik.");
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, []);

    // Custom Tooltip for Recharts
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-white dark:bg-slate-800 p-3 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg">
                    <p className="font-bold text-slate-900 dark:text-white">{label}</p>
                    <p className="text-blue-600 dark:text-blue-400">
                        {payload[0].value} Member
                    </p>
                </div>
            );
        }
        return null;
    };

    return (
        <section className="py-12 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800 transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 flex items-center justify-center gap-3">
                        <TrendingUp className="text-blue-600" /> Live Community Stats
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400">
                        Pantau pertumbuhan komunitas SaDaCom secara real-time.
                    </p>
                </div>

                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <Loader2 className="animate-spin text-blue-600" size={48} />
                    </div>
                ) : error ? (
                    <div className="text-center text-red-500 bg-red-100 dark:bg-red-900/20 p-4 rounded-lg">
                        {error}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Total Members Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 flex flex-col items-center justify-center text-center lg:col-span-1"
                        >
                            <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6">
                                <Users size={40} />
                            </div>
                            <h3 className="text-lg font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                                Total Member
                            </h3>
                            <div className="text-6xl font-extrabold text-slate-900 dark:text-white">
                                {totalMembers}
                            </div>
                            <p className="text-sm text-slate-400 mt-4">
                                Data terupdate secara real-time
                            </p>
                        </motion.div>

                        {/* Batch Distribution Chart */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 lg:col-span-2 min-h-[400px]"
                        >
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 pl-4 border-l-4 border-blue-500">
                                Sebaran Member per Angkatan
                            </h3>
                            <div className="h-[300px] w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart
                                        data={batchData}
                                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.2} vertical={false} />
                                        <XAxis
                                            dataKey="name"
                                            stroke="#64748b"
                                            tick={{ fill: '#64748b' }}
                                            axisLine={false}
                                            tickLine={false}
                                        />
                                        <YAxis
                                            stroke="#64748b"
                                            tick={{ fill: '#64748b' }}
                                            axisLine={false}
                                            tickLine={false}
                                        />
                                        <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} />
                                        <Bar dataKey="count" radius={[4, 4, 0, 0]}>
                                            {batchData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#3b82f6' : '#06b6d4'} />
                                            ))}
                                        </Bar>
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </motion.div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default StatsSection;
