package com.lftechnology.vyaguta.resource.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import javax.inject.Inject;

import com.lftechnology.vyaguta.commons.util.MultivaluedMap;
import com.lftechnology.vyaguta.resource.dao.DashboardDao;
import com.lftechnology.vyaguta.resource.entity.Contract;
import com.lftechnology.vyaguta.resource.entity.Project;
import com.lftechnology.vyaguta.resource.service.DashBoardService;

public class DashboardServiceImpl implements DashBoardService {

    @Inject
    private DashboardDao dashboardDao;

    @Override
    public List<Project> list(MultivaluedMap<String, String> queryParameter) {
        if (queryParameter.containsKey("contract.endDate")) {
            String parameter = queryParameter.getFirst("contract.endDate").replaceFirst("btn", "");
            String dates[] = parameter.split("and");
            List<Contract> contracts = dashboardDao.list(dates);
            List<Project> projects = contracts.stream().map(p -> p.getProject()).distinct()
                    .collect(Collectors.toList());
            return projects;
        }
        return null;
    }

}
